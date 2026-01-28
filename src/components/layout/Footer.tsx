import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_INFO } from '@/lib/contact';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const Footer = () => {
  const [isCreatorDialogOpen, setIsCreatorDialogOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { href: '/', label: t('nav.home') },
      { href: '/about', label: t('nav.about') },
      { href: '/services', label: t('nav.services') },
    ],
    services: [
      { href: '/services', label: t('nav.services') },
      { href: '/pricing', label: t('nav.pricing') },
    ],
    support: [
      { href: '/contact', label: t('nav.contact') },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-card/80 to-card/90 border-t border-primary/20">
      {/* Subtle glow effect at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-6 inline-block">
              <AnimatedLogo size="md" showName />
            </Link>
            <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-primary/20 hover:border-primary/40 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links - Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-foreground/70 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3 text-foreground/70 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="flex flex-col gap-1">
                  <span dir="ltr" className="text-start">🇮🇱 {CONTACT_INFO.phones.israel}</span>
                  <span dir="ltr" className="text-start">🇫🇷 {CONTACT_INFO.phones.france}</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-foreground/70 text-sm">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span>{t('contact.location')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-primary/15 flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Zyflows. {t('footer.rights')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/terms" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                {t('footer.terms')}
              </Link>
              <Link to="/privacy" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                {t('footer.privacy')}
              </Link>
              <Link to="/accessibility" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                {t('footer.accessibility')}
              </Link>
            </div>
          </div>
          
          {/* Credit Développeur */}
          <button
            onClick={() => setIsCreatorDialogOpen(true)}
            className="text-foreground/50 hover:text-primary text-xs transition-colors"
          >
            {t('footer.createdBy')} <span className="font-medium hover:underline">Raphael Belhassen</span>
          </button>
        </div>
      </div>

      {/* Creator Dialog */}
      <Dialog open={isCreatorDialogOpen} onOpenChange={setIsCreatorDialogOpen}>
        <DialogContent className="bg-card/95 backdrop-blur-xl border-primary/20 max-w-md">
          <DialogHeader className="text-center">
            {/* Avatar avec glow animé */}
            <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-primary/10 
                            flex items-center justify-center border-2 border-primary/40
                            shadow-[0_0_30px_hsl(175,65%,50%,0.3)]">
              <span className="text-2xl font-bold text-primary">RB</span>
            </div>
            
            <DialogTitle className="text-xl font-light">Raphael Belhassen</DialogTitle>
            <DialogDescription className="text-primary">{t('creator.title')}</DialogDescription>
          </DialogHeader>
          
          {/* Bio */}
          <p className="text-center text-muted-foreground text-sm leading-relaxed">
            {t('creator.bio')}
          </p>
          
          {/* Contact Buttons - Grille 2x2 */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <a 
              href="mailto:contact.zyflows@gmail.com" 
              className="flex items-center justify-center gap-2 p-3 border border-primary/20 
                         bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg text-sm"
            >
              <Mail className="w-4 h-4 text-primary" />
              {t('creator.email')}
            </a>
            <a 
              href="https://wa.me/972584229255" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 border border-primary/20 
                         bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg text-sm"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              {t('creator.whatsapp')}
            </a>
            <a 
              href="tel:+972584229255" 
              className="flex items-center justify-center gap-2 p-3 border border-primary/20 
                         bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg text-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              {t('creator.phone')}
            </a>
            <a 
              href="https://linkedin.com/in/raphael-belhassen-85a152283" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 border border-primary/20 
                         bg-primary/5 hover:bg-primary/10 transition-colors rounded-lg text-sm"
            >
              <Linkedin className="w-4 h-4 text-primary" />
              {t('creator.linkedin')}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
