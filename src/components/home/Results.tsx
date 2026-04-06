'use client';

import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import Link from "next/link";

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
    value: "0 → 1",
    label: "Brand identity built from scratch",
    context: "Mendoza Cleaning — logo, print, apparel, and digital presence",
  },
];

// ─────────────────────────────────────────────
// FEATURED CASE STUDIES
// ─────────────────────────────────────────────
const FEATURED = [
  {
    client: "Landscaping Unlimited",
    headline: "From invisible to a 617% traffic spike.",
    tags: ["Website Design", "Local SEO", "Social Media"],
    image: "/images/results/landscaping/landscaping-hero.png",
    link: "/results/landscaping-unlimited",
    comingSoon: false,
  },
  {
    client: "Mendoza Cleaning Services",
    headline: "From zero brand identity to a complete system.",
    tags: ["Brand Identity", "Print Materials", "Apparel"],
    image: "/images/results/mendoza/business-card1.png",
    link: "/results/mendoza-cleaning",
    comingSoon: false,
  },
  {
    client: "Vela Nutrition",
    headline: "Brand identity & social media setup.",
    tags: ["Brand Identity", "Social Media Setup"],
    image: null,
    link: null,
    comingSoon: true,
  },
];

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

        {/* Featured Case Studies */}
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-widest uppercase text-gray-600 mb-8">
            Featured Work — Nix Creative
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED.map((project, i) => {
              const inner = (
                <motion.div
                  key={project.client}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`group relative rounded-2xl overflow-hidden flex flex-col h-full ${
                    project.comingSoon
                      ? "border-2 border-dashed border-white/15 bg-white/[0.03]"
                      : "bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10"
                  } transition-all duration-300`}
                >
                  {/* Image */}
                  {project.image ? (
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.client}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                      {/* Hover arrow */}
                      {!project.comingSoon && (
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                          <ArrowUpRight size={18} />
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Coming soon placeholder */
                    <div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-white/[0.02]">
                      <div className="text-center px-6">
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3">
                          <Clock size={20} className="text-[#b4ff39]" />
                        </div>
                        <p className="text-gray-500 text-sm font-medium">
                          Case study coming soon
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                      {project.client}
                    </p>
                    <h3 className="text-lg font-display font-bold text-white mb-4 leading-snug group-hover:text-[#b4ff39] transition-colors">
                      {project.headline}
                    </h3>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-full text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );

              if (project.link && !project.comingSoon) {
                return (
                  <Link key={project.client} href={project.link} className="block h-full">
                    {inner}
                  </Link>
                );
              }
              return <div key={project.client} className="h-full">{inner}</div>;
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
