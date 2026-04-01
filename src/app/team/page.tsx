'use client';

import { Container } from '@/components/ui/Container';
import { motion } from 'motion/react';

const PILLARS = ["Engineer", "Consultant", "Data Thinker"];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 pb-24">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold tracking-widest uppercase text-[#88c222] mb-4 block"
          >
            Leadership
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6"
          >
            Our Team.
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            The technical expertise driving real growth for your business.
          </motion.h2>
        </div>

        {/* Founder Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-sm overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-10 lg:gap-16 items-start"
        >
          {/* Image */}
          <div className="w-full max-w-sm mx-auto lg:w-1/3 shrink-0 rounded-2xl overflow-hidden shadow-lg aspect-[4/5] object-center bg-gray-100">
            <img 
              src="/images/eddie.jpg" 
              alt="Eddie Puebla"
              className="object-cover w-full h-full object-center"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2 text-center lg:text-left">
              Eddie Puebla
            </h2>
            <h3 className="text-lg font-semibold text-[#88c222] uppercase tracking-wide mb-8 text-center lg:text-left">
              Founder & Digital Strategist
            </h3>

            <div className="space-y-6 text-gray-600 leading-relaxed text-[1.05rem] md:text-lg">
              <p>
                "I didn't stumble into digital marketing — I built my way here. With over six years of experience spanning software engineering, infrastructure, front-end development, project management, and business consulting with PwC, I bring a level of technical depth and strategic thinking that most marketing agencies simply can't offer.
              </p>
              <p>
                But the real unlock was data. When you truly understand data, you start to understand how people think — what they're searching for, what makes them trust a business, what makes them click, call, or walk away. Marketing stops being guesswork and starts being a system you can actually build and measure.
              </p>
              <p>
                That's why I started Nix Creative. Because most small businesses are flying blind — they don't know how people are finding them, what those people are seeing when they do, or what's stopping them from becoming a customer. I built this agency to change that. To give service businesses a clear picture of where they stand, how people are interacting with their brand across every channel, and exactly what levers to pull to grow.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed italic border-l-4 border-[#b4ff39] pl-6">
                "When you work with Nix Creative, you're working directly with me — a former engineer who understands your website, a consultant who understands your business, and someone who uses data to understand your customers."
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
              {PILLARS.map((pillar) => (
                <span key={pillar} className="text-sm font-semibold uppercase tracking-wider bg-black text-white px-5 py-2.5 rounded-full shadow-md">
                  {pillar}
                </span>
              ))}
            </div>
            
          </div>
        </motion.div>
      </Container>
    </main>
  );
}
