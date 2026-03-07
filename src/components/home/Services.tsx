'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, BarChart3, Globe, Cpu } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "AI Automations that scale.",
    description:
      "We handle targeting, creative, optimization, and budget management to maximize ROI and drive measurable growth by putting your brand in front of the right people at the right moment.",
    icon: Cpu,
    image: "https://picsum.photos/seed/ai-scale/800/800",
    color: "bg-[#111111]",
    textColor: "text-white",
    buttonColor: "bg-[#b4ff39] text-black",
    link: "/services/ai-automations"
  },
  {
    title: "Data-driven solutions.",
    description:
      "We create marketing strategies that don't just chase trends–they meet people where they are. Great marketing should feel personal, purposeful, and perfectly timed.",
    icon: BarChart3,
    image: "https://picsum.photos/seed/data-solutions/800/800",
    color: "bg-[#1a1a1a]",
    textColor: "text-white",
    buttonColor: "bg-white text-black",
    link: "/services/data-solutions"
  },
  {
    title: "Websites that win.",
    description:
      "Great design and outstanding performance go hand-in-hand. We bring our unique blend of industry expertise and growth-focused strategy to deliver beautiful, conversion-focused websites.",
    icon: Globe,
    image: "https://picsum.photos/seed/websites-win/800/800",
    color: "bg-[#222222]",
    textColor: "text-white",
    buttonColor: "bg-[#b4ff39] text-black",
    link: "/services/website-design"
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id="services" className="py-32 bg-[#f5f5f5]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Services
            </h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              Built for growth.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We craft marketing campaigns built for growth. Strategy, creative,
              media, and web come together to turn attention into action, and
              action into measurable results.
            </p>
          </div>
          <Link
            href="/services/website-design"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative"
          >
            Our Services 
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/20" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>

        <div className="relative flex flex-col gap-[15vh] md:gap-[25vh] pb-[10vh]">
          {SERVICES.map((service, index) => {
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
                key={service.title}
                style={{ y: yOffset, scale }}
                className={`sticky top-24 md:top-32 w-full rounded-[2rem] overflow-hidden ${service.color} ${service.textColor} shadow-2xl`}
              >
                <div className="flex flex-col md:flex-row h-full max-h-[calc(100vh-7rem)] md:max-h-[calc(100vh-10rem)]">
                  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center overflow-y-auto hide-scrollbar">
                    <service.icon className="w-8 h-8 md:w-12 md:h-12 mb-6 md:mb-8 opacity-80 shrink-0" />
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 md:mb-6 leading-tight shrink-0">
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg opacity-80 mb-8 md:mb-12 leading-relaxed shrink-0">
                      {service.description}
                    </p>
                    <div className="shrink-0 pb-4 md:pb-0">
                      <Link
                        href={service.link}
                        className={`group inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105 ${service.buttonColor}`}
                      >
                        Learn More <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-48 min-h-[200px] md:h-auto md:min-h-[400px] relative shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
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
