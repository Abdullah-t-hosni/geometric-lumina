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
    <footer className="relative bg-background overflow-hidden pt-40 pb-16 z-10 border-t border-white/5">
      {/* Technical Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.02] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Massive Background Logo */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.02]">
          <h2 className="font-satoshi text-[22vw] font-black tracking-tighter uppercase leading-none text-white">
            Geometric
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 relative pt-20">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-12">
            <Link to="/" className="inline-flex flex-col gap-2 group">
              <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-full border border-neon-yellow/30 flex items-center justify-center group-hover:border-neon-yellow transition-all duration-500">
                    <div className="w-2 h-2 rounded-full bg-neon-yellow glow-yellow animate-pulse" />
                 </div>
                 <span className="font-satoshi text-3xl font-light text-white tracking-tighter uppercase">Geometric</span>
              </div>
              <span className="font-ibm text-[9px] tracking-[0.6em] text-white/20 uppercase pl-14">Studio_Protocol</span>
            </Link>

            <p className="font-ibm text-xs text-white/30 leading-relaxed font-light max-w-sm pl-14">
              Engineering cinematic 3D experiences that bridge the gap between imagination and physical reality. Cairo-based, globally focused.
            </p>

            <div className="flex gap-4 pl-14">
              {['Instagram', 'Behance', 'LinkedIn'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] text-[9px] text-white/40 font-ibm tracking-widest uppercase hover:bg-neon-yellow hover:text-background hover:border-neon-yellow transition-all duration-500"
                >
                  {social.substring(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-20">
            {/* Services */}
            <div className="space-y-10">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-ibm tracking-[0.5em] text-neon-yellow/40 uppercase">Capabilities</span>
                <div className="w-10 h-[1px] bg-white/10" />
              </div>
              <ul className="space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-[12px] text-white/30 font-ibm font-light hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                      // {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div className="space-y-10">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-ibm tracking-[0.5em] text-white/20 uppercase">Navigation</span>
                <div className="w-10 h-[1px] bg-white/10" />
              </div>
              <ul className="space-y-4">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-[12px] text-white/30 font-ibm font-light hover:text-neon-yellow hover:translate-x-1 inline-block transition-all duration-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-10 col-span-2 md:col-span-1">
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-ibm tracking-[0.5em] text-white/20 uppercase">Connect</span>
                <div className="w-10 h-[1px] bg-white/10" />
              </div>
              <div className="space-y-6">
                <div>
                  <span className="block text-[8px] text-white/10 uppercase tracking-widest mb-1">Direct_Mail</span>
                  <a href="mailto:geometric3dadv@gmail.com" className="text-xs text-white/40 hover:text-neon-yellow transition-colors font-ibm font-light">
                    geometric3dadv@gmail.com
                  </a>
                </div>
                <div>
                   <span className="block text-[8px] text-white/10 uppercase tracking-widest mb-1">HQ_Coordinates</span>
                   <p className="text-xs text-white/40 font-ibm font-light">Cairo, Egypt [30.0444° N, 31.2357° E]</p>
                </div>
                <div className="pt-4">
                   <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-yellow/20 bg-neon-yellow/[0.02]">
                      <div className="w-1 h-1 rounded-full bg-neon-yellow animate-ping" />
                      <span className="text-[8px] font-ibm tracking-[0.3em] text-neon-yellow uppercase">System_Active</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p className="text-[10px] text-white/20 font-ibm tracking-[0.3em] uppercase font-light">
              © {new Date().getFullYear()} Geometric Studio. All Rights Reserved.
            </p>
            <p className="text-[8px] text-white/10 font-ibm tracking-[0.2em] font-light">
              COM_REG: 17195 // TAX_ID: 763211966
            </p>
          </div>

          <div className="flex items-center gap-12">
            <div className="hidden md:flex flex-col items-end gap-1">
              <span className="text-[8px] text-white/10 uppercase tracking-widest">Execution_Model</span>
              <span className="text-[10px] text-white/40 font-ibm font-light uppercase tracking-[0.4em]">Precision_First</span>
            </div>
            <p className="text-[10px] text-neon-yellow/60 font-ibm tracking-[0.5em] uppercase font-light italic glow-text-yellow">
              We Shape Realities_
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
