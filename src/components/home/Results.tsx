'use client';

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    client: "TechFlow",
    title: "Making waves with AI Automations.",
    tags: ["AI Automations", "Data-Driven", "Analytics"],
    image: "https://picsum.photos/seed/techflow/1200/600",
  },
  {
    client: "Global Reach",
    title: "A healthier, sharper digital home.",
    tags: ["Web Development", "Hosting", "Design"],
    image: "https://picsum.photos/seed/globalreach/1200/600",
  },
  {
    client: "Stellar Social",
    title: "A bold, modern front door that tells the story.",
    tags: ["Social Media", "Analytics", "Marketing"],
    image: "https://picsum.photos/seed/stellar/1200/600",
  },
];

export default function Results() {
  return (
    <section
      id="results"
      className="bg-[#111111] text-white py-32 rounded-t-[3rem] -mt-12 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
              Results
            </h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              The impact we deliver.
            </h2>
          </div>
          <a
            href="/results"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative text-white"
          >
            View All Work
            <ArrowUpRight size={16} className="text-[#b4ff39] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white/20" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
          </a>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="w-full lg:w-1/3 order-2 lg:order-1">
                  <h4 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                    {project.client}
                  </h4>
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-8 group-hover:text-[#b4ff39] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-2 rounded-full text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-2/3 order-1 lg:order-2">
                  <div className="relative aspect-[2/1] rounded-3xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
