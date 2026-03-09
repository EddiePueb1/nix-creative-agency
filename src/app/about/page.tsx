'use client';

import { Container } from '@/components/ui/Container';
import { motion } from 'motion/react';
import Image from 'next/image';
import { JourneyScroll } from '@/components/about/JourneyScroll';

// Placeholder data that you can fill in later
const ABOUT_DATA = {
  title: "About Us",
  subtitle: "Our Story",
  storyText: "Write your company or personal story here. Explain how you started, why you started, and what drives you every day. This is the perfect place to connect with your audience on a personal level and build trust.",
  mainImage: "https://picsum.photos/seed/about-main/1200/600",
  
  values: [
    {
      id: 1,
      title: "Value One",
      description: "Describe a core value of your company. What do you stand for?",
    },
    {
      id: 2,
      title: "Value Two",
      description: "Describe another core value. How does this benefit your clients?",
    },
    {
      id: 3,
      title: "Value Three",
      description: "Describe a third core value. What makes your approach unique?",
    }
  ]
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 pb-24">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-display font-bold text-gray-900 mb-6"
          >
            {ABOUT_DATA.title}
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-semibold text-gray-700"
          >
            {ABOUT_DATA.subtitle}
          </motion.h2>
        </div>

        {/* Story Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm"
        >
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {ABOUT_DATA.storyText}
          </p>
          
          <div className="w-full aspect-[2/1] relative rounded-2xl overflow-hidden bg-gray-200">
            <img 
              src={ABOUT_DATA.mainImage} 
              alt="Our Story"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Scrolling Journey Section */}
        <JourneyScroll />

        {/* Values / Cards Section */}
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-display font-bold text-gray-900 mb-10 text-center"
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {ABOUT_DATA.values.map((value, index) => (
              <motion.div 
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-[#b4ff39] rounded-full mb-6 flex items-center justify-center font-bold text-xl">
                  {value.id}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
