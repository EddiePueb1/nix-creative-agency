'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, BarChart3, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    label: "Pillar 01",
    title: "We build to win.",
    description:
      "A beautiful website that doesn't convert is just an expensive brochure. We design and build sites with one goal in mind — turning visitors into leads and leads into clients. Strategy, design, and performance engineered together from day one.",
    icon: Globe,
    image: "/images/services-websites.jpg",
    color: "bg-[#111111]",
    textColor: "text-white",
    buttonColor: "bg-[#b4ff39] text-black",
    buttonLabel: "See Website Design",
    link: "/services/website-design"
  },
  {
    label: "Pillar 02",
    title: "We let data lead.",
    description:
      "Gut instinct is a starting point, not a strategy. Every campaign, every channel, every decision we make is grounded in real performance data. We track what's working, cut what isn't, and continuously optimize so your marketing budget works harder over time.",
    icon: BarChart3,
    image: "/images/services-data-solutions.jpg",
    color: "bg-[#1a1a1a]",
    textColor: "text-white",
    buttonColor: "bg-white text-black",
    buttonLabel: "See Data & Analytics",
    link: "/services/analytics"
  },
  {
    label: "Pillar 03",
    title: "We automate the repeatable.",
    description:
      "Your time is your most valuable asset. We identify the tasks eating your hours — follow-ups, reporting, lead routing, scheduling — and build smart systems that handle them for you. The result is a leaner operation that scales without adding headcount.",
    icon: Cpu,
    image: "/images/services-ai-automations.jpg",
    color: "bg-[#222222]",
    textColor: "text-white",
    buttonColor: "bg-[#b4ff39] text-black",
    buttonLabel: "See AI Automations",
    link: "/services/ai-automations"
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="pillars" className="py-32 bg-[#f5f5f5]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
              How We Think
            </h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Three bets we make for every client.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every agency offers services. We operate by principles. These
              three beliefs shape every strategy, every build, and every
              decision we make on your behalf.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative"
          >
            All Services
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/20" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="relative flex flex-col gap-[15vh] md:gap-[25vh] pb-[10vh]">
          {PILLARS.map((pillar, index) => {
            const yOffset = useTransform(
              scrollYProgress,
              [0, 1],
              [0, -50 * index],
            );
            const scale = useTransform(
              scrollYProgress,
              [0, 1],
              [1, 1 - 0.05 * index],
            );

            return (
              <motion.div
                key={pillar.title}
                style={{ y: yOffset, scale }}
                className={`sticky top-24 md:top-32 w-full rounded-[2rem] overflow-hidden ${pillar.color} ${pillar.textColor} shadow-2xl`}
              >
                <div className="flex flex-col md:flex-row h-full max-h-[calc(100vh-7rem)] md:max-h-[calc(100vh-10rem)]">
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto hide-scrollbar">
                    <span className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-4 shrink-0">
                      {pillar.label}
                    </span>
                    <pillar.icon className="w-8 h-8 md:w-12 md:h-12 mb-6 md:mb-8 opacity-80 shrink-0" />
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight shrink-0">
                      {pillar.title}
                    </h3>
                    <p className="text-base md:text-lg opacity-80 mb-8 md:mb-12 leading-relaxed shrink-0">
                      {pillar.description}
                    </p>
                    <div className="shrink-0 pb-4 md:pb-0">
                      <Link
                        href={pillar.link}
                        className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 ${pillar.buttonColor}`}
                      >
                        {pillar.buttonLabel} <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-48 min-h-[200px] md:h-auto md:min-h-[400px] relative shrink-0">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
