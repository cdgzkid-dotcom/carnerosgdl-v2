import Link from "next/link";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/shared/SocialIcons";
import { CONTACTS } from "@/lib/contacts";

const QUICK_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/americano", label: "Football Americano" },
  { href: "/flag", label: "Flag Football" },
  { href: "/calendario", label: "Calendario" },
  { href: "/noticias", label: "Noticias" },
  { href: "/galeria", label: "Galería" },
  { href: "/inscripciones", label: "Inscripciones" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-secondary text-secondary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-3xl font-bold uppercase tracking-wider">
            <span className="text-primary">Carneros</span> Football Club
          </p>
          <p className="mt-3 max-w-md text-sm text-secondary-foreground/70">
            {CONTACTS.organization.tagline}. Formando atletas y líderes desde{" "}
            {CONTACTS.organization.founded} en Guadalajara.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={CONTACTS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Carneros"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACTS.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Carneros"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={CONTACTS.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok Carneros"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wider">
            Mapa del sitio
          </h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm lg:grid-cols-1">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-secondary-foreground/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold uppercase tracking-wider">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-secondary-foreground/70">
            <li>
              <a
                href={CONTACTS.whatsapp.general}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp general
              </a>
            </li>
            <li>
              <a
                href={CONTACTS.whatsapp.americano}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp Americano
              </a>
            </li>
            <li>
              <a
                href={CONTACTS.whatsapp.flag}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp Flag
              </a>
            </li>
            <li>
              <a
                href={CONTACTS.whatsapp.juvenil}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                WhatsApp Juvenil Única
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10 py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs text-secondary-foreground/60 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {year} {CONTACTS.organization.legalName}. Todos los derechos reservados.
          </p>
          <p>Carneros Football Club Guadalajara — {CONTACTS.organization.founded}</p>
        </div>
      </div>
    </footer>
  );
}
