# Carneros Football Club — Sitio oficial v2

[![CI](https://github.com/cdgzkid-dotcom/carnerosgdl-v2/actions/workflows/ci.yml/badge.svg)](https://github.com/cdgzkid-dotcom/carnerosgdl-v2/actions/workflows/ci.yml)
[![Deploy: Vercel](https://img.shields.io/badge/deploy-vercel-000?logo=vercel)](https://vercel.com)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org)

Sitio web oficial de **Carneros Football Club Guadalajara**, una institución
fundada en 1985 dedicada al desarrollo integral de jugadores a través del
football americano y flag football. Esta es la versión 2, reescrita desde cero
en Next.js 14 para reemplazar la anterior en Framer.

**Producción:** https://carnerosgdl.com (migración pendiente)

---

## Stack técnico

- **Framework:** [Next.js 14](https://nextjs.org) (App Router) + TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com) + componentes estilo shadcn/ui
- **Animaciones:** [Framer Motion](https://www.framer.com/motion/) + react-countup
- **CMS / DB:** [Supabase](https://supabase.com) (PostgreSQL + Auth)
- **Formularios:** React Hook Form + [Zod](https://zod.dev)
- **Email:** [Resend](https://resend.com)
- **SEO:** next-seo built-in, sitemap + robots, JSON-LD, RSS
- **Analytics:** Vercel Analytics + GA4 (opcional)
- **Deploy:** [Vercel](https://vercel.com)
- **Runtime:** Node 20+, pnpm 10+

---

## Requisitos

- Node.js **20 o superior**
- pnpm **10 o superior** (`npm i -g pnpm`)
- Cuenta de Supabase (gratis)
- Cuenta de Resend (gratis, opcional — para emails)

---

## Instalación

```bash
# 1. Clonar el repo
git clone https://github.com/cdgzkid-dotcom/carnerosgdl-v2.git
cd carnerosgdl-v2

# 2. Instalar dependencias
pnpm install

# 3. Copiar variables de entorno
cp .env.local.example .env.local
# Edita .env.local con tus credenciales

# 4. Aplicar migraciones Supabase
# Desde el dashboard de Supabase:
#   SQL Editor → new query → pega el contenido de supabase/migrations/0001_init.sql
# O con Supabase CLI:
#   supabase db push

# 5. Descargar imágenes del CDN de Framer a /public/images (opcional — recomendado antes de prod)
pnpm download-images

# 6. Correr en local
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## Variables de entorno

Copia `.env.local.example` a `.env.local` y llena los siguientes campos:

| Variable                        | Requerido | Descripción                                 |
| ------------------------------- | --------- | ------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Sí        | URL pública del sitio                       |
| `NEXT_PUBLIC_SUPABASE_URL`      | Sí        | URL del proyecto Supabase                   |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Sí        | Llave anónima (frontend)                    |
| `SUPABASE_SERVICE_ROLE_KEY`     | Sí        | Llave service role (API routes, admin)      |
| `RESEND_API_KEY`                | No        | Para envío de emails transaccionales        |
| `RESEND_FROM_EMAIL`             | No        | Remitente de los correos                    |
| `RESEND_NOTIFY_EMAIL`           | No        | Email del admin para notificaciones         |
| `NEXT_PUBLIC_GA_ID`             | No        | ID de Google Analytics 4                    |
| `ADMIN_WEBHOOK_URL`             | No        | Webhook para notificar nuevas inscripciones |

---

## Comandos

| Comando                | Qué hace                                           |
| ---------------------- | -------------------------------------------------- |
| `pnpm dev`             | Levanta el servidor de desarrollo en :3000         |
| `pnpm build`           | Build de producción                                |
| `pnpm start`           | Corre el build de producción                       |
| `pnpm lint`            | Corre ESLint                                       |
| `pnpm typecheck`       | `tsc --noEmit` para verificar tipos                |
| `pnpm format`          | Formatea código con Prettier                       |
| `pnpm format:check`    | Verifica formato sin modificar (usado en CI)       |
| `pnpm download-images` | Descarga imágenes de Framer CDN a `/public/images` |

Pre-commit hook (Husky + lint-staged) formatea y linea los archivos staged.

---

## Estructura de carpetas

```
carnerosgdl-v2/
├── app/                        # Rutas del App Router
│   ├── layout.tsx              # Root layout (fonts, theme, navbar, footer, JSON-LD)
│   ├── page.tsx                # Home
│   ├── nosotros/page.tsx       # Nosotros (historia, misión, visión)
│   ├── americano/page.tsx      # Detalle football americano
│   ├── flag/page.tsx           # Detalle flag football
│   ├── calendario/             # Calendario de partidos (Supabase)
│   ├── noticias/               # Blog (lista + [slug])
│   ├── inscripciones/          # Formulario
│   ├── contacto/page.tsx       # Contacto y redes
│   ├── galeria/                # Galería con lightbox
│   ├── api/
│   │   ├── registrations/      # POST — guarda inscripción + email
│   │   └── revalidate/         # POST — revalidar paths on-demand
│   ├── feed.xml/               # RSS
│   ├── sitemap.ts              # Sitemap dinámico
│   ├── robots.ts               # robots.txt
│   ├── not-found.tsx           # 404
│   └── loading.tsx             # Loading UI global
├── components/
│   ├── layout/                 # Navbar, Footer, ThemeToggle
│   ├── home/                   # Secciones de la home
│   ├── shared/                 # PageHero, Prose, CategoryCard, etc.
│   ├── providers/              # ThemeProvider
│   └── ui/                     # Primitivos estilo shadcn (Button)
├── lib/
│   ├── supabase/               # client.ts, server.ts
│   ├── contacts.ts             # Contactos y redes (fuente única)
│   ├── categories.ts           # Data de categorías
│   ├── gallery.ts              # Data de galería
│   ├── posts.ts                # Fetchers de posts
│   ├── validation.ts           # Schemas Zod
│   └── utils.ts                # cn, formatDate
├── types/                      # Tipos compartidos
├── public/
│   ├── images/                 # Imágenes locales (tras pnpm download-images)
│   └── og/                     # Open Graph defaults
├── scripts/
│   └── download-images.ts      # Descarga imágenes del CDN de Framer
├── supabase/
│   └── migrations/0001_init.sql
├── .github/workflows/ci.yml    # GitHub Actions
├── tailwind.config.ts
├── next.config.mjs
└── .env.local.example
```

---

## Deploy en Vercel

1. Importa el repo `cdgzkid-dotcom/carnerosgdl-v2` desde [vercel.com/new](https://vercel.com/new)
2. Framework: **Next.js** (detectado automáticamente)
3. Build command: `pnpm build`
4. Install command: `pnpm install`
5. Añade las variables de entorno (Settings → Environment Variables)
6. Deploy → auto-deploy en cada push a `main`, previews en cada PR

### Migración de dominio desde Framer

1. En Framer: quita el dominio `carnerosgdl.com` del proyecto actual
2. En Vercel: Settings → Domains → agrega `carnerosgdl.com` y `www.carnerosgdl.com`
3. Actualiza los registros DNS en el proveedor:
   - `A` → `76.76.21.21` (apex)
   - `CNAME` `www` → `cname.vercel-dns.com`
4. Vercel emite el certificado automáticamente (~minutos)
5. Configura redirect `www` → apex (o al revés) desde Settings → Domains

---

## Contribución

1. Crea una rama descriptiva: `feat/galeria-filtros` o `fix/navbar-mobile`
2. Commitea siguiendo [Conventional Commits](https://www.conventionalcommits.org):
   - `feat:` nueva funcionalidad
   - `fix:` corrección de bug
   - `chore:` mantenimiento
   - `docs:` documentación
3. Abre un PR contra `main`. CI correrá lint + typecheck + build + format check.
4. Tras aprobar, merge. Vercel hará auto-deploy.

---

## Licencia

MIT © Deporte y Cultura la Floresta
