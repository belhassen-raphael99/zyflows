import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/ui/AnimatedSection";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <AnimatedSection className="text-center px-6">
          <div className="text-8xl md:text-9xl font-bold gradient-text mb-4">
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">
            העמוד לא נמצא
          </h1>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            מצטערים, העמוד שחיפשתם לא קיים. אולי הקישור שגוי או שהעמוד הוסר.
          </p>
          <Link
            to="/"
            className="glow-button inline-flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            חזרה לדף הבית
          </Link>
        </AnimatedSection>
      </section>
    </Layout>
  );
};

export default NotFound;
