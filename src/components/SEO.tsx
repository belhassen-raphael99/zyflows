import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
    titleKey: string;
    descriptionKey: string;
    image?: string;
    url?: string;
}

export const SEO = ({ titleKey, descriptionKey, image = '/og-image.png', url }: SEOProps) => {
    const { t, language } = useLanguage();

    const title = t(titleKey);
    const description = t(descriptionKey);
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://zyflows.com';
    const currentUrl = url || `${siteUrl}/${language}${window.location.pathname.replace(/^\/(en|fr|he)/, '')}`;

    // Ensure image is absolute URL
    const absoluteImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    // Page-specific hreflang: strip the language prefix to get the page slug
    // e.g. /he/about → /about, /fr → ''
    const pagePath = window.location.pathname.replace(/^\/(he|fr|en)/, '');

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="language" content={language} />
            <link rel="canonical" href={currentUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:locale" content={language === 'he' ? 'he_IL' : language === 'fr' ? 'fr_FR' : 'en_US'} />
            <meta property="og:site_name" content="Zyflows" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={currentUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={absoluteImage} />

            {/* Page-specific hreflang — points to the same page in each language */}
            <link rel="alternate" href={`${siteUrl}/he${pagePath}`} hrefLang="he" />
            <link rel="alternate" href={`${siteUrl}/fr${pagePath}`} hrefLang="fr" />
            <link rel="alternate" href={`${siteUrl}/en${pagePath}`} hrefLang="en" />
            <link rel="alternate" href={`${siteUrl}/he${pagePath}`} hrefLang="x-default" />
        </Helmet>
    );
};
