import ProductCard from "./ProductCard";

export default function Products({ products, activeFilter, setActiveFilter, filters, onView }) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Our Purifier Collection</h2>
      <p className="mt-2 text-slate-300">Engineered for every home, styled for premium living.</p>

      <div className="mt-8 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              activeFilter === filter
                ? "bg-sky-500 text-white"
                : "border border-white/20 bg-white/5 text-slate-200 hover:bg-white/10"
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
