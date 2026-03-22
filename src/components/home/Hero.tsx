'use client';

import { motion, useMotionValue, useSpring } from "motion/react";
import { Play } from "lucide-react";
import { useState, useRef } from "react";
import { VideoModal } from "../ui/VideoModal";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsVideoOpen(true)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[70vh] min-h-[500px] rounded-[2rem] overflow-hidden bg-gray-200 cursor-pointer group"
      >
        <img
          src="https://picsum.photos/seed/agency/1920/1080?blur=2"
          alt="Team collaborating"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20 transition-colors duration-700 group-hover:bg-black/40" />

        {/* Floating play button that follows cursor */}
        <motion.div
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          className="absolute top-0 left-0 z-20 flex items-center justify-center w-24 h-24 bg-[#b4ff39] text-black rounded-full shadow-2xl pointer-events-none"
        >
          <Play size={32} fill="currentColor" className="ml-2" />
        </motion.div>

        {/* Text box needs to intercept clicks so it doesn't trigger the video */}
        <div 
          className="absolute top-8 left-8 md:top-16 md:left-16 max-w-md z-30 cursor-auto"
          onClick={(e) => e.stopPropagation()}
          onMouseEnter={(e) => {
            e.stopPropagation();
            setIsHovered(false); // hide play button when hovering over the text box
          }}
          onMouseLeave={() => setIsHovered(true)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 leading-tight mb-4">
              Trusted digital marketing agency in Myrtle Beach
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Serving service businesses across the U.S. with consistent growth, less hassle, more clarity, and more clients for driven business owners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#contact"
                onClick={scrollToContact}
                initial={{ scale: 0.5, opacity: 0, y: 20 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.6 }}
                className="bg-[#b4ff39] text-black px-6 py-3 rounded-full font-bold text-center hover:scale-105 transition-transform shadow-lg shadow-[#b4ff39]/30"
              >
                Request Consultation
              </motion.a>
              <motion.a 
                href="tel:+15555555555"
                initial={{ scale: 0.5, opacity: 0, y: 20 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.8 }}
                className="bg-black text-white px-6 py-3 rounded-full font-bold text-center hover:scale-105 transition-transform shadow-lg"
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoSrc="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
      />
    </section>
  );
}
