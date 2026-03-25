'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const EXPERTISE_ITEMS = [
  {
    title: 'Website Design',
    description: 'A professional website that works around the clock to attract new clients, build trust, and convert visitors — built for performance, not just looks.',
    image: '/images/expertise-website-design.jpg',
    color: 'from-blue-500/20 to-transparent',
    link: '/services/website-design',
  },
  {
    title: 'SEO',
    description: 'Get found by customers who are actively searching for what you offer. We optimize your site and Google Business Profile so you rank where it counts.',
    image: '/images/expertise-seo.jpg',
    color: 'from-indigo-500/20 to-transparent',
    link: '/services/seo',
  },
  {
    title: 'Social Media',
    description: 'Consistent, on-brand social media presence across the platforms your customers actually use — content that builds awareness and drives real engagement.',
    image: '/images/expertise-social-media.jpg',
    color: 'from-purple-500/20 to-transparent',
    link: '/services/social-media',
  },
  {
    title: 'Brand Identity',
    description: 'A cohesive brand — logo, colors, typography, and voice — that makes your business look established, professional, and worth hiring before a word is spoken.',
    image: '/images/expertise-brand-identity.jpg',
    color: 'from-orange-500/20 to-transparent',
    link: '/services/branding',
  },
  {
    title: 'Data & Analytics',
    description: "Know exactly what's working and what isn't. We turn your marketing data into clear insights so every dollar you spend is backed by evidence, not guesswork.",
    image: '/images/expertise-data-analytics.jpg',
    color: 'from-green-500/20 to-transparent',
    link: '/services/analytics',
  },
  {
    title: 'AI Automations',
    description: 'Stop losing hours to repetitive tasks. We build custom automations for follow-ups, scheduling, lead routing, and reporting so your business runs leaner and scales faster.',
    image: '/images/expertise-ai-automations.jpg',
    color: 'from-pink-500/20 to-transparent',
    link: '/services/ai-automations',
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
    // Slight delay to ensure fonts/images are calculated
    setTimeout(updateScrollRange, 100);
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
                The value of our expertise.
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Six core disciplines, one focused goal — more clients for your business. Every service we offer is chosen because it moves the needle for service-area businesses and local brands ready to grow.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider pb-1 relative shrink-0"
            >
              Our Services
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black/20" />
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </div>

        <motion.div
          ref={carouselRef}
          style={{ x }}
          className="flex gap-4 md:gap-6 pl-4 md:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2))] pr-4 md:pr-8 w-max items-center"
        >
          {EXPERTISE_ITEMS.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="relative h-[50vh] min-h-[320px] max-h-[600px] aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shrink-0 shadow-lg block"
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
                <p className="text-sm text-gray-300 leading-relaxed mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-3">
                  {item.description}
                </p>
                <div className="h-1 w-12 bg-[#b4ff39] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
