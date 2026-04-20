import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { ProgramSection } from "@/components/home/ProgramSection";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { AMERICANO_CATEGORIES, HERO_IMAGES, JUVENIL_UNICA } from "@/lib/categories";
import { CONTACTS } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Football Americano",
  description:
    "Programa de football americano de Carneros: seis categorías por edad (Rabbits, Hornets, Irons, Falcons, Tauros, Ponys) más Juvenil Única, de 9 a 18 años.",
};

export default function AmericanoPage() {
  return (
    <>
      <PageHero
        title="Football Americano"
        subtitle="Programa integral desde los 9 hasta los 18 años, con entrenamientos estructurados y competencia de alto nivel en FADEMAC."
        image={HERO_IMAGES.americano}
        imageAlt="Jugadores de football americano en el campo"
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-display text-sm uppercase tracking-widest text-accent">
            Nuestro programa
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            Formación integral con disciplina táctica
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            El fútbol americano en Carneros Football Club es una experiencia formativa que fomenta
            la disciplina, el trabajo en equipo y el liderazgo. Cada jugador crece en un entorno
            competitivo y de camaradería, impulsado por los valores de esfuerzo y superación.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsAppButton href={CONTACTS.whatsapp.americano} label="Contactar coordinación" />
          </div>
        </div>
      </section>

      <CategoriesGrid
        id="categorias-americano"
        eyebrow="Categorías"
        title="Por edad y desarrollo"
        description="De los 9 a los 15 años, cada grupo entrena con coaches especializados y compite en su nivel correspondiente."
        categories={AMERICANO_CATEGORIES}
      />

      <ProgramSection
        id="juvenil-americano"
        eyebrow="Juvenil Única"
        title="Juvenil Única (15 a 18 años)"
        description={JUVENIL_UNICA.description}
        image={JUVENIL_UNICA.image}
        imageAlt="Equipo Juvenil Única de Carneros"
        whatsapp={JUVENIL_UNICA.whatsapp}
        whatsappLabel="Contactar Juvenil Única"
        reverse
      />
    </>
  );
}
