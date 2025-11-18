export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-3xl p-10 bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-cyan-400/20 border border-white/10 backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Join dozens of agencies transforming their recruitment process with Talent First.</h2>
          <p className="mt-4 text-slate-300">Start free today or book a quick demo—no credit card required.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#signup" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Start Your Free Trial</a>
            <a href="#demo" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-800/80 text-white border border-white/10 hover:bg-slate-800 transition">Request a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
