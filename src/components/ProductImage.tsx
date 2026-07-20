import { useState } from "react";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ProductImage({ src, alt, className }: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`product-image product-image--placeholder ${className ?? ""}`}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      className={`product-image ${className ?? ""}`}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
