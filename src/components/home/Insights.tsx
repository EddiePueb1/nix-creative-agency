'use client';

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const POSTS = [
  {
    title: "Showing Up With Heart: Meet Our Refreshed Brand",
    date: "02.19.2026",
    image: "https://picsum.photos/seed/brand/800/600",
    color: "from-pink-500/20 to-transparent",
  },
  {
    title: "A Success Story: TechFlow Website",
    date: "02.17.2026",
    image: "https://picsum.photos/seed/success/800/600",
    color: "from-blue-500/20 to-transparent",
  },
  {
    title: "5 Strategic Ways to Use AI in Your Marketing",
    date: "02.10.2026",
    image: "https://picsum.photos/seed/ai-marketing/800/600",
    color: "from-green-500/20 to-transparent",
  },
  {
    title: "Is Your Website Enrollment-Ready for 2026?",
    date: "01.27.2026",
    image: "https://picsum.photos/seed/enrollment/800/600",
    color: "from-yellow-500/20 to-transparent",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Insights
            </h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">
              The latest.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore expert perspectives designed to help you grow your brand
              and stay ahead of the curve.
            </p>
          </div>
          <a
            href="#insights"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative"
          >
            See All Posts 
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/20" />
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        </div>
      </div>

      <div className="relative w-full overflow-x-auto hide-scrollbar pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2))]">
        <div className="flex gap-6 pb-8 pr-8 w-max">
          {POSTS.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="w-[320px] md:w-[480px] group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${post.color} mix-blend-multiply`}
                />
              </div>
              <div className="px-2">
                <span className="text-sm font-medium text-gray-500 mb-3 block">
                  {post.date}
                </span>
                <h3 className="text-2xl font-display font-bold text-gray-900 group-hover:text-gray-600 transition-colors leading-tight">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
