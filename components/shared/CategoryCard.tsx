"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Category } from "@/lib/categories";

interface CategoryCardProps {
  category: Category;
  index: number;
}

export function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-lg bg-card shadow-lg ring-2 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl hover:ring-primary"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={`Categoría ${category.name} de ${category.program === "americano" ? "football americano" : "flag football"}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay permanente — siempre visible para legibilidad del texto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.60) 50%, rgba(0,0,0,0.20) 100%)",
          }}
        />
        {/* Capa extra que se intensifica en hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15"
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5">
        <span className="inline-block w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground shadow-sm">
          {category.ageRange}
        </span>
        <h3 className="text-shadow-card font-display text-3xl font-bold uppercase tracking-wide text-white md:text-4xl">
          {category.name}
        </h3>
        <p className="text-shadow-card text-sm leading-relaxed text-white/95">
          {category.description}
        </p>
        <a
          href={category.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md transition-all hover:bg-[#1fb057]"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
