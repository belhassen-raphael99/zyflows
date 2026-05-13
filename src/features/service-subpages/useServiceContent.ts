import { useMemo } from "react";
import type { Language } from "@/contexts/LanguageContext";
import type { ServiceContent, ServiceSlug } from "./service-schema";
import { isServiceSlug } from "./service-slugs";

import { aiAgentsHe } from "./content/ai-agents.he";
import { aiAgentsFr } from "./content/ai-agents.fr";
import { aiAgentsEn } from "./content/ai-agents.en";
import { chatbotsHe } from "./content/chatbots.he";
import { chatbotsFr } from "./content/chatbots.fr";
import { chatbotsEn } from "./content/chatbots.en";
import { automationHe } from "./content/automation.he";
import { automationFr } from "./content/automation.fr";
import { automationEn } from "./content/automation.en";
import { crmHe } from "./content/crm.he";
import { crmFr } from "./content/crm.fr";
import { crmEn } from "./content/crm.en";
import { ecommerceHe } from "./content/ecommerce.he";
import { ecommerceFr } from "./content/ecommerce.fr";
import { ecommerceEn } from "./content/ecommerce.en";

type ContentMap = Record<Language, Record<ServiceSlug, ServiceContent>>;

const CONTENT_MAP: ContentMap = {
  he: {
    "ai-agents": aiAgentsHe,
    chatbots: chatbotsHe,
    automation: automationHe,
    crm: crmHe,
    ecommerce: ecommerceHe,
  },
  fr: {
    "ai-agents": aiAgentsFr,
    chatbots: chatbotsFr,
    automation: automationFr,
    crm: crmFr,
    ecommerce: ecommerceFr,
  },
  en: {
    "ai-agents": aiAgentsEn,
    chatbots: chatbotsEn,
    automation: automationEn,
    crm: crmEn,
    ecommerce: ecommerceEn,
  },
};

export function useServiceContent(
  slug: string | undefined,
  language: Language,
): ServiceContent | null {
  return useMemo(() => {
    if (!slug || !isServiceSlug(slug)) return null;
    return CONTENT_MAP[language]?.[slug] ?? null;
  }, [slug, language]);
}
