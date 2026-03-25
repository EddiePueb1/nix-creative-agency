'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const WHY_ITEMS = [
  {
    icon: '01',
    title: 'You work directly with us — no handoffs.',
    description: "No account managers, no junior teams, no getting passed around. When you work with Nix Creative, you work directly with the person doing the work. That means faster decisions, better communication, and results we both own.",
  },
  {
    icon: '02',
    title: 'We only move when data tells us to.',
    description: "We don't run campaigns on gut feeling or copy what everyone else is doing. Every strategy starts with your numbers, your market, and your goals — and we adjust continuously based on what the data actually shows.",
  },
  {
    icon: '03',
    title: 'Big agency quality. Real-world pricing.',
    description: "We built this agency specifically for businesses that can't justify a $10,000/month retainer but still deserve serious, professional marketing. You get the strategy, the execution, and the accountability — without the overhead.",
  },
  {
    icon: '04',
    title: "We're invested in your growth, not just your contract.",
    description: "We measure success by what happens to your business — more calls, more leads, more revenue. If your marketing isn't producing results you can point to, we want to know about it just as much as you do.",
  },
];

const FAQ_ITEMS = [
  {
    question: 'Do you only work with businesses in Myrtle Beach?',
    answer: "No — we're based in Myrtle Beach, SC, but we work with service businesses and local brands across the United States. Our team operates fully remotely, which means we can serve clients anywhere without any drop in quality or communication.",
  },
  {
    question: 'What kind of businesses do you work with?',
    answer: "We specialize in service-based and service-area businesses — contractors, home service providers, cleaning companies, landscapers, local shops, and any business that needs more leads, a stronger brand, or a better digital presence. We also work with new businesses building their brand from the ground up.",
  },
  {
    question: 'How long does it take to see results?',
    answer: "It depends on the service. A website redesign or brand identity project can be completed in 2–6 weeks. SEO is a longer game — you'll typically see meaningful movement in 3–6 months. Social media and AI automations can show impact within the first 30 days. We'll set clear expectations before we start anything.",
  },
  {
    question: 'What does working with Nix Creative actually look like?',
    answer: "We start with a consultation to understand your business, your goals, and where you're losing ground right now. From there we build a focused plan — no bloated proposals, no services you don't need. You'll always know what we're working on, why, and what results we're targeting.",
  },
  {
    question: 'Do you offer ongoing support or one-time projects?',
    answer: "Both. We handle one-time projects like website builds, brand identity packages, and social media setup. We also offer ongoing monthly partnerships for businesses that want consistent support with SEO, social media management, analytics, and AI automations.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900 group-hover:text-[#88c222] transition-colors leading-snug">
          {question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-gray-100 group-hover:bg-[#b4ff39] flex items-center justify-center transition-colors duration-200">
          {open
            ? <Minus size={14} className="text-gray-700" />
            : <Plus size={14} className="text-gray-700" />
          }
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 text-sm leading-relaxed pb-5 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function WhyNix() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="mb-24">
          <div className="max-w-2xl mb-14">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
              Why Nix Creative
            </h3>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight">
              What makes us different.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.icon}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-7 rounded-2xl bg-[#f5f5f5] hover:bg-[#eef9d0] transition-colors duration-300 group"
              >
                <span className="text-xs font-bold tracking-widest text-[#b4ff39] bg-[#111111] rounded-lg px-2 py-1 h-fit shrink-0 mt-0.5">
                  {item.icon}
                </span>
                <div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-24">
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-4">
              FAQ
            </h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 leading-tight mb-4">
              Questions we get all the time.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Don't see your question here?{' '}
              <a href="/contact" className="text-[#88c222] font-medium hover:underline">
                Reach out directly
              </a>{' '}
              — we're happy to talk through your specific situation.
            </p>
          </div>

          <div className="md:col-span-3">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
