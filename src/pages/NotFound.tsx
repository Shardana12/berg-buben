import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { withLocale } from "../lib/paths";
import Seo from "../components/Seo";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <>
      <Seo lang={lang} title={t("notFound.title")} description={t("notFound.text")} path="/" />
      <section className="section legal">
        <div className="wrap wrap--narrow">
          <h1 className="section__title">{t("notFound.title")}</h1>
          <p className="legal__note">{t("notFound.text")}</p>
          <Link to={withLocale(lang, "/")} className="btn btn--primary">
            {t("notFound.cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
