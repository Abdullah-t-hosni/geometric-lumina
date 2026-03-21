import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { m } from 'framer-motion';
import { SEO } from "@/shared/seo/SEO";
import { SectionReveal } from '@/shared/ui/SectionReveal';
import { ArrowLeft, AlertTriangle, ShieldAlert, Cpu } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 404 Logging
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [location.pathname]);

  return (
    <m.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex min-h-screen bg-background p-6 relative overflow-hidden selection:bg-neon-yellow selection:text-background font-ibm"
    >
      <SEO title="404 — System Out of Bounds" noIndex={true} />
      
      {/* Premium Technical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]" />
      </div>

      {/* Dynamic Ambient Glows */}
      <m.div 
        animate={{ 
          x: mousePos.x * 2, 
          y: mousePos.y * 2 
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-neon-yellow/5 rounded-full blur-[180px] transform-gpu pointer-events-none z-0" 
      />
      
      {/* HUD Header Status */}
      <div className="absolute top-24 left-12 flex items-center gap-6 opacity-40 hidden md:flex z-20">
         <div className="flex flex-col gap-1">
            <div className="text-[8px] tracking-[0.6em] text-white/40 uppercase">System_State</div>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-coral-red shadow-[0_0_10px_rgba(255,51,102,0.5)] animate-pulse" />
               <span className="text-[10px] tracking-[0.2em] text-white">EXTERNAL_VOID_04</span>
            </div>
         </div>
         <div className="w-px h-8 bg-white/10" />
         <div className="flex flex-col gap-1">
            <div className="text-[8px] tracking-[0.6em] text-white/40 uppercase">Data_Node</div>
            <span className="text-[10px] tracking-[0.2em] text-neon-yellow/60">UNRESOLVED_REF</span>
         </div>
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10 pt-32 md:pt-48 flex flex-col items-center">
        
        {/* Main Glass Frame */}
        <SectionReveal>
          <div className="relative group max-w-2xl w-full mx-auto">
            {/* Corner Accents */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-neon-yellow opacity-40 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-neon-yellow opacity-40 group-hover:scale-110 transition-transform duration-700" />
            
            <div className="glass-panel p-10 md:p-16 rounded-[35px] border-white/5 bg-background/90 flex flex-col items-center transition-colors duration-700 hover:bg-background shadow-2xl relative overflow-hidden transform-gpu">
              
              {/* Scanline Effect Inside Card */}
              <m.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-white/10 z-0 pointer-events-none"
              />

              {/* Icon / Status */}
              <m.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="mb-10 relative z-10"
              >
                  <div className="absolute inset-0 bg-neon-yellow/10 blur-2xl rounded-full" />
                  <div className="relative w-20 h-20 rounded-full border border-neon-yellow/20 flex items-center justify-center bg-background">
                     <ShieldAlert size={28} className="text-neon-yellow/60" strokeWidth={1} />
                  </div>
              </m.div>

              {/* Sophisticated 404 Typography */}
              <div className="relative mb-8 overflow-hidden z-10">
                <h1 className="text-[15vw] md:text-[140px] font-ibm font-extralight tracking-tighter leading-none text-white italic">
                  4<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-white/20">0</span>4
                </h1>
              </div>

              <div className="text-center space-y-6 max-w-md z-10">
                 <h2 className="text-xl md:text-2xl font-ibm font-light text-white tracking-tight uppercase">
                    Protocol <span className="text-neon-yellow italic font-medium">BEYOND_LIMITS</span>
                 </h2>
                 <p className="text-white/30 font-ibm font-light text-[11px] md:text-xs leading-relaxed uppercase tracking-[0.3em] border-t border-white/5 pt-8">
                    Coordinates <span className="text-white/60">{location.pathname}</span> <br/>
                    unreachable within current system matrix.
                 </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-5 mt-12 w-full sm:w-auto z-10">
                 <Link 
                   to="/" 
                   className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-4 bg-white text-background rounded-full font-bold text-[9px] tracking-[0.4em] uppercase hover:bg-neon-yellow transition-all duration-500 group"
                 >
                   <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                   Return_Home
                 </Link>
                 
                 <Link 
                   to="/contact" 
                   className="w-full sm:w-auto flex items-center justify-center gap-4 px-10 py-4 border border-white/10 text-white/40 rounded-full font-bold text-[9px] tracking-[0.4em] uppercase hover:bg-white/5 hover:text-white transition-all duration-500"
                 >
                   Inquiry_Portal
                 </Link>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* HUD Sub-Readout */}
        <div className="mt-20 flex flex-col items-center gap-5 opacity-20 hover:opacity-100 transition-opacity duration-700">
           <div className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                 <Cpu size={12} className="text-neon-yellow" />
                 <span className="text-[7px] tracking-[0.4em] uppercase">Ref: GS_404_VOID</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-3">
                 <AlertTriangle size={12} className="text-neon-yellow" />
                 <span className="text-[7px] tracking-[0.4em] uppercase">Gap: UNRESOLVED</span>
              </div>
           </div>
           
           <div className="w-40 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
           <span className="text-[6px] tracking-[0.6em] text-white/40 uppercase">Geometric Infrastructure v.2.5.0</span>
        </div>
      </div>
      
      {/* Background Frame Deco */}
      <div className="absolute bottom-12 right-12 text-right opacity-5 hidden lg:block">
         <div className="text-[8px] tracking-[1em] text-white uppercase italic">Search_Sequence_Failure</div>
      </div>
    </m.div>
  );
};

export default NotFound;
