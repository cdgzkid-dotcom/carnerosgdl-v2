import { z } from "zod";

const ALL_CATEGORIES = [
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
] as const;

export const REGISTRATION_CATEGORIES = ALL_CATEGORIES;

export const registrationSchema = z.object({
  player_name: z.string().trim().min(2, "Ingresa el nombre completo del jugador").max(120),
  birth_date: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Selecciona una fecha válida")
    .optional()
    .or(z.literal("")),
  category: z.enum(ALL_CATEGORIES, {
    message: "Elige una categoría",
  }),
  parent_name: z.string().trim().min(2, "Ingresa el nombre del tutor o padre/madre").max(120),
  parent_email: z.string().trim().email("Ingresa un correo válido"),
  parent_phone: z.string().trim().min(10, "Ingresa 10 dígitos como mínimo").max(20),
  school: z.string().trim().max(120).optional().or(z.literal("")),
  medical_notes: z.string().trim().max(1000).optional().or(z.literal("")),
  accepted_terms: z.literal(true, {
    message: "Debes aceptar los términos para continuar",
  }),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
