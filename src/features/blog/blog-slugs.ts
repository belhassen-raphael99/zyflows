export const BLOG_SLUGS = [
  "guide-automation-ai-2026",
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];

export function isBlogSlug(value: string): value is BlogSlug {
  return (BLOG_SLUGS as readonly string[]).includes(value);
}
