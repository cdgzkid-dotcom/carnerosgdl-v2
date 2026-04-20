import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Newspaper } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { HERO_IMAGES } from "@/lib/categories";
import { getPublishedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Noticias",
  description: "Noticias, resultados y anuncios oficiales de Carneros Football Club Guadalajara.",
};

export const revalidate = 300;

export default async function NoticiasPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHero
        title="Noticias"
        subtitle="Resultados, anuncios y momentos destacados de nuestras categorías."
        image={HERO_IMAGES.home}
        imageAlt="Noticias Carneros"
        height="sm"
      />
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center">
              <Newspaper className="mx-auto h-12 w-12 text-muted-foreground/60" />
              <p className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                Próximamente
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Aún no publicamos noticias. Regresa pronto para leer sobre nuestros partidos, logros
                y eventos.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="group overflow-hidden rounded-xl bg-card shadow-md ring-1 ring-border transition-all hover:shadow-xl"
                >
                  <Link
                    href={`/noticias/${post.slug}`}
                    className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {post.cover_image && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={post.cover_image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {post.category && (
                        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                          {post.category}
                        </p>
                      )}
                      <h2 className="mt-2 font-display text-xl font-semibold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                          {post.excerpt}
                        </p>
                      )}
                      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                        {post.author && <span>{post.author}</span>}
                        {post.author && post.published_at && <span>·</span>}
                        {post.published_at && (
                          <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
