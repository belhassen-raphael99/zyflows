import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Bot, MessageSquare, Zap, Database, ShoppingBag, Layers } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ITEMS = {
  he: {
    overview: "כל השירותים",
    "ai-agents": { icon: Bot, label: "סוכני AI", desc: "אוטומציה חכמה 24/7" },
    chatbots: { icon: MessageSquare, label: "צ'אטבוטים", desc: "מענה אוטומטי בעברית" },
    automation: { icon: Zap, label: "אוטומציה עסקית", desc: "חיבור מערכות" },
    crm: { icon: Database, label: "CRM ואוטומציה", desc: "ניהול לקוחות חכם" },
    ecommerce: { icon: ShoppingBag, label: "אוטומציה לאיקומרס", desc: "החזרת עגלות נטושות" },
  },
  fr: {
    overview: "Tous les services",
    "ai-agents": { icon: Bot, label: "Agents IA", desc: "Automatisation 24/7" },
    chatbots: { icon: MessageSquare, label: "Chatbots", desc: "Réponses auto WhatsApp + web" },
    automation: { icon: Zap, label: "Automatisation", desc: "Connexion de systèmes" },
    crm: { icon: Database, label: "CRM", desc: "Gestion client intelligente" },
    ecommerce: { icon: ShoppingBag, label: "E-commerce", desc: "Paniers abandonnés récupérés" },
  },
  en: {
    overview: "All services",
    "ai-agents": { icon: Bot, label: "AI Agents", desc: "Smart 24/7 automation" },
    chatbots: { icon: MessageSquare, label: "Chatbots", desc: "Auto-replies on WhatsApp + web" },
    automation: { icon: Zap, label: "Business automation", desc: "System integration" },
    crm: { icon: Database, label: "CRM", desc: "Smart customer management" },
    ecommerce: { icon: ShoppingBag, label: "E-commerce", desc: "Recover abandoned carts" },
  },
} as const;

const SLUGS = ["ai-agents", "chatbots", "automation", "crm", "ecommerce"] as const;

interface NavbarServicesDropdownProps {
  isActive: boolean;
}

export function NavbarServicesDropdown({ isActive }: NavbarServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, dir } = useLanguage();
  const location = useLocation();
  const items = ITEMS[language];
  const isActivePath = isActive || location.pathname.startsWith(`/${language}/services`);

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded ${
            isActivePath ? "text-primary" : "text-muted-foreground"
          }`}
          aria-label={t("nav.services")}
        >
          {t("nav.services")}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            aria-hidden
          />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          dir={dir}
          align="center"
          sideOffset={12}
          className="z-[60] w-80 rounded-xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-2xl p-2 animate-in fade-in-0 zoom-in-95"
        >
          <DropdownMenu.Item asChild>
            <Link
              to={`/${language}/services`}
              className="flex items-center gap-3 rounded-lg p-3 outline-none hover:bg-primary/10 focus:bg-primary/10 transition-colors"
            >
              <Layers className="w-5 h-5 text-primary flex-shrink-0" aria-hidden />
              <span className="font-semibold">{items.overview}</span>
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-px bg-border/60 my-2" />

          {SLUGS.map((slug) => {
            const item = items[slug];
            const Icon = item.icon;
            return (
              <DropdownMenu.Item key={slug} asChild>
                <Link
                  to={`/${language}/services/${slug}`}
                  className="flex items-start gap-3 rounded-lg p-3 outline-none hover:bg-primary/10 focus:bg-primary/10 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden />
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="font-medium leading-tight">{item.label}</span>
                    <span className="text-xs text-muted-foreground leading-tight">
                      {item.desc}
                    </span>
                  </div>
                </Link>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
