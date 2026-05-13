import type { ServiceContent } from "../service-schema";

export const ecommerceFr: ServiceContent = {
  slug: "ecommerce",
  language: "fr",
  meta: {
    title: "Automatisation e-commerce | Zyflows — Augmentez ROI et ventes",
    description:
      "Automatisations pour boutiques en ligne qui augmentent les ventes, réduisent l'abandon, et optimisent les opérations. Shopify, WooCommerce, sur-mesure. Audit gratuit.",
  },
  hero: {
    h1: "Automatisation e-commerce — Augmentez le ROI",
    subtitle: "Moins de paniers abandonnés, plus de ventes récurrentes, moins de travail manuel",
    leadParagraph:
      "Gérer une boutique en ligne ne se résume pas à mettre en ligne des produits. C'est courir après les paniers abandonnés, envoyer des codes promo, traiter les retours, repérer les clients en risque de churn. On construit des automatisations qui font tout ça automatiquement, sur Shopify, WooCommerce, ou tout système.",
  },
  whatItIs: {
    h2: "Pourquoi l'automatisation e-commerce est différente ?",
    body: "Dans l'e-commerce, la vitesse de réponse vaut de l'argent. Un client qui a abandonné son panier il y a 10 minutes sans recevoir de relance — perdu pour toujours. Un client qui retourne un produit et n'a pas de réponse en 1 heure — il ne reviendra pas. L'automatisation e-commerce est critique, pas un nice-to-have.",
    bullets: [
      "Réponse en quelques secondes aux événements clés (panier abandonné, retour, mauvais avis)",
      "Segmentation automatique des clients selon comportement pour des campagnes ciblées",
      "Intégration avec Klaviyo, Mailchimp, Shopify, WooCommerce, facturation, et plus",
      "Adapté aux boutiques en hébreu, français, et anglais",
    ],
  },
  features: [
    {
      h2: "Système de récupération de paniers abandonnés",
      body: "70% des paniers en e-commerce sont abandonnés. On construit un système multi-étapes de relances — email, WhatsApp, et remarketing — qui ramène les clients à terminer l'achat. Récupère en moyenne 15-25% des paniers.",
      bullets: [
        "Première relance en 1 heure",
        "Offre de code promo personnalisé après 24h",
        "WhatsApp avec photo du produit après 48h",
      ],
    },
    {
      h2: "Automatisation de la gestion des commandes",
      body: "Du moment où un client achète jusqu'à la livraison — tout est automatique. Confirmation de commande, mises à jour de suivi, email proactif si le colis tarde, demande d'avis après livraison. Le client se sent pris en charge sans que l'équipe fasse quoi que ce soit.",
      bullets: [
        "Statut de commande synchronisé automatiquement avec le transporteur",
        "Email proactif si le suivi stagne 3 jours",
        "Demande d'avis X jours après livraison",
      ],
    },
    {
      h2: "Automatisation du service client",
      body: "Un chatbot qui répond automatiquement aux questions récurrentes — \"où est ma commande\", \"comment retourner\", \"quand finit la promo\". Connecté à votre système de commandes, donc des réponses précises pour chaque client.",
    },
    {
      h2: "Segmentation client et campagnes personnalisées",
      body: "L'automatisation identifie les clients par comportement — acheteurs VIP, clients qui n'ont pas encore racheté, clients en risque de churn — et envoie à chaque groupe la bonne offre au bon moment.",
    },
  ],
  useCases: {
    heading: "Types de boutiques qui utilisent l'automatisation",
    items: [
      {
        type: "Boutique de mode",
        problem: "70% des paniers sont abandonnés et il n'y a aucun système pour les relancer",
        solution: "Système de récupération en 3 étapes qui ramène 22% des paniers en moyenne",
      },
      {
        type: "Boutique de cosmétiques",
        problem: "Les clients ne reviennent pas acheter une deuxième fois après leur première commande",
        solution: "Automatisation qui détecte la fréquence d'usage et envoie un rappel de réassort pile au bon moment",
      },
      {
        type: "Boutique de cadeaux",
        problem: "Mauvais avis sans réponse causent une perte de confiance",
        solution: "Système de détection des mauvais avis qui alerte immédiatement et ouvre une discussion",
      },
    ],
  },
  whyZyflows: {
    h2: "Pourquoi choisir Zyflows ?",
    points: [
      "On travaille dans 3 langues — hébreu, français, anglais — sans intermédiaire",
      "Avant de proposer une solution, on fait un audit en profondeur pour comprendre ce qui vous manque vraiment",
      "Vous ne payez que ce dont vous avez réellement besoin. Pas de surfacturation pour gonfler la note",
    ],
  },
  cta: {
    primaryLabel: "Audit offert",
    secondaryLabel: "WhatsApp direct",
    helperText:
      "Envie de voir combien de paniers abandonnés vous pouvez récupérer ? On en parle 30 minutes avec des chiffres réels.",
  },
};
