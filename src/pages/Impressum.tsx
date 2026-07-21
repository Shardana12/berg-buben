import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import Seo from "../components/Seo";

export default function Impressum() {
  const { i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <>
      <Seo lang={lang} title="Impressum" description="Impressum – Berg Buben, Hapex GmbH, Gießen." path="/impressum" />
      <section className="section legal">
        <div className="wrap wrap--narrow">
          <h1 className="section__title">Impressum</h1>

          <p>Verantwortlich für diese Website:</p>

          <address className="legal__address">
            <strong>Hapex GmbH</strong>
            <br />
            vertretungsberechtigt: Helena Freilinger
            <br />
            Marburger Straße 127
            <br />
            35396 Gießen
          </address>

          <p>
            Telefon: +49 6406 837380
            <br />
            Fax: +49 6406 83738-99
            <br />
            E-Mail: info@lebensmittel-sonderposten.de
          </p>

          <p>
            Registergericht: Amtsgericht Gießen, HRB 8478
            <br />
            Umsatzsteuer-Identifikationsnummer: DE 143596339
          </p>

          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als
            Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
            verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen.
          </p>

          <h2>Haftung für Links</h2>
          <p>
            Diese Website enthält Verknüpfungen zu Websites Dritter („externe Links"), insbesondere zu
            unserem Online-Shop. Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Zum
            Zeitpunkt der Verknüpfung waren keine Rechtsverstöße erkennbar. Auf die aktuelle und zukünftige
            Gestaltung sowie auf die Inhalte der verknüpften Seiten haben wir keinen Einfluss. Bei Bekannt-
            werden von Rechtsverstößen entfernen wir derartige Links unverzüglich.
          </p>

          <h2>Urheberrecht</h2>
          <p>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und
            Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene
            Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
            Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung,
            Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten. Die unerlaubte Vervielfältigung oder
            Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet. Kopien und Downloads für
            den persönlichen, privaten und nicht kommerziellen Gebrauch sind erlaubt.
          </p>
        </div>
      </section>
    </>
  );
}