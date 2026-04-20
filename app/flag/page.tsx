import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { FLAG_CATEGORIES, HERO_IMAGES } from "@/lib/categories";
import { CONTACTS } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Flag Football",
  description:
    "Programa de flag football Carneros: seis categorías desde los 4 hasta los 15+ años. Deporte sin contacto que desarrolla agilidad y estrategia.",
};

export default function FlagPage() {
  return (
    <>
      <PageHero
        title="Flag Football"
        subtitle="Deporte sin contacto para jugadores desde los 4 años. Agilidad, estrategia y camaradería en un entorno competitivo y divertido."
        image={HERO_IMAGES.flag}
        imageAlt="Jugadores de flag football en acción"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-sm uppercase tracking-widest text-accent">
            Nuestro programa
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Deporte sin contacto, pasión total
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            El flag en Carneros Football Club ofrece un entorno divertido y competitivo donde los
            jugadores desarrollan habilidades físicas y estratégicas sin contacto. Fomenta el
            trabajo en equipo, la agilidad y el respeto, impulsando el crecimiento personal a través
            del deporte.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton href={CONTACTS.whatsapp.flag} label="Contactar coordinación Flag" />
          </div>
        </div>
      </section>

      <CategoriesGrid
        id="categorias-flag"
        eyebrow="Categorías"
        title="Por edad y nivel"
        description="Seis grupos, desde los 4 hasta los 15+ años, con enfoque progresivo en agilidad, técnica y toma de decisiones."
        categories={FLAG_CATEGORIES}
        bgClass="bg-muted/30"
      />
    </>
  );
}
