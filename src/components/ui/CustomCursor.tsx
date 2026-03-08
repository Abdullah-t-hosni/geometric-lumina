import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if it's a touch device
    const checkTouch = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible && !isTouchDevice) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (!target) return;

      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(!!isClickable);

      const customText = target.closest('[data-cursor]')?.getAttribute('data-cursor');
      setCursorText(customText || '');
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible, isTouchDevice]);

  // Don't render on mobile/touch devices for better usability
  if (isTouchDevice) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[99999] pointer-events-none">
          {/* Main Ring */}
          <motion.div
            className="absolute top-0 left-0 w-10 h-10 rounded-full border border-neon-yellow mix-blend-difference"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: isPointer ? 1.5 : 1,
              opacity: isVisible ? 1 : 0,
              borderWidth: isPointer ? '1px' : '1px',
            }}
          >
             <AnimatePresence>
               {cursorText && (
                 <motion.span 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-ibm text-[7px] tracking-[0.3em] uppercase text-neon-yellow font-bold bg-background/80 px-2 py-1 rounded-sm backdrop-blur-md border border-neon-yellow/10"
                 >
                   {cursorText}
                 </motion.span>
               )}
             </AnimatePresence>
          </motion.div>

          {/* Center Dot */}
          <motion.div
            className="absolute top-0 left-0 w-1.5 h-1.5 bg-neon-yellow rounded-full shadow-[0_0_10px_rgba(204,255,0,0.8)]"
            style={{
              x: mouseX,
              y: mouseY,
              translateX: '-50%',
              translateY: '-50%',
            }}
            animate={{
              scale: isPointer ? 0.5 : 1,
            }}
          />

          {/* Cinematic Hud Trailing */}
          <motion.div
            className="absolute top-0 left-0 w-16 h-16 border-t border-l border-neon-yellow/20 rounded-tl-lg"
            style={{
              x: cursorX,
              y: cursorY,
              translateX: '-70%',
              translateY: '-70%',
            }}
            animate={{
              rotate: isPointer ? 90 : 0,
              opacity: isPointer ? 0.5 : 0,
              scale: isPointer ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </AnimatePresence>
  );
}
