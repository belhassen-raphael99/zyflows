import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search, Bot, Globe, Zap, CheckCircle, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import HeroVideo from '@/components/ui/HeroVideo';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_INFO } from '@/lib/contact';

const Index = () => {
  const { t, language, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const services = [
    {
      icon: Search,
      title: t('services.diagnosis.title'),
      description: t('services.diagnosis.desc'),
    },
    {
      icon: Zap,
      title: t('services.automation.title'),
      description: t('services.automation.desc'),
    },
    {
      icon: Bot,
      title: t('services.chatbots.title'),
      description: t('services.chatbots.desc'),
    },
    {
      icon: Globe,
      title: t('services.web.title'),
      description: t('services.web.desc'),
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      step: '02',
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      step: '03',
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      description: t('pricing.essential.desc'),
      features: [
        t('pricing.feature.support2h'),
        t('pricing.feature.basicMaintenance'),
        t('pricing.feature.monthlyReport'),
        t('pricing.feature.response48h'),
      ],
      popular: false,
    },
    {
      name: 'Business',
      description: t('pricing.business.desc'),
      features: [
        t('pricing.feature.support6h'),
        t('pricing.feature.advancedMaintenance'),
        t('pricing.feature.weeklyReports'),
        t('pricing.feature.response24h'),
        t('pricing.feature.monthlyOptimization'),
        t('pricing.feature.premiumTools'),
      ],
      popular: true,
    },
    {
      name: 'VIP',
      description: t('pricing.vip.desc'),
      features: [
        t('pricing.feature.support15h'),
        t('pricing.feature.fullMaintenance'),
        t('pricing.feature.dailyReports'),
        t('pricing.feature.response4h'),
        t('pricing.feature.dedicatedManager'),
        t('pricing.feature.customDev'),
        t('pricing.feature.personalTraining'),
      ],
      popular: false,
    },
  ];

  return (
    <Layout>
      <SEO titleKey="meta.home.title" descriptionKey="meta.home.description" />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-6 py-20">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('hero.badge')}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t('hero.title1')}{' '}
              <span className="text-shimmer">{t('hero.title2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="glow-button animate-pulse-glow">
                {t('hero.cta1')}
              </Link>
              <Link to="/services" className="glow-button-outline flex items-center justify-center gap-2">
                {t('hero.cta2')}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Hero Video */}
          <AnimatedSection delay={200} className="mt-8 md:mt-12">
            <div className="relative max-w-5xl mx-auto">
              <HeroVideo />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <GlassCard className="h-full group" tilt>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 animate-float">
                      <service.icon className="w-6 h-6 text-primary icon-spin-hover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Link
                        to="/services"
                        className="link-underline inline-flex items-center gap-2 text-primary hover:gap-3 transition-all text-sm font-medium"
                      >
                        {t('services.learnMore')}
                        <ArrowIcon className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('process.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated Connection Line */}
            <div className="absolute top-1/2 right-0 left-0 h-1 hidden md:block -translate-y-1/2 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-${dir === 'rtl' ? 'l' : 'r'} from-primary via-accent to-primary/30 animate-line-draw origin-${dir === 'rtl' ? 'right' : 'left'}`}
                style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {processSteps.map((step, index) => (
                <AnimatedSection key={step.step} delay={index * 150}>
                  <div className="text-center relative">
                    <div className="w-20 h-20 rounded-full bg-background border-2 border-primary mx-auto mb-6 flex items-center justify-center relative z-10" style={{ boxShadow: '0 0 30px hsl(var(--primary) / 0.4)' }}>
                      <span className="text-2xl font-bold gradient-text">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 100}>
                <GlassCard
                  className={`h-full relative ${plan.popular ? 'border-primary/50' : ''
                    }`}
                  hover={true}
                  tilt={true}
                  glow={plan.popular}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-medium">
                      {t('pricing.recommended')}
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8 stagger-children">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-xl font-medium transition-all ${plan.popular
                      ? 'glow-button'
                      : 'glow-button-outline'
                      }`}
                  >
                    {t('pricing.contactUs')}
                  </Link>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {t('contact.title')}
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t('contact.subtitle')}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-muted-foreground text-sm">{t('contact.whatsappDesc')}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.whatsapp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-primary-foreground transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('contact.whatsappBtn')}
                </a>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={100}>
              <GlassCard hover={false} className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={t('contact.form.phonePlaceholder')}
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.email')}</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder={t('contact.form.emailPlaceholder')}
                      dir="ltr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>
                  <button type="submit" className="glow-button w-full">
                    {t('contact.form.submit')}
                  </button>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
