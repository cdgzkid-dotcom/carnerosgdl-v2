import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/posts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carnerosgdl.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/nosotros",
    "/americano",
    "/flag",
    "/calendario",
    "/noticias",
    "/inscripciones",
    "/contacto",
    "/galeria",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const posts = await getPublishedPosts();
  const postRoutes = posts.map((p) => ({
    url: `${siteUrl}/noticias/${p.slug}`,
    lastModified: new Date(p.published_at ?? p.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
