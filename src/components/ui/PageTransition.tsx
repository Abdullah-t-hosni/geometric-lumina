import { motion } from 'framer-motion';
import { Logo } from '../Logo';

export default function PageTransition() {
  const nbPanels = 8; // Fewer panels for more impact
  const panels = Array.from({ length: nbPanels }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] flex overflow-hidden">
      {panels.map((i) => (
        <motion.div
           key={i}
           className="relative flex-1 bg-[#4CAf91]" /* Medium Sea Green background */
           initial={{ y: "-100%" }}
           animate={{ 
             y: ["-100%", "0%", "100%"] 
           }}
           transition={{ 
             duration: 0.8,
             times: [0, 0.45, 1],
             ease: [0.76, 0, 0.24, 1],
             delay: i * 0.04 
           }}
        >
           {/* Technical HUD Decoration */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: [0, 1, 1, 0] }}
             transition={{ duration: 0.8, times: [0, 0.4, 0.6, 1], delay: i * 0.06 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
           >
              <div className="flex flex-col items-center gap-4">
                 <span className="font-ibm text-[7px] tracking-[0.6em] uppercase text-background font-bold rotate-[90deg] block">
                   SYS_LINK // LOADING_{i+1}
                 </span>
                 <div className="w-px h-12 bg-background/20" />
              </div>
           </motion.div>
        </motion.div>
      ))}

      {/* Global Metadata Reveal - Logo & Slogan */}
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: [0, 1, 0], scale: [0.95, 1, 1.05] }}
         transition={{ duration: 0.8, times: [0, 0.5, 1], delay: 0.2 }}
         className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
         <div className="flex flex-col items-center gap-8">
            <div className="flex items-center gap-8 md:gap-12">
               <div className="w-8 md:w-16 h-px bg-background/20" />
               <Logo className="scale-125 md:scale-[1.5]" variant="dark" />
               <div className="w-8 md:w-16 h-px bg-background/20" />
            </div>
            <div className="flex flex-col items-center gap-2">
               <span className="font-ibm text-[10px] md:text-[12px] tracking-[0.8em] md:tracking-[1.2em] uppercase text-background font-bold">Geometric</span>
               <span className="font-ibm text-[7px] md:text-[8px] tracking-[0.4em] uppercase text-background/60 font-light">Precision in Imagination</span>
            </div>
         </div>
      </motion.div>
    </div>
  );
}
