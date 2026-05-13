import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { BlogPostArticle, useBlogPost } from "@/features/blog";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const post = useBlogPost(slug, language);

  if (!post) {
    return <Navigate to={`/${language}/blog`} replace />;
  }

  return <BlogPostArticle post={post} />;
}
