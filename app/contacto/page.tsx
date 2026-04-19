import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/shared/SocialIcons";
import { CONTACTS } from "@/lib/contacts";
import { HERO_IMAGES } from "@/lib/categories";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Carneros Football Club Guadalajara. WhatsApp por programa, redes sociales y ubicación en Zapopan, Jalisco.",
};

const WHATSAPP_CONTACTS = [
  {
    title: "Football Americano — Categorías",
    subtitle: "Rabbits, Hornets, Irons, Falcons, Tauros, Ponys",
    href: CONTACTS.whatsapp.americano,
    phone: "+52 33 1604 1217",
  },
  {
    title: "Juvenil Única",
    subtitle: "15 a 18 años",
    href: CONTACTS.whatsapp.juvenil,
    phone: "+52 33 1419 4601",
  },
  {
    title: "Flag Football — Todas las categorías",
    subtitle: "U6 a U15 Juvenil",
    href: CONTACTS.whatsapp.flag,
    phone: "+52 55 6189 8846",
  },
  {
    title: "Atención general",
    subtitle: "Administración y consultas",
    href: CONTACTS.whatsapp.general,
    phone: "+52 33 4104 2448",
  },
];

const SOCIALS: {
  Icon: IconComponent;
  label: string;
  href: string;
  handle: string;
}[] = [
  {
    Icon: FacebookIcon,
    label: "Facebook",
    href: CONTACTS.social.facebook,
    handle: "@CarnerosFootball",
  },
  {
    Icon: InstagramIcon,
    label: "Instagram",
    href: CONTACTS.social.instagram,
    handle: "@carnerosfootball",
  },
  {
    Icon: TikTokIcon,
    label: "TikTok",
    href: CONTACTS.social.tiktok,
    handle: "@carnerosfootball",
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contacto"
        subtitle="Elige el canal que mejor te convenga: WhatsApp por programa, redes sociales o nuestra ubicación."
        image={HERO_IMAGES.nosotros}
        imageAlt="Carneros Football Club — contacto"
        height="sm"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="WhatsApp"
            title="Escríbenos directo"
            description="Elige el programa de tu interés. Te respondemos personalmente durante horas hábiles."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {WHATSAPP_CONTACTS.map((c) => (
              <a
                key={c.phone}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl bg-card p-6 shadow-md ring-1 ring-border transition-all hover:scale-[1.01] hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{c.subtitle}</p>
                  <p className="mt-2 text-sm font-medium text-primary group-hover:underline">
                    {c.phone}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Redes sociales"
            title="Síguenos para estar al día"
            description="Partidos, entrenamientos, convocatorias y momentos memorables del club."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-md ring-1 ring-border transition-all hover:scale-[1.02] hover:shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <s.Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                    {s.label}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Ubicación"
            title="Dónde entrenamos"
            description="Nuestras instalaciones se encuentran en la zona metropolitana de Guadalajara."
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-xl bg-card p-6 shadow-md ring-1 ring-border lg:col-span-1">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
                    Carneros FC
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Zona Metropolitana de Guadalajara
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {CONTACTS.location.municipality}, {CONTACTS.location.state}
                  </p>
                  <p className="mt-3 text-xs italic text-muted-foreground">
                    Para dirección exacta de entrenamientos, contáctanos por WhatsApp.
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl shadow-md ring-1 ring-border lg:col-span-2">
              <iframe
                title="Ubicación Carneros Football Club en Guadalajara"
                src="https://www.google.com/maps?q=Zapopan+Jalisco&output=embed"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
