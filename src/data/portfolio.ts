import motionGraphics from '@/assets/images/Motion Graphics.webp';
import productVisualization from '@/assets/images/Product Visualization & Animation.webp';
import boothDesign from '@/assets/images/Booth Design.webp';
import socialMedia from '@/assets/images/Social Media Content.webp';
import anamorphicScreens from '@/assets/images/Anamorphic Screens 2.webp';
import simulations from '@/assets/images/Simulations.webp';
import architecturalVisualization from '@/assets/images/Architectural Visualization.webp';
import microVisualization from '@/assets/images/Micro-Visualization.webp';
import vrEnvironments from '@/assets/images/VR Environments.webp';
import cgiCompositing from '@/assets/images/CGI Compositing.webp';
import threeDScanning from '@/assets/images/3D Scanning.webp';
import aiProduction from '@/assets/images/AI-powered Production.webp';
import technicalDrawing from '@/assets/images/our core.webp';
import servicesImg from '@/assets/images/Services.webp';
import img10 from '@/assets/images/Intro_Page.webp';
import img6 from '@/assets/images/6.webp';

export type PortfolioCategory = 'All' | 'Motion' | 'Product Visualization' | 'Architecture' | 'CGI' | 'Booth Design' | 'AI Content';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  gallery: string[];
  year: string;
  client?: string;
  tags: string[];
  specs: ProjectSpec[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Kinetic Brand Identity',
    category: 'Motion',
    description: 'A full motion identity system bringing a tech brand to life through animated typography and rhythmic shapes.',
    image: motionGraphics,
    gallery: [motionGraphics, socialMedia, simulations],
    year: '2024',
    client: 'TechCorp',
    tags: ['Animation', 'Branding', 'Typography'],
    specs: [
      { label: 'Framerate', value: '120 FPS' },
      { label: 'Resolution', value: '8K Master' },
      { label: 'Bitrate', value: '10-Bit Pro' },
      { label: 'Platform', value: 'Global UHD' }
    ]
  },
  {
    id: '2',
    title: 'Luxury Product Campaign',
    category: 'Product Visualization',
    description: 'Cinematic product renders and animations for a premium fragrance launch — every reflection crafted to perfection.',
    image: productVisualization,
    gallery: [productVisualization, microVisualization, img10],
    year: '2024',
    client: 'Luxe Co',
    tags: ['Product Viz', 'Animation', 'CGI'],
    specs: [
      { label: 'Engine', value: 'Octane Render' },
      { label: 'Samples', value: '16,384 Path' },
      { label: 'Texture', value: '8K PBR Raw' },
      { label: 'Post', value: 'ACES Workflow' }
    ]
  },
  {
    id: '3',
    title: 'Exhibition Masterpiece',
    category: 'Booth Design',
    description: 'A 500m² exhibition booth designed for maximum brand impact — immersive, bold, and engineered to perfection.',
    image: boothDesign,
    gallery: [boothDesign, technicalDrawing, servicesImg],
    year: '2024',
    client: 'ExpoGiant',
    tags: ['Exhibition', 'Interior Design', 'Branding'],
    specs: [
      { label: 'Footprint', value: '500m²' },
      { label: 'Scale', value: '1:1 Technical' },
      { label: 'Geometry', value: 'Parametric' },
      { label: 'Logic', value: 'ISO 9001' }
    ]
  },
  {
    id: '4',
    title: 'Social Media Takeover',
    category: 'Motion',
    description: 'Bold, scroll-stopping social content that drove 3x engagement for a regional fashion brand.',
    image: socialMedia,
    gallery: [socialMedia, motionGraphics, aiProduction],
    year: '2023',
    client: 'FashionBrand',
    tags: ['Social Media', 'Reels', 'Motion'],
    specs: [
      { label: 'Aspect', value: '9:16 Vertical' },
      { label: 'Impact', value: 'Retention 90%+' },
      { label: 'Type', value: 'Fast-Cut' },
      { label: 'Sync', value: 'Hype-Audio' }
    ]
  },
  {
    id: '5',
    title: 'Anamorphic City Takeover',
    category: 'CGI',
    description: 'A jaw-dropping anamorphic billboard experience that blurred the line between digital and physical reality.',
    image: anamorphicScreens,
    gallery: [anamorphicScreens, cgiCompositing, simulations],
    year: '2024',
    client: 'MegaCorp',
    tags: ['Anamorphic', 'LED', 'OOH'],
    specs: [
      { label: 'Depth', value: 'Hyper-3D' },
      { label: 'LED Pitch', value: 'P3.9 Global' },
      { label: 'FOV', value: 'Single-Point' },
      { label: 'Scale', value: '8K OOH' }
    ]
  },
  {
    id: '6',
    title: 'Fire & Fluid FX Reel',
    category: 'CGI',
    description: 'A showcase simulation reel: fire, smoke, fluid, and particle systems that defy physical limitations.',
    image: simulations,
    gallery: [simulations, img6, anamorphicScreens],
    year: '2023',
    client: 'Internal',
    tags: ['VFX', 'Simulation', 'Houdini'],
    specs: [
      { label: 'Solver', value: 'Pyro / Vellum' },
      { label: 'Density', value: '1B+ Particles' },
      { label: 'Cache', value: '2.4TB Data' },
      { label: 'Time', value: '4min/Frame' }
    ]
  },
  {
    id: '7',
    title: 'Skyline Residences',
    category: 'Architecture',
    description: 'A full architectural visualization package for a premium residential development.',
    image: architecturalVisualization,
    gallery: [architecturalVisualization, vrEnvironments, servicesImg],
    year: '2024',
    client: 'PropDev',
    tags: ['ArchViz', 'Interior', 'Exterior'],
    specs: [
      { label: 'Engine', value: 'UE5 Lumen' },
      { label: 'GI', value: 'Raytraced' },
      { label: 'Context', value: 'Geo-Spatial' },
      { label: 'Detail', value: 'LOD 500' }
    ]
  },
  {
    id: '8',
    title: 'Cellular Journey',
    category: 'Product Visualization',
    description: 'A medical visualization animating the human immune response at a microscopic level.',
    image: microVisualization,
    gallery: [microVisualization, productVisualization, threeDScanning],
    year: '2023',
    client: 'MedTech',
    tags: ['Medical', 'Micro Viz', 'Education'],
    specs: [
      { label: 'Subsurface', value: 'SSS 2.0' },
      { label: 'Scale', value: '20,000X Mix' },
      { label: 'Model', value: 'Bio-Digital' },
      { label: 'Engine', value: 'Arnold GPU' }
    ]
  },
  {
    id: '9',
    title: 'Virtual Showroom VR',
    category: 'Architecture',
    description: 'An immersive VR showroom letting clients explore a luxury car collection in a virtual environment.',
    image: vrEnvironments,
    gallery: [vrEnvironments, architecturalVisualization, img10],
    year: '2024',
    client: 'AutoLux',
    tags: ['VR', 'Real-time', 'Interactive'],
    specs: [
      { label: 'Refresh', value: '90Hz Native' },
      { label: 'Latence', value: '< 15ms' },
      { label: 'Audio', value: 'Spatial HRTF' },
      { label: 'Engine', value: 'Nanite / Lumen' }
    ]
  },
  {
    id: '10',
    title: 'CGI Desert Campaign',
    category: 'CGI',
    description: 'A live-action + CGI composite placing a product in a breathtaking desert landscape — seamless and cinematic.',
    image: cgiCompositing,
    gallery: [cgiCompositing, img10, simulations],
    year: '2024',
    client: 'BevCo',
    tags: ['Compositing', 'VFX', 'Live Action'],
    specs: [
      { label: 'Track', value: '3D Equalizer' },
      { label: 'Plate', value: '8K 12-Bit' },
      { label: 'Nodes', value: '450+ Nuke' },
      { label: 'LUT', value: 'LogC to ACES' }
    ]
  },
  {
    id: '11',
    title: 'Heritage Object Digitization',
    category: 'Product Visualization',
    description: 'High-precision 3D scanning and digital preservation of rare archaeological artifacts.',
    image: threeDScanning,
    gallery: [threeDScanning, microVisualization, productVisualization],
    year: '2023',
    client: 'Museum',
    tags: ['3D Scanning', 'Preservation', 'Digital'],
    specs: [
      { label: 'Points', value: '150M Cloud' },
      { label: 'Tolerance', value: '±0.1mm' },
      { label: 'Texture', value: 'Cross-Polar' },
      { label: 'Format', value: 'GLB / USDZ' }
    ]
  },
  {
    id: '12',
    title: 'AI Fashion Editorial',
    category: 'AI Content',
    description: 'A fully AI-generated fashion editorial pushing boundaries between photography and generative art.',
    image: aiProduction,
    gallery: [aiProduction, socialMedia, motionGraphics],
    year: '2024',
    client: 'StyleMag',
    tags: ['AI Generated', 'Editorial', 'Fashion'],
    specs: [
      { label: 'Model', value: 'Flux / Lora' },
      { label: 'UHD', value: '8K Upscale' },
      { label: 'Seeds', value: 'Selected_9' },
      { label: 'Process', value: 'Neural Flow' }
    ]
  },
];

export const portfolioCategories: PortfolioCategory[] = [
  'All',
  'Motion',
  'Product Visualization',
  'Architecture',
  'CGI',
  'Booth Design',
  'AI Content',
];

