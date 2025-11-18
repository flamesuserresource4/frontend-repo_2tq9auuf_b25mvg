const steps = [
  {
    title: "Add Candidates / Discover Vacancies",
    desc: "Import talent pools and connect vacancy feeds with enriched company contacts.",
  },
  {
    title: "Get Matches & Alerts",
    desc: "See AI-curated matches and receive real-time vacancy notifications.",
  },
  {
    title: "Send Outreach / Convert Placements",
    desc: "Launch manual or AI-assisted campaigns to win roles and place candidates.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-2xl p-6 border border-white/10 bg-slate-900/40 backdrop-blur-md">
              <div className="absolute -top-3 -left-3 h-10 w-10 rounded-xl bg-white text-slate-900 font-bold flex items-center justify-center shadow">{i + 1}</div>
              <h3 className="mt-6 text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 translate-x-full -translate-y-1/2 text-slate-400">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
