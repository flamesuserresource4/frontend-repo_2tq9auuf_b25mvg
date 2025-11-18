import { Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400" />
              <span className="text-white font-semibold tracking-tight text-lg">Talent First</span>
            </div>
            <p className="mt-4 text-slate-300 text-sm">Next-generation recruitment platform with flexible workflows.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#resources" className="hover:text-white">Resources</a></li>
              <li><a href="#demo" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-white hover:bg-slate-800"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-white hover:bg-slate-800"><Linkedin className="h-5 w-5" /></a>
              <a href="#" aria-label="Email" className="p-2 rounded-lg bg-slate-800/80 border border-white/10 text-white hover:bg-slate-800"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">© {new Date().getFullYear()} Talent First. All rights reserved.</div>
      </div>
    </footer>
  );
}
