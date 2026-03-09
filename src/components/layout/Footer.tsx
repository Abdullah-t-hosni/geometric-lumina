import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.02 5.24-.02 7.86 0 1.91-.37 3.84-1.55 5.39-1.27 1.72-3.4 2.69-5.5 2.71-2.73.06-5.41-1.54-6.64-3.97-1.29-2.5-.9-5.71 1.05-7.73 1.4-1.49 3.51-2.18 5.51-1.75.01 1.4-.01 2.8.01 4.2-.66-.19-1.4-.18-2.01.07-.84.34-1.47 1.11-1.64 2-.23.99.11 2.08.85 2.76.71.69 1.76.91 2.7.59 1.07-.35 1.83-1.41 1.95-2.52.05-1.07.03-2.15.03-3.23.01-4.48.01-8.97.01-13.45z"/>
  </svg>
);

const PinterestIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.411-5.97 1.411-5.97s-.361-.722-.361-1.79c0-1.677.973-2.93 2.185-2.93 1.031 0 1.53.774 1.53 1.701 0 1.037-.659 2.587-.998 4.026-.283 1.196.598 2.172 1.776 2.172 2.131 0 3.772-2.249 3.772-5.492 0-2.871-2.063-4.88-5.005-4.88-3.411 0-5.411 2.561-5.411 5.202 0 1.031.397 2.138.893 2.738.098.118.112.221.083.344-.092.38-.297 1.21-.337 1.378-.053.224-.176.27-.406.163-1.516-.706-2.463-2.921-2.463-4.704 0-3.829 2.784-7.344 8.019-7.344 4.211 0 7.485 2.999 7.485 7.015 0 4.181-2.635 7.545-6.29 7.545-1.229 0-2.384-.639-2.779-1.396l-.756 2.879c-.274 1.043-1.016 2.352-1.512 3.161 1.121.346 2.308.533 3.538.533 6.621 0 11.988-5.367 11.988-11.987C24.004 5.367 18.638 0 12.017 0z"/>
  </svg>
);

const serviceLinks = [
  { label: 'Motion Graphics', href: '/services/motion-graphics' },
  { label: 'Product Visualization', href: '/services/product-visualization' },
  { label: 'Booth & Exhibition', href: '/services/booth-exhibition-design' },
  { label: 'Anamorphic Screens', href: '/services/anamorphic-screens' },
  { label: 'Simulations', href: '/services/simulations' },
  { label: 'AI Content', href: '/services/ai-content-production' },
];

const pageLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Technology', href: '/technology' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Geometric Studio site footer" className="relative bg-background overflow-hidden pt-20 pb-12 z-10 border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-neon-yellow/[0.03] blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Cinematic CTA / Brand Message */}
        <div className="py-24 border-b border-white/5 flex flex-col items-center text-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
              <h2 className="font-ibm text-5xl md:text-8xl font-light text-white tracking-tighter uppercase leading-none">
                Let's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-white/40 glow-text-yellow px-4">Transform</span> Your Vision.
              </h2>
              <p className="font-ibm text-sm text-white/30 uppercase tracking-[0.4em] font-light">
                Engineering Cinematic Realities • Globally Managed
              </p>
              <div className="pt-8">
                 <Link to="/contact" className="inline-flex items-center gap-4 text-[11px] font-ibm tracking-[0.5em] text-white hover:text-neon-yellow transition-all duration-500 uppercase group">
                    Start A New Project
                    <span className="w-12 h-[1px] bg-white/20 group-hover:bg-neon-yellow group-hover:w-20 transition-all duration-500" />
                 </Link>
              </div>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 py-24">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block group" aria-label="Geometric Studio — Go to homepage">
               <div className="flex items-center gap-4">
                  <Logo className="h-10 md:h-12" />
                  <div className="flex flex-col">
                    <span className="font-ibm text-[10px] font-light text-white/20 tracking-[0.5em] uppercase">Visual_Node</span>
                    <span className="font-ibm text-[10px] font-light text-neon-yellow/40 tracking-[0.5em] uppercase italic">Studio_Protocol_2.1</span>
                  </div>
               </div>
            </Link>
            <p className="font-ibm text-xs text-white/30 leading-relaxed font-light max-w-xs pl-16">
              A creative laboratory specialized in high-end 3D visualization, motion design, and anamorphic displays. Precision engineering for the cinematic age.
            </p>
            <div className="flex flex-wrap gap-4 pl-16" aria-label="Social media links">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/geometric_studios' },
                { icon: Twitter, label: 'X (Twitter)', href: 'https://x.com/geometric_stud' },
                { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/geometric-studios' },
                { icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@geometric_studios' },
                { icon: PinterestIcon, label: 'Pinterest', href: 'https://pinterest.com/geometric_studios' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Geometric Studio on ${social.label}`}
                  className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 hover:border-neon-yellow/40 hover:text-neon-yellow transition-all duration-500 hover:bg-neon-yellow/5"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-12">
            <div>
               <div className="flex items-center gap-2 mb-8">
                  <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_5px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.4em] text-neon-yellow/40 uppercase">Navigation</span>
               </div>
               <ul className="space-y-4">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-xs text-white/30 font-ibm font-light hover:text-white transition-all duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
               <div className="flex items-center gap-2 mb-8">
                  <div className="w-1 h-1 rounded-full bg-white/20 shadow-[0_0_5px_rgba(255,255,255,0.2)]" />
                  <span className="text-[10px] font-ibm tracking-[0.4em] text-white/20 uppercase">Capabilities</span>
               </div>
               <ul className="space-y-4">
                {serviceLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-xs text-white/30 font-ibm font-light hover:text-white transition-all duration-300 italic">
                      • {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
               <div>
                  <span className="block text-[10px] font-ibm tracking-[0.4em] text-white/20 uppercase mb-8">Status</span>
                  <div className="space-y-4 text-xs font-ibm font-light text-white/40 italic">
                     <p className="pb-2 border-b border-white/[0.03]">
                       <span className="text-neon-yellow/40">•</span> Studio_Protocol: ACTIVE
                     </p>
                     <p className="pb-2 border-b border-white/[0.03]">
                       <span className="text-neon-yellow/40">•</span> Secure_Link: ESTABLISHED
                     </p>
                     <p className="pb-2 border-b border-white/[0.03]">
                       <span className="text-neon-yellow/40">•</span> Output_Node: GLOBAL
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-8">
              <span className="text-[9px] text-white/10 font-ibm tracking-[0.3em] uppercase">© {new Date().getFullYear()} Geometric studio</span>
              <span className="text-[9px] text-white/10 font-ibm tracking-[0.3em] uppercase hidden sm:block">CR_17195 • TAX_763211966</span>
           </div>
           
           <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-neon-yellow glow-yellow animate-pulse" />
              <span className="text-[10px] text-neon-yellow/60 font-ibm tracking-[0.5em] uppercase font-light italic">
                We Shape Realities_
              </span>
           </div>
        </div>
      </div>
    </footer>
  );
}
