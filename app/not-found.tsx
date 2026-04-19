import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <div className="container mx-auto max-w-xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-7xl font-bold text-primary md:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground md:text-5xl">
          Página no encontrada
        </h1>
        <p className="mt-3 text-muted-foreground">
          Parece que el jugador contrario interceptó este enlace. Regresemos al campo.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
