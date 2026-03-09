

export interface ApproachItem {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface StatItem {
  icon: string; // Lucide icon name
  value: string;
  suffix: string;
  prefix: string;
  label: string;
}

export interface WorkItem {
  client: string;
  title: string;
  tags: string[];
  image: string;
  color: string;
}

export interface CapabilitySection {
  title: string;
  items: string[];
}

export interface ServiceData {
  id: string;
  hero: {
    subtitle: string;
    title: string;
    heading2: string;
    paragraph1: string;
    paragraph2: string;
    image: string;
    ctaText: string;
  };
  approach: {
    title: string;
    subtitle: string;
    items: ApproachItem[];
  };
  stats: {
    title: string;
    subtitle: string;
    description: string;
    items: StatItem[];
  };
  work: {
    title: string;
    subtitle: string;
    items: WorkItem[];
  };
  capabilities: {
    title: string;
    subtitle: string;
    items: CapabilitySection[];
  };
  // Note: we can map industries directly from an array if needed, or define per service
  industries: {
    title: string;
    description: string;
    image: string;
  }[];
}

import { websiteDesign } from './services/website-design';
import { socialMedia } from './services/social-media';
import { seo } from './services/seo';
import { branding } from './services/branding';
import { analytics } from './services/analytics';
import { aiAutomations } from './services/ai-automations';

export const servicesData: Record<string, ServiceData> = {
  'website-design': websiteDesign,
  'social-media': socialMedia,
  'seo': seo,
  'branding': branding,
  'analytics': analytics,
  'ai-automations': aiAutomations
};

