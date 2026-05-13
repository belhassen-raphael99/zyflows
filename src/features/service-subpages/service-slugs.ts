import type { ServiceSlug } from "./service-schema";

export const SERVICE_SLUGS: readonly ServiceSlug[] = [
  "ai-agents",
  "chatbots",
  "automation",
  "crm",
  "ecommerce",
] as const;

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}
