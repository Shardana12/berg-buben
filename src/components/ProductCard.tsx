import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import type { Product } from "../content/products";
import { withLocale } from "../lib/paths";
import ProductImage from "./ProductImage";
import BlockText from "./BlockText";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;
  const to = withLocale(lang, `/produkt/${product.slug}`);

  return (
    <Link to={to} className="poster" aria-label={product.name[lang]}>
      <div className="poster__media">
        <ProductImage src={product.imageUrl} alt={product.name[lang]} />
        <span className="poster__weight">{product.weight}</span>
        <div className="poster__cap">
          <p className="eyebrow">{product.category[lang]}</p>
          <h3>{product.name[lang]}</h3>
        </div>
      </div>
      <div className="poster__panel">
        <p className="eyebrow">{product.category[lang]}</p>
        <h3 className="poster__title">{product.name[lang]}</h3>
        <div className="poster__scroll">
          <div className="poster__track">
            <BlockText blocks={product.body[lang]} />
            <div aria-hidden="true">
              <BlockText blocks={product.body[lang]} />
            </div>
          </div>
        </div>
        <div className="poster__cta">
          <span>{t("actions.readStory")}</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  );
}