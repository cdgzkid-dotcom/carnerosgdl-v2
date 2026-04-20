import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { HERO_IMAGES } from "@/lib/categories";
import { InscripcionForm } from "./InscripcionForm";

export const metadata: Metadata = {
  title: "Inscripciones",
  description:
    "Inscribe a tu jugador en Carneros Football Club. Formulario en línea para todas las categorías de football americano y flag.",
};

export default function InscripcionesPage() {
  return (
    <>
      <PageHero
        title="Inscripciones"
        subtitle="Únete a Carneros. Llena el formulario y un coordinador te contactará para darte la bienvenida al club."
        image={HERO_IMAGES.americano}
        imageAlt="Inscripciones Carneros"
        height="sm"
      />
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <InscripcionForm />
        </div>
      </section>
    </>
  );
}
