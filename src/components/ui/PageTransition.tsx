import { motion } from 'framer-motion';

export default function PageTransition() {
  const nbPanels = 8; // Fewer panels for more impact
  const panels = Array.from({ length: nbPanels }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] flex overflow-hidden">
      {panels.map((i) => (
        <motion.div
           key={i}
           className="relative flex-1 bg-[#ccff00]" /* Direct CSS for performance */
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

      {/* Global Metadata Reveal */}
      <motion.div
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: [0, 1, 0], scale: [0.95, 1, 1.05] }}
         transition={{ duration: 0.8, times: [0, 0.5, 1], delay: 0.2 }}
         className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
         <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-12">
               <div className="w-12 h-px bg-background/30" />
               <span className="font-ibm text-[10px] tracking-[1.5em] uppercase text-background font-black">Geometric</span>
               <div className="w-12 h-px bg-background/30" />
            </div>
            <span className="font-ibm text-[8px] tracking-[0.4em] uppercase text-background/60 italic font-light">Precision in Imagination</span>
         </div>
      </motion.div>
    </div>
  );
}
