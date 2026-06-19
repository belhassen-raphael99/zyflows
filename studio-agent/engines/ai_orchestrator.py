"""AI Orchestrator — recommends the best AI tool for each task."""

from __future__ import annotations

AI_TOOLS: list[dict] = [
    # ── Research & Information ─────────────────────────────────────────────────
    {"name": "Perplexity", "category": "research", "pricing": "freemium",
     "description": "Moteur de recherche IA avec sources citées.",
     "best_for": ["recherche de marché", "analyse concurrentielle", "tendances", "faits"],
     "strengths": ["sources vérifiées", "informations récentes", "réponses concises"]},
    {"name": "Tavily", "category": "research", "pricing": "freemium",
     "description": "API de recherche optimisée pour les agents IA.",
     "best_for": ["recherche web automatisée", "extraction d'informations", "veille"],
     "strengths": ["API agent-friendly", "extraction structurée", "filtrage par domaine"]},

    # ── Ideation & Strategy ────────────────────────────────────────────────────
    {"name": "Claude Opus", "category": "ideation", "pricing": "paid",
     "description": "Modèle IA le plus puissant pour le raisonnement complexe.",
     "best_for": ["brainstorming", "stratégie", "analyse complexe", "écriture long format"],
     "strengths": ["raisonnement profond", "créativité", "nuance", "context long"]},
    {"name": "GPT-4o", "category": "writing", "pricing": "freemium",
     "description": "Modèle polyvalent d'OpenAI, excellent en rédaction.",
     "best_for": ["copywriting", "rédaction marketing", "traduction", "emails"],
     "strengths": ["fluidité", "adaptation au ton", "multilangue", "multimodal"]},

    # ── Design ────────────────────────────────────────────────────────────────
    {"name": "Figma + Claude", "category": "design", "pricing": "paid",
     "description": "Figma avec le MCP Claude pour du design assisté par IA.",
     "best_for": ["UI design", "design system", "maquettes", "composants"],
     "strengths": ["collaboration temps réel", "MCP natif", "ecosystème plugins"]},
    {"name": "Framer", "category": "prototype", "pricing": "freemium",
     "description": "Design et publication de sites animés sans code.",
     "best_for": ["landing pages", "prototypes interactifs", "sites marketing"],
     "strengths": ["animations avancées", "publish direct", "CMS intégré"]},
    {"name": "v0 (Vercel)", "category": "design", "pricing": "freemium",
     "description": "Génération de composants React/Tailwind par prompt.",
     "best_for": ["prototypage rapide", "génération de composants", "variations UI"],
     "strengths": ["output React natif", "shadcn/ui", "itération rapide"]},
    {"name": "Lovable", "category": "prototype", "pricing": "freemium",
     "description": "Génération d'apps full-stack React par IA.",
     "best_for": ["MVP", "prototypes fonctionnels", "apps CRUD"],
     "strengths": ["full-stack", "déploiement intégré", "Supabase natif"]},

    # ── 3D ────────────────────────────────────────────────────────────────────
    {"name": "Spline", "category": "3d", "pricing": "freemium",
     "description": "3D web no-code, export React natif.",
     "best_for": ["objets 3D web", "hero 3D", "animations 3D", "produits 3D"],
     "strengths": ["no-code", "export React", "collaborative", "performant"]},
    {"name": "Meshy", "category": "3d", "pricing": "freemium",
     "description": "Génération de modèles 3D texturés par IA (text-to-3D).",
     "best_for": ["assets 3D produits", "icônes 3D", "personnages 3D"],
     "strengths": ["text-to-3D", "textures IA", "export GLTF"]},
    {"name": "Tripo", "category": "3d", "pricing": "freemium",
     "description": "Génération 3D IA rapide, qualité élevée.",
     "best_for": ["prototypage 3D rapide", "assets 3D IA"],
     "strengths": ["vitesse", "qualité", "image-to-3D"]},

    # ── Animation ─────────────────────────────────────────────────────────────
    {"name": "Rive", "category": "animation", "pricing": "freemium",
     "description": "Animations interactives et state machines.",
     "best_for": ["micro-interactions", "loading states", "mascotte animée", "CTA animés"],
     "strengths": ["state machine", "runtime léger", "interactivité native", "React export"]},
    {"name": "Lottie Files", "category": "animation", "pricing": "freemium",
     "description": "Bibliothèque d'animations JSON (After Effects export).",
     "best_for": ["illustrations animées", "icônes animées", "onboarding"],
     "strengths": ["qualité After Effects", "bibliothèque prête", "léger"]},

    # ── Video & Media ─────────────────────────────────────────────────────────
    {"name": "Runway", "category": "video", "pricing": "paid",
     "description": "Génération et édition vidéo par IA.",
     "best_for": ["vidéos marketing", "animations vidéo", "b-roll IA"],
     "strengths": ["text-to-video", "image-to-video", "qualité cinématique"]},
    {"name": "Luma AI (Dream Machine)", "category": "video", "pricing": "freemium",
     "description": "Génération de vidéos réalistes par IA.",
     "best_for": ["vidéos produits", "animations 3D vidéo"],
     "strengths": ["réalisme", "cohérence temporelle"]},

    # ── Voice ─────────────────────────────────────────────────────────────────
    {"name": "ElevenLabs", "category": "voice", "pricing": "freemium",
     "description": "Synthèse et clonage vocal IA de haute qualité.",
     "best_for": ["narration", "voix off", "podcasts IA", "assistants vocaux"],
     "strengths": ["naturalisme", "clonage vocal", "multilingue", "API"]},

    # ── Image Generation ──────────────────────────────────────────────────────
    {"name": "Midjourney", "category": "image", "pricing": "paid",
     "description": "Génération d'images IA, qualité artistique exceptionnelle.",
     "best_for": ["moodboards", "concept art", "illustrations marketing"],
     "strengths": ["qualité artistique", "styles variés", "cohérence"]},
    {"name": "Flux (Black Forest Labs)", "category": "image", "pricing": "freemium",
     "description": "Modèle de génération d'images open-source, très précis.",
     "best_for": ["images photoréalistes", "UI mockups", "produits"],
     "strengths": ["précision des prompts", "photoréalisme", "open-source"]},
    {"name": "Ideogram", "category": "image", "pricing": "freemium",
     "description": "Génération d'images avec texte intégré.",
     "best_for": ["logos", "affiches", "images avec typographie"],
     "strengths": ["texte dans l'image", "logos", "cohérence typographique"]},
    {"name": "Krea", "category": "image", "pricing": "paid",
     "description": "Génération temps réel et amélioration d'images.",
     "best_for": ["itération rapide", "upscaling", "enhancement"],
     "strengths": ["temps réel", "upscaling IA", "flux de travail rapide"]},

    # ── Workflow & Automation ─────────────────────────────────────────────────
    {"name": "n8n", "category": "workflow", "pricing": "freemium",
     "description": "Automatisation de workflows, self-hosted, agent-native.",
     "best_for": ["workflows IA", "intégrations", "automation", "pipelines de données"],
     "strengths": ["open-source", "self-hosted", "700+ intégrations", "AI nodes"]},
    {"name": "Make (ex-Integromat)", "category": "workflow", "pricing": "freemium",
     "description": "No-code automation visuelle, cloud.",
     "best_for": ["automatisation no-code", "intégrations cloud", "marketing ops"],
     "strengths": ["interface visuelle", "cloud", "facile à apprendre"]},

    # ── Deployment & Infrastructure ───────────────────────────────────────────
    {"name": "Vercel", "category": "deployment", "pricing": "freemium",
     "description": "Déploiement frontend zero-config, Edge Network global.",
     "best_for": ["Next.js", "React", "Edge Functions", "déploiement CI/CD"],
     "strengths": ["zéro config", "Edge CDN", "preview deployments", "Analytics"]},

    # ── Code ──────────────────────────────────────────────────────────────────
    {"name": "Cursor", "category": "code", "pricing": "freemium",
     "description": "IDE IA basé sur VS Code, Composer mode.",
     "best_for": ["développement IA-assisté", "refactoring", "génération de code"],
     "strengths": ["contexte codebase", "Claude natif", "Composer multi-fichiers"]},
    {"name": "Claude Code", "category": "code", "pricing": "paid",
     "description": "CLI IA pour le développement, accès aux outils système.",
     "best_for": ["refactoring large scale", "agents autonomes", "CLI dev"],
     "strengths": ["autonomie", "outils système", "git natif", "MCP"]},
    {"name": "Windsurf", "category": "code", "pricing": "freemium",
     "description": "IDE IA de Codeium, excellent en flow.",
     "best_for": ["développement rapide", "complétion intelligente"],
     "strengths": ["flow state", "contexte large", "gratuit en large partie"]},
]


TASK_TO_TOOLS: dict[str, list[str]] = {
    "recherche": ["Perplexity", "Tavily"],
    "brainstorm": ["Claude Opus", "GPT-4o"],
    "rédaction": ["GPT-4o", "Claude Opus"],
    "copywriting": ["GPT-4o"],
    "design ui": ["Figma + Claude", "v0 (Vercel)"],
    "prototype": ["Framer", "Lovable", "Figma + Claude"],
    "3d": ["Spline", "Meshy", "Tripo", "Three.js / React Three Fiber"],
    "animation": ["Rive", "Framer Motion", "Lottie Files"],
    "vidéo": ["Runway", "Luma AI (Dream Machine)"],
    "voix": ["ElevenLabs"],
    "image": ["Midjourney", "Flux (Black Forest Labs)", "Ideogram", "Krea"],
    "workflow": ["n8n", "Make (ex-Integromat)"],
    "déploiement": ["Vercel"],
    "code": ["Cursor", "Claude Code", "Windsurf"],
    "mvp": ["Lovable", "Bolt.new"],
}


def recommend_for_task(task: str) -> list[dict]:
    task_lower = task.lower()
    for key, tool_names in TASK_TO_TOOLS.items():
        if key in task_lower:
            return [t for t in AI_TOOLS if t["name"] in tool_names]
    # Fuzzy fallback
    return [t for t in AI_TOOLS if any(k in task_lower for k in t["best_for"])][:3]


def get_tool(name: str) -> dict | None:
    for t in AI_TOOLS:
        if t["name"].lower() == name.lower():
            return t
    return None


def format_ai_toolkit() -> str:
    categories = {}
    for tool in AI_TOOLS:
        cat = tool["category"]
        categories.setdefault(cat, []).append(tool)

    lines = ["# AI Orchestrator — Boîte à outils IA\n"]
    category_names = {
        "research": "🔍 Recherche",
        "ideation": "💡 Idéation",
        "writing": "✍️ Rédaction",
        "design": "🎨 Design",
        "prototype": "📱 Prototype",
        "3d": "🌐 3D",
        "animation": "🎬 Animation",
        "video": "🎥 Vidéo",
        "voice": "🎙️ Voix",
        "image": "🖼️ Image",
        "workflow": "⚙️ Workflow",
        "deployment": "🚀 Déploiement",
        "code": "💻 Code",
    }
    for cat, tools in categories.items():
        lines.append(f"\n## {category_names.get(cat, cat)}")
        for t in tools:
            lines.append(f"- **{t['name']}** ({t['pricing']}): {t['description']}")
    return "\n".join(lines)
