import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { tagline } from "../config/site";
import { products } from "../content/products";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <>
      <Seo lang={lang} title={tagline[lang]} description={tagline[lang]} path="/" />
      <Hero />
      <section id="sorten" className="section">
        <div className="wrap">
          <p className="eyebrow">{t("home.sortenEyebrow")}</p>
          <h2 className="section__title">{t("home.sortenTitle")}</h2>
          <div className="grid">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
