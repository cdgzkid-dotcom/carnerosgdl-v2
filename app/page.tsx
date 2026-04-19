import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { StatsCounter } from "@/components/home/StatsCounter";
import { ProgramSection } from "@/components/home/ProgramSection";
import { CategoriesGrid } from "@/components/home/CategoriesGrid";
import { ContactSection } from "@/components/home/ContactSection";
import {
  AMERICANO_CATEGORIES,
  FLAG_CATEGORIES,
  HERO_IMAGES,
  JUVENIL_UNICA,
} from "@/lib/categories";
import { CONTACTS } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Inicio",
  description:
    "Carneros Football Club Guadalajara: football americano y flag football juvenil desde 1985. Categorías desde 4 años hasta juvenil.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />

      <ProgramSection
        id="americano"
        eyebrow="Programa"
        title="Football Americano"
        description="El fútbol americano en Carneros Football Club es una experiencia formativa que fomenta la disciplina, el trabajo en equipo y el liderazgo. Cada jugador crece en un entorno competitivo y de camaradería, impulsado por los valores de esfuerzo y superación."
        image={HERO_IMAGES.americano}
        imageAlt="Jugadores de football americano de Carneros en el campo"
        whatsapp={CONTACTS.whatsapp.americano}
      />

      <CategoriesGrid
        id="catego-americano"
        eyebrow="Football Americano"
        title="Categorías por edad"
        description="Seis categorías diseñadas para acompañar el desarrollo deportivo y personal de cada jugador, desde los 9 hasta los 15 años."
        categories={AMERICANO_CATEGORIES}
      />

      <ProgramSection
        id="juvenil"
        eyebrow="Juvenil Única"
        title="Juvenil Única (15 a 18 años)"
        description={JUVENIL_UNICA.description}
        image={JUVENIL_UNICA.image}
        imageAlt="Equipo Juvenil Única de Carneros"
        whatsapp={JUVENIL_UNICA.whatsapp}
        reverse
      />

      <ProgramSection
        id="flag"
        eyebrow="Programa"
        title="Flag Football"
        description="El flag en Carneros Football Club ofrece un entorno divertido y competitivo donde los jugadores desarrollan habilidades físicas y estratégicas sin contacto. Fomenta el trabajo en equipo, la agilidad y el respeto, impulsando el crecimiento personal a través del deporte."
        image={HERO_IMAGES.flag}
        imageAlt="Jugadores de flag football de Carneros en acción"
        whatsapp={CONTACTS.whatsapp.flag}
      />

      <CategoriesGrid
        id="catego-flag"
        eyebrow="Flag Football"
        title="Categorías por edad"
        description="Seis categorías sin contacto, ideales para introducir a los más pequeños al deporte y acompañar su crecimiento hasta la adolescencia."
        categories={FLAG_CATEGORIES}
        bgClass="bg-background"
      />

      <ContactSection />
    </>
  );
}
