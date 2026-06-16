import type { ValidatedLead } from "./lead-schema.js";

/**
 * Internal notification email — sent to the Zyflows admin inbox whenever a
 * new lead comes through the form. Distinct from the confirmation email
 * (which goes to the lead).
 *
 * Design priorities (different from the lead confirmation):
 *   - Subject is the priority: "🆕 [SERVICE] Name (Company)" so the inbox
 *     reads like a triage queue.
 *   - Always in French — internal, no need to localize.
 *   - Information-dense, not warm: fields in a clean table, easy to scan.
 *   - All key facts present (email, phone, language, service, message).
 *   - Mailto + tel links so a tap → reply / call.
 */

const SUBJECT_LABEL = {
  audit: "AUDIT",
  automation: "AUTOMATION",
  chatbot: "CHATBOT",
  web: "WEB",
  crm: "CRM",
  support: "SUPPORT",
  other: "AUTRE",
} as const;

const LANGUAGE_LABEL = {
  he: "🇮🇱 Hébreu",
  fr: "🇫🇷 Français",
  en: "🇬🇧 Anglais",
} as const;

const escape = (s: string): string =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const nl2br = (s: string): string => escape(s).replaceAll("\n", "<br />");

export interface RenderedAdminNotification {
  subject: string;
  html: string;
}

export function renderAdminNotification(
  lead: ValidatedLead,
): RenderedAdminNotification {
  const tag = SUBJECT_LABEL[lead.subject as keyof typeof SUBJECT_LABEL] ?? "AUTRE";
  const langLabel = LANGUAGE_LABEL[lead.language];

  const company = lead.businessName ? ` (${lead.businessName})` : "";
  const subject = `🆕 [${tag}] ${lead.name}${company}`;

  const row = (label: string, value: string): string => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#6b7280;font-size:13px;width:140px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#111827;font-size:14px;font-weight:500;">${value}</td>
    </tr>`;

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escape(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f3f4f6;">
    <tr>
      <td align="center" style="padding:24px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.04);">

          <!-- HEADER -->
          <tr>
            <td style="background:linear-gradient(135deg,#0e9888 0%,#0d2025 100%);padding:24px 32px;">
              <div style="color:#a7f3d0;font-size:12px;font-weight:600;letter-spacing:1px;text-transform:uppercase;">Nouveau lead — ${escape(tag)}</div>
              <div style="color:#ffffff;font-size:22px;font-weight:700;margin-top:6px;">${escape(lead.name)}</div>
              ${lead.businessName ? `<div style="color:#a7f3d0;font-size:14px;margin-top:2px;">${escape(lead.businessName)}</div>` : ""}
            </td>
          </tr>

          <!-- INFO TABLE -->
          <tr>
            <td style="padding:8px 32px 16px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                ${row("Email", `<a href="mailto:${escape(lead.email)}" style="color:#0e9888;text-decoration:none;">${escape(lead.email)}</a>`)}
                ${row("Téléphone", `<a href="tel:${escape(lead.phone)}" style="color:#0e9888;text-decoration:none;">${escape(lead.phone)}</a>`)}
                ${row("Service", escape(tag))}
                ${row("Langue", escape(langLabel))}
                ${row("Source", "🌐 Site Web")}
              </table>
            </td>
          </tr>

          <!-- MESSAGE -->
          ${
            lead.message
              ? `<tr>
                  <td style="padding:8px 32px 24px;">
                    <div style="font-size:12px;color:#6b7280;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:8px;">Message du lead</div>
                    <div style="padding:16px;background:#f9fafb;border-${lead.language === "he" ? "right" : "left"}:3px solid #0e9888;border-radius:6px;color:#1f2937;font-size:14px;line-height:1.6;white-space:pre-wrap;">${nl2br(lead.message)}</div>
                  </td>
                </tr>`
              : ""
          }

          <!-- ACTIONS -->
          <tr>
            <td style="padding:8px 32px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:8px;">
                    <a href="mailto:${escape(lead.email)}?subject=Re%3A%20Votre%20demande%20Zyflows" style="display:inline-block;background:#0e9888;color:#ffffff;padding:10px 18px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">Répondre par email</a>
                  </td>
                  <td>
                    <a href="tel:${escape(lead.phone)}" style="display:inline-block;background:#ffffff;border:1px solid #d1d5db;color:#111827;padding:9px 18px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">Appeler</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f9fafb;padding:14px 32px;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;font-size:11px;color:#9ca3af;">
                Notification automatique Zyflows · ${new Date().toLocaleString("fr-FR", { dateStyle: "medium", timeStyle: "short" })}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, html };
}
