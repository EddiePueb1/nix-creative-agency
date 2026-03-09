'use client';

import { motion, useScroll } from 'motion/react';
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
          
          <div className="text-center mb-24 relative z-20">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6"
            >
              The Journey
            </motion.h3>
          </div>

          <div className="relative">
            {/* 
              SVG ZigZag Line Background (Desktop Only) 
            */}
            <div className="absolute top-0 bottom-0 left-0 right-0 hidden md:block z-0 pointer-events-none">
              <svg 
                className="w-full h-full" 
                viewBox="0 0 1000 1200" 
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Static Background Path */}
                <path 
                  d="M 500 0 L 500 100 Q 500 150 630 150 L 900 150 Q 950 150 950 200 L 950 400 Q 950 450 900 450 L 100 450 Q 50 450 50 500 L 50 700 Q 50 750 100 750 L 900 750 Q 950 750 950 800 L 950 1000 Q 950 1050 900 1050 L 500 1050 Q 500 1100 500 1200"
                  stroke="#e5e7eb" 
                  strokeWidth="8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
                
                {/* Animated Draw Path */}
                <motion.path 
                  d="M 500 0 L 500 100 Q 500 150 630 150 L 900 150 Q 950 150 950 200 L 950 400 Q 950 450 900 450 L 100 450 Q 50 450 50 500 L 50 700 Q 50 750 100 750 L 900 750 Q 950 750 950 800 L 950 1000 Q 950 1050 900 1050 L 500 1050 Q 500 1100 500 1200"
                  stroke="#b4ff39" 
                  strokeWidth="8"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  style={{ pathLength: scrollYProgress }}
                />
              </svg>
            </div>

            {/* Simple Mobile Line (Only visible on small screens) */}
            <div className="absolute left-[39px] top-4 bottom-4 w-[4px] bg-gray-200 md:hidden z-0 rounded-full" />
            <motion.div 
              className="absolute left-[39px] top-4 w-[4px] bg-[#b4ff39] origin-top md:hidden z-10 rounded-full"
              style={{ scaleY: scrollYProgress, height: "100%" }}
            />

            <div className="space-y-32 md:space-y-48 relative z-10 pt-10">
              {JOURNEY_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative flex items-center justify-between md:justify-normal flex-col md:flex-row gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* The Dot indicator (Mobile Only, SVG handles desktop) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-[-7px] w-5 h-5 rounded-full bg-white border-[4px] border-gray-200 md:hidden z-20">
                       <motion.div 
                          className="w-full h-full bg-[#b4ff39] rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: false, margin: "-100px" }}
                          transition={{ duration: 0.3 }}
                       />
                    </div>

                    {/* Content Box */}
                    <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white hover:shadow-2xl transition-all duration-300"
                      >
                        <span className="text-sm font-bold text-[#b4ff39] uppercase tracking-wider mb-2 block drop-shadow-sm">
                          {step.year}
                        </span>
                        <h4 className="text-2xl font-display font-bold text-gray-900 mb-4">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Image Box */}
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
        </div>
      </Container>
    </section>
  );
}
