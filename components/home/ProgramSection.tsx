"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

interface ProgramSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  whatsapp: string;
  whatsappLabel?: string;
  reverse?: boolean;
  children?: React.ReactNode;
}

export function ProgramSection({
  id,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  whatsapp,
  whatsappLabel = "Contáctanos por WhatsApp",
  reverse = false,
  children,
}: ProgramSectionProps) {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
            reverse && "lg:[&>:first-child]:order-2",
          )}
        >
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {eyebrow && (
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
            {children}
            <div className="mt-8">
              <WhatsAppButton href={whatsapp} label={whatsappLabel} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
