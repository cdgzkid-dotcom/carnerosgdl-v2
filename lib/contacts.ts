export const WHATSAPP_GENERAL = "https://wa.me/523341042448";

export const TRAINING_LOCATION = {
  url: "https://maps.app.goo.gl/4NPwZ1yqdFXMTHyE6",
  coords: { lat: 20.7070141, lng: -103.4691664 },
  name: "Organización Carneros",
  address: "Zapopan, Jalisco",
} as const;

export const CONTACTS = {
  whatsapp: {
    americano: "https://wa.me/523316041217",
    juvenil: "https://wa.me/523314194601",
    flag: "https://wa.me/525561898846",
    general: WHATSAPP_GENERAL,
  },
  social: {
    facebook: "https://www.facebook.com/CarnerosFootball",
    instagram: "https://www.instagram.com/carnerosfootball/",
    tiktok: "https://www.tiktok.com/@carnerosfootball",
  },
  location: {
    city: "Guadalajara",
    state: "Jalisco",
    country: "México",
    municipality: "Zapopan",
  },
  organization: {
    name: "Carneros Football Club Guadalajara",
    shortName: "Carneros",
    legalName: "Deporte y Cultura la Floresta",
    founded: "1985",
    tagline: "Disciplina, trabajo en equipo y superación",
  },
} as const;

export type WhatsAppKey = keyof typeof CONTACTS.whatsapp;
export type SocialKey = keyof typeof CONTACTS.social;
