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
      <motion.img
        src="/hero-bg.png"
        alt="AquaPure Elite Purifier"
        initial={{ scale: 1.08, x: -20, y: 0 }}
        animate={{ scale: [1.08, 1.13, 1.08], x: [-20, 20, -20], y: [0, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbffe6] via-[#f8fbffba] to-[#f8fbff66]" />
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl" />
      <div className="absolute -right-20 bottom-8 h-72 w-72 rounded-full bg-blue-300/25 blur-3xl" />

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
            className="w-full rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(2,132,199,0.38)] transition hover:-translate-y-0.5 hover:from-sky-500 hover:to-blue-500 sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
          >
            Shop Purifiers
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full rounded-full border border-slate-300 bg-white/85 px-6 py-3 text-sm font-bold text-slate-900 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-7 sm:py-3.5 sm:text-base"
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
              <Icon size={18} className="text-sky-700" />
              <p className="mt-2 text-[1.14rem] font-bold tracking-[0.01em] text-slate-900">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


