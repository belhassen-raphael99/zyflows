import type { ComponentType } from "react";
import { MDXProvider } from "@mdx-js/react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface BlogPostBodyProps {
  Content: ComponentType;
}

export function BlogPostBody({ Content }: BlogPostBodyProps) {
  return (
    <AnimatedSection className="py-8 md:py-12">
      <article className="container mx-auto px-4 max-w-3xl prose prose-invert prose-lg
        prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-4
        prose-h2:text-2xl prose-h2:md:text-3xl
        prose-h3:text-xl prose-h3:md:text-2xl
        prose-p:leading-relaxed prose-p:my-4
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground
        prose-ul:my-4 prose-li:my-1
        prose-blockquote:border-primary/40">
        <MDXProvider>
          <Content />
        </MDXProvider>
      </article>
    </AnimatedSection>
  );
}
