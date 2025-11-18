import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Talent First helped us identify new client opportunities and accelerate placements across multiple sectors.",
    name: "Sophie K.",
    role: "Director",
    company: "Stride Recruit",
  },
  {
    quote:
      "The candidate showcase has completely changed how we present our talent to clients—super polished and effective.",
    name: "James R.",
    role: "Founder",
    company: "Northbridge Search",
  },
  {
    quote:
      "We saved countless hours with automated outreach while keeping quality high with approval workflows.",
    name: "Elena P.",
    role: "Marketing Lead",
    company: "Beacon Talent",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="rounded-3xl p-10 bg-gradient-to-b from-slate-900/60 to-slate-900/30 border border-white/10 backdrop-blur-md">
          <p className="text-2xl md:text-3xl text-white leading-relaxed">“{t.quote}”</p>
          <div className="mt-6 text-slate-300">{t.name} · {t.role} · {t.company}</div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full ${i===index ? 'bg-white' : 'bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
