import type { ServiceData } from '../services';

export const analytics: ServiceData = {
  id: 'analytics',
  hero: {
    subtitle: 'Data-driven insights for service businesses that want to grow',
    title: 'Analytics & Performance.',
    heading2: 'Measure What Matters',
    paragraph1:
      'At Nix Creative, we turn website and marketing data into actionable insights that help service businesses grow.',
    paragraph2:
      'From Google Analytics implementation to advanced event tracking and performance dashboards, we make sure every important interaction is measured and understood.',
    image: '/images/expertise-data-analytics.jpg',
    ctaText: 'Explore your data'
  },

  approach: {
    title: 'Our Analytics Approach',
    subtitle: 'Clear insights that connect marketing efforts to real results',
    items: [
      {
        title: 'Measurement Strategy First',
        paragraphs: [
          'Analytics only works when it measures the right things.',
          'We begin by identifying the actions that truly matter for your organization, then design a tracking framework around those outcomes.'
        ],
        bullets: [
          'Define measurable goals such as donations, applications, inquiries, and purchases',
          'Map the full visitor journey from first visit to conversion',
          'Create a structured event tracking plan before implementation'
        ]
      },
      {
        title: 'Reliable Tracking Implementation',
        paragraphs: [
          'Accurate data is the foundation of effective decision making.',
          'We implement tracking systems carefully so every key interaction is captured consistently.'
        ],
        bullets: [
          'Google Analytics 4 setup and configuration',
          'Google Tag Manager implementation for scalable tracking',
          'Custom event tracking for forms, buttons, downloads, and conversions'
        ]
      },
      {
        title: 'Full Funnel Visibility',
        paragraphs: [
          'Understanding how users move through your website helps identify what works and where improvements can be made.'
        ],
        bullets: [
          'Conversion funnel tracking',
          'Traffic source attribution analysis',
          'User flow and engagement behavior analysis'
        ]
      },
      {
        title: 'Dashboards That Make Data Useful',
        paragraphs: [
          'Data should be easy to understand and accessible to decision makers.',
          'We design clear dashboards that transform complex analytics into simple insights.'
        ],
        bullets: [
          'Custom Looker Studio dashboards',
          'Marketing and campaign performance reporting',
          'Real-time KPI tracking for leadership teams'
        ]
      },
      {
        title: 'Continuous Optimization',
        paragraphs: [
          'Analytics is not a one-time setup. It’s an ongoing process that drives smarter decisions and better results.'
        ],
        bullets: [
          'Monthly and quarterly performance reviews',
          'A/B testing insights and recommendations',
          'Data-driven strategy adjustments'
        ]
      },
      {
        title: 'Your Growth Roadmap',
        paragraphs: [
          'Here is exactly what the process looks like from start to finish — and where other services can multiply your results along the way.'
        ],
        bullets: [
          'Step 1 — Define the exact actions that lead to revenue for your business',
          'Step 2 — Implement proper tracking and goal conversion architecture',
          'Step 3 — Filter and optimize leads automatically → Save time by pushing this data through AI Automations. Learn more: /services/ai-automations',
          'Step 4 — Leverage data to build content that ranks → Bring in highly targeted traffic with SEO. Learn more: /services/seo',
          'Step 5 — Create a frictionless digital experience for visitors → Ensure the highest conversion rates possible with Website Design. Learn more: /services/website-design'
        ]
      }
    ]
  },

  stats: {
    title: 'Insights that power growth',
    subtitle: 'Real results from data-driven decisions',
    description:
      'These numbers represent average improvements seen by organizations after implementing structured analytics and performance tracking with Nix Creative.',
    items: [
      {
        icon: 'BarChart',
        value: '28',
        suffix: '%',
        prefix: '+',
        label: 'Conversion rate improvement'
      },
      {
        icon: 'Activity',
        value: '3.5',
        suffix: 'x',
        prefix: '',
        label: 'Better visibility into marketing ROI'
      },
      {
        icon: 'Search',
        value: '41',
        suffix: '%',
        prefix: '+',
        label: 'Increase in actionable insights'
      }
    ]
  },

  work: {
    title: 'Data-Driven Success',
    subtitle: 'How analytics helped organizations improve results',
    items: []
  },

  capabilities: {
    title: 'Analytics Capabilities',
    subtitle: 'Comprehensive measurement and performance insights',
    items: [
      {
        title: 'Tracking Implementation',
        items: [
          'Google Analytics 4 Setup',
          'Google Tag Manager Implementation',
          'Event & Conversion Tracking',
          'Cross-Domain Tracking',
          'Enhanced Ecommerce Tracking'
        ]
      },
      {
        title: 'Data Visualization',
        items: [
          'Looker Studio Dashboards',
          'Custom KPI Reporting',
          'Marketing Performance Reports',
          'Executive Data Dashboards'
        ]
      },
      {
        title: 'User Behavior Insights',
        items: [
          'User Journey Mapping',
          'Engagement Analysis',
          'Heatmapping & Scroll Tracking',
          'Session Recording Tools'
        ]
      },
      {
        title: 'Optimization & Strategy',
        items: [
          'Conversion Funnel Analysis',
          'A/B Testing Insights',
          'SEO Performance Tracking',
          'Campaign Attribution Modeling',
          'Quarterly Performance Reviews'
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