import type { ComponentType } from "react";
import { MDXProvider } from "@mdx-js/react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface BlogPostBodyProps {
  Content: ComponentType;
}

export function BlogPostBody({ Content }: BlogPostBodyProps) {
  return (
    <AnimatedSection className="relative py-8 md:py-12">
      {/* Subtle backdrop so the article stays readable on top of the animated globe */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm pointer-events-none" />
      <article
        className="relative container mx-auto px-4 max-w-3xl prose prose-lg
          prose-headings:text-foreground prose-headings:font-bold
          prose-headings:mt-12 prose-headings:mb-4
          prose-h2:text-2xl prose-h2:md:text-3xl
          prose-h3:text-xl prose-h3:md:text-2xl
          prose-p:text-foreground/95 prose-p:leading-relaxed prose-p:my-4
          prose-li:text-foreground/95
          prose-strong:text-foreground prose-strong:font-bold
          prose-a:text-primary prose-a:font-medium prose-a:no-underline
          hover:prose-a:underline
          prose-ul:my-4 prose-li:my-1
          prose-blockquote:border-primary/40 prose-blockquote:text-foreground/80"
      >
        <MDXProvider>
          <Content />
        </MDXProvider>
      </article>
    </AnimatedSection>
  );
}
