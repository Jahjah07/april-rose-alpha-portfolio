import { existsSync, readdirSync } from "fs";
import path from "path";

const appLogosDirectory = path.join(process.cwd(), "public", "applogos");
const supportedImageExtensions = new Set([
  ".avif",
  ".gif",
  ".jpeg",
  ".jpg",
  ".png",
  ".svg",
  ".webp",
]);

function toTitleCase(fileName: string) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function getAppLogos() {
  if (!existsSync(appLogosDirectory)) {
    return [];
  }

  return readdirSync(appLogosDirectory, { withFileTypes: true })
    .filter((file) => {
      return file.isFile() && supportedImageExtensions.has(path.extname(file.name).toLowerCase());
    })
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((file) => ({
      src: `/applogos/${encodeURIComponent(file.name)}`,
      alt: `${toTitleCase(file.name)} logo`,
    }));
}
