import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import Seo from "../components/Seo";

export default function Datenschutz() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <>
      <Seo lang={lang} title={t("legal.privacyTitle")} description={t("legal.privacyTitle")} path="/datenschutz" />
      <section className="section legal">
        <div className="wrap wrap--narrow">
          <h1 className="section__title">{t("legal.privacyTitle")}</h1>
          <p className="legal__note">{t("legal.placeholder")}</p>
        </div>
      </section>
    </>
  );
}
