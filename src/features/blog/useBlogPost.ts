import { useMemo } from "react";
import type { Language } from "@/contexts/LanguageContext";
import type { BlogPost } from "./blog-schema";
import { isBlogSlug } from "./blog-slugs";

import guideAutomationAi2026He, {
  metadata as guideAutomationAi2026HeMeta,
} from "./content/guide-automation-ai-2026.he.mdx";

const POSTS: Record<string, Partial<Record<Language, BlogPost>>> = {
  "guide-automation-ai-2026": {
    he: { metadata: guideAutomationAi2026HeMeta, Content: guideAutomationAi2026He },
  },
};

export function useBlogPost(
  slug: string | undefined,
  language: Language,
): BlogPost | null {
  return useMemo(() => {
    if (!slug || !isBlogSlug(slug)) return null;
    return POSTS[slug]?.[language] ?? null;
  }, [slug, language]);
}

export function useBlogPostsForLanguage(language: Language): BlogPost[] {
  return useMemo(() => {
    return Object.values(POSTS)
      .map((postsByLang) => postsByLang[language])
      .filter((post): post is BlogPost => post !== undefined)
      .sort(
        (a, b) =>
          new Date(b.metadata.date).getTime() -
          new Date(a.metadata.date).getTime(),
      );
  }, [language]);
}
