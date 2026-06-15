# Contact form — Setup (one-time)

The serverless function at `/api/contact.ts` needs a Resend API key to actually send emails.
Without it, the form will return a clean 500 ("email_not_configured") but the rest of the site keeps working.

## 1. Get a Resend API key (3 min)

1. Sign up at https://resend.com (free tier: 3000 emails/month, 100/day)
2. Once in: **API Keys → Create API Key**
3. Name it `zyflows-prod`, scope **Sending access** (read-only on the rest)
4. Copy the key (`re_xxxxxxxxxxxxxxxxxxxx`)

## 2. Add it to Vercel (1 min)

1. Go to https://vercel.com/belhassen-raphael99s-projects/zyflows/settings/environment-variables
2. **Add New** with:
   - Name: `RESEND_API_KEY`
   - Value: paste the key
   - Environments: **Production, Preview, Development** (all three)
3. **Save**

## 3. (Optional) Send from your own domain

By default emails are sent from `onboarding@resend.dev` and `replyTo` is the lead's email — works
immediately, no DNS needed.

If you want emails sent from `leads@zyflows.com`:

1. Resend → **Domains → Add Domain → zyflows.com**
2. Resend gives you ~3 DNS records (TXT for SPF, CNAME for DKIM, etc.)
3. Add them in Hostinger DNS panel
4. Wait 5-30 min, click **Verify** in Resend
5. In Vercel env vars, add:
   - `LEAD_FROM_EMAIL` = `Zyflows Lead <leads@zyflows.com>`

## 4. (Optional) Send to a different inbox

Default destination is `contact@zyflows.com`. To change:

In Vercel env vars, add:
- `LEAD_TO_EMAIL` = `your-other@email.com`

## Verifying it works

After saving the env var, trigger a Vercel redeploy (any commit or "Redeploy" button), then on
the live contact page, fill the form and submit. You should:

1. See the "Thanks!" success state
2. Receive the email in `contact@zyflows.com` within seconds
3. Hit Reply on that email → reply goes to the lead
