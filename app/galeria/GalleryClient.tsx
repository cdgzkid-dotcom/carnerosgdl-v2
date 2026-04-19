"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { cn } from "@/lib/utils";
import { GALLERY_IMAGES, type GalleryCategory, type GalleryImage } from "@/lib/gallery";

const FILTERS: { value: GalleryCategory; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "americano", label: "Americano" },
  { value: "flag", label: "Flag" },
  { value: "eventos", label: "Eventos" },
];

export function GalleryClient() {
  const [filter, setFilter] = React.useState<GalleryCategory>("todos");
  const [index, setIndex] = React.useState<number>(-1);

  const filtered: GalleryImage[] = React.useMemo(
    () =>
      filter === "todos" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter),
    [filter],
  );

  const slides = filtered.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
              filter === f.value
                ? "bg-primary text-primary-foreground shadow"
                : "bg-muted text-foreground/70 hover:bg-muted/70",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.03 }}
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/30" />
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={Math.max(0, index)}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </div>
  );
}
