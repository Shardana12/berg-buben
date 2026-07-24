import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProductStory from "./pages/ProductStory";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import { StockProvider } from "./lib/stock";
import { ProductsProvider } from "./lib/products";

export default function App() {
  return (
    <ProductsProvider>
      <StockProvider>
        <Routes>
          <Route path="/" element={<Layout lang="de" />}>
            <Route index element={<Home />} />
            <Route path="produkt/:slug" element={<ProductStory />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/en" element={<Layout lang="en" />}>
            <Route index element={<Home />} />
            <Route path="produkt/:slug" element={<ProductStory />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<Datenschutz />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StockProvider>
    </ProductsProvider>
  );
}