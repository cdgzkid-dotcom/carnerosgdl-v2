"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  height?: "sm" | "md" | "lg";
}

const heightMap = {
  sm: "min-h-[40vh]",
  md: "min-h-[55vh]",
  lg: "min-h-[70vh]",
};

export function PageHero({ title, subtitle, image, imageAlt, height = "md" }: PageHeroProps) {
  return (
    <section className={`relative flex ${heightMap[height]} items-end overflow-hidden text-white`}>
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      <div className="container relative z-10 mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-5xl font-bold uppercase tracking-tight drop-shadow-xl md:text-7xl lg:text-8xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
