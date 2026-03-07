'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const NavContent = () => (
    <>
      <Link href="/" className="text-2xl font-display font-bold tracking-tight">
        nix
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
        <div className="relative group">
          <Link href="/#expertise" className="hover:text-black transition-colors flex items-center gap-1 py-2">
            Expertise <span className="text-gray-400 text-xs transition-transform duration-300 group-hover:rotate-45">+</span>
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
            <div className="bg-white border border-black/5 shadow-xl rounded-2xl p-2 w-48 flex flex-col">
              <Link href="/services/website-design" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Website Design</Link>
              <Link href="/services/social-media" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Social Media</Link>
              <Link href="/services/analytics" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Analytics</Link>
              <Link href="/services/ai-automations" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">AI Automations</Link>
            </div>
          </div>
        </div>

        <div className="relative group">
          <Link href="/#services" className="hover:text-black transition-colors flex items-center gap-1 py-2">
            Services <span className="text-gray-400 text-xs transition-transform duration-300 group-hover:rotate-45">+</span>
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
            <div className="bg-white border border-black/5 shadow-xl rounded-2xl p-2 w-48 flex flex-col">
              <Link href="/services/digital-strategy" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Digital Strategy</Link>
              <Link href="/services/content-creation" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Content Creation</Link>
              <Link href="/services/paid-media" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Paid Media</Link>
            </div>
          </div>
        </div>

        <Link href="/#results" className="hover:text-black transition-colors py-2">
          Results
        </Link>

        <div className="relative group">
          <Link href="/#agency" className="hover:text-black transition-colors flex items-center gap-1 py-2">
            Agency <span className="text-gray-400 text-xs transition-transform duration-300 group-hover:rotate-45">+</span>
          </Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
            <div className="bg-white border border-black/5 shadow-xl rounded-2xl p-2 w-48 flex flex-col">
              <Link href="/about" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">About Us</Link>
              <Link href="/team" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Our Team</Link>
              <Link href="/careers" className="px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-xl transition-colors">Careers</Link>
            </div>
          </div>
        </div>

        <Link href="/#insights" className="hover:text-black transition-colors py-2">
          Insights
        </Link>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          href="/#contact"
          className="hidden md:flex relative items-center gap-3 pl-4 pr-1.5 py-1.5 rounded-full border border-black/10 hover:border-transparent transition-colors text-sm font-medium group overflow-hidden"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-300">Contact Us</span>
          <div className="relative z-10 text-black p-1.5 rounded-full">
            <MessageCircle size={14} />
          </div>
          <div className="absolute right-1.5 top-1.5 w-[26px] h-[26px] bg-[#b4ff39] rounded-full group-hover:scale-[15] transition-transform duration-500 ease-in-out z-0" />
        </Link>
        
        <button 
          className="md:hidden p-2 -mr-2 text-black"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </>
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {!isScrolled ? (
          <motion.header
            key="full"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-40 px-0"
          >
            <div className="bg-white/80 backdrop-blur-md border-b border-black/5 px-6 md:px-8 py-4 md:py-5 flex items-center justify-between">
              <NavContent />
            </div>
          </motion.header>
        ) : (
          <motion.header
            key="pill"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-full max-w-5xl z-40"
          >
            <div className="bg-white/80 backdrop-blur-md border border-black/5 shadow-sm rounded-full px-5 md:px-6 py-3 flex items-center justify-between">
              <NavContent />
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
              <Link href="/" className="text-2xl font-display font-bold tracking-tight" onClick={() => setIsMobileMenuOpen(false)}>
                nix
              </Link>
              <button 
                className="p-2 -mr-2 text-black bg-gray-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-6 overflow-y-auto pb-24">
              <div>
                <Link href="/#expertise" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold block mb-4">Expertise</Link>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-black/10">
                  <Link href="/services/website-design" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Website Design</Link>
                  <Link href="/services/social-media" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Social Media</Link>
                  <Link href="/services/analytics" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Analytics</Link>
                  <Link href="/services/ai-automations" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">AI Automations</Link>
                </div>
              </div>
              
              <div>
                <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold block mb-4 mt-2">Services</Link>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-black/10">
                  <Link href="/services/digital-strategy" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Digital Strategy</Link>
                  <Link href="/services/content-creation" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Content Creation</Link>
                  <Link href="/services/paid-media" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Paid Media</Link>
                </div>
              </div>

              <Link href="/#results" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold mt-2">Results</Link>

              <div>
                <Link href="/#agency" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold block mb-4 mt-2">Agency</Link>
                <div className="flex flex-col gap-3 pl-4 border-l-2 border-black/10">
                  <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">About Us</Link>
                  <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Our Team</Link>
                  <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-gray-600 hover:text-black">Careers</Link>
                </div>
              </div>

              <Link href="/#insights" onClick={() => setIsMobileMenuOpen(false)} className="text-3xl font-display font-bold mt-2">Insights</Link>
              
              <Link
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 flex items-center justify-center gap-3 py-4 rounded-full bg-[#b4ff39] text-black text-lg font-medium"
              >
                Contact Us
                <MessageCircle size={20} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
