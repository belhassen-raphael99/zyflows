import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  isHoneypotTriggered,
  validate,
  type ContactFormPayload,
} from "./_lib/lead-schema";
import { buildN8nPayload } from "./_lib/lead-payload";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
// Outbound timeout — n8n agent runs OpenAI + Airtable + Gmail, takes time.
const N8N_TIMEOUT_MS = 25_000;

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
    return res.status(400).json({ ok: false, error: "validation", fields: result.errors });
  }

  if (!N8N_WEBHOOK_URL) {
    console.error("N8N_WEBHOOK_URL is not configured");
    return res.status(500).json({ ok: false, error: "webhook_not_configured" });
  }

  const body = buildN8nPayload(result.lead);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), N8N_TIMEOUT_MS);

  try {
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("n8n webhook returned non-2xx:", response.status, text);
      return res.status(502).json({ ok: false, error: "webhook_failed" });
    }

    // n8n's Respond to Webhook returns { success, message, agent_response }.
    // We don't surface agent_response — the form only needs success/failure.
    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      console.error("n8n webhook timed out after", N8N_TIMEOUT_MS, "ms");
      return res.status(504).json({ ok: false, error: "webhook_timeout" });
    }
    console.error("n8n webhook unexpected error:", error);
    return res.status(500).json({ ok: false, error: "unexpected" });
  } finally {
    clearTimeout(timeout);
  }
}
