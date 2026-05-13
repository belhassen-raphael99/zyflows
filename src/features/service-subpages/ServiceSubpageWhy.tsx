import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { Sparkles } from "lucide-react";
import type { ServiceWhyZyflows } from "./service-schema";

export function ServiceSubpageWhy({ h2, points }: ServiceWhyZyflows) {
  return (
    <AnimatedSection className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <GlassCard className="p-8 md:p-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
            {h2}
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {points.map((point, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-3">
                <Sparkles
                  className="w-8 h-8 text-primary"
                  aria-hidden
                />
                <p className="text-base md:text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
}
