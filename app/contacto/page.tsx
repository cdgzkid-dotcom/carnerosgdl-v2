import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { MessageCircle, MapPin, Navigation } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/shared/SocialIcons";
import { CONTACTS, WHATSAPP_GENERAL, TRAINING_LOCATION } from "@/lib/contacts";
import { HERO_IMAGES } from "@/lib/categories";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Carneros Football Club Guadalajara. WhatsApp general, redes sociales y ubicación en Zapopan, Jalisco.",
};

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
        subtitle="Escríbenos por WhatsApp o síguenos en redes sociales — te respondemos directo."
        image={HERO_IMAGES.nosotros}
        imageAlt="Organización Carneros — contacto"
        height="sm"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="WhatsApp"
            title="Escríbenos directo"
            description="Te respondemos personalmente durante horas hábiles."
            align="center"
          />
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mx-auto flex max-w-xl items-center justify-center gap-4 rounded-2xl bg-[#25D366] px-8 py-6 text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
          >
            <MessageCircle className="h-10 w-10" />
            <div className="flex flex-col items-start">
              <span className="text-xs font-semibold uppercase tracking-widest text-white/85">
                Atención general
              </span>
              <span className="font-display text-3xl font-bold uppercase tracking-wide">
                +52 33 4104 2448
              </span>
            </div>
          </a>
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
                className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-md ring-1 ring-border transition-all hover:scale-[1.02] hover:shadow-lg hover:ring-primary"
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
            <div className="flex flex-col gap-4 rounded-xl bg-card p-6 shadow-md ring-1 ring-border lg:col-span-1">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="font-display text-lg font-semibold uppercase tracking-wide">
                    {TRAINING_LOCATION.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{TRAINING_LOCATION.address}</p>
                  <p className="text-xs text-muted-foreground">
                    {TRAINING_LOCATION.coords.lat.toFixed(4)},{" "}
                    {TRAINING_LOCATION.coords.lng.toFixed(4)}
                  </p>
                </div>
              </div>
              <a
                href={TRAINING_LOCATION.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                <Navigation className="h-4 w-4" />
                Cómo llegar
              </a>
              <p className="text-xs italic text-muted-foreground">
                Al abrir desde tu celular, Google Maps te ofrecerá navegación directa.
              </p>
            </div>
            <div className="aspect-video overflow-hidden rounded-xl shadow-md ring-1 ring-border lg:col-span-2">
              <iframe
                title="Ubicación Organización Carneros en Zapopan, Jalisco"
                src={`https://www.google.com/maps?q=${TRAINING_LOCATION.coords.lat},${TRAINING_LOCATION.coords.lng}&output=embed`}
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
