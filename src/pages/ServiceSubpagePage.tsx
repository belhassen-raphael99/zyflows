import { Navigate, useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  ServiceSubpage,
  useServiceContent,
} from "@/features/service-subpages";

export default function ServiceSubpagePage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const content = useServiceContent(slug, language);

  if (!content) {
    return <Navigate to={`/${language}/services`} replace />;
  }

  return <ServiceSubpage content={content} />;
}
