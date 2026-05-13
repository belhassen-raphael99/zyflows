import { Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPostMetadata } from "./blog-schema";

const LOCALE_MAP = {
  he: "he-IL",
  fr: "fr-FR",
  en: "en-US",
} as const;

const READING_LABEL = {
  he: "דקות קריאה",
  fr: "min de lecture",
  en: "min read",
} as const;

interface BlogPostHeroProps {
  metadata: BlogPostMetadata;
}

export function BlogPostHero({ metadata }: BlogPostHeroProps) {
  const { language } = useLanguage();
  const formattedDate = new Date(metadata.date).toLocaleDateString(
    LOCALE_MAP[language],
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <AnimatedSection className="pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" aria-hidden />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" aria-hidden />
            {metadata.readingTimeMinutes} {READING_LABEL[language]}
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          {metadata.title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {metadata.description}
        </p>
      </div>
    </AnimatedSection>
  );
}
