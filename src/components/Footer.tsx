import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { brand, hero, tagline } from "../config/site";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div className="site-footer__brand">
          <span className="wordmark wordmark--footer">
            <span className="wordmark__peak">▲</span>
            <span className="wordmark__name">{brand}</span>
          </span>
          <p>{tagline[lang]}</p>
          <a className="link-arrow" href={hero.ctaHref} target="_blank" rel="noopener noreferrer">
            {t("footer.shopLabel")} →
          </a>
        </div>
        <nav className="site-footer__links">
          <a href="https://www.lebensmittel-sonderposten.de/Information/Impressum/" target="_blank" rel="noopener noreferrer">
            {t("footer.imprint")}
          </a>
          <a href="https://www.lebensmittel-sonderposten.de/Information/Datenschutz/" target="_blank" rel="noopener noreferrer">
            {t("footer.privacy")}
          </a>
        </nav>
      </div>
      <div className="wrap site-footer__base">
        <span>© {year} {brand}. {t("footer.rights")}</span>
      </div>
    </footer>
  );
}