import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-6 border-t border-[#8ea1bc]/70 bg-[#b1bed5]/70">
      <div className="mx-auto grid max-w-[90rem] gap-8 px-3 py-10 md:grid-cols-4 md:px-5">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">AquaPure <span className="text-[#4f647f]">Elite</span></h3>
          <p className="mt-3 text-sm text-slate-700">The premium water studio for modern family wellness.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>Home</li><li>Products</li><li>Technology</li><li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Categories</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>RO + UV</li><li>TDS Controller</li><li>Copper Mineral</li><li>Premium Range</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Social</h4>
          <div className="mt-3 flex gap-3 text-slate-700">
            <Facebook size={18} /><Instagram size={18} /><Twitter size={18} /><Linkedin size={18} />
          </div>
        </div>
      </div>
      <p className="border-t border-[#8ea1bc]/50 py-4 text-center text-sm text-slate-700">
        © {new Date().getFullYear()} AquaPure Elite. All rights reserved.
      </p>
    </footer>
  );
}
