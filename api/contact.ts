import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  isHoneypotTriggered,
  validate,
  type ContactFormPayload,
} from "./_lib/lead-schema";
import { buildN8nPayload } from "./_lib/lead-payload";

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

/**
 * Wait this long for n8n to respond. Vercel Hobby caps serverless functions
 * at 10s — we MUST return well before that. Real-world n8n runs (OpenAI +
 * Airtable + Gmail in sequence) take 20-35s, so the response will rarely
 * arrive in time. That's expected.
 */
const N8N_ACK_TIMEOUT_MS = 8_000;

/**
 * Strategy:
 *   - Fire the request, wait up to 8s for *any* response from n8n.
 *   - If n8n returns 2xx within 8s   → 200 OK, lead confirmed processed.
 *   - If n8n returns non-2xx           → 502, surface the failure to the user.
 *   - If the wait times out            → 202 Accepted (n8n is still running,
 *                                        the lead will land in Airtable
 *                                        within ~30s — we just can't confirm
 *                                        synchronously). The form treats 202
 *                                        as success.
 *   - If the network call itself fails → 502 (real failure, e.g. DNS down).
 */
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
  const timeout = setTimeout(() => controller.abort(), N8N_ACK_TIMEOUT_MS);

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

    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      // n8n is still working — we trust it and tell the user it succeeded.
      // Real failures will show up in n8n's execution logs.
      console.info(
        `n8n still processing after ${N8N_ACK_TIMEOUT_MS}ms — returning 202 Accepted`,
      );
      return res.status(202).json({ ok: true, async: true });
    }
    console.error("n8n webhook unexpected error:", error);
    return res.status(502).json({ ok: false, error: "webhook_failed" });
  } finally {
    clearTimeout(timeout);
  }
}
