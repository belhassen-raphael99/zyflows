"""Innovation Engine — generates 6 design variants for every concept."""

from __future__ import annotations

INNOVATION_VARIANTS = [
    {
        "id": "classic",
        "name": "Version Classique",
        "emoji": "🏛️",
        "description": "Approche éprouvée et sans risque. Respecte les conventions.",
        "philosophy": "Ce qui a fait ses preuves. Familier pour l'utilisateur.",
        "visual_style": "Clean, grille standard, couleurs conventionnelles du secteur.",
        "ux_approach": "Patterns UX standard, navigation prévisible, zero learning curve.",
        "tech_stack": "Stack populaire dans le secteur (React/Next.js + Tailwind + shadcn/ui)",
        "ideal_for": "Projets à risque faible, clients conservateurs, secteurs régulés",
        "tradeoffs": {"pro": "Rassurant, accessible, testable", "con": "Non différenciant, aucun WOW"},
    },
    {
        "id": "premium",
        "name": "Version Premium",
        "emoji": "💎",
        "description": "Sophistication, luxe digital, qualité perçue maximale.",
        "philosophy": "Chaque détail justifie un prix plus élevé.",
        "visual_style": "Dark palette, gold/platinum accents, typo serif premium, espacements généreux.",
        "ux_approach": "Micro-animations soignées, feedback haptique, personnalisation.",
        "tech_stack": "Framer + Rive pour animations + Spline pour éléments 3D subtils",
        "ideal_for": "Luxury brands, B2B haut de gamme, produits premium",
        "tradeoffs": {"pro": "Perception valeur élevée, justifie le prix", "con": "Coût de production élevé"},
    },
    {
        "id": "futuristic",
        "name": "Version Futuriste",
        "emoji": "🚀",
        "description": "Ce que ce design pourrait être en 2030.",
        "philosophy": "Abolir les contraintes actuelles et designer pour demain.",
        "visual_style": "Glassmorphism avancé, WebGPU shaders, animations physiques, palette néon + dark.",
        "ux_approach": "Voix + geste + regard. Interface adaptative. Pas de menus.",
        "tech_stack": "Three.js + WebGPU + R3F + LLM natif + sensors API",
        "ideal_for": "Startups IA, gaming, entertainment, audiences tech-forward",
        "tradeoffs": {"pro": "Mémorable, différenciant, coverage presse", "con": "Accessibilité, performance, adoption"},
    },
    {
        "id": "apple",
        "name": "Version Apple",
        "emoji": "🍎",
        "description": "Minimalisme radical. Obsession du détail. Poésie de la fonctionnalité.",
        "philosophy": "'Simplicity is the ultimate sophistication.' Retirer jusqu'à l'essentiel.",
        "visual_style": "Blanc/noir, SF Pro ou équivalent, animations spring physics, effets de blur subtils.",
        "ux_approach": "Un seul objectif par écran. Storytelling scroll-based. Pas de distraction.",
        "tech_stack": "Next.js + Framer Motion spring + GSAP ScrollTrigger + monochrome design system",
        "ideal_for": "Produits B2C grand public, startups consumer, applications professionnelles",
        "tradeoffs": {"pro": "Clarté absolue, premium feeling, confiance", "con": "Peut sembler froid ou peu engageant"},
    },
    {
        "id": "tesla",
        "name": "Version Tesla",
        "emoji": "⚡",
        "description": "Ingénierie visible. Performance ostentatoire. Disruption assumée.",
        "philosophy": "Montrer la technologie. La performance IS le design.",
        "visual_style": "Dark mode, chiffres et data en temps réel, animations de données, rouge accent.",
        "ux_approach": "Dashboard-first. Montrer les métriques clés. Educate en utilisant.",
        "tech_stack": "React + Recharts/D3 + dark design system + animations de données",
        "ideal_for": "Produits tech, startups B2B, outils de productivité, fintech",
        "tradeoffs": {"pro": "Crédibilité tech, wow factor data-driven", "con": "Complexe, courbe d'apprentissage"},
    },
    {
        "id": "ai-2030",
        "name": "Version Startup IA 2030",
        "emoji": "🤖",
        "description": "IA native. Interfaces adaptatives. Abolition des menus.",
        "philosophy": "L'interface disparaît. Seule l'intention de l'utilisateur compte.",
        "visual_style": "Interface conversationnelle + widgets génératifs + visualization IA. Minimaliste.",
        "ux_approach": "Prompt-first. L'UI s'adapte au contexte. Agents en arrière-plan. Résultats > interface.",
        "tech_stack": "Claude/GPT API + Claude Artifacts + streaming UI + n8n agents + vector DB",
        "ideal_for": "Produits IA-first, next-gen SaaS, outils pour créatifs et développeurs",
        "tradeoffs": {"pro": "Avant-gardiste, réduit la friction à l'essentiel", "con": "Discoverability faible, adoption difficile"},
    },
]


def get_variant(variant_id: str) -> dict | None:
    for v in INNOVATION_VARIANTS:
        if v["id"] == variant_id:
            return v
    return None


def format_innovation_brief(concept: str) -> str:
    lines = [f"# Innovation Engine — 6 variantes pour : {concept}\n"]

    for v in INNOVATION_VARIANTS:
        lines.append(f"\n## {v['emoji']} {v['name']}")
        lines.append(f"**Philosophie :** {v['philosophy']}")
        lines.append(f"**Direction visuelle :** {v['visual_style']}")
        lines.append(f"**Approche UX :** {v['ux_approach']}")
        lines.append(f"**Stack recommandée :** {v['tech_stack']}")
        lines.append(f"**Idéal pour :** {v['ideal_for']}")
        lines.append(f"**Trade-offs :** ✅ {v['tradeoffs']['pro']} | ❌ {v['tradeoffs']['con']}")

    lines.append("\n---\n## Comment choisir ?")
    lines.append("- **Budget serré + délais courts** → Classique ou Apple")
    lines.append("- **Différenciation forte requise** → Futuriste ou IA 2030")
    lines.append("- **Premium sans risque** → Premium ou Apple")
    lines.append("- **Audience tech-savvy** → Tesla ou IA 2030")
    lines.append("- **Tout projet** → Combiner les meilleurs éléments de 2-3 versions")

    return "\n".join(lines)


def generate_innovation_prompt(concept: str, variant_id: str, tool: str = "Claude") -> str:
    variant = get_variant(variant_id)
    if not variant:
        return f"Variante inconnue: {variant_id}"

    return f"""[PROMPT INNOVATION ENGINE — {tool.upper()} / {variant['name'].upper()}]

Concept : {concept}
Variante : {variant['name']} {variant['emoji']}
Philosophie : {variant['philosophy']}

---
Génère une description détaillée d'une interface "{concept}" dans le style {variant['name'].split(' ')[1]}.

Direction visuelle : {variant['visual_style']}
Approche UX : {variant['ux_approach']}
Stack technique : {variant['tech_stack']}

Décris précisément :
1. Le hero section
2. La navigation
3. Les éléments interactifs clés
4. La palette de couleurs et typographie
5. Les animations et transitions signature

Sois spécifique, pas générique. Donne des exemples précis de micro-interactions.
---"""
