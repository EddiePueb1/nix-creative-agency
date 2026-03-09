import type { ServiceData } from '../services';

export const branding: ServiceData = {
  id: 'branding',
  hero: {
    subtitle: 'Tell your story',
    title: 'Brand Identity & Strategy.',
    heading2: 'Memorable by Design',
    paragraph1: 'We craft cohesive and powerful visual and verbal identities that resonate with your audience.',
    paragraph2: 'Your brand is more than a logo—it’s the total experience you offer to your customers.',
    image: 'https://picsum.photos/seed/branding/800/800',
    ctaText: 'Launch your brand'
  },
  approach: {
    title: 'Our Branding Approach',
    subtitle: 'Creating lasting connections',
    items: [] // TODO: Add approach items
  },
  stats: {
    title: 'Brand Impact',
    subtitle: '',
    description: '',
    items: [] // TODO: Add stats
  },
  work: {
    title: 'Featured Brands',
    subtitle: '',
    items: [] // TODO: Add work items
  },
  capabilities: {
    title: 'Branding Capabilities',
    subtitle: '',
    items: [] // TODO: Add capability items
  },
  industries: [] // TODO: Add typical industries
};
