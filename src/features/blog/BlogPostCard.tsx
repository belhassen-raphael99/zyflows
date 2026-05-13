import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPostMetadata } from "./blog-schema";

const LOCALE_MAP = {
  he: "he-IL",
  fr: "fr-FR",
  en: "en-US",
} as const;

const LABELS = {
  he: { reading: "דקות קריאה", readMore: "קראו את המאמר" },
  fr: { reading: "min de lecture", readMore: "Lire l'article" },
  en: { reading: "min read", readMore: "Read the article" },
} as const;

interface BlogPostCardProps {
  metadata: BlogPostMetadata;
  index?: number;
}

export function BlogPostCard({ metadata, index = 0 }: BlogPostCardProps) {
  const { language, dir } = useLanguage();
  const labels = LABELS[language];
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
  const formattedDate = new Date(metadata.date).toLocaleDateString(
    LOCALE_MAP[language],
    { year: "numeric", month: "long", day: "numeric" },
  );

  return (
    <AnimatedSection delay={index * 80}>
      <Link
        to={`/${language}/blog/${metadata.slug}`}
        className="block group h-full"
      >
        <GlassCard className="h-full p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" aria-hidden />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4" aria-hidden />
              {metadata.readingTimeMinutes} {labels.reading}
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold leading-tight">
            {metadata.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed flex-1">
            {metadata.description}
          </p>
          <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            {labels.readMore}
            <ArrowIcon className="w-4 h-4" aria-hidden />
          </span>
        </GlassCard>
      </Link>
    </AnimatedSection>
  );
}
