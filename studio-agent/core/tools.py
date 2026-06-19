"""Tool definitions for the Claude AI Design Studio Agent."""

from __future__ import annotations

# ─── Tool schemas passed to Claude API ───────────────────────────────────────

TOOL_DEFINITIONS = [
    # ── Memory ──────────────────────────────────────────────────────────────
    {
        "name": "memory_read",
        "description": (
            "Lit la mémoire complète du projet actif. "
            "À appeler OBLIGATOIREMENT au début de chaque interaction pour maintenir la cohérence."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "project_id": {
                    "type": "string",
                    "description": "ID du projet. Laisser vide pour charger le projet actif.",
                }
            },
            "required": [],
        },
    },
    {
        "name": "memory_update",
        "description": (
            "Met à jour un ou plusieurs champs de la mémoire projet. "
            "À appeler après chaque décision, découverte ou changement important."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "field": {
                    "type": "string",
                    "description": (
                        "Champ à mettre à jour. Valeurs possibles : "
                        "vision, objectives, constraints, features, features_rejected, "
                        "target_audience, brand_voice, design_principles, personas, "
                        "color_palette, typography, animation_library, ai_tools_in_use, mvp"
                    ),
                },
                "value": {
                    "description": "Nouvelle valeur pour le champ (string, list ou object selon le champ).",
                },
                "mode": {
                    "type": "string",
                    "enum": ["replace", "append"],
                    "description": "replace: remplace la valeur. append: ajoute à une liste existante.",
                    "default": "replace",
                },
            },
            "required": ["field", "value"],
        },
    },
    {
        "name": "memory_add_decision",
        "description": "Enregistre une décision validée dans la mémoire projet.",
        "input_schema": {
            "type": "object",
            "properties": {
                "decision": {"type": "string", "description": "La décision prise."},
                "rationale": {"type": "string", "description": "Justification de la décision."},
                "category": {
                    "type": "string",
                    "enum": ["design", "tech", "product", "strategy", "ux", "branding"],
                    "default": "design",
                },
                "alternatives": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Alternatives considérées et pourquoi elles ont été écartées.",
                },
            },
            "required": ["decision", "rationale"],
        },
    },
    {
        "name": "memory_reject_decision",
        "description": "Enregistre une décision abandonnée avec la raison du rejet.",
        "input_schema": {
            "type": "object",
            "properties": {
                "decision": {"type": "string"},
                "reason": {"type": "string", "description": "Pourquoi cette décision a été abandonnée."},
                "category": {"type": "string", "default": "design"},
            },
            "required": ["decision", "reason"],
        },
    },
    {
        "name": "memory_add_inspiration",
        "description": "Ajoute une inspiration validée à la bibliothèque du projet.",
        "input_schema": {
            "type": "object",
            "properties": {
                "title": {"type": "string"},
                "url": {"type": "string", "description": "URL de l'inspiration (optionnel)"},
                "category": {
                    "type": "string",
                    "enum": [
                        "landing-page", "saas", "dashboard", "mobile",
                        "luxury", "gaming", "automobile", "fintech",
                        "healthcare", "ai", "portfolio", "3d", "minimalism", "brutalism"
                    ],
                },
                "style": {
                    "type": "string",
                    "enum": ["apple", "stripe", "notion", "framer", "glassmorphism",
                             "neomorphism", "brutalist", "minimal", "dark", "gradient", "futuristic"],
                },
                "why_relevant": {"type": "string", "description": "Pourquoi pertinent pour CE projet."},
                "elements": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Éléments spécifiques à retenir.",
                },
            },
            "required": ["title", "category", "style", "why_relevant", "elements"],
        },
    },
    {
        "name": "memory_add_quality_score",
        "description": "Enregistre un score qualité pour le projet actuel.",
        "input_schema": {
            "type": "object",
            "properties": {
                "innovation": {"type": "integer", "minimum": 0, "maximum": 100},
                "ux": {"type": "integer", "minimum": 0, "maximum": 100},
                "ui": {"type": "integer", "minimum": 0, "maximum": 100},
                "performance": {"type": "integer", "minimum": 0, "maximum": 100},
                "accessibility": {"type": "integer", "minimum": 0, "maximum": 100},
                "seo": {"type": "integer", "minimum": 0, "maximum": 100},
                "conversion": {"type": "integer", "minimum": 0, "maximum": 100},
                "originality": {"type": "integer", "minimum": 0, "maximum": 100},
                "immersion": {"type": "integer", "minimum": 0, "maximum": 100},
                "emotional_impact": {"type": "integer", "minimum": 0, "maximum": 100},
                "overall": {"type": "integer", "minimum": 0, "maximum": 100},
                "notes": {"type": "string"},
            },
            "required": ["overall"],
        },
    },
    {
        "name": "memory_advance_phase",
        "description": (
            "Fait avancer le projet à la phase suivante. "
            "TOUJOURS notifier l'humain avant d'appeler cet outil."
        ),
        "input_schema": {
            "type": "object",
            "properties": {},
            "required": [],
        },
    },
    {
        "name": "memory_create_project",
        "description": "Crée un nouveau projet dans la mémoire.",
        "input_schema": {
            "type": "object",
            "properties": {
                "name": {"type": "string", "description": "Nom du projet."},
            },
            "required": ["name"],
        },
    },
    {
        "name": "memory_list_projects",
        "description": "Liste tous les projets existants.",
        "input_schema": {"type": "object", "properties": {}, "required": []},
    },
    # ── Web Search ──────────────────────────────────────────────────────────
    {
        "name": "web_search",
        "description": (
            "Recherche sur le web pour trouver des inspirations, analyser les concurrents, "
            "identifier des tendances ou obtenir des informations techniques."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Requête de recherche."},
                "search_type": {
                    "type": "string",
                    "enum": ["general", "inspiration", "competitor", "trend", "technical"],
                    "description": "Type de recherche pour optimiser les résultats.",
                    "default": "general",
                },
                "max_results": {
                    "type": "integer",
                    "description": "Nombre de résultats souhaités (1-10).",
                    "default": 5,
                },
            },
            "required": ["query"],
        },
    },
    # ── Figma ────────────────────────────────────────────────────────────────
    {
        "name": "figma_get_design",
        "description": "Récupère le contexte de design d'un fichier Figma existant.",
        "input_schema": {
            "type": "object",
            "properties": {
                "figma_url": {
                    "type": "string",
                    "description": "URL du fichier Figma (figma.com/...).",
                },
                "node_id": {
                    "type": "string",
                    "description": "ID du nœud spécifique à analyser (optionnel).",
                },
            },
            "required": ["figma_url"],
        },
    },
    {
        "name": "figma_create_design",
        "description": (
            "Crée ou modifie un design dans Figma en décrivant ce qui doit être créé. "
            "TOUJOURS notifier l'humain avant d'appeler cet outil pour des créations majeures."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "intent": {
                    "type": "string",
                    "description": "Description détaillée de ce qu'il faut créer ou modifier.",
                },
                "figma_url": {
                    "type": "string",
                    "description": "URL du fichier Figma cible (optionnel pour une nouvelle création).",
                },
                "component_type": {
                    "type": "string",
                    "enum": [
                        "frame", "component", "page", "wireframe",
                        "mockup", "prototype", "design-system"
                    ],
                    "description": "Type d'élément à créer.",
                },
            },
            "required": ["intent"],
        },
    },
    {
        "name": "figma_screenshot",
        "description": "Capture un screenshot d'un design Figma pour analyse visuelle.",
        "input_schema": {
            "type": "object",
            "properties": {
                "figma_url": {"type": "string"},
                "node_id": {"type": "string", "description": "ID du nœud à capturer (optionnel)."},
            },
            "required": ["figma_url"],
        },
    },
    # ── Documentation ────────────────────────────────────────────────────────
    {
        "name": "docs_create",
        "description": (
            "Génère et sauvegarde un document de projet (cahier des charges, specs, backlog, etc.). "
            "Sauvegarde dans Notion si configuré, sinon en fichier local."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "doc_type": {
                    "type": "string",
                    "enum": [
                        "brief", "functional-specs", "ux-specs", "ui-specs",
                        "design-tokens", "component-guide", "backlog",
                        "roadmap", "qa-checklist", "prompt-library", "custom"
                    ],
                    "description": "Type de document à générer.",
                },
                "title": {"type": "string", "description": "Titre du document."},
                "content": {"type": "string", "description": "Contenu Markdown du document."},
                "destination": {
                    "type": "string",
                    "enum": ["notion", "google-drive", "local"],
                    "default": "local",
                    "description": "Où sauvegarder le document.",
                },
            },
            "required": ["doc_type", "title", "content"],
        },
    },
    # ── Notifications ────────────────────────────────────────────────────────
    {
        "name": "notify_human",
        "description": (
            "Envoie une notification à l'humain pour l'informer d'une décision importante "
            "ou demander une confirmation avant une action critique."
        ),
        "input_schema": {
            "type": "object",
            "properties": {
                "message": {"type": "string", "description": "Message à envoyer à l'humain."},
                "notification_type": {
                    "type": "string",
                    "enum": ["info", "decision", "warning", "phase-change", "confirmation-required"],
                    "default": "info",
                },
                "requires_response": {
                    "type": "boolean",
                    "description": "Si true, l'agent attend une réponse avant de continuer.",
                    "default": False,
                },
            },
            "required": ["message", "notification_type"],
        },
    },
]
