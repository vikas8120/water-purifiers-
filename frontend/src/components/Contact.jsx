import { useState } from "react";
import { Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

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
          <h2 className="text-3xl font-extrabold text-slate-900">Kriscel Tech Pvt. Ltd.</h2>
          <p className="mt-2 text-sm font-medium text-slate-600">
            Official contact details from the Kriscel Tech website.
          </p>
          <div className="mt-5 space-y-3 text-slate-600">
            <p className="flex items-center gap-2"><Phone size={16} /> +91 8985419420</p>
            <p className="flex items-center gap-2"><Mail size={16} /> Info@kriscel.com</p>
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>229, BHARTHAL, SECTOR - 26, DWARKA, South West Delhi, Delhi, 110077</span>
            </p>
            <a
              href="https://kriscel.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-slate-800 transition hover:text-[#4f647f]"
            >
              <Globe size={16} /> kriscel.com
            </a>
          </div>
          <a
            href="https://wa.me/91985419420"
            target="_blank"
            rel="noreferrer"
            className="palette-primary mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-medium"
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
            <button className="palette-primary w-full rounded-xl px-5 py-3 font-semibold transition hover:brightness-105">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
