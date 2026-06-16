# Contact form — Setup (one-time)

The serverless function at `/api/contact.ts` forwards leads to your **n8n**
workflow "Zyflows Form Agent". The workflow does the heavy lifting:

- detects language (FR / EN / HE)
- scores the lead
- searches Airtable CRM by email
- creates or updates the contact record
- sends a localized confirmation email via Gmail
- returns success status

Without the env var below, the form will return a clean 500
("webhook_not_configured") but the rest of the site keeps working.

## 1. Get the n8n webhook URL (1 min)

1. In your n8n, open the workflow **"Zyflows Form Agent - AI Agent Architecture"**
2. Click the **Webhook** node (the one connected to "Edit Fields", path `4aa4dcc9-...`)
3. Copy the **Production URL** (looks like
   `https://n8n.yourdomain.com/webhook/4aa4dcc9-61be-457c-b623-493a4e2198fb`)
4. Make sure the workflow is **Active** (top right toggle)

## 2. Add the URL to Vercel (1 min)

1. Go to https://vercel.com/belhassen-raphael99s-projects/zyflows/settings/environment-variables
2. **Add New** with:
   - Name: `N8N_WEBHOOK_URL`
   - Value: paste the URL from step 1
   - Environments: **Production, Preview, Development** (all three)
3. **Save**
4. Trigger a redeploy from the Vercel dashboard (any push, or "Redeploy" button)

## 3. (Optional) Match the workflow's Edit Fields

The form sends these top-level fields:

| Field           | Type     | Notes                                                                |
| --------------- | -------- | -------------------------------------------------------------------- |
| `name`          | string   | Required                                                             |
| `email`         | string   | Required, must look like an email                                    |
| `phone`         | string   | Required, min 6 chars                                                |
| `company`       | string   | Form's "Business name" (mapped from `businessName`)                  |
| `message`       | string   | Includes `[Service souhaité: X]` and `[Langue: Y]` tags as hints     |
| `source`        | string   | Always `🌐 Site Web`                                                 |
| `service_hint`  | string   | One of: Automatisation, Chatbot IA, Site Web/SaaS, CRM personnalisé, Conseil IA, Autre |
| `language_hint` | string   | One of: 🇫🇷 Français, 🇬🇧 English, 🇮🇱 עברית                        |

Your workflow's current `Edit Fields` node only picks up
`name, email, phone, company, message, source`. The two `*_hint` fields are
ignored by Edit Fields **but the AI agent can still read them from the
embedded `[…]` tags inside `message`**, so it works out of the box.

If you later want the hints as proper Airtable columns, add the two
hint fields to the `Edit Fields` node's assignments.

## Verifying it works

After saving the env var and redeploying:

1. Submit the form on `/contact`
2. You should see the "Thanks!" success state
3. Within 30s your Airtable "Leads & Clients" table should have a new row
4. The lead's email inbox should receive the localized confirmation email
5. The n8n execution log should show success on the webhook trigger

## Common errors

| Error              | What it means                                                                   |
| ------------------ | ------------------------------------------------------------------------------- |
| `webhook_not_configured` | `N8N_WEBHOOK_URL` env var is missing                                        |
| `webhook_failed`   | n8n returned non-2xx — check workflow execution logs                            |
| `webhook_timeout`  | n8n took > 25s — check OpenAI / Airtable / Gmail credentials in the workflow    |
| `validation`       | The form payload was incomplete — check the `fields` array in the response      |
