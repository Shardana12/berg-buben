import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { brand } from "../config/site";
import { withLocale } from "../lib/paths";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link to={withLocale(lang, "/")} className="wordmark" aria-label={brand}>
          <span className="wordmark__peak">▲</span>
          <span className="wordmark__name">{brand}</span>
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
