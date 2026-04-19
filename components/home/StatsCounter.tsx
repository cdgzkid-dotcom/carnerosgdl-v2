"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { ACHIEVEMENTS } from "@/lib/categories";

export function StatsCounter() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary/30 py-20 text-secondary-foreground"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.15),transparent_60%)]"
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            39 años de trayectoria
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight md:text-5xl lg:text-6xl">
            Nuestros Logros
          </h2>
          <p className="mt-4 text-base text-secondary-foreground/70">
            Los números que nos respaldan como uno de los clubes más reconocidos del football
            juvenil en Guadalajara.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {ACHIEVEMENTS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center rounded-lg border border-accent/20 bg-secondary-foreground/5 p-6 text-center backdrop-blur-sm transition-all hover:border-accent/60 hover:bg-secondary-foreground/10"
            >
              <span className="font-display text-5xl font-bold text-accent md:text-6xl">
                {inView ? <CountUp end={stat.value} duration={2} separator="," /> : 0}
              </span>
              <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-secondary-foreground/80 md:text-sm">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
