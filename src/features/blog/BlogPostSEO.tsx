import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPostMetadata } from "./blog-schema";

interface BlogPostSEOProps {
  metadata: BlogPostMetadata;
}

const SITE_URL = "https://www.zyflows.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const OG_LOCALES = {
  he: "he_IL",
  fr: "fr_FR",
  en: "en_US",
} as const;

export function BlogPostSEO({ metadata }: BlogPostSEOProps) {
  const { language } = useLanguage();
  const canonicalUrl = `${SITE_URL}/${language}/blog/${metadata.slug}`;
  const pagePath = `/blog/${metadata.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: metadata.title,
    description: metadata.description,
    datePublished: metadata.date,
    inLanguage: language,
    keywords: metadata.keywords.join(", "),
    author: {
      "@type": "Organization",
      name: "Zyflows",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Zyflows",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logo-z-C5e956L7.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
    image: OG_IMAGE,
  };

  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="language" content={language} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="article" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={OG_LOCALES[language]} />
      <meta property="og:site_name" content="Zyflows" />
      <meta property="article:published_time" content={metadata.date} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={metadata.title} />
      <meta property="twitter:description" content={metadata.description} />
      <meta property="twitter:image" content={OG_IMAGE} />

      <link rel="alternate" href={`${SITE_URL}/he${pagePath}`} hrefLang="he" />
      <link rel="alternate" href={`${SITE_URL}/fr${pagePath}`} hrefLang="fr" />
      <link rel="alternate" href={`${SITE_URL}/en${pagePath}`} hrefLang="en" />
      <link rel="alternate" href={`${SITE_URL}/he${pagePath}`} hrefLang="x-default" />

      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
    </Helmet>
  );
}
