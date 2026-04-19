"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  registrationSchema,
  REGISTRATION_CATEGORIES,
  type RegistrationFormValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type SubmitState = "idle" | "submitting" | "success" | "error";

export function InscripcionForm() {
  const [state, setState] = React.useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      accepted_terms: false as unknown as true,
    } as Partial<RegistrationFormValues>,
  });

  const onSubmit = async (values: RegistrationFormValues) => {
    setState("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as {
          error?: string;
        };
        throw new Error(body.error ?? "No pudimos enviar tu inscripción");
      }
      setState("success");
      reset();
    } catch (err) {
      setState("error");
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado");
    }
  };

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl bg-card p-10 text-center shadow-md ring-1 ring-border"
      >
        <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
        <h2 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground">
          ¡Inscripción recibida!
        </h2>
        <p className="mt-3 text-muted-foreground">
          Gracias por registrar a tu jugador. Un coordinador te contactará por WhatsApp o correo
          dentro de las próximas 48 horas para confirmar detalles y darte la bienvenida a Carneros.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
        >
          Registrar a otro jugador
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl bg-card p-6 shadow-md ring-1 ring-border md:p-8"
      noValidate
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Nombre del jugador" error={errors.player_name?.message}>
          <input
            type="text"
            autoComplete="off"
            {...register("player_name")}
            className={inputClass}
          />
        </Field>

        <Field label="Fecha de nacimiento" error={errors.birth_date?.message}>
          <input type="date" {...register("birth_date")} className={inputClass} />
        </Field>

        <Field label="Categoría" error={errors.category?.message} className="md:col-span-2">
          <select {...register("category")} className={inputClass} defaultValue="">
            <option value="" disabled>
              Elige una categoría
            </option>
            <optgroup label="Football Americano">
              {REGISTRATION_CATEGORIES.slice(0, 7).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </optgroup>
            <optgroup label="Flag Football">
              {REGISTRATION_CATEGORIES.slice(7).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </optgroup>
          </select>
        </Field>

        <Field label="Nombre del tutor / padre / madre" error={errors.parent_name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register("parent_name")}
            className={inputClass}
          />
        </Field>

        <Field label="Teléfono del tutor" error={errors.parent_phone?.message}>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="33 1234 5678"
            {...register("parent_phone")}
            className={inputClass}
          />
        </Field>

        <Field
          label="Correo del tutor"
          error={errors.parent_email?.message}
          className="md:col-span-2"
        >
          <input
            type="email"
            autoComplete="email"
            placeholder="correo@ejemplo.com"
            {...register("parent_email")}
            className={inputClass}
          />
        </Field>

        <Field label="Escuela (opcional)" error={errors.school?.message} className="md:col-span-2">
          <input type="text" {...register("school")} className={inputClass} />
        </Field>

        <Field
          label="Notas médicas o alergias (opcional)"
          error={errors.medical_notes?.message}
          className="md:col-span-2"
        >
          <textarea
            rows={3}
            {...register("medical_notes")}
            className={cn(inputClass, "resize-y")}
          />
        </Field>
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="accepted_terms"
          type="checkbox"
          {...register("accepted_terms")}
          className="mt-1 h-4 w-4 rounded border-input text-primary focus-visible:ring-2 focus-visible:ring-ring"
        />
        <label htmlFor="accepted_terms" className="text-sm text-muted-foreground">
          Autorizo el registro del jugador y acepto los{" "}
          <span className="font-medium text-foreground">términos del programa</span> (participación
          en entrenamientos, partidos, uso de imagen con fines deportivos y manejo de datos
          personales según lo establecido por el club).
        </label>
      </div>
      {errors.accepted_terms && (
        <p className="mt-1 text-sm text-destructive">{errors.accepted_terms.message}</p>
      )}

      {errorMsg && (
        <p className="mt-4 rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow transition-all hover:bg-primary/90 disabled:opacity-60 sm:w-auto"
      >
        {state === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
        {state === "submitting" ? "Enviando..." : "Enviar inscripción"}
      </button>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
