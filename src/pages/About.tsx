import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Code, 
  Bot, 
  Globe, 
  Quote, 
  Calendar, 
  Mail,
  Check,
  Search,
  Palette,
  Settings,
  ArrowLeft,
  ArrowRight,
  MapPin,
  Languages,
  GraduationCap
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  const pathItems = [
    { icon: Shield, key: 'path1' },
    { icon: Shield, key: 'path2' },
    { icon: Code, key: 'path3' },
    { icon: GraduationCap, key: 'path4' },
    { icon: Bot, key: 'path5' },
  ];

  const deliverItems = [
    t('about.deliver1'),
    t('about.deliver2'),
    t('about.deliver3'),
    t('about.deliver4'),
  ];

  const methodSteps = [
    { num: '01', key: 'method1', icon: Search },
    { num: '02', key: 'method2', icon: Palette },
    { num: '03', key: 'method3', icon: Settings },
    { num: '04', key: 'method4', icon: Zap },
  ];

  const services = [
    { key: 'service1', icon: Zap },
    { key: 'service2', icon: Bot },
    { key: 'service3', icon: Globe },
  ];

  const testimonials = [
    { key: 'testimonial1' },
    { key: 'testimonial2' },
    { key: 'testimonial3' },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-5xl mx-auto text-center">
            <span className="inline-block px-5 py-2 border border-primary/40 text-primary text-sm font-light tracking-wider mb-8">
              {t('about.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight tracking-tight">
              <span className="gradient-text font-normal">{t('about.heroTitle')}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              {t('about.heroSubtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light mb-6 tracking-tight">
              {t('about.introTitle')}
            </h2>
            <p className="text-muted-foreground leading-relaxed font-light text-lg">
              {t('about.introText')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pourquoi Zyflows */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">
              {t('about.whyTitle')}
            </h2>
            <div className={`space-y-6 border-primary/30 ${dir === 'rtl' ? 'border-r-2 pr-6' : 'border-l-2 pl-6'}`}>
              <p className="text-muted-foreground font-light leading-relaxed">
                {t('about.whyProblem')}
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                {t('about.whyBackground')}
              </p>
              <p className="text-foreground font-light leading-relaxed">
                {t('about.whyConclusion')}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">
              {t('about.founderTitle')}
            </h2>
            <div className="w-16 h-px bg-primary/50" />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            {/* Photo Placeholder */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden border border-primary/30">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="text-center">
                      <div className="w-24 h-24 border border-primary/40 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-4xl font-light text-primary">R</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Bio Content */}
            <AnimatedSection delay={100}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-light mb-2 tracking-tight">
                    {t('about.founderName')}
                  </h3>
                  <p className="text-primary font-light text-lg mb-4">
                    {t('about.founderRole')}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      {t('about.founderLocation')}
                    </span>
                    <span className="flex items-center gap-2">
                      <Languages className="w-4 h-4 text-primary" strokeWidth={1.5} />
                      {t('about.founderLang')}
                    </span>
                  </div>
                </div>

                {/* Path */}
                <div>
                  <h4 className="text-sm text-muted-foreground mb-4 font-light">{t('about.pathTitle')}</h4>
                  <div className="space-y-3">
                    {pathItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <item.icon className="w-4 h-4 text-primary mt-1 shrink-0" strokeWidth={1.5} />
                        <p className="text-foreground font-light text-sm leading-relaxed">
                          {t(`about.${item.key}`)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Ce que je livre */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light mb-8 tracking-tight">
              {t('about.deliverTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 stagger-children">
              {deliverItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border border-primary/20 bg-primary/5 hover-tilt">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="text-foreground font-light">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground font-light italic">
              {t('about.positionNote')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Méthode */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6 relative">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">
              {t('about.methodTitle')}
            </h2>
            <p className="text-muted-foreground font-light max-w-2xl">
              {t('about.methodIntro')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
            {methodSteps.map((step, index) => (
              <AnimatedSection key={step.key} delay={index * 100}>
                <div className="h-full bg-background p-6 border border-primary/20 group hover:border-primary/40 transition-all duration-300 hover-tilt">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-light text-primary">{step.num}</span>
                    <step.icon className="w-5 h-5 text-primary icon-spin-hover" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-light mb-2">{t(`about.${step.key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm font-light leading-relaxed">
                    {t(`about.${step.key}.desc`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="max-w-4xl mx-auto">
            <p className="text-foreground font-light text-center">
              {t('about.methodConclusion')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">
              {t('about.servicesTitle')}
            </h2>
            <p className="text-muted-foreground font-light">
              {t('about.servicesIntro')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={service.key} delay={index * 100}>
                <div className="h-full p-6 border border-primary/20 bg-background hover:bg-primary/5 transition-all duration-300 hover-tilt group">
                  <service.icon className="w-8 h-8 text-primary mb-4 icon-spin-hover" strokeWidth={1.5} />
                  <h3 className="text-lg font-light mb-2">{t(`about.${service.key}.title`)}</h3>
                  <p className="text-muted-foreground text-sm font-light mb-4 leading-relaxed">
                    {t(`about.${service.key}.desc`)}
                  </p>
                  <p className="text-primary text-sm font-light">
                    {t(`about.${service.key}.result`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection className="mb-12">
            <h2 className="text-2xl md:text-3xl font-light mb-4 tracking-tight">
              {t('about.testimonialsTitle')}
            </h2>
            <div className="w-16 h-px bg-primary/50" />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto stagger-children">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.key} className="h-full p-6 border border-primary/20 bg-background relative hover-tilt">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" strokeWidth={1} />
                <p className="text-foreground font-light mb-4 leading-relaxed italic">
                  {t(`about.${testimonial.key}.text`)}
                </p>
                <p className="text-muted-foreground text-sm font-light">
                  — {t(`about.${testimonial.key}.author`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">
              {t('about.ctaTitle')}
            </h2>
            <p className="text-muted-foreground mb-4 font-light">
              {t('about.ctaText')}
            </p>
            <p className="text-foreground mb-8 font-light">
              {t('about.ctaProposition')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/contact" className="glow-button inline-flex items-center justify-center gap-3">
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                {t('about.ctaButton1')}
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                {t('about.ctaButton2')}
              </Link>
            </div>
            <p className="text-muted-foreground text-sm font-light italic">
              {t('about.ctaNote')}
            </p>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default About;
