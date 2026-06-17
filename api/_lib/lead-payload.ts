import type { ValidatedLead } from "./lead-schema.js";
import { renderLeadEmail } from "./lead-email-template.js";
import { renderAdminNotification } from "./lead-notification-template.js";

/**
 * Service categories sent by the form match the n8n AI agent's expected
 * "Service demandé" values (Automatisation, Chatbot IA, Site Web/SaaS,
 * CRM personnalisé, Conseil IA, Autre). We pass the form's subject as a
 * hint so the agent doesn't have to re-classify from scratch.
 */
const SERVICE_HINT: Record<ValidatedLead["subject"], string> = {
  audit: "Conseil IA",
  automation: "Automatisation",
  chatbot: "Chatbot IA",
  web: "Site Web/SaaS",
  support: "Autre",
  other: "Autre",
};

const LANGUAGE_HINT: Record<ValidatedLead["language"], string> = {
  he: "🇮🇱 עברית",
  fr: "🇫🇷 Français",
  en: "🇬🇧 English",
};

export interface N8nLeadPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  source: string;
  // Optional hints — picked up by the AI agent in the workflow.
  service_hint: string;
  language_hint: string;
  // Pre-built confirmation email. The AI agent can either use these as-is
  // (recommended — design is code-controlled) or fall back to its own
  // generation if missing. Use these in n8n's Gmail node:
  //   sendTo  ← `$json.body.email`
  //   subject ← `$json.body.email_subject_prebuilt`
  //   message ← `$json.body.email_html_prebuilt`
  email_subject_prebuilt: string;
  email_html_prebuilt: string;
  // Internal notification — for a SECOND Gmail node in n8n that sends the
  // alert to the Zyflows admin inbox (not the lead). Always in French.
  admin_subject: string;
  admin_html: string;
}

/**
 * Map our validated lead into the payload shape consumed by the n8n
 * "Zyflows Form Agent" workflow's Edit Fields node.
 *
 * Why we embed the hints inside `message` too:
 *   The AI agent only sees the Edit Fields output as `$json`. The fields
 *   `service_hint` / `language_hint` only reach it IF the workflow's
 *   Edit Fields node is updated to map them. To make this resilient even
 *   if the workflow stays as-is, we prefix the message with bracketed
 *   tags so the agent picks the hints up via the message body too.
 */
export function buildN8nPayload(lead: ValidatedLead): N8nLeadPayload {
  const serviceHint = SERVICE_HINT[lead.subject];
  const languageHint = LANGUAGE_HINT[lead.language];

  const enrichedMessage = [
    `[Service souhaité: ${serviceHint}]`,
    `[Langue d'interface: ${languageHint}]`,
    "",
    lead.message || "(pas de message — formulaire minimal)",
  ].join("\n");

  const email = renderLeadEmail(lead);
  const admin = renderAdminNotification(lead);

  return {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    company: lead.businessName,
    message: enrichedMessage,
    source: "🌐 Site Web",
    service_hint: serviceHint,
    language_hint: languageHint,
    email_subject_prebuilt: email.subject,
    email_html_prebuilt: email.html,
    admin_subject: admin.subject,
    admin_html: admin.html,
  };
}
