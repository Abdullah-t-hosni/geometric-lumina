export const CATEGORIES = {
  MOTION: 'Motion',
  PRODUCT_VIZ: 'Product Visualization',
  ARCHITECTURE: 'Architecture',
  CGI: 'CGI',
  BOOTH_DESIGN: 'Booth Design',
  AI_CONTENT: 'AI Content',
} as const;

export type PortfolioCategory = typeof CATEGORIES[keyof typeof CATEGORIES] | 'All';

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  gallery: string[];
  year: string;
  client?: string;
  tags: string[];
  specs: ProjectSpec[];
  featured?: boolean;
  priority?: number;
}

// 🚀 Dynamic Image Resolver (Optimized for Vite)
const getAsset = (name: string) => 
  new URL(`../assets/images/${name}.webp`, import.meta.url).href;

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'kinetic-brand-identity',
    title: 'Kinetic Brand Identity',
    category: CATEGORIES.MOTION,
    description: 'A full motion identity system bringing a tech brand to life through animated typography and rhythmic shapes.',
    image: getAsset('Motion Graphics'),
    gallery: [getAsset('Motion Graphics'), getAsset('Social Media Content'), getAsset('Simulations')],
    year: '2024',
    client: 'TechCorp',
    tags: ['Animation', 'Branding', 'Typography'],
    featured: true,
    priority: 1,
    specs: [
      { label: 'Framerate', value: '120 FPS' },
      { label: 'Resolution', value: '8K Master' },
      { label: 'Bitrate', value: '10-Bit Pro' },
      { label: 'Platform', value: 'Global UHD' }
    ]
  },
  {
    id: '2',
    slug: 'luxury-product-campaign',
    title: 'Luxury Product Campaign',
    category: CATEGORIES.PRODUCT_VIZ,
    description: 'Cinematic product renders and animations for a premium fragrance launch — every reflection crafted to perfection.',
    image: getAsset('Product Visualization & Animation'),
    gallery: [getAsset('Product Visualization & Animation'), getAsset('Micro-Visualization'), getAsset('Intro_Page')],
    year: '2024',
    client: 'Luxe Co',
    tags: ['Product Viz', 'Animation', 'CGI'],
    featured: true,
    priority: 2,
    specs: [
      { label: 'Engine', value: 'Octane Render' },
      { label: 'Samples', value: '16,384 Path' },
      { label: 'Texture', value: '8K PBR Raw' },
      { label: 'Post', value: 'ACES Workflow' }
    ]
  },
  {
    id: '3',
    slug: 'exhibition-masterpiece',
    title: 'Exhibition Masterpiece',
    category: CATEGORIES.BOOTH_DESIGN,
    description: 'A 500m² exhibition booth designed for maximum brand impact — immersive, bold, and engineered to perfection.',
    image: getAsset('Booth Design'),
    gallery: [getAsset('Booth Design'), getAsset('our core'), getAsset('Services')],
    year: '2024',
    client: 'ExpoGiant',
    tags: ['Exhibition', 'Interior Design', 'Branding'],
    featured: false,
    priority: 3,
    specs: [
      { label: 'Footprint', value: '500m²' },
      { label: 'Scale', value: '1:1 Technical' },
      { label: 'Geometry', value: 'Parametric' },
      { label: 'Logic', value: 'ISO 9001' }
    ]
  },
  {
    id: '4',
    slug: 'social-media-takeover',
    title: 'Social Media Takeover',
    category: CATEGORIES.MOTION,
    description: 'Bold, scroll-stopping social content that drove 3x engagement for a regional fashion brand.',
    image: getAsset('Social Media Content'),
    gallery: [getAsset('Social Media Content'), getAsset('Motion Graphics'), getAsset('AI-powered Production')],
    year: '2023',
    client: 'FashionBrand',
    tags: ['Social Media', 'Reels', 'Motion'],
    featured: false,
    priority: 4,
    specs: [
      { label: 'Aspect', value: '9:16 Vertical' },
      { label: 'Impact', value: 'Retention 90%+' },
      { label: 'Type', value: 'Fast-Cut' },
      { label: 'Sync', value: 'Hype-Audio' }
    ]
  },
  {
    id: '5',
    slug: 'anamorphic-city-takeover',
    title: 'Anamorphic City Takeover',
    category: CATEGORIES.CGI,
    description: 'A jaw-dropping anamorphic billboard experience that blurred the line between digital and physical reality.',
    image: getAsset('Anamorphic Screens 2'),
    gallery: [getAsset('Anamorphic Screens 2'), getAsset('CGI Compositing'), getAsset('Simulations')],
    year: '2024',
    client: 'MegaCorp',
    tags: ['Anamorphic', 'LED', 'OOH'],
    featured: true,
    priority: 5,
    specs: [
      { label: 'Depth', value: 'Hyper-3D' },
      { label: 'LED Pitch', value: 'P3.9 Global' },
      { label: 'FOV', value: 'Single-Point' },
      { label: 'Scale', value: '8K OOH' }
    ]
  },
  {
    id: '6',
    slug: 'fire-fluid-fx-reel',
    title: 'Fire & Fluid FX Reel',
    category: CATEGORIES.CGI,
    description: 'A showcase simulation reel: fire, smoke, fluid, and particle systems that defy physical limitations.',
    image: getAsset('Simulations'),
    gallery: [getAsset('Simulations'), getAsset('6'), getAsset('Anamorphic Screens 2')],
    year: '2023',
    client: 'Internal',
    tags: ['VFX', 'Simulation', 'Houdini'],
    featured: false,
    priority: 6,
    specs: [
      { label: 'Solver', value: 'Pyro / Vellum' },
      { label: 'Density', value: '1B+ Particles' },
      { label: 'Cache', value: '2.4TB Data' },
      { label: 'Time', value: '4min/Frame' }
    ]
  },
  {
    id: '7',
    slug: 'skyline-residences',
    title: 'Skyline Residences',
    category: CATEGORIES.ARCHITECTURE,
    description: 'A full architectural visualization package for a premium residential development.',
    image: getAsset('Architectural Visualization'),
    gallery: [getAsset('Architectural Visualization'), getAsset('VR Environments'), getAsset('Services')],
    year: '2024',
    client: 'PropDev',
    tags: ['ArchViz', 'Interior', 'Exterior'],
    featured: false,
    priority: 7,
    specs: [
      { label: 'Engine', value: 'UE5 Lumen' },
      { label: 'GI', value: 'Raytraced' },
      { label: 'Context', value: 'Geo-Spatial' },
      { label: 'Detail', value: 'LOD 500' }
    ]
  },
  {
    id: '8',
    slug: 'cellular-journey',
    title: 'Cellular Journey',
    category: CATEGORIES.PRODUCT_VIZ,
    description: 'A medical visualization animating the human immune response at a microscopic level.',
    image: getAsset('Micro-Visualization'),
    gallery: [getAsset('Micro-Visualization'), getAsset('Product Visualization & Animation'), getAsset('3D Scanning')],
    year: '2023',
    client: 'MedTech',
    tags: ['Medical', 'Micro Viz', 'Education'],
    featured: false,
    priority: 8,
    specs: [
      { label: 'Subsurface', value: 'SSS 2.0' },
      { label: 'Scale', value: '20,000X Mix' },
      { label: 'Model', value: 'Bio-Digital' },
      { label: 'Engine', value: 'Arnold GPU' }
    ]
  },
  {
    id: '9',
    slug: 'virtual-showroom-vr',
    title: 'Virtual Showroom VR',
    category: CATEGORIES.ARCHITECTURE,
    description: 'An immersive VR showroom letting clients explore a luxury car collection in a virtual environment.',
    image: getAsset('VR Environments'),
    gallery: [getAsset('VR Environments'), getAsset('Architectural Visualization'), getAsset('Intro_Page')],
    year: '2024',
    client: 'AutoLux',
    tags: ['VR', 'Real-time', 'Interactive'],
    featured: true,
    priority: 9,
    specs: [
      { label: 'Refresh', value: '90Hz Native' },
      { label: 'Latence', value: '< 15ms' },
      { label: 'Audio', value: 'Spatial HRTF' },
      { label: 'Engine', value: 'Nanite / Lumen' }
    ]
  },
  {
    id: '10',
    slug: 'cgi-desert-campaign',
    title: 'CGI Desert Campaign',
    category: CATEGORIES.CGI,
    description: 'A live-action + CGI composite placing a product in a breathtaking desert landscape — seamless and cinematic.',
    image: getAsset('CGI Compositing'),
    gallery: [getAsset('CGI Compositing'), getAsset('Intro_Page'), getAsset('Simulations')],
    year: '2024',
    client: 'BevCo',
    tags: ['Compositing', 'VFX', 'Live Action'],
    featured: false,
    priority: 10,
    specs: [
      { label: 'Track', value: '3D Equalizer' },
      { label: 'Plate', value: '8K 12-Bit' },
      { label: 'Nodes', value: '450+ Nuke' },
      { label: 'LUT', value: 'LogC to ACES' }
    ]
  },
  {
    id: '11',
    slug: 'heritage-object-digitization',
    title: 'Heritage Object Digitization',
    category: CATEGORIES.PRODUCT_VIZ,
    description: 'High-precision 3D scanning and digital preservation of rare archaeological artifacts.',
    image: getAsset('3D Scanning'),
    gallery: [getAsset('3D Scanning'), getAsset('Micro-Visualization'), getAsset('Product Visualization & Animation')],
    year: '2023',
    client: 'Museum',
    tags: ['3D Scanning', 'Preservation', 'Digital'],
    featured: false,
    priority: 11,
    specs: [
      { label: 'Points', value: '150M Cloud' },
      { label: 'Tolerance', value: '±0.1mm' },
      { label: 'Texture', value: 'Cross-Polar' },
      { label: 'Format', value: 'GLB / USDZ' }
    ]
  },
  {
    id: '12',
    slug: 'ai-fashion-editorial',
    title: 'AI Fashion Editorial',
    category: CATEGORIES.AI_CONTENT,
    description: 'A fully AI-generated fashion editorial pushing boundaries between photography and generative art.',
    image: getAsset('AI-powered Production'),
    gallery: [getAsset('AI-powered Production'), getAsset('Social Media Content'), getAsset('Motion Graphics')],
    year: '2024',
    client: 'StyleMag',
    tags: ['AI Generated', 'Editorial', 'Fashion'],
    featured: true,
    priority: 12,
    specs: [
      { label: 'Model', value: 'Flux / Lora' },
      { label: 'UHD', value: '8K Upscale' },
      { label: 'Seeds', value: 'Selected_9' },
      { label: 'Process', value: 'Neural Flow' }
    ]
  },
];

export const portfolioCategories = [
  { id: 'all', label: 'All' },
  { id: 'motion', label: 'Motion' },
  { id: 'product', label: 'Product Visualization' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'cgi', label: 'CGI' },
  { id: 'booth', label: 'Booth Design' },
  { id: 'ai', label: 'AI Content' },
];

export const portfolioCategoriesOld = [
  'All',
  'Motion',
  'Product Visualization',
  'Architecture',
  'CGI',
  'Booth Design',
  'AI Content',
];

// For compatibility during transition
export const portfolioCategoriesCompat = portfolioCategoriesOld;
