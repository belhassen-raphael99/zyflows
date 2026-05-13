import { Link } from "react-router-dom";
import { MessageCircle, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT_INFO } from "@/lib/contact";

const CTA_CONTENT = {
  he: {
    heading: "מוכן להתחיל?",
    body: "נסה את האודיט החינמי שלנו. נבחן את העסק שלך ונאמר לך בדיוק איזה אוטומציות יעבדו בשבילך — בלי תוספות מיותרות.",
    primary: "אודיט חינם",
    secondary: "וואטסאפ ישיר",
  },
  fr: {
    heading: "Prêt à démarrer ?",
    body: "Essayez notre audit gratuit. On examine votre activité et on vous dit exactement quelles automatisations marcheront pour vous — sans surfacturation.",
    primary: "Audit offert",
    secondary: "WhatsApp direct",
  },
  en: {
    heading: "Ready to start?",
    body: "Try our free audit. We examine your business and tell you exactly which automations will work for you — no fluff to inflate the bill.",
    primary: "Free Audit",
    secondary: "WhatsApp Direct",
  },
} as const;

export function BlogPostCTA() {
  const { language } = useLanguage();
  const content = CTA_CONTENT[language];

  return (
    <AnimatedSection className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <GlassCard className="p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {content.heading}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            {content.body}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/${language}/contact`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base md:text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Calendar className="w-5 h-5" aria-hidden />
              {content.primary}
            </Link>
            <a
              href={CONTACT_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-background/50 px-6 py-3 text-base md:text-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              {content.secondary}
            </a>
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
