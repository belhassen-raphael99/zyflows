import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import type { ServiceUseCase } from "./service-schema";

interface ServiceSubpageUseCasesProps {
  heading: string;
  useCases: ServiceUseCase[];
}

export function ServiceSubpageUseCases({
  heading,
  useCases,
}: ServiceSubpageUseCasesProps) {
  return (
    <AnimatedSection className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-center">
          {heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, idx) => (
            <GlassCard key={idx} className="p-6 flex flex-col gap-3">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                {useCase.type}
              </span>
              <p className="text-base text-muted-foreground">{useCase.problem}</p>
              <p className="text-base font-medium">{useCase.solution}</p>
              {useCase.outcome && (
                <p className="text-sm text-primary/90 mt-2 font-semibold">
                  → {useCase.outcome}
                </p>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
