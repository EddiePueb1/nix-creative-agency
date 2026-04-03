'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

import { ServiceData } from '../../data/services';

interface ServiceApproachProps {
  data: ServiceData['approach'];
}

export default function ServiceApproach({ data }: ServiceApproachProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 md:px-8">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
          {data.title}
        </h2>
        <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-500">
          {data.subtitle}
        </h3>
      </div>

      <div className="space-y-4">
        {data.items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={item.title}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h4 className="text-xl font-display font-bold text-gray-900">
                  {item.title}
                </h4>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-gray-100 text-black' : 'text-gray-400'}`}>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 border-t border-gray-100">
                      <div className="space-y-4 text-gray-600">
                        {item.paragraphs && item.paragraphs.map((paragraph, pIndex) => (
                          <p key={pIndex}>{paragraph}</p>
                        ))}
                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="list-disc pl-5 space-y-2">
                            {item.bullets.map((bullet, bIndex) => {
                              if (bullet.includes('/services/')) {
                                const urlMatch = bullet.match(/(\/services\/[\w-]+)/);
                                if (urlMatch) {
                                  const linkUrl = urlMatch[1];
                                  
                                  let textPart = bullet.replace(linkUrl, '').trim();
                                  textPart = textPart.replace(/Learn more:?$/i, '').trim();

                                  const getServiceName = (url: string) => {
                                    const slug = url.split('/').pop() || '';
                                    switch(slug) {
                                      case 'seo': return 'SEO';
                                      case 'ai-automations': return 'AI Automations';
                                      case 'website-design': return 'Website Design';
                                      case 'branding': return 'Brand Identity';
                                      case 'social-media': return 'Social Media';
                                      case 'analytics': return 'Data & Analytics';
                                      default: return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                                    }
                                  };

                                  return (
                                    <li key={bIndex} className="py-2">
                                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 leading-relaxed">
                                        <span className="flex-1">{textPart}</span>
                                        <Link 
                                          href={linkUrl}
                                          className="shrink-0 mx-auto md:mx-0 inline-flex items-center gap-2 bg-gray-100 text-[#111111] hover:bg-[#b4ff39] px-5 py-2.5 rounded-full text-sm font-semibold transition-colors group border border-transparent hover:border-[#88c222]/20 shadow-sm whitespace-nowrap"
                                        >
                                          {getServiceName(linkUrl)}
                                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                      </div>
                                    </li>
                                  );
                                }
                              }
                              return (
                                <li key={bIndex} className="leading-relaxed">{bullet}</li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
