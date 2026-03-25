import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <AnimatedSection className="text-center px-6">
          <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            {t('notFound.title')}
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {t('notFound.description')}
          </p>
          <Link
            to={`/${language}`}
            className="glow-button inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            {t('notFound.cta')}
          </Link>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default NotFound;
