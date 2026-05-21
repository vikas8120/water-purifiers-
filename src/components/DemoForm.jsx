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
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="rounded-3xl border border-white/15 bg-white/10 p-6 md:p-8">
        <h2 className="text-3xl font-semibold text-white">Book a Free Demo</h2>
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
          <button className="rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-400 md:col-span-2">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
