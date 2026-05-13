import type { ServiceContent } from "../service-schema";

export const aiAgentsEn: ServiceContent = {
  slug: "ai-agents",
  language: "en",
  meta: {
    title: "AI Agents for Business | Zyflows — Smart Automation That Works",
    description:
      "AI agents that handle customers, analyze data, and run processes 24/7. Custom solution for your business. Free audit, no commitment.",
  },
  hero: {
    h1: "AI Agents for Business — Automation That Actually Works for You",
    subtitle: "Custom AI solutions for businesses in Israel",
    leadParagraph:
      "AI agents are not generic chatbots. They're systems that understand your business, operate in Hebrew, French, and English, and take on the tasks that eat your time — customer responses, data analysis, lead management, and more.",
  },
  whatItIs: {
    h2: "What's an AI agent, concretely?",
    body: "An AI agent is intelligent software that can understand human language, make decisions based on context, and execute tasks autonomously. Unlike a basic chatbot that only answers pre-scripted questions, an AI agent can read your emails, extract information from documents, search your systems, and react intelligently.",
    bullets: [
      "Understands context and makes decisions — doesn't just recite a script",
      "Works 24/7, no breaks, no human errors",
      "Integrates with your existing tools — CRM, emails, WhatsApp, Sheets",
      "Improves over time through interactions",
    ],
  },
  features: [
    {
      h2: "Automatic customer responses across all channels",
      body: "The agent handles requests from email, WhatsApp, your website, or phone. It understands what the customer wants, searches the information in your systems, and replies in natural language. Only forwards to you the requests that truly need you.",
      bullets: [
        "Cuts response times from hours to seconds",
        "Handles 80% of routine requests autonomously",
        "Filters and sorts leads by urgency",
      ],
    },
    {
      h2: "Lead management and sales follow-up",
      body: "An AI agent that tracks every lead from the moment it lands: sends personalized emails, books meetings in your calendar, updates the CRM. Without you having to remind it, without leads slipping through the cracks.",
      bullets: [
        "Automatic follow-up on unresponsive leads",
        "Meeting scheduling in your calendar based on availability",
        "Adapts the message to the customer's stage in your funnel",
      ],
    },
    {
      h2: "Data analysis and automated reporting",
      body: "Instead of spending hours in Excel, the agent reads data from all your systems, identifies patterns, and produces structured weekly reports you receive Monday morning. With business insights, not just numbers.",
    },
    {
      h2: "Integration with your existing tools",
      body: "No need to replace everything. The agent connects to what you already use — Gmail, WhatsApp Business, Monday, HubSpot, Notion, Google Sheets, any CRM, and more. We build the bridge.",
    },
  ],
  useCases: {
    heading: "Types of businesses already using AI agents",
    items: [
      {
        type: "Law firm",
        problem: "Client requests arrive by email and take hours to sort and respond to",
        solution: "An AI agent that reads, classifies, and drafts a reply for the lawyer to approve",
      },
      {
        type: "E-commerce",
        problem: "Support team is overwhelmed with shipping and return questions",
        solution: "An AI agent that replies on WhatsApp and the website, connected to order management",
      },
      {
        type: "Digital marketing agency",
        problem: "Campaign analysis eats a full day per week for the account manager",
        solution: "An AI agent that analyzes the data and produces a report with recommendations",
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
      "Want to see if an AI agent fits your business? Let's chat for 30 minutes, no commitment.",
  },
};
