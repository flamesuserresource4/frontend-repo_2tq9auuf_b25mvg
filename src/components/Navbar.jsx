import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#process" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-md bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
              <span className="text-white font-semibold tracking-tight text-lg">Talent First</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#demo" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              <a href="#signup" className="ml-4 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Start Free Trial</a>
            </nav>

            <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3 border-t border-white/10">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="block text-slate-200 hover:text-white">
                  {item.label}
                </a>
              ))}
              <div className="pt-2 flex gap-3">
                <a href="#demo" className="flex-1 text-center px-4 py-2 rounded-xl bg-slate-800/80 text-slate-100">Request a Demo</a>
                <a href="#signup" className="flex-1 text-center px-4 py-2 rounded-xl bg-white text-slate-900 font-medium">Start Free Trial</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
