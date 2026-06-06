import { Star } from "lucide-react";

export default function Reviews({ reviews }) {
  return (
    <section id="reviews" className="mx-auto max-w-[90rem] px-3 py-20 md:px-5">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 liquid-text sm:text-3xl md:text-5xl">Loved In Homes Across India</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="glass-card rounded-3xl p-6">
            <div className="mb-3 flex text-[#5f738f]">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <Star key={idx} size={16} fill="currentColor" />
              ))}
            </div>
            <p className="text-[1.05rem] font-medium leading-relaxed text-slate-700">"{review.text}"</p>
            <p className="mt-4 font-bold text-slate-900">{review.name}</p>
            <p className="text-sm text-slate-500">{review.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

