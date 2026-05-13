import Layout from "@/components/layout/Layout";
import { ServiceSubpageSEO } from "./ServiceSubpageSEO";
import { ServiceSubpageHero } from "./ServiceSubpageHero";
import { ServiceSubpageSection } from "./ServiceSubpageSection";
import { ServiceSubpageUseCases } from "./ServiceSubpageUseCases";
import { ServiceSubpageWhy } from "./ServiceSubpageWhy";
import { ServiceSubpageCTA } from "./ServiceSubpageCTA";
import type { ServiceContent } from "./service-schema";

interface ServiceSubpageProps {
  content: ServiceContent;
}

export function ServiceSubpage({ content }: ServiceSubpageProps) {
  return (
    <Layout>
      <ServiceSubpageSEO meta={content.meta} slug={content.slug} />
      <main>
        <ServiceSubpageHero {...content.hero} />
        <ServiceSubpageSection section={content.whatItIs} />
        {content.features.map((feature, idx) => (
          <ServiceSubpageSection
            key={idx}
            section={feature}
            variant={idx % 2 === 0 ? "card" : "plain"}
          />
        ))}
        <ServiceSubpageUseCases
          heading={content.useCases.heading}
          useCases={content.useCases.items}
        />
        <ServiceSubpageWhy {...content.whyZyflows} />
        <ServiceSubpageCTA {...content.cta} />
      </main>
    </Layout>
  );
}
