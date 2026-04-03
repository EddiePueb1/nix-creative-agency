import type { ServiceData } from '../services';

export const websiteDesign: ServiceData = {
  id: 'website-design',
  hero: {
    subtitle: 'Websites built for businesses that need more calls, more quotes, and more booked jobs',
    title: 'Website Design.',
    heading2: 'Built to Perform',
    paragraph1: 'At Nix Creative, we build rich, full-featured websites that turn curious visitors into paying customers.',
    paragraph2: 'Your website should be your hardest-working employee. We design mobile-first platforms tailored for service businesses, integrating contact forms, booking systems, and fast, clean code that gets you found and hired.',
    image: '/images/expertise-website-design.jpg',
    ctaText: 'Talk with our team'
  },
  approach: {
    title: 'Our Website Design Approach',
    subtitle: 'Beautiful websites that move visitors from curiosity to conversion',
    items: [
      {
        title: 'Discovery',
        paragraphs: [
          'We start by clearly understanding your business, your ideal customer, and what a win looks like for you.'
        ],
        bullets: [
          'Defining your core service offerings and target service areas',
          'Aligning the website structure with how your customers actually decide to call',
          'Establishing clear business goals for the new site'
        ]
      },
      {
        title: 'Design',
        paragraphs: [
          'We design mobile-first experiences built around generating trust and driving action.'
        ],
        bullets: [
          'High-fidelity prototypes (mobile and desktop) to bring the vision to life',
          'Intentional hierarchy and messaging tailored to service providers',
          'Collaborative review process to keep the work on track'
        ]
      },
      {
        title: 'Build',
        paragraphs: [
          'We construct fast, adaptable websites equipped with the tools you need to capture leads efficiently.'
        ],
        bullets: [
          'Clean, modern, component-based code',
          'Contact forms, booking integrations, and Google Maps embedded seamlessly',
          'Basic on-page SEO structure baked in from day one'
        ]
      },
      {
        title: 'Launch',
        paragraphs: [
          'We ensure everything works perfectly before you go live, setting you up for long-term growth.'
        ],
        bullets: [
          'Comprehensive pre-launch quality assurance and testing',
          'Analytics setup so you can see exactly where leads come from',
          'Handoff and ongoing maintenance protocols'
        ]
      },
      {
        title: 'Your Growth Roadmap',
        paragraphs: [
          'Here is exactly what the process looks like from start to finish — and where other services can multiply your results along the way.'
        ],
        bullets: [
          'Step 1 — Discovery phase to define business goals and customer journey',
          'Step 2 — Design and component building with a focus on conversions',
          'Step 3 — Go-live and baseline performance tracking',
          'Step 4 — Turning the new platform into a local lead generator → This is where SEO takes over to rank your new site. Learn more: /services/seo',
          'Step 5 — Connecting your contact forms instantly to your phone → Speed up your response time with AI Automations. Learn more: /services/ai-automations',
          'Step 6 — Showcasing the new site across platforms → Drive targeted traffic immediately with Social Media. Learn more: /services/social-media'
        ]
      }
    ]
  },
  stats: {
    title: 'Results you can measure',
    subtitle: 'Real-world outcomes from our site launches',
    description: "We focus on real performance metrics like visibility and engagement, driving actual business growth.",
    items: [
      {
        icon: 'TrendingUp',
        value: '12.3',
        suffix: '%',
        prefix: '+',
        label: 'average engagement time lift for redesigned platforms'
      },
      {
        icon: 'Users',
        value: '617',
        suffix: '%',
        prefix: 'Up to ',
        label: 'more website traffic for service businesses pairing a redesign with SEO'
      },
      {
        icon: 'Smartphone',
        value: '52.9',
        suffix: '%',
        prefix: '+',
        label: 'mobile conversion growth on key booking events'
      }
    ]
  },
  work: {
    title: 'Work With Heart',
    subtitle: 'Website Design Case studies from clients like you',
    items: []
  },
  capabilities: {
    title: 'Website Design Capabilities',
    subtitle: 'A comprehensive approach to your biggest engine for growth',
    items: [
      {
        title: 'Strategy & Content',
        items: [
          'Discovery',
          'Stakeholder Interviews',
          'Persona Development',
          'Content Strategy',
          'Copywriting'
        ]
      },
      {
        title: 'User experience & Architecture',
        items: [
          'Art Direction',
          'UX Design',
          'Design Systems',
          'Sitemap & Information Architecture',
          'User Journeys'
        ]
      },
      {
        title: 'Build & Integrations',
        items: [
          'Responsive CSS & HTML',
          'CMS Implementation',
          'Component & Plugin Selection',
          'APIs & System Integrations',
          'Accessibility (WCAG AA 2.2) Audit'
        ]
      },
      {
        title: 'Launch & Optimization',
        items: [
          'Technical & Content SEO',
          'Quality Assurance Testing',
          'Analytics & Heatmapping',
          'Quarterly Performance Reviews',
          'Ongoing Support & Maintenance'
        ]
      }
    ]
  },
  industries: [
    {
      title: 'Contractors & Home Services',
      description: 'Plumbers, electricians, HVAC, roofers, and general contractors',
      image: '/images/industry-contractors.jpg'
    },
    {
      title: 'New & Growing Businesses',
      description: 'Startups and first-time business owners building their presence from scratch',
      image: '/images/industry-new-business.jpg'
    },
    {
      title: 'Local Shops & Mobile Services',
      description: 'Retail shops, detailers, food businesses, and service providers on the move',
      image: '/images/industry-local-shops.jpg'
    },
    {
      title: 'Cleaning & Maintenance',
      description: 'Residential and commercial cleaning, janitorial, and property maintenance',
      image: '/images/industry-cleaning.jpg'
    },
    {
      title: 'Landscaping & Outdoor',
      description: 'Lawn care, landscaping, tree services, and outdoor contractors',
      image: '/images/industry-landscaping.jpg'
    }
  ]
};
