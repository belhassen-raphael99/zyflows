import { Link } from "react-router-dom";
import { MessageCircle, Calendar } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { CONTACT_INFO } from "@/lib/contact";
import type { ServiceCTA } from "./service-schema";

export function ServiceSubpageCTA({
  primaryLabel,
  secondaryLabel,
  helperText,
}: ServiceCTA) {
  const { language } = useLanguage();
  const contactUrl = `/${language}/contact`;

  return (
    <AnimatedSection className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        {helperText && (
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            {helperText}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to={contactUrl}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base md:text-lg font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Calendar className="w-5 h-5" aria-hidden />
            {primaryLabel}
          </Link>
          <a
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary/40 bg-background/50 px-6 py-3 text-base md:text-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            {secondaryLabel}
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
