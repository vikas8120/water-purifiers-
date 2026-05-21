import { BatteryCharging, Droplet, Leaf, Shield, Smile, Wrench } from "lucide-react";

const benefits = [
  { icon: Shield, title: "Removes impurities" },
  { icon: Smile, title: "Better taste" },
  { icon: Shield, title: "Safe for children" },
  { icon: Droplet, title: "Mineral-rich water" },
  { icon: Wrench, title: "Low maintenance" },
  { icon: BatteryCharging, title: "Energy efficient" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">Why Families Choose AquaPure Elite</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="group rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(14,116,144,0.15)]"
          >
            <div className="inline-flex rounded-xl bg-sky-50 p-2.5 ring-1 ring-sky-100">
              <Icon className="text-sky-600" size={22} />
            </div>
            <h3 className="mt-4 text-[1.72rem] font-bold leading-tight text-slate-900">{title}</h3>
            <p className="mt-2 text-[1.07rem] font-medium leading-relaxed text-slate-600">
              Engineered for daily reliability with premium-grade components.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
