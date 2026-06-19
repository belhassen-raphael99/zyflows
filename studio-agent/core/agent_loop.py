"""Main autonomous agent loop for the AI Design Studio."""

from __future__ import annotations

import json
import os
from pathlib import Path
from typing import Any, Generator

import anthropic
from rich.console import Console
from rich.markdown import Markdown
from rich.panel import Panel
from rich.prompt import Prompt

from . import memory as mem
from .tools import TOOL_DEFINITIONS

console = Console()

MODEL = "claude-sonnet-4-6"
MAX_TOKENS = 8192
SYSTEM_PROMPT_PATH = Path(__file__).parent.parent / "system_prompt.md"


def _load_system_prompt() -> str:
    return SYSTEM_PROMPT_PATH.read_text(encoding="utf-8")


def _execute_tool(tool_name: str, tool_input: dict[str, Any], project: dict[str, Any] | None) -> str:
    """Execute a tool call and return the result as a string."""

    # ── Memory tools ──────────────────────────────────────────────────────────
    if tool_name == "memory_read":
        pid = tool_input.get("project_id")
        if pid:
            p = mem.load_project(pid)
        else:
            p = mem.load_active_project()
        if not p:
            return "Aucun projet actif. Utilise memory_create_project pour commencer."
        return mem.generate_ai_context(p)

    if tool_name == "memory_update":
        if not project:
            return "Erreur: aucun projet actif."
        field = tool_input["field"]
        value = tool_input["value"]
        mode = tool_input.get("mode", "replace")
        if mode == "append" and isinstance(project.get(field), list):
            if isinstance(value, list):
                project[field].extend(value)
            else:
                project[field].append(value)
            mem.save_project(project)
        else:
            project = mem.update_field(project, field, value)
        return f"✅ Champ `{field}` mis à jour."

    if tool_name == "memory_add_decision":
        if not project:
            return "Erreur: aucun projet actif."
        project = mem.add_decision(
            project,
            tool_input["decision"],
            tool_input["rationale"],
            tool_input.get("category", "design"),
            tool_input.get("alternatives"),
        )
        return f"✅ Décision enregistrée: {tool_input['decision']}"

    if tool_name == "memory_reject_decision":
        if not project:
            return "Erreur: aucun projet actif."
        project = mem.reject_decision(
            project,
            tool_input["decision"],
            tool_input["reason"],
            tool_input.get("category", "design"),
        )
        return f"✅ Décision rejetée enregistrée: {tool_input['decision']}"

    if tool_name == "memory_add_inspiration":
        if not project:
            return "Erreur: aucun projet actif."
        project = mem.add_inspiration(
            project,
            tool_input["title"],
            tool_input["category"],
            tool_input["style"],
            tool_input["why_relevant"],
            tool_input.get("elements", []),
            tool_input.get("url", ""),
        )
        return f"✅ Inspiration ajoutée: {tool_input['title']}"

    if tool_name == "memory_add_quality_score":
        if not project:
            return "Erreur: aucun projet actif."
        project = mem.add_quality_score(project, tool_input)
        return f"✅ Score qualité enregistré: {tool_input.get('overall', '?')}/100"

    if tool_name == "memory_advance_phase":
        if not project:
            return "Erreur: aucun projet actif."
        project, next_phase = mem.advance_phase(project)
        return f"✅ Phase avancée vers: {next_phase.replace('_', ' ').upper()}"

    if tool_name == "memory_create_project":
        name = tool_input["name"]
        new_project = mem.create_project(name)
        return f"✅ Projet créé: {name} (ID: {new_project['id']})"

    if tool_name == "memory_list_projects":
        projects = mem.list_projects()
        if not projects:
            return "Aucun projet existant."
        lines = ["Projets existants:"]
        for p in projects:
            lines.append(f"  - {p['name']} (ID: {p['id']}) — Phase: {p['current_phase']}")
        return "\n".join(lines)

    # ── Web search ────────────────────────────────────────────────────────────
    if tool_name == "web_search":
        return _web_search(tool_input["query"], tool_input.get("max_results", 5))

    # ── Figma ─────────────────────────────────────────────────────────────────
    if tool_name == "figma_get_design":
        return _figma_get_design(tool_input["figma_url"], tool_input.get("node_id"))

    if tool_name == "figma_create_design":
        return _figma_create_design(
            tool_input["intent"],
            tool_input.get("figma_url"),
            tool_input.get("component_type", "frame"),
        )

    if tool_name == "figma_screenshot":
        return _figma_screenshot(tool_input["figma_url"], tool_input.get("node_id"))

    # ── Documentation ─────────────────────────────────────────────────────────
    if tool_name == "docs_create":
        return _docs_create(
            tool_input["doc_type"],
            tool_input["title"],
            tool_input["content"],
            tool_input.get("destination", "local"),
            project,
        )

    # ── Notifications ─────────────────────────────────────────────────────────
    if tool_name == "notify_human":
        return _notify_human(
            tool_input["message"],
            tool_input.get("notification_type", "info"),
            tool_input.get("requires_response", False),
        )

    return f"Outil inconnu: {tool_name}"


def _web_search(query: str, max_results: int = 5) -> str:
    api_key = os.getenv("TAVILY_API_KEY")
    if not api_key:
        return (
            f"[Recherche web simulée]\n"
            f"Requête: {query}\n"
            f"Note: Configurer TAVILY_API_KEY pour les recherches réelles."
        )
    try:
        from tavily import TavilyClient
        client = TavilyClient(api_key=api_key)
        results = client.search(query=query, max_results=max_results)
        lines = [f"Résultats pour: {query}\n"]
        for r in results.get("results", []):
            lines.append(f"**{r.get('title', '')}**")
            lines.append(f"URL: {r.get('url', '')}")
            lines.append(f"{r.get('content', '')[:300]}...\n")
        return "\n".join(lines)
    except Exception as e:
        return f"Erreur de recherche: {e}"


def _figma_get_design(figma_url: str, node_id: str | None = None) -> str:
    api_key = os.getenv("FIGMA_API_KEY")
    if not api_key:
        return (
            f"[Figma — mode simulation]\n"
            f"URL: {figma_url}\n"
            f"Configurer FIGMA_API_KEY pour accéder aux designs réels.\n"
            f"Les outils MCP Figma sont disponibles dans l'environnement Claude Code."
        )
    try:
        import httpx
        file_key = figma_url.split("/")[-2] if "/file/" in figma_url else figma_url.split("/")[-1]
        params = {"ids": node_id} if node_id else {}
        resp = httpx.get(
            f"https://api.figma.com/v1/files/{file_key}",
            headers={"X-Figma-Token": api_key},
            params=params,
            timeout=30,
        )
        data = resp.json()
        name = data.get("name", "Fichier inconnu")
        return f"Fichier Figma: {name}\nClé: {file_key}\nStatut: {resp.status_code}"
    except Exception as e:
        return f"Erreur Figma: {e}"


def _figma_create_design(intent: str, figma_url: str | None, component_type: str) -> str:
    return (
        f"[FIGMA CREATE — {component_type.upper()}]\n"
        f"Intent: {intent}\n"
        f"{'URL cible: ' + figma_url if figma_url else 'Nouveau fichier'}\n\n"
        f"Pour créer ce design, utilise le MCP Figma directement dans Claude Code "
        f"avec l'outil `mcp__Figma__use_figma` ou `mcp__Figma__generate_diagram`.\n"
        f"Intent structuré enregistré dans la mémoire projet."
    )


def _figma_screenshot(figma_url: str, node_id: str | None) -> str:
    return (
        f"[FIGMA SCREENSHOT]\n"
        f"URL: {figma_url}\n"
        f"Nœud: {node_id or 'Tous'}\n"
        f"Pour capturer un screenshot, utilise `mcp__Figma__get_screenshot` dans Claude Code."
    )


def _docs_create(doc_type: str, title: str, content: str,
                 destination: str, project: dict[str, Any] | None) -> str:
    docs_dir = Path(__file__).parent.parent / "projects" / "docs"
    docs_dir.mkdir(exist_ok=True)

    safe_title = title.replace(" ", "_").replace("/", "-")[:50]
    filename = f"{doc_type}_{safe_title}.md"
    file_path = docs_dir / filename
    file_path.write_text(content, encoding="utf-8")

    if project:
        doc_entry = {"type": doc_type, "title": title, "file": filename, "destination": destination}
        project.setdefault("documents", []).append(doc_entry)
        mem.save_project(project)

    result = f"✅ Document créé: {filename}\nChemin: {file_path}"

    if destination == "notion":
        notion_key = os.getenv("NOTION_API_KEY")
        if not notion_key:
            result += "\nNote: NOTION_API_KEY non configuré — sauvegardé localement."

    return result


def _notify_human(message: str, notification_type: str, requires_response: bool) -> str:
    type_icons = {
        "info": "ℹ️",
        "decision": "🔶",
        "warning": "⚠️",
        "phase-change": "🚀",
        "confirmation-required": "❓",
    }
    icon = type_icons.get(notification_type, "📢")
    console.print(Panel(
        f"{icon} [bold]{message}[/bold]",
        title=f"[yellow]NOTIFICATION HUMAINE — {notification_type.upper()}[/yellow]",
        border_style="yellow",
    ))
    if requires_response:
        response = Prompt.ask("Votre réponse (ou Entrée pour continuer)")
        return f"Réponse humaine: {response or '(aucune réponse)'}"
    return f"Notification envoyée: {message}"


# ─── Main agent loop ──────────────────────────────────────────────────────────

class DesignStudioAgent:
    def __init__(self) -> None:
        api_key = os.getenv("ANTHROPIC_API_KEY")
        if not api_key:
            raise ValueError("ANTHROPIC_API_KEY est requis. Configurez le fichier .env")
        self.client = anthropic.Anthropic(api_key=api_key)
        self.system_prompt = _load_system_prompt()
        self.conversation_history: list[dict[str, Any]] = []
        self.project: dict[str, Any] | None = mem.load_active_project()

    def _run_turn(self, user_message: str) -> Generator[str, None, None]:
        """Run one turn of the agent, yielding text chunks."""
        self.conversation_history.append({"role": "user", "content": user_message})

        while True:
            response = self.client.messages.create(
                model=MODEL,
                max_tokens=MAX_TOKENS,
                system=self.system_prompt,
                tools=TOOL_DEFINITIONS,
                messages=self.conversation_history,
            )

            # Accumulate assistant content
            assistant_content = []
            text_output = ""

            for block in response.content:
                if block.type == "text":
                    text_output += block.text
                    assistant_content.append({"type": "text", "text": block.text})
                elif block.type == "tool_use":
                    assistant_content.append({
                        "type": "tool_use",
                        "id": block.id,
                        "name": block.name,
                        "input": block.input,
                    })

            self.conversation_history.append({"role": "assistant", "content": assistant_content})

            if text_output:
                yield text_output

            # If no tool calls, we're done
            if response.stop_reason != "tool_use":
                break

            # Execute tool calls
            tool_results = []
            for block in response.content:
                if block.type != "tool_use":
                    continue

                console.print(f"\n[dim]🔧 Outil: {block.name}[/dim]")
                result = _execute_tool(block.name, block.input, self.project)

                # Reload project after memory operations
                if block.name.startswith("memory_") or block.name == "notify_human":
                    self.project = mem.load_active_project()

                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": result,
                })

            self.conversation_history.append({"role": "user", "content": tool_results})

    def chat(self, user_message: str) -> str:
        """Send a message and get the full response."""
        full_response = ""
        for chunk in self._run_turn(user_message):
            full_response += chunk
        return full_response

    def stream_chat(self, user_message: str) -> None:
        """Stream the agent response to console."""
        console.print("\n[bold cyan]Agent:[/bold cyan]")
        full_response = ""
        for chunk in self._run_turn(user_message):
            full_response += chunk

        console.print(Markdown(full_response))
        console.print()

    def start_project(self, project_name: str) -> None:
        """Initialize a new design project."""
        self.project = mem.create_project(project_name)
        console.print(Panel(
            f"[bold green]✅ Nouveau projet créé: {project_name}[/bold green]\n"
            f"ID: {self.project['id']}\n"
            f"Phase: DISCOVERY",
            title="AI Design Studio",
            border_style="green",
        ))

    def load_project(self, project_id: str) -> bool:
        """Load an existing project."""
        p = mem.load_project(project_id)
        if not p:
            return False
        self.project = p
        mem.set_active_project(project_id)
        return True

    @property
    def current_project_name(self) -> str:
        return self.project["name"] if self.project else "Aucun projet"

    @property
    def current_phase(self) -> str:
        return self.project["current_phase"].replace("_", " ").upper() if self.project else "N/A"
