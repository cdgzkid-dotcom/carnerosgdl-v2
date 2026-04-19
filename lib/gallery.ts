export type GalleryCategory = "todos" | "americano" | "flag" | "eventos";

export interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "todos">;
  width: number;
  height: number;
}

// Placeholder: las imágenes reales se agregarán a /public/gallery
// Usamos las mismas URLs de Framer como seed inicial.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "https://framerusercontent.com/images/IUMpbahx9dATACfIA33msJvntA.jpg",
    alt: "Equipo Carneros en el campo",
    category: "eventos",
    width: 1600,
    height: 1000,
  },
  {
    src: "https://framerusercontent.com/images/vpTaN1KIRzjJVVEd2GcQgOCaeg.jpg",
    alt: "Acción de football americano",
    category: "americano",
    width: 1600,
    height: 1000,
  },
  {
    src: "https://framerusercontent.com/images/bFiwhXGg6MaDrlaoJIqaHJLZRw.jpg",
    alt: "Partido de flag football",
    category: "flag",
    width: 1600,
    height: 1000,
  },
  {
    src: "https://framerusercontent.com/images/NtNC8xJTS2cDCIgTTEJEOy5EQ.jpg",
    alt: "Juvenil Única en acción",
    category: "americano",
    width: 1600,
    height: 1000,
  },
  {
    src: "https://framerusercontent.com/images/eCH6Fb9F2cZoijGXSh6o1EpnWA.jpg",
    alt: "Categoría Rabbits",
    category: "americano",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/Vl35KgIUvUcfTuQ26kpWxDBjktQ.jpg",
    alt: "Categoría Hornets",
    category: "americano",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/e1tnxhfu6O9z1CvkUhXnnw3NYA.jpg",
    alt: "Categoría Irons",
    category: "americano",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/GFqsCLyfeTsyezeIv5023z4rF0.jpg",
    alt: "Categoría Falcons",
    category: "americano",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/iKXwt3amH8cOGj1q4H7cc6KduHM.jpg",
    alt: "Categoría Tauros",
    category: "americano",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/dFaUMgfNVW2kBV3lrS4ucCmUCc.jpg",
    alt: "Categoría Ponys",
    category: "americano",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/Ko2ZBqpvcdv0a2XcmDdJnWaJQYk.jpeg",
    alt: "Flag U6",
    category: "flag",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/qnmBpoO6jzaaAVrgYd2S2XOGGc.jpeg",
    alt: "Flag U8",
    category: "flag",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/bzG7NQCR0wRc7BexfhvWi0ZGvY.jpeg",
    alt: "Flag U10",
    category: "flag",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/ASN0WvUYkpoN34EAXmTUuDbWRxw.jpeg",
    alt: "Flag U12",
    category: "flag",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/GC8NQsit8qcg1ahAD77cm1lEEw.jpeg",
    alt: "Flag U14",
    category: "flag",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/UU4orLYc3LOWH1EJJSKS9gd1sCk.jpg",
    alt: "Flag U15 Juvenil",
    category: "flag",
    width: 1200,
    height: 900,
  },
  {
    src: "https://framerusercontent.com/images/rbhpi5Pjp3xn1l3zr4dvdMnUPas.jpg",
    alt: "Equipo Carneros Guadalajara",
    category: "eventos",
    width: 1600,
    height: 1000,
  },
];
