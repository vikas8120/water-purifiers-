import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const badges = [
  { icon: Sparkles, label: "5 Stage Filtration" },
  { icon: Wrench, label: "Free Installation" },
  { icon: BadgeCheck, label: "1 Year Warranty" },
  { icon: ShieldCheck, label: "24/7 Support" },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <video
        className="absolute inset-0 h-full w-full object-cover object-center brightness-105 contrast-110 saturate-125"
        src="/hero-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbff88] via-[#f8fbff38] to-[#f8fbff10]" />

      <div className="relative mx-auto max-w-[90rem] px-3 py-20 md:px-5 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-text floating-copy max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-4xl md:text-6xl"
        >
          Luxury Hydration, Crafted For Modern Living.
        </motion.h1>
        <p className="mt-4 max-w-xl text-base font-semibold text-slate-800 sm:text-lg md:text-xl">
          A couture-grade purification experience with advanced RO, UV, and smart mineral balance for every pour.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="palette-primary w-full rounded-full px-6 py-3 text-sm font-bold shadow-[0_12px_28px_rgba(95,115,143,0.22)] transition hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            Shop Purifiers
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="palette-secondary w-full rounded-full border px-6 py-3 text-sm font-bold transition hover:-translate-y-0.5 sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            Book Free Demo
          </button>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card rounded-2xl p-5 text-slate-900 transition duration-300 hover:-translate-y-1"
            >
              <Icon size={18} className="text-[#5f738f]" />
              <p className="mt-2 text-[1.14rem] font-bold tracking-[0.01em] text-slate-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


