import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const navLinks = ["Home", "Products", "Technology", "Benefits", "Reviews", "Contact"];

export default function Navbar({ mobileOpen, setMobileOpen, theme, onToggleTheme }) {
  const goTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <button onClick={() => goTo("home")} className="text-xl font-bold tracking-wide text-white">
          AquaPure <span className="text-sky-400">Elite</span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <button
              key={item}
              onClick={() => goTo(item)}
              className="text-sm text-slate-100 transition hover:text-sky-300"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="rounded-full border border-white/15 bg-white/10 p-2 text-white md:hidden"
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
          className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button key={item} onClick={() => goTo(item)} className="text-left text-slate-100">
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
