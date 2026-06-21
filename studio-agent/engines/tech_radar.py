"""Technology Radar — categorized technology landscape for design & dev."""

from __future__ import annotations

TECH_RADAR: list[dict] = [
    # ── ADOPT ─────────────────────────────────────────────────────────────────
    {"name": "React", "quadrant": "adopt", "category": "framework", "maturity": "mature",
     "description": "Bibliothèque UI dominante, ecosystème massif.", "use_cases": ["SaaS", "Dashboard", "Landing page"]},
    {"name": "Next.js", "quadrant": "adopt", "category": "framework", "maturity": "mature",
     "description": "Framework React full-stack avec SSR/SSG/ISR.", "use_cases": ["Toute app web moderne"]},
    {"name": "Tailwind CSS", "quadrant": "adopt", "category": "library", "maturity": "mature",
     "description": "CSS utility-first, productivité maximale.", "use_cases": ["Tous projets front"]},
    {"name": "Figma", "quadrant": "adopt", "category": "design-system", "maturity": "mature",
     "description": "Standard industrie pour le design collaboratif.", "use_cases": ["UI/UX", "Design system"]},
    {"name": "Framer", "quadrant": "adopt", "category": "no-code", "maturity": "growing",
     "description": "Prototypage et production de landing pages animées.", "use_cases": ["Landing page", "Prototype"]},
    {"name": "Vercel", "quadrant": "adopt", "category": "cloud", "maturity": "mature",
     "description": "Déploiement frontend zero-config, Edge Network.", "use_cases": ["Déploiement", "Serverless"]},
    {"name": "Claude (Anthropic)", "quadrant": "adopt", "category": "ai", "maturity": "growing",
     "description": "Modèle IA de référence pour raisonnement complexe et code.", "use_cases": ["Agent", "Génération", "Analyse"]},
    {"name": "TypeScript", "quadrant": "adopt", "category": "library", "maturity": "mature",
     "description": "JavaScript typé, standard dans les projets professionnels.", "use_cases": ["Tous projets JS"]},

    # ── TRIAL ─────────────────────────────────────────────────────────────────
    {"name": "Spline", "quadrant": "trial", "category": "3d", "maturity": "growing",
     "description": "3D web no-code, intégration React native.", "use_cases": ["3D web", "Hero 3D", "Produit 3D"]},
    {"name": "Rive", "quadrant": "trial", "category": "motion", "maturity": "growing",
     "description": "Animations interactives haute performance.", "use_cases": ["Micro-interactions", "Loading", "Mascotte"]},
    {"name": "Framer Motion", "quadrant": "trial", "category": "motion", "maturity": "growing",
     "description": "Bibliothèque d'animation React déclarative.", "use_cases": ["Transitions", "Animations React"]},
    {"name": "Supabase", "quadrant": "trial", "category": "database", "maturity": "growing",
     "description": "Alternative open-source à Firebase, PostgreSQL.", "use_cases": ["Auth", "BDD temps réel"]},
    {"name": "Astro", "quadrant": "trial", "category": "framework", "maturity": "growing",
     "description": "Framework content-first, Island Architecture, performances extrêmes.", "use_cases": ["Blog", "Marketing", "Documentation"]},
    {"name": "shadcn/ui", "quadrant": "trial", "category": "design-system", "maturity": "growing",
     "description": "Composants Radix UI + Tailwind, copier-coller dans le projet.", "use_cases": ["Design system React"]},
    {"name": "v0 (Vercel)", "quadrant": "trial", "category": "ai", "maturity": "emerging",
     "description": "Génération de composants UI par prompt.", "use_cases": ["Prototypage rapide", "Génération UI"]},
    {"name": "n8n", "quadrant": "trial", "category": "no-code", "maturity": "growing",
     "description": "Workflow automation open-source, self-hosted.", "use_cases": ["Automation", "Intégrations", "Agent workflows"]},
    {"name": "Three.js / React Three Fiber", "quadrant": "trial", "category": "3d", "maturity": "mature",
     "description": "3D WebGL dans React, ecosystème riche (Drei).", "use_cases": ["3D avancée", "Visualisation", "Jeux web"]},
    {"name": "Meshy", "quadrant": "trial", "category": "ai", "maturity": "emerging",
     "description": "Génération de modèles 3D par IA.", "use_cases": ["Assets 3D", "Prototypage 3D"]},

    # ── ASSESS ────────────────────────────────────────────────────────────────
    {"name": "WebGPU", "quadrant": "assess", "category": "rendering", "maturity": "emerging",
     "description": "Prochain standard de rendu GPU pour le web, supérieur à WebGL.", "use_cases": ["Rendu haute performance", "Compute shaders"]},
    {"name": "React Server Components", "quadrant": "assess", "category": "framework", "maturity": "emerging",
     "description": "Composants serveur dans React, paradigme nouveau.", "use_cases": ["Performance", "Data-fetching"]},
    {"name": "Bolt.new", "quadrant": "assess", "category": "ai", "maturity": "emerging",
     "description": "Génération d'apps full-stack par IA dans le navigateur.", "use_cases": ["Prototypage", "MVP rapide"]},
    {"name": "Lottie / DotLottie", "quadrant": "assess", "category": "motion", "maturity": "mature",
     "description": "Animations JSON exportées d'After Effects.", "use_cases": ["Illustrations animées", "Loading", "Onboarding"]},
    {"name": "Playwright", "quadrant": "assess", "category": "testing", "maturity": "growing",
     "description": "Tests E2E cross-browser modernes.", "use_cases": ["Tests automatisés", "CI/CD"]},
    {"name": "Tripo", "quadrant": "assess", "category": "ai", "maturity": "emerging",
     "description": "Génération 3D IA, concurrent de Meshy.", "use_cases": ["Assets 3D IA"]},
    {"name": "Sanity CMS", "quadrant": "assess", "category": "cms", "maturity": "growing",
     "description": "CMS headless avec GROQ, très flexible.", "use_cases": ["CMS", "Blog", "E-commerce"]},

    # ── HOLD ──────────────────────────────────────────────────────────────────
    {"name": "jQuery", "quadrant": "hold", "category": "library", "maturity": "declining",
     "description": "Bibliothèque JS obsolète, remplacée par le DOM natif et React.", "use_cases": []},
    {"name": "WordPress (classique)", "quadrant": "hold", "category": "cms", "maturity": "declining",
     "description": "CMS legacy, performances et sécurité limitées.", "use_cases": []},
    {"name": "Bootstrap", "quadrant": "hold", "category": "design-system", "maturity": "declining",
     "description": "Remplacé par Tailwind CSS en productivité et flexibilité.", "use_cases": []},
    {"name": "Gatsby", "quadrant": "hold", "category": "framework", "maturity": "declining",
     "description": "Remplacé par Next.js et Astro.", "use_cases": []},
]


def get_by_quadrant(quadrant: str) -> list[dict]:
    return [t for t in TECH_RADAR if t["quadrant"] == quadrant]


def get_by_category(category: str) -> list[dict]:
    return [t for t in TECH_RADAR if t["category"] == category]


def get_recommendations(use_case: str) -> list[dict]:
    use_case_lower = use_case.lower()
    return [
        t for t in TECH_RADAR
        if t["quadrant"] in ("adopt", "trial")
        and any(use_case_lower in uc.lower() for uc in t.get("use_cases", []))
    ]


def format_radar_summary() -> str:
    lines = ["# Technology Radar\n"]
    for quadrant in ("adopt", "trial", "assess", "hold"):
        icons = {"adopt": "✅", "trial": "🔬", "assess": "🔭", "hold": "⛔"}
        descriptions = {
            "adopt": "Technologies matures — recommandées sans réserve",
            "trial": "Prometteuses — à tester sur ce projet",
            "assess": "À surveiller — pas encore prêtes",
            "hold": "À éviter — en déclin ou trop risquées",
        }
        techs = get_by_quadrant(quadrant)
        lines.append(f"\n## {icons[quadrant]} ADOPT: {descriptions[quadrant]}\n" if quadrant == "adopt"
                     else f"\n## {icons[quadrant]} {quadrant.upper()}: {descriptions[quadrant]}\n")
        for t in techs:
            lines.append(f"- **{t['name']}** ({t['category']}): {t['description']}")
    return "\n".join(lines)
