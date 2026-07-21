import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { tagline } from "../config/site";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import ProductCarousel from "../components/ProductCarousel";

export default function Home() {
  const { i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <>
      <Seo lang={lang} title={tagline[lang]} description={tagline[lang]} path="/" />
      <Hero />
      <section id="sorten" className="section">
        <div className="wrap">
          <ProductCarousel />
        </div>
      </section>
    </>
  );
}