import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { contact } from "../config/site";
import Seo from "../components/Seo";

export default function Impressum() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <>
      <Seo lang={lang} title={t("legal.imprintTitle")} description={t("legal.imprintTitle")} path="/impressum" />
      <section className="section legal">
        <div className="wrap wrap--narrow">
          <h1 className="section__title">{t("legal.imprintTitle")}</h1>
          <p className="legal__note">{t("legal.placeholder")}</p>
          <address className="legal__address">
            {contact.company}
            <br />
            {contact.owner}
            <br />
            {contact.street}
            <br />
            {contact.city}
            <br />
            <br />
            {contact.email}
            <br />
            {contact.phone}
          </address>
        </div>
      </section>
    </>
  );
}
