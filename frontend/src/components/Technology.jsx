import { motion } from "framer-motion";
import { ArrowRight, Droplets, ShieldCheck, Sparkles, Waves, Wind } from "lucide-react";

const steps = [
  { icon: Droplets, label: "Dirty Water" },
  { icon: Waves, label: "Sediment Filter" },
  { icon: Wind, label: "Carbon Filter" },
  { icon: ShieldCheck, label: "RO Membrane" },
  { icon: Sparkles, label: "UV Purification" },
  { icon: Droplets, label: "Clean Mineral Water" },
];

export default function Technology() {
  return (
    <section id="technology" className="mx-auto max-w-[90rem] px-3 py-20 md:px-5">
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 liquid-text sm:text-3xl md:text-5xl">Purification Technology</h2>
      <p className="mt-3 text-base font-semibold text-slate-700 sm:text-lg md:text-xl">
        Every drop passes through a precision multi-stage journey.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        {steps.map(({ icon: Icon, label }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="glass-card group relative rounded-3xl p-4 text-center transition duration-300 hover:-translate-y-1 sm:p-5"
          >
            <div className="mx-auto inline-flex rounded-xl bg-sky-50 p-2.5 ring-1 ring-sky-100">
              <Icon className="text-sky-600" size={22} />
            </div>
            <p className="mt-3 text-base font-bold text-slate-900 sm:text-[1.06rem]">{label}</p>
            {idx < steps.length - 1 && (
              <ArrowRight
                size={16}
                className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-sky-500 lg:block"
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}



