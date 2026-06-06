import ProductCard from "./ProductCard";

export default function Products({ products, activeFilter, setActiveFilter, filters, onView }) {
  return (
    <section id="products" className="mx-auto max-w-[90rem] px-3 py-20 md:px-5">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 liquid-text sm:text-3xl md:text-5xl">The Signature Purifier Collection</h2>
      <p className="mt-2 text-base font-medium text-slate-600 sm:text-lg">Designed as statement pieces. Engineered as performance icons.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-3 py-1.5 text-xs transition sm:px-4 sm:py-2 sm:text-sm ${
              activeFilter === filter
                ? "palette-primary shadow-[0_8px_22px_rgba(95,115,143,0.22)]"
                : "palette-chip border hover:bg-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onView={onView} />
        ))}
      </div>
    </section>
  );
}


