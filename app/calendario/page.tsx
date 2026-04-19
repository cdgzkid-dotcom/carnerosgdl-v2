import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { HERO_IMAGES } from "@/lib/categories";
import { createClient } from "@/lib/supabase/server";
import type { Match } from "@/types";
import { CalendarClient } from "./CalendarClient";

export const metadata: Metadata = {
  title: "Calendario de Partidos",
  description:
    "Consulta los próximos partidos de todas las categorías de Carneros Football Club. Calendario oficial de la temporada.",
};

export const revalidate = 300;

async function getMatches(): Promise<Match[]> {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return [];
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("matches")
      .select("*")
      .order("date", { ascending: true });
    if (error) {
      console.error("[calendario] error fetching matches:", error.message);
      return [];
    }
    return (data ?? []) as Match[];
  } catch (err) {
    console.error("[calendario] unexpected error:", err);
    return [];
  }
}

export default async function CalendarioPage() {
  const matches = await getMatches();

  const jsonLd = matches.slice(0, 20).map((m) => ({
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `Carneros ${m.category} vs ${m.opponent}`,
    startDate: m.date,
    location: {
      "@type": "Place",
      name: m.location ?? "Guadalajara, Jalisco",
    },
    sport: m.category.startsWith("U") ? "Flag Football" : "American Football",
    organizer: {
      "@type": "SportsOrganization",
      name: "Carneros Football Club Guadalajara",
    },
  }));

  return (
    <>
      <PageHero
        title="Calendario"
        subtitle="Todos los partidos de nuestras categorías de football americano y flag, en un solo lugar."
        image={HERO_IMAGES.americano}
        imageAlt="Calendario de partidos Carneros FC"
        height="sm"
      />
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <CalendarClient matches={matches} />
        </div>
      </section>
      {jsonLd.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
}
