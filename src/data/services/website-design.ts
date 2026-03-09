import type { ServiceData } from '../services';

export const websiteDesign: ServiceData = {
  id: 'website-design',
  hero: {
    subtitle: 'Websites for arts, schools, nonprofits, Tourism & Ambitious brands',
    title: 'Website Design.',
    heading2: 'Built to Perform',
    paragraph1: 'At Nix Creative, we build rich, full-featured websites that grow brands and inspire visitors.',
    paragraph2: "For nearly 30 years, we've delivered websites for some of the best-loved organizations in the country.",
    image: 'https://picsum.photos/seed/ballet/800/800',
    ctaText: 'Talk with our team'
  },
  approach: {
    title: 'Our Website Design Approach',
    subtitle: 'Beautiful websites that move visitors from curiosity to conversion',
    items: [
      {
        title: 'Outcome Focused',
        paragraphs: [
          "We don't measure success by project completion. We measure success by outcomes generated.",
          "A website isn't successful unless it drives growth. We design around how people actually make decisions and measure performance from first click to conversion."
        ],
        bullets: [
          "We start with strategy, defining buyer journeys (donate, apply, visit, inquire, buy) before design",
          "We combine content with page flow to align with how decisions are actually made",
          "We implement full-funnel analytics and reporting, so you have full conversion-path visibility"
        ]
      },
      {
        title: 'Collaborative From Day One',
        paragraphs: [
           "No mysteries or black boxes here. You'll always know what's happening, what's next, and what we need from you."
        ],
        bullets: [
          "High-fidelity prototypes (mobile and desktop) right after Strategy bring the vision to life",
          "Reviews and revisions at each step keep the work collaborative and on track",
          "Regular project check-ins keep decisions moving and generate momentum"
        ]
      },
      {
        title: 'Growth Ready After Launch',
        paragraphs: [
          "Organizations scale and change; your website should too. We set you up for long-term growth by ensuring your site stays adaptable and effective as your needs evolve."
        ],
        bullets: [
          "Component-based design and flexible frameworks make meeting new needs a snap",
          "Content management system (CMS) setup with clear user roles and management",
          "Proactive maintenance keeps your website, plugins, and integrations secure and running smoothly"
        ]
      },
      {
        title: 'Accessible, Mobile, and Optimized for Search',
        paragraphs: [
          "Accessibility, mobile performance, and search visibility aren't afterthoughts, they're foundational pieces of what makes a modern website successful."
        ],
        bullets: [
          "Built with accessibility best practices from the start, then audited for WCAG 2.2 AA compliance before launch",
          "Designed mobile-first, using interactions, storytelling, and calls to action that match how people actually browse on their phones"
        ]
      },
      {
        title: 'Awe That Drives Action',
        paragraphs: [
          "There's nothing more exciting than having a jaw-droppingly-beautiful website. Except when that website also delivers real results."
        ],
        bullets: [
          "We design key pages and elements with intentional hierarchy, pacing, and messaging so visitors immediately connect with what matters",
          "We leverage modern interactions, motion, and animation as a compelling way to bring clarity, energy, and focus to visitors"
        ]
      }
    ]
  },
  stats: {
    title: 'Results you can measure',
    subtitle: 'Real-world outcomes from real client launches',
    description: "These numbers are aggregated client averages from the first 30 days after launch, compared to the same 30-day period the year before, so we're measuring real change, not seasonality.",
    items: [
      {
        icon: 'TrendingUp',
        value: '12.3',
        suffix: '%',
        prefix: '+',
        label: 'Engagement time lift'
      },
      {
        icon: 'Users',
        value: '54',
        suffix: 'k',
        prefix: '+',
        label: 'Visitor increase (30 days)'
      },
      {
        icon: 'Smartphone',
        value: '52.9',
        suffix: '%',
        prefix: '+',
        label: 'Mobile conv. growth (key events)'
      }
    ]
  },
  work: {
    title: 'Work With Heart',
    subtitle: 'Website Design Case studies from clients like you',
    items: [
      {
        client: 'Nashville Music City Center',
        title: 'Nashville energy, venue level polish.',
        tags: ['Tourism', 'Events Calendar', 'Hosting', 'SEO', 'Website Design'],
        image: 'https://picsum.photos/seed/nashville/800/600',
        color: 'from-purple-500/80 to-purple-500/20',
      },
      {
        client: 'Cheekwood Estate & Gardens',
        title: 'Driving ticket and membership sales for a timeless estate & gardens.',
        tags: ['Arts & Cultural', 'Events Calendar', 'SEO', 'Website Design'],
        image: 'https://picsum.photos/seed/cheekwood/800/600',
        color: 'from-green-500/80 to-green-500/20',
      },
      {
        client: 'Memphis University School',
        title: 'A bold, modern front door that tells the MUS story.',
        tags: ['Education', 'Hosting', 'Website Design'],
        image: 'https://picsum.photos/seed/mus/800/600',
        color: 'from-blue-500/80 to-blue-500/20',
      },
    ]
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
      title: 'Arts & Culture',
      description: 'Attendance, Membership, Donations, and Education',
      image: 'https://picsum.photos/seed/arts/600/400',
    },
    {
      title: 'Education',
      description: 'Inquiries, Tours, Admissions, and Retention',
      image: 'https://picsum.photos/seed/edu/600/400',
    },
    {
      title: 'Non-Profits',
      description: 'Education, Donations, Volunteer, and Advocacy',
      image: 'https://picsum.photos/seed/nonprofit/600/400',
    },
    {
      title: 'Tourism',
      description: 'Visitations, Meetings, Trip Planning, Economic Impact',
      image: 'https://picsum.photos/seed/tourism/600/400',
    },
    {
      title: 'Ambitious Brands',
      description: 'Awareness, Sales, Lead Generation, and Loyalty',
      image: 'https://picsum.photos/seed/brands/600/400',
    },
  ]
};
