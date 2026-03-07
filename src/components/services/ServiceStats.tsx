'use client';

import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';

import { ServiceData } from '../../data/services';

interface ServiceStatsProps {
  data: ServiceData['stats'];
}

export default function ServiceStats({ data }: ServiceStatsProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-green-500/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6">
            {data.subtitle}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.items.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-[2rem] p-8 shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 mb-8">
                {(() => {
                  const IconComponent = LucideIcons[stat.icon as keyof typeof LucideIcons] as React.ElementType;
                  return IconComponent ? <IconComponent size={32} strokeWidth={1.5} /> : null;
                })()}
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4 flex items-baseline">
                <span className="text-3xl text-gray-400 mr-1">{stat.prefix}</span>
                {stat.value}
                <span className="text-3xl text-gray-400 ml-1">{stat.suffix}</span>
              </div>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
