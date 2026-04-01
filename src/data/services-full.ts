import { 
  Play, 
  Box, 
  Hexagon, 
  Share2, 
  Layers, 
  Wind, 
  Home, 
  Microscope, 
  Glasses, 
  Component, 
  Scan, 
  Sparkles
} from 'lucide-react';
import { Service, CATEGORIES, getAsset, getBlurAsset } from './services-types';

// 🚀 Performance: Memoized assets cache to prevent re-computation
const assetCache = new Map<string, { src: string; blur: string }>();
const createImage = (name: string) => {
  if (!assetCache.has(name)) {
    assetCache.set(name, {
      src: getAsset(name),
      blur: getBlurAsset(name),
    });
  }
  return assetCache.get(name)!;
};

const servicesData: Service[] = [
  {
    id: '1',
    slug: 'motion-graphics',
    name: 'Motion Graphics',
    tagline: 'Stories that move, twist, pulse, and flow.',
    category: CATEGORIES.MOTION,
    description: "Stories don't have to be told with words. They can move, twist, pulse, and flow. Through motion graphics, every shape, every light, every rhythm is crafted to move both the eye and the mind.",
    deliverables: ['Brand animations', 'Intro/Outro sequences', 'Logo reveals', 'Kinetic typography', 'Promotional videos', 'Social reels'],
    color: 'sky-blue',
    image: createImage('Motion Graphics'),
    heroImage: getAsset('Intro_3'),
    gallery: [getAsset('Motion Graphics'), getAsset('Intro_3'), getAsset('Social Media Content')],
    icon: Play,
    featured: true,
    priority: 1,
    stats: [
      { label: 'Framerate', value: '120 FPS' },
      { label: 'Resolution', value: 'Dynamic 4K' },
      { label: 'Bitrate', value: 'Long-GOP 10-Bit' },
      { label: 'Motion', value: 'Non-Linear' }
    ],
    seoTitle: 'Motion Graphics Services | Geometric Studio',
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
    image: createImage('Product Visualization & Animation'),
    heroImage: getAsset('Product Visualization & Animation'),
    gallery: [getAsset('Product Visualization & Animation'), getAsset('Micro-Visualization')],
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
    image: createImage('Booth Design'),
    heroImage: getAsset('our core'),
    gallery: [getAsset('Booth Design'), getAsset('our core')],
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
    id: '4',
    slug: 'social-media-content',
    name: 'Social Media Content',
    tagline: 'Fast, bold, and made to stop the scroll.',
    category: CATEGORIES.MOTION,
    description: "Fast, bold, and made to stop the scroll. Each frame crafted to fit the rhythm of social media — short, powerful, and visually magnetic. Perfect for brands that want to stand out in the feed.",
    deliverables: ['Short-form video content', 'Story animations', 'Feed posts', 'Reels & TikTok', 'Carousel designs', 'Platform-optimized exports'],
    color: 'sea-green',
    image: createImage('Social Media Content'),
    heroImage: getAsset('Social Media Content'),
    icon: Share2,
    featured: false,
    priority: 4,
    stats: [
      { label: 'Aspect', value: '9:16 / 4:5' },
      { label: 'Impact', value: 'Retention 85%+' },
      { label: 'Frequency', value: 'High-Output' },
      { label: 'Style', value: 'Minimalist' }
    ],
    seoTitle: 'Social Media Content Creation | Scroll-Stopping Video',
    seoDescription: 'High-impact social media content designed for maximum engagement and brand visibility.'
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
    image: createImage('Anamorphic Screens 2'),
    heroImage: getAsset('Anamorphic-Screens1'),
    icon: Layers,
    featured: true,
    priority: 5,
    stats: [
      { label: 'Dimension', value: 'Hyper-3D' },
      { label: 'Sync', value: 'LED Clock' },
      { label: 'FOV', value: 'Fixed Point' },
      { label: 'Scale', value: '8K Master' }
    ],
    seoTitle: 'Anamorphic 3D Screens | Immersive LED Advertising',
    seoDescription: 'Cutting-edge anamorphic 3D content for LED screens and outdoor billboards that break the flat-screen illusion.'
  },
  {
    id: '6',
    slug: 'simulations',
    name: 'Simulations',
    tagline: 'Chaos has its own rhythm.',
    category: CATEGORIES.CGI,
    description: "Chaos has its own rhythm. Fire burns, smoke dances, fluids collide — and even wires can move like clouds. We bend the rules of reality, shaping the impossible into motion.",
    deliverables: ['Fire & smoke simulations', 'Fluid dynamics', 'Cloth & soft body', 'Particle systems', 'Destruction effects', 'Environmental FX'],
    color: 'coral-red',
    image: createImage('Simulations'),
    heroImage: getAsset('6'),
    gallery: [getAsset('Simulations'), getAsset('6')],
    icon: Wind,
    featured: false,
    priority: 6,
    stats: [
      { label: 'Solver', value: 'Vellum/Pyro' },
      { label: 'Density', value: '1B+ Particles' },
      { label: 'Logic', value: 'Physics-Based' },
      { label: 'Software', value: 'Houdini FX' }
    ],
    seoTitle: 'CGI Simulations | Physics-Based Visual Effects',
    seoDescription: 'Advanced CGI simulations for fluid dynamics, fire, smoke, and complex physics-based VFX.'
  },
  {
    id: '7',
    slug: 'architectural-visualization',
    name: 'Architectural Visualization',
    tagline: "It's more than walls and glass — it's atmosphere.",
    category: CATEGORIES.ARCHITECTURE,
    description: "It's more than walls and glass — it's atmosphere. Light, shadow, and material brought together to show not just how a place looks, but how it feels to stand there.",
    deliverables: ['Exterior renders', 'Interior visualization', 'Walkthrough animations', 'Virtual tours', 'Construction documentation', 'Lighting studies'],
    color: 'sky-blue',
    image: createImage('Architectural Visualization'),
    heroImage: getAsset('Services'),
    gallery: [getAsset('Architectural Visualization'), getAsset('Services')],
    icon: Home,
    featured: false,
    priority: 7,
    stats: [
      { label: 'Accuracy', value: 'BIM Level 3' },
      { label: 'Context', value: 'Geo-Spatial' },
      { label: 'Light', value: 'True-Lumen' },
      { label: 'Speed', value: 'Real-time UE5' }
    ],
    seoTitle: 'Architectural Visualization | 3D Interior & Exterior Rendering',
    seoDescription: 'High-end architectural visualization services for real estate and design, featuring photorealistic renders and virtual tours.'
  },
  {
    id: '8',
    slug: 'micro-visualization',
    name: 'Micro Visualization',
    tagline: 'Tiny worlds. Huge stories.',
    category: CATEGORIES.PRODUCT_VIZ,
    description: "Tiny worlds. Huge stories. From cells to circuits, micro visualization turns the invisible into something beautiful, precise, and full of wonder.",
    deliverables: ['Scientific visualization', 'Medical animations', 'Molecular models', 'Circuit & tech flows', 'Educational content', 'Nano-scale renders'],
    color: 'sea-green',
    image: createImage('Micro-Visualization'),
    heroImage: getAsset('Micro-Visualization'),
    gallery: [getAsset('Micro-Visualization'), getAsset('Product Visualization & Animation'), getAsset('Simulations')],
    icon: Microscope,
    featured: false,
    priority: 8,
    stats: [
      { label: 'Macro', value: '2000X Digital' },
      { label: 'Subsurface', value: 'SSS-Shader' },
      { label: 'Accuracy', value: 'Atomic-Scale' },
      { label: 'Focus', value: 'Macro-Depth' }
    ],
    seoTitle: 'Micro Visualization | Scientific & Technical 3D Renders',
    seoDescription: 'Precise micro-visualization for science, technology, and medical applications, turning the invisible into stunning 3D art.'
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
    image: createImage('VR Environments'),
    heroImage: getAsset('VR Environments'),
    gallery: [getAsset('VR Environments'), getAsset('Architectural Visualization'), getAsset('Simulations')],
    icon: Glasses,
    featured: true,
    priority: 9,
    stats: [
      { label: 'Latence', value: '< 20ms' },
      { label: 'Platform', value: 'Oculus/Vive' },
      { label: 'Audio', value: 'Spatial 3D' },
      { label: 'Refresh', value: '90Hz Stable' }
    ],
    seoTitle: 'VR Environments & Experiences | Immersive Digital Worlds',
    seoDescription: 'Immersive VR environment design and interactive experiences for platforms like Oculus and Vive.'
  },
  {
    id: '10',
    slug: 'cgi-compositing',
    name: 'CGI Compositing',
    tagline: 'Where CGI and reality meet in perfect harmony.',
    category: CATEGORIES.CGI,
    description: "Where CGI and reality meet in perfect harmony. Each shot is crafted to look seamless, immersive, and visually powerful.",
    deliverables: ['Live-action compositing', 'VFX integration', 'Color grading', 'Green screen removal', 'Environment replacement', 'Product-in-scene insertion'],
    color: 'sky-blue',
    image: createImage('CGI Compositing'),
    heroImage: getAsset('Intro_Page'),
    icon: Component,
    featured: false,
    priority: 10,
    stats: [
      { label: 'Deep', value: 'EXR 32-Bit' },
      { label: 'Key', value: 'Delta-Stellar' },
      { label: 'Space', value: 'ACES-cg' },
      { label: 'Soft', value: 'Nuke Studio' }
    ],
    seoTitle: 'CGI Compositing & VFX | Seamless Live-Action Integration',
    seoDescription: 'Professional CGI compositing and VFX integration services for film, advertising, and high-end video production.'
  },
  {
    id: '11',
    slug: '3d-scanning',
    name: '3D Scanning',
    tagline: 'Every curve, every imperfection captured perfectly.',
    category: CATEGORIES.PRODUCT_VIZ,
    description: "Every curve, every imperfection captured perfectly. 3D scanning bridges the physical and digital, turning real objects into detailed assets ready for visualization.",
    deliverables: ['High-res 3D scans', 'Mesh cleanup', 'Texture mapping', 'Heritage preservation', 'Product digitization', 'CAD-ready models'],
    color: 'coral-red',
    image: createImage('3D Scanning'),
    heroImage: getAsset('3D Scanning'),
    gallery: [getAsset('3D Scanning'), getAsset('Product Visualization & Animation'), getAsset('Micro-Visualization')],
    icon: Scan,
    featured: false,
    priority: 11,
    stats: [
      { label: 'Points', value: '50M+ Cloud' },
      { label: 'Texture', value: 'Photogrammetry' },
      { label: 'Output', value: 'Retopologized' },
      { label: 'Tolerance', value: '±0.1mm' }
    ],
    seoTitle: '3D Scanning Services | High-Resolution Digital Twins',
    seoDescription: 'Professional 3D scanning and photogrammetry services for creating precise digital assets and heritage preservation.'
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
    image: createImage('AI-powered Production'),
    heroImage: getAsset('AI-powered Production'),
    gallery: [getAsset('AI-powered Production'), getAsset('Social Media Content'), getAsset('Motion Graphics')],
    icon: Sparkles,
    featured: true,
    priority: 12,
    stats: [
      { label: 'Model', value: 'Flux/MJ/SD' },
      { label: 'Upscale', value: '4X Neural' },
      { label: 'Iterate', value: 'Rapid Proto' },
      { label: 'Custom', value: 'LoRA Trained' }
    ],
    seoTitle: 'AI Content Production | Generative AI Visuals',
    seoDescription: 'Innovative AI-powered content production, integrating advanced generative models into professional production pipelines.'
  },
];

// 🚀 Performance: Freeze the data to prevent accidental modifications
// and enable engine optimizations
export const services: Service[] = [...servicesData];

// Prevent mutations on frozen data for optimal performance
Object.freeze(services);
