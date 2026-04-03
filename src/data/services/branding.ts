import type { ServiceData } from '../services';

export const branding: ServiceData = {
  id: 'branding',
  hero: {
    subtitle: 'For businesses ready to look as professional as they are',
    title: 'Brand Identity',
    heading2: 'Your Brand is Your First Impression',
    paragraph1: 'Customers judge a business by how it looks long before they ever make contact or request a quote.',
    paragraph2: 'A mismatched logo, a blurry Facebook profile photo, and a generic business card cost you trust before you even get a chance to speak. We build cohesive, professional brand identities that command respect from the first glance.',
    image: '/images/expertise-brand-identity.jpg',
    ctaText: 'Talk with our team'
  },
  approach: {
    title: 'Our Branding Approach',
    subtitle: 'A systematic process to build a brand you can be proud of',
    items: [
      {
        title: 'Brand Discovery',
        paragraphs: [
          'We start by understanding what your business actually does, who your ideal customer is, and what feeling your brand should create.'
        ],
        bullets: [
          'Deep dive into your business goals and target audience',
          'Competitor analysis to see what you are up against',
          'Defining your core message and brand voice'
        ]
      },
      {
        title: 'Logo Design',
        paragraphs: [
          'We craft a primary visual mark that represents your business clearly, professionally, and memorably across all environments.'
        ],
        bullets: [
          'Custom primary logo design concepts and refinement',
          'Creation of secondary variations (horizontal, stacked)',
          'Icon versions for small spaces like profile pictures'
        ]
      },
      {
        title: 'Brand Kit',
        paragraphs: [
          'Your brand kit is the rulebook that keeps everything consistent across every touchpoint, so your business always looks its best.'
        ],
        bullets: [
          'Curated brand color palette (primary and accents)',
          'Typography selection and hierarchy rules',
          'Clear usage guidelines to prevent messy executions'
        ]
      },
      {
        title: 'Collateral & Assets',
        paragraphs: [
          'We supply you with the actual files and templates you need to run your business day-to-day, both digitally and physically.'
        ],
        bullets: [
          'Digital assets including social media covers and email signatures',
          'Print-ready business card files',
          'Physical materials design like shirts, vehicle magnets, or banners'
        ]
      },
      {
        title: 'Launch-Ready',
        paragraphs: [
          'Everything is handed off in the exact right formats, organized clearly, and ready to go live everywhere at once.'
        ],
        bullets: [
          'Vector and raster files for web and print (SVG, PNG, EPS)',
          'Linktree or link-in-bio profile setup',
          'Complete asset directory for your team to access anytime'
        ]
      },
      {
        title: 'Your Growth Roadmap',
        paragraphs: [
          'Here is exactly what the process looks like from start to finish — and where other services can multiply your results along the way.'
        ],
        bullets: [
          'Step 1 — Discovery phase and market positioning',
          'Step 2 — Logo design and brand identity development',
          'Step 3 — Establishing the brand kit and core rules',
          'Step 4 — Rolling the new brand out into a high-converting digital home → This is where Website Design brings your new look to life. Learn more: /services/website-design',
          'Step 5 — Putting your fresh brand in front of targeted local customers → Keep the momentum going with Social Media. Learn more: /services/social-media'
        ]
      }
    ]
  },
  stats: {
    title: 'Results you can measure',
    subtitle: 'The undeniable impact of professional branding',
    description: 'Good branding is not just about looking nice; it is a financial asset that builds trust instantly and eliminates friction in your sales process.',
    items: [
      {
        icon: 'Eye',
        value: '50',
        suffix: 'ms',
        prefix: '< ',
        label: 'for a customer to form a first impression of your brand'
      },
      {
        icon: 'ShieldCheck',
        value: 'Higher',
        suffix: ' Trust',
        prefix: '',
        label: 'for businesses with consistent branding across all channels'
      },
      {
        icon: 'Clock',
        value: 'Saved',
        suffix: ' Time',
        prefix: '',
        label: 'on every future design project when utilizing a complete brand kit'
      }
    ]
  },
  work: {
    title: 'Our Work',
    subtitle: '',
    items: []
  },
  capabilities: {
    title: 'Branding Capabilities',
    subtitle: 'Everything needed to build a brand that commands respect',
    items: [
      {
        title: 'Visual Identity',
        items: [
          'Primary Logo Design',
          'Logo Marks & Variations',
          'Color Palette Development',
          'Typography Selection'
        ]
      },
      {
        title: 'Brand Strategy',
        items: [
          'Brand Positioning',
          'Voice & Tone Guidelines',
          'Competitor Aesthetic Analysis',
          'Target Audience Profiling'
        ]
      },
      {
        title: 'Digital Assets',
        items: [
          'Social Media Profiles & Covers',
          'Email Signatures',
          'Link-in-bio Setup',
          'Digital Letterheads'
        ]
      },
      {
        title: 'Physical Collateral',
        items: [
          'Business Card Design',
          'Vehicle Magnets & Wraps',
          'Apparel & Uniforms',
          'Banners & Signage'
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
