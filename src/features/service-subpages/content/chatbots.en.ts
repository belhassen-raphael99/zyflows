import type { ServiceContent } from "../service-schema";

export const chatbotsEn: ServiceContent = {
  slug: "chatbots",
  language: "en",
  meta: {
    title: "Smart Chatbots | Zyflows — 24/7 Automated Responses",
    description:
      "AI chatbots that speak Hebrew, French, and English. Handle requests on WhatsApp and your website, boost sales. Free audit, no commitment.",
  },
  hero: {
    h1: "Smart Chatbots — 24/7 Automated Responses",
    subtitle: "They handle requests, filter leads, and grow sales",
    leadParagraph:
      "A chatbot that talks to your customer naturally, understands what they want, and answers immediately. No rigid scripts, no errors, no waiting for morning. Works on WhatsApp, your website, Messenger, or Telegram.",
  },
  whatItIs: {
    h2: "What's the difference between a regular and an AI chatbot?",
    body: "A regular chatbot only answers pre-programmed questions. The moment a customer goes off-script, it gets stuck. An AI chatbot understands context, makes decisions, and looks up answers in your systems — just like a real employee.",
    bullets: [
      "Understands natural language, not just keywords",
      "Remembers conversation history — customer doesn't have to repeat",
      "Integrates with your CRM, order system, or database",
      "Only forwards to you conversations that truly need you",
    ],
  },
  features: [
    {
      h2: "WhatsApp Business chatbot",
      body: "The strongest channel in Israel. A chatbot that auto-replies on WhatsApp Business, handles orders, bookings, and inquiries. Using Meta's official API — no risk of being blocked.",
      bullets: [
        "WhatsApp responses in seconds, 24/7",
        "Full integration with CRM and order management",
        "Automatic translation between Hebrew, French, English",
      ],
    },
    {
      h2: "AI-powered website chatbot",
      body: "A smart chat widget on your site, trained on your site's own content. When someone asks about pricing, a product, or a service — the chatbot knows the answer based on what's on your site.",
      bullets: [
        "Trained on your content — accurate answers",
        "Captures leads that browse without signing up",
        "Frequent-question analytics to spot UX issues",
      ],
    },
    {
      h2: "Multi-channel customer service",
      body: "The same chatbot replies on WhatsApp, website, Messenger, and Instagram — with shared memory. A customer can start a conversation in one place and continue in another without repeating themselves.",
    },
    {
      h2: "Smart escalation to a human agent",
      body: "When the chatbot detects something complex, a frustrated customer, or a big sales opportunity — it hands off to your team immediately, with full context of what was discussed.",
    },
  ],
  useCases: {
    heading: "Types of businesses using smart chatbots",
    items: [
      {
        type: "Dental practice",
        problem: "Reception is overwhelmed with calls for appointments and reminders",
        solution: "WhatsApp chatbot that handles the full cycle — booking, confirmation, cancellation",
      },
      {
        type: "Fitness studio",
        problem: "Email inquiries don't get fast replies and leads are lost",
        solution: "Chatbot that engages prospects, offers a free trial, books a meeting",
      },
      {
        type: "Renovation company",
        problem: "People call at night for a quote and no one is available",
        solution: "WhatsApp chatbot that collects details, gives a preliminary estimate, schedules",
      },
    ],
  },
  whyZyflows: {
    h2: "Why choose Zyflows?",
    points: [
      "We work in 3 languages — Hebrew, French, English — no middleman",
      "Before proposing a solution, we run a deep audit to understand what you actually need",
      "You only pay for what you truly need. No fluff to inflate the bill",
    ],
  },
  cta: {
    primaryLabel: "Free Audit",
    secondaryLabel: "WhatsApp Direct",
    helperText:
      "Curious how a chatbot could save you hours every week? Let's chat for 30 minutes, no commitment.",
  },
};
