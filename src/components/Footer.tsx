import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { brand, hero, tagline } from "../config/site";
import { withLocale } from "../lib/paths";

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
          <Link to={withLocale(lang, "/impressum")}>{t("footer.imprint")}</Link>
          <Link to={withLocale(lang, "/datenschutz")}>{t("footer.privacy")}</Link>
        </nav>
      </div>
      <div className="wrap site-footer__base">
        <span>© {year} {brand}. {t("footer.rights")}</span>
      </div>
    </footer>
  );
}
