import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { HERO_IMAGES } from "@/lib/categories";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Galería",
  description:
    "Momentos memorables de Carneros Football Club: entrenamientos, partidos y eventos de nuestras categorías de americano y flag.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        title="Galería"
        subtitle="Vive los mejores momentos del club: entrenamientos, partidos, celebraciones y vida de equipo."
        image={HERO_IMAGES.home}
        imageAlt="Galería Carneros"
        height="sm"
      />
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryClient />
        </div>
      </section>
    </>
  );
}
