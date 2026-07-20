import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { brand } from "../config/site";
import { withLocale } from "../lib/paths";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;
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