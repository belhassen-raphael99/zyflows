import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import {
  isHoneypotTriggered,
  validate,
  type ContactFormPayload,
} from "./_lib/lead-schema";
import { formatLeadEmail } from "./_lib/lead-email";

const TO_ADDRESS = process.env.LEAD_TO_EMAIL ?? "contact@zyflows.com";
// Resend lets us send from `onboarding@resend.dev` without domain verification.
// Switch to `leads@zyflows.com` once the domain is verified in Resend.
const FROM_ADDRESS =
  process.env.LEAD_FROM_EMAIL ?? "Zyflows Lead <onboarding@resend.dev>";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const payload = (req.body ?? {}) as ContactFormPayload;

  // Honeypot — return 200 so the bot thinks it worked, but do nothing.
  if (isHoneypotTriggered(payload)) {
    return res.status(200).json({ ok: true });
  }

  const result = validate(payload);
  if (!result.ok) {
    return res.status(400).json({ ok: false, errors: result.errors });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).json({ ok: false, error: "email_not_configured" });
  }

  const { subject, html, text } = formatLeadEmail(result.lead);
  const resend = new Resend(apiKey);

  try {
    const send = await resend.emails.send({
      from: FROM_ADDRESS,
      to: TO_ADDRESS,
      replyTo: result.lead.email,
      subject,
      html,
      text,
    });

    if (send.error) {
      console.error("Resend send error:", send.error);
      return res.status(502).json({ ok: false, error: "email_send_failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Unexpected Resend error:", error);
    return res.status(500).json({ ok: false, error: "unexpected" });
  }
}
