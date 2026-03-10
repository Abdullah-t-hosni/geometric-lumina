import { 
  Play, 
  Box, 
  Layout, 
  Share2, 
  Expand, 
  Wind, 
  Home, 
  Focus, 
  Headset, 
  Layers, 
  Scan, 
  Cpu
} from 'lucide-react';

export const ServiceIcon = ({ slug, size = 24, className = "" }: { slug: string; size?: number; className?: string }) => {
  const icons: Record<string, any> = {
    'motion-graphics': Play,
    'product-visualization': Box,
    'booth-exhibition-design': Layout,
    'social-media-content': Share2,
    'anamorphic-screens': Expand,
    'simulations': Wind,
    'architectural-visualization': Home,
    'micro-visualization': Focus,
    'vr-environments': Headset,
    'cgi-compositing': Layers,
    '3d-scanning': Scan,
    'ai-content-production': Cpu,
  };
  const Icon = icons[slug] || Box;
  return <Icon size={size} strokeWidth={1.5} className={className} />;
};
