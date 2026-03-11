'use client';

import { Container } from '@/components/ui/Container';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const CARDS = [
  {
    title: "About Us",
    description: "Discover our journey and the vision that drives our creative process.",
    tags: ["Our Story", "Vision", "Values"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
    link: "/about"
  },
  {
    title: "Our Team",
    description: "Meet the passionate experts who turn big ideas into reality.",
    tags: ["Specialists", "Culture", "Talent"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    link: "/team"
  }
];

export default function AgencyPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 pb-24">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-[#88c222] mb-4 block"
          >
            The Agency
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6"
          >
            Who We Are.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            A collective of digital innovators, storytellers, and technical experts dedicated to propelling brands forward.
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {CARDS.map((card, index) => (
            <Link key={card.title} href={card.link}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer h-full bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#b4ff39]/0 group-hover:bg-[#b4ff39]/20 transition-colors duration-500 flex items-center justify-center">
                    <span className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-75 group-hover:scale-100 transform shadow-lg">
                      <ArrowUpRight size={24} />
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 group-hover:text-[#88c222] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 text-lg mb-8 flex-grow">
                    {card.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-wider bg-gray-100 px-3 py-1.5 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
