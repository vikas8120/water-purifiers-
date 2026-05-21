import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const badges = [
  { icon: Sparkles, label: "5 Stage Filtration" },
  { icon: Wrench, label: "Free Installation" },
  { icon: BadgeCheck, label: "1 Year Warranty" },
  { icon: ShieldCheck, label: "24/7 Support" },
];

export default function Hero({ theme }) {
  const isDark = theme === "dark";

  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <img
        src={isDark ? "/waterherosection.jpg" : "/waterherosection-light.jpg"}
        alt="AquaPure Elite Purifier"
        className={`absolute inset-0 h-full w-full object-cover ${isDark ? "" : "scale-[1.02] blur-[1.6px]"}`}
      />
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-r from-[#020617f0] via-[#020617c2] to-[#02061760]"
            : "bg-gradient-to-r from-white/55 via-white/25 to-white/10"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`max-w-2xl text-4xl font-extrabold leading-[1.04] tracking-[-0.02em] md:text-6xl ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          Pure Water. Premium Living.
        </motion.h1>
        <p className={`mt-5 max-w-xl text-lg font-semibold md:text-xl ${isDark ? "text-slate-200" : "text-slate-800"}`}>
          Advanced RO + UV + TDS purification for crystal-clear, safe, and mineral-balanced drinking water.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_26px_rgba(2,132,199,0.35)] transition hover:-translate-y-0.5 hover:bg-sky-500"
          >
            Shop Purifiers
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className={`rounded-full px-7 py-3.5 text-base font-bold backdrop-blur-md transition hover:-translate-y-0.5 ${
              isDark
                ? "border border-white/30 bg-white/10 text-white hover:bg-white/20"
                : "border border-slate-300 bg-white/85 text-slate-900 hover:bg-white"
            }`}
          >
            Book Free Demo
          </button>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className={`rounded-2xl p-5 backdrop-blur-sm ${
                isDark
                  ? "border border-white/35 bg-slate-900/55 text-white shadow-[0_10px_30px_rgba(2,6,23,0.5)]"
                  : "border border-slate-400/70 bg-white/96 text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.10)]"
              }`}
            >
              <Icon size={18} className={isDark ? "text-sky-300" : "text-sky-700"} />
              <p className={`mt-2 text-[1.14rem] font-bold tracking-[0.01em] ${isDark ? "text-slate-100" : "text-slate-900"}`}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
