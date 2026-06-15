import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ContactFormFields {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  subject: string;
  message: string;
  // Honeypot — keep empty.
  website: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

const EMPTY: ContactFormFields = {
  name: "",
  email: "",
  phone: "",
  businessName: "",
  subject: "",
  message: "",
  website: "",
};

export function useContactForm() {
  const { language } = useLanguage();
  const [fields, setFields] = useState<ContactFormFields>(EMPTY);
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  function set<K extends keyof ContactFormFields>(
    key: K,
    value: ContactFormFields[K],
  ) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  async function submit() {
    setStatus("submitting");
    setErrorKey(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, language }),
      });
      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: string[];
      };

      if (response.ok && body.ok) {
        setStatus("success");
        setFields(EMPTY);
        return;
      }

      setStatus("error");
      setErrorKey(body.error ?? "send_failed");
    } catch (e) {
      console.error("Contact form submit failed:", e);
      setStatus("error");
      setErrorKey("network");
    }
  }

  function reset() {
    setStatus("idle");
    setErrorKey(null);
  }

  return { fields, status, errorKey, set, submit, reset };
}
