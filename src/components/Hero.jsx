import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-40 opacity-60 blur-3xl bg-[conic-gradient(at_top_left,_#60a5fa,_#818cf8,_#22d3ee)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_25%),_radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.15),transparent_25%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Talent First: Turn Your Talent Pool or Vacancy Feed Into Your Competitive Advantage
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl">
              Flexible platform for recruitment agencies to discover live vacancies, showcase top candidates, and automate outreach—all from one place.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#signup" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800/80 text-white border border-white/10 hover:bg-slate-800 transition">
                Request a Demo
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 opacity-80">
              <img src="/logo1.svg" alt="Partner 1" className="h-8" />
              <img src="/logo2.svg" alt="Partner 2" className="h-8" />
              <img src="/logo3.svg" alt="Partner 3" className="h-8" />
              <img src="/logo4.svg" alt="Partner 4" className="h-8" />
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-md p-2">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-300">
                <div className="text-center">
                  <div className="text-6xl">🤖</div>
                  <p className="mt-3">Next-generation recruitment platform</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 opacity-70 blur-2xl" />
            <div className="absolute -bottom-8 -left-6 w-24 h-24 rounded-full bg-cyan-400/50 opacity-60 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
