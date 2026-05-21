import { motion } from "framer-motion";
import { IndianRupee, Star } from "lucide-react";

export default function ProductCard({ product, onView }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-glass backdrop-blur-md"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-105"
      />
      <h3 className="mt-4 text-lg font-semibold text-white">{product.name}</h3>
      <div className="mt-2 flex items-center gap-2 text-sky-300">
        <Star size={16} fill="currentColor" />
        <span>{product.rating}</span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <p className="flex items-center text-xl font-semibold text-white">
          <IndianRupee size={16} />
          {product.price.toLocaleString("en-IN")}
        </p>
        <p className="text-sm text-slate-400 line-through">₹{product.oldPrice.toLocaleString("en-IN")}</p>
      </div>
      <ul className="mt-3 space-y-1 text-sm text-slate-200">
        {product.features.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          onClick={() => onView(product)}
          className="w-full rounded-xl border border-white/25 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
