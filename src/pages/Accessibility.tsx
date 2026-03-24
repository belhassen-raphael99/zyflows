import Layout from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';
import { Check, Eye, Keyboard, MousePointer, Type, Palette } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Accessibility = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Type,
      title: t('accessibility.feature1.title'),
      items: [
        'שינוי גודל גופן (הגדלה/הקטנה)',
        'שינוי סוג גופן לגופן קריא יותר',
        'הגדלת רווחים בין שורות ואותיות',
        'הדגשת כותרות וקישורים',
      ],
    },
    {
      icon: Palette,
      title: t('accessibility.feature2.title'),
      items: [
        'מצב ניגודיות גבוהה',
        'היפוך צבעים',
        'מצב מונוכרום (שחור-לבן)',
        'התאמת רוויה',
      ],
    },
    {
      icon: Eye,
      title: t('accessibility.feature3.title'),
      items: [
        'הדגשת קישורים',
        'סמן מוגדל',
        'מדריך קריאה (סרגל)',
        'עצירת אנימציות',
      ],
    },
    {
      icon: Keyboard,
      title: t('accessibility.feature4.title'),
      items: [
        'ניווט מלא באמצעות מקלדת',
        'קיצורי מקשים',
        'דילוג לתוכן ראשי',
        'תפריט נגישות מהיר',
      ],
    },
    {
      icon: MousePointer,
      title: t('accessibility.feature5.title'),
      items: [
        'תמיכה מלאה ב-NVDA',
        'תמיכה מלאה ב-JAWS',
        'תמיכה ב-VoiceOver',
        'תגיות ARIA מתאימות',
      ],
    },
  ];

  return (
    <Layout>
      <SEO titleKey="meta.accessibility.title" descriptionKey="meta.accessibility.description" />
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t('accessibility.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t('accessibility.title')}{' '}
              <span className="gradient-text">{t('accessibility.titleGradient')}</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('accessibility.updated')}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Introduction */}
            <AnimatedSection>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('accessibility.s1.title')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Zyflows מחויבת להנגיש את האתר והשירותים שלה לכלל האוכלוסייה, כולל אנשים עם מוגבלויות. אנו מאמינים שלכל אדם מגיעה גישה שווה למידע ולשירותים.
                  </p>
                  <p>
                    אנו פועלים באופן מתמיד לשפר את חוויית המשתמש עבור כולם ומיישמים את הנחיות הנגישות הרלוונטיות.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Standards */}
            <AnimatedSection delay={50}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('accessibility.s2.title')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>אתר זה נבנה בהתאם לתקנים הבאים:</p>
                  <ul className="space-y-3 mr-4">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>תקן ישראלי 5568</strong> - תקנות שוויון זכויות לאנשים עם מוגבלות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>WCAG 2.1 רמה AA</strong> - הנחיות נגישות לתוכן אינטרנט</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span><strong>WAI-ARIA</strong> - יישומי אינטרנט עשירים נגישים</span>
                    </li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Features Grid */}
            <AnimatedSection delay={100}>
              <h2 className="text-2xl font-bold mb-6 text-center">{t('accessibility.s3.title')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <GlassCard key={index} hover={false} className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                    </div>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
              </div>
            </AnimatedSection>

            {/* How to Use */}
            <AnimatedSection delay={150}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('accessibility.s4.title')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    לחצו על כפתור הנגישות (♿) הממוקם בצד המסך כדי לפתוח את תפריט הנגישות.
                    משם תוכלו לבחור את ההתאמות המתאימות לכם.
                  </p>
                  <div className="bg-primary/5 rounded-xl p-4 mt-4">
                    <h4 className="font-semibold mb-2">קיצורי מקלדת:</h4>
                    <ul className="space-y-1 text-sm">
                      <li><kbd className="px-2 py-1 bg-secondary rounded text-xs">Alt + 1</kbd> - דף הבית</li>
                      <li><kbd className="px-2 py-1 bg-secondary rounded text-xs">Alt + 2</kbd> - דילוג לתוכן ראשי</li>
                      <li><kbd className="px-2 py-1 bg-secondary rounded text-xs">Alt + 3</kbd> - פתיחת תפריט נגישות</li>
                      <li><kbd className="px-2 py-1 bg-secondary rounded text-xs">Tab</kbd> - ניווט בין אלמנטים</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Limitations */}
            <AnimatedSection delay={200}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('accessibility.s5.title')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    למרות מאמצינו הרבים, ייתכנו חלקים באתר שעדיין אינם נגישים במלואם:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>חלק מהתכנים המוטמעים מצד שלישי (סרטוני YouTube, מפות Google)</li>
                    <li>קבצי PDF ישנים שטרם הונגשו</li>
                    <li>תמונות היסטוריות ללא טקסט חלופי מלא</li>
                  </ul>
                  <p className="mt-4">
                    אנו עובדים באופן שוטף על תיקון בעיות אלו ושיפור הנגישות.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Browsers */}
            <AnimatedSection delay={250}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('accessibility.s6.title')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>האתר והנגישות נבדקו ונתמכים בדפדפנים הבאים:</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    {['Chrome', 'Firefox', 'Safari', 'Edge'].map((browser) => (
                      <div key={browser} className="text-center p-4 bg-secondary/50 rounded-lg">
                        <span className="font-medium">{browser}</span>
                        <p className="text-xs text-muted-foreground mt-1">גרסה אחרונה</p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection delay={300}>
              <GlassCard hover={false} className="p-8 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4">{t('accessibility.s7.title')}</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    אם נתקלתם בבעיה כלשהי בנגישות האתר, אנא צרו איתנו קשר ונטפל בכך בהקדם:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>אימייל:</strong>{' '}
                      <a href="mailto:contact.zyflows@gmail.com" className="text-primary hover:underline">
                        contact.zyflows@gmail.com
                      </a>
                    </p>
                    <p>
                      <strong>נושא מומלץ:</strong> "בעיית נגישות באתר"
                    </p>
                  </div>
                  <p className="text-sm mt-4">
                    אנא פרטו את הבעיה, העמוד בו נתקלתם בה, והדפדפן בו אתם משתמשים. נשתדל להגיב תוך 5 ימי עסקים.
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

export default Accessibility;
