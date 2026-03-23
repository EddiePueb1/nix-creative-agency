'use client';

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

// ─────────────────────────────────────────────
// STATS — real numbers from real client work
// ─────────────────────────────────────────────
const STATS = [
  {
    value: "617%",
    label: "Website traffic increase",
    context: "Landscaping Unlimited — 41 avg visitors to 294 after rebuild",
  },
  {
    value: "3",
    label: "Local businesses served",
    context: "And growing — case studies coming soon",
  },
];

// ─────────────────────────────────────────────
// CLIENTS — real logos go here
// Replace the initials block with an <img> tag once you have logo files.
// Suggested path: /public/images/logos/landscaping-unlimited.svg
// ─────────────────────────────────────────────
const CLIENTS = [
  {
    name: "Landscaping Unlimited",
    initials: "LU",
    services: ["Website Design", "Social Media", "Google Business"],
  },
  {
    name: "Mendoza Cleaning",
    initials: "MC",
    services: ["Brand Identity", "Print Collateral"],
  },
  {
    name: "Vela Nutrition",
    initials: "VN",
    services: ["Brand Identity", "Social Media Setup"],
  },
];

// ─────────────────────────────────────────────
// TESTIMONIAL — hidden until written quote is received
// Once you have a quote, paste it as a string below.
// Reach out to Mendoza Cleaning + Landscaping Unlimited for written quotes.
// ─────────────────────────────────────────────
const TESTIMONIAL: { quote: string | null; author: string; role: string } = {
  quote: null, // e.g. "Eddie completely transformed how we show up online..."
  author: "Mendoza Cleaning",
  role: "Owner",
};

export default function Results() {
  return (
    <section
      id="results"
      className="bg-[#111111] text-white py-24 rounded-t-[3rem] -mt-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Results
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Real work.<br />Real outcomes.
            </h2>
          </div>
          <a
            href="/results"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative text-white shrink-0"
          >
            View Case Studies
            <ArrowUpRight size={16} className="text-[#b4ff39] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white/20" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden mb-16">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#111111] px-8 py-10"
            >
              <p className="text-5xl md:text-6xl font-display font-bold text-[#b4ff39] mb-2">
                {stat.value}
              </p>
              <p className="text-white font-semibold mb-2">{stat.label}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.context}</p>
            </motion.div>
          ))}
        </div>

        {/* Client logos row */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-8">
            Trusted by
          </p>
          <div className="flex flex-wrap gap-4">
            {CLIENTS.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                {/*
                  TODO: Replace this initials block with a real logo once you have files.
                  <img
                    src={`/images/logos/${client.name.toLowerCase().replace(/ /g, '-')}.svg`}
                    alt={client.name}
                    className="h-8 w-auto object-contain filter brightness-0 invert"
                  />
                */}
                <div className="w-10 h-10 rounded-xl bg-[#b4ff39] flex items-center justify-center shrink-0">
                  <span className="text-black text-xs font-bold tracking-wider">
                    {client.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{client.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {client.services.join(" · ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial — hidden until quote is received */}
        {TESTIMONIAL.quote && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-t border-white/10 pt-16"
          >
            <blockquote className="max-w-3xl">
              <p className="text-2xl md:text-3xl font-display font-medium text-white leading-snug mb-6">
                &ldquo;{TESTIMONIAL.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#b4ff39] flex items-center justify-center">
                  <span className="text-black text-xs font-bold">
                    {TESTIMONIAL.author.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{TESTIMONIAL.author}</p>
                  <p className="text-gray-500 text-xs">{TESTIMONIAL.role}</p>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        )}

      </div>
    </section>
  );
}
