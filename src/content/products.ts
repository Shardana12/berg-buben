import type { Locale } from "../i18n";

export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul"; items: string[] };

export interface Fact {
  label: string;
  value: string;
}

export interface Nutrient {
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
  zutaten?: Record<Locale, string>;
  naehrwerte?: Record<Locale, Nutrient[]>;
  hersteller?: string;
}

const landjaegerFacts: Record<Locale, Fact[]> = {
  de: [
    { label: "Fleisch", value: "Schwein & Rohschinken" },
    { label: "Form", value: "Eckig, paarweise" },
    { label: "Verfahren", value: "Geräuchert, luftgetrocknet" },
    { label: "Würze", value: "u. a. mit Senf" },
    { label: "Haltbarkeit", value: "Ohne Kühlung" },
    { label: "Herkunft", value: "Schwarzwald, Gengenbach" },
  ],
  en: [
    { label: "Meat", value: "Pork & raw ham" },
    { label: "Shape", value: "Square, in pairs" },
    { label: "Process", value: "Smoked, air-dried" },
    { label: "Seasoning", value: "incl. mustard" },
    { label: "Keeps", value: "No fridge needed" },
    { label: "Origin", value: "Black Forest, Gengenbach" },
  ],
};

const landjaegerBody: Record<Locale, Block[]> = {
  de: [
    { type: "p", text: "Landjäger sind die ultimativen „Überlebenskünstler“ unter den Würsten. Man kann sie sich als eine Mischung aus einer Salami und einer festen Rohwurst vorstellen, die speziell für den Transport ohne Kühlung entwickelt wurde." },
    { type: "h", text: "Was macht sie aus?" },
    { type: "ul", items: [
      "Form & Aussehen: Das markanteste Merkmal ist die eckige Form. Sie werden paarweise verkauft und sind dunkelrot bis fast schwarzbraun.",
      "Zutaten: Der Berg Buben Landjäger wird aus Schweinefleisch und geräuchertem Rohschinken hergestellt und unter anderem mit Senf gewürzt. Aus 122 g Schweinefleisch entstehen 100 g Landjäger.",
      "Herstellung: Die Wurst wird erst gepresst (daher die eckige Form), dann geräuchert und schließlich an der Luft getrocknet. Durch diesen Prozess verliert sie Wasser und wird sehr fest.",
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
      "Shape & appearance: the most distinctive trait is the square form. They are sold in pairs and are dark red to almost blackish-brown.",
      "Ingredients: the Berg Buben Landjäger is made from pork and smoked raw ham, seasoned with mustard among other spices. It takes 122 g of pork to make 100 g of Landjäger.",
      "How it is made: the sausage is first pressed (hence the square shape), then smoked and finally air-dried. The process draws out water and makes it very firm.",
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

const landjaegerZutaten: Record<Locale, string> = {
  de: "Schweinefleisch, Speck, Rohschinken (geräuchert), Speisesalz, Gewürze (u. a. SENF), Glucosesirup, Dextrose, Gewürze, Gewürzextrakte, Antioxidationsmittel: E301, Säuerungsmittel: E575, Geschmacksverstärker: E621, Konservierungsstoffe: E250, E252, essbare Hülle aus Rinderkollagen, Rauch. Kann Spuren von LAKTOSE und EI enthalten.",
  en: "Pork, bacon, raw ham (smoked), salt, spices (incl. MUSTARD), glucose syrup, dextrose, spices, spice extracts, antioxidant: E301, acidity regulator: E575, flavour enhancer: E621, preservatives: E250, E252, edible casing of beef collagen, smoke. May contain traces of MILK and EGG.",
};

const landjaegerNaehrwerte: Record<Locale, Nutrient[]> = {
  de: [
    { label: "Brennwert", value: "2191 kJ / 511 kcal" },
    { label: "Fett", value: "43,0 g" },
    { label: "davon gesättigte Fettsäuren", value: "20,5 g" },
    { label: "Kohlenhydrate", value: "1,5 g" },
    { label: "davon Zucker", value: "1,0 g" },
    { label: "Eiweiß", value: "20,5 g" },
    { label: "Salz", value: "4,0 g" },
  ],
  en: [
    { label: "Energy", value: "2191 kJ / 511 kcal" },
    { label: "Fat", value: "43.0 g" },
    { label: "of which saturates", value: "20.5 g" },
    { label: "Carbohydrate", value: "1.5 g" },
    { label: "of which sugars", value: "1.0 g" },
    { label: "Protein", value: "20.5 g" },
    { label: "Salt", value: "4.0 g" },
  ],
};

const landjaegerHersteller = "Schwarzwaldhaus Schinken- und Wurstdelikatessen, 77723 Gengenbach";

const minisalamiFacts: Record<Locale, Fact[]> = {
  de: [
    { label: "Art", value: "Minisalami" },
    { label: "Fleisch", value: "Schwein" },
    { label: "Verfahren", value: "Gereift, kalt geräuchert" },
    { label: "Verpackung", value: "Einzeln vakuumiert" },
    { label: "Stück", value: "21 × 80 g" },
    { label: "Haltbarkeit", value: "Ohne Kühlung" },
  ],
  en: [
    { label: "Type", value: "Mini salami" },
    { label: "Meat", value: "Pork" },
    { label: "Process", value: "Matured, cold-smoked" },
    { label: "Packaging", value: "Individually vacuum-sealed" },
    { label: "Pieces", value: "21 × 80 g" },
    { label: "Keeps", value: "No fridge needed" },
  ],
};

const minisalamiBody: Record<Locale, Block[]> = {
  de: [
    { type: "p", text: "Die Minisalami vom Schwein ist der handliche Klassiker für zwischendurch: kalt geräuchert, herzhaft gewürzt und einzeln vakuumiert." },
    { type: "h", text: "Perfekt für unterwegs" },
    { type: "p", text: "Ob Wanderung, Büro oder schnelle Brotzeit – die Minisalami braucht keine Kühlung und ist sofort snackbereit." },
    { type: "ul", items: [
      "Aus Schweinefleisch, würzig gereift",
      "Einzeln vakuumverpackt, 21 Stück",
      "Ohne Kühlung haltbar",
    ] },
  ],
  en: [
    { type: "p", text: "The pork mini salami is the handy classic for in between: cold-smoked, heartily spiced and individually vacuum-sealed." },
    { type: "h", text: "Perfect on the go" },
    { type: "p", text: "Whether hiking, at the office or for a quick bite – the mini salami needs no fridge and is ready to snack straight away." },
    { type: "ul", items: [
      "Made from pork, matured with spices",
      "Individually vacuum-packed, 21 pieces",
      "Keeps without refrigeration",
    ] },
  ],
};

const minisalamiZutaten: Record<Locale, string> = {
  de: "Schweinefleisch, Speisesalz, Gewürze (enthält SENF), Rote Bete, Dextrose, Glukosesirup, Aroma, Antioxidationsmittel: Natriumascorbat (E 301), Konservierungsstoff: Natriumnitrit (E 250), Reifungskulturen, Rauch. Kann Spuren von LAKTOSE enthalten.",
  en: "Pork, salt, spices (contains MUSTARD), beetroot, dextrose, glucose syrup, flavouring, antioxidant: sodium ascorbate (E 301), preservative: sodium nitrite (E 250), maturing cultures, smoke. May contain traces of MILK.",
};

const minisalamiNaehrwerte: Record<Locale, Nutrient[]> = {
  de: [
    { label: "Brennwert", value: "1664 kJ / 402 kcal" },
    { label: "Fett", value: "34,5 g" },
    { label: "davon gesättigte Fettsäuren", value: "12,8 g" },
    { label: "Kohlenhydrate", value: "1,5 g" },
    { label: "davon Zucker", value: "0,7 g" },
    { label: "Eiweiß", value: "21,1 g" },
    { label: "Salz", value: "2,7 g" },
  ],
  en: [
    { label: "Energy", value: "1664 kJ / 402 kcal" },
    { label: "Fat", value: "34.5 g" },
    { label: "of which saturates", value: "12.8 g" },
    { label: "Carbohydrate", value: "1.5 g" },
    { label: "of which sugars", value: "0.7 g" },
    { label: "Protein", value: "21.1 g" },
    { label: "Salt", value: "2.7 g" },
  ],
};

const minisalamiHersteller = "Hergestellt für Hapex GmbH, Marburger Straße 127, 35396 Gießen, Deutschland";

export const products: Product[] = [
  {
    slug: "landjaeger-2er",
    weight: "80 g · 2 Stück",
    publishedAt: "2026-03-23",
    imageUrl: "https://www.lebensmittel-sonderposten.de/thumbnail/1f/b9/67/1784622876/Schwarzwlder%20Landjger%20geruchert%202-MP_800x800.png?ts=1784622877",
    shopUrl: "https://www.lebensmittel-sonderposten.de/Schwarzwaelder-Landjaeger-geraeuchert-2-Stueck-MHD-12.08.26/SW641819",
    soldOut: false,
    name: { de: "Landjäger · 2 Stück", en: "Landjäger · 2 pieces" },
    category: { de: "Einzelpack", en: "Single pack" },
    excerpt: {
      de: "Das klassische Paar zum Probieren: geräucherte Landjäger aus Schweinefleisch und Rohschinken.",
      en: "The classic pair to try: smoked Landjäger made from pork and raw ham.",
    },
    facts: landjaegerFacts,
    body: landjaegerBody,
    zutaten: landjaegerZutaten,
    naehrwerte: landjaegerNaehrwerte,
    hersteller: landjaegerHersteller,
  },
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
      de: "Das Original im 21er-Display: geräucherte Landjäger aus Schweinefleisch und Rohschinken – ohne Kühlung haltbar.",
      en: "The original in a 21-piece display: smoked Landjäger from pork and raw ham – keeps with no fridge.",
    },
    facts: landjaegerFacts,
    body: landjaegerBody,
    zutaten: landjaegerZutaten,
    naehrwerte: landjaegerNaehrwerte,
    hersteller: landjaegerHersteller,
  },
  {
    slug: "landjaeger-50x-80g",
    weight: "50 × 80 g · 4 kg",
    publishedAt: "2026-03-23",
    imageUrl: "https://www.lebensmittel-sonderposten.de/thumbnail/59/7f/70/1773674686/Berg_Buben_schwarzwaldhaus-50x-80g-4000g_front_1920x1920.jpg?ts=1773674690",
    shopUrl: "https://www.lebensmittel-sonderposten.de/50x-Schwarzwaelder-Berg-Buben-Landjaeger-geraeuchert-2er-80g-4000g-MHD-12.09.26/SW642827",
    soldOut: false,
    name: { de: "Landjäger · 50 × 80 g", en: "Landjäger · 50 × 80 g" },
    category: { de: "Großpackung", en: "Bulk pack" },
    excerpt: {
      de: "Der herzhafte Schwarzwald-Snack im 4-kg-Karton – ideal für Kiosk, Kantine und Vorrat.",
      en: "The hearty Black Forest snack in a 4 kg box – ideal for kiosk, canteen and stocking up.",
    },
    facts: landjaegerFacts,
    body: landjaegerBody,
    zutaten: landjaegerZutaten,
    naehrwerte: landjaegerNaehrwerte,
    hersteller: landjaegerHersteller,
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
    zutaten: landjaegerZutaten,
    naehrwerte: landjaegerNaehrwerte,
    hersteller: landjaegerHersteller,
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
      de: "Die Gastronomie-Menge: 16 kg geräucherte Landjäger aus Schweinefleisch und Rohschinken.",
      en: "The catering quantity: 16 kg of smoked Landjäger from pork and raw ham.",
    },
    facts: landjaegerFacts,
    body: landjaegerBody,
    zutaten: landjaegerZutaten,
    naehrwerte: landjaegerNaehrwerte,
    hersteller: landjaegerHersteller,
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
      de: "Kalt geräucherte Minisalami vom Schwein – der schnelle, herzhafte Snack für unterwegs.",
      en: "Cold-smoked pork mini salami – the quick, hearty snack for on the go.",
    },
    facts: minisalamiFacts,
    body: minisalamiBody,
    zutaten: minisalamiZutaten,
    naehrwerte: minisalamiNaehrwerte,
    hersteller: minisalamiHersteller,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}