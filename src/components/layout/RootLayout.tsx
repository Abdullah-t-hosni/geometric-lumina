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
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
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

    return () => lenisRef.current?.destroy();
  }, []);

  // Update layout when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col font-satoshi selection:bg-neon-yellow selection:text-background">
      <CustomCursor />
      
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex-1"
        >
          <PageTransition key={`transition-${location.pathname}`} />
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
