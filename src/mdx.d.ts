declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { BlogPostMetadata } from "@/features/blog/blog-schema";

  export const metadata: BlogPostMetadata;

  const Component: ComponentType;
  export default Component;
}
