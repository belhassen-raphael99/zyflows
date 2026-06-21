"""Project Memory Engine — persists and retrieves all project knowledge."""

from __future__ import annotations

import json
import uuid
from datetime import datetime
from pathlib import Path
from typing import Any

PROJECTS_DIR = Path(__file__).parent.parent / "projects"
PROJECTS_DIR.mkdir(exist_ok=True)


def _now() -> str:
    return datetime.utcnow().isoformat()


def _project_path(project_id: str) -> Path:
    return PROJECTS_DIR / f"{project_id}.json"


# ─── Default structure ────────────────────────────────────────────────────────

def _empty_project(name: str) -> dict[str, Any]:
    project_id = str(uuid.uuid4())[:8]
    now = _now()
    return {
        "id": project_id,
        "name": name,
        "created_at": now,
        "updated_at": now,
        "current_phase": "discovery",
        "phases": {
            "discovery": {"status": "active", "started_at": now},
            "research": {"status": "pending"},
            "ideation": {"status": "pending"},
            "validation": {"status": "pending"},
            "ux": {"status": "pending"},
            "ui": {"status": "pending"},
            "motion": {"status": "pending"},
            "3d": {"status": "pending"},
            "prototype": {"status": "pending"},
            "technical_planning": {"status": "pending"},
            "production": {"status": "pending"},
            "optimization": {"status": "pending"},
        },
        # Identity
        "vision": "",
        "objectives": [],
        "constraints": [],
        "features": [],
        "features_rejected": [],
        "target_audience": "",
        "brand_voice": "",
        "design_principles": [],
        # People
        "personas": [],
        "user_journeys": [],
        # Design
        "color_palette": [],
        "typography": {"primary": "", "secondary": "", "scale": "modular"},
        "animation_library": [],
        "brand_guidelines": {},
        # Decisions
        "decisions_accepted": [],
        "decisions_rejected": [],
        # Inspiration
        "inspirations_accepted": [],
        "inspirations_rejected": [],
        # Technology
        "technologies_selected": [],
        "technologies_rejected": [],
        # AI
        "ai_tools_in_use": [],
        # Roadmap
        "roadmap": [],
        "mvp": {
            "core_features": [],
            "out_of_scope": [],
            "success_criteria": [],
            "timeline": "",
        },
        # Quality
        "quality_history": [],
        # Notes
        "notes": [],
        # Review board sessions
        "review_board_sessions": [],
        # Generated documents
        "documents": [],
    }


# ─── CRUD ─────────────────────────────────────────────────────────────────────

def create_project(name: str) -> dict[str, Any]:
    project = _empty_project(name)
    path = _project_path(project["id"])
    path.write_text(json.dumps(project, ensure_ascii=False, indent=2))
    _set_active_project(project["id"])
    return project


def load_project(project_id: str) -> dict[str, Any] | None:
    path = _project_path(project_id)
    if not path.exists():
        return None
    return json.loads(path.read_text())


def save_project(project: dict[str, Any]) -> None:
    project["updated_at"] = _now()
    path = _project_path(project["id"])
    path.write_text(json.dumps(project, ensure_ascii=False, indent=2))


def list_projects() -> list[dict[str, Any]]:
    projects = []
    for p in PROJECTS_DIR.glob("*.json"):
        if p.stem == "_active":
            continue
        try:
            data = json.loads(p.read_text())
            projects.append({
                "id": data["id"],
                "name": data["name"],
                "current_phase": data["current_phase"],
                "updated_at": data["updated_at"],
            })
        except Exception:
            pass
    return sorted(projects, key=lambda x: x["updated_at"], reverse=True)


def delete_project(project_id: str) -> bool:
    path = _project_path(project_id)
    if path.exists():
        path.unlink()
        if get_active_project_id() == project_id:
            _clear_active_project()
        return True
    return False


# ─── Active project management ────────────────────────────────────────────────

_ACTIVE_FILE = PROJECTS_DIR / "_active.txt"


def _set_active_project(project_id: str) -> None:
    _ACTIVE_FILE.write_text(project_id)


def _clear_active_project() -> None:
    if _ACTIVE_FILE.exists():
        _ACTIVE_FILE.unlink()


def get_active_project_id() -> str | None:
    if _ACTIVE_FILE.exists():
        return _ACTIVE_FILE.read_text().strip() or None
    return None


def load_active_project() -> dict[str, Any] | None:
    pid = get_active_project_id()
    return load_project(pid) if pid else None


def set_active_project(project_id: str) -> None:
    _set_active_project(project_id)


# ─── Update helpers ───────────────────────────────────────────────────────────

def update_field(project: dict[str, Any], field: str, value: Any) -> dict[str, Any]:
    project[field] = value
    save_project(project)
    return project


def add_decision(project: dict[str, Any], decision: str, rationale: str,
                 category: str = "design", alternatives: list[str] | None = None) -> dict[str, Any]:
    entry = {
        "id": str(uuid.uuid4())[:8],
        "date": _now(),
        "category": category,
        "decision": decision,
        "rationale": rationale,
        "alternatives": alternatives or [],
    }
    project["decisions_accepted"].append(entry)
    save_project(project)
    return project


def reject_decision(project: dict[str, Any], decision: str, reason: str,
                    category: str = "design") -> dict[str, Any]:
    entry = {
        "id": str(uuid.uuid4())[:8],
        "date": _now(),
        "category": category,
        "decision": decision,
        "rejected_reason": reason,
    }
    project["decisions_rejected"].append(entry)
    save_project(project)
    return project


def add_inspiration(project: dict[str, Any], title: str, category: str,
                    style: str, why_relevant: str, elements: list[str],
                    url: str = "") -> dict[str, Any]:
    entry = {
        "id": str(uuid.uuid4())[:8],
        "added_at": _now(),
        "title": title,
        "url": url,
        "category": category,
        "style": style,
        "why_relevant": why_relevant,
        "elements": elements,
    }
    project["inspirations_accepted"].append(entry)
    save_project(project)
    return project


def reject_inspiration(project: dict[str, Any], title: str, reason: str) -> dict[str, Any]:
    entry = {
        "id": str(uuid.uuid4())[:8],
        "date": _now(),
        "title": title,
        "rejected_reason": reason,
    }
    project["inspirations_rejected"].append(entry)
    save_project(project)
    return project


def add_technology(project: dict[str, Any], name: str, category: str,
                   rationale: str) -> dict[str, Any]:
    entry = {
        "name": name,
        "category": category,
        "rationale": rationale,
        "added_at": _now(),
    }
    project["technologies_selected"].append(entry)
    save_project(project)
    return project


def reject_technology(project: dict[str, Any], name: str, reason: str) -> dict[str, Any]:
    entry = {
        "name": name,
        "rejected_reason": reason,
        "date": _now(),
    }
    project["technologies_rejected"].append(entry)
    save_project(project)
    return project


def add_persona(project: dict[str, Any], persona: dict[str, Any]) -> dict[str, Any]:
    persona["id"] = str(uuid.uuid4())[:8]
    project["personas"].append(persona)
    save_project(project)
    return project


def add_note(project: dict[str, Any], note: str) -> dict[str, Any]:
    project["notes"].append({"text": note, "date": _now()})
    save_project(project)
    return project


def add_quality_score(project: dict[str, Any], scores: dict[str, int]) -> dict[str, Any]:
    scores["timestamp"] = _now()
    project["quality_history"].append(scores)
    save_project(project)
    return project


def advance_phase(project: dict[str, Any]) -> tuple[dict[str, Any], str]:
    """Advance to next phase. Returns (updated_project, next_phase_name)."""
    phase_order = [
        "discovery", "research", "ideation", "validation",
        "ux", "ui", "motion", "3d", "prototype",
        "technical_planning", "production", "optimization"
    ]
    current = project["current_phase"]
    idx = phase_order.index(current)
    if idx >= len(phase_order) - 1:
        return project, current

    now = _now()
    project["phases"][current]["status"] = "completed"
    project["phases"][current]["completed_at"] = now

    next_phase = phase_order[idx + 1]
    project["phases"][next_phase]["status"] = "active"
    project["phases"][next_phase]["started_at"] = now
    project["current_phase"] = next_phase
    save_project(project)
    return project, next_phase


# ─── AI Context Generator ─────────────────────────────────────────────────────

def generate_ai_context(project: dict[str, Any]) -> str:
    """Generate a concise context string for the AI agent."""
    lines = [
        f"=== PROJET: {project['name']} (ID: {project['id']}) ===",
        f"PHASE ACTUELLE: {project['current_phase'].replace('_', ' ').upper()}",
        f"VISION: {project['vision'] or 'Non définie'}",
        f"PUBLIC CIBLE: {project['target_audience'] or 'Non défini'}",
        f"VOIX DE MARQUE: {project['brand_voice'] or 'Non définie'}",
    ]

    if project["objectives"]:
        lines.append("OBJECTIFS:\n" + "\n".join(f"  - {o}" for o in project["objectives"]))

    if project["features"]:
        lines.append("FONCTIONNALITÉS:\n" + "\n".join(f"  - {f}" for f in project["features"]))

    if project["features_rejected"]:
        lines.append("FONCTIONNALITÉS REJETÉES:\n" + "\n".join(f"  - {f}" for f in project["features_rejected"]))

    if project["constraints"]:
        lines.append("CONTRAINTES:\n" + "\n".join(
            f"  - [{c.get('severity', 'soft').upper()}] {c.get('description', c) if isinstance(c, dict) else c}"
            for c in project["constraints"]
        ))

    if project["decisions_accepted"]:
        recent = project["decisions_accepted"][-5:]
        lines.append("DÉCISIONS PRISES (5 dernières):\n" + "\n".join(
            f"  - {d['decision']} → {d['rationale']}" for d in recent
        ))

    if project["decisions_rejected"]:
        lines.append("DÉCISIONS ABANDONNÉES:\n" + "\n".join(
            f"  - {d['decision']}: {d['rejected_reason']}" for d in project["decisions_rejected"]
        ))

    if project["inspirations_accepted"]:
        lines.append("INSPIRATIONS RETENUES:\n" + "\n".join(
            f"  - {i['title']} ({i['category']}): {i['why_relevant']}" for i in project["inspirations_accepted"]
        ))

    if project["inspirations_rejected"]:
        lines.append("INSPIRATIONS REJETÉES:\n" + "\n".join(
            f"  - {i['title']}: {i['rejected_reason']}" for i in project["inspirations_rejected"]
        ))

    if project["technologies_selected"]:
        lines.append("TECHNOLOGIES CHOISIES:\n" + "\n".join(
            f"  - {t['name']} ({t['category']}): {t['rationale']}" for t in project["technologies_selected"]
        ))

    if project["technologies_rejected"]:
        lines.append("TECHNOLOGIES ÉCARTÉES:\n" + "\n".join(
            f"  - {t['name']}: {t['rejected_reason']}" for t in project["technologies_rejected"]
        ))

    if project["color_palette"]:
        lines.append("PALETTE:\n" + "\n".join(
            f"  - {c['name']} {c['hex']}: {c.get('usage', '')}" for c in project["color_palette"]
        ))

    if project["ai_tools_in_use"]:
        lines.append(f"IA UTILISÉES: {', '.join(project['ai_tools_in_use'])}")

    if project["quality_history"]:
        latest = project["quality_history"][-1]
        score = latest.get("overall", "?")
        lines.append(f"DERNIER SCORE QUALITÉ: {score}/100")

    if project["notes"]:
        recent_notes = project["notes"][-3:]
        lines.append("NOTES RÉCENTES:\n" + "\n".join(
            f"  - {n['text'] if isinstance(n, dict) else n}" for n in recent_notes
        ))

    # Phase progress
    phase_order = [
        "discovery", "research", "ideation", "validation",
        "ux", "ui", "motion", "3d", "prototype",
        "technical_planning", "production", "optimization"
    ]
    completed = sum(1 for p in phase_order if project["phases"].get(p, {}).get("status") == "completed")
    lines.append(f"PROGRESSION: {completed}/12 phases terminées")

    return "\n\n".join(lines)
