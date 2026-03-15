import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../Logo';
import { useState, useEffect } from 'react';

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-background pointer-events-auto"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-yellow/5 rounded-full blur-[100px]" />
          
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Logo className="scale-[1.8]" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-ibm text-[11px] md:text-[13px] tracking-[1em] uppercase text-white font-light">
                Geometric
              </span>
              <div className="w-12 h-[1px] bg-neon-yellow/30" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
