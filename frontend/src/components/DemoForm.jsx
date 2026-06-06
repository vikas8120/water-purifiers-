import { useState } from "react";

const initialState = { name: "", phone: "", city: "", product: "" };

export default function DemoForm({ onToast }) {
  const [form, setForm] = useState(initialState);

  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onToast("Demo request submitted successfully.");
    setForm(initialState);
  };

  return (
    <section className="mx-auto max-w-[90rem] px-3 py-20 md:px-5">
      <div className="glass-card rounded-3xl p-6 md:p-8">
        <h2 className="text-2xl font-extrabold text-slate-900 sm:text-3xl">Book a Complimentary Premium Demo</h2>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <input required name="name" value={form.name} onChange={onChange} placeholder="Name" className="input" />
          <input required name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="input" />
          <input required name="city" value={form.city} onChange={onChange} placeholder="City" className="input" />
          <input
            required
            name="product"
            value={form.product}
            onChange={onChange}
            placeholder="Product Interest"
            className="input"
          />
          <button className="palette-primary rounded-xl px-5 py-3 font-semibold transition hover:brightness-105 md:col-span-2">
            Reserve My Demo
          </button>
        </form>
      </div>
    </section>
  );
}
