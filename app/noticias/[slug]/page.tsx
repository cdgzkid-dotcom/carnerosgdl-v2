import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

interface Params {
  params: { slug: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: post.excerpt ?? undefined,
    openGraph: {
      title: post.title,
      description: post.excerpt ?? undefined,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      authors: post.author ? [post.author] : undefined,
      images: post.cover_image
        ? [{ url: post.cover_image, width: 1200, height: 630, alt: post.title }]
        : undefined,
    },
  };
}

export const revalidate = 300;

export default async function PostPage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.id, post.category, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt ?? undefined,
    author: post.author ? { "@type": "Person", name: post.author } : undefined,
    datePublished: post.published_at ?? undefined,
    image: post.cover_image ?? undefined,
    publisher: {
      "@type": "SportsOrganization",
      name: "Carneros Football Club Guadalajara",
    },
  };

  return (
    <>
      {post.cover_image && (
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <article className="container mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/noticias"
          className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Volver a noticias
        </Link>

        <header className="mb-8">
          {post.category && (
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {post.category}
            </p>
          )}
          <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
            {post.title}
          </h1>
          {post.excerpt && <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>}
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            {post.author && <span>Por {post.author}</span>}
            {post.author && post.published_at && <span>·</span>}
            {post.published_at && (
              <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
            )}
          </div>
        </header>

        <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tight prose-h2:text-3xl prose-a:text-primary prose-strong:text-foreground">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-6 font-display text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/noticias/${r.slug}`}
                  className="group overflow-hidden rounded-xl bg-card shadow ring-1 ring-border transition-all hover:shadow-lg"
                >
                  {r.cover_image && (
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={r.cover_image}
                        alt={r.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold uppercase tracking-tight text-foreground transition-colors group-hover:text-primary">
                      {r.title}
                    </h3>
                    {r.excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
