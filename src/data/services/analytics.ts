import type { ServiceData } from '../services';

export const analytics: ServiceData = {
  id: 'analytics',
  hero: {
    subtitle: 'Data-driven insights for organizations that want to grow',
    title: 'Analytics & Performance.',
    heading2: 'Measure What Matters',
    paragraph1:
      'At Nix Creative, we turn website and marketing data into actionable insights that help organizations grow.',
    paragraph2:
      'From Google Analytics implementation to advanced event tracking and performance dashboards, we make sure every important interaction is measured and understood.',
    image: 'https://picsum.photos/seed/analyticshero/800/800',
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
    items: [
      {
        client: 'Regional Arts Organization',
        title: 'Tracking the visitor journey to increase ticket purchases.',
        tags: ['Google Analytics', 'Event Tracking', 'Dashboards'],
        image: 'https://picsum.photos/seed/analyticsarts/800/600',
        color: 'from-indigo-500/80 to-indigo-500/20'
      },
      {
        client: 'Private School Admissions',
        title: 'Understanding the application funnel from inquiry to enrollment.',
        tags: ['Conversion Tracking', 'Funnels', 'Performance Reporting'],
        image: 'https://picsum.photos/seed/analyticseducation/800/600',
        color: 'from-blue-500/80 to-blue-500/20'
      },
      {
        client: 'Tourism Destination',
        title: 'Measuring marketing campaign performance across channels.',
        tags: ['Campaign Tracking', 'Traffic Attribution', 'Looker Studio'],
        image: 'https://picsum.photos/seed/analyticstourism/800/600',
        color: 'from-green-500/80 to-green-500/20'
      }
    ]
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
      title: 'Arts & Culture',
      description: 'Tracking attendance, ticket sales, and memberships',
      image: 'https://picsum.photos/seed/analyticsartsindustry/600/400'
    },
    {
      title: 'Education',
      description: 'Measuring admissions funnels and inquiry conversions',
      image: 'https://picsum.photos/seed/analyticseducationindustry/600/400'
    },
    {
      title: 'Non-Profits',
      description: 'Understanding donations, volunteer engagement, and advocacy impact',
      image: 'https://picsum.photos/seed/analyticsnonprofitindustry/600/400'
    },
    {
      title: 'Tourism',
      description: 'Analyzing travel campaigns, visitor behavior, and booking interest',
      image: 'https://picsum.photos/seed/analyticstourismindustry/600/400'
    },
    {
      title: 'Ambitious Brands',
      description: 'Measuring marketing ROI, customer journeys, and conversion performance',
      image: 'https://picsum.photos/seed/analyticsbrandsindustry/600/400'
    }
  ]
};