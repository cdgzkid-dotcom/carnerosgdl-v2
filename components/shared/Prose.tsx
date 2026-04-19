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
        "prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight",
        "prose-h2:mb-4 prose-h2:text-3xl prose-h2:text-foreground md:prose-h2:text-4xl",
        "prose-h3:mb-3 prose-h3:text-2xl prose-h3:text-foreground",
        "prose-p:leading-relaxed prose-p:text-muted-foreground",
        "prose-strong:font-semibold prose-strong:text-foreground",
        "prose-a:text-primary hover:prose-a:text-primary/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}
