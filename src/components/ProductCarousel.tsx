import { useEffect, useRef } from "react";
import { products } from "../content/products";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const step = () => {
      if (track) {
        if (!pausedRef.current) {
          track.scrollLeft -= 0.5;
        }
        const half = track.scrollWidth / 2;
        if (half > 0) {
          if (track.scrollLeft <= 0) {
            track.scrollLeft += half;
          } else if (track.scrollLeft >= half) {
            track.scrollLeft -= half;
          }
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (dir: number) => {
    const track = trackRef.current;
    if (track) {
      track.scrollBy({ left: dir * 264, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel">
      <button
        type="button"
        className="carousel__arrow carousel__arrow--prev"
        aria-label="Zurück"
        onClick={() => nudge(-1)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M15 5 L8 12 L15 19" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="grid"
        ref={trackRef}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
        {products.map((p) => (
          <ProductCard key={`dup-${p.slug}`} product={p} />
        ))}
      </div>

      <button
        type="button"
        className="carousel__arrow carousel__arrow--next"
        aria-label="Weiter"
        onClick={() => nudge(1)}
      >
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path d="M9 5 L16 12 L9 19" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}