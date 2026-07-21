import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import Seo from "../components/Seo";

export default function Datenschutz() {
  const { i18n } = useTranslation();
  const lang = i18n.language as Locale;

  return (
    <>
      <Seo lang={lang} title="Datenschutz" description="Datenschutzerklärung – Berg Buben, Hapex GmbH." path="/datenschutz" />
      <section className="section legal">
        <div className="wrap wrap--narrow">
          <h1 className="section__title">Datenschutzerklärung</h1>

          <p>Verantwortlich im Sinne der Datenschutz-Grundverordnung (DSGVO):</p>

          <address className="legal__address">
            <strong>Hapex GmbH</strong>
            <br />
            vertretungsberechtigt: Helena Freilinger
            <br />
            Marburger Straße 127
            <br />
            35396 Gießen
            <br />
            E-Mail: info@lebensmittel-sonderposten.de
          </address>

          <p>
            Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer
            personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben noch für einen
            Vertragsabschluss erforderlich. Sie sind zur Bereitstellung nicht verpflichtet. „Personenbezogene
            Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche
            Person beziehen.
          </p>

          <h2>Server-Logfiles und Hosting</h2>
          <p>
            Sie können diese Website besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Zugriff
            werden Nutzungsdaten durch Ihren Internetbrowser übermittelt und in Protokolldaten
            (Server-Logfiles) gespeichert. Dazu gehören z. B. Name der aufgerufenen Seite, Datum und Uhrzeit
            des Abrufs, übertragene Datenmenge, der anfragende Provider sowie die IP-Adresse. Diese Daten
            dienen ausschließlich der Gewährleistung eines störungsfreien Betriebs und der Verbesserung
            unseres Angebots.
          </p>
          <p>
            Diese Website wird bei der Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA) gehostet.
            Beim Aufruf der Seite verarbeitet der Hostingdienstleister die genannten Server-Logfiles. Dabei
            können Daten in die USA übermittelt werden; als geeignete Garantie dienen Standardvertragsklauseln
            bzw. eine Zertifizierung unter dem EU-U.S. Data Privacy Framework. Rechtsgrundlage ist Art. 6
            Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und effizienten Betrieb der Website).
          </p>

          <h2>Schriftarten</h2>
          <p>
            Die auf dieser Website verwendeten Schriftarten werden lokal von unserem Server ausgeliefert.
            Es werden dabei keine Verbindungen zu Servern Dritter (z. B. Google Fonts) hergestellt und keine
            Daten an Dritte übertragen.
          </p>

          <h2>Cookies</h2>
          <p>
            Diese Website setzt keine eigenen Tracking- oder Marketing-Cookies und verwendet keine
            Analyse- oder Werbedienste.
          </p>

          <h2>Externe Links</h2>
          <p>
            Diese Website enthält Links zu unserem Online-Shop www.lebensmittel-sonderposten.de sowie ggf.
            zu weiteren externen Websites. Für die Inhalte und den Datenschutz dieser externen Seiten sind
            ausschließlich deren Betreiber verantwortlich.
          </p>

          <h2>Rechte der betroffenen Person</h2>
          <p>
            Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte nach Art. 15 bis 20
            DSGVO zu: Recht auf Auskunft, auf Berichtigung, auf Löschung, auf Einschränkung der Verarbeitung
            sowie auf Datenübertragbarkeit. Außerdem steht Ihnen nach Art. 21 Abs. 1 DSGVO ein
            Widerspruchsrecht gegen Verarbeitungen zu, die auf Art. 6 Abs. 1 lit. f DSGVO beruhen. Zur
            Ausübung Ihrer Rechte wenden Sie sich bitte an die im Impressum genannten Kontaktdaten.
          </p>

          <h2>Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben gemäß Art. 77 DSGVO das Recht, sich bei einer Aufsichtsbehörde zu beschweren, wenn Sie
            der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.
          </p>
        </div>
      </section>
    </>
  );
}