import { Link } from "react-router-dom";
import {
  Bot,
  MessageSquare,
  Zap,
  Database,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICE_SLUGS } from "./service-slugs";
import type { ServiceSlug } from "./service-schema";

const SLUG_ICONS: Record<ServiceSlug, typeof Bot> = {
  "ai-agents": Bot,
  chatbots: MessageSquare,
  automation: Zap,
  crm: Database,
  ecommerce: ShoppingBag,
};

const CARD_CONTENT = {
  he: {
    sectionTitle: "השירותים המתמחים שלנו",
    sectionSubtitle: "כל תחום בפירוט מלא — עם הסבר, יתרונות וקייסים אמיתיים",
    learnMore: "קראו עוד",
    cards: {
      "ai-agents": {
        title: "סוכני AI לעסקים",
        teaser: "אוטומציה חכמה שעובדת בשבילך 24/7",
      },
      chatbots: {
        title: "צ'אטבוטים חכמים",
        teaser: "מענה אוטומטי בעברית ב-WhatsApp ובאתר",
      },
      automation: {
        title: "אוטומציה עסקית",
        teaser: "חיבור מערכות וחיסכון של שעות עבודה",
      },
      crm: {
        title: "CRM ואוטומציה",
        teaser: "ניהול לקוחות חכם, ללא עוד גיליונות מקבילים",
      },
      ecommerce: {
        title: "אוטומציה לאיקומרס",
        teaser: "הגדילו ROI, החזירו עגלות נטושות",
      },
    },
  },
  fr: {
    sectionTitle: "Nos services spécialisés",
    sectionSubtitle: "Chaque domaine en détail — explications, bénéfices et cas concrets",
    learnMore: "En savoir plus",
    cards: {
      "ai-agents": {
        title: "Agents IA pour entreprises",
        teaser: "Automatisation intelligente qui travaille pour vous 24/7",
      },
      chatbots: {
        title: "Chatbots intelligents",
        teaser: "Réponse automatique sur WhatsApp et votre site",
      },
      automation: {
        title: "Automatisation d'entreprise",
        teaser: "Connexion de systèmes et gain d'heures de travail",
      },
      crm: {
        title: "CRM et automatisation",
        teaser: "Gestion client intelligente, fini les feuilles parallèles",
      },
      ecommerce: {
        title: "Automatisation e-commerce",
        teaser: "Boostez le ROI, récupérez les paniers abandonnés",
      },
    },
  },
  en: {
    sectionTitle: "Our specialized services",
    sectionSubtitle: "Each area in detail — explanations, benefits, and real-world cases",
    learnMore: "Learn more",
    cards: {
      "ai-agents": {
        title: "AI Agents for Business",
        teaser: "Smart automation that works for you 24/7",
      },
      chatbots: {
        title: "Smart Chatbots",
        teaser: "Automated responses on WhatsApp and your website",
      },
      automation: {
        title: "Business Automation",
        teaser: "System integration and hours of work saved",
      },
      crm: {
        title: "CRM & Automation",
        teaser: "Smart customer management, no more parallel spreadsheets",
      },
      ecommerce: {
        title: "E-commerce Automation",
        teaser: "Boost ROI, recover abandoned carts",
      },
    },
  },
} as const;

export function ServiceSubpageGrid() {
  const { language, dir } = useLanguage();
  const content = CARD_CONTENT[language];
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.sectionSubtitle}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {SERVICE_SLUGS.map((slug, index) => {
            const Icon = SLUG_ICONS[slug];
            const card = content.cards[slug];
            return (
              <AnimatedSection key={slug} delay={index * 80}>
                <Link
                  to={`/${language}/services/${slug}`}
                  className="block group h-full"
                >
                  <GlassCard className="h-full p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" aria-hidden />
                    </div>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {card.teaser}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      {content.learnMore}
                      <ArrowIcon className="w-4 h-4" aria-hidden />
                    </span>
                  </GlassCard>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
