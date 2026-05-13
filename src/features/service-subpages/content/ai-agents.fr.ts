import type { ServiceContent } from "../service-schema";

export const aiAgentsFr: ServiceContent = {
  slug: "ai-agents",
  language: "fr",
  meta: {
    title: "Agents IA pour entreprises | Zyflows — Automatisation intelligente",
    description:
      "Des agents IA qui gèrent vos clients, analysent vos données et pilotent vos processus 24/7. Solution sur-mesure pour votre entreprise. Audit gratuit, sans engagement.",
  },
  hero: {
    h1: "Agents IA pour entreprises — l'automatisation qui travaille pour vous",
    subtitle: "Des solutions IA sur-mesure pour les entreprises en Israël",
    leadParagraph:
      "Les agents IA, ce ne sont pas des chatbots génériques. Ce sont des systèmes qui comprennent votre métier, travaillent en hébreu, en français et en anglais, et prennent en charge les tâches qui vous mangent du temps : réponses clients, analyses, gestion des leads, et bien plus.",
  },
  whatItIs: {
    h2: "Concrètement, c'est quoi un agent IA ?",
    body: "Un agent IA, c'est un logiciel intelligent capable de comprendre le langage humain, de prendre des décisions en fonction du contexte, et d'exécuter des tâches en autonomie. Contrairement à un chatbot classique qui ne sait répondre qu'à des questions pré-programmées, un agent IA peut lire vos emails, extraire des informations de documents, fouiller vos systèmes, et réagir intelligemment.",
    bullets: [
      "Comprend le contexte et décide — il ne récite pas un script",
      "Travaille 24/7, sans pause et sans erreur humaine",
      "S'intègre à vos outils existants — CRM, emails, WhatsApp, Sheets",
      "S'améliore avec le temps grâce à ses interactions",
    ],
  },
  features: [
    {
      h2: "Réponse automatique aux clients sur tous vos canaux",
      body: "L'agent répond aux demandes qui arrivent par email, WhatsApp, sur votre site ou par téléphone. Il comprend ce que veut le client, cherche l'information dans vos systèmes, et répond dans un langage naturel. Il ne vous remonte que les demandes qui nécessitent vraiment vous.",
      bullets: [
        "Réduit les temps de réponse de plusieurs heures à quelques secondes",
        "Gère 80% des demandes courantes en autonomie",
        "Filtre et trie les leads selon leur urgence",
      ],
    },
    {
      h2: "Gestion des leads et suivi commercial",
      body: "Un agent IA qui suit chaque lead dès son arrivée : envoie les emails personnalisés, prend les rendez-vous dans votre agenda, met à jour le CRM. Sans que vous ayez à le rappeler, sans qu'un lead ne passe entre les mailles du filet.",
      bullets: [
        "Relance automatique des leads sans réponse",
        "Prise de rendez-vous dans votre agenda selon vos disponibilités",
        "Adapte le message selon l'étape du client dans votre funnel",
      ],
    },
    {
      h2: "Analyse de données et reporting automatique",
      body: "Au lieu de passer des heures sur Excel, l'agent lit les données de tous vos systèmes, identifie les tendances, et produit des rapports hebdomadaires structurés que vous recevez le lundi matin. Avec des insights business, pas juste des chiffres.",
    },
    {
      h2: "Intégration avec vos outils existants",
      body: "Pas besoin de tout remplacer. L'agent se connecte à ce que vous utilisez déjà — Gmail, WhatsApp Business, Monday, HubSpot, Notion, Google Sheets, n'importe quel CRM, et plus. Nous construisons le pont.",
    },
  ],
  useCases: {
    heading: "Types d'entreprises qui utilisent déjà des agents IA",
    items: [
      {
        type: "Cabinet d'avocats",
        problem: "Les demandes clients arrivent par email et prennent des heures à trier et répondre",
        solution: "Un agent IA qui lit, classe, et prépare un brouillon de réponse à valider par l'avocat",
      },
      {
        type: "E-commerce",
        problem: "L'équipe support sature avec les questions sur livraisons et retours",
        solution: "Un agent IA qui répond sur WhatsApp et le site, connecté à la gestion des commandes",
      },
      {
        type: "Agence marketing digital",
        problem: "L'analyse des campagnes prend une journée par semaine au responsable de compte",
        solution: "Un agent IA qui analyse les données et produit un rapport avec recommandations",
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
      "Vous voulez savoir si un agent IA fait sens pour votre activité ? On en parle 30 minutes, sans engagement.",
  },
};
