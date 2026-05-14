import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Bot, MessageSquare, Zap, Database, ShoppingBag, Layers } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string; isDropdown?: boolean }[];
}

const SERVICES_SUBMENU = {
  he: {
    overview: "כל השירותים",
    items: [
      { slug: "ai-agents", icon: Bot, label: "סוכני AI" },
      { slug: "chatbots", icon: MessageSquare, label: "צ'אטבוטים" },
      { slug: "automation", icon: Zap, label: "אוטומציה עסקית" },
      { slug: "crm", icon: Database, label: "CRM ואוטומציה" },
      { slug: "ecommerce", icon: ShoppingBag, label: "אוטומציה לאיקומרס" },
    ],
  },
  fr: {
    overview: "Tous les services",
    items: [
      { slug: "ai-agents", icon: Bot, label: "Agents IA" },
      { slug: "chatbots", icon: MessageSquare, label: "Chatbots" },
      { slug: "automation", icon: Zap, label: "Automatisation" },
      { slug: "crm", icon: Database, label: "CRM" },
      { slug: "ecommerce", icon: ShoppingBag, label: "E-commerce" },
    ],
  },
  en: {
    overview: "All services",
    items: [
      { slug: "ai-agents", icon: Bot, label: "AI Agents" },
      { slug: "chatbots", icon: MessageSquare, label: "Chatbots" },
      { slug: "automation", icon: Zap, label: "Business automation" },
      { slug: "crm", icon: Database, label: "CRM" },
      { slug: "ecommerce", icon: ShoppingBag, label: "E-commerce" },
    ],
  },
} as const;

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  const location = useLocation();
  const { t, language } = useLanguage();
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const submenu = SERVICES_SUBMENU[language];

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-card border-l border-border animate-slide-in-right">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold">Z</span>
              </div>
              <span className="text-xl font-bold gradient-text">Zyflows</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={t('closeMenu')}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 p-6 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {links.map((link) => {
                if (link.isDropdown) {
                  const isActive = location.pathname.startsWith(`/${language}/services`);
                  return (
                    <div key={link.href} className="flex flex-col gap-1">
                      <button
                        onClick={() => setServicesExpanded((v) => !v)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                          isActive ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-secondary'
                        }`}
                        aria-expanded={servicesExpanded}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${servicesExpanded ? 'rotate-180' : ''}`}
                          aria-hidden
                        />
                      </button>
                      {servicesExpanded && (
                        <div className="flex flex-col gap-1 ms-2 ps-2 border-s border-border/60">
                          <Link
                            to={`/${language}/services`}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-base transition-colors ${
                              location.pathname === `/${language}/services`
                                ? 'bg-primary/10 text-primary'
                                : 'text-muted-foreground hover:bg-secondary'
                            }`}
                          >
                            <Layers className="w-4 h-4 flex-shrink-0" aria-hidden />
                            <span className="font-semibold">{submenu.overview}</span>
                          </Link>
                          {submenu.items.map((item) => {
                            const Icon = item.icon;
                            const itemHref = `/${language}/services/${item.slug}`;
                            return (
                              <Link
                                key={item.slug}
                                to={itemHref}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-base transition-colors ${
                                  location.pathname === itemHref
                                    ? 'bg-primary/10 text-primary'
                                    : 'text-muted-foreground hover:bg-secondary'
                                }`}
                              >
                                <Icon className="w-4 h-4 flex-shrink-0" aria-hidden />
                                {item.label}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                      location.pathname === link.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          <div className="p-6 border-t border-border">
            <Link
              to={links.find(l => l.href.endsWith('/contact'))?.href || '/he/contact'}
              className="glow-button w-full text-center block"
            >
              {links.find(l => l.href.endsWith('/contact'))?.label || 'Contact'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
