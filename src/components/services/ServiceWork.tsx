'use client';

import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

import { ServiceData } from '../../data/services';

interface ServiceWorkProps {
  data: ServiceData['work'];
}

export default function ServiceWork({ data }: ServiceWorkProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -600 : 600;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          {data.title}
        </h2>
        <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          {data.subtitle}
        </h3>
      </div>

      <div className="relative">
        <div 
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto hide-scrollbar pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2))] pr-4 md:pr-8 pb-8 snap-x snap-mandatory"
        >
          {data.items.map((item, index) => (
            <motion.div
              key={item.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="w-[320px] md:w-[600px] shrink-0 snap-start group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.client}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="absolute top-6 left-6 right-6 flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">
                  {item.client}
                </p>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-4 flex items-center justify-between">
          <div className="flex gap-4">
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
          
          <a
            href="#work"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative"
          >
            All Case Studies 
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/20" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>
    </section>
  );
}
