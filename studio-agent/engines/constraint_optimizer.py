"""Constraint Optimizer — validates recommendations against active project constraints."""

from __future__ import annotations

DEFAULT_CONSTRAINTS = [
    {
        "category": "performance",
        "name": "Core Web Vitals",
        "description": "LCP < 2.5s, CLS < 0.1, INP < 200ms",
        "severity": "hard",
        "checklist": [
            "Images optimisées (WebP/AVIF, lazy-loading, srcset)",
            "Code splitting actif",
            "Fonts avec font-display: swap",
            "CSS critique inlinée",
            "Bundle < 200KB gzipped pour le chemin critique",
        ],
    },
    {
        "category": "accessibility",
        "name": "WCAG 2.1 AA",
        "description": "Conformité WCAG 2.1 niveau AA minimum",
        "severity": "hard",
        "checklist": [
            "Ratio de contraste ≥ 4.5:1 pour le texte normal",
            "Ratio de contraste ≥ 3:1 pour le texte large et les composants UI",
            "Navigation entière possible au clavier",
            "Focus visible sur tous les éléments interactifs",
            "Attributs ARIA corrects sur les composants custom",
            "Textes alternatifs sur toutes les images significatives",
            "Pas d'information transmise uniquement par la couleur",
            "Animations réduites si prefers-reduced-motion activé",
        ],
    },
    {
        "category": "seo",
        "name": "SEO technique",
        "description": "Fondamentaux SEO pour l'indexabilité et le ranking",
        "severity": "soft",
        "checklist": [
            "Balises H1-H6 hiérarchiques",
            "Meta title et meta description uniques par page",
            "Schema.org JSON-LD sur les pages clés",
            "Sitemap XML",
            "robots.txt correct",
            "Canonical URLs",
            "Open Graph tags pour le social",
            "Pas de contenu dupliqué",
        ],
    },
    {
        "category": "mobile",
        "name": "Mobile-first",
        "description": "Optimisation mobile prioritaire",
        "severity": "hard",
        "checklist": [
            "Viewport meta tag configuré",
            "Touch targets ≥ 44x44px",
            "Pas de texte trop petit (min 16px sur mobile)",
            "Pas de scroll horizontal indésirable",
            "Images adaptatives (responsive images)",
            "Formulaires avec le bon type d'input (email, tel, number)",
        ],
    },
    {
        "category": "maintainability",
        "name": "Maintenabilité",
        "description": "Le code doit être maintenable sur 2 ans par une équipe standard",
        "severity": "soft",
        "checklist": [
            "Documentation des composants",
            "TypeScript avec types stricts",
            "Tests unitaires sur la logique critique",
            "Pas de code spaghetti (séparation des responsabilités)",
            "Variables et fonctions bien nommées",
            "Git history propre avec messages descriptifs",
        ],
    },
    {
        "category": "scalability",
        "name": "Évolutivité",
        "description": "Architecture capable de scaler sans refonte majeure",
        "severity": "soft",
        "checklist": [
            "Architecture en couches (data / logic / UI séparés)",
            "API versionnée",
            "State management scalable",
            "Composants découplés et réutilisables",
            "Feature flags pour les déploiements graduels",
        ],
    },
    {
        "category": "security",
        "name": "Sécurité baseline",
        "description": "Fondamentaux de sécurité web",
        "severity": "hard",
        "checklist": [
            "HTTPS forcé",
            "Headers de sécurité (CSP, HSTS, X-Frame-Options)",
            "Pas de secrets dans le code client",
            "Validation des inputs côté serveur",
            "Rate limiting sur les APIs",
            "Authentification sécurisée (JWT, sessions httpOnly)",
        ],
    },
]

BUDGET_TIERS = {
    "bootstrap": {
        "range": "< 5K€",
        "recommended_stack": ["Next.js", "Vercel", "Tailwind", "shadcn/ui", "Supabase"],
        "avoid": ["Custom 3D", "Animations complexes", "Design system from scratch"],
        "design_approach": "Utiliser des templates premium + personnalisation légère",
    },
    "startup": {
        "range": "5K - 30K€",
        "recommended_stack": ["Next.js", "Framer/Rive pour animations", "Spline pour 3D simple", "Design system custom léger"],
        "avoid": ["WebGPU", "Rendu 3D complexe", "Réalité augmentée"],
        "design_approach": "Design system partiel + animations signature + photos pros",
    },
    "scale-up": {
        "range": "30K - 150K€",
        "recommended_stack": ["Next.js + design system complet", "R3F pour 3D", "Rive pour micro-interactions", "Analytics avancé"],
        "avoid": ["Technologie non prouvée en production"],
        "design_approach": "Design system complet + identité forte + motion design",
    },
    "enterprise": {
        "range": "> 150K€",
        "recommended_stack": ["Architecture sur mesure", "WebGPU si pertinent", "Design system complet + Storybook"],
        "avoid": ["Rien n'est hors budget si le ROI est prouvé"],
        "design_approach": "Tout le budget vers une expérience exceptionnelle",
    },
}


def validate_proposal(proposal: str, active_constraints: list[dict]) -> list[dict]:
    """Returns a list of constraint violations for a proposal."""
    violations = []
    proposal_lower = proposal.lower()

    for constraint in active_constraints:
        cat = constraint.get("category", "")
        severity = constraint.get("severity", "soft")

        # Simple heuristic checks
        if cat == "performance":
            if any(k in proposal_lower for k in ["video autoplay", "gif", "lottie haute résolution"]):
                violations.append({
                    "constraint": constraint.get("name", cat),
                    "severity": severity,
                    "issue": "Cette approche peut dégrader les Core Web Vitals.",
                    "alternative": "Utiliser WebP animé ou Rive (plus léger que Lottie).",
                })

        if cat == "accessibility":
            if any(k in proposal_lower for k in ["couleur seule", "uniquement visuel"]):
                violations.append({
                    "constraint": constraint.get("name", cat),
                    "severity": severity,
                    "issue": "Information transmise uniquement par la couleur — violation WCAG 1.4.1.",
                    "alternative": "Ajouter une icône ou un texte complémentaire.",
                })

        if cat == "mobile":
            if any(k in proposal_lower for k in ["hover only", "hover uniquement", "desktop only"]):
                violations.append({
                    "constraint": constraint.get("name", cat),
                    "severity": severity,
                    "issue": "Cette interaction n'est pas disponible sur mobile (hover).",
                    "alternative": "Implémenter une alternative touch (tap, long press).",
                })

    return violations


def get_budget_recommendation(budget: str) -> dict:
    budget_lower = budget.lower()
    for tier, info in BUDGET_TIERS.items():
        if tier in budget_lower:
            return {"tier": tier, **info}
    return BUDGET_TIERS["startup"]


def format_constraint_checklist(project: dict) -> str:
    lines = ["# Checklist Contraintes Projet\n"]

    for constraint in DEFAULT_CONSTRAINTS:
        lines.append(f"\n## {constraint['name']} ({constraint['category']}) — [{constraint['severity'].upper()}]")
        lines.append(f"{constraint['description']}\n")
        for item in constraint["checklist"]:
            lines.append(f"- [ ] {item}")

    return "\n".join(lines)


def get_constraint(category: str) -> dict | None:
    for c in DEFAULT_CONSTRAINTS:
        if c["category"] == category:
            return c
    return None
