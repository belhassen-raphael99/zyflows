import type { ServiceContent } from "../service-schema";

export const crmFr: ServiceContent = {
  slug: "crm",
  language: "fr",
  meta: {
    title: "CRM et automatisation | Zyflows — Gestion client intelligente",
    description:
      "Mise en place de CRM avec automatisations pour gérer leads, ventes et service. Un seul système pour tous vos processus. Audit gratuit.",
  },
  hero: {
    h1: "CRM et automatisation — gestion client intelligente",
    subtitle: "Un seul système pour tous vos clients, automatisations et données",
    leadParagraph:
      "Un CRM ne devrait pas être un outil compliqué que personne ne veut utiliser. On déploie un CRM adapté à votre façon de travailler — HubSpot, Monday, ou solution de niche — avec des automatisations qui font 80% du travail toutes seules.",
  },
  whatItIs: {
    h2: "Pourquoi un CRM seul ne suffit pas ?",
    body: "La plupart des entreprises qui ont un CRM ne l'utilisent pas vraiment. L'équipe note les choses dans des emails, des feuilles, ou dans sa tête. Le CRM devient un cimetière de données. La solution : construire des automatisations qui alimentent le CRM automatiquement, et qui s'en servent automatiquement — sans que l'équipe ait à y penser.",
    bullets: [
      "Un vrai système central pour toute l'équipe — fini les feuilles parallèles",
      "Leads entrent automatiquement depuis le site, les emails, WhatsApp",
      "Statut de chaque lead se met à jour automatiquement selon les actions",
      "Rapports en temps réel sur le pipeline commercial",
    ],
  },
  features: [
    {
      h2: "Choix et déploiement du bon CRM",
      body: "Tous les CRM ne conviennent pas à toutes les entreprises. On examine vos processus, la taille de l'équipe, le budget, et les systèmes existants — et on choisit la bonne solution. Ensuite, on la déploie avec une configuration sur-mesure, pas un template générique.",
      bullets: [
        "HubSpot pour ventes et marketing",
        "Monday pour travail d'équipe et gestion de projets",
        "Zoho, Pipedrive, ou solutions de niche pour besoins spécifiques",
      ],
    },
    {
      h2: "Entrée automatique des leads",
      body: "Tout lead qui arrive — depuis votre site, une pub, WhatsApp, un email direct — entre automatiquement dans le CRM avec tous les détails. L'équipe ne tape rien. Le lead est classé, taggé, et assigné au bon commercial.",
      bullets: [
        "Formulaires du site → CRM directement",
        "Emails entrants scannés et taggés",
        "Demandes WhatsApp entrent dans le CRM avec transcription",
      ],
    },
    {
      h2: "Automatisations tout au long du parcours client",
      body: "Du premier lead au client fidèle — à chaque étape, des automatisations font le travail : emails personnalisés, rappels à l'équipe, mises à jour de statut, analyse de comportement. Pas de leads oubliés, pas de clients qui se sentent négligés.",
    },
    {
      h2: "Rapports et analyses qui comprennent votre activité",
      body: "Un seul dashboard avec tout ce que vous devez savoir. Combien de leads entrent, d'où, quel pourcentage convertit, où les gens décrochent. Avec des insights, pas juste des graphiques — quoi faire pour améliorer.",
    },
  ],
  useCases: {
    heading: "Types d'entreprises qui utilisent un CRM + automatisations",
    items: [
      {
        type: "Agence immobilière",
        problem: "Les agents gardent les leads sur leur téléphone perso et l'info se perd au départ d'un agent",
        solution: "CRM unifié avec automatisations de mise à jour, suivi, et attribution auto des leads",
      },
      {
        type: "Studio B2B",
        problem: "Le commercial ne sait pas ce que fait le marketing, et le marketing ne voit pas les résultats",
        solution: "CRM qui connecte les équipes avec rapports partagés et automatisation du transfert",
      },
      {
        type: "Société SaaS",
        problem: "L'équipe Success est tirée par les urgences au lieu de maximiser le revenu existant",
        solution: "CRM avec automatisations qui détectent les clients en risque de churn à l'avance",
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
      "Vous voulez savoir quel CRM convient à votre activité et comment connecter tous vos systèmes ? On en parle 30 minutes.",
  },
};
