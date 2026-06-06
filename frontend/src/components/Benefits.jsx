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
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 liquid-text sm:text-3xl md:text-5xl">Why Families Choose AquaPure Elite</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map(({ icon: Icon, title }) => (
          <div
            key={title}
            className="glass-card group rounded-3xl p-5 transition duration-300 hover:-translate-y-1 sm:p-6"
          >
            <div className="inline-flex rounded-xl bg-[#f4f3f3] p-2.5 ring-1 ring-[#b1bed5]">
              <Icon className="text-[#5f738f]" size={22} />
            </div>
            <h3 className="mt-4 text-[1.28rem] font-bold leading-tight text-slate-900 sm:text-[1.5rem]">{title}</h3>
            <p className="mt-2 text-[0.98rem] font-medium leading-relaxed text-slate-600 sm:text-[1.03rem]">
              Engineered for daily reliability with premium-grade components.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}



