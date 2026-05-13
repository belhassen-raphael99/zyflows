import AnimatedSection from "@/components/ui/AnimatedSection";
import type { ServiceHero } from "./service-schema";

export function ServiceSubpageHero({ h1, subtitle, leadParagraph }: ServiceHero) {
  return (
    <AnimatedSection className="relative py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {h1}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
          {subtitle}
        </p>
        <p className="text-base md:text-lg text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
          {leadParagraph}
        </p>
      </div>
    </AnimatedSection>
  );
}
