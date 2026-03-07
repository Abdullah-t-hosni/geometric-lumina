import img1 from '@/assets/images/1.jpg';
import img2 from '@/assets/images/2.jpeg';
import img3 from '@/assets/images/3.jpeg';
import img4 from '@/assets/images/4.jpeg';
import img5 from '@/assets/images/5.jpeg';
import img6 from '@/assets/images/6.jpeg';
import img7 from '@/assets/images/7.jpeg';
import img8 from '@/assets/images/8.jpeg';
import img9 from '@/assets/images/9.jpeg';
import img10 from '@/assets/images/10.jpeg';
import img11 from '@/assets/images/11.jpeg';
import img12 from '@/assets/images/12.jpeg';
import img13 from '@/assets/images/13.jpeg';
import img14 from '@/assets/images/14.jpeg';
import img15 from '@/assets/images/15.jpeg';
import img16 from '@/assets/images/16.jpeg';
import img17 from '@/assets/images/17.jpeg';
import img18 from '@/assets/images/18.jpeg';
import servicesImg from '@/assets/images/Services.jpeg';

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
    image: img1,
    gallery: [img1, img2, img4],
    year: '2024',
    client: 'TechCorp',
    tags: ['Animation', 'Branding', 'Typography'],
  },
  {
    id: '2',
    title: 'Luxury Product Campaign',
    category: 'Product Visualization',
    description: 'Cinematic product renders and animations for a premium fragrance launch — every reflection crafted to perfection.',
    image: img2,
    gallery: [img2, img1, img8],
    year: '2024',
    client: 'Luxe Co',
    tags: ['Product Viz', 'Animation', 'CGI'],
  },
  {
    id: '3',
    title: 'Exhibition Masterpiece',
    category: 'Booth Design',
    description: 'A 500m² exhibition booth designed for maximum brand impact — immersive, bold, and engineered to perfection.',
    image: img3,
    gallery: [img3, img13, img15],
    year: '2024',
    client: 'ExpoGiant',
    tags: ['Exhibition', 'Interior Design', 'Branding'],
  },
  {
    id: '4',
    title: 'Social Media Takeover',
    category: 'Motion',
    description: 'Bold, scroll-stopping social content that drove 3x engagement for a regional fashion brand.',
    image: img4,
    gallery: [img4, img1, img12],
    year: '2023',
    client: 'FashionBrand',
    tags: ['Social Media', 'Reels', 'Motion'],
  },
  {
    id: '5',
    title: 'Anamorphic City Takeover',
    category: 'CGI',
    description: 'A jaw-dropping anamorphic billboard experience that blurred the line between digital and physical reality.',
    image: img5,
    gallery: [img5, img14, img10],
    year: '2024',
    client: 'MegaCorp',
    tags: ['Anamorphic', 'LED', 'OOH'],
  },
  {
    id: '6',
    title: 'Fire & Fluid FX Reel',
    category: 'CGI',
    description: 'A showcase simulation reel: fire, smoke, fluid, and particle systems that defy physical limitations.',
    image: img6,
    gallery: [img6, img10, img5],
    year: '2023',
    client: 'Internal',
    tags: ['VFX', 'Simulation', 'Houdini'],
  },
  {
    id: '7',
    title: 'Skyline Residences',
    category: 'Architecture',
    description: 'A full architectural visualization package for a premium residential development in New Cairo.',
    image: img7,
    gallery: [img7, img9, img13],
    year: '2024',
    client: 'PropDev',
    tags: ['ArchViz', 'Interior', 'Exterior'],
  },
  {
    id: '8',
    title: 'Cellular Journey',
    category: 'Product Visualization',
    description: 'A medical visualization animating the human immune response at a microscopic level.',
    image: img8,
    gallery: [img8, img2, img11],
    year: '2023',
    client: 'MedTech',
    tags: ['Medical', 'Micro Viz', 'Education'],
  },
  {
    id: '9',
    title: 'Virtual Showroom VR',
    category: 'Architecture',
    description: 'An immersive VR showroom letting clients explore a luxury car collection in a virtual environment.',
    image: img9,
    gallery: [img9, img7, img10],
    year: '2024',
    client: 'AutoLux',
    tags: ['VR', 'Real-time', 'Interactive'],
  },
  {
    id: '10',
    title: 'CGI Desert Campaign',
    category: 'CGI',
    description: 'A live-action + CGI composite placing a product in a breathtaking desert landscape — seamless and cinematic.',
    image: img10,
    gallery: [img10, img6, img5],
    year: '2024',
    client: 'BevCo',
    tags: ['Compositing', 'VFX', 'Live Action'],
  },
  {
    id: '11',
    title: 'Heritage Object Digitization',
    category: 'Product Visualization',
    description: 'High-precision 3D scanning and digital preservation of rare archaeological artifacts.',
    image: img11,
    gallery: [img11, img8, img2],
    year: '2023',
    client: 'Museum',
    tags: ['3D Scanning', 'Preservation', 'Digital'],
  },
  {
    id: '12',
    title: 'AI Fashion Editorial',
    category: 'AI Content',
    description: 'A fully AI-generated fashion editorial pushing boundaries between photography and generative art.',
    image: img12,
    gallery: [img12, img4, img1],
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
