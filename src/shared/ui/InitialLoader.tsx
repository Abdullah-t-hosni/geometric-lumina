import { m, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

export function InitialLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#050505] pointer-events-none"
          style={{ willChange: "opacity, transform" }}
        >
          <div className="relative flex flex-col items-center gap-12">
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Logo className="scale-[1.5]" />
            </m.div>

            {/* Progress bar with pure CSS infinite animation */}
            <div className="w-40 h-[1px] bg-white/5 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-neon-yellow"
                style={{
                  width: '100%',
                  transform: 'translateX(-100%)',
                  animation: 'shimmer-move 1.2s cubic-bezier(0.65, 0, 0.35, 1) infinite',
                }}
              />
            </div>

            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-[calc(100%+10px)] text-[8px] font-ibm tracking-[0.5em] text-white uppercase"
            >
              Initializing
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
