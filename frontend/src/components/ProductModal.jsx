import { useEffect, useState } from "react";
import { Star, X } from "lucide-react";

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

export default function ProductModal({ product, open, onClose }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    if (!open) {
      setImageIndex(0);
    }
  }, [open]);

  if (!open || !product) return null;

  const candidates = [...imageCandidates(product.image), ...(product.fallbackImage ? [product.fallbackImage] : [])];

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" onClick={onClose}>
      <div
        className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
          <button onClick={onClose} className="rounded-full bg-white/10 p-2 text-white">
            <X size={16} />
          </button>
        </div>
        <img
          src={candidates[imageIndex] || product.image}
          alt={product.name}
          onError={() => {
            if (imageIndex < candidates.length - 1) {
              setImageIndex((prev) => prev + 1);
            }
          }}
          className="h-64 w-full rounded-2xl bg-white object-contain"
        />
        <div className="mt-4 flex items-center gap-2 text-sky-300">
          <Star size={16} fill="currentColor" />
          <span>{product.rating}</span>
        </div>
        <p className="mt-2 text-xl font-semibold text-white">₹{product.price.toLocaleString("en-IN")}</p>
        <p className="mt-2 text-slate-300">Purification Type: {product.purificationType}</p>
        <p className="mt-1 text-slate-300">Warranty: {product.warranty}</p>
        <ul className="mt-3 space-y-1 text-slate-200">
          {product.features.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
