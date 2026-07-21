import type { Locale } from "../i18n";

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export interface Fact {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  weight: string;
  publishedAt: string;
  imageUrl: string;
  shopUrl: string;
  soldOut?: boolean;
  name: Record<Locale, string>;
  category: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  facts: Record<Locale, Fact[]>;
  body: Record<Locale, Block[]>;
}

const landjaegerFacts: Record<Locale, Fact[]> = {
  de: [
    { label: "Form", value: "Eckig, paarweise" },
    { label: "Farbe", value: "Dunkelrot bis schwarzbraun" },
    { label: "Fleisch", value: "Rind & Schwein" },
    { label: "Gewürze", value: "Kümmel, Pfeffer, Koriander" },
    { label: "Verfahren", value: "Gepresst, geräuchert, luftgetrocknet" },
    { label: "Haltbarkeit", value: "Wochen bis Monate, ohne Kühlung" },
  ],
  en: [
    { label: "Shape", value: "Square, sold in pairs" },
    { label: "Colour", value: "Dark red to blackish-brown" },
    { label: "Meat", value: "Beef & pork" },
    { label: "Spices", value: "Caraway, pepper, coriander" },
    { label: "Process", value: "Pressed, smoked, air-dried" },
    { label: "Keeps", value: "Weeks to months, no fridge" },
  ],
};

const landjaegerBody: Record<Locale, Block[]> = {
  de: [
    { type: "p", text: "Landjäger sind die ultimativen „Überlebenskünstler“ unter den Würsten. Man kann sie sich als eine Mischung aus einer Salami und einer festen Rohwurst vorstellen, die speziell für den Transport ohne Kühlung entwickelt wurde." },
    { type: "h", text: "Was macht sie aus?" },
    { type: "ul", items: [
      "Form & Aussehen: Das markanteste Merkmal ist die eckige Form. Sie werden paarweise verkauft und sind meist dunkelrot bis fast schwarzbraun.",
      "Zutaten: Klassisch bestehen sie aus Rind- und Schweinefleisch, Speck, Salz und Gewürzen (oft Kümmel, Pfeffer und Koriander).",
      "Herstellung: Die Würste werden erst gepresst (daher die eckige Form), dann geräuchert und schließlich an der Luft getrocknet. Durch diesen Prozess verlieren sie Wasser und werden sehr fest.",
    ] },
    { type: "h", text: "Warum sind sie eckig?" },
    { type: "p", text: "Das ist kein Design-Gag, sondern pure Praktikabilität aus der Zeit vor dem Rucksack: Die eckige Form sorgte dafür, dass die Würste in der Hosentasche oder im Ranzen nicht hin- und herrollten und weniger Platz wegnahmen." },
    { type: "h", text: "Herkunft und Name" },
    { type: "p", text: "Der Name hat übrigens nichts mit der Jagd auf dem Land zu tun. Er leitet sich vermutlich vom Schweizerdeutschen „Landjäger“ ab, was früher eine Bezeichnung für Landpolizisten oder Gendarmen war. Diese trugen die haltbaren Würste oft als Proviant während ihrer Streifen bei sich." },
    { type: "h", text: "Die Vorteile auf einen Blick" },
    { type: "ul", items: [
      "Extrem haltbar: Sie brauchen keinen Kühlschrank und halten sich Wochen (oder Monate).",
      "Protein-Snack: Ideal für Wanderungen, Radtouren oder die schnelle Brotzeit.",
      "Geschmack: Sehr herzhaft, rauchig und würzig.",
    ] },
    { type: "p", text: "Kleiner Funfact: In manchen Regionen werden sie auch „Peitschenstecken“ oder einfach nur „Paarwurst“ genannt." },
  ],
  en: [
    { type: "p", text: "Landjäger are the ultimate survival artists among sausages. Picture a cross between a salami and a firm dry-cured sausage – purpose-built to travel without refrigeration." },
    { type: "h", text: "What makes them special?" },
    { type: "ul", items: [
      "Shape & appearance: their most distinctive trait is the square form. They are sold in pairs and are usually dark red to almost blackish-brown.",
      "Ingredients: classically beef and pork, bacon, salt and spices (often caraway, pepper and coriander).",
      "How they are made: the sausages are first pressed (hence the square shape), then smoked and finally air-dried. The process draws out water and makes them very firm.",
    ] },
    { type: "h", text: "Why are they square?" },
    { type: "p", text: "It is not a design gimmick but pure practicality from the days before the backpack: the square shape kept the sausages from rolling around in a trouser pocket or satchel, and they took up less room." },
    { type: "h", text: "Origin and name" },
    { type: "p", text: "The name, by the way, has nothing to do with hunting in the countryside. It most likely comes from the Swiss-German „Landjäger“, an old term for a rural policeman or gendarme. These officers often carried the long-keeping sausages as provisions on their patrols." },
    { type: "h", text: "The advantages at a glance" },
    { type: "ul", items: [
      "Extremely long-keeping: no fridge needed, they last for weeks (or months).",
      "Protein snack: ideal for hikes, bike tours or a quick Brotzeit.",
      "Flavour: hearty, smoky and full of spice.",
    ] },
    { type: "p", text: "Fun fact: in some regions they are also called „Peitschenstecken“ (whip sticks) or simply „Paarwurst“ (pair sausage)." },
  ],
};

const minisalamiFacts: Record<Locale, Fact[]> = {
  de: [
    { label: "Art", value: "Minisalami" },
    { label: "Fleisch", value: "Schwein" },
    { label: "Verfahren", value: "Luftgetrocknet" },
    { label: "Verpackung", value: "Einzeln vakuumiert" },
    { label: "Stück", value: "21 × 80 g" },
    { label: "Haltbarkeit", value: "Ohne Kühlung" },
  ],
  en: [
    { label: "Type", value: "Mini salami" },
    { label: "Meat", value: "Pork" },
    { label: "Process", value: "Air-dried" },
    { label: "Packaging", value: "Individually vacuum-sealed" },
    { label: "Pieces", value: "21 × 80 g" },
    { label: "Keeps", value: "No fridge needed" },
  ],
};

const minisalamiBody: Record<Locale, Block[]> = {
  de: [
    { type: "p", text: "Die Minisalami vom Schwein ist der handliche Klassiker für zwischendurch: luftgetrocknet, herzhaft gewürzt und einzeln vakuumiert." },
    { type: "h", text: "Perfekt für unterwegs" },
    { type: "p", text: "Ob Wanderung, Büro oder schnelle Brotzeit – die Minisalami braucht keine Kühlung und ist sofort snackbereit." },
    { type: "ul", items: [
      "Aus Schweinefleisch, würzig gereift",
      "Einzeln vakuumverpackt, 21 Stück",
      "Ohne Kühlung haltbar",
    ] },
  ],
  en: [
    { type: "p", text: "The pork mini salami is the handy classic for in between: air-dried, heartily spiced and individually vacuum-sealed." },
    { type: "h", text: "Perfect on the go" },
    { type: "p", text: "Whether hiking, at the office or for a quick bite – the mini salami needs no fridge and is ready to snack straight away." },
    { type: "ul", items: [
      "Made from pork, matured with spices",
      "Individually vacuum-packed, 21 pieces",
      "Keeps without refrigeration",
    ] },
  ],
};

export const products: Product[] = [
  {
    slug: "landjaeger-21x-80g",
    weight: "21 × 80 g · 1,68 kg",
    publishedAt: "2026-03-23",
    imageUrl: "https://www.lebensmittel-sonderposten.de/thumbnail/c4/0a/14/1772189909/Berg_Buben_schwarzwaldhaus-21x-80g-1680g_3_800x800.jpg?ts=1772189913",
    shopUrl: "https://www.lebensmittel-sonderposten.de/21-x-Schwarzwaelder-Landjaeger-Original-Berg-Buben-geraeuchert-Display-2er-80g-1680g-12.08.26-MHD-03.09.26/SW642333",
    soldOut: false,
    name: { de: "Landjäger · 21 × 80 g", en: "Landjäger · 21 × 80 g" },
    category: { de: "Display", en: "Display" },
    excerpt: {
      de: "Das Original im 21er-Display: eckig gepresste, geräucherte Landjäger – haltbar ganz ohne Kühlung.",
      en: "The original in a 21-piece display: pressed, smoked Landjäger – keeps with no fridge at all.",
    },
    facts: landjaegerFacts,
    body: landjaegerBody,
  },
  {
    slug: "landjaeger-100x-80g",
    weight: "100 × 80 g · 8 kg",
    publishedAt: "2026-03-23",
    imageUrl: "https://www.lebensmittel-sonderposten.de/thumbnail/5a/59/85/1778678365/Berg_Buben_Schwarzwaldhaus_100-x-80g_8000g_front_800x800.jpg?ts=1778678365",
    shopUrl: "https://www.lebensmittel-sonderposten.de/100x-Schwarzwaelder-Berg-Buben-Landjaeger-geraeuchert-2er-80g-8000g-MHD-12.09.26/SW643302",
    soldOut: false,
    name: { de: "Landjäger · 100 × 80 g", en: "Landjäger · 100 × 80 g" },
    category: { de: "Großpackung", en: "Bulk pack" },
    excerpt: {
      de: "Der herzhafte Schwarzwald-Snack im 8-kg-Vorratskarton – für Bier, Wein, Schule und Wanderung.",
      en: "The hearty Black Forest snack in an 8 kg bulk box – for beer, wine, school and hiking.",
    },
    facts: landjaegerFacts,
    body: landjaegerBody,
  },
  {
    slug: "landjaeger-200x-80g",
    weight: "200 × 80 g · 16 kg",
    publishedAt: "2026-03-23",
    imageUrl: "https://www.lebensmittel-sonderposten.de/thumbnail/29/42/28/1778680034/Berg_Buben_Schwarzwaldhaus_200-x-80g_16000g_front_1920x1920.jpg?ts=1778680035",
    shopUrl: "https://www.lebensmittel-sonderposten.de/200x-Schwarzwaelder-Berg-Buben-Landjaeger-geraeuchert-2er-80g-16kg-MHD-12.09.26/SW643303",
    soldOut: false,
    name: { de: "Landjäger · 200 × 80 g", en: "Landjäger · 200 × 80 g" },
    category: { de: "Großpackung", en: "Bulk pack" },
    excerpt: {
      de: "Die Gastronomie-Menge: 16 kg Schwarzwälder Landjäger, eckig gepresst und geräuchert.",
      en: "The catering quantity: 16 kg of Black Forest Landjäger, pressed square and smoked.",
    },
    facts: landjaegerFacts,
    body: landjaegerBody,
  },
  {
    slug: "minisalami-21x-80g",
    weight: "21 × 80 g · 1,68 kg",
    publishedAt: "2026-03-23",
    imageUrl: "https://www.lebensmittel-sonderposten.de/thumbnail/5e/2d/8f/1784289460/Berg-Buben-Minisalami-Schwein-Vakuum-21x80g-1680g_1920x1920.png?ts=1784289464",
    shopUrl: "https://www.lebensmittel-sonderposten.de/Berg-Buben-Minisalami-21x80g-1.680g-MHD-13.10.26/SW644011",
    soldOut: false,
    name: { de: "Minisalami · 21 × 80 g", en: "Mini salami · 21 × 80 g" },
    category: { de: "Snack", en: "Snack" },
    excerpt: {
      de: "Luftgetrocknete Minisalami vom Schwein – der schnelle, herzhafte Snack für unterwegs.",
      en: "Air-dried pork mini salami – the quick, hearty snack for on the go.",
    },
    facts: minisalamiFacts,
    body: minisalamiBody,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}