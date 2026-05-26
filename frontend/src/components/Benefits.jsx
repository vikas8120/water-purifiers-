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
    <section id="benefits" className="mx-auto max-w-[90rem] px-3 py-20 md:px-5">
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 liquid-text md:text-5xl">Why Families Choose AquaPure Elite</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1"
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



