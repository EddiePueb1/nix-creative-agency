'use client';

import { motion } from 'motion/react';
import { Wrench, Home, ShoppingBag, Sprout } from 'lucide-react';

const CLIENT_TYPES = [
  {
    icon: Wrench,
    title: 'Contractors & Trades',
    description: 'Plumbers, electricians, HVAC, roofers, and general contractors who need to get found locally and win more jobs without chasing every lead manually.',
  },
  {
    icon: Home,
    title: 'Home Service Businesses',
    description: 'Cleaning services, landscaping, pest control, and other service-area businesses ready to look professional and grow beyond word-of-mouth referrals.',
  },
  {
    icon: ShoppingBag,
    title: 'Local Shops & Brands',
    description: 'Brick-and-mortar businesses and emerging brands that need a strong digital presence — a real website, a recognizable brand, and a strategy that drives foot traffic and online sales.',
  },
  {
    icon: Sprout,
    title: 'New & Growing Businesses',
    description: 'Entrepreneurs and early-stage businesses building from scratch. We help you launch with a brand that looks established and a digital foundation built to scale.',
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="max-w-3xl mb-16">
          <h3 className="text-sm md:text-base font-semibold tracking-widest uppercase text-gray-500 mb-4">
            Who We Help
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Built for businesses that are ready to grow.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Nix Creative works with service businesses and local brands across the U.S. —
            from solo operators just getting started online to established companies
            looking to scale smarter. If your business relies on getting found,
            building trust, and converting leads, Nix Creative was built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_TYPES.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#b4ff39] hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#b4ff39]/10 group-hover:bg-[#b4ff39] flex items-center justify-center mb-5 transition-colors duration-300">
                <type.icon
                  size={20}
                  className="text-[#88c222] group-hover:text-black transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg xl:text-xl font-display font-bold text-gray-900 mb-3">
                {type.title}
              </h3>
              <p className="text-sm xl:text-base text-gray-500 leading-relaxed">
                {type.description}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 text-center text-gray-500 text-sm">
          Nix Creative — based in Myrtle Beach, SC — working with clients from coast to coast.
        </p>

      </div>
    </section>
  );
}
