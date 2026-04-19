"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { HERO_IMAGES } from "@/lib/categories";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden text-white">
      <Image
        src={HERO_IMAGES.home}
        alt="Jugadores de Carneros Football Club en acción"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative z-10 mx-auto flex flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="mb-6">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-primary shadow-xl md:h-24 md:w-24">
            <span className="font-display text-3xl font-bold uppercase tracking-wider text-white md:text-4xl">
              CFC
            </span>
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-bold uppercase tracking-wider text-white drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Carneros
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-5 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg"
        >
          Carneros Football Club es una institución dedicada al desarrollo integral de jugadores a
          través del football americano y flag. Fomenta los valores de disciplina, trabajo en equipo
          y superación, formando atletas comprometidos y líderes dentro y fuera del campo.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#americano"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
          >
            Football Americano
          </a>
          <a
            href="#flag"
            className="rounded-md border-2 border-white bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-primary"
          >
            Flag Football
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-widest text-white/70"
      >
        <span className="block">Desliza para conocer más</span>
      </motion.div>
    </section>
  );
}
