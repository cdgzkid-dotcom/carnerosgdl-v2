"use client";

import * as React from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { es } from "date-fns/locale";
import { MapPin, Calendar as CalendarIcon, List } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Match } from "@/types";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = { "es-MX": es };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { locale: es }),
  getDay,
  locales,
});

interface CalendarClientProps {
  matches: Match[];
}

const CATEGORY_FILTERS = [
  "Todas",
  "Rabbits",
  "Hornets",
  "Irons",
  "Falcons",
  "Tauros",
  "Ponys",
  "Juvenil Única",
  "U6",
  "U8",
  "U10",
  "U12",
  "U14",
  "U15 Juvenil",
];

export function CalendarClient({ matches }: CalendarClientProps) {
  const [view, setView] = React.useState<"list" | "calendar">("list");
  const [category, setCategory] = React.useState<string>("Todas");

  const filtered = React.useMemo(
    () => (category === "Todas" ? matches : matches.filter((m) => m.category === category)),
    [matches, category],
  );

  const events = filtered.map((m) => ({
    id: m.id,
    title: `${m.category} vs ${m.opponent}`,
    start: new Date(m.date),
    end: new Date(new Date(m.date).getTime() + 2 * 60 * 60 * 1000),
    resource: m,
  }));

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => setView("list")}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
              view === "list"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground/70 hover:bg-muted/70",
            )}
          >
            <List className="h-4 w-4" /> Lista
          </button>
          <button
            type="button"
            onClick={() => setView("calendar")}
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors",
              view === "calendar"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-foreground/70 hover:bg-muted/70",
            )}
          >
            <CalendarIcon className="h-4 w-4" /> Calendario
          </button>
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {CATEGORY_FILTERS.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border bg-muted/30 p-12 text-center">
          <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground/60" />
          <p className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-foreground">
            No hay partidos programados
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            El calendario se actualizará cuando inicie la siguiente temporada.
          </p>
        </div>
      ) : view === "list" ? (
        <MatchList matches={filtered} />
      ) : (
        <div className="overflow-hidden rounded-xl bg-card p-4 shadow ring-1 ring-border">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.MONTH}
            views={[Views.MONTH, Views.WEEK, Views.AGENDA]}
            culture="es-MX"
            messages={{
              next: "Siguiente",
              previous: "Anterior",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
              agenda: "Agenda",
              date: "Fecha",
              time: "Hora",
              event: "Partido",
              noEventsInRange: "Sin partidos en este rango",
            }}
            style={{ height: 600 }}
          />
        </div>
      )}
    </div>
  );
}

function MatchList({ matches }: { matches: Match[] }) {
  return (
    <div className="space-y-3">
      {matches.map((m) => {
        const date = new Date(m.date);
        return (
          <article
            key={m.id}
            className="flex flex-col gap-3 rounded-xl bg-card p-5 shadow-sm ring-1 ring-border transition-colors hover:bg-muted/30 sm:flex-row sm:items-center"
          >
            <div className="flex w-full shrink-0 flex-col items-center justify-center rounded-lg bg-primary/10 p-3 text-center sm:w-24">
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {date.toLocaleString("es-MX", { month: "short" })}
              </span>
              <span className="font-display text-3xl font-bold text-primary">{date.getDate()}</span>
              <span className="text-xs text-muted-foreground">
                {date.toLocaleString("es-MX", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {m.category}
              </p>
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                Carneros vs {m.opponent}
              </h3>
              {m.location && (
                <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {m.location}
                  {m.home_away && (
                    <span className="ml-2 rounded-full bg-muted px-2 py-0.5 text-xs font-semibold uppercase">
                      {m.home_away === "home" ? "Local" : "Visitante"}
                    </span>
                  )}
                </p>
              )}
              {m.notes && <p className="mt-1 text-sm italic text-muted-foreground">{m.notes}</p>}
            </div>

            {m.result && (
              <div className="rounded-lg bg-accent/10 px-4 py-2 text-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Resultado
                </span>
                <p className="font-display text-lg font-bold text-foreground">{m.result}</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
