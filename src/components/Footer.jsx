import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="text-xl font-bold text-white">AquaPure <span className="text-sky-400">Elite</span></h3>
          <p className="mt-3 text-sm text-slate-300">Luxury water purification for modern families.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Home</li><li>Products</li><li>Technology</li><li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>RO + UV</li><li>TDS Controller</li><li>Copper Mineral</li><li>Premium Range</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Social</h4>
          <div className="mt-3 flex gap-3 text-slate-200">
            <Facebook size={18} /><Instagram size={18} /><Twitter size={18} /><Linkedin size={18} />
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 py-4 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} AquaPure Elite. All rights reserved.
      </p>
    </footer>
  );
}
