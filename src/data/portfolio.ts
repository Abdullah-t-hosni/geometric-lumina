import motionGraphics from '@/assets/images/Motion Graphics.jpeg';
import productVisualization from '@/assets/images/Product Visualization & Animation.jpeg';
import boothDesign from '@/assets/images/Booth Design.jpeg';
import socialMedia from '@/assets/images/Social Media Content.jpeg';
import anamorphicScreens from '@/assets/images/Anamorphic Screens.jpeg';
import simulations from '@/assets/images/Simulations.jpeg';
import architecturalVisualization from '@/assets/images/Architectural Visualization.jpeg';
import microVisualization from '@/assets/images/Micro Visualization.jpeg';
import vrEnvironments from '@/assets/images/VR Environments.jpeg';
import cgiCompositing from '@/assets/images/CGI Compositing.jpeg';
import threeDScanning from '@/assets/images/3D Scanning.jpeg';
import aiProduction from '@/assets/images/AI-powered Production.jpeg';
import technicalDrawing from '@/assets/images/technical drawing.jpeg';
import servicesImg from '@/assets/images/Services.jpeg';
import img10 from '@/assets/images/10.jpeg';
import img6 from '@/assets/images/6.jpeg';

export type PortfolioCategory = 'All' | 'Motion' | 'Product Visualization' | 'Architecture' | 'CGI' | 'Booth Design' | 'AI Content';

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
  },
  {
    id: '7',
    title: 'Skyline Residences',
    category: 'Architecture',
    description: 'A full architectural visualization package for a premium residential development in New Cairo.',
    image: architecturalVisualization,
    gallery: [architecturalVisualization, vrEnvironments, servicesImg],
    year: '2024',
    client: 'PropDev',
    tags: ['ArchViz', 'Interior', 'Exterior'],
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

