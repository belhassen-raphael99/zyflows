"""Quality Scorer — evaluates project quality across 10 dimensions."""

from __future__ import annotations

QUALITY_DIMENSIONS = [
    {"key": "innovation", "label": "Innovation", "weight": 1.2},
    {"key": "ux", "label": "UX", "weight": 1.5},
    {"key": "ui", "label": "UI", "weight": 1.3},
    {"key": "performance", "label": "Performance", "weight": 1.2},
    {"key": "accessibility", "label": "Accessibilité", "weight": 1.0},
    {"key": "seo", "label": "SEO", "weight": 0.8},
    {"key": "conversion", "label": "Conversion", "weight": 1.3},
    {"key": "originality", "label": "Originalité", "weight": 1.0},
    {"key": "immersion", "label": "Immersion", "weight": 0.9},
    {"key": "emotional_impact", "label": "Impact émotionnel", "weight": 1.1},
]

IMPROVEMENT_MAP = {
    "innovation": {
        "suggestion": "Intégrer une fonctionnalité vraiment inédite sur le marché",
        "impact": "high",
        "effort": "high",
        "how_to": "Conduire un atelier 'How Might We' et explorer les industries adjacentes pour des analogies innovantes.",
    },
    "ux": {
        "suggestion": "Réduire le nombre d'étapes dans les parcours critiques",
        "impact": "high",
        "effort": "medium",
        "how_to": "Mapper tous les parcours. Identifier les abandons. Fusionner ou supprimer les étapes non essentielles.",
    },
    "ui": {
        "suggestion": "Renforcer la hiérarchie visuelle et la cohérence des composants",
        "impact": "high",
        "effort": "medium",
        "how_to": "Auditer avec la grille 8px. Design system centralisé. Cohérence espacements/couleurs/typo.",
    },
    "performance": {
        "suggestion": "Optimiser Core Web Vitals et réduire le bundle size",
        "impact": "high",
        "effort": "medium",
        "how_to": "Analyser avec Lighthouse. Lazy-loading. Images WebP/AVIF. Code splitting.",
    },
    "accessibility": {
        "suggestion": "Atteindre le niveau WCAG 2.1 AA minimum",
        "impact": "high",
        "effort": "medium",
        "how_to": "Auditer avec axe-core. Corriger le contraste. ARIA manquants. Test VoiceOver/NVDA.",
    },
    "seo": {
        "suggestion": "Implémenter les structured data et optimiser les meta tags",
        "impact": "medium",
        "effort": "low",
        "how_to": "Schema.org JSON-LD. Optimiser H1-H6. Sitemap XML. Core Web Vitals.",
    },
    "conversion": {
        "suggestion": "Renforcer les CTAs et réduire les frictions dans les tunnels",
        "impact": "high",
        "effort": "medium",
        "how_to": "CTAs above the fold. Verbes d'action précis. Preuve sociale près des formulaires. A/B test.",
    },
    "originality": {
        "suggestion": "Développer un élément signature vraiment unique",
        "impact": "high",
        "effort": "high",
        "how_to": "Micro-interaction qu'on ne voit nulle part. Animation signature. Système de couleurs unique.",
    },
    "immersion": {
        "suggestion": "Ajouter de la profondeur et des effets subtils",
        "impact": "medium",
        "effort": "medium",
        "how_to": "Parallaxe CSS sur le hero. Éléments 3D légers (Spline). Transitions de page fluides (Framer Motion).",
    },
    "emotional_impact": {
        "suggestion": "Renforcer le storytelling et la connexion émotionnelle",
        "impact": "high",
        "effort": "high",
        "how_to": "Titres Before/After/Bridge. Éléments humains (visages, histoires réelles). Palette émotionnelle cohérente.",
    },
}


def compute_overall_score(scores: dict[str, int]) -> int:
    total_weight = sum(d["weight"] for d in QUALITY_DIMENSIONS)
    weighted_sum = sum(
        scores.get(d["key"], 0) * d["weight"]
        for d in QUALITY_DIMENSIONS
    )
    return round(weighted_sum / total_weight)


def get_quality_grade(score: int) -> dict:
    if score >= 95:
        return {"grade": "S+", "label": "Exceptionnel", "emoji": "🏆"}
    if score >= 90:
        return {"grade": "S", "label": "Excellent", "emoji": "⭐"}
    if score >= 80:
        return {"grade": "A", "label": "Très bien", "emoji": "🟢"}
    if score >= 70:
        return {"grade": "B", "label": "Bien", "emoji": "🔵"}
    if score >= 60:
        return {"grade": "C", "label": "Moyen", "emoji": "🟡"}
    if score >= 50:
        return {"grade": "D", "label": "Insuffisant", "emoji": "🟠"}
    return {"grade": "F", "label": "À retravailler", "emoji": "🔴"}


def identify_weak_areas(scores: dict, threshold: int = 90) -> list[str]:
    return [
        d["key"] for d in QUALITY_DIMENSIONS
        if scores.get(d["key"], 0) < threshold
    ]


def get_improvement_suggestions(scores: dict, threshold: int = 90) -> list[dict]:
    weak = identify_weak_areas(scores, threshold)
    suggestions = []
    for key in weak:
        info = IMPROVEMENT_MAP.get(key)
        if info:
            suggestions.append({
                "dimension": next((d["label"] for d in QUALITY_DIMENSIONS if d["key"] == key), key),
                "current_score": scores.get(key, 0),
                **info,
            })
    return sorted(suggestions, key=lambda x: {"high": 0, "medium": 1, "low": 2}.get(x["impact"], 1))


def assessProjectQuality(project: dict) -> dict:
    """Auto-assess quality based on project memory completeness."""
    scores = {
        "innovation": _assess_innovation(project),
        "ux": _assess_ux(project),
        "ui": _assess_ui(project),
        "performance": _assess_performance(project),
        "accessibility": _assess_accessibility(project),
        "seo": _assess_seo(project),
        "conversion": _assess_conversion(project),
        "originality": _assess_originality(project),
        "immersion": _assess_immersion(project),
        "emotional_impact": _assess_emotional_impact(project),
    }
    scores["overallScore"] = compute_overall_score(scores)
    return scores


def _assess_innovation(p: dict) -> int:
    score = 50
    if p.get("vision"): score += 10
    if len(p.get("objectives", [])) >= 3: score += 10
    if any("unique" in str(f).lower() or "innov" in str(f).lower() for f in p.get("features", [])): score += 15
    if any(i.get("style") == "futuristic" for i in p.get("inspirations_accepted", [])): score += 15
    return min(score, 100)


def _assess_ux(p: dict) -> int:
    score = 40
    if p.get("personas"): score += 20
    if p.get("user_journeys"): score += 20
    if p.get("phases", {}).get("ux", {}).get("status") == "completed": score += 20
    return min(score, 100)


def _assess_ui(p: dict) -> int:
    score = 40
    if len(p.get("color_palette", [])) >= 3: score += 20
    if p.get("typography", {}).get("primary"): score += 15
    if len(p.get("design_principles", [])) >= 3: score += 15
    if len(p.get("inspirations_accepted", [])) >= 3: score += 10
    return min(score, 100)


def _assess_performance(p: dict) -> int:
    score = 60
    if any(c.get("category") == "performance" for c in p.get("constraints", []) if isinstance(c, dict)): score += 20
    if any("next" in t.get("name", "").lower() or "vite" in t.get("name", "").lower()
           for t in p.get("technologies_selected", [])): score += 20
    return min(score, 100)


def _assess_accessibility(p: dict) -> int:
    score = 50
    if any(c.get("category") == "accessibility" for c in p.get("constraints", []) if isinstance(c, dict)): score += 30
    if any("accessib" in str(dp).lower() for dp in p.get("design_principles", [])): score += 20
    return min(score, 100)


def _assess_seo(p: dict) -> int:
    score = 50
    if any("seo" in str(o).lower() or "organique" in str(o).lower() for o in p.get("objectives", [])): score += 30
    if any("next" in t.get("name", "").lower() or "astro" in t.get("name", "").lower()
           for t in p.get("technologies_selected", [])): score += 20
    return min(score, 100)


def _assess_conversion(p: dict) -> int:
    score = 50
    if p.get("mvp", {}).get("success_criteria"): score += 20
    if any("converti" in str(o).lower() or "lead" in str(o).lower() for o in p.get("objectives", [])): score += 20
    if p.get("user_journeys"): score += 10
    return min(score, 100)


def _assess_originality(p: dict) -> int:
    score = 40
    styles = set(i.get("style", "") for i in p.get("inspirations_accepted", []))
    score += min(len(styles) * 10, 30)
    if len([d for d in p.get("decisions_accepted", []) if d.get("category") == "design"]) >= 3: score += 30
    return min(score, 100)


def _assess_immersion(p: dict) -> int:
    score = 40
    if p.get("animation_library"): score += 20
    if p.get("phases", {}).get("3d", {}).get("status") != "pending": score += 20
    if p.get("phases", {}).get("motion", {}).get("status") != "pending": score += 20
    return min(score, 100)


def _assess_emotional_impact(p: dict) -> int:
    score = 40
    if p.get("brand_voice"): score += 20
    if any(c.get("role") == "accent" for c in p.get("color_palette", []) if isinstance(c, dict)): score += 15
    if any(persona.get("quote") for persona in p.get("personas", [])): score += 25
    return min(score, 100)


def format_quality_report(scores: dict) -> str:
    overall = scores.get("overallScore", 0)
    grade = get_quality_grade(overall)
    suggestions = get_improvement_suggestions(scores)

    lines = [
        "\n[QUALITY SCORE]",
    ]
    for d in QUALITY_DIMENSIONS:
        key = d["key"]
        val = scores.get(key, 0)
        warning = " ⚠️" if val < 90 else ""
        lines.append(f"  {d['label']}: {val}/100{warning}")

    lines.append(f"{'━' * 35}")
    lines.append(f"  SCORE GLOBAL: {overall}/100 [{grade['emoji']} Grade {grade['grade']} — {grade['label']}]")

    if suggestions:
        improved = [s["dimension"] for s in suggestions]
        lines.append(f"\n  ⚠️ Améliorations appliquées sur : {', '.join(improved)}")

    return "\n".join(lines)
