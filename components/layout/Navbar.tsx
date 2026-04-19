"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

type NavLink = { href: string; label: string };

const LINKS: NavLink[] = [
  { href: "/americano", label: "Americano" },
  { href: "/#catego-americano", label: "Categorías Americano" },
  { href: "/#juvenil", label: "Juvenil Única" },
  { href: "/flag", label: "Flag" },
  { href: "/#catego-flag", label: "Categorías Flag" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/calendario", label: "Calendario" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/80 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="container mx-auto flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-bold uppercase tracking-wider text-foreground"
          aria-label="Carneros FC — inicio"
        >
          <span className="text-primary">Carneros</span>
          <span className="hidden text-sm font-normal text-muted-foreground md:inline">FC</span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/inscripciones"
            className="hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-sm transition-all hover:scale-105 hover:bg-accent/90 sm:inline-flex"
          >
            Inscríbete
          </Link>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background xl:hidden"
          >
            <ul className="container mx-auto flex flex-col gap-1 px-4 py-4 sm:px-6">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground/90 transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/inscripciones"
                  className="block rounded-md bg-accent px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-accent-foreground"
                >
                  Inscríbete
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
