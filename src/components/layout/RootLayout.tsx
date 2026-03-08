import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '../ui/CustomCursor';
import PageTransition from '../ui/PageTransition';

export default function RootLayout() {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    // Premium Initial Loading Sequence
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
    }, 2800);

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenisRef.current?.destroy();
    };
  }, []);

  // Sync scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col font-satoshi selection:bg-neon-yellow selection:text-background">
      <AnimatePresence>
        {isInitialLoading && <InitialStartupLoader />}
      </AnimatePresence>

      <CustomCursor />
      <Header />
      
      {/* Global Transition Overlay - Skip on initial load to avoid collision */}
      {!isInitialLoading && <PageTransition key={`transition-${location.pathname}`} />}

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 0.4, delay: 0.4 }, // Delay entry to wait for strips
          }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

function InitialStartupLoader() {
  const steps = ["Initializing Systems", "Loading Neural Assets", "Calibrating Geometry", "Establishing Uplink"];
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100000] bg-background flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background HUD elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
         <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
         <div className="absolute top-0 left-1/2 w-px h-full bg-white/5" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] border border-white/5 rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-12">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="text-[10px] font-ibm tracking-[1em] uppercase text-white/30 mb-8">Geometric // Studio</div>
          <div className="relative">
             <div className="w-16 h-16 border-2 border-neon-yellow/20 rounded-full animate-pulse" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-neon-yellow rounded-full blur-[15px] animate-pulse" />
             </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center gap-2">
           <div className="flex gap-1 h-1 w-48 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="h-full bg-neon-yellow shadow-[0_0_15px_rgba(204,255,0,0.5)]" 
              />
           </div>
           <div className="h-4 overflow-hidden">
             <AnimatePresence mode="wait">
               <motion.span 
                 key={activeStep}
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -20, opacity: 0 }}
                 className="block font-ibm text-[8px] tracking-[0.4em] uppercase text-neon-yellow/60"
               >
                 {steps[activeStep]}
               </motion.span>
             </AnimatePresence>
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-12 flex flex-col gap-2">
         <div className="font-ibm text-[6px] text-white/10 tracking-widest uppercase">System_v.4.0.2</div>
         <div className="font-ibm text-[6px] text-white/10 tracking-widest uppercase">Encryption: Active</div>
      </div>
    </motion.div>
  );
}
