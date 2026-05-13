import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { useBlogPostsForLanguage } from "./useBlogPost";
import { BlogPostCard } from "./BlogPostCard";

const SITE_URL = "https://www.zyflows.com";

const PAGE_CONTENT = {
  he: {
    title: "בלוג Zyflows | תובנות על אוטומציה ו-AI לעסקים",
    description:
      "מאמרים מעמיקים על אוטומציה עסקית, סוכני AI, צ'אטבוטים ו-CRM — לעסקים בישראל. תובנות מעשיות, בלי פלאגר.",
    heading: "בלוג Zyflows",
    subheading: "תובנות מעשיות על אוטומציה ו-AI לעסקים בישראל",
    empty: "אין עדיין מאמרים בעברית. בקרוב!",
  },
  fr: {
    title: "Blog Zyflows | Insights automatisation et IA pour entreprises",
    description:
      "Articles approfondis sur l'automatisation, les agents IA, les chatbots et CRM — pour les entreprises en Israël. Sans bullshit.",
    heading: "Blog Zyflows",
    subheading: "Insights concrets sur l'automatisation et l'IA",
    empty: "Pas encore d'articles en français. Bientôt !",
  },
  en: {
    title: "Zyflows Blog | Automation & AI insights for businesses",
    description:
      "In-depth articles on business automation, AI agents, chatbots, and CRM — for businesses in Israel. No fluff.",
    heading: "Zyflows Blog",
    subheading: "Practical insights on automation and AI",
    empty: "No articles in English yet. Coming soon!",
  },
} as const;

export function BlogList() {
  const { language } = useLanguage();
  const posts = useBlogPostsForLanguage(language);
  const content = PAGE_CONTENT[language];
  const canonicalUrl = `${SITE_URL}/${language}/blog`;

  return (
    <Layout>
      <Helmet>
        <title>{content.title}</title>
        <meta name="description" content={content.description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <link rel="alternate" href={`${SITE_URL}/he/blog`} hrefLang="he" />
        <link rel="alternate" href={`${SITE_URL}/fr/blog`} hrefLang="fr" />
        <link rel="alternate" href={`${SITE_URL}/en/blog`} hrefLang="en" />
        <link rel="alternate" href={`${SITE_URL}/he/blog`} hrefLang="x-default" />
      </Helmet>
      <main>
        <AnimatedSection className="pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {content.heading}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {content.subheading}
            </p>
          </div>
        </AnimatedSection>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {posts.length === 0 ? (
              <p className="text-center text-muted-foreground py-12">
                {content.empty}
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post, index) => (
                  <BlogPostCard
                    key={post.metadata.slug}
                    metadata={post.metadata}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
