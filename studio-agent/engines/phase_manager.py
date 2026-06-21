"""Phase Manager — defines and manages the 12 project phases."""

from __future__ import annotations

PHASE_DEFINITIONS: list[dict] = [
    {
        "id": "discovery",
        "number": 1,
        "name": "Discovery",
        "description": "Comprendre le problème en profondeur, les besoins réels et le contexte.",
        "deliverables": [
            "Définition du problème core",
            "Hypothèses initiales documentées",
            "Questions clés identifiées",
            "Contexte marché cartographié",
        ],
        "key_questions": [
            "Quel problème résolvons-nous vraiment ?",
            "Pour qui est-ce un problème ?",
            "Pourquoi maintenant ?",
            "Quels sont les risques principaux ?",
        ],
    },
    {
        "id": "research",
        "number": 2,
        "name": "Research",
        "description": "Analyse approfondie du marché, des concurrents et des tendances.",
        "deliverables": [
            "Analyse concurrentielle (5+ concurrents)",
            "Analyse des tendances marché",
            "Benchmarks UX/UI sectoriels",
            "Insights utilisateurs",
            "Rapport de recherche complet",
        ],
        "key_questions": [
            "Qui sont les leaders du marché ?",
            "Quels sont leurs points faibles ?",
            "Quelles tendances émergent ?",
            "Quelle opportunité de différenciation existe ?",
        ],
    },
    {
        "id": "ideation",
        "number": 3,
        "name": "Ideation",
        "description": "Brainstorming ouvert, exploration de concepts, divergence créative.",
        "deliverables": [
            "Carte des idées (20+ idées)",
            "3-5 concepts candidats détaillés",
            "Concept gagnant sélectionné avec justification",
            "Moodboard initial",
        ],
        "key_questions": [
            "Quelles sont les 10 façons différentes de résoudre ce problème ?",
            "Quelle approche crée le plus de valeur ?",
            "Quelle est la vision 5 ans ?",
            "Quel serait un produit magique idéal ?",
        ],
    },
    {
        "id": "validation",
        "number": 4,
        "name": "Validation",
        "description": "Vérifier que la solution conceptuelle est réellement meilleure et désirable.",
        "deliverables": [
            "Hypothèses testées",
            "Retours utilisateurs documentés",
            "Score de désirabilité",
            "Décision go/no-go documentée",
        ],
        "key_questions": [
            "Les utilisateurs comprennent-ils l'idée en 5 secondes ?",
            "Sont-ils prêts à payer pour ça ?",
            "Y a-t-il un risque d'adoption ?",
            "Le concept est-il différenciant ?",
        ],
    },
    {
        "id": "ux",
        "number": 5,
        "name": "UX Design",
        "description": "Architecture de l'information, wireframes et parcours utilisateurs.",
        "deliverables": [
            "Architecture de l'information complète",
            "Wireframes basse fidélité (tous écrans critiques)",
            "Parcours utilisateurs détaillés (3+ parcours)",
            "Flux de navigation",
            "Spécifications UX",
        ],
        "key_questions": [
            "Quelle est la hiérarchie de l'information ?",
            "Quel est le chemin critique de l'utilisateur ?",
            "Où se trouvent les frictions potentielles ?",
            "Comment réduire la charge cognitive ?",
        ],
    },
    {
        "id": "ui",
        "number": 6,
        "name": "UI Design",
        "description": "Direction artistique, design system et interfaces haute fidélité.",
        "deliverables": [
            "Direction artistique définie",
            "Design tokens complets",
            "Bibliothèque de composants",
            "Maquettes haute fidélité (tous écrans)",
            "Design system documenté",
        ],
        "key_questions": [
            "Quelle émotion doit ressentir l'utilisateur ?",
            "Quelle personnalité de marque transmettre ?",
            "Comment se différencier visuellement ?",
            "Le design est-il cohérent partout ?",
        ],
    },
    {
        "id": "motion",
        "number": 7,
        "name": "Motion Design",
        "description": "Animations, transitions, micro-interactions et feedback visuel.",
        "deliverables": [
            "Charte motion (timing, easing, style)",
            "Bibliothèque de micro-interactions",
            "Animations de transitions",
            "Effets de loading",
            "Exports Rive/Lottie",
        ],
        "key_questions": [
            "Quel est le rythme global du produit ?",
            "Quelles interactions méritent une animation ?",
            "Comment le motion renforce la marque ?",
            "Comment respecter prefers-reduced-motion ?",
        ],
    },
    {
        "id": "3d",
        "number": 8,
        "name": "3D & Immersion",
        "description": "Objets 3D, shaders, physique et expérience immersive.",
        "deliverables": [
            "Modèles 3D optimisés web",
            "Shaders personnalisés",
            "Scènes WebGL/WebGPU",
            "Optimisations de performance 3D",
        ],
        "key_questions": [
            "La 3D ajoute-t-elle une valeur réelle ?",
            "Quel impact sur les performances ?",
            "Comment dégrader gracieusement sur mobile ?",
            "Quel outil 3D est le plus adapté ?",
        ],
    },
    {
        "id": "prototype",
        "number": 9,
        "name": "Prototype",
        "description": "Prototype interactif haute fidélité pour tests utilisateurs.",
        "deliverables": [
            "Prototype cliquable complet",
            "Scénarios de test définis",
            "Tests utilisateurs effectués",
            "Rapport de tests",
            "Itérations post-tests",
        ],
        "key_questions": [
            "Le prototype reflète-t-il la vision finale ?",
            "Quels scénarios tester en priorité ?",
            "Comment mesurer le succès des tests ?",
            "Quelles décisions prendre avant le dev ?",
        ],
    },
    {
        "id": "technical_planning",
        "number": 10,
        "name": "Planning Technique",
        "description": "Architecture technique, choix technologiques et planification de production.",
        "deliverables": [
            "Architecture technique détaillée",
            "Stack technologique définitive",
            "Spécifications techniques",
            "Estimation de charge",
            "Backlog produit priorisé",
        ],
        "key_questions": [
            "Quel framework est le plus adapté ?",
            "Quelle architecture de données ?",
            "Quels connecteurs et APIs ?",
            "Comment scaler le produit ?",
        ],
    },
    {
        "id": "production",
        "number": 11,
        "name": "Production",
        "description": "Développement complet, intégrations et déploiement.",
        "deliverables": [
            "Codebase production",
            "Tests automatisés",
            "Intégrations complètes",
            "CI/CD configuré",
            "Documentation technique",
        ],
        "key_questions": [
            "Le code respecte les standards qualité ?",
            "La couverture de tests est suffisante ?",
            "Les performances sont dans les objectifs ?",
            "Le déploiement est automatisé ?",
        ],
    },
    {
        "id": "optimization",
        "number": 12,
        "name": "Optimisation",
        "description": "Analyse des métriques, amélioration continue et tests.",
        "deliverables": [
            "Rapport de performance",
            "Résultats A/B tests",
            "Améliorations implémentées",
            "Métriques business analysées",
            "Roadmap itération suivante",
        ],
        "key_questions": [
            "Les KPIs business sont atteints ?",
            "Où se trouvent les points de friction ?",
            "Qu'est-ce qui peut être amélioré ?",
            "Quelle est la prochaine version ?",
        ],
    },
]

PHASE_ORDER = [p["id"] for p in PHASE_DEFINITIONS]


def get_phase_by_id(phase_id: str) -> dict | None:
    return next((p for p in PHASE_DEFINITIONS if p["id"] == phase_id), None)


def get_phase_by_number(number: int) -> dict | None:
    return next((p for p in PHASE_DEFINITIONS if p["number"] == number), None)


def get_next_phase_id(current_id: str) -> str | None:
    try:
        idx = PHASE_ORDER.index(current_id)
        return PHASE_ORDER[idx + 1] if idx < len(PHASE_ORDER) - 1 else None
    except ValueError:
        return None


def get_phase_progress(phases_state: dict) -> int:
    completed = sum(1 for p_id in PHASE_ORDER if phases_state.get(p_id, {}).get("status") == "completed")
    return round((completed / len(PHASE_ORDER)) * 100)


def format_phase_summary(phases_state: dict, current_phase_id: str) -> str:
    lines = ["# Progression du Projet\n"]
    for p in PHASE_DEFINITIONS:
        state = phases_state.get(p["id"], {}).get("status", "pending")
        icons = {"completed": "✅", "active": "🔵", "pending": "⬜"}
        is_current = " ← ACTUELLE" if p["id"] == current_phase_id else ""
        lines.append(f"{icons.get(state, '⬜')} Phase {p['number']}/12 — **{p['name']}**{is_current}")
    progress = get_phase_progress(phases_state)
    lines.append(f"\n**Progression globale : {progress}%**")
    return "\n".join(lines)
