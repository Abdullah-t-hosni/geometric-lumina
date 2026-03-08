import { motion } from 'framer-motion';

export default function PageTransition() {
  // We want the panels to slide in from top to middle, cover, then slide out to bottom
  const nbPanels = 10;
  const panels = Array.from({ length: nbPanels }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] flex overflow-hidden">
      {panels.map((i) => (
        <motion.div
           key={i}
           className="relative flex-1 bg-neon-yellow"
           initial={{ y: "-100%" }}
           animate={{ 
             y: ["-100%", "0%", "110%"] 
           }}
           transition={{ 
             duration: 1.2,
             times: [0, 0.5, 1],
             ease: [0.76, 0, 0.24, 1],
             delay: i * 0.05 
           }}
        >
           {/* Decorative HUD Details */}
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: [0, 1, 1, 0] }}
             transition={{ duration: 1.2, times: [0, 0.4, 0.6, 1], delay: i * 0.05 }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
           >
              <span className="font-ibm text-[8px] tracking-[0.5em] uppercase text-background font-bold rotate-[90deg] block whitespace-nowrap">
                SEC_0{i+1} // LOADING
              </span>
           </motion.div>
        </motion.div>
      ))}

      {/* Center metadata reveal */}
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: [0, 1, 0] }}
         transition={{ duration: 0.6, times: [0, 0.5, 1], delay: 0.4 }}
         className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
      >
         <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-[1px] bg-background animate-pulse" />
            <span className="font-ibm text-[9px] tracking-[1.2em] uppercase text-background font-bold ml-4">Geometric</span>
            <div className="w-16 h-[1px] bg-background animate-pulse" />
         </div>
      </motion.div>
    </div>
  );
}
