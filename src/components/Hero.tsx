import type { MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { hero } from "../config/site";

function handleTilt(e: MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.transform = `perspective(1200px) rotateY(${px * 10}deg) rotateX(${py * -10}deg)`;
}

function resetTilt(e: MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg)";
}

export default function Hero() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <section className="hero">
      <div className="hero__rays" aria-hidden="true" />
      <div className="hero__badge-stage" aria-hidden="true">
        <div className="hero__badge" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
          <img className="hero__badge-img" src="/berg-buben-logo.png" alt="" />
        </div>
      </div>
      <div className="hero__inner">
        <div className="hero__text">
          <p className="eyebrow">{hero.eyebrow[lang]}</p>
          <h1 className="hero__title">{hero.title[lang]}</h1>
          <p className="hero__subtitle">{hero.subtitle[lang]}</p>
          <a className="btn btn--primary" href={hero.ctaHref} target="_blank" rel="noopener noreferrer">
            {t("actions.buyInShop")}
          </a>
        </div>
      </div>
    </section>
  );
}