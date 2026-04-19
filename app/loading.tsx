export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        <div
          aria-hidden
          className="h-12 w-12 animate-spin rounded-full border-4 border-muted border-t-primary"
        />
        <p className="font-display text-sm uppercase tracking-widest text-muted-foreground">
          Cargando…
        </p>
      </div>
    </div>
  );
}
