import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const initial = { name: "", email: "", message: "" };

export default function Contact({ onToast }) {
  const [form, setForm] = useState(initial);
  const onChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    onToast("Message sent successfully.");
    setForm(initial);
  };

  return (
    <section id="contact" className="mx-auto max-w-[90rem] px-3 py-20 md:px-5">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass-card rounded-3xl p-6">
          <h2 className="text-3xl font-extrabold text-slate-900">Contact Us</h2>
          <div className="mt-5 space-y-3 text-slate-600">
            <p className="flex items-center gap-2"><Phone size={16} /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><Mail size={16} /> support@aquapureelite.com</p>
            <p className="flex items-center gap-2"><MapPin size={16} /> Connaught Place, New Delhi</p>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 font-medium text-white"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-6">
          <h3 className="text-xl font-bold text-slate-900">Send a Message</h3>
          <div className="mt-4 space-y-3">
            <input required name="name" value={form.name} onChange={onChange} placeholder="Name" className="input" />
            <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className="input" />
            <textarea
              required
              name="message"
              rows="4"
              value={form.message}
              onChange={onChange}
              placeholder="Your message"
              className="input resize-none"
            />
            <button className="w-full rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 px-5 py-3 font-semibold text-white transition hover:from-sky-500 hover:to-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}


