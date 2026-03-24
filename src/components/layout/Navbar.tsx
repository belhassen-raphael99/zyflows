import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();
  const isRTL = language === 'he';

  const navLinks = [
    { href: `/${language}`, label: t('nav.home') },
    { href: `/${language}/about`, label: t('nav.about') },
    { href: `/${language}/services`, label: t('nav.services') },
    { href: `/${language}/pricing`, label: t('nav.pricing') },
    { href: `/${language}/contact`, label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
            : 'bg-transparent'
        }`}
        dir="ltr"
      >
        <nav className="container mx-auto px-6 py-3">
          <div className="flex flex-row items-center justify-between">
            {/* Logo - Fixed width column */}
            <div className="w-[200px] shrink-0">
              <Link to={`/${language}`}>
                <AnimatedLogo size="sm" showName />
              </Link>
            </div>

            {/* Desktop Navigation - Flexible center column */}
            <div className={`hidden md:flex flex-1 items-center justify-center gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                    location.pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions - Fixed width column */}
            <div className="hidden md:flex items-center justify-end gap-4 w-[250px] shrink-0">
              <LanguageSwitcher />
              <Link
                to={`/${language}/contact`}
                className="glow-button text-sm px-5 py-2 whitespace-nowrap"
              >
                {t('nav.cta')}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden shrink-0">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
};

export default Navbar;
