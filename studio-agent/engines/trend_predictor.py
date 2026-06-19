"""Trend Prediction Engine — analyzes current and upcoming design trends."""

from __future__ import annotations

TRENDS: list[dict] = [
    # ── NOW (2025-2026) ───────────────────────────────────────────────────────
    {
        "name": "Glassmorphism 2.0",
        "status": "growing",
        "timeframe": "now",
        "category": "visual",
        "relevance_default": 75,
        "why_emerging": "Popularisé par iOS 15+, Figma et les interfaces dark mode. Donne une sensation de profondeur et de modernité sans lourdeur.",
        "will_become_standard": True,
        "will_disappear_because": "Risque de surexploitation. Deviendra baseline, non différenciant.",
        "examples": ["macOS Sonoma", "Linear", "Notion", "Vercel Dashboard"],
        "tags": ["dark-mode", "blur", "transparency", "depth"],
    },
    {
        "name": "IA générative dans les interfaces",
        "status": "growing",
        "timeframe": "now",
        "category": "interaction",
        "relevance_default": 90,
        "why_emerging": "Les LLMs permettent des interfaces conversationnelles et des widgets génératifs. L'utilisateur co-crée l'expérience.",
        "will_become_standard": True,
        "will_disappear_because": "Ne disparaîtra pas — deviendra standard comme les formulaires l'étaient.",
        "examples": ["Notion AI", "Figma AI", "Linear AI", "GitHub Copilot"],
        "tags": ["ai", "generative", "conversational", "copilot"],
    },
    {
        "name": "Typographie cinétique",
        "status": "growing",
        "timeframe": "now",
        "category": "motion",
        "relevance_default": 65,
        "why_emerging": "Le texte devient le hero de l'animation. WebGL + SVG permettent des effets typographiques impossibles avant.",
        "will_become_standard": False,
        "will_disappear_because": "Reste de niche premium — trop complexe pour le mainstream.",
        "examples": ["Awwwards entries 2024", "Studios créatifs", "Luxury brands"],
        "tags": ["typography", "motion", "webgl", "kinetic"],
    },
    {
        "name": "Brutalisme digital revisité",
        "status": "peak",
        "timeframe": "now",
        "category": "visual",
        "relevance_default": 50,
        "why_emerging": "Réaction au minimalisme sur-poli. Authenticité et anti-conformisme pour les marques qui veulent se démarquer.",
        "will_become_standard": False,
        "will_disappear_because": "Effet de mode créatif. Déjà au pic, va reculer d'ici 12-18 mois.",
        "examples": ["Stripe Press", "Linear (légèrement)", "Vercel Blog"],
        "tags": ["brutalism", "editorial", "raw", "contrast"],
    },
    {
        "name": "Design adaptatif contextuel",
        "status": "emerging",
        "timeframe": "12-24m",
        "category": "ux",
        "relevance_default": 80,
        "why_emerging": "L'IA permet des interfaces qui s'adaptent au comportement, au contexte et aux préférences de chaque utilisateur en temps réel.",
        "will_become_standard": True,
        "will_disappear_because": "Ne disparaîtra pas — c'est l'avenir du design personnalisé.",
        "examples": ["Spotify Wrapped", "Netflix recommendations UI", "Google Adaptive Cards"],
        "tags": ["adaptive", "personalization", "ai", "contextual"],
    },

    # ── NEAR FUTURE (12-24 months) ────────────────────────────────────────────
    {
        "name": "Spatial Design (AR/XR-first)",
        "status": "emerging",
        "timeframe": "12-24m",
        "category": "interaction",
        "relevance_default": 60,
        "why_emerging": "Apple Vision Pro et Android XR forcent les designers à penser en 3D spatial. Les composants 2D se translateront en espace 3D.",
        "will_become_standard": True,
        "will_disappear_because": "Deviendra standard dans 5-7 ans quand le hardware sera mainstream.",
        "examples": ["Apple visionOS", "Meta Horizon", "Google Lens"],
        "tags": ["spatial", "ar", "xr", "3d", "depth"],
    },
    {
        "name": "Interfaces multimodales",
        "status": "emerging",
        "timeframe": "12-24m",
        "category": "interaction",
        "relevance_default": 70,
        "why_emerging": "Voix + geste + regard + toucher combinent pour créer des interactions plus naturelles. GPT-4o et Gemini Live montrent la voie.",
        "will_become_standard": True,
        "will_disappear_because": "Paradigme de long terme — les interfaces visuelles pures seront minoritaires.",
        "examples": ["GPT-4o voice", "Gemini Live", "Rabbit R1", "Humane AI Pin"],
        "tags": ["voice", "gesture", "multimodal", "ai"],
    },
    {
        "name": "WebGPU et shaders génératifs",
        "status": "emerging",
        "timeframe": "12-24m",
        "category": "rendering",
        "relevance_default": 55,
        "why_emerging": "WebGPU remplace WebGL, permettant des effets graphiques de qualité console directement dans le navigateur.",
        "will_become_standard": True,
        "will_disappear_because": "Standard technique — WebGL est devenu standard, WebGPU suivra.",
        "examples": ["Three.js WebGPU", "Babylon.js 7", "Biomes (jeu WebGPU)"],
        "tags": ["webgpu", "shaders", "3d", "performance", "rendering"],
    },

    # ── FUTURE (24-36 months) ─────────────────────────────────────────────────
    {
        "name": "Interfaces génératrices auto-organisées",
        "status": "emerging",
        "timeframe": "24-36m",
        "category": "ux",
        "relevance_default": 75,
        "why_emerging": "Le design ne sera plus statique — l'IA réorganisera l'interface selon l'usage, les préférences et le contexte de chaque session.",
        "will_become_standard": True,
        "will_disappear_because": "Deviendra le nouveau paradigme dominant après 2028.",
        "examples": ["Conception préliminaire chez Apple, Google, Meta"],
        "tags": ["generative-ui", "ai-first", "adaptive", "dynamic-layout"],
    },
    {
        "name": "Design émotionnellement intelligent",
        "status": "emerging",
        "timeframe": "24-36m",
        "category": "ux",
        "relevance_default": 65,
        "why_emerging": "Les interfaces détecter les états émotionnels (par caméra, biométrie) et s'adaptent pour réduire le stress et maximiser l'engagement positif.",
        "will_become_standard": False,
        "will_disappear_because": "Fortes résistances privacy. Restera niche dans le gaming et la santé.",
        "examples": ["Affectiva", "Microsoft Cortana 2.0", "Wearables santé"],
        "tags": ["emotion", "biometric", "adaptive", "health"],
    },
    {
        "name": "Invisible Design (Zero UI)",
        "status": "emerging",
        "timeframe": "24-36m",
        "category": "ux",
        "relevance_default": 70,
        "why_emerging": "Les interfaces disparaissent derrière l'action. L'IA comprend l'intention et agit sans que l'utilisateur interagisse avec une UI.",
        "will_become_standard": True,
        "will_disappear_because": "Le design d'interface visulle ne disparaît pas — il coexiste avec le Zero UI pour des tâches différentes.",
        "examples": ["Siri Intelligence", "Claude Artifacts", "AGI assistants"],
        "tags": ["zero-ui", "ambient", "ai", "invisible", "agent"],
    },
]


def get_active_trends() -> list[dict]:
    return [t for t in TRENDS if t["status"] in ("growing", "peak")]


def get_future_trends(months: int = 24) -> list[dict]:
    mapping = {"now": 0, "12-24m": 18, "24-36m": 30}
    return [t for t in TRENDS if mapping.get(t["timeframe"], 0) <= months]


def get_trends_by_category(category: str) -> list[dict]:
    return [t for t in TRENDS if t["category"] == category]


def get_relevant_trends(relevance_threshold: int = 70) -> list[dict]:
    return [t for t in TRENDS if t.get("relevance_default", 0) >= relevance_threshold]


def format_trend_report(project_type: str = "") -> str:
    lines = [f"# Trend Report — Design Numérique 2025-2028\n"]

    sections = [
        ("🔥 MAINTENANT (2025-2026)", [t for t in TRENDS if t["timeframe"] == "now"]),
        ("📈 12-24 MOIS (2026-2027)", [t for t in TRENDS if t["timeframe"] == "12-24m"]),
        ("🔭 24-36 MOIS (2027-2028)", [t for t in TRENDS if t["timeframe"] == "24-36m"]),
    ]

    for section_title, trends in sections:
        lines.append(f"\n## {section_title}\n")
        for t in trends:
            status_icon = {"growing": "📈", "peak": "🏔️", "emerging": "🌱", "declining": "📉"}.get(t["status"], "")
            will_standard = "✅ Deviendra standard" if t["will_become_standard"] else "⚡ Effet de mode"
            lines.append(f"### {status_icon} {t['name']} — Pertinence: {t['relevance_default']}/100")
            lines.append(f"**Pourquoi ça émerge :** {t['why_emerging']}")
            if t.get("will_disappear_because"):
                lines.append(f"**Durabilité :** {will_standard} — {t['will_disappear_because']}")
            lines.append(f"**Exemples :** {', '.join(t.get('examples', []))}")
            lines.append(f"**Tags :** {', '.join(t.get('tags', []))}\n")

    return "\n".join(lines)
