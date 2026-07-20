import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { hero } from "../config/site";
import Seal from "./Seal";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <section className="hero">
      <div className="wrap hero__inner">
        <div className="hero__text">
          <p className="eyebrow">{hero.eyebrow[lang]}</p>
          <h1 className="hero__title">{hero.title[lang]}</h1>
          <p className="hero__subtitle">{hero.subtitle[lang]}</p>
          <a className="btn btn--primary" href={hero.ctaHref} target="_blank" rel="noopener noreferrer">
            {t("actions.buyInShop")}
          </a>
        </div>
        <div className="hero__seal">
          <Seal caption={t("seal.text")} />
        </div>
      </div>
    </section>
  );
}
