import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    <footer className="relative bg-background overflow-hidden pt-20 pb-12 z-10 border-t border-white/5">
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
              <h2 className="font-satoshi text-5xl md:text-8xl font-light text-white tracking-tighter uppercase leading-none">
                Let's <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-white/40 glow-text-yellow px-4">Transform</span> Your Vision.
              </h2>
              <p className="font-ibm text-sm text-white/30 uppercase tracking-[0.4em] font-light">
                Engineering Cinematic Realities // Globally Managed
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
            <Link to="/" className="inline-block group">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-yellow transition-all duration-500">
                     <div className="w-2 h-2 rounded-full bg-neon-yellow glow-yellow animate-pulse" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-satoshi text-2xl font-light text-white uppercase tracking-tighter">Geometric</span>
                    <span className="text-[8px] font-ibm text-white/20 tracking-[0.5em] uppercase">Studio_Protocol_2.0</span>
                  </div>
               </div>
            </Link>
            <p className="font-ibm text-xs text-white/30 leading-relaxed font-light max-w-xs pl-16">
              A creative laboratory specialized in high-end 3D visualization, motion design, and anamorphic displays. Precision engineering for the cinematic age.
            </p>
            <div className="flex gap-4 pl-16">
              {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-[9px] text-white/20 font-ibm hover:border-neon-yellow/40 hover:text-neon-yellow transition-all duration-500"
                >
                  {social.substring(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-12">
            <div>
               <span className="block text-[10px] font-ibm tracking-[0.4em] text-neon-yellow/40 uppercase mb-8">Navigation</span>
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
               <span className="block text-[10px] font-ibm tracking-[0.4em] text-white/20 uppercase mb-8">Capabilities</span>
               <ul className="space-y-4">
                {serviceLinks.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-xs text-white/30 font-ibm font-light hover:text-white transition-all duration-300 italic">
                      // {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
               <div>
                  <span className="block text-[10px] font-ibm tracking-[0.4em] text-white/20 uppercase mb-8">Terminal</span>
                  <div className="space-y-4 text-xs font-ibm font-light text-white/40">
                     <p className="flex justify-between border-b border-white/[0.03] pb-2">
                        <span>LAT:</span>
                        <span className="text-white/20">30.0444° N</span>
                     </p>
                     <p className="flex justify-between border-b border-white/[0.03] pb-2">
                        <span>LNG:</span>
                        <span className="text-white/20">31.2357° E</span>
                     </p>
                     <p className="flex justify-between border-b border-white/[0.03] pb-2">
                        <span>GMT:</span>
                        <span className="text-white/20">+02:00</span>
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-8">
              <span className="text-[9px] text-white/10 font-ibm tracking-[0.3em] uppercase">© {new Date().getFullYear()} GEOMETRIC studio</span>
              <span className="text-[9px] text-white/10 font-ibm tracking-[0.3em] uppercase hidden sm:block">CR_17195 // TAX_763211966</span>
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
