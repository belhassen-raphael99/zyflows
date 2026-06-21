"""Design Review Board — simulates a 10-expert panel review."""

from __future__ import annotations

BOARD_MEMBERS = [
    {
        "role": "Creative Director",
        "emoji": "🎨",
        "focus": "Vision créative, cohérence de marque, impact émotionnel",
        "priorities": ["originalité", "impact visuel", "différenciation"],
        "questions": [
            "Est-ce que ça nous ressemble ?",
            "Est-ce que ça surprend et inspire ?",
            "Est-ce que ça raconte une histoire ?",
        ],
    },
    {
        "role": "UX Director",
        "emoji": "🧠",
        "focus": "Expérience utilisateur, parcours, réduction des frictions",
        "priorities": ["clarté", "fluidité", "satisfaction utilisateur"],
        "questions": [
            "L'utilisateur comprend-il en 3 secondes ?",
            "Où sont les points de friction ?",
            "La charge cognitive est-elle minimale ?",
        ],
    },
    {
        "role": "UI Director",
        "emoji": "✨",
        "focus": "Excellence visuelle, cohérence des composants, hiérarchie",
        "priorities": ["beauté", "cohérence", "précision"],
        "questions": [
            "La hiérarchie visuelle est-elle claire ?",
            "Les espacements respectent-ils la grille ?",
            "Les couleurs sont-elles accessibles ?",
        ],
    },
    {
        "role": "Product Manager",
        "emoji": "📦",
        "focus": "Valeur business, priorisation, MVP, ROI",
        "priorities": ["impact business", "faisabilité", "time-to-market"],
        "questions": [
            "Quel est le ROI attendu ?",
            "Peut-on livrer dans les délais ?",
            "Quelle est la priorité réelle ?",
        ],
    },
    {
        "role": "CTO",
        "emoji": "⚙️",
        "focus": "Faisabilité technique, scalabilité, dette technique",
        "priorities": ["maintenabilité", "performance", "sécurité"],
        "questions": [
            "L'architecture est-elle solide ?",
            "Quel est le coût technique à long terme ?",
            "La solution est-elle scalable ?",
        ],
    },
    {
        "role": "Motion Designer",
        "emoji": "🎬",
        "focus": "Animations, transitions, micro-interactions, vie de l'interface",
        "priorities": ["fluidité", "intention", "performance des animations"],
        "questions": [
            "Le motion renforce-t-il la personnalité de marque ?",
            "Les animations ont-elles une intention claire ?",
            "L'impact sur les performances est-il acceptable ?",
        ],
    },
    {
        "role": "Marketing Director",
        "emoji": "📢",
        "focus": "Conversion, acquisition, message, positionnement",
        "priorities": ["conversion", "clarté du message", "différenciation marché"],
        "questions": [
            "Le message principal est-il clair ?",
            "Qu'est-ce qui pousse à l'action ?",
            "Comment ça se positionne face aux concurrents ?",
        ],
    },
    {
        "role": "Accessibility Expert",
        "emoji": "♿",
        "focus": "WCAG 2.1, inclusion, diversité des usages",
        "priorities": ["contraste", "navigation clavier", "lecteurs d'écran"],
        "questions": [
            "Le ratio de contraste est-il WCAG AA ?",
            "La navigation est-elle possible sans souris ?",
            "Les images ont-elles un texte alternatif ?",
        ],
    },
    {
        "role": "SEO Expert",
        "emoji": "🔍",
        "focus": "Visibilité organique, structured data, Core Web Vitals",
        "priorities": ["vitesse", "structure sémantique", "indexabilité"],
        "questions": [
            "Les balises sémantiques sont-elles correctes ?",
            "Le LCP est-il < 2.5s ?",
            "Les données structurées sont-elles implémentées ?",
        ],
    },
    {
        "role": "Performance Engineer",
        "emoji": "⚡",
        "focus": "Core Web Vitals, bundle size, TTI, LCP, CLS",
        "priorities": ["LCP < 2.5s", "CLS < 0.1", "INP < 200ms"],
        "questions": [
            "La taille du bundle est-elle optimisée ?",
            "Les images sont-elles lazy-loaded ?",
            "Le code splitting est-il en place ?",
        ],
    },
]


def format_review_board_prompt(topic: str, context: str = "") -> str:
    """Returns a prompt that makes Claude simulate the full review board."""
    members_text = "\n".join(
        f"{m['emoji']} **{m['role']}** (Focus: {m['focus']})"
        for m in BOARD_MEMBERS
    )
    return f"""[DESIGN REVIEW BOARD]

Sujet à évaluer : {topic}
{f"Contexte : {context}" if context else ""}

Tu dois simuler une réunion de revue avec les 10 experts suivants :
{members_text}

Pour chaque expert, donne un avis concis (2-3 phrases) incluant :
- Son perspective unique basée sur son domaine
- Sa principale préoccupation
- Sa recommandation spécifique

Termine par une DÉCISION FINALE consolidée qui équilibre tous les points de vue.

Format :
```
[DESIGN REVIEW BOARD] {topic}

{chr(10).join(f"{m['emoji']} {m['role']} : [avis]" for m in BOARD_MEMBERS)}

✅ DÉCISION FINALE : [décision consolidée]
```
"""


def get_expert_focus(role: str) -> dict | None:
    for m in BOARD_MEMBERS:
        if m["role"].lower() == role.lower():
            return m
    return None
