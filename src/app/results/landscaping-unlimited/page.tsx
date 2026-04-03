'use client';

import { motion } from 'motion/react';
import { ArrowLeft, ArrowUpRight, Globe, BarChart2, Users, TrendingUp, Facebook, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function LandscapingUnlimitedCaseStudy() {
  const stats = [
    {
      value: '617%',
      label: 'Increase in website traffic',
      sublabel: 'From 41 avg/month to 294 visitors',
      icon: TrendingUp,
    },
    {
      value: '825',
      label: 'Total site visitors',
      sublabel: '205 in the last 30 days alone',
      icon: Users,
    },
    {
      value: '200',
      label: 'Social views',
      sublabel: '32 new in the last 30 days',
      icon: BarChart2,
    },
    {
      value: '76',
      label: 'Performance score',
      sublabel: 'Up from an unoptimized baseline',
      icon: Globe,
    },
  ];

  const deliverables = [
    {
      category: 'Website',
      items: [
        'Full website redesign — mobile-first, conversion-focused layout',
        'SEO-optimized page structure, headings, and meta data',
        'Service pages for Landscaping, Hardscaping, and Water Management',
        'Residential and commercial landing sections',
        'Contact forms and call-to-action placements throughout',
        'Performance and speed optimization',
      ],
    },
    {
      category: 'Social Media',
      items: [
        'Facebook Business Page setup and optimization',
        'Instagram profile created and connected',
        'LinkedIn company page established',
        'Meta Business Suite configured for unified management',
        'Profile branding aligned across all three platforms',
      ],
    },
    {
      category: 'Local SEO',
      items: [
        'Google Business Profile fully optimized',
        'NAP (Name, Address, Phone) consistency across all platforms',
        'Local keyword targeting for Myrtle Beach and the Grand Strand',
        'Category and service area configuration',
        'Review generation strategy implemented',
      ],
    },
  ];

  return (
    <main className="bg-[#f5f5f5] min-h-screen">

      {/* Hero */}
      <section className="bg-[#111111] pt-32 pb-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, white 40px, white 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, white 40px, white 41px)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/results"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#b4ff39] transition-colors mb-12 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to Results
            </Link>

            {/* Label */}
            <p className="text-sm font-semibold tracking-widest uppercase text-[#b4ff39] mb-6">
              Case Study
            </p>

            {/* Title */}
            <h1 className="font-display font-bold text-white text-5xl md:text-7xl leading-none mb-6">
              Landscaping<br />Unlimited LLC
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
              A Myrtle Beach landscaping company in business since 2009 — with no real digital presence. We built them one from the ground up and traffic jumped 617% within months.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {['Website Design', 'Local SEO', 'Social Media', 'Google Business Profile'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#b4ff39]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-black/10">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="py-8 px-6 md:px-8"
                >
                  <Icon size={16} className="text-black/40 mb-3" />
                  <div className="font-display font-bold text-black text-3xl md:text-4xl leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-black font-semibold text-sm mb-0.5">{stat.label}</div>
                  <div className="text-black/50 text-xs">{stat.sublabel}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: narrative */}
          <div className="lg:col-span-2 space-y-16">

            {/* The challenge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                The Challenge
              </p>
              <h2 className="font-display font-bold text-[#111111] text-3xl md:text-4xl mb-6">
                15 years in business. Almost invisible online.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Landscaping Unlimited LLC has been transforming yards across Myrtle Beach and the Grand Strand since 2009. Family-owned and built on craftsmanship, they had a strong reputation among existing clients — but almost no digital footprint to show for it.
                </p>
                <p>
                  Their website wasn't optimized for search. Their Google Business Profile was incomplete. They had no social media presence to speak of. When someone in Myrtle Beach searched for a landscaper, Landscaping Unlimited simply wasn't showing up.
                </p>
                <p>
                  The work was there. The results were there. The business just needed to be found.
                </p>
              </div>
            </motion.div>

            {/* What we did */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                What We Built
              </p>
              <h2 className="font-display font-bold text-[#111111] text-3xl md:text-4xl mb-6">
                A complete digital presence — from scratch.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We started with the website — the foundation everything else builds on. The new site was designed mobile-first with a clear service structure, conversion-focused CTAs, and on-page SEO baked in from day one. Services like landscaping, hardscaping, and water management each got their own dedicated sections, making it easy for visitors to find what they needed and take action.
                </p>
                
                {/* Embedded Landing Page Previews */}
                <div className="py-8 grid gap-6">
                  {/* Hero Screenshot */}
                  <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md hover:shadow-lg transition-shadow">
                     <img src="/images/results/landscaping/landscaping-hero.png" alt="Landscaping Unlimited Hero Section" className="w-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/nixlandscapinghero/1200/800'}} />
                  </div>
                  
                  {/* Split grid for smaller sections */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
                       <img src="/images/results/landscaping/landscaping-services.png" alt="Services Showcase" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/nixlandscapingservices/600/400'}} />
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
                       <img src="/images/results/landscaping/landscaping-contractors.png" alt="Homeowners & Contractors" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/nixlandscapinggrid/600/400'}} />
                    </div>
                  </div>

                  {/* About Section Screenshot */}
                  <div className="rounded-2xl overflow-hidden border border-black/5 shadow-md">
                     <img src="/images/results/landscaping/landscaping-about.png" alt="About Section Layout" className="w-full object-cover" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/nixlandscapingabout/1200/600'}} />
                  </div>
                </div>

                <p>
                  At the same time, we set up and optimized their Google Business Profile — the single most important factor for local search visibility. Accurate NAP data, the right service categories, and a review generation strategy to build credibility over time.
                </p>
                <p>
                  Finally, we established their social media presence across Facebook, Instagram, and LinkedIn through Meta Business Suite, giving them a unified platform to manage everything and start building an audience.
                </p>
              </div>
            </motion.div>

            {/* The result */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-4">
                The Result
              </p>
              <h2 className="font-display font-bold text-[#111111] text-3xl md:text-4xl mb-6">
                Traffic spiked 617% the month the changes went live.
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed mb-12">
                <p>
                  Before the redesign, Landscaping Unlimited was averaging around 41 visitors per month. The month the new site and Google Business Profile optimizations went live, traffic jumped to 294 visitors — a 617% increase in a single month.
                </p>

                {/* Analytical Image Proof provided by user */}
                <div className="my-10 rounded-2xl overflow-hidden border border-black/5 shadow-lg relative bg-white p-2">
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-black z-10 shadow-sm border border-black/5">
                     Verified Analytics
                   </div>
                   <img src="/images/results/landscaping/landscaping-analytics.png" alt="Google Analytics Traffic Growth" className="w-full object-contain rounded-xl" onError={(e) => { e.currentTarget.src='https://picsum.photos/seed/nixlandscapingstats/1200/600'}} />
                </div>

                <p>
                  The spike wasn't a fluke. Traffic held and continued growing in the months that followed. Total site visitors crossed 825, social views reached 200, and the business started appearing in local search results it had never ranked for before.
                </p>
                <p>
                  More visibility. More inquiries. The same great landscaping work — just finally getting the attention it deserved.
                </p>
              </div>
            </motion.div>

            {/* Premium Traffic chart visualization */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#111111] rounded-3xl p-8 md:p-10"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">
                    Monthly Traffic Trend
                  </p>
                  <p className="font-display font-bold text-white text-2xl">
                    April 2025 — March 2026
                  </p>
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-2 md:gap-3 h-40">
                {[
                  { month: 'Apr', value: 5, pct: 2 },
                  { month: 'May', value: 8, pct: 3 },
                  { month: 'Jun', value: 35, pct: 12 },
                  { month: 'Jul', value: 50, pct: 17 },
                  { month: 'Aug', value: 48, pct: 16 },
                  { month: 'Sep', value: 40, pct: 14 },
                  { month: 'Oct', value: 10, pct: 3 },
                  { month: 'Nov', value: 28, pct: 10 },
                  { month: 'Dec', value: 20, pct: 7 },
                  { month: 'Jan', value: 22, pct: 8 },
                  { month: 'Feb', value: 294, pct: 100, highlight: true },
                  { month: 'Mar', value: 100, pct: 34, recent: true },
                ].map((bar) => (
                  <div key={bar.month} className="flex-1 flex flex-col items-center gap-2">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full rounded-t-md ${
                        bar.highlight
                          ? 'bg-[#b4ff39]'
                          : bar.recent
                          ? 'bg-gray-500'
                          : 'bg-gray-700'
                      }`}
                      style={{ minHeight: 4 }}
                    />
                    <span className="text-gray-500 text-[10px] md:text-xs">{bar.month}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-[#b4ff39]" />
                  <span className="text-gray-400 text-sm">Feb — 294 visitors (1mo post-launch)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gray-700" />
                  <span className="text-gray-400 text-sm">Pre-optimization baseline</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right: sidebar */}
          <div className="space-y-8">

            {/* Client info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6">
                Client
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Business</p>
                  <p className="font-display font-bold text-[#111111]">Landscaping Unlimited LLC</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Location</p>
                  <p className="text-[#111111] font-medium">Myrtle Beach, SC</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Industry</p>
                  <p className="text-[#111111] font-medium">Landscaping & Outdoor Services</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">In business since</p>
                  <p className="text-[#111111] font-medium">2009</p>
                </div>
              </div>

              {/* Visit site */}
              <a
                href="#"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[#f5f5f5] text-gray-700 border border-transparent rounded-full py-3 text-sm font-semibold hover:bg-white hover:border-[#111111] hover:text-[#111111] transition-all"
              >
                Visit Website
                <ExternalLink size={14} />
              </a>
            </motion.div>

            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-6">
                Deliverables
              </p>
              <div className="space-y-8">
                {deliverables.map((section) => (
                  <div key={section.category}>
                    <p className="font-display font-bold text-[#111111] mb-3">{section.category}</p>
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#b4ff39] shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#b4ff39] rounded-3xl p-8 shadow-sm"
            >
              <p className="font-display font-bold text-[#111111] text-xl mb-2">
                Want results like this?
              </p>
              <p className="text-black/70 text-sm mb-6">
                We build digital presences for service businesses that need to be found. Let's talk about yours.
              </p>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 bg-[#111111] text-white rounded-full py-3 text-sm font-semibold hover:bg-gray-800 hover:shadow-lg transition-all"
              >
                Start a conversation
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

    </main>
  );
}
