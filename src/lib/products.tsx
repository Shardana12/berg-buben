import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { products as staticProducts } from "../content/products";
import type { Product, Block } from "../content/products";
import { sanity } from "./sanity";

type PtChild = { text?: string };
type PtBlock = { _type?: string; style?: string; listItem?: string; children?: PtChild[] };
type Loc = { de?: string; en?: string };
type SanityFact = { label?: Loc; value?: Loc };
type SanityNutrient = { label?: Loc; value?: string };

type SanityProduct = {
  slug?: string;
  name?: Loc;
  category?: Loc;
  excerpt?: Loc;
  weight?: string;
  imageUrl?: string;
  shopUrl?: string;
  soldOut?: boolean;
  description?: { de?: PtBlock[]; en?: PtBlock[] };
  facts?: SanityFact[];
  naehrwerte?: SanityNutrient[];
  zutaten?: Loc;
  hersteller?: string;
  _createdAt?: string;
};

const QUERY =
  '*[_type == "product"]{ "slug": slug.current, name, category, excerpt, weight, imageUrl, shopUrl, soldOut, description, facts, naehrwerte, zutaten, hersteller, _createdAt }';

function portableToBlocks(input?: PtBlock[]): Block[] {
  if (!Array.isArray(input)) {
    return [];
  }
  const blocks: Block[] = [];
  let bullets: string[] = [];

  const flush = () => {
    if (bullets.length > 0) {
      blocks.push({ type: "ul", items: bullets });
      bullets = [];
    }
  };

  for (const block of input) {
    if (!block || block._type !== "block") {
      continue;
    }
    const text = Array.isArray(block.children)
      ? block.children.map((child) => child?.text || "").join("")
      : "";

    if (block.listItem === "bullet") {
      if (text.trim()) {
        bullets.push(text);
      }
      continue;
    }

    flush();
    if (!text.trim()) {
      continue;
    }
    if (block.style === "h3" || block.style === "h4") {
      blocks.push({ type: "h", text });
    } else {
      blocks.push({ type: "p", text });
    }
  }

  flush();
  return blocks;
}

function loc(value?: Loc): { de: string; en: string } {
  const de = value?.de || "";
  return { de, en: value?.en || de };
}

function mapProduct(doc: SanityProduct): Product {
  const facts = (doc.facts || []).filter((f) => f?.label?.de || f?.value?.de);
  const nutrients = doc.naehrwerte || [];

  return {
    slug: doc.slug || "",
    weight: doc.weight || "",
    publishedAt: doc._createdAt || new Date().toISOString(),
    imageUrl: doc.imageUrl || "",
    shopUrl: doc.shopUrl || "",
    soldOut: doc.soldOut ?? false,
    name: loc(doc.name),
    category: loc(doc.category),
    excerpt: loc(doc.excerpt),
    facts: {
      de: facts.map((f) => ({ label: f.label?.de || "", value: f.value?.de || "" })),
      en: facts.map((f) => ({
        label: f.label?.en || f.label?.de || "",
        value: f.value?.en || f.value?.de || "",
      })),
    },
    body: {
      de: portableToBlocks(doc.description?.de),
      en: portableToBlocks(
        doc.description?.en && doc.description.en.length > 0 ? doc.description.en : doc.description?.de
      ),
    },
    zutaten: doc.zutaten?.de || doc.zutaten?.en ? loc(doc.zutaten) : undefined,
    naehrwerte:
      nutrients.length > 0
        ? {
            de: nutrients.map((n) => ({ label: n.label?.de || "", value: n.value || "" })),
            en: nutrients.map((n) => ({ label: n.label?.en || n.label?.de || "", value: n.value || "" })),
          }
        : undefined,
    hersteller: doc.hersteller || undefined,
  };
}

type ProductsState = { products: Product[]; loaded: boolean };

const ProductsContext = createContext<ProductsState>({ products: staticProducts, loaded: false });

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [extra, setExtra] = useState<Product[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let active = true;
    sanity
      .fetch<SanityProduct[]>(QUERY)
      .then((docs) => {
        if (!active) {
          return;
        }
        const staticSlugs = new Set(staticProducts.map((p) => p.slug));
        const mapped = (docs || [])
          .filter((doc) => doc.slug && !staticSlugs.has(doc.slug))
          .map(mapProduct);
        setExtra(mapped);
        setLoaded(true);
      })
      .catch(() => {
        if (active) {
          setLoaded(true);
        }
      });
    return () => {
      active = false;
    };
  }, []);

  const products = useMemo(() => [...staticProducts, ...extra], [extra]);

  return <ProductsContext.Provider value={{ products, loaded }}>{children}</ProductsContext.Provider>;
}

export function useProducts(): Product[] {
  return useContext(ProductsContext).products;
}

export function useProductBySlug(slug: string | undefined): {
  product: Product | undefined;
  loaded: boolean;
} {
  const { products, loaded } = useContext(ProductsContext);
  const product = slug ? products.find((p) => p.slug === slug) : undefined;
  return { product, loaded };
}
