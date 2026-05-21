import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ProductModal from "./components/ProductModal";
import Technology from "./components/Technology";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import DemoForm from "./components/DemoForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { filters, products, reviews } from "./data/products";

const THEME_KEY = "aquapure_theme";

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState("");
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || "dark");

  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
  }, [theme]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const filteredProducts = useMemo(() => {
    if (activeFilter === "All") return products;
    return products.filter((product) => product.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gradient-to-b from-brand-950 via-brand-900 to-black"
          : "bg-gradient-to-b from-sky-50 via-white to-slate-100"
      }`}
    >
      <Navbar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
      />
      <Hero theme={theme} />
      <Products
        products={filteredProducts}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        filters={filters}
        onView={setSelectedProduct}
      />
      <Technology />
      <Benefits />
      <Reviews reviews={reviews} />
      <DemoForm onToast={setToast} />
      <Contact onToast={setToast} />
      <Footer />

      <ProductModal open={Boolean(selectedProduct)} product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      {toast && (
        <div className="fixed bottom-6 right-6 z-[60] rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-glow">
          {toast}
        </div>
      )}
    </div>
  );
}
