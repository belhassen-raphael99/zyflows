"""Prompt Engineering Engine — generates optimized prompts for every AI tool."""

from __future__ import annotations

PROMPT_TEMPLATES: list[dict] = [
    # ── Midjourney ─────────────────────────────────────────────────────────────
    {
        "id": "midjourney-moodboard",
        "tool": "Midjourney",
        "category": "image",
        "title": "Moodboard de direction artistique",
        "template": "{style} design direction, {colors} color palette, {mood} mood, {industry} industry, professional UI/UX moodboard, clean minimal layout, design reference, editorial photography, --ar 16:9 --stylize 750 --v 6",
        "variables": ["style", "colors", "mood", "industry"],
        "tips": ["Utiliser --ar 16:9 pour les moodboards", "--stylize 750 pour plus de créativité", "Ajouter 'no text' si tu veux une image sans texte"],
    },
    {
        "id": "midjourney-ui-mockup",
        "tool": "Midjourney",
        "category": "design",
        "title": "Mockup d'interface UI",
        "template": "{platform} app UI design, {style} aesthetic, {primary_color} accent color, dark mode interface, clean typography, {screen_type} screen, ultra realistic mockup, product design, no text overlay --ar 9:16 --stylize 500 --v 6",
        "variables": ["platform", "style", "primary_color", "screen_type"],
        "tips": ["Spécifier mobile/desktop/tablet", "Ajouter 'no text overlay' pour éviter les hallucinations de texte", "--ar 9:16 pour mobile"],
    },
    {
        "id": "midjourney-hero-3d",
        "tool": "Midjourney",
        "category": "3d",
        "title": "Hero 3D pour landing page",
        "template": "3D render {object}, {material} material, {color} color, {style} design, soft studio lighting, blender render, clean white/dark background, product visualization, ultra detailed, 8K --ar 16:9 --quality 2 --v 6",
        "variables": ["object", "material", "color", "style"],
        "tips": ["Préciser le matériau (glass, metal, matte plastic)", "Studio lighting pour un rendu propre", "--quality 2 pour plus de détails"],
    },

    # ── Flux ───────────────────────────────────────────────────────────────────
    {
        "id": "flux-ui-concept",
        "tool": "Flux",
        "category": "design",
        "title": "Concept d'interface",
        "template": "A {style} {platform} interface design for {product_type}, featuring {key_elements}, {color_scheme} colors, {typography_style} typography, clean and modern layout, high-fidelity mockup",
        "variables": ["style", "platform", "product_type", "key_elements", "color_scheme", "typography_style"],
        "tips": ["Flux est plus précis sur les descriptions détaillées", "Préciser les éléments UI spécifiques (cards, buttons, navigation)"],
    },

    # ── Ideogram ───────────────────────────────────────────────────────────────
    {
        "id": "ideogram-logo",
        "tool": "Ideogram",
        "category": "branding",
        "title": "Logo d'application",
        "template": "Minimalist logo for '{brand_name}', {style} design, {icon_concept} icon, {primary_color} and {secondary_color}, clean vector style, no gradients, app icon ready",
        "variables": ["brand_name", "style", "icon_concept", "primary_color", "secondary_color"],
        "tips": ["Ideogram excelle pour les logos avec texte", "Préciser 'no gradients' pour un logo clean", "Tester avec et sans le nom de la marque"],
    },

    # ── Spline AI ──────────────────────────────────────────────────────────────
    {
        "id": "spline-scene",
        "tool": "Spline AI",
        "category": "3d",
        "title": "Scène 3D web interactive",
        "template": "Create a {style} 3D scene with {main_object} as the hero element. Use {material} materials with {color_scheme} colors. Add {animation_type} animation. The scene should feel {mood} and work as a web hero section background.",
        "variables": ["style", "main_object", "material", "color_scheme", "animation_type", "mood"],
        "tips": ["Spécifier les matériaux compatibles web (pas trop complexes)", "Mentionner 'optimized for web' et 'low polygon'", "Inclure le type d'animation (rotate, float, pulse)"],
    },

    # ── Rive ───────────────────────────────────────────────────────────────────
    {
        "id": "rive-micro-interaction",
        "tool": "Rive",
        "category": "animation",
        "title": "Micro-interaction pour bouton/état",
        "template": "Design a {component_type} animation in Rive: idle state shows {idle_description}, on hover transitions to {hover_description} with {easing} easing, on click triggers {click_description}. Style: {visual_style}. Colors: {colors}.",
        "variables": ["component_type", "idle_description", "hover_description", "easing", "click_description", "visual_style", "colors"],
        "tips": ["Décrire les états (idle, hover, pressed, success, error)", "Préciser l'easing (spring, ease-in-out)", "Mentionner si c'est une state machine"],
    },

    # ── GPT-4o ─────────────────────────────────────────────────────────────────
    {
        "id": "gpt-copywriting",
        "tool": "GPT-4o",
        "category": "writing",
        "title": "Copywriting de landing page",
        "template": """Écris le copywriting complet d'une landing page pour {product_name}.

Contexte :
- Produit : {product_description}
- Public cible : {target_audience}
- Problème résolu : {problem}
- Proposition de valeur unique : {value_prop}
- Ton de marque : {brand_voice}

Écris :
1. Hero : Titre H1 (max 8 mots), sous-titre (max 20 mots), CTA
2. Section bénéfices : 3 bénéfices avec icône + titre + description
3. Social proof : 2 témoignages clients fictifs (vraisemblables)
4. FAQ : 5 questions fréquentes
5. CTA final avec texte de bouton et texte de réassurance en dessous

Format : Markdown structuré. Ton : {brand_voice}.""",
        "variables": ["product_name", "product_description", "target_audience", "problem", "value_prop", "brand_voice"],
        "tips": ["Préciser le ton (professionnel, amical, premium, etc.)", "Donner des exemples de marques similaires pour le ton", "Demander plusieurs variations du H1"],
    },

    # ── Claude ─────────────────────────────────────────────────────────────────
    {
        "id": "claude-ux-audit",
        "tool": "Claude",
        "category": "ux",
        "title": "Audit UX d'une interface",
        "template": """Effectue un audit UX complet de l'interface suivante :

{interface_description}

Public cible : {target_audience}
Objectif principal : {main_goal}

Analyse selon :
1. Hiérarchie visuelle (F-pattern, Z-pattern)
2. Charge cognitive (loi de Miller, chunking)
3. CTAs et conversion (placement, contraste, texte)
4. Parcours critique (étapes jusqu'à l'objectif)
5. Signaux de confiance (proof, credibility)
6. Accessibilité perçue (contraste, taille, lisibilité)
7. Mobile-first (responsive, zones tactiles)

Format : Pour chaque catégorie : Score /10, Problèmes identifiés, Recommandations spécifiques.""",
        "variables": ["interface_description", "target_audience", "main_goal"],
        "tips": ["Fournir des screenshots si possible", "Préciser les métriques actuelles si disponibles"],
    },
    {
        "id": "claude-design-system",
        "tool": "Claude",
        "category": "design",
        "title": "Génération de design tokens",
        "template": """Génère un design system complet en JSON pour {brand_name}.

Direction : {visual_direction}
Secteur : {industry}
Ton : {brand_tone}
Couleur primaire : {primary_color}

Génère :
1. Colors (primary, secondary, accent, semantic, neutrals) — avec HEX et HSL
2. Typography (font families, scale modular, line heights, letter spacing)
3. Spacing (base-8 system)
4. Border radius (tokens cohérents)
5. Shadows (5 niveaux)
6. Animation (durations, easings)

Format : JSON exploitable directement dans Tailwind CSS config et Figma variables.""",
        "variables": ["brand_name", "visual_direction", "industry", "brand_tone", "primary_color"],
        "tips": ["Demander l'output en JSON Tailwind ET en CSS variables", "Préciser si dark mode requis"],
    },

    # ── Framer AI ─────────────────────────────────────────────────────────────
    {
        "id": "framer-landing",
        "tool": "Framer AI",
        "category": "prototype",
        "title": "Landing page Framer",
        "template": "Build a {style} landing page for {product_name}. Include: hero section with {headline_style} headline and {cta_type} CTA, {num_sections} feature sections with {layout_type} layout, pricing section with {num_tiers} tiers, footer. Use {color_scheme} color scheme and {animation_style} animations.",
        "variables": ["style", "product_name", "headline_style", "cta_type", "num_sections", "layout_type", "num_tiers", "color_scheme", "animation_style"],
        "tips": ["Framer AI comprend mieux les instructions en anglais", "Préciser le style (Apple, Stripe, Linear, Notion)", "Mentionner les animations souhaitées (parallax, fade, slide)"],
    },

    # ── Meshy ──────────────────────────────────────────────────────────────────
    {
        "id": "meshy-product-3d",
        "tool": "Meshy",
        "category": "3d",
        "title": "Modèle 3D de produit",
        "template": "A {product_type} product model, {material} material, {finish} finish, {primary_color} color with {secondary_color} accents, {style} design language, product visualization quality, clean and minimal",
        "variables": ["product_type", "material", "finish", "primary_color", "secondary_color", "style"],
        "tips": ["Préciser le niveau de détail souhaité", "Demander GLTF/GLB pour l'export web", "Tester différents matériaux (matte, glossy, metallic)"],
    },

    # ── Runway ────────────────────────────────────────────────────────────────
    {
        "id": "runway-brand-video",
        "tool": "Runway",
        "category": "video",
        "title": "Vidéo de marque",
        "template": "{visual_style} brand video for {brand_name}, {mood} atmosphere, {color_grading} color grading, smooth camera movement, {subject} as main focus, premium production quality, {duration} seconds",
        "variables": ["visual_style", "brand_name", "mood", "color_grading", "subject", "duration"],
        "tips": ["Limiter à 4-10 secondes pour les clips web", "Préciser le mood via des références (cinematic, ethereal, bold)", "Motion Gen 3 Alpha pour la meilleure qualité"],
    },

    # ── v0 ────────────────────────────────────────────────────────────────────
    {
        "id": "v0-component",
        "tool": "v0 (Vercel)",
        "category": "code",
        "title": "Composant React UI",
        "template": "Create a {component_name} React component with Tailwind CSS and shadcn/ui. It should {functionality}. Design: {visual_description}. States: {states}. Dark mode support required. TypeScript. Accessible (ARIA labels).",
        "variables": ["component_name", "functionality", "visual_description", "states"],
        "tips": ["Préciser les états (default, hover, focus, disabled, loading, error, success)", "Mentionner si le composant doit être animé", "Spécifier si responsive requis"],
    },

    # ── Cursor / Windsurf ─────────────────────────────────────────────────────
    {
        "id": "cursor-feature",
        "tool": "Cursor",
        "category": "code",
        "title": "Implémentation d'une feature",
        "template": """Implement a {feature_name} feature in this {framework} project.

Requirements:
- {requirement_1}
- {requirement_2}
- {requirement_3}

Technical constraints:
- {tech_constraint}

Expected behavior: {behavior_description}

Files to create/modify: {files}

Follow existing code patterns. No new dependencies without justification. Add TypeScript types.""",
        "variables": ["feature_name", "framework", "requirement_1", "requirement_2", "requirement_3", "tech_constraint", "behavior_description", "files"],
        "tips": ["Toujours inclure les contraintes techniques", "Mentionner les patterns existants à suivre", "Préciser si des tests sont requis"],
    },
]


def get_templates_for_tool(tool_name: str) -> list[dict]:
    return [t for t in PROMPT_TEMPLATES if t["tool"].lower() == tool_name.lower()]


def get_templates_for_category(category: str) -> list[dict]:
    return [t for t in PROMPT_TEMPLATES if t["category"].lower() == category.lower()]


def get_template(template_id: str) -> dict | None:
    for t in PROMPT_TEMPLATES:
        if t["id"] == template_id:
            return t
    return None


def fill_template(template_id: str, variables: dict[str, str]) -> str:
    tmpl = get_template(template_id)
    if not tmpl:
        return f"Template '{template_id}' introuvable."

    prompt = tmpl["template"]
    for key, value in variables.items():
        prompt = prompt.replace(f"{{{key}}}", value)

    missing = [var for var in tmpl["variables"] if f"{{{var}}}" in prompt]
    if missing:
        return f"Variables manquantes: {', '.join(missing)}\n\n{prompt}"

    result = f"[PROMPT POUR {tmpl['tool'].upper()} — {tmpl['title']}]\n\n{prompt}"
    if tmpl.get("tips"):
        result += f"\n\n💡 Conseils:\n" + "\n".join(f"- {tip}" for tip in tmpl["tips"])
    return result


def list_all_tools() -> list[str]:
    return sorted(set(t["tool"] for t in PROMPT_TEMPLATES))


def format_prompt_library() -> str:
    lines = ["# Bibliothèque de Prompts IA\n"]
    by_tool: dict[str, list[dict]] = {}
    for t in PROMPT_TEMPLATES:
        by_tool.setdefault(t["tool"], []).append(t)

    for tool, templates in by_tool.items():
        lines.append(f"\n## {tool}")
        for tmpl in templates:
            lines.append(f"- **{tmpl['title']}** (`{tmpl['id']}`): Variables: {', '.join(tmpl['variables'])}")

    return "\n".join(lines)
