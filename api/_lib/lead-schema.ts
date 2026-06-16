export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  businessName?: string;
  subject?: string;
  message?: string;
  language?: "he" | "fr" | "en";
  // Honeypot — bots fill this, humans don't see it.
  website?: string;
}

export interface ValidatedLead {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  subject: string;
  message: string;
  language: "he" | "fr" | "en";
}

const TRIM_MAX = 5000;

const trim = (v: unknown, fallback = ""): string =>
  typeof v === "string" ? v.trim().slice(0, TRIM_MAX) : fallback;

const isEmail = (v: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const SUBJECT_KEYS = ["audit", "automation", "chatbot", "web", "support", "other"] as const;
type SubjectKey = (typeof SUBJECT_KEYS)[number];
const isSubjectKey = (v: string): v is SubjectKey =>
  (SUBJECT_KEYS as readonly string[]).includes(v);

const isLang = (v: string): v is "he" | "fr" | "en" =>
  v === "he" || v === "fr" || v === "en";

export type ValidationResult =
  | { ok: true; lead: ValidatedLead }
  | { ok: false; errors: string[] };

export function validate(payload: ContactFormPayload): ValidationResult {
  const errors: string[] = [];
  const name = trim(payload.name);
  const email = trim(payload.email);
  const phone = trim(payload.phone);

  if (name.length < 2) errors.push("name");
  if (!isEmail(email)) errors.push("email");
  if (phone.length < 6) errors.push("phone");

  if (errors.length > 0) return { ok: false, errors };

  const rawSubject = trim(payload.subject);
  const rawLang = trim(payload.language);

  return {
    ok: true,
    lead: {
      name,
      email,
      phone,
      businessName: trim(payload.businessName),
      subject: isSubjectKey(rawSubject) ? rawSubject : "other",
      message: trim(payload.message),
      language: isLang(rawLang) ? rawLang : "en",
    },
  };
}

export function isHoneypotTriggered(payload: ContactFormPayload): boolean {
  return typeof payload.website === "string" && payload.website.length > 0;
}
