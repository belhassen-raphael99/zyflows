import { CheckCircle, Loader2, Send } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContactForm } from "./useContactForm";

export function ContactForm() {
  const { t } = useLanguage();
  const { fields, status, errorKey, set, submit, reset } = useContactForm();

  if (status === "success") {
    return (
      <GlassCard hover={false} className="p-10 text-center">
        <CheckCircle
          className="w-16 h-16 text-primary mx-auto mb-6"
          aria-hidden
        />
        <h2 className="text-2xl font-bold mb-3">
          {t("contact.form.successTitle")}
        </h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {t("contact.form.successMessage")}
        </p>
        <button
          type="button"
          onClick={reset}
          className="text-primary hover:underline font-medium"
        >
          {t("contact.form.successAnother")}
        </button>
      </GlassCard>
    );
  }

  const submitting = status === "submitting";

  return (
    <GlassCard hover={false} className="p-8">
      <h2 className="text-2xl font-bold mb-6">{t("contact.leaveDetails")}</h2>
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          if (!submitting) submit();
        }}
        noValidate
      >
        {/* Honeypot — invisible to humans, bots fill it. */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "-9999px",
            width: 1,
            height: 1,
            overflow: "hidden",
          }}
        >
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={fields.website}
            onChange={(e) => set("website", e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("contact.form.name")} *
            </label>
            <input
              type="text"
              required
              autoComplete="name"
              value={fields.name}
              onChange={(e) => set("name", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder={t("contact.form.namePlaceholder")}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              {t("contact.form.phone")} *
            </label>
            <input
              type="tel"
              required
              autoComplete="tel"
              value={fields.phone}
              onChange={(e) => set("phone", e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              placeholder={t("contact.form.phonePlaceholder")}
              dir="ltr"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("contact.form.email")} *
          </label>
          <input
            type="email"
            required
            autoComplete="email"
            value={fields.email}
            onChange={(e) => set("email", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder={t("contact.form.emailPlaceholder")}
            dir="ltr"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("contact.form.businessName")}
          </label>
          <input
            type="text"
            autoComplete="organization"
            value={fields.businessName}
            onChange={(e) => set("businessName", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder={t("contact.form.businessPlaceholder")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("contact.form.subject")}
          </label>
          <select
            value={fields.subject}
            onChange={(e) => set("subject", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
          >
            <option value="">{t("contact.form.selectTopic")}</option>
            <option value="audit">{t("contact.form.topicDiagnosis")}</option>
            <option value="automation">{t("contact.form.topicAutomation")}</option>
            <option value="chatbot">{t("contact.form.topicChatbot")}</option>
            <option value="web">{t("contact.form.topicWeb")}</option>
            <option value="support">{t("contact.form.topicSupport")}</option>
            <option value="other">{t("contact.form.topicOther")}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            {t("contact.form.message")}
          </label>
          <textarea
            rows={4}
            value={fields.message}
            onChange={(e) => set("message", e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            placeholder={t("contact.form.messagePlaceholder")}
          />
        </div>

        {status === "error" && (
          <div
            role="alert"
            className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-sm"
          >
            {errorKey === "validation"
              ? t("contact.form.errorValidation")
              : t("contact.form.errorGeneric")}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="glow-button w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden />
              {t("contact.form.sending")}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" aria-hidden />
              {t("contact.form.sendRequest")}
            </>
          )}
        </button>

        <p className="text-sm text-muted-foreground text-center">
          {t("contact.form.responseTime")}
        </p>
      </form>
    </GlassCard>
  );
}
