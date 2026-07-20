import type { Locale } from "../i18n";

export const shopBaseUrl = "https://www.lebensmittel-sonderposten.de";

export const brand = "Berg Buben";

interface HeroCopy {
  eyebrow: Record<Locale, string>;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  ctaHref: string;
}

export const hero: HeroCopy = {
  eyebrow: {
    de: "Proviant aus dem Schwarzwald",
    en: "Provisions from the Black Forest",
  },
  title: {
    de: "Würste, die überleben.",
    en: "Sausages built to last.",
  },
  subtitle: {
    de: "Eckig gepresst, über Buchenholz geräuchert, an der Schwarzwaldluft getrocknet. Handliche Rohwurst für die Wanderung, die Radtour und die schnelle Brotzeit.",
    en: "Pressed square, smoked over beech wood, dried in Black Forest air. Hand-sized dry sausage for the trail, the bike tour and a quick bite.",
  },
  ctaHref: shopBaseUrl,
};

export const tagline: Record<Locale, string> = {
  de: "Schmackhafte Wurst aus dem Schwarzwald",
  en: "Tasty sausage from the Black Forest",
};

interface Contact {
  company: string;
  owner: string;
  street: string;
  city: string;
  email: string;
  phone: string;
}

export const contact: Contact = {
  company: "Berg Buben",
  owner: "PLATZHALTER Inhaber",
  street: "PLATZHALTER Strasse und Hausnummer",
  city: "PLATZHALTER PLZ und Ort",
  email: "PLATZHALTER@berg-buben.de",
  phone: "PLATZHALTER Telefonnummer",
};

export const siteUrl = "https://berg-buben.de";
