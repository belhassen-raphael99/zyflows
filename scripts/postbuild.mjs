import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const sourceHtaccess = path.join(projectRoot, "public", ".htaccess");
const distDir = path.join(projectRoot, "dist");
const distHtaccess = path.join(distDir, ".htaccess");

if (!fs.existsSync(distDir)) {
  console.warn(
    `dist directory not found at ${distDir}. Did you run "npm run build" before postbuild?`,
  );
  process.exit(0);
}

if (!fs.existsSync(sourceHtaccess)) {
  console.warn(
    `No .htaccess found in public/. Skipping copy. Expected at: ${sourceHtaccess}`,
  );
  process.exit(0);
}

try {
  fs.copyFileSync(sourceHtaccess, distHtaccess);
  console.log(
    `.htaccess copied from ${path.relative(
      projectRoot,
      sourceHtaccess,
    )} to ${path.relative(projectRoot, distHtaccess)}`,
  );
} catch (error) {
  console.error("Failed to copy .htaccess to dist:", error);
  process.exit(1);
}

