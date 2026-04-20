"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACTS, WHATSAPP_GENERAL } from "@/lib/contacts";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/shared/SocialIcons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface Social {
  label: string;
  href: string;
  handle: string;
  Icon: IconComponent;
  color: string;
}

const SOCIALS: Social[] = [
  {
    label: "Facebook",
    href: CONTACTS.social.facebook,
    handle: "@CarnerosFootball",
    Icon: FacebookIcon,
    color: "bg-[#1877F2]",
  },
  {
    label: "Instagram",
    href: CONTACTS.social.instagram,
    handle: "@carnerosfootball",
    Icon: InstagramIcon,
    color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
  {
    label: "TikTok",
    href: CONTACTS.social.tiktok,
    handle: "@carnerosfootball",
    Icon: TikTokIcon,
    color: "bg-black",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Contacto"
          title="Síguenos y contáctanos"
          description="Escríbenos directo por WhatsApp o síguenos en redes sociales para partidos, entrenamientos y novedades del club."
          align="center"
        />

        {/* Botón principal de WhatsApp — el único */}
        <div className="mx-auto max-w-xl">
          <motion.a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02 }}
            className="group flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-5 text-center text-white shadow-lg transition-all hover:shadow-xl"
          >
            <MessageCircle className="h-7 w-7" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
                Escríbenos por WhatsApp
              </span>
              <span className="font-display text-2xl font-bold uppercase tracking-wide">
                +52 33 4104 2448
              </span>
            </div>
          </motion.a>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
          {SOCIALS.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="group flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-md ring-1 ring-border transition-all hover:shadow-xl hover:ring-primary"
            >
              <span
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ${s.color}`}
              >
                <s.Icon className="h-7 w-7" />
              </span>
              <span className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                {s.label}
              </span>
              <span className="mt-1 text-sm text-muted-foreground">{s.handle}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
