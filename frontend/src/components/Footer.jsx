import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-slate-200/80 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-3 py-10 md:grid-cols-4 md:px-5">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">AquaPure <span className="text-sky-600">Elite</span></h3>
          <p className="mt-3 text-sm text-slate-600">The premium water studio for modern family wellness.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Home</li><li>Products</li><li>Technology</li><li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>RO + UV</li><li>TDS Controller</li><li>Copper Mineral</li><li>Premium Range</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Social</h4>
          <div className="mt-3 flex gap-3 text-slate-600">
            <Facebook size={18} /><Instagram size={18} /><Twitter size={18} /><Linkedin size={18} />
          </div>
        </div>
      </div>
      <p className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} AquaPure Elite. All rights reserved.
      </p>
    </footer>
  );
}
