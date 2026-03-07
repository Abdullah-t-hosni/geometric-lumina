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
  icon: string;
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
    image: img1,
    heroImage: img13,
    icon: '▶',
  },
  {
    id: '2',
    slug: 'product-visualization',
    name: 'Product Visualization & Animation',
    tagline: 'Every product deserves a cinematic spotlight.',
    description: "Whether your product is still in concept or already on shelves, it deserves a cinematic spotlight. Every reflection, texture, and movement is designed to make it look irresistible on screen.",
    deliverables: ['360° product renders', 'Exploded views', 'Material animations', 'Packaging visualization', 'Commercial-ready shots', 'Lifestyle compositions'],
    category: 'Product Visualization',
    color: 'neon-yellow',
    image: img2,
    heroImage: img14,
    icon: '◈',
  },
  {
    id: '3',
    slug: 'booth-exhibition-design',
    name: 'Booth & Exhibition Design',
    tagline: 'Every booth we create is an experience.',
    description: "Every booth we create is more than a space — it's an experience. We design environments that attract attention, tell stories and connect brands with their audience through form, light, and motion. From structure to detail, every element is crafted to reflect identity, enhance interaction and leave a lasting impression.",
    deliverables: ['Interior design concepts', 'Exterior design renders', 'Technical drawings', 'Structural planning', 'Lighting design', 'Material specifications'],
    category: 'Booth Design',
    color: 'coral-red',
    image: img3,
    heroImage: img15,
    icon: '⬡',
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
    image: img4,
    heroImage: img16,
    icon: '◉',
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
    image: img5,
    heroImage: img17,
    icon: '◧',
  },
  {
    id: '6',
    slug: 'simulations',
    name: 'Simulations',
    tagline: 'Chaos has its own rhythm. We bend the rules of reality.',
    description: "Chaos has its own rhythm. Fire burns, smoke dances, fluids collide — and even wires can move like clouds. We bend the rules of reality, shaping the impossible into motion.",
    deliverables: ['Fire & smoke simulations', 'Fluid dynamics', 'Cloth & soft body', 'Particle systems', 'Destruction effects', 'Environmental FX'],
    category: 'CGI',
    color: 'coral-red',
    image: img6,
    heroImage: img18,
    icon: '◌',
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
    image: img7,
    heroImage: servicesImg,
    icon: '⬚',
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
    image: img8,
    heroImage: img2,
    icon: '⬤',
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
    image: img9,
    heroImage: img3,
    icon: '⬣',
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
    image: img10,
    heroImage: img4,
    icon: '⬟',
  },
  {
    id: '11',
    slug: '3d-scanning',
    name: '3D Scanning',
    tagline: 'Every curve, every imperfection captured perfectly.',
    description: "Every curve, every imperfection captured perfectly. 3D scanning bridges the physical and digital, turning real objects into detailed assets ready for visualization, animation, or preservation.",
    deliverables: ['High-res 3D scans', 'Mesh cleanup', 'Texture mapping', 'Heritage preservation', 'Product digitization', 'CAD-ready models'],
    category: 'Product Visualization',
    color: 'coral-red',
    image: img11,
    heroImage: img5,
    icon: '◍',
  },
  {
    id: '12',
    slug: 'ai-content-production',
    name: 'AI Content Production',
    tagline: 'AI tools integrated into our pipeline.',
    description: "AI tools are integrated into our pipeline to speed up workflows, refine details and enhance visuals without compromising quality or craftsmanship. We also offer a dedicated section for fully AI-generated content, exploring bold new directions in motion and design.",
    deliverables: ['AI-generated imagery', 'AI video production', 'Prompt engineering', 'Style transfer', 'AI-enhanced compositing', 'Generative design assets'],
    category: 'AI Content',
    color: 'neon-yellow',
    image: img12,
    heroImage: img6,
    icon: '◎',
  },
];

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug);
