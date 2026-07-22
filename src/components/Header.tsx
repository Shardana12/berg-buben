import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { brand, ticker } from "../config/site";
import { withLocale } from "../lib/paths";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;
  const words = ticker[lang];
  const strip = Array.from({ length: words.length * 4 }, (_, i) => words[i % words.length]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 90 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${hidden ? "is-hidden" : ""}`}>
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          <div className="ticker__group">
            {strip.map((word, i) => (
              <span className="ticker__item" key={`a-${i}`}>{word}</span>
            ))}
          </div>
          <div className="ticker__group">
            {strip.map((word, i) => (
              <span className="ticker__item" key={`b-${i}`}>{word}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap site-header__inner">
        <Link to={withLocale(lang, "/")} className="brand-logo" aria-label={brand}>
          <img src="/berg-buben-logo.png" alt={brand} />
        </Link>
        <nav className="site-nav">
          <Link to={withLocale(lang, "/")}>{t("nav.home")}</Link>
          <Link to={withLocale(lang, "/") + "#sorten"}>{t("nav.sorten")}</Link>
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}