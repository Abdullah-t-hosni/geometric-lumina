import { 
  Play, 
  Box, 
  Hexagon, 
  Layers, 
  Glasses, 
  Sparkles 
} from 'lucide-react';
import { Service, CATEGORIES, getAsset, getBlurAsset } from './services-types';

export const featuredServices: Service[] = [
  {
    id: '1',
    slug: 'motion-graphics',
    name: 'Motion Graphics',
    tagline: 'Stories that move, twist, pulse, and flow.',
    category: CATEGORIES.MOTION,
    description: "Stories don't have to be told with words. They can move, twist, pulse, and flow. Through motion graphics, every shape, every light, every rhythm is crafted to move both the eye and the mind.",
    deliverables: ['Brand animations', 'Intro/Outro sequences', 'Logo reveals', 'Kinetic typography', 'Promotional videos', 'Social reels'],
    color: 'sky-blue',
    image: {
      src: getAsset('Motion Graphics', import.meta.url),
      blur: getBlurAsset('Motion Graphics', import.meta.url),
    },
    heroImage: getAsset('Intro_3', import.meta.url),
    gallery: [getAsset('Motion Graphics', import.meta.url), getAsset('Intro_3', import.meta.url), getAsset('Social Media Content', import.meta.url)],
    icon: Play,
    featured: true,
    priority: 1,
    stats: [
      { label: 'Framerate', value: '120 FPS' },
      { label: 'Resolution', value: 'Dynamic 4K' },
      { label: 'Bitrate', value: 'Long-GOP 10-Bit' },
      { label: 'Motion', value: 'Non-Linear' }
    ],
    seoTitle: 'Motion Graphics Services | Geometric Lumina',
    seoDescription: 'Professional motion graphics and brand animation services to bring your stories to life.'
  },
  {
    id: '2',
    slug: 'product-visualization',
    name: 'Product Visualization',
    tagline: 'Every product deserves a cinematic spotlight.',
    category: CATEGORIES.PRODUCT_VIZ,
    description: "Whether your product is still in concept or already on shelves, it deserves a cinematic spotlight. Every reflection, texture, and movement is designed to make it look irresistible on screen.",
    deliverables: ['360° product renders', 'Exploded views', 'Material animations', 'Packaging visualization', 'Commercial-ready shots', 'Lifestyle compositions'],
    color: 'neon-yellow',
    image: {
      src: getAsset('Product Visualization & Animation', import.meta.url),
      blur: getBlurAsset('Product Visualization & Animation', import.meta.url),
    },
    heroImage: getAsset('Product Visualization & Animation', import.meta.url),
    gallery: [getAsset('Product Visualization & Animation', import.meta.url), getAsset('Micro-Visualization', import.meta.url)],
    icon: Box,
    featured: true,
    priority: 2,
    stats: [
      { label: 'Precision', value: '0.001mm' },
      { label: 'Texture', value: '8K PBR' },
      { label: 'Lighting', value: 'Raytraced' },
      { label: 'Engine', value: 'Octane/Redshift' }
    ],
    seoTitle: '3D Product Visualization | Photorealistic Product Renders',
    seoDescription: 'Transform your products into cinematic experiences with our high-end 3D visualization services.'
  },
  {
    id: '3',
    slug: 'booth-exhibition-design',
    name: 'Booth & Exhibition Design',
    tagline: 'Every booth we create is an experience.',
    category: CATEGORIES.BOOTH_DESIGN,
    description: "Every booth we create is more than a space — it's an experience. We design environments that attract attention, tell stories and connect brands with their audience through form, light, and motion.",
    deliverables: ['Interior design concepts', 'Exterior design renders', 'Technical drawings', 'Structural planning', 'Lighting design', 'Material specifications'],
    color: 'coral-red',
    image: {
      src: getAsset('Booth Design', import.meta.url),
      blur: getBlurAsset('Booth Design', import.meta.url),
    },
    heroImage: getAsset('our core', import.meta.url),
    gallery: [getAsset('Booth Design', import.meta.url), getAsset('our core', import.meta.url)],
    icon: Hexagon,
    featured: true,
    priority: 3,
    stats: [
      { label: 'Scale', value: '1:1 Reality' },
      { label: 'Specs', value: 'ISO 9001' },
      { label: 'Logic', value: 'Structural' },
      { label: 'Design', value: 'Ergonomic' }
    ],
    seoTitle: 'Booth & Exhibition Design | Immersive Brand Spaces',
    seoDescription: 'Innovative booth and exhibition designs that connect brands with their audience.'
  },
  {
    id: '5',
    slug: 'anamorphic-screens',
    name: 'Anamorphic Screens',
    tagline: 'Depth breaking the flat screen into another dimension.',
    category: CATEGORIES.CGI,
    description: "The illusion of depth breaking the flat screen into another dimension. Perfect geometry, motion, and perspective combine to create visuals that feel like they're stepping out into the real world.",
    deliverables: ['3D anamorphic content', 'LED cube content', 'Outdoor billboard visuals', 'Immersive display loops', 'Brand activations', 'Event screens'],
    color: 'deep-teal',
    image: {
      src: getAsset('Anamorphic Screens 2', import.meta.url),
      blur: getBlurAsset('Anamorphic Screens 2', import.meta.url),
    },
    heroImage: getAsset('Anamorphic-Screens1', import.meta.url),
    gallery: [getAsset('Anamorphic Screens 2', import.meta.url), getAsset('Anamorphic-Screens1', import.meta.url), getAsset('CGI Compositing', import.meta.url)],
    icon: Layers,
    featured: true,
    priority: 5,
    stats: [
      { label: 'Dimension', value: 'Hyper-3D' },
      { label: 'Sync', value: 'LED Clock' },
      { label: 'FOV', value: 'Fixed Point' },
      { label: 'Scale', value: '8K Master' }
    ]
  },
  {
    id: '9',
    slug: 'vr-environments',
    name: 'VR Environments',
    tagline: 'Step into a world built from imagination.',
    category: CATEGORIES.ARCHITECTURE,
    description: "Step into a world built from imagination. Every surface, sound, and detail crafted to be explored — because the best way to experience a story is to walk inside it.",
    deliverables: ['VR experience design', '360° environments', 'Interactive scenarios', 'Real-time rendering', 'Spatial audio integration', 'Cross-platform VR content'],
    color: 'neon-yellow',
    image: {
      src: getAsset('VR Environments', import.meta.url),
      blur: getBlurAsset('VR Environments', import.meta.url),
    },
    heroImage: getAsset('VR Environments', import.meta.url),
    gallery: [getAsset('VR Environments', import.meta.url), getAsset('Architectural Visualization', import.meta.url), getAsset('Simulations', import.meta.url)],
    icon: Glasses,
    featured: true,
    priority: 9,
    stats: [
      { label: 'Latence', value: '< 20ms' },
      { label: 'Platform', value: 'Oculus/Vive' },
      { label: 'Audio', value: 'Spatial 3D' },
      { label: 'Refresh', value: '90Hz Stable' }
    ]
  },
  {
    id: '12',
    slug: 'ai-content-production',
    name: 'AI Content Production',
    tagline: 'AI tools integrated into our pipeline.',
    category: CATEGORIES.AI_CONTENT,
    description: "AI tools are integrated into our pipeline to speed up workflows, refine details and enhance visuals without compromising quality or craftsmanship.",
    deliverables: ['AI-generated imagery', 'AI video production', 'Prompt engineering', 'Style transfer', 'AI-enhanced compositing', 'Generative design assets'],
    color: 'neon-yellow',
    image: {
      src: getAsset('AI-powered Production', import.meta.url),
      blur: getBlurAsset('AI-powered Production', import.meta.url),
    },
    heroImage: getAsset('AI-powered Production', import.meta.url),
    gallery: [getAsset('AI-powered Production', import.meta.url), getAsset('Social Media Content', import.meta.url), getAsset('Motion Graphics', import.meta.url)],
    icon: Sparkles,
    featured: true,
    priority: 12,
    stats: [
      { label: 'Model', value: 'Flux/MJ/SD' },
      { label: 'Upscale', value: '4X Neural' },
      { label: 'Iterate', value: 'Rapid Proto' },
      { label: 'Custom', value: 'LoRA Trained' }
    ]
  },
];
