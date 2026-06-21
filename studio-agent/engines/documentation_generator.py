"""Documentation Generator — auto-generates all project documentation."""

from __future__ import annotations

from pathlib import Path


def generate_brief(project: dict) -> str:
    name = project.get("name", "Projet")
    vision = project.get("vision", "_Non définie_")
    objectives = "\n".join(f"- {o}" for o in project.get("objectives", [])) or "_Non définis_"
    features = "\n".join(f"- {f}" for f in project.get("features", [])) or "_Non définies_"
    audience = project.get("target_audience", "_Non défini_")
    constraints = "\n".join(
        f"- [{c.get('severity', 'soft').upper()}] {c.get('description', c) if isinstance(c, dict) else c}"
        for c in project.get("constraints", [])
    ) or "_Aucune_"
    decisions = "\n".join(
        f"- {d['decision']} → {d['rationale']}"
        for d in project.get("decisions_accepted", [])
    ) or "_Aucune_"

    return f"""# Cahier des Charges — {name}

> Généré automatiquement par l'AI Design Studio Agent

---

## 1. Vision

{vision}

---

## 2. Objectifs

{objectives}

---

## 3. Public Cible

{audience}

---

## 4. Fonctionnalités

{features}

---

## 5. Contraintes

{constraints}

---

## 6. Décisions Stratégiques

{decisions}

---

## 7. Périmètre MVP

### Dans le scope
{chr(10).join(f"- {f}" for f in project.get("mvp", {}).get("core_features", [])) or "_À définir_"}

### Hors scope
{chr(10).join(f"- {f}" for f in project.get("mvp", {}).get("out_of_scope", [])) or "_À définir_"}

### Critères de succès
{chr(10).join(f"- {c}" for c in project.get("mvp", {}).get("success_criteria", [])) or "_À définir_"}

### Timeline estimée
{project.get("mvp", {}).get("timeline", "_À définir_")}

---

*Document créé le {__import__("datetime").datetime.now().strftime("%d/%m/%Y")}*
"""


def generate_design_tokens(project: dict) -> str:
    palette = project.get("color_palette", [])
    typo = project.get("typography", {})

    colors_json = "{\n" + ",\n".join(
        f'  "{c["name"]}": "{c["hex"]}"'
        for c in palette
    ) + "\n}" if palette else '{\n  "primary": "#6366F1",\n  "secondary": "#8B5CF6"\n}'

    return f"""# Design Tokens — {project.get("name", "Projet")}

## Couleurs

```json
{colors_json}
```

### Utilisation des couleurs
{chr(10).join(f"- `{c['name']}` ({c['hex']}): {c.get('usage', c.get('role', ''))}" for c in palette) or "- À définir"}

---

## Typographie

- Police principale : **{typo.get("primary", "À définir")}**
- Police secondaire : {typo.get("secondary", "_Aucune_")}
- Échelle : {typo.get("scale", "modular")}

### Échelle typographique recommandée (base 16px, ratio 1.25)

| Token | Taille | Usage |
|-------|--------|-------|
| `text-xs` | 12px | Labels, captions |
| `text-sm` | 14px | Corps secondaire, metadata |
| `text-base` | 16px | Corps principal |
| `text-lg` | 20px | Intro, sous-titres |
| `text-xl` | 25px | H3 |
| `text-2xl` | 31px | H2 |
| `text-3xl` | 39px | H1 mobile |
| `text-4xl` | 49px | H1 desktop |
| `text-5xl` | 61px | Display |

---

## Espacement (Base 8)

| Token | Valeur |
|-------|--------|
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-12` | 48px |
| `space-16` | 64px |
| `space-24` | 96px |

---

## Border Radius

| Token | Valeur | Usage |
|-------|--------|-------|
| `rounded-sm` | 4px | Petits éléments |
| `rounded` | 8px | Boutons, inputs |
| `rounded-lg` | 12px | Cards |
| `rounded-xl` | 16px | Modals, panels |
| `rounded-2xl` | 24px | Hero cards |
| `rounded-full` | 9999px | Badges, avatars |

---

## Ombres

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-glow: 0 0 40px hsl(var(--primary) / 0.25);
```

---

## Animations

| Token | Durée | Easing | Usage |
|-------|-------|--------|-------|
| `duration-fast` | 150ms | ease-out | Hover states |
| `duration-base` | 300ms | ease-in-out | Transitions |
| `duration-slow` | 500ms | ease-in-out | Entrées |
| `duration-slower` | 700ms | ease-out | Animations de hero |
| `spring` | — | cubic-bezier(0.34, 1.56, 0.64, 1) | Micro-interactions |

---

*Tokens générés le {__import__("datetime").datetime.now().strftime("%d/%m/%Y")}*
"""


def generate_backlog(project: dict) -> str:
    roadmap = project.get("roadmap", [])
    items_by_phase: dict[str, list] = {}
    for item in roadmap:
        phase = item.get("phase", "backlog")
        items_by_phase.setdefault(phase, []).append(item)

    lines = [f"# Backlog Produit — {project.get('name', 'Projet')}\n"]

    if not roadmap:
        lines.append("_Backlog non encore défini. L'agent le construira phase par phase._")
    else:
        priority_order = {"critical": 0, "high": 1, "medium": 2, "low": 3}
        for phase, items in items_by_phase.items():
            lines.append(f"\n## Phase: {phase.replace('_', ' ').title()}\n")
            sorted_items = sorted(items, key=lambda x: priority_order.get(x.get("priority", "low"), 3))
            for item in sorted_items:
                priority = item.get("priority", "medium")
                status = item.get("status", "planned")
                icons = {"critical": "🔴", "high": "🟠", "medium": "🟡", "low": "🟢"}
                status_icons = {"planned": "📋", "in-progress": "🔄", "completed": "✅", "blocked": "🚫"}
                lines.append(f"{icons.get(priority, '⚪')} {status_icons.get(status, '📋')} **{item.get('title', '')}**")
                if item.get("description"):
                    lines.append(f"   > {item['description']}")
                if item.get("estimatedTime"):
                    lines.append(f"   ⏱️ {item['estimatedTime']}")

    return "\n".join(lines)


def generate_qa_checklist(phase: str = "") -> str:
    checklists = {
        "global": [
            "## Checklist QA Globale",
            "### Performance",
            "- [ ] Lighthouse score > 90 sur toutes les pages",
            "- [ ] LCP < 2.5s",
            "- [ ] CLS < 0.1",
            "- [ ] INP < 200ms",
            "- [ ] Bundle JS < 200KB (initial)",
            "",
            "### Accessibilité",
            "- [ ] axe-core : 0 erreurs critiques",
            "- [ ] Navigation complète au clavier",
            "- [ ] Test lecteur d'écran (VoiceOver / NVDA)",
            "- [ ] Ratio de contraste ≥ 4.5:1 sur tout le texte",
            "",
            "### Cross-browser",
            "- [ ] Chrome/Chromium (dernière version)",
            "- [ ] Firefox (dernière version)",
            "- [ ] Safari (dernière version)",
            "- [ ] Mobile Safari (iOS)",
            "- [ ] Chrome Mobile (Android)",
            "",
            "### SEO",
            "- [ ] Meta title et description sur toutes les pages",
            "- [ ] Structured data validé (Google Rich Results Test)",
            "- [ ] Sitemap soumis",
            "- [ ] Pas d'erreurs 404",
            "",
            "### Sécurité",
            "- [ ] Headers de sécurité configurés",
            "- [ ] HTTPS actif",
            "- [ ] Pas de secrets dans le bundle client",
        ],
        "ui": [
            "## Checklist QA UI",
            "- [ ] Toutes les variations de composants testées",
            "- [ ] États vides (empty states) définis et implémentés",
            "- [ ] États d'erreur définis et implémentés",
            "- [ ] États de loading définis et implémentés",
            "- [ ] Dark mode testé (si applicable)",
            "- [ ] RTL testé (si applicable)",
            "- [ ] Animations désactivées avec prefers-reduced-motion",
        ],
        "ux": [
            "## Checklist QA UX",
            "- [ ] Test des 5 parcours utilisateurs critiques",
            "- [ ] Temps pour compléter la tâche principale < 3 minutes",
            "- [ ] Test de compréhension (5-second test)",
            "- [ ] Test sur 3 tailles d'écran (mobile/tablet/desktop)",
            "- [ ] Formulaires avec validation claire des erreurs",
        ],
    }

    selected = checklists.get(phase, checklists["global"])
    return "\n".join(selected)


def generate_prompt_library_doc(project: dict) -> str:
    lines = [f"# Bibliothèque de Prompts — {project.get('name', 'Projet')}\n"]
    lines.append("Prompts réutilisables générés pour ce projet.\n")

    decisions = project.get("decisions_accepted", [])
    if decisions:
        lines.append("## Contexte Projet (à inclure dans chaque prompt)")
        lines.append("```")
        lines.append(f"Projet : {project.get('name', '')}")
        lines.append(f"Vision : {project.get('vision', '')}")
        lines.append(f"Audience : {project.get('target_audience', '')}")
        lines.append(f"Style : {', '.join(i['style'] for i in project.get('inspirations_accepted', [])[:3])}")
        lines.append(f"Couleurs : {', '.join(c['hex'] for c in project.get('color_palette', [])[:3])}")
        lines.append("```")

    return "\n".join(lines)


def save_document(project: dict, doc_type: str, title: str, content: str,
                  output_dir: Path | None = None) -> Path:
    if output_dir is None:
        output_dir = Path(__file__).parent.parent / "projects" / "docs"
    output_dir.mkdir(parents=True, exist_ok=True)

    safe = title.replace(" ", "_").replace("/", "-")[:50]
    path = output_dir / f"{doc_type}_{safe}.md"
    path.write_text(content, encoding="utf-8")
    return path


ALL_DOC_GENERATORS = {
    "brief": generate_brief,
    "design-tokens": generate_design_tokens,
    "backlog": generate_backlog,
    "qa-checklist": lambda p: generate_qa_checklist(),
    "prompt-library": generate_prompt_library_doc,
}


def generate_doc(doc_type: str, project: dict) -> str:
    generator = ALL_DOC_GENERATORS.get(doc_type)
    if not generator:
        return f"Type de document inconnu: {doc_type}. Disponibles: {', '.join(ALL_DOC_GENERATORS.keys())}"
    return generator(project)
