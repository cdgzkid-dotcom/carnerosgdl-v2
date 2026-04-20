"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Prose({ children, className, delay = 0 }: ProseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "prose prose-neutral max-w-none dark:prose-invert",
        // Headings con tipografía de marca + barra azul lateral
        "prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight",
        "prose-h2:relative prose-h2:mb-5 prose-h2:pl-5 prose-h2:text-3xl md:prose-h2:text-4xl",
        "prose-h2:before:absolute prose-h2:before:left-0 prose-h2:before:top-1 prose-h2:before:h-[calc(100%-0.5rem)] prose-h2:before:w-1 prose-h2:before:rounded prose-h2:before:bg-primary",
        "prose-h3:relative prose-h3:mb-3 prose-h3:pl-4 prose-h3:text-2xl",
        "prose-h3:before:absolute prose-h3:before:left-0 prose-h3:before:top-1 prose-h3:before:h-[calc(100%-0.5rem)] prose-h3:before:w-[3px] prose-h3:before:rounded prose-h3:before:bg-primary",
        "prose-p:leading-relaxed",
        "prose-a:text-primary hover:prose-a:text-primary/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
