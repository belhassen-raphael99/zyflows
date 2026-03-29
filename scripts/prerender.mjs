import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");
const siteUrl = "https://zyflows.com";

// Languages supported
const languages = ["he", "fr", "en"];

// Pages to prerender (relative to language root)
const pages = [
  "", // for index (e.g. /he)
  "about",
  "services",
  "pricing",
  "contact",
  "terms",
  "accessibility",
  "privacy",
];

// Generate all routes
const routesToPrerender = ["/"]; // Add root
languages.forEach((lang) => {
  pages.forEach((page) => {
    const route = page ? `/${lang}/${page}` : `/${lang}`;
    routesToPrerender.push(route);
  });
});

// ---------------------------------------------------------------------------
// Static meta injection — used when Puppeteer is unavailable (e.g. on Vercel)
// ---------------------------------------------------------------------------

const metaTranslations = {
  he: {
    home: {
      title: "Zyflows | פתרונות אוטומציה ו-AI",
      description:
        "סוכנות לאוטומציה עסקית בינה מלאכותית. אנו בונים מערכות חכמות לייעול תהליכים, חיסכון בזמן והגדלת רווחים.",
      locale: "he_IL",
      dir: "rtl",
    },
    about: {
      title: "אודות Zyflows | המומחים לאוטומציה",
      description:
        "הכירו את Zyflows ואת המייסד רפאל. מומחים באוטומציה עסקית ופיתוח פתרונות דיגיטליים חכמים.",
      locale: "he_IL",
      dir: "rtl",
    },
    services: {
      title: "השירותים שלנו | Zyflows",
      description:
        "אוטומציה, צ'אטבוטים, פתרונות ווב ועוד. גלו איך אנחנו יכולים לשדרג את העסק שלכם.",
      locale: "he_IL",
      dir: "rtl",
    },
    pricing: {
      title: "חבילות מחירים | Zyflows",
      description:
        "חבילות תמיכה ותחזוקה לעסקים. בחרו את החבילה המתאימה לצרכים שלכם.",
      locale: "he_IL",
      dir: "rtl",
    },
    contact: {
      title: "צור קשר | Zyflows",
      description:
        "מוכנים להתקדם? צרו איתנו קשר לייעוץ בנושאי אוטומציה ופיתוח עסקי.",
      locale: "he_IL",
      dir: "rtl",
    },
    terms: {
      title: "תנאי שימוש | Zyflows",
      description:
        "תנאי השימוש של Zyflows. קראו את המדיניות שלנו לפני השימוש בשירותינו.",
      locale: "he_IL",
      dir: "rtl",
    },
    privacy: {
      title: "מדיניות פרטיות | Zyflows",
      description:
        "מדיניות הפרטיות של Zyflows. אנו מחויבים להגנה על המידע האישי שלכם.",
      locale: "he_IL",
      dir: "rtl",
    },
    accessibility: {
      title: "הצהרת נגישות | Zyflows",
      description: "Zyflows מחויבת לנגישות דיגיטלית מלאה עבור כל המשתמשים.",
      locale: "he_IL",
      dir: "rtl",
    },
  },
  fr: {
    home: {
      title: "Zyflows | Solutions d'Automatisation IA",
      description:
        "Solutions d'Automatisation IA & Lead Generation. Nous construisons des systèmes intelligents pour optimiser vos processus.",
      locale: "fr_FR",
      dir: "ltr",
    },
    about: {
      title: "À propos de Zyflows | Experts en Automatisation",
      description:
        "Découvrez Zyflows et son fondateur Raphaël. Experts en automatisation business et solutions digitales.",
      locale: "fr_FR",
      dir: "ltr",
    },
    services: {
      title: "Nos Services | Zyflows",
      description:
        "Automatisation, Chatbots, Solutions Web et plus. Découvrez comment nous pouvons transformer votre entreprise.",
      locale: "fr_FR",
      dir: "ltr",
    },
    pricing: {
      title: "Tarifs & Formules | Zyflows",
      description:
        "Formules de support et maintenance pour entreprises. Choisissez la formule adaptée à vos besoins.",
      locale: "fr_FR",
      dir: "ltr",
    },
    contact: {
      title: "Contact | Zyflows",
      description:
        "Prêt à passer à la vitesse supérieure ? Contactez-nous pour une consultation sur l'automatisation de votre business.",
      locale: "fr_FR",
      dir: "ltr",
    },
    terms: {
      title: "Conditions d'utilisation | Zyflows",
      description:
        "Conditions générales d'utilisation de Zyflows. Lisez notre politique avant d'utiliser nos services.",
      locale: "fr_FR",
      dir: "ltr",
    },
    privacy: {
      title: "Politique de confidentialité | Zyflows",
      description:
        "Politique de confidentialité de Zyflows. Nous nous engageons à protéger vos données personnelles.",
      locale: "fr_FR",
      dir: "ltr",
    },
    accessibility: {
      title: "Déclaration d'accessibilité | Zyflows",
      description:
        "Zyflows s'engage à l'accessibilité numérique complète pour tous les utilisateurs.",
      locale: "fr_FR",
      dir: "ltr",
    },
  },
  en: {
    home: {
      title: "Zyflows | AI Automation Solutions",
      description:
        "AI Automation Solutions & Lead Generation. We build smart systems to streamline processes and boost growth.",
      locale: "en_US",
      dir: "ltr",
    },
    about: {
      title: "About Zyflows | Automation Experts",
      description:
        "Meet Zyflows and founder Raphaël. Experts in business automation and smart digital solutions.",
      locale: "en_US",
      dir: "ltr",
    },
    services: {
      title: "Our Services | Zyflows",
      description:
        "Automation, Chatbots, Web Solutions and more. Discover how we can upgrade your business.",
      locale: "en_US",
      dir: "ltr",
    },
    pricing: {
      title: "Pricing Plans | Zyflows",
      description:
        "Support and maintenance plans for businesses. Choose the plan that fits your needs.",
      locale: "en_US",
      dir: "ltr",
    },
    contact: {
      title: "Contact Us | Zyflows",
      description:
        "Ready to move forward? Contact us for a consultation on business automation and development.",
      locale: "en_US",
      dir: "ltr",
    },
    terms: {
      title: "Terms of Service | Zyflows",
      description:
        "Zyflows terms of service. Please read our policy before using our services.",
      locale: "en_US",
      dir: "ltr",
    },
    privacy: {
      title: "Privacy Policy | Zyflows",
      description:
        "Zyflows privacy policy. We are committed to protecting your personal data.",
      locale: "en_US",
      dir: "ltr",
    },
    accessibility: {
      title: "Accessibility Statement | Zyflows",
      description:
        "Zyflows is committed to full digital accessibility for all users.",
      locale: "en_US",
      dir: "ltr",
    },
  },
};

/**
 * Parse a route into { lang, page }.
 * "/" and "/he" both resolve to { lang: "he", page: "home" }.
 */
function parseRoute(route) {
  if (route === "/") return { lang: "he", page: "home" };
  const parts = route.split("/").filter(Boolean);
  const lang = parts[0] || "he";
  const page = parts[1] || "home";
  return { lang, page };
}

/**
 * Inject route-specific meta tags into an index.html string.
 * Replaces title, description, canonical, OG + Twitter tags, and adds
 * page-specific hreflang links — all without running JavaScript.
 */
function injectMeta(html, route) {
  const { lang, page } = parseRoute(route);
  const meta =
    metaTranslations[lang]?.[page] || metaTranslations["he"]["home"];

  const canonicalUrl = `${siteUrl}${route === "/" ? "" : route}`;
  const pageSlug = page !== "home" ? `/${page}` : "";
  const hreflangHe = `${siteUrl}/he${pageSlug}`;
  const hreflangFr = `${siteUrl}/fr${pageSlug}`;
  const hreflangEn = `${siteUrl}/en${pageSlug}`;

  let result = html;

  // Fix <html lang dir>
  result = result.replace(
    /<html[^>]*>/,
    `<html lang="${lang}" dir="${meta.dir}">`
  );

  // Primary meta tags
  result = result.replace(
    /<title>[^<]*<\/title>/,
    `<title>${meta.title}</title>`
  );
  result = result.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Canonical
  result = result.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Open Graph
  result = result.replace(
    /<meta property="og:url"[^>]*>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  result = result.replace(
    /<meta property="og:title"[^>]*>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  result = result.replace(
    /<meta property="og:description"[^>]*>/,
    `<meta property="og:description" content="${meta.description}" />`
  );
  result = result.replace(
    /<meta property="og:locale"[^>]*>/,
    `<meta property="og:locale" content="${meta.locale}" />`
  );

  // Twitter Card
  result = result.replace(
    /<meta name="twitter:title"[^>]*>/,
    `<meta name="twitter:title" content="${meta.title}" />`
  );
  result = result.replace(
    /<meta name="twitter:description"[^>]*>/,
    `<meta name="twitter:description" content="${meta.description}" />`
  );

  // Page-specific hreflang links (injected before </head>)
  const hreflangTags = [
    `  <link rel="alternate" hreflang="he" href="${hreflangHe}" />`,
    `  <link rel="alternate" hreflang="fr" href="${hreflangFr}" />`,
    `  <link rel="alternate" hreflang="en" href="${hreflangEn}" />`,
    `  <link rel="alternate" hreflang="x-default" href="${hreflangHe}" />`,
  ].join("\n");

  result = result.replace("</head>", `${hreflangTags}\n</head>`);

  return result;
}

// ---------------------------------------------------------------------------

async function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function startPreviewServer() {
  console.log("Starting Vite preview server...");

  const preview = spawn(
    "npm",
    ["run", "preview", "--", "--port", "4173", "--host", "127.0.0.1"],
    {
      cwd: projectRoot,
      stdio: "inherit",
      shell: process.platform === "win32",
    }
  );

  // Attente active que le serveur soit prêt
  const maxAttempts = 30;
  const url = "http://127.0.0.1:4173/";

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const res = await fetch(url);
      if (res.ok) {
        console.log("Vite preview server is ready.");
        return preview;
      }
    } catch {
      // Ignorer les erreurs de connexion pendant la phase de démarrage
    }
    console.log(`Waiting for preview server... (${attempt}/${maxAttempts})`);
    await waitFor(1000);
  }

  preview.kill();
  throw new Error("Vite preview server did not become ready in time.");
}

function routeToFilename(route) {
  if (route === "/") {
    return "index.html";
  }

  const clean = route.replace(/^\/|\/$/g, "");
  // e.g. "he/about" -> "he/about.html"
  return `${clean}.html`;
}

async function prerender() {
  if (!fs.existsSync(distDir)) {
    throw new Error(
      `dist directory not found at ${distDir}. Run "npm run build" before prerendering.`
    );
  }

  const preview = await startPreviewServer();
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: "new",
    });
  } catch (error) {
    // Fallback pour d'anciennes versions de Puppeteer
    console.warn(
      "Failed to launch Puppeteer with headless:'new', retrying with default options..."
    );
    try {
      browser = await puppeteer.launch();
    } catch (fallbackError) {
      // Puppeteer non disponible (ex: Vercel) — fallback: injecter les meta tags statiquement
      console.warn(
        "Puppeteer unavailable, falling back to static meta injection for all routes."
      );
      preview.kill();
      const indexHtml = fs.readFileSync(
        path.join(distDir, "index.html"),
        "utf-8"
      );
      for (const route of routesToPrerender) {
        if (route === "/") continue;
        const filename = routeToFilename(route);
        const outputPath = path.join(distDir, filename);
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        // Inject route-specific meta tags instead of blindly copying index.html
        const injectedHtml = injectMeta(indexHtml, route);
        fs.writeFileSync(outputPath, injectedHtml, "utf-8");
        console.log(
          `Injected meta for ${route} → ${path.relative(projectRoot, outputPath)}`
        );
      }
      console.log("Static meta injection completed (Puppeteer fallback).");
      return;
    }
  }

  const page = await browser.newPage();
  const baseUrl = "http://127.0.0.1:4173";

  console.log("Starting prerendering for routes:", routesToPrerender);

  for (const route of routesToPrerender) {
    const url = `${baseUrl}${route}`;
    console.log(`Prerendering ${url}...`);

    try {
      await page.goto(url, {
        waitUntil: "networkidle0",
      });

      // Attendre que le contenu principal soit monté
      try {
        await page.waitForSelector("#root, main", { timeout: 15000 });
      } catch {
        console.warn(
          `Selector #root or main not found for route "${route}" within timeout.`
        );
      }

      const html = await page.content();
      const filename = routeToFilename(route);
      const outputPath = path.join(distDir, filename);
      const outputDir = path.dirname(outputPath);

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      fs.writeFileSync(outputPath, html, "utf-8");
      console.log(
        `Saved prerendered HTML to ${path.relative(projectRoot, outputPath)}`
      );
    } catch (error) {
      console.error(`Error while prerendering route "${route}":`, error);
    }
  }

  await browser.close();
  preview.kill();

  console.log("Prerendering completed.");
}

prerender().catch((error) => {
  console.error("Prerender script failed:", error);
  process.exit(1);
});
