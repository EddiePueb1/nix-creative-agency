import type { ServiceData } from '../services';

export const socialMedia: ServiceData = {
  id: 'social-media',
  hero: {
    subtitle: 'Social strategies for ambitious brands, tourism, arts, and nonprofits',
    title: 'Social Media Management.',
    heading2: 'Built for Engagement',
    paragraph1:
      'At Nix Creative, we create social media strategies that do more than post content—they build community, expand reach, and drive real business results.',
    paragraph2:
      'From storytelling and short-form video to analytics and paid amplification, we help brands stand out in crowded feeds.',
    image: 'https://picsum.photos/seed/socialmediahero/800/800',
    ctaText: 'Talk with our team'
  },

  approach: {
    title: 'Our Social Media Approach',
    subtitle: 'Content and strategy designed to create momentum for your brand',
    items: [
      {
        title: 'Strategy Before Posting',
        paragraphs: [
          'Strong social media results come from intentional strategy, not random posting.',
          'We start by understanding your brand voice, audience, and business goals so every post serves a purpose.'
        ],
        bullets: [
          'Audience and platform analysis to identify where your community lives',
          'Content pillars that align brand storytelling with audience interests',
          'Editorial calendars that balance consistency with creative flexibility'
        ]
      },
      {
        title: 'Creative That Stops the Scroll',
        paragraphs: [
          'Social media moves fast. Your content needs to capture attention instantly while still telling a meaningful story.'
        ],
        bullets: [
          'Short-form video and reels optimized for platform algorithms',
          'Branded visuals and graphics designed for high engagement',
          'Storytelling formats that encourage interaction and sharing'
        ]
      },
      {
        title: 'Platform-Native Content',
        paragraphs: [
          'Each platform has its own language, audience expectations, and content formats. We tailor content accordingly.'
        ],
        bullets: [
          'TikTok and Instagram Reels optimized for discovery and shareability',
          'LinkedIn content designed for professional credibility and thought leadership',
          'Facebook and community platforms built for engagement and discussion'
        ]
      },
      {
        title: 'Community & Conversation',
        paragraphs: [
          'Social media is a two-way channel. Building relationships with your audience is just as important as publishing content.'
        ],
        bullets: [
          'Active community management and comment moderation',
          'Engagement strategies that encourage user interaction',
          'Monitoring trends and conversations relevant to your brand'
        ]
      },
      {
        title: 'Analytics That Drive Improvement',
        paragraphs: [
          'We track performance continuously so we can learn, refine, and improve results over time.'
        ],
        bullets: [
          'Platform analytics and reporting dashboards',
          'Campaign performance analysis and optimization',
          'Content testing to identify high-performing formats'
        ]
      }
    ]
  },

  stats: {
    title: 'Social media results that matter',
    subtitle: 'Measured outcomes from client campaigns',
    description:
      'These averages represent aggregated results across recent campaigns managed by Nix Creative during the first 90 days of strategy implementation.',
    items: [
      {
        icon: 'TrendingUp',
        value: '4.6',
        suffix: 'x',
        prefix: '',
        label: 'Engagement growth'
      },
      {
        icon: 'Users',
        value: '38',
        suffix: '%',
        prefix: '+',
        label: 'Follower growth'
      },
      {
        icon: 'Eye',
        value: '1.2',
        suffix: 'M',
        prefix: '+',
        label: 'Average campaign impressions'
      }
    ]
  },

  work: {
    title: 'Social Media Campaigns',
    subtitle: 'Examples of brands growing their audience',
    items: [
      {
        client: 'Regional Arts Festival',
        title: 'Turning a seasonal event into a year-round community.',
        tags: ['Instagram', 'Video Content', 'Community Management'],
        image: 'https://picsum.photos/seed/artfestival/800/600',
        color: 'from-pink-500/80 to-pink-500/20'
      },
      {
        client: 'Boutique Travel Brand',
        title: 'Story-driven content that inspired new travel bookings.',
        tags: ['Tourism', 'Short Form Video', 'Influencer Collaboration'],
        image: 'https://picsum.photos/seed/travelbrand/800/600',
        color: 'from-blue-500/80 to-blue-500/20'
      },
      {
        client: 'Local Coffee Roaster',
        title: 'Building an engaged digital community around coffee culture.',
        tags: ['TikTok', 'Reels', 'Brand Storytelling'],
        image: 'https://picsum.photos/seed/coffeecommunity/800/600',
        color: 'from-orange-500/80 to-orange-500/20'
      }
    ]
  },

  capabilities: {
    title: 'Social Media Capabilities',
    subtitle: 'Everything needed to grow and manage your social presence',
    items: [
      {
        title: 'Strategy & Planning',
        items: [
          'Audience & Platform Research',
          'Content Strategy',
          'Editorial Calendars',
          'Campaign Planning',
          'Brand Voice Development'
        ]
      },
      {
        title: 'Content Creation',
        items: [
          'Short-Form Video Production',
          'Photography',
          'Graphic Design',
          'Copywriting',
          'Story & Reel Creation'
        ]
      },
      {
        title: 'Management & Engagement',
        items: [
          'Post Scheduling & Publishing',
          'Community Management',
          'Comment & Message Monitoring',
          'Influencer Partnerships',
          'Trend Monitoring'
        ]
      },
      {
        title: 'Analytics & Optimization',
        items: [
          'Performance Reporting',
          'Audience Insights',
          'A/B Content Testing',
          'Campaign Optimization',
          'Quarterly Strategy Reviews'
        ]
      }
    ]
  },

  industries: [
    {
      title: 'Arts & Culture',
      description: 'Events, exhibitions, and community storytelling',
      image: 'https://picsum.photos/seed/arts-social/600/400'
    },
    {
      title: 'Tourism',
      description: 'Destination storytelling and travel inspiration',
      image: 'https://picsum.photos/seed/tourism-social/600/400'
    },
    {
      title: 'Education',
      description: 'Student life, admissions, and institutional storytelling',
      image: 'https://picsum.photos/seed/education-social/600/400'
    },
    {
      title: 'Non-Profits',
      description: 'Advocacy, fundraising, and community engagement',
      image: 'https://picsum.photos/seed/nonprofit-social/600/400'
    },
    {
      title: 'Ambitious Brands',
      description: 'Product storytelling, awareness, and audience growth',
      image: 'https://picsum.photos/seed/brand-social/600/400'
    }
  ]
};