import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import { getProduct } from "../content/products";
import { withLocale } from "../lib/paths";
import Seo from "../components/Seo";
import BlockText from "../components/BlockText";
import ProductImage from "../components/ProductImage";
import NotFound from "./NotFound";

export default function ProductStory() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return <NotFound />;
  }

  const published = new Intl.DateTimeFormat(lang === "de" ? "de-DE" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(product.publishedAt));

  return (
    <>
      <Seo
        lang={lang}
        title={product.name[lang]}
        description={product.excerpt[lang]}
        path={`/produkt/${product.slug}`}
      />
      <article className="story">
        <div className="wrap story__head">
          <Link to={withLocale(lang, "/") + "#sorten"} className="link-back">
            ← {t("actions.back")}
          </Link>
          <p className="eyebrow">
            {product.category[lang]} · {published}
          </p>
          <h1 className="story__title">{product.name[lang]}</h1>
          <p className="story__lead">{product.excerpt[lang]}</p>
        </div>

        <div className="wrap story__grid">
          <div className="story__main">
            <ProductImage src={product.imageUrl} alt={product.name[lang]} className="story__image" />
            <BlockText blocks={product.body[lang]} />
          </div>

          <aside className="story__aside">
            <div className="factsheet">
              <p className="factsheet__label">{t("labels.steckbrief")}</p>
              <dl>
                {product.facts[lang].map((f) => (
                  <div className="factsheet__row" key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
                <div className="factsheet__row">
                  <dt>{t("labels.weight")}</dt>
                  <dd>{product.weight}</dd>
                </div>
              </dl>
              <a
                className="btn btn--primary btn--block"
                href={product.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("actions.buyInShop")}
              </a>
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
