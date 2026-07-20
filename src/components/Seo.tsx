import { Helmet } from "react-helmet-async";
import type { Locale } from "../i18n";
import { siteUrl, brand } from "../config/site";
import { withLocale } from "../lib/paths";

interface SeoProps {
  lang: Locale;
  title: string;
  description: string;
  path: string;
}

export default function Seo({ lang, title, description, path }: SeoProps) {
  const fullTitle = `${title} · ${brand}`;
  const canonical = siteUrl + withLocale(lang, path);
  const deUrl = siteUrl + withLocale("de", path);
  const enUrl = siteUrl + withLocale("en", path);

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="de" href={deUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={deUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === "de" ? "de_DE" : "en_GB"} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
