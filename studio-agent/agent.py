#!/usr/bin/env python3
"""
AI Design Studio Agent — Autonomous Digital Design Director
=============================================================
Usage:
  python agent.py                    # Start interactive session
  python agent.py --new "Mon App"    # Create new project and start
  python agent.py --project <id>     # Load existing project
  python agent.py --list             # List all projects
"""

from __future__ import annotations

import os
import sys
import argparse
from pathlib import Path

from dotenv import load_dotenv
from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from rich.prompt import Prompt
from rich.markdown import Markdown

# Load environment variables
load_dotenv(Path(__file__).parent / ".env")

from core.agent_loop import DesignStudioAgent
from core import memory as mem

console = Console()

BANNER = """
╔══════════════════════════════════════════════════════════════════╗
║          AI DESIGN STUDIO AGENT — Autonomous Design Director     ║
║                                                                  ║
║  15 couches actives :                                            ║
║  ✅ Project Memory  ✅ 12 Phases      ✅ Design Review Board      ║
║  ✅ Inspiration     ✅ Trend Predict  ✅ Tech Radar               ║
║  ✅ AI Orchestrate  ✅ UX Psychology  ✅ Innovation Engine        ║
║  ✅ Prompt Engine   ✅ Quality Score  ✅ Mentor Mode              ║
║  ✅ Documentation   ✅ Constraints    ✅ Improvement Loop         ║
╚══════════════════════════════════════════════════════════════════╝
"""

HELP_TEXT = """
**Commandes spéciales** :

- `/new [nom]` — Créer un nouveau projet
- `/load [id]` — Charger un projet existant
- `/list` — Lister tous les projets
- `/phase` — Voir la phase actuelle et avancer
- `/memory` — Afficher la mémoire du projet
- `/quality` — Évaluer le score qualité actuel
- `/prompts` — Générer les prompts pour les outils IA
- `/docs [type]` — Générer de la documentation
- `/board [sujet]` — Simuler une session du Design Review Board
- `/trends` — Voir les tendances du moment
- `/tech` — Voir le Technology Radar
- `/tools [tâche]` — Recommander des outils IA pour une tâche
- `/help` — Afficher cette aide
- `/quit` — Quitter

**Exemples de messages** :
- "Je veux créer une app fintech pour millennials"
- "Quelle direction artistique pour mon SaaS B2B ?"
- "Génère un prompt Midjourney pour le hero de mon site"
- "Passe en revue ce concept avec le Design Review Board"
- "Quelles tendances sont pertinentes pour mon projet ?"
"""


def show_status(agent: DesignStudioAgent) -> None:
    if not agent.project:
        console.print("[yellow]Aucun projet actif.[/yellow]")
        return

    project = agent.project
    phase_order = [
        "discovery", "research", "ideation", "validation",
        "ux", "ui", "motion", "3d", "prototype",
        "technical_planning", "production", "optimization"
    ]
    completed = sum(
        1 for p in phase_order
        if project.get("phases", {}).get(p, {}).get("status") == "completed"
    )

    latest_quality = project.get("quality_history", [])
    quality_str = f"{latest_quality[-1].get('overall', '?')}/100" if latest_quality else "Non évalué"

    console.print(Panel(
        f"[bold]{project['name']}[/bold]\n"
        f"Phase : [cyan]{project['current_phase'].replace('_', ' ').upper()}[/cyan] "
        f"({completed}/12 terminées)\n"
        f"Score qualité : [green]{quality_str}[/green]\n"
        f"ID : [dim]{project['id']}[/dim]",
        title="Projet actif",
        border_style="blue",
    ))


def handle_special_command(cmd: str, agent: DesignStudioAgent) -> bool:
    """Handle /commands. Returns True if command was handled."""
    parts = cmd.strip().split(None, 1)
    command = parts[0].lower()
    args = parts[1] if len(parts) > 1 else ""

    if command == "/help":
        console.print(Markdown(HELP_TEXT))
        return True

    if command == "/quit" or command == "/exit":
        console.print("[yellow]Au revoir ! Votre projet a été sauvegardé.[/yellow]")
        sys.exit(0)

    if command == "/list":
        projects = mem.list_projects()
        if not projects:
            console.print("[yellow]Aucun projet trouvé.[/yellow]")
        else:
            table = Table(title="Projets existants")
            table.add_column("ID", style="dim")
            table.add_column("Nom", style="bold")
            table.add_column("Phase")
            table.add_column("Dernière MàJ")
            for p in projects:
                table.add_row(
                    p["id"], p["name"],
                    p["current_phase"].replace("_", " ").upper(),
                    p["updated_at"][:10],
                )
            console.print(table)
        return True

    if command == "/new":
        name = args or Prompt.ask("Nom du projet")
        agent.start_project(name)
        console.print(f"[green]✅ Projet '{name}' créé. L'agent commence la phase DISCOVERY.[/green]")
        agent.stream_chat(
            f"Je viens de créer le projet '{name}'. Lance la phase Discovery : "
            f"aide-moi à définir la vision, les objectifs et le contexte du projet. "
            f"Pose-moi les questions essentielles pour comprendre le problème en profondeur."
        )
        return True

    if command == "/load":
        project_id = args
        if not project_id:
            project_id = Prompt.ask("ID du projet à charger")
        if agent.load_project(project_id):
            show_status(agent)
            console.print(f"[green]✅ Projet chargé.[/green]")
        else:
            console.print(f"[red]❌ Projet '{project_id}' introuvable.[/red]")
        return True

    if command == "/memory":
        if not agent.project:
            console.print("[yellow]Aucun projet actif.[/yellow]")
        else:
            from core.memory import generate_ai_context
            ctx = generate_ai_context(agent.project)
            console.print(Panel(ctx, title="Mémoire Projet", border_style="purple"))
        return True

    if command == "/phase":
        agent.stream_chat(
            "Montre-moi un résumé de la phase actuelle : ce qui a été accompli, "
            "les livrables produits, et si nous sommes prêts à passer à la phase suivante. "
            "Si oui, notifie-moi et avance la phase."
        )
        return True

    if command == "/quality":
        agent.stream_chat(
            "Évalue le score qualité actuel du projet sur les 10 dimensions. "
            "Identifie les dimensions < 90/100 et propose des améliorations concrètes."
        )
        return True

    if command == "/prompts":
        agent.stream_chat(
            "Génère les meilleurs prompts pour les outils IA les plus pertinents à la phase actuelle du projet. "
            "Inclure au moins un prompt pour Midjourney/Flux, un pour Figma AI, et un pour GPT/Claude."
        )
        return True

    if command == "/docs":
        doc_type = args or "brief"
        agent.stream_chat(
            f"Génère un document '{doc_type}' complet pour le projet en te basant sur la mémoire actuelle. "
            f"Sauvegarde-le avec l'outil docs_create."
        )
        return True

    if command == "/board":
        topic = args or "la direction actuelle du projet"
        agent.stream_chat(
            f"Simule une session complète du Design Review Board sur : {topic}. "
            f"Donne l'avis de chacun des 10 experts, puis la décision finale consolidée."
        )
        return True

    if command == "/trends":
        agent.stream_chat(
            "Analyse les tendances design/tech les plus pertinentes pour ce projet, "
            "en incluant les tendances sur 12 et 36 mois. "
            "Indique lesquelles intégrer maintenant pour être en avance."
        )
        return True

    if command == "/tech":
        agent.stream_chat(
            "Présente le Technology Radar adapté à ce projet. "
            "Recommande la stack optimale en tenant compte de la phase actuelle et des contraintes."
        )
        return True

    if command == "/tools":
        task = args or "toutes les tâches de la phase actuelle"
        agent.stream_chat(
            f"Recommande les meilleurs outils IA pour : {task}. "
            f"Génère un prompt prêt à l'emploi pour chaque outil recommandé."
        )
        return True

    return False


def main() -> None:
    parser = argparse.ArgumentParser(description="AI Design Studio Agent")
    parser.add_argument("--new", metavar="NAME", help="Créer un nouveau projet")
    parser.add_argument("--project", metavar="ID", help="Charger un projet existant")
    parser.add_argument("--list", action="store_true", help="Lister les projets")
    args = parser.parse_args()

    console.print(BANNER, style="bold cyan")

    # Check API key
    if not os.getenv("ANTHROPIC_API_KEY"):
        console.print(
            "[red]❌ ANTHROPIC_API_KEY manquant.[/red]\n"
            "Créez un fichier .env avec :\n"
            "  ANTHROPIC_API_KEY=sk-ant-...",
        )
        sys.exit(1)

    try:
        agent = DesignStudioAgent()
    except ValueError as e:
        console.print(f"[red]❌ {e}[/red]")
        sys.exit(1)

    # Handle CLI arguments
    if args.list:
        projects = mem.list_projects()
        if not projects:
            console.print("[yellow]Aucun projet.[/yellow]")
        else:
            for p in projects:
                console.print(f"[bold]{p['name']}[/bold] (ID: {p['id']}) — {p['current_phase']}")
        sys.exit(0)

    if args.new:
        agent.start_project(args.new)
        console.print(f"[green]✅ Projet '{args.new}' créé.[/green]")

    elif args.project:
        if not agent.load_project(args.project):
            console.print(f"[red]❌ Projet '{args.project}' introuvable.[/red]")
            sys.exit(1)

    # Show current status
    show_status(agent)

    # If no project, prompt to create one
    if not agent.project:
        console.print(
            "\n[yellow]Aucun projet actif.[/yellow] "
            "Tapez `/new [nom]` pour créer un projet, ou `/list` pour voir les projets existants.\n"
        )

    console.print(
        "[dim]Tapez /help pour la liste des commandes. "
        "Appuyez sur Entrée pour envoyer un message.[/dim]\n"
    )

    # Main interaction loop
    while True:
        try:
            user_input = Prompt.ask("\n[bold blue]Vous[/bold blue]").strip()

            if not user_input:
                continue

            if user_input.startswith("/"):
                if not handle_special_command(user_input, agent):
                    console.print(f"[yellow]Commande inconnue: {user_input}. Tapez /help.[/yellow]")
                continue

            # Regular message — send to agent
            if not agent.project:
                # Auto-create project or ask
                project_name = Prompt.ask(
                    "Aucun projet actif. Nom du projet à créer",
                    default="Mon Projet Design"
                )
                agent.start_project(project_name)

            agent.stream_chat(user_input)

        except KeyboardInterrupt:
            console.print("\n[yellow]Session interrompue. À bientôt ![/yellow]")
            break
        except EOFError:
            break


if __name__ == "__main__":
    main()
