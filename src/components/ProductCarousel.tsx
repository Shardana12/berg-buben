import { useEffect, useRef } from "react";
import { useProducts } from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  const products = useProducts();
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const target = useRef(0);
  const paused = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const frame = () => {
      const half = track.scrollWidth / 2;
      if (!paused.current && !reduce) {
        target.current += 0.6;
      }
      offset.current += (target.current - offset.current) * 0.12;
      if (half > 0) {
        if (offset.current <= -half) {
          offset.current += half;
          target.current += half;
        } else if (offset.current > 0) {
          offset.current -= half;
          target.current -= half;
        }
      }
      track.style.transform = `translate3d(${offset.current}px, 0, 0)`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (dir: number) => {
    target.current -= dir * 264;
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
        className="carousel__viewport"
        onMouseEnter={() => {
          paused.current = true;
        }}
        onMouseLeave={() => {
          paused.current = false;
        }}
      >
        <div className="grid" ref={trackRef}>
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
          {products.map((p) => (
            <ProductCard key={`dup-${p.slug}`} product={p} />
          ))}
        </div>
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