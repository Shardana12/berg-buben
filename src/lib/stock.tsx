import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { products } from "../content/products";
import type { Product } from "../content/products";

function productNumber(product: Product): string | null {
  const match = product.shopUrl.match(/\/(SW\d+)(?:[/?#]|$)/i);
  return match ? match[1] : null;
}

type StockMap = Record<string, boolean>;

const StockContext = createContext<StockMap>({});

export function StockProvider({ children }: { children: ReactNode }) {
  const [stock, setStock] = useState<StockMap>({});

  useEffect(() => {
    const numbers = products
      .map(productNumber)
      .filter((value): value is string => value !== null);
    if (numbers.length === 0) {
      return;
    }

    let active = true;
    const url = `/api/stock?numbers=${encodeURIComponent(numbers.join(","))}`;
    fetch(url)
      .then((response) => (response.ok ? response.json() : {}))
      .then((data) => {
        if (active) {
          setStock(data as StockMap);
        }
      })
      .catch(() => {});

    return () => {
      active = false;
    };
  }, []);

  return <StockContext.Provider value={stock}>{children}</StockContext.Provider>;
}

export function useSoldOut(product: Product): boolean {
  const stock = useContext(StockContext);
  const number = productNumber(product);
  if (number && number in stock) {
    return stock[number];
  }
  return product.soldOut ?? false;
}