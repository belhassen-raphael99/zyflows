import type { ComponentType } from "react";
import type { Language } from "@/contexts/LanguageContext";

export interface BlogPostMetadata {
  slug: string;
  language: Language;
  title: string;
  description: string;
  date: string;
  readingTimeMinutes: number;
  keywords: string[];
}

export interface BlogPost {
  metadata: BlogPostMetadata;
  Content: ComponentType;
}
