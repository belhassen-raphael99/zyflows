import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawn } from "child_process";
import puppeteer from "puppeteer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const distDir = path.join(projectRoot, "dist");

// Liste des routes importantes à pré-rendre pour le SEO.
// Détecté à partir de `src/App.tsx` et des fichiers dans `src/pages`.
// Tu peux ajouter / supprimer des entrées manuellement si besoin.
const routesToPrerender = [
  "/",
  "/about",
  "/services",
  "/pricing",
  "/contact",
  "/terms",
  "/accessibility",
  "/privacy",
];

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
    },
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
  return `${clean}.html`;
}

async function prerender() {
  if (!fs.existsSync(distDir)) {
    throw new Error(
      `dist directory not found at ${distDir}. Run "npm run build" before prerendering.`,
    );
  }

  const preview = await startPreviewServer();
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: "new",
    });
  } catch (error) {
    // Fallback pour d’anciennes versions de Puppeteer
    console.warn(
      "Failed to launch Puppeteer with headless:'new', retrying with default options...",
    );
    browser = await puppeteer.launch();
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
          `Selector #root or main not found for route "${route}" within timeout.`,
        );
      }

      const html = await page.content();
      const filename = routeToFilename(route);
      const outputPath = path.join(distDir, filename);

      fs.writeFileSync(outputPath, html, "utf-8");
      console.log(`Saved prerendered HTML to ${path.relative(projectRoot, outputPath)}`);
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

