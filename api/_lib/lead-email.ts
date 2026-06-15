import type { ValidatedLead } from "./lead-schema";

const SUBJECT_LABEL: Record<ValidatedLead["subject"], string> = {
  audit: "AUDIT",
  automation: "AUTOMATION",
  chatbot: "CHATBOT",
  web: "WEB",
  support: "SUPPORT",
  other: "AUTRE",
};

const escape = (s: string): string =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const nl2br = (s: string): string => escape(s).replaceAll("\n", "<br />");

/**
 * Format the lead into an email subject + HTML body.
 *
 * Design choices :
 * - Subject prefixed with [CATEGORY] so the inbox is scannable.
 * - HTML body uses inline styles only (Gmail strips <style> tags).
 * - Plain key: value rows with bolded labels — easier than tables to read.
 * - Reply-To is set on the Resend send so hitting "Reply" reaches the lead
 *   directly (this function only handles formatting).
 */
export function formatLeadEmail(lead: ValidatedLead): {
  subject: string;
  html: string;
  text: string;
} {
  const tag = SUBJECT_LABEL[lead.subject];
  const subject = `[${tag}] Nouveau lead — ${lead.name}${
    lead.businessName ? ` (${lead.businessName})` : ""
  }`;

  const langFlag =
    lead.language === "he" ? "🇮🇱" : lead.language === "fr" ? "🇫🇷" : "🇬🇧";

  const html = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1f2937; line-height: 1.6;">
  <h2 style="color: #0891b2; border-bottom: 2px solid #06b6d4; padding-bottom: 8px;">
    Nouveau lead Zyflows ${langFlag}
  </h2>
  <p><strong>Catégorie :</strong> ${escape(tag)}</p>
  <p><strong>Nom :</strong> ${escape(lead.name)}</p>
  <p><strong>Email :</strong> <a href="mailto:${escape(lead.email)}">${escape(lead.email)}</a></p>
  <p><strong>Téléphone :</strong> <a href="tel:${escape(lead.phone)}">${escape(lead.phone)}</a></p>
  ${lead.businessName ? `<p><strong>Entreprise :</strong> ${escape(lead.businessName)}</p>` : ""}
  ${
    lead.message
      ? `<div style="margin-top: 24px; padding: 16px; background: #f3f4f6; border-left: 4px solid #06b6d4; border-radius: 4px;">
           <p style="margin: 0 0 8px; font-weight: bold;">Message :</p>
           <p style="margin: 0; white-space: pre-wrap;">${nl2br(lead.message)}</p>
         </div>`
      : ""
  }
  <hr style="margin: 32px 0; border: 0; border-top: 1px solid #e5e7eb;" />
  <p style="font-size: 12px; color: #6b7280;">
    Tu peux répondre directement à ce mail — la réponse ira chez le lead.
  </p>
</div>`.trim();

  const text = [
    `Nouveau lead Zyflows (${tag}, ${lead.language})`,
    "",
    `Nom: ${lead.name}`,
    `Email: ${lead.email}`,
    `Téléphone: ${lead.phone}`,
    lead.businessName ? `Entreprise: ${lead.businessName}` : null,
    "",
    lead.message ? `Message:\n${lead.message}` : null,
    "",
    "Réponds direct à ce mail pour contacter le lead.",
  ]
    .filter(Boolean)
    .join("\n");

  return { subject, html, text };
}
