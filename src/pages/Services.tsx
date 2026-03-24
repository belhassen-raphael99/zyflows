import { Link } from 'react-router-dom';
import { Search, Zap, Bot, Globe, ArrowLeft, ArrowRight, CheckCircle, Workflow, Database, MessageSquare, BarChart3 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Services = () => {
  const { t, dir, language } = useLanguage();
  const langPrefix = `/${language}`;
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const mainServices = [
    {
      icon: Search,
      title: t('servicesPage.diagnosis.title'),
      description: t('servicesPage.diagnosis.desc'),
      features: [
        t('servicesPage.diagnosis.f1'),
        t('servicesPage.diagnosis.f2'),
        t('servicesPage.diagnosis.f3'),
        t('servicesPage.diagnosis.f4'),
      ],
    },
    {
      icon: Zap,
      title: t('servicesPage.automation.title'),
      description: t('servicesPage.automation.desc'),
      features: [
        t('servicesPage.automation.f1'),
        t('servicesPage.automation.f2'),
        t('servicesPage.automation.f3'),
        t('servicesPage.automation.f4'),
      ],
    },
    {
      icon: Bot,
      title: t('servicesPage.chatbots.title'),
      description: t('servicesPage.chatbots.desc'),
      features: [
        t('servicesPage.chatbots.f1'),
        t('servicesPage.chatbots.f2'),
        t('servicesPage.chatbots.f3'),
        t('servicesPage.chatbots.f4'),
      ],
    },
    {
      icon: Globe,
      title: t('servicesPage.web.title'),
      description: t('servicesPage.web.desc'),
      features: [
        t('servicesPage.web.f1'),
        t('servicesPage.web.f2'),
        t('servicesPage.web.f3'),
        t('servicesPage.web.f4'),
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Workflow,
      title: t('servicesPage.integrations'),
      description: t('servicesPage.integrationsDesc'),
    },
    {
      icon: Database,
      title: t('servicesPage.dataManagement'),
      description: t('servicesPage.dataManagementDesc'),
    },
    {
      icon: MessageSquare,
      title: t('servicesPage.communicationAutomation'),
      description: t('servicesPage.communicationAutomationDesc'),
    },
    {
      icon: BarChart3,
      title: t('servicesPage.reportsInsights'),
      description: t('servicesPage.reportsInsightsDesc'),
    },
  ];

  return (
    <Layout>
      <SEO titleKey="meta.services.title" descriptionKey="meta.services.description" />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('servicesPage.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('servicesPage.heroTitle1')}{' '}
              <span className="gradient-text">{t('servicesPage.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('servicesPage.heroSubtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-5xl mx-auto">
            {mainServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <GlassCard className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-7 h-7 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        to={`${langPrefix}/contact`}
                        className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                      >
                        {t('servicesPage.getQuote')}
                        <ArrowIcon className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="bg-secondary/30 rounded-xl p-6">
                      <h4 className="font-semibold mb-4">{t('servicesPage.includes')}</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('servicesPage.additionalTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('servicesPage.additionalSubtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 100}>
                <GlassCard className="text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <GlassCard className="max-w-4xl mx-auto text-center p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t('servicesPage.ctaTitle')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('servicesPage.ctaSubtitle')}
              </p>
              <Link to={`${langPrefix}/contact`} className="glow-button inline-flex items-center gap-2">
                {t('servicesPage.ctaButton')}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
