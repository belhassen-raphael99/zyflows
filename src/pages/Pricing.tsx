import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t, dir, language } = useLanguage();
  const langPrefix = `/${language}`;
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const pricingPlans = [
    {
      name: 'Essential',
      description: t('pricingPage.essential.desc'),
      features: [
        { text: t('pricing.feature.support2h'), included: true },
        { text: t('pricing.feature.basicMaintenance'), included: true },
        { text: t('pricing.feature.monthlyReport'), included: true },
        { text: t('pricing.feature.response48h'), included: true },
        { text: t('pricingPage.feature.businessDays'), included: true },
        { text: t('pricing.feature.monthlyOptimization'), included: false },
        { text: t('pricing.feature.dedicatedManager'), included: false },
        { text: t('pricing.feature.customDev'), included: false },
      ],
      popular: false,
    },
    {
      name: 'Business',
      description: t('pricingPage.business.desc'),
      features: [
        { text: t('pricing.feature.support6h'), included: true },
        { text: t('pricing.feature.advancedMaintenance'), included: true },
        { text: t('pricing.feature.weeklyReports'), included: true },
        { text: t('pricing.feature.response24h'), included: true },
        { text: t('pricingPage.feature.support6days'), included: true },
        { text: t('pricing.feature.monthlyOptimization'), included: true },
        { text: t('pricing.feature.premiumTools'), included: true },
        { text: t('pricing.feature.customDev'), included: false },
      ],
      popular: true,
    },
    {
      name: 'VIP',
      description: t('pricingPage.vip.desc'),
      features: [
        { text: t('pricing.feature.support15h'), included: true },
        { text: t('pricing.feature.fullMaintenance'), included: true },
        { text: t('pricing.feature.dailyReports'), included: true },
        { text: t('pricing.feature.response4h'), included: true },
        { text: t('pricingPage.feature.support6days'), included: true },
        { text: t('pricingPage.feature.weeklyOptimization'), included: true },
        { text: t('pricing.feature.dedicatedManager'), included: true },
        { text: t('pricingPage.feature.unlimitedDev'), included: true },
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: t('pricingPage.faq1.q'),
      answer: t('pricingPage.faq1.a'),
    },
    {
      question: t('pricingPage.faq2.q'),
      answer: t('pricingPage.faq2.a'),
    },
    {
      question: t('pricingPage.faq3.q'),
      answer: t('pricingPage.faq3.a'),
    },
    {
      question: t('pricingPage.faq4.q'),
      answer: t('pricingPage.faq4.a'),
    },
  ];

  return (
    <Layout>
      <SEO titleKey="meta.pricing.title" descriptionKey="meta.pricing.description" />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('pricingPage.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('pricingPage.heroTitle1')}{' '}
              <span className="gradient-text">{t('pricingPage.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('pricingPage.heroSubtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={plan.name} delay={index * 100}>
                <GlassCard
                  className={`h-full relative flex flex-col ${
                    plan.popular ? 'border-primary/50 scale-105 z-10' : ''
                  }`}
                  hover={true}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 right-1/2 transform translate-x-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-semibold whitespace-nowrap">
                      {t('pricing.mostPopular')}
                    </div>
                  )}

                  <div className="text-center mb-8 pt-4">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        <CheckCircle
                          className={`w-5 h-5 flex-shrink-0 ${
                            feature.included ? 'text-primary' : 'text-muted-foreground/30'
                          }`}
                        />
                        <span className={feature.included ? '' : 'text-muted-foreground/50'}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`${langPrefix}/contact`}
                    className={`block w-full text-center py-4 rounded-xl font-semibold transition-all ${
                      plan.popular ? 'glow-button' : 'glow-button-outline'
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

      {/* Custom Quote */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <GlassCard className="max-w-4xl mx-auto text-center p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t('pricingPage.customTitle')}
              </h2>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                {t('pricingPage.customSubtitle')}
              </p>
              <Link to={`${langPrefix}/contact`} className="glow-button inline-flex items-center gap-2">
                {t('pricingPage.customButton')}
                <ArrowIcon className="w-4 h-4" />
              </Link>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('pricingPage.faqTitle')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('pricingPage.faqSubtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={faq.question} delay={index * 100}>
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </GlassCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
