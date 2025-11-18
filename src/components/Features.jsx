import { Briefcase, Users, MailCheck } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Vacancy Intelligence",
    desc:
      "Discover and get real-time alerts on live vacancies enriched with hiring manager contacts.",
  },
  {
    icon: Users,
    title: "Candidate Showcase",
    desc:
      "Publish anonymized candidate profiles visible to clients and get AI-driven match suggestions.",
  },
  {
    icon: MailCheck,
    title: "Automated Outreach",
    desc:
      "Save time with manual or AI-assisted email campaigns and user-controlled approval workflows.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6 border border-white/10 bg-slate-900/40 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-white text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
              <a href="#" className="mt-4 inline-block text-sm text-blue-300 hover:text-blue-200">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
