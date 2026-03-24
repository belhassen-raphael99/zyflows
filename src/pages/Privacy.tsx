import Layout from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import { Shield, Lock, Eye, Database, Clock, Bot, Bell, UserCheck, FileText, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { t } = useLanguage();

  const sections = [
    { icon: FileText, title: t('privacy.nav.intro'), id: 'intro' },
    { icon: Database, title: t('privacy.nav.collection'), id: 'collection' },
    { icon: Eye, title: t('privacy.nav.usage'), id: 'usage' },
    { icon: Lock, title: t('privacy.nav.security'), id: 'security' },
    { icon: Shield, title: t('privacy.nav.thirdparty'), id: 'thirdparty' },
    { icon: UserCheck, title: t('privacy.nav.rights'), id: 'rights' },
    { icon: Clock, title: t('privacy.nav.retention'), id: 'retention' },
    { icon: Bot, title: t('privacy.nav.ai'), id: 'ai' },
    { icon: Bell, title: t('privacy.nav.updates'), id: 'updates' },
    { icon: Mail, title: t('privacy.nav.contact'), id: 'contact' },
  ];

  return (
    <Layout>
      <SEO titleKey="meta.privacy.title" descriptionKey="meta.privacy.description" />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('privacy.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('privacy.title')}{' '}
              <span className="gradient-text">{t('privacy.titleGradient')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('privacy.updated')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <GlassCard hover={false} className="p-6">
              <h2 className="text-lg font-semibold mb-4">{t('privacy.nav.title')}</h2>
              <div className="flex flex-wrap gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors text-sm"
                  >
                    <section.icon className="w-4 h-4" />
                    {section.title}
                  </a>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Section 1 - Introduction */}
            <AnimatedSection>
              <GlassCard hover={false} className="p-8" id="intro">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s1.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ב-Zyflows (להלן: "החברה", "אנחנו") אנו מכבדים את פרטיותכם ומחויבים להגן על המידע האישי שלכם. מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע שלכם.
                  </p>
                  <p>
                    מדיניות זו חלה על כל השירותים שאנו מספקים, כולל אתר האינטרנט, שירותי הייעוץ, ופתרונות האוטומציה.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 2 - Information Collection */}
            <AnimatedSection delay={50}>
              <GlassCard hover={false} className="p-8" id="collection">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s2.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p><strong>מידע שאתם מספקים:</strong></p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>פרטי קשר (שם, אימייל, טלפון)</li>
                    <li>פרטי עסק (שם החברה, תחום פעילות)</li>
                    <li>מידע הנמסר בטפסי יצירת קשר</li>
                    <li>תכתובות ופניות שנשלחו אלינו</li>
                  </ul>
                  <p className="mt-4"><strong>מידע שנאסף אוטומטית:</strong></p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>כתובת IP ונתוני גלישה בסיסיים</li>
                    <li>סוג דפדפן ומערכת הפעלה</li>
                    <li>עמודים שנצפו ומשך שהייה</li>
                    <li>מקור ההגעה לאתר</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 3 - Use of Information */}
            <AnimatedSection delay={100}>
              <GlassCard hover={false} className="p-8" id="usage">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s3.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>אנו משתמשים במידע שנאסף למטרות הבאות:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>מתן השירותים המבוקשים ותמיכה</li>
                    <li>תקשורת ומענה לפניות</li>
                    <li>שיפור השירותים והאתר</li>
                    <li>שליחת עדכונים (בהסכמה)</li>
                    <li>עמידה בדרישות חוקיות</li>
                    <li>אנליטיקות ומחקר (באופן אנונימי)</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 4 - Security */}
            <AnimatedSection delay={150}>
              <GlassCard hover={false} className="p-8" id="security">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s4.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>אנו נוקטים באמצעים להגנה על המידע שלכם:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>הצפנת נתונים בתעבורה (SSL/TLS)</li>
                    <li>גישה מוגבלת למידע על בסיס צורך</li>
                    <li>גיבויים מאובטחים</li>
                    <li>מערכות הגנה מפני חדירות</li>
                    <li>הדרכת עובדים בנושא אבטחת מידע</li>
                  </ul>
                  <p className="mt-4 text-sm">
                    יחד עם זאת, אין אפשרות להבטיח אבטחה מוחלטת באינטרנט. אנו עושים כמיטב יכולתנו להגן על המידע שלכם.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 5 - Third Party */}
            <AnimatedSection delay={200}>
              <GlassCard hover={false} className="p-8" id="thirdparty">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s5.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>אנו משתמשים בשירותים חיצוניים לצורך:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>אנליטיקות:</strong> Google Analytics לניתוח תעבורה</li>
                    <li><strong>אחסון:</strong> שירותי ענן מאובטחים</li>
                    <li><strong>אוטומציה:</strong> Make, Zapier לחיבור מערכות</li>
                    <li><strong>AI:</strong> OpenAI, Anthropic לשירותי בינה מלאכותית</li>
                  </ul>
                  <p className="mt-4">
                    שירותים אלו כפופים למדיניות הפרטיות שלהם. אנו בוחרים רק בספקים עם סטנדרטים גבוהים של אבטחה ופרטיות.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 6 - Rights */}
            <AnimatedSection delay={250}>
              <GlassCard hover={false} className="p-8" id="rights">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s6.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>עומדות לכם הזכויות הבאות:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>זכות לעיון:</strong> לראות את המידע שאנו מחזיקים עליכם</li>
                    <li><strong>זכות לתיקון:</strong> לבקש תיקון מידע שגוי</li>
                    <li><strong>זכות למחיקה:</strong> לבקש מחיקת המידע שלכם</li>
                    <li><strong>זכות להתנגדות:</strong> להתנגד לעיבוד מידע מסוים</li>
                    <li><strong>זכות להגבלה:</strong> להגביל את השימוש במידע</li>
                    <li><strong>זכות לניידות:</strong> לקבל את המידע בפורמט נפוץ</li>
                  </ul>
                  <p className="mt-4">
                    לממוש זכויות אלו, פנו אלינו בכתובת:{' '}
                    <a href="mailto:contact.zyflows@gmail.com" className="text-primary hover:underline">contact.zyflows@gmail.com</a>
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 7 - Retention */}
            <AnimatedSection delay={300}>
              <GlassCard hover={false} className="p-8" id="retention">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s7.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>אנו שומרים מידע למשך הזמן הדרוש:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li><strong>פניות:</strong> עד 3 שנים לאחר הפנייה האחרונה</li>
                    <li><strong>לקוחות פעילים:</strong> כל עוד קיימים יחסי עבודה</li>
                    <li><strong>מסמכי חשבונות:</strong> 7 שנים כנדרש בחוק</li>
                    <li><strong>נתוני אנליטיקות:</strong> עד 26 חודשים</li>
                  </ul>
                  <p className="mt-4">
                    לאחר תום התקופה, המידע נמחק או מאונימיזציה.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 8 - AI */}
            <AnimatedSection delay={350}>
              <GlassCard hover={false} className="p-8" id="ai">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s8.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    כחלק משירותינו, אנו מציעים צ'אטבוטים מבוססי AI. חשוב לדעת:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>השיחות עשויות להישמר לצורך שיפור השירות</li>
                    <li>המידע מעובד על ידי ספקי AI חיצוניים</li>
                    <li>אין לשתף מידע רגיש בשיחות עם הבוט</li>
                    <li>השיחות עשויות לשמש לאימון ושיפור המודלים</li>
                  </ul>
                  <p className="mt-4">
                    אנו ממליצים להימנע משיתוף סיסמאות, מספרי כרטיסי אשראי, או מידע רפואי בשיחות עם ה-AI.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 9 - Updates */}
            <AnimatedSection delay={400}>
              <GlassCard hover={false} className="p-8" id="updates">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Bell className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{t('privacy.s9.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    אנו שומרים על הזכות לעדכן מדיניות זו מעת לעת. שינויים מהותיים יפורסמו באתר ובמידת האפשר, תקבלו הודעה בדוא"ל.
                  </p>
                  <p>
                    המשך השימוש בשירותים לאחר פרסום השינויים מהווה הסכמה למדיניות המעודכנת.
                  </p>
                  <p>
                    אנו ממליצים לבדוק דף זה מדי פעם לעדכונים.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 10 - Contact */}
            <AnimatedSection delay={450}>
              <GlassCard hover={false} className="p-8 bg-primary/5" id="contact">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{t('privacy.s10.title')}</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    לשאלות או בקשות בנוגע למדיניות הפרטיות שלנו:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>אימייל:</strong>{' '}
                      <a href="mailto:contact.zyflows@gmail.com" className="text-primary hover:underline">
                        contact.zyflows@gmail.com
                      </a>
                    </p>
                    <p>
                      <strong>נושא מומלץ:</strong> "פנייה בנושא פרטיות"
                    </p>
                  </div>
                  <p className="text-sm mt-4">
                    נשתדל להגיב לכל פנייה תוך 14 ימי עסקים.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
