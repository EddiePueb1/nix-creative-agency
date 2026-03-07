'use client';

import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

import { ServiceData } from '../../data/services';

interface ServiceIndustriesProps {
  industries: ServiceData['industries'];
}

export default function ServiceIndustries({ industries }: ServiceIndustriesProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          Who We Serve
        </h2>
        <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          Deep Industry Expertise
        </h3>
      </div>

      <div className="relative">
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2))] pr-4 md:pr-8 pb-8 snap-x snap-mandatory"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="w-[300px] md:w-[400px] shrink-0 snap-start group cursor-pointer"
            >
              <div className="relative aspect-[3/2] rounded-3xl overflow-hidden mb-6">
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                  {industry.description}
                </p>
                <h3 className="text-2xl font-display font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                  {industry.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4 flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#111111] hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full bg-[#111111] text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
