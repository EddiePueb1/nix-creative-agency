'use client';

import { Container } from '@/components/ui/Container';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

// Expanded list of projects to showcase on the dedicated page
const PROJECTS = [
  {
    client: "TechFlow",
    title: "Making waves with AI Automations.",
    tags: ["AI Automations", "Data-Driven", "Analytics"],
    image: "https://picsum.photos/seed/techflow/1200/600",
    link: "#"
  },
  {
    client: "Global Reach",
    title: "A healthier, sharper digital home.",
    tags: ["Web Development", "Hosting", "Design"],
    image: "https://picsum.photos/seed/globalreach/1200/600",
    link: "#"
  },
  {
    client: "Stellar Social",
    title: "A bold, modern front door that tells the story.",
    tags: ["Social Media", "Analytics", "Marketing"],
    image: "https://picsum.photos/seed/stellar/1200/600",
    link: "#"
  },
  {
    client: "Vanguard Partners",
    title: "Rebranding for a new era of finance.",
    tags: ["Brand Identity", "Website Design", "SEO"],
    image: "https://picsum.photos/seed/vanguard/1200/600",
    link: "#"
  },
  {
    client: "EcoLife",
    title: "Scaling sustainable products organically.",
    tags: ["SEO", "Content Marketing", "Web Development"],
    image: "https://picsum.photos/seed/ecolife/1200/600",
    link: "#"
  },
  {
    client: "NexGen Retail",
    title: "Data analytics that doubled conversion rates.",
    tags: ["Data & Analytics", "AI Automations"],
    image: "https://picsum.photos/seed/nexgen/1200/600",
    link: "#"
  }
];

export default function ResultsPage() {
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
            Case Studies
          </motion.h3>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6"
          >
            Our Results.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            Explore our past projects and see how we've helped ambitious brands transform their digital presence and scale their impact.
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {PROJECTS.map((project, index) => (
            <Link key={project.client} href={project.link}>
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
                    src={project.image}
                    alt={project.title}
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
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                    {project.client}
                  </h4>
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 text-gray-900 group-hover:text-[#88c222] transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
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
