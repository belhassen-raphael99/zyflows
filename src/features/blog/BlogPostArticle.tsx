import Layout from "@/components/layout/Layout";
import { BlogPostSEO } from "./BlogPostSEO";
import { BlogPostHero } from "./BlogPostHero";
import { BlogPostBody } from "./BlogPostBody";
import { BlogPostCTA } from "./BlogPostCTA";
import type { BlogPost } from "./blog-schema";

interface BlogPostArticleProps {
  post: BlogPost;
}

export function BlogPostArticle({ post }: BlogPostArticleProps) {
  const { metadata, Content } = post;
  return (
    <Layout>
      <BlogPostSEO metadata={metadata} />
      <main>
        <BlogPostHero metadata={metadata} />
        <BlogPostBody Content={Content} />
        <BlogPostCTA />
      </main>
    </Layout>
  );
}
