import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ServiceMeta, ServiceSlug } from "./service-schema";

interface ServiceSubpageSEOProps {
  meta: ServiceMeta;
  slug: ServiceSlug;
}

const SITE_URL = "https://www.zyflows.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const OG_LOCALES = {
  he: "he_IL",
  fr: "fr_FR",
  en: "en_US",
} as const;

export function ServiceSubpageSEO({ meta, slug }: ServiceSubpageSEOProps) {
  const { language } = useLanguage();
  const canonicalUrl = `${SITE_URL}/${language}/services/${slug}`;
  const pagePath = `/services/${slug}`;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="language" content={language} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content={OG_LOCALES[language]} />
      <meta property="og:site_name" content="Zyflows" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={OG_IMAGE} />

      <link rel="alternate" href={`${SITE_URL}/he${pagePath}`} hrefLang="he" />
      <link rel="alternate" href={`${SITE_URL}/fr${pagePath}`} hrefLang="fr" />
      <link rel="alternate" href={`${SITE_URL}/en${pagePath}`} hrefLang="en" />
      <link
        rel="alternate"
        href={`${SITE_URL}/he${pagePath}`}
        hrefLang="x-default"
      />
    </Helmet>
  );
}
