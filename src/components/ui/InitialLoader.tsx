import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../Logo';
import { useState, useEffect } from 'react';

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the loader after the animation duration
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800); // Duration matches bar animation + small buffer

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.5, ease: "easeOut" }
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505] pointer-events-auto"
          style={{ willChange: "opacity" }}
        >
          <div className="relative flex flex-col items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ willChange: "transform, opacity" }}
            >
              <Logo className="scale-[1.5]" />
            </motion.div>

            {/* Progress bar with pure CSS/Motion animation - No state updates */}
            <div className="w-40 h-[1px] bg-white/5 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: [0.65, 0, 0.35, 1] }}
                className="absolute top-0 left-0 w-full h-full bg-neon-yellow"
                style={{ willChange: "transform" }}
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-[calc(100%+10px)] text-[8px] font-ibm tracking-[0.5em] text-white uppercase"
            >
              Initializing
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
