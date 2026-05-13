import type { ServiceContent } from "../service-schema";

export const chatbotsFr: ServiceContent = {
  slug: "chatbots",
  language: "fr",
  meta: {
    title: "Chatbots intelligents | Zyflows — Réponse automatique 24/7",
    description:
      "Chatbots IA qui parlent hébreu, français et anglais. Gèrent vos demandes sur WhatsApp et votre site, augmentent les ventes. Audit gratuit.",
  },
  hero: {
    h1: "Chatbots intelligents — réponse automatique 24/7",
    subtitle: "Ils traitent les demandes, filtrent les leads, augmentent les ventes",
    leadParagraph:
      "Un chatbot qui sait parler au client dans un langage naturel, comprendre ce qu'il veut, et répondre immédiatement. Sans scripts rigides, sans erreurs, sans attendre le matin. Fonctionne sur WhatsApp, votre site, Messenger ou Telegram.",
  },
  whatItIs: {
    h2: "Quelle différence entre un chatbot classique et un chatbot IA ?",
    body: "Un chatbot classique ne répond qu'aux questions pré-programmées. Dès qu'un client sort du script, il bloque. Un chatbot IA comprend le contexte, prend des décisions, et cherche les réponses dans vos systèmes — comme un vrai employé.",
    bullets: [
      "Comprend le langage naturel, pas juste des mots-clés",
      "Se souvient de l'historique — le client ne répète pas",
      "S'intègre à votre CRM, gestion des commandes, ou base de données",
      "Ne vous remonte que les conversations qui ont vraiment besoin de vous",
    ],
  },
  features: [
    {
      h2: "Chatbot WhatsApp Business",
      body: "Le canal le plus puissant en Israël. Un chatbot qui répond automatiquement sur WhatsApp Business, gère les commandes, les prises de rendez-vous, et les renseignements. Avec l'API officielle Meta — sans risque de blocage.",
      bullets: [
        "Réponse WhatsApp en quelques secondes, 24/7",
        "Intégration complète avec CRM et gestion des commandes",
        "Traduction automatique entre hébreu, français, anglais",
      ],
    },
    {
      h2: "Chatbot site web avec IA",
      body: "Un widget chat intelligent sur votre site, entraîné sur le contenu du site lui-même. Quand quelqu'un pose une question sur un prix, un produit ou un service — le chatbot sait répondre à partir de ce qui existe sur votre site.",
      bullets: [
        "Entraîné sur votre contenu — réponses précises",
        "Capture les leads qui visitent sans s'inscrire",
        "Statistiques des questions fréquentes pour identifier les problèmes UX",
      ],
    },
    {
      h2: "Service client multi-canal",
      body: "Le même chatbot répond sur WhatsApp, site web, Messenger et Instagram — avec une mémoire partagée. Le client peut commencer une conversation quelque part et la continuer ailleurs sans devoir se répéter.",
    },
    {
      h2: "Escalade intelligente vers un agent humain",
      body: "Quand le chatbot détecte un cas complexe, un client frustré, ou une grosse opportunité commerciale — il transmet immédiatement à votre équipe, avec tout le contexte de ce qui a été dit.",
    },
  ],
  useCases: {
    heading: "Types d'entreprises qui utilisent des chatbots intelligents",
    items: [
      {
        type: "Cabinet dentaire",
        problem: "La secrétaire est débordée par les appels pour prises de rdv et rappels",
        solution: "Chatbot WhatsApp qui gère tout le cycle — prise, confirmation, annulation",
      },
      {
        type: "Studio de fitness",
        problem: "Les demandes par mail n'ont pas de réponse rapide et les leads se perdent",
        solution: "Chatbot qui dialogue avec les prospects, propose un essai gratuit, fixe un rdv",
      },
      {
        type: "Entreprise de rénovation",
        problem: "Des gens appellent le soir pour un devis et il n'y a personne pour répondre",
        solution: "Chatbot WhatsApp qui collecte les infos, fait une première estimation, et planifie",
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
      "Curieux de voir comment un chatbot peut vous économiser des heures par semaine ? Discutons 30 minutes, sans engagement.",
  },
};
