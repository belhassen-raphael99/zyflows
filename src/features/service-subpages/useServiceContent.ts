import { useMemo } from "react";
import type { Language } from "@/contexts/LanguageContext";
import type { ServiceContent, ServiceSlug } from "./service-schema";
import { isServiceSlug } from "./service-slugs";

import { aiAgentsHe } from "./content/ai-agents.he";
import { aiAgentsFr } from "./content/ai-agents.fr";
import { aiAgentsEn } from "./content/ai-agents.en";

type ContentMap = Record<Language, Partial<Record<ServiceSlug, ServiceContent>>>;

const CONTENT_MAP: ContentMap = {
  he: {
    "ai-agents": aiAgentsHe,
  },
  fr: {
    "ai-agents": aiAgentsFr,
  },
  en: {
    "ai-agents": aiAgentsEn,
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
