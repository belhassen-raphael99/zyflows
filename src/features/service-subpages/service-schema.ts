import type { Language } from "@/contexts/LanguageContext";

export type ServiceSlug =
  | "ai-agents"
  | "chatbots"
  | "automation"
  | "crm"
  | "ecommerce";

export interface ServiceMeta {
  title: string;
  description: string;
}

export interface ServiceHero {
  h1: string;
  subtitle: string;
  leadParagraph: string;
}

export interface ServiceSection {
  h2: string;
  body: string;
  bullets?: string[];
}

export interface ServiceUseCase {
  type: string;
  problem: string;
  solution: string;
  outcome?: string;
}

export interface ServiceUseCasesBlock {
  heading: string;
  items: ServiceUseCase[];
}

export interface ServiceWhyZyflows {
  h2: string;
  points: string[];
}

export interface ServiceCTA {
  primaryLabel: string;
  secondaryLabel: string;
  helperText?: string;
}

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServiceContent {
  slug: ServiceSlug;
  language: Language;
  meta: ServiceMeta;
  hero: ServiceHero;
  whatItIs: ServiceSection;
  features: ServiceSection[];
  useCases: ServiceUseCasesBlock;
  whyZyflows: ServiceWhyZyflows;
  cta: ServiceCTA;
  faq?: ServiceFAQItem[];
}
