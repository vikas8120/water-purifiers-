import { Suspense, lazy, useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FloatingContentWrapper from "./components/FloatingContentWrapper";
import { filters, products, reviews } from "./data/products";

const AnimatedWaterBackground = lazy(() => import("./components/AnimatedWaterBackground"));
const Products = lazy(() => import("./components/Products"));
const ProductModal = lazy(() => import("./components/ProductModal"));
const Technology = lazy(() => import("./components/Technology"));
const Benefits = lazy(() => import("./components/Benefits"));
const Reviews = lazy(() => import("./components/Reviews"));
const DemoForm = lazy(() => import("./components/DemoForm"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function SectionPlaceholder({ className = "", minHeight = "min-h-64" }) {
  return (
    <div className="mx-auto max-w-[90rem] px-3 md:px-5">
      <div className={`animate-pulse rounded-3xl border border-sky-100 bg-white/70 ${minHeight} ${className}`} />
    </div>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  }, []);

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
    <div className="luxury-mesh min-h-screen">
      <Suspense fallback={null}>
        <AnimatedWaterBackground />
      </Suspense>

      <div className="content-shell">
        <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <FloatingContentWrapper className="section-tone-1">
          <Hero />
        </FloatingContentWrapper>
        <Suspense fallback={<FloatingContentWrapper className="section-tone-1"><SectionPlaceholder minHeight="min-h-[34rem]" /></FloatingContentWrapper>}>
          <FloatingContentWrapper className="section-tone-2">
            <Products
              products={filteredProducts}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              filters={filters}
              onView={setSelectedProduct}
            />
          </FloatingContentWrapper>
        </Suspense>
        <Suspense fallback={<FloatingContentWrapper className="section-tone-2"><SectionPlaceholder minHeight="min-h-80" /></FloatingContentWrapper>}>
          <FloatingContentWrapper className="section-tone-3">
            <Technology />
          </FloatingContentWrapper>
        </Suspense>
        <Suspense fallback={<FloatingContentWrapper className="section-tone-3"><SectionPlaceholder minHeight="min-h-80" /></FloatingContentWrapper>}>
          <FloatingContentWrapper className="section-tone-4">
            <Benefits />
          </FloatingContentWrapper>
        </Suspense>
        <Suspense fallback={<FloatingContentWrapper className="section-tone-4"><SectionPlaceholder minHeight="min-h-72" /></FloatingContentWrapper>}>
          <FloatingContentWrapper className="section-tone-1">
            <Reviews reviews={reviews} />
          </FloatingContentWrapper>
        </Suspense>
        <Suspense fallback={<FloatingContentWrapper className="section-tone-1"><SectionPlaceholder minHeight="min-h-72" /></FloatingContentWrapper>}>
          <FloatingContentWrapper className="section-tone-2">
            <DemoForm onToast={setToast} />
          </FloatingContentWrapper>
        </Suspense>
        <Suspense fallback={<FloatingContentWrapper className="section-tone-2"><SectionPlaceholder minHeight="min-h-64" /></FloatingContentWrapper>}>
          <FloatingContentWrapper className="section-tone-3">
            <Contact onToast={setToast} />
          </FloatingContentWrapper>
        </Suspense>
        <Suspense fallback={<SectionPlaceholder minHeight="min-h-32" />}>
          <Footer />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <ProductModal open={Boolean(selectedProduct)} product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      </Suspense>

      {toast && (
        <div className="fixed bottom-6 right-6 z-[60] rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-glow">
          {toast}
        </div>
      )}
    </div>
  );
}
