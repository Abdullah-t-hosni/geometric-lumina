import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Instagram, Twitter, Linkedin, ArrowRight, ExternalLink, ShieldCheck, Activity } from 'lucide-react';

// ... (TikTok and Pinterest icons remain the same)

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
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Geometric Studio site footer" className="relative bg-background overflow-hidden pb-12 z-10">
      {/* Decorative Technical Borders */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[1px] left-0 w-full h-[400px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      {/* Premium Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-deep-teal/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-neon-yellow/[0.03] rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Cinematic Master CTA */}
        {!isContactPage && (
          <section className="pt-20 md:pt-24 xl:pt-32 pb-24 md:pb-32 xl:pb-48 border-b border-white/5 relative text-center">
            <SectionReveal>
              <div className="flex flex-col items-center group">
                 <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-[1px] bg-neon-yellow/30" />
                    <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/60">Creative Engine 2.5_OK</span>
                    <div className="w-8 h-[1px] bg-neon-yellow/30" />
                 </div>

                 <Link to="/contact" className="relative inline-block">
                    <h2 className="font-ibm text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white tracking-tighter leading-[0.85] uppercase transition-all duration-700 hover:tracking-tight cursor-pointer">
                      Let's Build <br />
                      <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-yellow to-white/20 glow-text-yellow px-4">The Future.</span>
                    </h2>
                    <div className="mt-16 flex items-center justify-center gap-6 group-hover:gap-10 transition-all duration-500">
                       <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-yellow group-hover:bg-neon-yellow group-hover:text-background transition-all duration-500">
                          <ArrowRight size={20} strokeWidth={1} />
                       </div>
                       <span className="text-[11px] font-ibm tracking-[0.5em] text-white/40 group-hover:text-neon-yellow uppercase transition-colors">Initiate Project Sequence</span>
                    </div>
                 </Link>
              </div>
            </SectionReveal>
          </section>
        )}

        {/* Main Links & Metadata Infrastructure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-16 lg:gap-20 py-20 md:py-32 border-b border-white/5">
          
          {/* Identity & Legal Node */}
          <div className="lg:col-span-5 space-y-12 text-left">
            <div>
              <Link to="/" className="inline-flex items-center gap-5 group">
                <Logo className="h-12 w-auto group-hover:rotate-12 transition-transform duration-700" />
                <div className="flex flex-col border-l border-white/10 pl-5 text-left">
                  <span className="font-ibm text-lg font-bold text-white tracking-widest uppercase">Geometric</span>
                  <span className="font-ibm text-[8px] text-neon-yellow tracking-[0.5em] uppercase opacity-60">Visual_Intelligence_Studio</span>
                </div>
              </Link>
              <p className="mt-8 font-ibm text-xs md:text-sm text-white/30 leading-relaxed font-light max-w-sm tracking-tight text-left">
                A high-precision creative laboratory engineering the next generation of 3D visualization, cinematic motion design, and high-impact digital experiences.
              </p>
            </div>

            {/* Verification Metadata */}
            <div className="flex flex-wrap gap-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5 w-fit">
               <div className="space-y-2">
                  <span className="block text-[7px] font-ibm text-white/20 uppercase tracking-widest flex items-center gap-2">
                     <ShieldCheck size={8} className="text-neon-yellow" /> Status: Certified
                  </span>
                  <span className="block font-ibm text-[9px] text-white/40 tracking-widest uppercase">CR. 17195_EG</span>
               </div>
               <div className="space-y-2">
                  <span className="block text-[7px] font-ibm text-white/20 uppercase tracking-widest flex items-center gap-2">
                     <Activity size={8} className="text-neon-yellow" /> System: Stable
                  </span>
                  <span className="block font-ibm text-[9px] text-white/40 tracking-widest uppercase">TAX. 763211966</span>
               </div>
            </div>

            {/* Enhanced Social Hub */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Instagram, label: 'IG', href: 'https://instagram.com/geometric_studios' },
                { icon: Twitter, label: 'X', href: 'https://x.com/geometric_stud' },
                { icon: Linkedin, label: 'IN', href: 'https://linkedin.com/company/geometric-studios' },
                { icon: TikTokIcon, label: 'TK', href: 'https://www.tiktok.com/@geometric_studios' },
                { icon: PinterestIcon, label: 'PT', href: 'https://pinterest.com/geometric_studios' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-white/5 flex items-center justify-center text-white/20 hover:border-neon-yellow/30 hover:text-neon-yellow hover:bg-neon-yellow/[0.03] transition-all duration-500 group/social"
                >
                  <social.icon size={18} strokeWidth={1.5} className="group-hover/social:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid Architecture */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 text-left">
            
            {/* Nav Node */}
            <div className="space-y-10">
               <h4 className="font-ibm text-[9px] tracking-[0.5em] text-white/20 uppercase flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-neon-yellow" /> Navigator.1.0
               </h4>
               <ul className="space-y-5 text-left">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="group flex items-center gap-3 text-[11px] text-white/40 font-ibm font-light hover:text-white transition-all">
                      <span className="w-0 h-px bg-neon-yellow group-hover:w-4 transition-all duration-500" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capability Node */}
            <div className="space-y-10">
               <h4 className="font-ibm text-[9px] tracking-[0.5em] text-white/20 uppercase flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-neon-yellow" /> Capacities.2.4
               </h4>
               <ul className="space-y-5 text-left">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="group flex items-center gap-3 text-[10px] text-white/30 font-ibm font-light hover:text-neon-yellow/80 transition-all uppercase tracking-wider">
                      <ExternalLink size={10} className="text-white/10 group-hover:text-neon-yellow transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location & Contact Node */}
            <div className="space-y-10">
               <h4 className="font-ibm text-[9px] tracking-[0.5em] text-white/20 uppercase flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-neon-yellow" /> Connection.Pnt
               </h4>
               <div className="space-y-8">
                  <div className="group text-left">
                     <span className="block text-[8px] text-white/10 uppercase tracking-widest mb-1 text-left uppercase">Direct_Sequence</span>
                     <div className="text-left">
                       <a href="mailto:contact@geometric-studios.com" className="font-ibm text-[11px] text-neon-yellow/60 underline underline-offset-4 hover:text-neon-yellow transition-colors">
                          contact@geometric-studios.com
                       </a>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom System Readout Bar */}
        <div className="pt-16 border-t border-white/5">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Zone: Rights & Credits */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="flex flex-col gap-1 items-center md:items-start">
                <span className="text-[10px] text-white/40 font-ibm tracking-[0.2em] uppercase font-medium">© {currentYear} GEOMETRIC STUDIO PROTOCOL</span>
                <span className="text-[8px] text-white/10 font-ibm tracking-[0.1em] uppercase">All rights reserved • Cinematic Intelligence Unit</span>
              </div>
              
            </div>

            {/* Middle Zone: Technical Huddeco (Purely Abstract) */}
            <div className="hidden lg:flex items-center gap-8 px-10 border-x border-white/5">
               <div className="flex flex-col gap-1">
                  <span className="text-[7px] text-white/10 uppercase tracking-[0.5em]">Network_Status</span>
                  <div className="flex items-center gap-3 text-[9px] text-white/20 font-ibm tracking-[0.2em]">
                     <span className="text-neon-yellow/40">ENC_025</span>
                     <div className="w-[1px] h-2 bg-white/5" />
                     <span>GLOBAL_NODE</span>
                  </div>
               </div>
               <div className="flex flex-col gap-1">
                  <span className="text-[7px] text-white/10 uppercase tracking-[0.5em]">Terminal_Ref</span>
                  <span className="text-[9px] text-neon-yellow/20 font-ibm tracking-[0.3em]">GEOM_SVR_01</span>
               </div>
            </div>

           {/* Right Zone: System Status */}
           <div className="flex items-center gap-8">
              <div className="flex flex-col items-center md:items-end gap-2">
                 <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.01]">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-yellow glow-yellow animate-pulse" />
                     <span className="text-[9px] text-neon-yellow/60 font-ibm tracking-[0.4em] uppercase font-light">System_Active</span>
                  </div>
                  <span className="text-[8px] text-white/10 font-ibm tracking-[0.2em] uppercase">Shaping Realities Since_2019</span>
               </div>
           </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
