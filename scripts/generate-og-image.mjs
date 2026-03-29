/**
 * generate-og-image.mjs
 * Generates public/og-image.png (1200×630) using Puppeteer + the brand's
 * exact colors, fonts, and logo. Run once locally:
 *   node scripts/generate-og-image.mjs
 */

import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const outputPath = path.join(projectRoot, "public", "og-image.png");

// Encode the logo as base64 so Puppeteer can embed it without a running server
const logoPath = path.join(projectRoot, "public", "logo-light.png");
const logoBase64 = fs.existsSync(logoPath)
  ? `data:image/png;base64,${fs.readFileSync(logoPath).toString("base64")}`
  : null;

const html = /* html */ `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<style>
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;700;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
    font-family: 'Heebo', sans-serif;
    background: hsl(192, 50%, 8%);
    color: hsl(180, 20%, 95%);
    position: relative;
  }

  /* ── Background aurora blobs ─────────────────────── */
  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(90px);
    opacity: 0.35;
  }
  .blob-1 {
    width: 600px; height: 600px;
    background: hsl(175, 65%, 50%);
    top: -200px; left: -150px;
  }
  .blob-2 {
    width: 500px; height: 500px;
    background: hsl(190, 60%, 45%);
    bottom: -180px; right: -100px;
  }
  .blob-3 {
    width: 300px; height: 300px;
    background: hsl(175, 70%, 60%);
    top: 50px; right: 250px;
    opacity: 0.2;
  }

  /* ── Subtle grid overlay ─────────────────────────── */
  .grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(hsl(175 65% 50% / 0.06) 1px, transparent 1px),
      linear-gradient(90deg, hsl(175 65% 50% / 0.06) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  /* ── Main layout ─────────────────────────────────── */
  .layout {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 64px 80px;
    gap: 28px;
  }

  /* ── Logo row ────────────────────────────────────── */
  .logo-row {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .logo-img {
    height: 56px;
    width: auto;
  }
  .brand-name {
    font-size: 42px;
    font-weight: 900;
    color: hsl(180, 20%, 97%);
    letter-spacing: -1px;
  }
  .brand-name span {
    color: hsl(175, 65%, 55%);
  }

  /* ── Divider ─────────────────────────────────────── */
  .divider {
    width: 80px;
    height: 3px;
    border-radius: 99px;
    background: linear-gradient(90deg,
      hsl(175, 65%, 50%),
      hsl(175, 70%, 65%)
    );
  }

  /* ── Main headline ───────────────────────────────── */
  .headline {
    font-size: 58px;
    font-weight: 900;
    line-height: 1.1;
    color: hsl(180, 20%, 97%);
    letter-spacing: -1.5px;
    max-width: 760px;
  }
  .headline .highlight {
    background: linear-gradient(135deg,
      hsl(175, 65%, 55%),
      hsl(175, 75%, 70%)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Tagline ─────────────────────────────────────── */
  .tagline {
    font-size: 24px;
    font-weight: 400;
    color: hsl(180, 15%, 65%);
    max-width: 680px;
    line-height: 1.4;
  }

  /* ── Badge pill ──────────────────────────────────── */
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: hsl(175 65% 50% / 0.12);
    border: 1px solid hsl(175 65% 50% / 0.35);
    border-radius: 99px;
    padding: 10px 24px;
    font-size: 18px;
    font-weight: 600;
    color: hsl(175, 65%, 65%);
    width: fit-content;
    margin-top: 4px;
  }
  .badge-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: hsl(175, 65%, 55%);
    box-shadow: 0 0 8px hsl(175 65% 55% / 0.8);
  }

  /* ── Domain badge (bottom right) ────────────────── */
  .domain {
    position: absolute;
    bottom: 44px;
    right: 80px;
    font-size: 20px;
    font-weight: 600;
    color: hsl(180, 15%, 50%);
    letter-spacing: 0.5px;
  }

  /* ── Decorative right panel ──────────────────────── */
  .right-panel {
    position: absolute;
    right: 72px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  }
  .card-mini {
    width: 220px;
    background: hsl(192 45% 12% / 0.9);
    border: 1px solid hsl(175 50% 50% / 0.3);
    border-radius: 16px;
    padding: 18px 20px;
    backdrop-filter: blur(10px);
  }
  .card-mini .label {
    font-size: 12px;
    color: hsl(180, 15%, 50%);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }
  .card-mini .value {
    font-size: 26px;
    font-weight: 700;
    color: hsl(175, 65%, 60%);
  }
  .card-mini .sub {
    font-size: 13px;
    color: hsl(180, 15%, 60%);
    margin-top: 4px;
  }
</style>
</head>
<body>
  <!-- Aurora background -->
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <div class="grid"></div>

  <!-- Main content -->
  <div class="layout">
    <!-- Logo -->
    <div class="logo-row">
      ${logoBase64 ? `<img src="${logoBase64}" class="logo-img" alt="Zyflows" />` : ""}
      <span class="brand-name">Zy<span>flows</span></span>
    </div>

    <div class="divider"></div>

    <!-- Headline -->
    <div class="headline">
      אוטומציה חכמה<br />
      <span class="highlight">לעסקים בישראל</span>
    </div>

    <!-- Tagline -->
    <div class="tagline">
      AI · n8n · Make · Chatbots · Web Solutions
    </div>

    <!-- Badge -->
    <div class="badge">
      <div class="badge-dot"></div>
      ייעוץ חינם · Free Consultation
    </div>
  </div>

  <!-- Right decorative cards -->
  <div class="right-panel">
    <div class="card-mini">
      <div class="label">Automation</div>
      <div class="value">24/7</div>
      <div class="sub">Systems running</div>
    </div>
    <div class="card-mini">
      <div class="label">Time saved</div>
      <div class="value">–80%</div>
      <div class="sub">Manual tasks</div>
    </div>
    <div class="card-mini">
      <div class="label">Languages</div>
      <div class="value">he · fr · en</div>
      <div class="sub">Multilingual</div>
    </div>
  </div>

  <!-- Domain -->
  <div class="domain">zyflows.com</div>
</body>
</html>`;

async function generate() {
  console.log("🚀 Launching Puppeteer...");
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

  console.log("🎨 Rendering OG image...");
  await page.setContent(html, { waitUntil: "networkidle0" });

  // Wait a bit for Google Fonts to load
  await new Promise((r) => setTimeout(r, 1500));

  await page.screenshot({
    path: outputPath,
    type: "png",
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });

  await browser.close();
  console.log(`✅ OG image saved → ${outputPath}`);
  console.log("   Size: 1200×630px · Ready for og:image and twitter:image");
}

generate().catch((err) => {
  console.error("❌ Failed to generate OG image:", err);
  process.exit(1);
});
