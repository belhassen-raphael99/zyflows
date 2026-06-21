"""Continuous Improvement Loop — always proposes next steps and improvements."""

from __future__ import annotations

IMPROVEMENT_CATEGORIES = [
    "UX & Parcours utilisateur",
    "Performances & Core Web Vitals",
    "Conversion & Business",
    "Design & Direction artistique",
    "Motion & Interactions",
    "Accessibilité & Inclusion",
    "SEO & Visibilité",
    "Technique & Architecture",
    "Contenu & Copywriting",
    "3D & Immersion",
]

INNOVATION_OPPORTUNITIES = [
    "Intégrer un assistant IA contextuel natif dans l'interface",
    "Créer une signature motion unique et reconnaissable",
    "Développer un design system évolutif avec tokens dynamiques",
    "Implémenter un système de personnalisation utilisateur progressif",
    "Ajouter un mode de visualisation de données temps réel",
    "Explorer le WebGPU pour des effets visuels inédits",
    "Créer une expérience onboarding gamifiée",
    "Implémenter du Zero UI sur les tâches répétitives",
    "Développer un mode offline-first avec synchronisation",
    "Créer un composant 3D signature pour le hero",
]

COMMON_RISKS = [
    {
        "risk": "Feature creep",
        "mitigation": "Revenir au MVP. Toute nouvelle feature doit avoir un use case validé.",
    },
    {
        "risk": "Performance dégradée par les animations",
        "mitigation": "Profiler avec Chrome DevTools. Utiliser will-change avec parcimonie.",
    },
    {
        "risk": "Accessibilité sacrifiée pour l'esthétique",
        "mitigation": "Test axe-core à chaque sprint. Ratio de contraste non négociable.",
    },
    {
        "risk": "Stack trop complexe pour l'équipe",
        "mitigation": "Valider chaque technologie avec l'équipe. Prototyper en 2 jours max.",
    },
    {
        "risk": "Design inconsistant entre les pages",
        "mitigation": "Design system comme source de vérité unique. Storybook pour validation.",
    },
    {
        "risk": "SEO impacté par le JS-first",
        "mitigation": "SSR ou SSG pour les pages critiques. Tester avec Search Console.",
    },
    {
        "risk": "Expérience mobile sacrifiée",
        "mitigation": "Mobile-first en permanence. Test sur vrai device à chaque milestone.",
    },
]


def format_improvement_loop(
    phase: str,
    improvements: list[str] | None = None,
    innovations: list[str] | None = None,
    risks: list[str] | None = None,
    next_steps: list[str] | None = None,
) -> str:
    default_improvements = [
        f"Auditer les performances actuelles avec Lighthouse sur la phase {phase}",
        "Tester le parcours critique avec 3 utilisateurs réels",
        "Vérifier la cohérence visuelle sur 3 breakpoints",
    ]

    default_innovations = [
        "Explorer une micro-interaction signature mémorable pour cette phase",
        "Tester une variation radicale du concept actuel (Innovation Engine)",
        "Rechercher 5 nouvelles inspirations sectorielles avec web_search",
    ]

    default_risks = [risks[0] if risks else COMMON_RISKS[0]["risk"]]

    default_next_steps = [
        f"Finaliser les livrables de la phase {phase}",
        "Mettre à jour la mémoire projet avec les décisions de cette session",
        "Préparer la transition vers la phase suivante",
    ]

    lines = [
        "\n---",
        "\n[CONTINUOUS IMPROVEMENT LOOP]\n",
        "🔧 **3 PISTES D'AMÉLIORATION IMMÉDIATES :**",
    ]
    for i, item in enumerate((improvements or default_improvements)[:3], 1):
        lines.append(f"{i}. {item}")

    lines.append("\n💡 **3 IDÉES INNOVANTES À EXPLORER :**")
    for i, item in enumerate((innovations or default_innovations)[:3], 1):
        lines.append(f"{i}. {item}")

    lines.append("\n⚠️ **RISQUES POTENTIELS IDENTIFIÉS :**")
    selected_risks = COMMON_RISKS[:2] if not risks else [{"risk": r, "mitigation": "Surveiller de près"} for r in risks[:2]]
    for r in selected_risks:
        lines.append(f"- **{r['risk']}** → Mitigation : {r['mitigation']}")

    lines.append("\n🚀 **OPPORTUNITÉS FUTURES :**")
    opportunities = [INNOVATION_OPPORTUNITIES[0], INNOVATION_OPPORTUNITIES[1]]
    for opp in opportunities:
        lines.append(f"- {opp}")

    lines.append("\n📋 **PROCHAINES ÉTAPES RECOMMANDÉES :**")
    for i, step in enumerate((next_steps or default_next_steps)[:3], 1):
        lines.append(f"{i}. {step}")

    return "\n".join(lines)


def get_phase_improvements(phase_id: str) -> dict[str, list[str]]:
    phase_improvements = {
        "discovery": {
            "improvements": [
                "Approfondir la recherche sur les 3 alternatives au problème identifié",
                "Valider les hypothèses avec au moins 3 entretiens utilisateurs",
                "Documenter le contexte marché avec des données quantitatives",
            ],
            "innovations": [
                "Explorer le problème sous l'angle de l'analogie (que ferait Amazon dans ce cas ?)",
                "Mapper l'expérience émotionnelle du problème (pas seulement fonctionnelle)",
                "Identifier les jobs-to-be-done non satisfaits",
            ],
            "next_steps": [
                "Rédiger un problem statement validé",
                "Lancer la phase Research avec 5 concurrents identifiés",
                "Créer 2-3 hypothèses testables",
            ],
        },
        "ui": {
            "improvements": [
                "Passer tous les composants à travers le contrast checker",
                "Créer les états manquants (empty, error, loading, success)",
                "Valider la hiérarchie typographique sur mobile",
            ],
            "innovations": [
                "Créer un élément UI signature qu'on ne voit nulle part ailleurs",
                "Explorer une palette de couleurs non conventionnelle pour ce secteur",
                "Développer une micro-interaction mémorable pour le CTA principal",
            ],
            "next_steps": [
                "Finaliser les maquettes de tous les écrans critiques",
                "Créer le design system dans Figma",
                "Préparer les assets pour le développement",
            ],
        },
    }
    return phase_improvements.get(phase_id, {
        "improvements": [
            "Auditer les livrables produits pour cette phase",
            "Vérifier l'alignement avec la vision et les objectifs",
            "Documenter les décisions clés prises",
        ],
        "innovations": [
            "Explorer une approche non conventionnelle pour la phase suivante",
            "Rechercher des inspirations récentes avec web_search",
            "Tester le concept avec un utilisateur externe",
        ],
        "next_steps": [
            "Finaliser les livrables de la phase actuelle",
            "Préparer la transition vers la phase suivante",
            "Mettre à jour la mémoire projet",
        ],
    })
