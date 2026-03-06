import motionGraphicsImg from '@/assets/services/motion-graphics.jpg';
import productVizImg from '@/assets/services/product-visualization.jpg';
import boothDesignImg from '@/assets/services/booth-design.jpg';
import socialMediaImg from '@/assets/services/social-media.jpg';
import anamorphicImg from '@/assets/services/anamorphic.jpg';
import simulationsImg from '@/assets/services/simulations.jpg';
import archvizImg from '@/assets/services/archviz.jpg';
import microVizImg from '@/assets/services/micro-viz.jpg';
import vrEnvironmentsImg from '@/assets/services/vr-environments.jpg';
import cgiCompositingImg from '@/assets/services/cgi-compositing.jpg';
import scanningImg from '@/assets/services/3d-scanning.jpg';
import aiContentImg from '@/assets/services/ai-content.jpg';
import boothInteriorImg from '@/assets/services/booth-interior.jpg';
import anamorphic2Img from '@/assets/services/anamorphic-2.jpg';
import boothTechnicalImg from '@/assets/services/booth-technical.jpg';

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
    image: motionGraphicsImg,
    gallery: [motionGraphicsImg, productVizImg, socialMediaImg],
    year: '2024',
    client: 'TechCorp',
    tags: ['Animation', 'Branding', 'Typography'],
  },
  {
    id: '2',
    title: 'Luxury Product Campaign',
    category: 'Product Visualization',
    description: 'Cinematic product renders and animations for a premium fragrance launch — every reflection crafted to perfection.',
    image: productVizImg,
    gallery: [productVizImg, motionGraphicsImg, microVizImg],
    year: '2024',
    client: 'Luxe Co',
    tags: ['Product Viz', 'Animation', 'CGI'],
  },
  {
    id: '3',
    title: 'Exhibition Masterpiece',
    category: 'Booth Design',
    description: 'A 500m² exhibition booth designed for maximum brand impact — immersive, bold, and engineered to perfection.',
    image: boothDesignImg,
    gallery: [boothDesignImg, boothInteriorImg, boothTechnicalImg],
    year: '2024',
    client: 'ExpoGiant',
    tags: ['Exhibition', 'Interior Design', 'Branding'],
  },
  {
    id: '4',
    title: 'Social Media Takeover',
    category: 'Motion',
    description: 'Bold, scroll-stopping social content that drove 3x engagement for a regional fashion brand.',
    image: socialMediaImg,
    gallery: [socialMediaImg, motionGraphicsImg, aiContentImg],
    year: '2023',
    client: 'FashionBrand',
    tags: ['Social Media', 'Reels', 'Motion'],
  },
  {
    id: '5',
    title: 'Anamorphic City Takeover',
    category: 'CGI',
    description: 'A jaw-dropping anamorphic billboard experience that blurred the line between digital and physical reality.',
    image: anamorphicImg,
    gallery: [anamorphicImg, anamorphic2Img, cgiCompositingImg],
    year: '2024',
    client: 'MegaCorp',
    tags: ['Anamorphic', 'LED', 'OOH'],
  },
  {
    id: '6',
    title: 'Fire & Fluid FX Reel',
    category: 'CGI',
    description: 'A showcase simulation reel: fire, smoke, fluid, and particle systems that defy physical limitations.',
    image: simulationsImg,
    gallery: [simulationsImg, cgiCompositingImg, anamorphicImg],
    year: '2023',
    client: 'Internal',
    tags: ['VFX', 'Simulation', 'Houdini'],
  },
  {
    id: '7',
    title: 'Skyline Residences',
    category: 'Architecture',
    description: 'A full architectural visualization package for a premium residential development in New Cairo.',
    image: archvizImg,
    gallery: [archvizImg, vrEnvironmentsImg, boothInteriorImg],
    year: '2024',
    client: 'PropDev',
    tags: ['ArchViz', 'Interior', 'Exterior'],
  },
  {
    id: '8',
    title: 'Cellular Journey',
    category: 'Product Visualization',
    description: 'A medical visualization animating the human immune response at a microscopic level.',
    image: microVizImg,
    gallery: [microVizImg, productVizImg, scanningImg],
    year: '2023',
    client: 'MedTech',
    tags: ['Medical', 'Micro Viz', 'Education'],
  },
  {
    id: '9',
    title: 'Virtual Showroom VR',
    category: 'Architecture',
    description: 'An immersive VR showroom letting clients explore a luxury car collection in a virtual environment.',
    image: vrEnvironmentsImg,
    gallery: [vrEnvironmentsImg, archvizImg, cgiCompositingImg],
    year: '2024',
    client: 'AutoLux',
    tags: ['VR', 'Real-time', 'Interactive'],
  },
  {
    id: '10',
    title: 'CGI Desert Campaign',
    category: 'CGI',
    description: 'A live-action + CGI composite placing a product in a breathtaking desert landscape — seamless and cinematic.',
    image: cgiCompositingImg,
    gallery: [cgiCompositingImg, simulationsImg, anamorphicImg],
    year: '2024',
    client: 'BevCo',
    tags: ['Compositing', 'VFX', 'Live Action'],
  },
  {
    id: '11',
    title: 'Heritage Object Digitization',
    category: 'Product Visualization',
    description: 'High-precision 3D scanning and digital preservation of rare archaeological artifacts.',
    image: scanningImg,
    gallery: [scanningImg, microVizImg, productVizImg],
    year: '2023',
    client: 'Museum',
    tags: ['3D Scanning', 'Preservation', 'Digital'],
  },
  {
    id: '12',
    title: 'AI Fashion Editorial',
    category: 'AI Content',
    description: 'A fully AI-generated fashion editorial pushing boundaries between photography and generative art.',
    image: aiContentImg,
    gallery: [aiContentImg, socialMediaImg, motionGraphicsImg],
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
