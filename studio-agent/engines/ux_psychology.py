"""UX Psychology Engine — explains WHY design decisions work psychologically."""

from __future__ import annotations

UX_LAWS = [
    {
        "name": "Loi de Fitts",
        "domain": "interaction",
        "principle": "Le temps pour atteindre une cible est fonction de la distance et de la taille de la cible.",
        "application": "Les CTAs principaux doivent être grands et placés près de l'attention de l'utilisateur.",
        "anti_pattern": "Bouton de 20px à l'autre bout de l'écran du contenu associé.",
        "examples": ["Boutons full-width sur mobile", "Floating action buttons", "Sticky CTAs"],
    },
    {
        "name": "Loi de Hick",
        "domain": "decision",
        "principle": "Le temps de décision augmente logarithmiquement avec le nombre de choix.",
        "application": "Limiter les options à 3-5 maximum. Utiliser la progressive disclosure.",
        "anti_pattern": "Menu de navigation avec 15 items au même niveau.",
        "examples": ["Prix en 3 tiers", "Navigation simplifiée", "Onboarding step-by-step"],
    },
    {
        "name": "Loi de Miller",
        "domain": "memory",
        "principle": "La mémoire de travail peut retenir 7 (±2) éléments simultanément.",
        "application": "Grouper les informations en chunks de 5-7 éléments maximum.",
        "anti_pattern": "Formulaire de 20 champs sur une seule page.",
        "examples": ["Numéros de téléphone formatés", "Pagination", "Navigation par groupes"],
    },
    {
        "name": "Effet Von Restorff",
        "domain": "memory",
        "principle": "Les éléments qui se distinguent du reste sont mieux mémorisés.",
        "application": "Mettre en évidence un élément prioritaire (prix recommandé, feature phare).",
        "anti_pattern": "Tous les plans tarifaires avec le même design.",
        "examples": ["Plan 'Popular' mis en avant", "Badge 'New'", "Couleur d'accent sur le CTA"],
    },
    {
        "name": "Principe de réciprocité",
        "domain": "conversion",
        "principle": "Les gens sont plus enclins à donner après avoir reçu quelque chose.",
        "application": "Offrir de la valeur gratuite avant de demander l'email ou l'achat.",
        "anti_pattern": "Formulaire de newsletter sans aucune valeur proposée.",
        "examples": ["Freemium", "Guide PDF gratuit", "Essai 14 jours", "Template offert"],
    },
    {
        "name": "Preuve sociale",
        "domain": "trust",
        "principle": "Les gens s'alignent sur les comportements des autres dans des situations d'incertitude.",
        "application": "Afficher des chiffres, logos clients, témoignages et reviews près des CTAs.",
        "anti_pattern": "Page de vente sans aucun élément de preuve sociale.",
        "examples": ["'10,000 clients satisfaits'", "Logos d'entreprises", "Nombre d'étoiles"],
    },
    {
        "name": "Biais d'ancrage",
        "domain": "pricing",
        "principle": "Le premier chiffre vu influence fortement les jugements suivants.",
        "application": "Montrer le prix 'avant' barré à côté du prix réduit. Mettre le plan le plus cher en premier.",
        "anti_pattern": "Afficher uniquement le prix final sans contexte.",
        "examples": ["Prix barré", "Plan Enterprise en premier", "'Valeur: 1 000€ — Votre prix: 97€'"],
    },
    {
        "name": "Curiosity Gap",
        "domain": "engagement",
        "principle": "L'esprit humain cherche à combler les lacunes d'information.",
        "application": "Créer de l'intrigue dans les titres et révéler l'information progressivement.",
        "anti_pattern": "Tout révéler dans le hero, aucune raison de scroller.",
        "examples": ["Titres énigmatiques", "Progressive disclosure", "Parallax reveal"],
    },
    {
        "name": "Effet de dotation",
        "domain": "retention",
        "principle": "Les gens valorisent davantage ce qu'ils perçoivent comme leur appartenant.",
        "application": "Donner un sentiment d'ownership dès l'onboarding (prénom, avatar, espace personnalisé).",
        "anti_pattern": "Onboarding générique sans personnalisation.",
        "examples": ["'Votre espace', 'Votre dashboard'", "Avatar personnalisable", "Données importées dès J1"],
    },
    {
        "name": "Loi de Jakob",
        "domain": "ux",
        "principle": "Les utilisateurs préfèrent les interfaces qui fonctionnent comme celles qu'ils connaissent déjà.",
        "application": "Utiliser des patterns UI standards pour les éléments critiques. Innover seulement là où ça ajoute de la valeur.",
        "anti_pattern": "Réinventer le bouton 'Retour' ou le menu de navigation.",
        "examples": ["Logo en haut à gauche", "Panier en haut à droite", "Hamburger menu mobile"],
    },
    {
        "name": "Charge cognitive",
        "domain": "ux",
        "principle": "La mémoire de travail est limitée. Chaque effort d'apprentissage réduit l'énergie disponible pour la tâche principale.",
        "application": "Éliminer toute complexité inutile. Un seul objectif par écran.",
        "anti_pattern": "Page avec 5 CTAs différents, 3 popups et une barre de navigation complexe.",
        "examples": ["One thing per page", "Blank checkout", "Focus mode"],
    },
    {
        "name": "Principle of Least Surprise",
        "domain": "ux",
        "principle": "Les interfaces doivent se comporter comme prévu par l'utilisateur.",
        "application": "Les éléments qui ressemblent à des boutons doivent être cliquables. Le texte bleu souligné est un lien.",
        "anti_pattern": "Texte décoratif souligné en bleu qui n'est pas un lien.",
        "examples": ["Affordances claires", "Feedback immédiat", "États hover cohérents"],
    },
]

EMOTIONAL_DESIGN_PRINCIPLES = [
    {
        "level": "viscéral",
        "description": "Réaction immédiate et inconsciente à l'apparence.",
        "how_to": "Utiliser des couleurs et formes qui déclenchent les bonnes émotions instinctives. Vert = confiance/croissance. Bleu = calme/confiance. Rouge = urgence/passion.",
    },
    {
        "level": "comportemental",
        "description": "Plaisir d'utilisation, efficacité et confort.",
        "how_to": "Réduire les frictions. Chaque interaction doit procurer une satisfaction subtile (animations de feedback, sons, vibrations).",
    },
    {
        "level": "réflectif",
        "description": "Signification, valeurs et identité que le produit transmet.",
        "how_to": "Raconter une histoire cohérente. Le design doit refléter les valeurs de la marque et de l'utilisateur.",
    },
]

TRUST_SIGNALS = [
    "Logos de clients reconnus",
    "Chiffres concrets (clients, téléchargements, satisfaction)",
    "Témoignages avec photo, nom et titre",
    "Certifications et badges (HTTPS, GDPR, SOC2)",
    "Cas d'usage détaillés",
    "Guarantee / refund policy visible",
    "Profils LinkedIn des fondateurs",
    "Presse et mentions médias",
    "Changelog public (transparence)",
    "Temps de réponse support visible",
]


def get_law(name: str) -> dict | None:
    for law in UX_LAWS:
        if law["name"].lower() == name.lower():
            return law
    return None


def get_laws_by_domain(domain: str) -> list[dict]:
    return [l for l in UX_LAWS if l["domain"] == domain]


def format_ux_analysis(context: str) -> str:
    return f"""# Analyse UX Psychology

Contexte : {context}

## Lois UX applicables

{chr(10).join(f"### {law['name']}{chr(10)}**Principe :** {law['principle']}{chr(10)}**Application :** {law['application']}{chr(10)}**Anti-pattern à éviter :** {law['anti_pattern']}" for law in UX_LAWS[:5])}

## Design émotionnel

{chr(10).join(f"**Niveau {e['level']} :** {e['how_to']}" for e in EMOTIONAL_DESIGN_PRINCIPLES)}

## Signaux de confiance recommandés

{chr(10).join(f"- {s}" for s in TRUST_SIGNALS[:5])}
"""


def get_psychology_for_goal(goal: str) -> list[dict]:
    """Return relevant laws based on the design goal."""
    goal_lower = goal.lower()
    relevant = []
    if any(k in goal_lower for k in ["converti", "vendre", "achat", "cta"]):
        relevant.extend(get_laws_by_domain("conversion") + get_laws_by_domain("pricing"))
    if any(k in goal_lower for k in ["confiance", "trust", "crédibilité"]):
        relevant.extend(get_laws_by_domain("trust"))
    if any(k in goal_lower for k in ["engagement", "retenir", "revenir"]):
        relevant.extend(get_laws_by_domain("engagement") + get_laws_by_domain("retention"))
    if any(k in goal_lower for k in ["simple", "clarté", "cognitif"]):
        relevant.extend(get_laws_by_domain("ux") + get_laws_by_domain("memory"))
    return relevant or UX_LAWS[:3]
