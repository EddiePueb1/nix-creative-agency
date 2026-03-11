'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';

const JOURNEY_STEPS = [
  {
    year: "Phase 1: The Spark",
    title: "How it all started.",
    description: "Every great agency starts with a simple idea: things can be done better. We noticed a gap in the market where creativity was disconnected from actual business growth.",
    image: "https://picsum.photos/seed/phase1/800/600",
  },
  {
    year: "Phase 2: Building the Foundation",
    title: "Assembling the team.",
    description: "We brought together a group of passionate designers, developers, and strategists. The goal was to build a collective that genuinely cared about client outcomes.",
    image: "https://picsum.photos/seed/phase2/800/600",
  },
  {
    year: "Phase 3: Scaling Impact",
    title: "Taking things to the next level.",
    description: "As our client base grew, so did our capabilities. We expanded from simple web design into comprehensive, data-driven marketing ecosystems.",
    image: "https://picsum.photos/seed/phase3/800/600",
  },
  {
    year: "Phase 4: The Future",
    title: "Continuous evolution.",
    description: "Today, we continue to push boundaries, leveraging cutting-edge technology and timeless design principles to build brands that lead their industries.",
    image: "https://picsum.photos/seed/phase4/800/600",
  }
];

export function JourneyScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through the entire component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto relative">

          <div className="text-center mb-16 md:mb-24 relative z-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6"
            >
              The Journey
            </motion.h3>
          </div>

          {/* Smooth Curved SVG Background (Desktop Only) */}
          <div className="absolute top-[80px] bottom-0 left-0 right-0 hidden md:block z-0 pointer-events-none">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 1200"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Static Background Path */}
              <path
                d="M 500 0 L 500 100 A 40 40 0 0 1 460 140 L 290 140 A 40 40 0 0 0 250 180 L 250 320 A 40 40 0 0 0 290 360 L 710 360 A 40 40 0 0 1 750 400 L 750 540 A 40 40 0 0 1 710 580 L 290 580 A 40 40 0 0 0 250 620 L 250 760 A 40 40 0 0 0 290 800 L 710 800 A 40 40 0 0 1 750 840 L 750 980 A 40 40 0 0 1 710 1020 L 500 1020 A 40 40 0 0 0 460 1060 L 460 1200"
                stroke="#e5e7eb"
                strokeWidth="8"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />

              {/* Animated Draw Path */}
              <motion.path
                d="M 500 0 L 500 100 A 40 40 0 0 1 460 140 L 290 140 A 40 40 0 0 0 250 180 L 250 320 A 40 40 0 0 0 290 360 L 710 360 A 40 40 0 0 1 750 400 L 750 540 A 40 40 0 0 1 710 580 L 290 580 A 40 40 0 0 0 250 620 L 250 760 A 40 40 0 0 0 290 800 L 710 800 A 40 40 0 0 1 750 840 L 750 980 A 40 40 0 0 1 710 1020 L 500 1020 A 40 40 0 0 0 460 1060 L 460 1200"
                stroke="#b4ff39"
                strokeWidth="8"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
              />
            </svg>
          </div>

          {/* Traveling Object along the SVG path */}
          <div className="absolute top-[80px] bottom-0 left-0 right-0 hidden md:block z-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 1200" preserveAspectRatio="none">
              <motion.rect
                height="12"
                rx="6"
                fill="#b4ff39"
                stroke="#fff"
                strokeWidth="2"
                style={{
                  offsetPath: 'path("M 500 0 L 500 100 A 40 40 0 0 1 460 140 L 290 140 A 40 40 0 0 0 250 180 L 250 320 A 40 40 0 0 0 290 360 L 710 360 A 40 40 0 0 1 750 400 L 750 540 A 40 40 0 0 1 710 580 L 290 580 A 40 40 0 0 0 250 620 L 250 760 A 40 40 0 0 0 290 800 L 710 800 A 40 40 0 0 1 750 840 L 750 980 A 40 40 0 0 1 710 1020 L 500 1020 A 40 40 0 0 0 460 1060 L 460 1200")',
                  offsetDistance: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                  width: useTransform(scrollYProgress, [0, 0.05], [200, 40]),
                  x: useTransform(scrollYProgress, [0, 0.05], [-100, -20]),
                  y: -6,
                  filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))"
                } as any}
              />
            </svg>
          </div>

          {/* Content Container */}
          {/* Added pb-[100vh] on mobile to give enough scroll distance for the last sticky card */}
          <div className="relative z-10 md:pt-10 pb-[50vh] md:pb-0 md:space-y-48">
            {JOURNEY_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`
                      /* Mobile Stacked Cards (Card Flipper) Approach */
                      sticky top-[15vh] md:static
                      mb-8 md:mb-0
                      
                      /* Desktop Approach */
                      md:relative md:flex md:items-center md:justify-between px-4 md:px-0
                      ${isEven ? 'md:flex-row-reverse' : ''}
                    `}
                  style={{
                    // Slight z-index increment to ensure stacking order for overlapping
                    zIndex: index + 1
                  }}
                >

                  {/* The Dot indicator (Desktop Only) */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-[6px] border-gray-200 hidden md:block z-20">
                    <motion.div
                      className="w-full h-full bg-[#b4ff39] rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="bg-white p-8 md:bg-white/80 md:backdrop-blur-md rounded-3xl shadow-xl border border-gray-100 md:border-white hover:shadow-2xl transition-all duration-300"
                    >
                      <span className="text-sm font-bold text-[#b4ff39] uppercase tracking-wider mb-2 block drop-shadow-sm">
                        {step.year}
                      </span>
                      <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-6 md:mb-0">
                        {step.description}
                      </p>

                      {/* Mobile Image Layer (Inline in the card) */}
                      <div className="block md:hidden aspect-video rounded-2xl overflow-hidden mt-6">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Desktop Image Box (Hidden on Mobile) */}
                  <div className={`hidden md:block w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.90 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false, margin: "-100px" }}
                      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                      className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-4 ring-white"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                      />
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
