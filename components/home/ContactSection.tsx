"use client";

import type { ComponentType, SVGProps } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACTS } from "@/lib/contacts";
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
  {
    label: "WhatsApp",
    href: CONTACTS.whatsapp.general,
    handle: "+52 33 4104 2448",
    Icon: MessageCircle,
    color: "bg-[#25D366]",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Redes sociales"
          title="Síguenos y contáctanos"
          description="Mantente al día con entrenamientos, partidos y novedades del club. Estamos en las redes donde estás tú."
          align="center"
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
              className="group flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-md ring-1 ring-border transition-all hover:shadow-xl"
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
