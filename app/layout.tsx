import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CONTACTS } from "@/lib/contacts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://carnerosgdl.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carneros Football Club Guadalajara",
    template: "%s | Carneros FC",
  },
  description:
    "Carneros Football Club es una institución dedicada al desarrollo integral de jugadores a través del football americano y flag en Guadalajara desde 1985.",
  keywords: [
    "football americano",
    "flag football",
    "Guadalajara",
    "Carneros",
    "club deportivo",
    "football juvenil",
    "FADEMAC",
    "Jalisco",
  ],
  authors: [{ name: CONTACTS.organization.name }],
  creator: CONTACTS.organization.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: CONTACTS.organization.name,
    title: "Carneros Football Club Guadalajara",
    description:
      "Football americano y flag football juvenil en Guadalajara desde 1985. Disciplina, trabajo en equipo y superación.",
    images: [
      {
        url: "/og/default.jpg",
        width: 1200,
        height: 630,
        alt: "Carneros Football Club Guadalajara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carneros Football Club Guadalajara",
    description: "Football americano y flag football juvenil en Guadalajara desde 1985.",
    images: ["/og/default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: CONTACTS.organization.name,
  alternateName: CONTACTS.organization.shortName,
  foundingDate: CONTACTS.organization.founded,
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  sameAs: [CONTACTS.social.facebook, CONTACTS.social.instagram, CONTACTS.social.tiktok],
  address: {
    "@type": "PostalAddress",
    addressLocality: CONTACTS.location.city,
    addressRegion: CONTACTS.location.state,
    addressCountry: "MX",
  },
  sport: ["American Football", "Flag Football"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
