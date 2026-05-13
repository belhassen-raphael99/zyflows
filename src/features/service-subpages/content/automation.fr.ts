import type { ServiceContent } from "../service-schema";

export const automationFr: ServiceContent = {
  slug: "automation",
  language: "fr",
  meta: {
    title: "Automatisation d'entreprise | Zyflows — Gagnez du temps, augmentez les profits",
    description:
      "Solutions d'automatisation sur-mesure. Connexion de systèmes, automatisation des processus, gains d'heures par semaine. Audit gratuit.",
  },
  hero: {
    h1: "Automatisation d'entreprise — Gagnez du temps, augmentez les profits",
    subtitle: "Des systèmes qui travaillent pour vous même quand vous dormez",
    leadParagraph:
      "Toute entreprise répète les mêmes actions encore et encore : transférer des données entre systèmes, envoyer des emails, mettre à jour Excel, émettre des factures. On construit des automatisations qui font tout ça automatiquement, sans erreur, sans que vous ayez à y penser.",
  },
  whatItIs: {
    h2: "Concrètement, qu'est-ce qu'une automatisation d'entreprise ?",
    body: "L'automatisation d'entreprise, c'est connecter tous les outils que vous utilisez déjà — Gmail, WhatsApp, Sheets, CRM, logiciel de facturation, etc. — pour qu'ils se parlent automatiquement. Quand quelque chose se passe quelque part, l'automatisation enchaîne les étapes suivantes sans vous.",
    bullets: [
      "Fonctionne 24/7, sans pause",
      "Pas d'erreurs humaines dans les transferts de données",
      "Économise des heures de travail par semaine, à réinvestir dans vos clients",
      "S'intègre à tous vos outils existants, sans rien remplacer",
    ],
  },
  features: [
    {
      h2: "Connexion de systèmes (Intégration)",
      body: "Construction de ponts entre vos outils — CRM, facturation, Google Sheets, WhatsApp, emails — pour qu'ils soient synchronisés en temps réel. Plus de double saisie, plus de chasse à l'info dans 3 endroits.",
      bullets: [
        "Make, n8n, ou Zapier selon le besoin",
        "API sur-mesure pour les outils de niche",
        "Synchronisation bidirectionnelle réelle, pas juste de la copie",
      ],
    },
    {
      h2: "Automatisation des processus de vente",
      body: "Du moment où un lead arrive jusqu'à ce qu'il devienne client payant — toutes les étapes sont automatisées. Emails personnalisés, prises de rendez-vous, devis, signature de contrat — tout sans une seule action manuelle.",
      bullets: [
        "Emails automatiques selon l'étape du lead dans le funnel",
        "Prise de rdv automatique via Google/Outlook Calendar",
        "Relance continue des leads sans réponse",
      ],
    },
    {
      h2: "Automatisation administrative",
      body: "Émission de factures, comptabilisation, envoi de reçus, suivi des paiements — des tâches qui mangent du temps et de la concentration sans générer de revenus. Tout ça tourne en automatique à partir de maintenant.",
    },
    {
      h2: "Rapports automatiques chaque matin",
      body: "Au lieu de chercher des données dans tous les systèmes et de monter un rapport hebdomadaire sous Excel, on construit une automatisation qui rassemble les données, les analyse, et vous envoie un rapport quotidien ou hebdomadaire par email. Avec des insights, pas juste des chiffres.",
    },
  ],
  useCases: {
    heading: "Types d'entreprises qui utilisent l'automatisation",
    items: [
      {
        type: "Agence immobilière",
        problem: "Chaque lead nécessite un suivi manuel, et les leads négligés passent à la trappe",
        solution: "Une automatisation qui suit chaque lead, envoie des emails personnalisés, relance",
      },
      {
        type: "Studio de design graphique",
        problem: "Émettre une facture par client prend un quart d'heure et il y en a 30 par mois",
        solution: "Une automatisation qui édite la facture depuis Notion et l'envoie automatiquement",
      },
      {
        type: "Cabinet de conseil",
        problem: "Les rendez-vous sont coordonnés à la main par email, et la préparation prend du temps",
        solution: "Automatisation qui réserve via Calendly, envoie la confirmation, et prépare un dossier",
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
      "Envie de voir quels processus de votre entreprise peuvent passer en automatique ? On en parle 30 minutes.",
  },
};
