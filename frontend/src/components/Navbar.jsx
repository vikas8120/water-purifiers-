import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "Products", "Technology", "Benefits", "Reviews", "Contact"];

export default function Navbar({ mobileOpen, setMobileOpen }) {
  const goTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#b1bed5]/70 bg-[#f4f3f3]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-3 py-2.5 md:px-5 md:py-3">
        <button onClick={() => goTo("home")} className="liquid-text text-lg font-extrabold tracking-wide sm:text-xl">
          AquaPure <span className="text-[#5f738f]">Elite</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
              className="text-sm font-medium text-slate-700 transition hover:text-[#5f738f]"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="rounded-full border border-[#b1bed5] bg-white p-2 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-[#b1bed5]/60 bg-[#f4f3f3]/96 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button key={item} onClick={() => goTo(item)} className="text-left font-medium text-slate-700">
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}


