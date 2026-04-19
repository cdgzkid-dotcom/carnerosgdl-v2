import { getPublishedPosts } from "@/lib/posts";

export const revalidate = 600;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carnerosgdl.com";

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = await getPublishedPosts(50);

  const items = posts
    .map((p) => {
      const date = p.published_at ?? p.created_at;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${siteUrl}/noticias/${escape(p.slug)}</link>
      <guid>${siteUrl}/noticias/${escape(p.slug)}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      ${p.excerpt ? `<description>${escape(p.excerpt)}</description>` : ""}
      ${p.category ? `<category>${escape(p.category)}</category>` : ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Carneros Football Club — Noticias</title>
    <link>${siteUrl}/noticias</link>
    <description>Noticias oficiales de Carneros Football Club Guadalajara.</description>
    <language>es-MX</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=600, s-maxage=600",
    },
  });
}
