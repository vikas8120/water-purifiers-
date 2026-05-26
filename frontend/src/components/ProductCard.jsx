import { useState } from "react";
import { motion } from "framer-motion";
import { IndianRupee, Star } from "lucide-react";

const imageCandidates = (imagePath) => {
  if (!imagePath) return [];

  const cleanPath = imagePath.replace(/\?.*$/, "");
  const dotIndex = cleanPath.lastIndexOf(".");
  const preferred = ["png", "jpg", "jpeg", "webp", "svg"];

  if (dotIndex === -1) {
    return preferred.map((ext) => `${cleanPath}.${ext}`);
  }

  const base = cleanPath.slice(0, dotIndex);
  const ext = cleanPath.slice(dotIndex + 1).toLowerCase();
  const others = preferred.filter((item) => item !== ext);

  return [`${base}.${ext}`, ...others.map((item) => `${base}.${item}`)];
};

export default function ProductCard({ product, onView }) {
  const candidates = [...imageCandidates(product.image), ...(product.fallbackImage ? [product.fallbackImage] : [])];
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
      transition={{ type: "spring", stiffness: 170, damping: 16 }}
      className="glass-card group overflow-hidden rounded-3xl p-4"
    >
      <img
        src={candidates[imageIndex] || product.image}
        alt={product.name}
        onError={() => {
          if (imageIndex < candidates.length - 1) {
            setImageIndex((prev) => prev + 1);
          }
        }}
        className="h-44 w-full rounded-2xl bg-white object-contain p-2 transition duration-500 group-hover:scale-105 sm:h-48"
      />
      <h3 className="mt-3 text-base font-bold text-slate-900 sm:mt-4 sm:text-lg">{product.name}</h3>
      <div className="mt-2 flex items-center gap-2 text-sky-600">
        <Star size={16} fill="currentColor" />
        <span>{product.rating}</span>
      </div>
      <div className="mt-2 flex items-center gap-3">
        <p className="flex items-center text-lg font-bold text-slate-900 sm:text-xl">
          <IndianRupee size={16} />
          {product.price.toLocaleString("en-IN")}
        </p>
        <p className="text-sm text-slate-500 line-through">₹{product.oldPrice.toLocaleString("en-IN")}</p>
      </div>
      <ul className="mt-3 space-y-1 text-sm font-medium text-slate-800">
        {product.features.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          onClick={() => onView(product)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-50"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}


