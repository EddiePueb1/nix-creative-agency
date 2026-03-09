'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { ServiceData } from '../../data/services';

interface ServiceHeroProps {
  data: ServiceData['hero'];
}

export default function ServiceHero({ data }: ServiceHeroProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-32">
      <div className="mb-12">
        <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
          {data.subtitle}
        </h3>
        <h1 className="text-5xl md:text-7xl font-display font-bold text-gray-900">
          {data.title}
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#111111] text-white rounded-[2rem] overflow-hidden flex flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            {data.heading2}
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {data.paragraph1}
          </p>
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            {data.paragraph2}
          </p>
          <div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full border border-white/20 hover:border-transparent transition-colors text-sm font-medium relative overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">{data.ctaText}</span>
              <div className="relative z-10 bg-[#b4ff39] text-black p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
              <div className="absolute right-2 top-2 w-8 h-8 bg-[#b4ff39] rounded-full group-hover:scale-[15] transition-transform duration-500 ease-in-out z-0" />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative min-h-[400px]">
          <img
            src={data.image}
            alt={data.heading2}
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </motion.div>
    </section>
  );
}
