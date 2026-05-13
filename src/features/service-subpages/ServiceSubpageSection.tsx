import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { CheckCircle } from "lucide-react";
import type { ServiceSection } from "./service-schema";

interface ServiceSubpageSectionProps {
  section: ServiceSection;
  variant?: "plain" | "card";
}

export function ServiceSubpageSection({
  section,
  variant = "plain",
}: ServiceSubpageSectionProps) {
  const body = (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">{section.h2}</h2>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
        {section.body}
      </p>
      {section.bullets && section.bullets.length > 0 && (
        <ul className="space-y-3 mt-6">
          {section.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle
                className="w-5 h-5 mt-1 flex-shrink-0 text-primary"
                aria-hidden
              />
              <span className="text-base md:text-lg">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <AnimatedSection className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {variant === "card" ? <GlassCard className="p-8 md:p-12">{body}</GlassCard> : body}
      </div>
    </AnimatedSection>
  );
}
