'use client';

import { motion } from 'motion/react';

import { ServiceData } from '../../data/services';

interface ServiceCapabilitiesProps {
  data: ServiceData['capabilities'];
}

export default function ServiceCapabilities({ data }: ServiceCapabilitiesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
            {data.subtitle}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.items.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-gray-50 rounded-[2rem] p-8 md:p-12 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100"
            >
              <h4 className="text-2xl font-display font-bold text-gray-900 mb-6">
                {capability.title}
              </h4>
              <ul className="space-y-3">
                {capability.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#b4ff39] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
