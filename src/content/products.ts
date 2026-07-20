import type { Locale } from "../i18n";
import { shopBaseUrl } from "../config/site";

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
  name: Record<Locale, string>;
  category: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  facts: Record<Locale, Fact[]>;
  body: Record<Locale, Block[]>;
}

const landjaeger: Product = {
  slug: "landjaeger-berg-buben-2er-80g",
  weight: "80 g · 2 × 40 g",
  publishedAt: "2026-03-23",
  imageUrl: `${shopBaseUrl}/media/PLATZHALTER-landjaeger-berg-buben.jpg`,
  shopUrl: `${shopBaseUrl}/landjaeger-berg-buben-2er-80g`,
  name: {
    de: "Landjäger Berg Buben 2er 80g",
    en: "Landjäger Berg Buben 2-pack 80g",
  },
  category: { de: "Foodblog", en: "Food blog" },
  excerpt: {
    de: "Die ultimativen „Überlebenskünstler“ unter den Würsten: eckig gepresst, geräuchert und luftgetrocknet – haltbar über Wochen, ganz ohne Kühlung.",
    en: "The ultimate survival artists among sausages: pressed square, smoked and air-dried – they keep for weeks with no fridge at all.",
  },
  facts: {
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
  },
  body: {
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
  },
};

export const products: Product[] = [landjaeger];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
