export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {["Starter", "Growth", "Scale"].map((tier, i) => (
            <div key={tier} className={`rounded-2xl p-6 border border-white/10 backdrop-blur-md ${i===1? 'bg-white text-slate-900' : 'bg-slate-900/40 text-white'}`}>
              <h3 className="text-xl font-semibold">{tier}</h3>
              <p className={`mt-2 text-sm ${i===1? 'text-slate-700' : 'text-slate-300'}`}>No long contracts — cancel anytime.</p>
              <div className="mt-6 text-4xl font-bold">{i===0? '£49' : i===1? '£149' : '£399'}<span className="text-base font-medium">/mo</span></div>
              <ul className={`mt-6 space-y-2 text-sm ${i===1? 'text-slate-800' : 'text-slate-300'}`}>
                <li>Vacancy Intelligence</li>
                <li>Candidate Showcase</li>
                <li>Automated Outreach</li>
                <li>Unlimited users</li>
                <li>Email support</li>
              </ul>
              <a href="#signup" className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-xl font-semibold ${i===1? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>Start Free Trial</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
