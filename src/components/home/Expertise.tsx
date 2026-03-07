'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const EXPERTISE_ITEMS = [
  {
    title: 'Web Development',
    image: 'https://picsum.photos/seed/webdev/600/800',
    color: 'from-blue-500/20 to-transparent',
  },
  {
    title: 'Social Media',
    image: 'https://picsum.photos/seed/social/600/800',
    color: 'from-purple-500/20 to-transparent',
  },
  {
    title: 'Analytics',
    image: 'https://picsum.photos/seed/analytics/600/800',
    color: 'from-green-500/20 to-transparent',
  },
  {
    title: 'AI Automations',
    image: 'https://picsum.photos/seed/ai/600/800',
    color: 'from-indigo-500/20 to-transparent',
  },
  {
    title: 'Data-Driven Solutions',
    image: 'https://picsum.photos/seed/data/600/800',
    color: 'from-orange-500/20 to-transparent',
  },
];

export default function Expertise() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (carouselRef.current) {
        const scrollWidth = carouselRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(Math.max(0, scrollWidth - viewportWidth));
      }
    };

    updateScrollRange();
    window.addEventListener('resize', updateScrollRange);
    return () => window.removeEventListener('resize', updateScrollRange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section id="expertise" ref={targetRef} className="relative h-[300vh] bg-[#f5f5f5]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12 w-full shrink-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <div className="max-w-2xl">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
                Expertise
              </h3>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6">
                The value of expertise.
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Our deep industry knowledge lets us quickly focus on your key questions and challenges. We understand the complexity of your organization.
              </p>
            </div>
            <a
              href="#expertise"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative shrink-0"
            >
              Our Expertise 
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/20" />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

        <motion.div
          ref={carouselRef}
          style={{ x }}
          className="flex gap-4 md:gap-6 pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2))] pr-4 md:pr-8 w-max items-center"
        >
          {EXPERTISE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="relative h-[50vh] min-h-[320px] max-h-[600px] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shrink-0 shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                <h3 className="text-xl md:text-3xl font-display font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h3>
                <div className="h-1 w-12 bg-[#b4ff39] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
