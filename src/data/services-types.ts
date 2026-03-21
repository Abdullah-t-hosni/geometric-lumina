import { LucideIcon } from 'lucide-react';
import { getAsset as baseGetAsset, getBlurAsset as baseGetBlurAsset } from '@/shared/utils/assetHelper';

export const getAsset = (name: string) => baseGetAsset(name);
export const getBlurAsset = (name: string) => baseGetBlurAsset(name);

export const CATEGORIES = {
  MOTION: 'Motion',
  PRODUCT_VIZ: 'Product Visualization',
  ARCHITECTURE: 'Architecture',
  CGI: 'CGI',
  BOOTH_DESIGN: 'Booth Design',
  AI_CONTENT: 'AI Content',
} as const;

export type ServiceCategory = typeof CATEGORIES[keyof typeof CATEGORIES];

export type ServiceColor =
  | 'sky-blue'
  | 'neon-yellow'
  | 'coral-red'
  | 'deep-teal'
  | 'sea-green';

export interface ServiceStat {
  label: string;
  value: string;
}

export interface ServiceImage {
  src: string;
  blur: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  category: ServiceCategory;
  color: ServiceColor;
  image: ServiceImage;
  heroImage: string;
  gallery?: string[];
  icon: LucideIcon;
  stats: ServiceStat[];
  featured?: boolean;
  priority?: number;
  seoTitle?: string;
  seoDescription?: string;
}


