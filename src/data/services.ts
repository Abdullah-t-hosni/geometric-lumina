import motionGraphics from '@/assets/images/Motion Graphics.webp';
import productVisualization from '@/assets/images/Product Visualization & Animation.webp';
import boothDesign from '@/assets/images/Booth Design.webp';
import socialMedia from '@/assets/images/Social Media Content.webp';
import anamorphicScreens from '@/assets/images/Anamorphic Screens 2.webp';
import anamorphicScreens1 from '@/assets/images/Anamorphic-Screens1.webp';
import simulations from '@/assets/images/Simulations.webp';
import architecturalVisualization from '@/assets/images/Architectural Visualization.webp';
import microVisualization from '@/assets/images/Micro-Visualization.webp';
import vrEnvironments from '@/assets/images/VR Environments.webp';
import cgiCompositing from '@/assets/images/CGI Compositing.webp';
import threeDScanning from '@/assets/images/3D Scanning.webp';
import aiProduction from '@/assets/images/AI-powered Production.webp';
import technicalDrawing from '@/assets/images/our core.webp';
import servicesImg from '@/assets/images/Services.webp';
import intro3 from '@/assets/images/Intro_3.webp';
import img10 from '@/assets/images/Intro_Page.webp';
import img6 from '@/assets/images/6.webp';

export interface ServiceStat {
  label: string;
  value: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  category: string;
  color: string;
  image: string;
  heroImage: string;
  gallery?: string[];
  icon: string;
  stats: ServiceStat[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'motion-graphics',
    name: 'Motion Graphics',
    tagline: 'Stories that move, twist, pulse, and flow.',
    description: "Stories don't have to be told with words. They can move, twist, pulse, and flow. Through motion graphics, every shape, every light, every rhythm is crafted to move both the eye and the mind.",
    deliverables: ['Brand animations', 'Intro/Outro sequences', 'Logo reveals', 'Kinetic typography', 'Promotional videos', 'Social reels'],
    category: 'Motion',
    color: 'sky-blue',
    image: motionGraphics,
    heroImage: intro3,
    gallery: [motionGraphics, intro3, socialMedia],
    icon: '▶',
    stats: [
      { label: 'Framerate', value: '120 FPS' },
      { label: 'Resolution', value: 'Dynamic 4K' },
      { label: 'Bitrate', value: 'Long-GOP 10-Bit' },
      { label: 'Motion', value: 'Non-Linear' }
    ]
  },
  {
    id: '2',
    slug: 'product-visualization',
    name: 'Product Visualization',
    tagline: 'Every product deserves a cinematic spotlight.',
    description: "Whether your product is still in concept or already on shelves, it deserves a cinematic spotlight. Every reflection, texture, and movement is designed to make it look irresistible on screen.",
    deliverables: ['360° product renders', 'Exploded views', 'Material animations', 'Packaging visualization', 'Commercial-ready shots', 'Lifestyle compositions'],
    category: 'Product Visualization',
    color: 'neon-yellow',
    image: productVisualization,
    heroImage: productVisualization,
    gallery: [productVisualization, microVisualization],
    icon: '◈',
    stats: [
      { label: 'Precision', value: '0.001mm' },
      { label: 'Texture', value: '8K PBR' },
      { label: 'Lighting', value: 'Raytraced' },
      { label: 'Engine', value: 'Octane/Redshift' }
    ]
  },
  {
    id: '3',
    slug: 'booth-exhibition-design',
    name: 'Booth & Exhibition Design',
    tagline: 'Every booth we create is an experience.',
    description: "Every booth we create is more than a space — it's an experience. We design environments that attract attention, tell stories and connect brands with their audience through form, light, and motion.",
    deliverables: ['Interior design concepts', 'Exterior design renders', 'Technical drawings', 'Structural planning', 'Lighting design', 'Material specifications'],
    category: 'Booth Design',
    color: 'coral-red',
    image: boothDesign,
    heroImage: technicalDrawing,
    gallery: [boothDesign, technicalDrawing],
    icon: '⬡',
    stats: [
      { label: 'Scale', value: '1:1 Reality' },
      { label: 'Specs', value: 'ISO 9001' },
      { label: 'Logic', value: 'Structural' },
      { label: 'Design', value: 'Ergonomic' }
    ]
  },
  {
    id: '4',
    slug: 'social-media-content',
    name: 'Social Media Content',
    tagline: 'Fast, bold, and made to stop the scroll.',
    description: "Fast, bold, and made to stop the scroll. Each frame crafted to fit the rhythm of social media — short, powerful, and visually magnetic. Perfect for brands that want to stand out in the feed.",
    deliverables: ['Short-form video content', 'Story animations', 'Feed posts', 'Reels & TikTok', 'Carousel designs', 'Platform-optimized exports'],
    category: 'Motion',
    color: 'sea-green',
    image: socialMedia,
    heroImage: socialMedia,
    icon: '◉',
    stats: [
      { label: 'Aspect', value: '9:16 / 4:5' },
      { label: 'Impact', value: 'Retention 85%+' },
      { label: 'Frequency', value: 'High-Output' },
      { label: 'Style', value: 'Minimalist' }
    ]
  },
  {
    id: '5',
    slug: 'anamorphic-screens',
    name: 'Anamorphic Screens',
    tagline: 'Depth breaking the flat screen into another dimension.',
    description: "The illusion of depth breaking the flat screen into another dimension. Perfect geometry, motion, and perspective combine to create visuals that feel like they're stepping out into the real world.",
    deliverables: ['3D anamorphic content', 'LED cube content', 'Outdoor billboard visuals', 'Immersive display loops', 'Brand activations', 'Event screens'],
    category: 'CGI',
    color: 'deep-teal',
    image: anamorphicScreens,
    heroImage: anamorphicScreens1,
    gallery: [anamorphicScreens, anamorphicScreens1, cgiCompositing],
    icon: '◧',
    stats: [
      { label: 'Dimension', value: 'Hyper-3D' },
      { label: 'Sync', value: 'LED Clock' },
      { label: 'FOV', value: 'Fixed Point' },
      { label: 'Scale', value: '8K Master' }
    ]
  },
  {
    id: '6',
    slug: 'simulations',
    name: 'Simulations',
    tagline: 'Chaos has its own rhythm.',
    description: "Chaos has its own rhythm. Fire burns, smoke dances, fluids collide — and even wires can move like clouds. We bend the rules of reality, shaping the impossible into motion.",
    deliverables: ['Fire & smoke simulations', 'Fluid dynamics', 'Cloth & soft body', 'Particle systems', 'Destruction effects', 'Environmental FX'],
    category: 'CGI',
    color: 'coral-red',
    image: simulations,
    heroImage: img6,
    gallery: [simulations, img6],
    icon: '◌',
    stats: [
      { label: 'Solver', value: 'Vellum/Pyro' },
      { label: 'Density', value: '1B+ Particles' },
      { label: 'Logic', value: 'Physics-Based' },
      { label: 'Software', value: 'Houdini FX' }
    ]
  },
  {
    id: '7',
    slug: 'architectural-visualization',
    name: 'Architectural Visualization',
    tagline: "It's more than walls and glass — it's atmosphere.",
    description: "It's more than walls and glass — it's atmosphere. Light, shadow, and material brought together to show not just how a place looks, but how it feels to stand there.",
    deliverables: ['Exterior renders', 'Interior visualization', 'Walkthrough animations', 'Virtual tours', 'Construction documentation', 'Lighting studies'],
    category: 'Architecture',
    color: 'sky-blue',
    image: architecturalVisualization,
    heroImage: servicesImg,
    gallery: [architecturalVisualization, servicesImg],
    icon: '⬚',
    stats: [
      { label: 'Accuracy', value: 'BIM Level 3' },
      { label: 'Context', value: 'Geo-Spatial' },
      { label: 'Light', value: 'True-Lumen' },
      { label: 'Speed', value: 'Real-time UE5' }
    ]
  },
  {
    id: '8',
    slug: 'micro-visualization',
    name: 'Micro Visualization',
    tagline: 'Tiny worlds. Huge stories.',
    description: "Tiny worlds. Huge stories. From cells to circuits, micro visualization turns the invisible into something beautiful, precise, and full of wonder.",
    deliverables: ['Scientific visualization', 'Medical animations', 'Molecular models', 'Circuit & tech flows', 'Educational content', 'Nano-scale renders'],
    category: 'Product Visualization',
    color: 'sea-green',
    image: microVisualization,
    heroImage: microVisualization,
    gallery: [microVisualization, productVisualization, simulations],
    icon: '⬤',
    stats: [
      { label: 'Macro', value: '2000X Digital' },
      { label: 'Subsurface', value: 'SSS-Shader' },
      { label: 'Accuracy', value: 'Atomic-Scale' },
      { label: 'Focus', value: 'Macro-Depth' }
    ]
  },
  {
    id: '9',
    slug: 'vr-environments',
    name: 'VR Environments',
    tagline: 'Step into a world built from imagination.',
    description: "Step into a world built from imagination. Every surface, sound, and detail crafted to be explored — because the best way to experience a story is to walk inside it.",
    deliverables: ['VR experience design', '360° environments', 'Interactive scenarios', 'Real-time rendering', 'Spatial audio integration', 'Cross-platform VR content'],
    category: 'Architecture',
    color: 'neon-yellow',
    image: vrEnvironments,
    heroImage: vrEnvironments,
    gallery: [vrEnvironments, architecturalVisualization, simulations],
    icon: '⬣',
    stats: [
      { label: 'Latence', value: '< 20ms' },
      { label: 'Platform', value: 'Oculus/Vive' },
      { label: 'Audio', value: 'Spatial 3D' },
      { label: 'Refresh', value: '90Hz Stable' }
    ]
  },
  {
    id: '10',
    slug: 'cgi-compositing',
    name: 'CGI Compositing',
    tagline: 'Where CGI and reality meet in perfect harmony.',
    description: "Where CGI and reality meet in perfect harmony. Each shot is crafted to look seamless, immersive, and visually powerful.",
    deliverables: ['Live-action compositing', 'VFX integration', 'Color grading', 'Green screen removal', 'Environment replacement', 'Product-in-scene insertion'],
    category: 'CGI',
    color: 'sky-blue',
    image: cgiCompositing,
    heroImage: img10,
    gallery: [cgiCompositing, img10],
    icon: '⬟',
    stats: [
      { label: 'Deep', value: 'EXR 32-Bit' },
      { label: 'Key', value: 'Delta-Stellar' },
      { label: 'Space', value: 'ACES-cg' },
      { label: 'Soft', value: 'Nuke Studio' }
    ]
  },
  {
    id: '11',
    slug: '3d-scanning',
    name: '3D Scanning',
    tagline: 'Every curve, every imperfection captured perfectly.',
    description: "Every curve, every imperfection captured perfectly. 3D scanning bridges the physical and digital, turning real objects into detailed assets ready for visualization.",
    deliverables: ['High-res 3D scans', 'Mesh cleanup', 'Texture mapping', 'Heritage preservation', 'Product digitization', 'CAD-ready models'],
    category: 'Product Visualization',
    color: 'coral-red',
    image: threeDScanning,
    heroImage: threeDScanning,
    gallery: [threeDScanning, productVisualization, microVisualization],
    icon: '◍',
    stats: [
      { label: 'Points', value: '50M+ Cloud' },
      { label: 'Texture', value: 'Photogrammetry' },
      { label: 'Output', value: 'Retopologized' },
      { label: 'Tolerance', value: '±0.1mm' }
    ]
  },
  {
    id: '12',
    slug: 'ai-content-production',
    name: 'AI Content Production',
    tagline: 'AI tools integrated into our pipeline.',
    description: "AI tools are integrated into our pipeline to speed up workflows, refine details and enhance visuals without compromising quality or craftsmanship.",
    deliverables: ['AI-generated imagery', 'AI video production', 'Prompt engineering', 'Style transfer', 'AI-enhanced compositing', 'Generative design assets'],
    category: 'AI Content',
    color: 'neon-yellow',
    image: aiProduction,
    heroImage: aiProduction,
    gallery: [aiProduction, socialMedia, motionGraphics],
    icon: '◎',
    stats: [
      { label: 'Model', value: 'Flux/MJ/SD' },
      { label: 'Upscale', value: '4X Neural' },
      { label: 'Iterate', value: 'Rapid Proto' },
      { label: 'Custom', value: 'LoRA Trained' }
    ]
  },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);

