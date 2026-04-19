/**
 * Download all Framer CDN images referenced in the site to /public/images.
 *
 * Usage: pnpm download-images
 *
 * After download, update lib/categories.ts, lib/gallery.ts, and app/nosotros
 * to point to /images/<filename> instead of the framerusercontent.com URLs.
 */
import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, dirname } from "node:path";

const OUTPUT_DIR = join(process.cwd(), "public", "images");

const IMAGES: { url: string; filename: string }[] = [
  // Heroes
  {
    url: "https://framerusercontent.com/images/IUMpbahx9dATACfIA33msJvntA.jpg",
    filename: "hero-home.jpg",
  },
  {
    url: "https://framerusercontent.com/images/rbhpi5Pjp3xn1l3zr4dvdMnUPas.jpg",
    filename: "hero-nosotros.jpg",
  },
  {
    url: "https://framerusercontent.com/images/vpTaN1KIRzjJVVEd2GcQgOCaeg.jpg",
    filename: "hero-americano.jpg",
  },
  {
    url: "https://framerusercontent.com/images/bFiwhXGg6MaDrlaoJIqaHJLZRw.jpg",
    filename: "hero-flag.jpg",
  },
  {
    url: "https://framerusercontent.com/images/NtNC8xJTS2cDCIgTTEJEOy5EQ.jpg",
    filename: "juvenil-unica.jpg",
  },
  // Americano categories
  {
    url: "https://framerusercontent.com/images/eCH6Fb9F2cZoijGXSh6o1EpnWA.jpg",
    filename: "cat-rabbits.jpg",
  },
  {
    url: "https://framerusercontent.com/images/Vl35KgIUvUcfTuQ26kpWxDBjktQ.jpg",
    filename: "cat-hornets.jpg",
  },
  {
    url: "https://framerusercontent.com/images/e1tnxhfu6O9z1CvkUhXnnw3NYA.jpg",
    filename: "cat-irons.jpg",
  },
  {
    url: "https://framerusercontent.com/images/GFqsCLyfeTsyezeIv5023z4rF0.jpg",
    filename: "cat-falcons.jpg",
  },
  {
    url: "https://framerusercontent.com/images/iKXwt3amH8cOGj1q4H7cc6KduHM.jpg",
    filename: "cat-tauros.jpg",
  },
  {
    url: "https://framerusercontent.com/images/dFaUMgfNVW2kBV3lrS4ucCmUCc.jpg",
    filename: "cat-ponys.jpg",
  },
  // Flag categories
  {
    url: "https://framerusercontent.com/images/Ko2ZBqpvcdv0a2XcmDdJnWaJQYk.jpeg",
    filename: "cat-u6.jpeg",
  },
  {
    url: "https://framerusercontent.com/images/qnmBpoO6jzaaAVrgYd2S2XOGGc.jpeg",
    filename: "cat-u8.jpeg",
  },
  {
    url: "https://framerusercontent.com/images/bzG7NQCR0wRc7BexfhvWi0ZGvY.jpeg",
    filename: "cat-u10.jpeg",
  },
  {
    url: "https://framerusercontent.com/images/ASN0WvUYkpoN34EAXmTUuDbWRxw.jpeg",
    filename: "cat-u12.jpeg",
  },
  {
    url: "https://framerusercontent.com/images/GC8NQsit8qcg1ahAD77cm1lEEw.jpeg",
    filename: "cat-u14.jpeg",
  },
  {
    url: "https://framerusercontent.com/images/UU4orLYc3LOWH1EJJSKS9gd1sCk.jpg",
    filename: "cat-u15-juvenil.jpg",
  },
];

async function ensureDir(dir: string) {
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
}

async function download(url: string, filename: string) {
  const target = join(OUTPUT_DIR, filename);
  await ensureDir(dirname(target));
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${url} → HTTP ${res.status}`);
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(target, buffer);
  const kb = (buffer.length / 1024).toFixed(1);
  console.log(`  ✔ ${filename}  (${kb} KB)`);
}

async function main() {
  console.log(`Descargando ${IMAGES.length} imágenes a /public/images\n`);
  await ensureDir(OUTPUT_DIR);

  let ok = 0;
  let fail = 0;
  for (const img of IMAGES) {
    try {
      await download(img.url, img.filename);
      ok++;
    } catch (err) {
      console.error(`  ✗ ${img.filename}: ${(err as Error).message}`);
      fail++;
    }
  }

  console.log(`\nListo. ${ok} descargadas, ${fail} fallidas.`);
  console.log("\nSiguiente paso: actualiza lib/categories.ts y lib/gallery.ts");
  console.log("para apuntar a /images/<filename> en lugar de framerusercontent.com.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
