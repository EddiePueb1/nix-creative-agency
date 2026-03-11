"use client";

import { Button } from "./Button";
import { motion } from "motion/react";

export interface ContactFormProps {
  title?: string;
  subtext?: string;
  className?: string;
}

export function ContactForm({
  title = "Let's talk about your website",
  subtext = "If you're ready for a website that delivers just real results, let's talk about your goals.",
  className = ""
}: ContactFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-[#111111] text-white shadow-sm rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-white/10 ${className}`}
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">{subtext}</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 ml-1">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="Jane"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 ml-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="jane@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 ml-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 ml-1">Company or Organization Name</label>
            <input
              type="text"
              id="company"
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all hover:border-white/20"
              placeholder="Acme Corp"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 ml-1">How can we help you?</label>
            <textarea
              id="message"
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#88c222] focus:border-transparent text-white placeholder-gray-500 transition-all resize-none hover:border-white/20"
              placeholder="Tell us about your project or goals..."
              required
            ></textarea>
          </div>

          <div className="pt-6 text-center md:text-left">
            <Button type="submit" variant="primary" className="w-full md:w-auto text-base py-3.5 px-10">
              Submit Inquiry
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
