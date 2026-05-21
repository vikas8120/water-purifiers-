import { Star } from "lucide-react";

export default function Reviews({ reviews }) {
  return (
    <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="text-3xl font-semibold text-white md:text-4xl">Customer Reviews</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="rounded-2xl border border-white/15 bg-white/10 p-5">
            <div className="mb-3 flex text-sky-300">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Star key={idx} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-slate-200">“{review.text}”</p>
            <p className="mt-4 text-white">{review.name}</p>
            <p className="text-sm text-slate-400">{review.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
