import Layout from '@/components/layout/Layout';
import AnimatedSection from '@/components/ui/AnimatedSection';
import GlassCard from '@/components/ui/GlassCard';

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              מסמכים משפטיים
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              תנאים{' '}
              <span className="gradient-text">והגבלות</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              עדכון אחרון: ינואר 2025
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Section 1 */}
            <AnimatedSection>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">1. כללי</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    ברוכים הבאים ל-Zyflows (להלן: "החברה", "אנחנו"). תנאי שימוש אלו מסדירים את היחסים בינך (להלן: "הלקוח", "אתה") לבין החברה בכל הנוגע לשירותים המוצעים על ידינו.
                  </p>
                  <p>
                    השימוש בשירותינו מהווה הסכמה לתנאים אלו. אם אינך מסכים לתנאים, נא להימנע משימוש בשירותים.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 2 */}
            <AnimatedSection delay={50}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">2. תיאור השירותים</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>החברה מספקת שירותי אוטומציה ובינה מלאכותית לעסקים, הכוללים:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>אבחון עסקי - מיפוי תהליכים וזיהוי הזדמנויות לאוטומציה</li>
                    <li>בניית צ'אטבוטים חכמים - סוכני AI מותאמים אישית</li>
                    <li>אוטומציה של תהליכים - חיבור מערכות וייעול זרימות עבודה</li>
                    <li>פתרונות ווב מתקדמים - אתרים, דפי נחיתה ואפליקציות</li>
                    <li>תמיכה ותחזוקה שוטפת</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 3 */}
            <AnimatedSection delay={100}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">3. תהליך העבודה</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>העבודה מול הלקוח מתבצעת בשלבים הבאים:</p>
                  <ol className="list-decimal list-inside space-y-3 mr-4">
                    <li><strong>פגישת היכרות:</strong> הבנת הצרכים והאתגרים של הלקוח</li>
                    <li><strong>אבחון ומיפוי:</strong> ניתוח מעמיק של התהליכים הקיימים</li>
                    <li><strong>הצעת פתרון:</strong> תכנון מערכת מותאמת אישית</li>
                    <li><strong>אישור ותשלום:</strong> הסכמה על ההצעה ותנאי התשלום</li>
                    <li><strong>פיתוח ובנייה:</strong> יצירת הפתרון בהתאם למפרט</li>
                    <li><strong>בדיקות והטמעה:</strong> וידוא תקינות והדרכת הלקוח</li>
                    <li><strong>השקה ותמיכה:</strong> העלאה לאוויר ומעקב</li>
                  </ol>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 4 */}
            <AnimatedSection delay={150}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">4. תנאי תשלום</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>המחירים המצוינים הם בשקלים חדשים ואינם כוללים מע"מ</li>
                    <li>התשלום מתבצע בהתאם לסוג הפרויקט: מקדמה, אבני דרך, או תשלום חודשי</li>
                    <li>לפרויקטים גדולים: 50% מקדמה, 50% בהשלמה</li>
                    <li>לשירותי ריטיינר: תשלום חודשי מראש</li>
                    <li>אמצעי תשלום: העברה בנקאית, כרטיס אשראי, PayPal</li>
                    <li>איחור בתשלום מעל 14 יום עלול לגרור השעיית שירותים</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 5 */}
            <AnimatedSection delay={200}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">5. מדיניות החזרים וביטולים</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>ביטול לפני תחילת העבודה: החזר מלא פחות 10% דמי טיפול</li>
                    <li>ביטול לאחר תחילת העבודה: חיוב יחסי לעבודה שבוצעה</li>
                    <li>שירותי ריטיינר: הודעה מראש של 30 יום לביטול</li>
                    <li>אין החזרים על שירותים שהושלמו ואושרו</li>
                    <li>במקרה של חוסר שביעות רצון, נפעל לתיקון לפני שיקול החזר</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 6 */}
            <AnimatedSection delay={250}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">6. אחריות ותמיכה</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>30 יום אחריות על תיקון באגים לאחר השקה</li>
                    <li>תמיכה טכנית בשעות העבודה: א'-ה' 09:00-18:00</li>
                    <li>זמן תגובה מקסימלי: 24 שעות עסקים</li>
                    <li>תמיכה מורחבת זמינה במסגרת חבילות ריטיינר</li>
                    <li>האחריות אינה כוללת נזקים שנגרמו משימוש לא נכון</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 7 */}
            <AnimatedSection delay={300}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">7. שירותי ריטיינר</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>שירותי הריטיינר כוללים:</p>
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-right p-3 text-foreground">חבילה</th>
                          <th className="text-right p-3 text-foreground">שעות חודשיות</th>
                          <th className="text-right p-3 text-foreground">זמן תגובה</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-3">בסיסי</td>
                          <td className="p-3">5 שעות</td>
                          <td className="p-3">48 שעות</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3">מקצועי</td>
                          <td className="p-3">15 שעות</td>
                          <td className="p-3">24 שעות</td>
                        </tr>
                        <tr>
                          <td className="p-3">פרימיום</td>
                          <td className="p-3">40 שעות</td>
                          <td className="p-3">4 שעות</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4">שעות שלא נוצלו אינן עוברות לחודש הבא.</p>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 8 */}
            <AnimatedSection delay={350}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">8. מערכות וכלים של צד שלישי</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>במהלך העבודה אנו משתמשים בכלים ושירותים חיצוניים. הלקוח מאשר כי:</p>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>עלויות מנויים לכלים חיצוניים (Make, Zapier, OpenAI וכו') הן על חשבון הלקוח</li>
                    <li>החברה אינה אחראית לשינויים במדיניות או מחירי ספקים חיצוניים</li>
                    <li>נספק המלצות לכלים אך הבחירה הסופית היא של הלקוח</li>
                    <li>הלקוח אחראי לניהול החשבונות שלו בפלטפורמות אלו</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 9 */}
            <AnimatedSection delay={400}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">9. פרטיות וסודיות</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>אנו מתחייבים לשמור על סודיות מלאה של מידע עסקי</li>
                    <li>לא נשתף מידע עם צדדים שלישיים ללא אישור</li>
                    <li>המידע ישמש אך ורק לצורך מתן השירותים</li>
                    <li>לפרטים מלאים, ראו את <a href="/privacy" className="text-primary hover:underline">מדיניות הפרטיות</a></li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 10 */}
            <AnimatedSection delay={450}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">10. קניין רוחני</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>עם השלמת התשלום המלא, זכויות הקוד המותאם עוברות ללקוח</li>
                    <li>החברה שומרת על זכויות בתשתיות ורכיבים גנריים שפותחו</li>
                    <li>הלקוח מעניק לחברה רשות להציג את הפרויקט בתיק עבודות</li>
                    <li>שימוש בספריות קוד פתוח כפוף לרישיונות המקוריים שלהן</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 11 */}
            <AnimatedSection delay={500}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">11. הצגת תוצאות</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>אנו שואפים לתוצאות מיטביות אך אין ערבות לתוצאות עסקיות ספציפיות</li>
                    <li>הצלחת הפתרון תלויה גם בגורמים שאינם בשליטתנו</li>
                    <li>נספק דוחות ביצועים בהתאם לסוג השירות</li>
                    <li>שיפורים ואופטימיזציה זמינים במסגרת שירותי הריטיינר</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 12 */}
            <AnimatedSection delay={550}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">12. שינויים בשירות</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>שינויים בהיקף הפרויקט יתומחרו בנפרד</li>
                    <li>בקשות לשינויים יתועדו בכתב ויאושרו לפני ביצוע</li>
                    <li>שינויים עשויים להשפיע על לוחות הזמנים</li>
                    <li>אנו שומרים על זכות לעדכן תנאים אלו בהודעה מראש</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 13 */}
            <AnimatedSection delay={600}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">13. סיום התקשרות</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>כל צד רשאי לסיים את ההתקשרות בהודעה בכתב</li>
                    <li>במקרה של סיום, הלקוח ישלם על עבודה שבוצעה</li>
                    <li>נספק גישה לכל הקבצים והחומרים ששייכים ללקוח</li>
                    <li>התחייבויות סודיות נשארות בתוקף גם לאחר סיום</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Section 14 */}
            <AnimatedSection delay={650}>
              <GlassCard hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">14. סמכות שיפוט ודין חל</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>תנאים אלו כפופים לחוקי מדינת ישראל</li>
                    <li>סמכות השיפוט הבלעדית נתונה לבתי המשפט בתל אביב-יפו</li>
                    <li>במקרה של מחלוקת, נעשה מאמץ ליישוב בדרכי נועם תחילה</li>
                  </ul>
                </div>
              </GlassCard>
            </AnimatedSection>

            {/* Contact */}
            <AnimatedSection delay={700}>
              <GlassCard hover={false} className="p-8 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4">שאלות?</h2>
                <p className="text-muted-foreground mb-4">
                  לשאלות בנוגע לתנאים אלו, ניתן לפנות אלינו:
                </p>
                <a 
                  href="mailto:contact.zyflows@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  contact.zyflows@gmail.com
                </a>
              </GlassCard>
            </AnimatedSection>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
