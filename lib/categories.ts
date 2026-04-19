import { CONTACTS } from "./contacts";

export type Program = "americano" | "flag";

export interface Category {
  slug: string;
  name: string;
  ageRange: string;
  description: string;
  image: string;
  whatsapp: string;
  program: Program;
}

export const AMERICANO_CATEGORIES: Category[] = [
  {
    slug: "rabbits",
    name: "Rabbits",
    ageRange: "9-10 años",
    description:
      "En esta categoría, los niños aprenden las bases del fútbol americano mientras disfrutan de un ambiente de diversión y desarrollo.",
    image: "https://framerusercontent.com/images/eCH6Fb9F2cZoijGXSh6o1EpnWA.jpg",
    whatsapp: CONTACTS.whatsapp.americano,
    program: "americano",
  },
  {
    slug: "hornets",
    name: "Hornets",
    ageRange: "11 años",
    description:
      "Los jugadores comienzan a perfeccionar sus habilidades motrices y tácticas, con un enfoque en el trabajo en equipo.",
    image: "https://framerusercontent.com/images/Vl35KgIUvUcfTuQ26kpWxDBjktQ.jpg",
    whatsapp: CONTACTS.whatsapp.americano,
    program: "americano",
  },
  {
    slug: "irons",
    name: "Irons",
    ageRange: "12 años",
    description:
      "A esta edad, los jugadores consolidan fundamentos y aprenden estrategias más avanzadas del juego.",
    image: "https://framerusercontent.com/images/e1tnxhfu6O9z1CvkUhXnnw3NYA.jpg",
    whatsapp: CONTACTS.whatsapp.americano,
    program: "americano",
  },
  {
    slug: "falcons",
    name: "Falcons",
    ageRange: "13 años",
    description:
      "En esta categoría, se fortalece la disciplina táctica y física, preparando a los jugadores para una mayor competencia.",
    image: "https://framerusercontent.com/images/GFqsCLyfeTsyezeIv5023z4rF0.jpg",
    whatsapp: CONTACTS.whatsapp.americano,
    program: "americano",
  },
  {
    slug: "tauros",
    name: "Tauros",
    ageRange: "14 años",
    description:
      "Los jugadores se enfocan en perfeccionar su preparación física y táctica para enfrentar competencias más exigentes.",
    image: "https://framerusercontent.com/images/iKXwt3amH8cOGj1q4H7cc6KduHM.jpg",
    whatsapp: CONTACTS.whatsapp.americano,
    program: "americano",
  },
  {
    slug: "ponys",
    name: "Ponys",
    ageRange: "15 años",
    description:
      "La categoría más avanzada del club, donde los jugadores se preparan para dar el salto a niveles superiores de fútbol americano.",
    image: "https://framerusercontent.com/images/dFaUMgfNVW2kBV3lrS4ucCmUCc.jpg",
    whatsapp: CONTACTS.whatsapp.americano,
    program: "americano",
  },
];

export const FLAG_CATEGORIES: Category[] = [
  {
    slug: "u6",
    name: "U6",
    ageRange: "4-5-6 años",
    description:
      "Los más pequeños aprenden los fundamentos básicos de flag football de manera divertida.",
    image: "https://framerusercontent.com/images/Ko2ZBqpvcdv0a2XcmDdJnWaJQYk.jpeg",
    whatsapp: CONTACTS.whatsapp.flag,
    program: "flag",
  },
  {
    slug: "u8",
    name: "U8",
    ageRange: "7-8 años",
    description:
      "Se enfocan en la agilidad y el trabajo en equipo, aprendiendo las reglas básicas del juego.",
    image: "https://framerusercontent.com/images/qnmBpoO6jzaaAVrgYd2S2XOGGc.jpeg",
    whatsapp: CONTACTS.whatsapp.flag,
    program: "flag",
  },
  {
    slug: "u10",
    name: "U10",
    ageRange: "9-10 años",
    description: "Mejoran sus habilidades tácticas y físicas, aprendiendo jugadas simples.",
    image: "https://framerusercontent.com/images/bzG7NQCR0wRc7BexfhvWi0ZGvY.jpeg",
    whatsapp: CONTACTS.whatsapp.flag,
    program: "flag",
  },
  {
    slug: "u12",
    name: "U12",
    ageRange: "11-12 años",
    description: "Desarrollan velocidad y coordinación, compitiendo en torneos locales.",
    image: "https://framerusercontent.com/images/ASN0WvUYkpoN34EAXmTUuDbWRxw.jpeg",
    whatsapp: CONTACTS.whatsapp.flag,
    program: "flag",
  },
  {
    slug: "u14",
    name: "U14",
    ageRange: "13-14 años",
    description: "Refuerzan la disciplina táctica y se preparan para niveles más competitivos.",
    image: "https://framerusercontent.com/images/GC8NQsit8qcg1ahAD77cm1lEEw.jpeg",
    whatsapp: CONTACTS.whatsapp.flag,
    program: "flag",
  },
  {
    slug: "u15-juvenil",
    name: "U15 Juvenil",
    ageRange: "15+ años",
    description:
      "Perfeccionan su técnica y toman decisiones rápidas, compitiendo a nivel avanzado.",
    image: "https://framerusercontent.com/images/UU4orLYc3LOWH1EJJSKS9gd1sCk.jpg",
    whatsapp: CONTACTS.whatsapp.flag,
    program: "flag",
  },
];

export const JUVENIL_UNICA = {
  name: "Juvenil Única",
  ageRange: "15 a 18 años",
  description:
    "Los jugadores perfeccionan sus habilidades físicas y tácticas para competir a un nivel avanzado, enfocándose en la disciplina, el liderazgo y la toma de decisiones rápidas.",
  image: "https://framerusercontent.com/images/NtNC8xJTS2cDCIgTTEJEOy5EQ.jpg",
  whatsapp: CONTACTS.whatsapp.juvenil,
};

export const HERO_IMAGES = {
  home: "https://framerusercontent.com/images/IUMpbahx9dATACfIA33msJvntA.jpg",
  nosotros: "https://framerusercontent.com/images/rbhpi5Pjp3xn1l3zr4dvdMnUPas.jpg",
  americano: "https://framerusercontent.com/images/vpTaN1KIRzjJVVEd2GcQgOCaeg.jpg",
  flag: "https://framerusercontent.com/images/bFiwhXGg6MaDrlaoJIqaHJLZRw.jpg",
};

export const ACHIEVEMENTS = [
  { label: "Campeonatos", value: 57 },
  { label: "Subcampeonatos", value: 43 },
  { label: "Terceros lugares", value: 65 },
  { label: "Años de historia", value: 39 },
  { label: "Categorías", value: 7 },
] as const;
