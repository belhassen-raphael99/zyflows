import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { CONTACT_INFO } from '@/lib/contact';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      value: null,
      phones: true,
      link: null,
    },
    {
      icon: MapPin,
      title: t('contact.offices'),
      value: t('contact.location'),
      link: null,
    },
    {
      icon: Clock,
      title: t('contact.hours'),
      value: t('contact.hoursValue'),
      link: null,
    },
  ];

  return (
    <Layout>
      <SEO titleKey="meta.contact.title" descriptionKey="meta.contact.description" />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('nav.contact')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.heroTitle')}{' '}
              <span className="gradient-text">{t('contact.heroTitle2')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('contact.heroSubtitle')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection>
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {t('contact.ways')}
                </h2>
                
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item) => (
                    <GlassCard key={item.title} className="p-4" hover={!!item.link}>
                      {item.link ? (
                        <a href={item.link} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.title}</p>
                            <p className="font-medium">{item.value}</p>
                          </div>
                        </a>
                      ) : item.phones ? (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.title}</p>
                            <div className="flex flex-col gap-1 font-medium">
                              <span dir="ltr" className="text-start">🇮🇱 {t('contact.phoneIsrael')}: {CONTACT_INFO.phones.israel}</span>
                              <span dir="ltr" className="text-start">🇫🇷 {t('contact.phoneFrance')}: {CONTACT_INFO.phones.france}</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{item.title}</p>
                            <p className="font-medium">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </GlassCard>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">{t('contact.whatsappTitle')}</h3>
                  <p className="text-muted-foreground mb-4">
                    {t('contact.whatsappQuick')}
                  </p>
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
                    {t('contact.whatsappSend')}
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={100}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  {t('contact.leaveDetails')}
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.name')} *</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">{t('contact.form.phone')} *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                        placeholder={t('contact.form.phonePlaceholder')}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.email')} *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder={t('contact.form.emailPlaceholder')}
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.businessName')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder={t('contact.form.businessPlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.subject')}</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none"
                    >
                      <option value="">{t('contact.form.selectTopic')}</option>
                      <option value="audit">{t('contact.form.topicDiagnosis')}</option>
                      <option value="automation">{t('contact.form.topicAutomation')}</option>
                      <option value="chatbot">{t('contact.form.topicChatbot')}</option>
                      <option value="web">{t('contact.form.topicWeb')}</option>
                      <option value="support">{t('contact.form.topicSupport')}</option>
                      <option value="other">{t('contact.form.topicOther')}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">{t('contact.form.message')}</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button type="submit" className="glow-button w-full flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    {t('contact.form.sendRequest')}
                  </button>

                  <p className="text-sm text-muted-foreground text-center">
                    {t('contact.form.responseTime')}
                  </p>
                </form>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
