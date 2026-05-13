import type { ServiceContent } from "../service-schema";

export const automationEn: ServiceContent = {
  slug: "automation",
  language: "en",
  meta: {
    title: "Business Automation | Zyflows — Save Time, Boost Profits",
    description:
      "Custom business automation solutions. Connect systems, automate workflows, reclaim hours every week. Free audit, no commitment.",
  },
  hero: {
    h1: "Business Automation — Save Time, Boost Profits",
    subtitle: "Systems that work for you even while you sleep",
    leadParagraph:
      "Every business does the same actions over and over: moving data between systems, sending emails, updating spreadsheets, issuing invoices. We build automations that handle all of that automatically, with no errors, without you having to think about it.",
  },
  whatItIs: {
    h2: "What's business automation, concretely?",
    body: "Business automation is connecting all the tools you already use — Gmail, WhatsApp, Sheets, CRM, invoicing software, etc. — so they talk to each other automatically. When something happens in one place, the automation runs the next steps without you.",
    bullets: [
      "Runs 24/7 without breaks",
      "No human errors in data transfers",
      "Saves hours per week you can reinvest in customers",
      "Integrates with all your existing tools, no replacements needed",
    ],
  },
  features: [
    {
      h2: "System integration",
      body: "Building bridges between your tools — CRM, invoicing, Google Sheets, WhatsApp, emails — so they're synced in real time. No more double-entry, no more hunting for info in 3 places.",
      bullets: [
        "Make, n8n, or Zapier depending on the need",
        "Custom API for niche tools",
        "True bidirectional sync, not just copying",
      ],
    },
    {
      h2: "Sales process automation",
      body: "From the moment a lead arrives until they become a paying customer — every stage is automated. Personalized emails, meeting scheduling, quotes, contract signing — all without a single manual step.",
      bullets: [
        "Automatic emails based on lead stage in funnel",
        "Automated meeting booking via Google/Outlook Calendar",
        "Continuous follow-up on unresponsive leads",
      ],
    },
    {
      h2: "Admin automation",
      body: "Invoice creation, accounting entries, receipts, payment tracking — tasks that eat time and focus without generating revenue. All of this runs automatically from now on.",
    },
    {
      h2: "Automatic reports every morning",
      body: "Instead of hunting for data across systems and building a weekly Excel report, we build an automation that gathers the data, analyzes it, and emails you a daily or weekly report. With insights, not just numbers.",
    },
  ],
  useCases: {
    heading: "Types of businesses using automation",
    items: [
      {
        type: "Real estate agency",
        problem: "Every lead needs manual follow-up, and neglected leads slip through the cracks",
        solution: "An automation that follows every lead, sends personalized emails, and follows up",
      },
      {
        type: "Graphic design studio",
        problem: "Issuing an invoice per client takes 15 minutes and there are 30 per month",
        solution: "Automation that creates invoices from Notion projects and sends them automatically",
      },
      {
        type: "Consulting firm",
        problem: "Meetings are scheduled manually by email, and prep takes time",
        solution: "Automation that books via Calendly, sends confirmation, and prepares a brief",
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
      "Want to see which processes in your business can go on autopilot? Let's chat for 30 minutes.",
  },
};
