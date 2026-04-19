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
      className="group relative overflow-hidden rounded-lg bg-card shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={`Categoría ${category.name} de ${category.program === "americano" ? "football americano" : "flag football"}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {category.ageRange}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
              {category.name}
            </h3>
          </div>
        </div>
        <p className="mt-2 line-clamp-3 text-sm text-white/85">{category.description}</p>
        <a
          href={category.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-all duration-300 hover:bg-[#1fb057] focus-visible:opacity-100 group-hover:opacity-100"
        >
          Contactar por WhatsApp
        </a>
      </div>
    </motion.article>
  );
}
