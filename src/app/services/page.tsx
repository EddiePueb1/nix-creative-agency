import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const EXPERTISE_ITEMS = [
  {
    title: 'Website Design',
    description: 'Beautiful websites that are designed to move visitors from curiosity to conversion.',
    image: 'https://picsum.photos/seed/webdev/600/800',
    color: 'from-blue-500/80 to-blue-500/20',
    link: '/services/website-design',
  },
  {
    title: 'SEO',
    description: 'Targeted strategies to increase your visibility and attract high-quality traffic from organic search.',
    image: 'https://picsum.photos/seed/seo/600/800',
    color: 'from-indigo-500/80 to-indigo-500/20',
    link: '/services/seo',
  },
  {
    title: 'Social Media',
    description: 'We craft authentic, data-backed social media strategies that build community and drive brand awareness.',
    image: 'https://picsum.photos/seed/social/600/800',
    color: 'from-purple-500/80 to-purple-500/20',
    link: '/services/social-media',
  },
  {
    title: 'Brand Identity',
    description: 'We craft cohesive and powerful visual and verbal identities that resonate with your target audience.',
    image: 'https://picsum.photos/seed/data/600/800',
    color: 'from-orange-500/80 to-orange-500/20',
    link: '/services/branding',
  },
  {
    title: 'Data & Analytics',
    description: 'We transform complex data into actionable insights that drive strategic decisions and improve performance.',
    image: 'https://picsum.photos/seed/analytics/600/800',
    color: 'from-green-500/80 to-green-500/20',
    link: '/services/analytics',
  },
  {
    title: 'AI Automations',
    description: 'We leverage AI to automate repetitive tasks, improve efficiency, and scale your business operations.',
    image: 'https://picsum.photos/seed/ai/600/800',
    color: 'from-pink-500/80 to-pink-500/20',
    link: '/services/ai-automations',
  },
];

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>

        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24 text-left">
          <h1 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-6">
            Our Services
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gray-900 mb-6 tracking-tight">
            Specialized skills for ambitious brands.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Choose a service below to learn more about our approach, see our real-world impact, and discover how we can accelerate your growth.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {EXPERTISE_ITEMS.map((item) => (
            <Link
              href={item.link}
              key={item.title}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-lg block"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlays mimicking the homepage cards */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.color} mix-blend-multiply opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-90" />
              
              {/* Content constraints */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                <div className="translate-y-6 md:translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 md:mb-4">
                    {item.title}
                  </h3>
                  
                  {/* The new description that fades in */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>
                  
                  <div className="h-1 w-12 bg-[#b4ff39] mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
