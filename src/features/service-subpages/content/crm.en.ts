import type { ServiceContent } from "../service-schema";

export const crmEn: ServiceContent = {
  slug: "crm",
  language: "en",
  meta: {
    title: "CRM & Automation | Zyflows — Smart Customer Management",
    description:
      "CRM deployment combined with automation to manage leads, sales, and service. One system for all your processes. Free audit.",
  },
  hero: {
    h1: "CRM & Automation — Smart Customer Management",
    subtitle: "One system for all your customers, automations, and data",
    leadParagraph:
      "A CRM shouldn't be a complicated tool no one wants to use. We deploy a CRM that fits your way of working — HubSpot, Monday, or a niche solution — with automations that do 80% of the work by themselves.",
  },
  whatItIs: {
    h2: "Why isn't a CRM alone enough?",
    body: "Most businesses with a CRM don't really use it. The team still notes things in emails, spreadsheets, or their head. The CRM becomes a data graveyard. The fix: build automations that feed the CRM automatically and use it automatically — without the team having to think about it.",
    bullets: [
      "A real central system for the entire team — no more parallel spreadsheets",
      "Leads enter automatically from your site, emails, WhatsApp",
      "Each lead's status updates automatically based on actions",
      "Real-time reports on the sales pipeline",
    ],
  },
  features: [
    {
      h2: "Choosing and deploying the right CRM",
      body: "Not every CRM fits every business. We examine your processes, team size, budget, and existing systems — and pick the right solution. Then we deploy it with a custom setup, not a generic template.",
      bullets: [
        "HubSpot for sales and marketing",
        "Monday for teamwork and project management",
        "Zoho, Pipedrive, or niche solutions for specific needs",
      ],
    },
    {
      h2: "Automatic lead entry",
      body: "Every lead that comes in — from your site, an ad, WhatsApp, a direct email — enters the CRM automatically with all details. The team types nothing. The lead is classified, tagged, and assigned to the right salesperson.",
      bullets: [
        "Site forms go directly into CRM",
        "Inbound emails scanned and tagged",
        "WhatsApp inquiries enter CRM with transcription",
      ],
    },
    {
      h2: "Automations across the entire customer journey",
      body: "From first lead to repeat customer — at every stage, automations do the work: personalized emails, team reminders, status updates, behavior analysis. No forgotten leads, no customers feeling neglected.",
    },
    {
      h2: "Reports and analytics that understand your business",
      body: "One dashboard with everything you need to know. How many leads come in, from where, what percentage close, where people drop off. With insights, not just charts — what to do to improve.",
    },
  ],
  useCases: {
    heading: "Types of businesses using CRM + automation",
    items: [
      {
        type: "Real estate agency",
        problem: "Agents keep leads on personal phones and info is lost when someone leaves",
        solution: "Unified CRM with automations for updates, follow-up, and auto-assignment",
      },
      {
        type: "B2B studio",
        problem: "Sales doesn't know what marketing is doing, and marketing doesn't see results",
        solution: "CRM that connects the teams with shared reports and automated handoffs",
      },
      {
        type: "SaaS company",
        problem: "Success team is pulled to fight fires instead of maximizing existing revenue",
        solution: "CRM with automations that detect at-risk customers ahead of churn",
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
      "Want to know which CRM fits your business and how to connect all your systems? Let's chat for 30 minutes.",
  },
};
