import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../i18n";
import type { Product } from "../content/products";
import { withLocale } from "../lib/paths";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as Locale;
  const to = withLocale(lang, `/produkt/${product.slug}`);

  return (
    <article className="card">
      <Link to={to} className="card__media">
        <ProductImage src={product.imageUrl} alt={product.name[lang]} />
        <span className="card__weight">{product.weight}</span>
      </Link>
      <div className="card__body">
        <p className="eyebrow">{product.category[lang]}</p>
        <h3 className="card__title">
          <Link to={to}>{product.name[lang]}</Link>
        </h3>
        <p className="card__excerpt">{product.excerpt[lang]}</p>
        <Link to={to} className="link-arrow">
          {t("actions.readStory")} →
        </Link>
      </div>
    </article>
  );
}
