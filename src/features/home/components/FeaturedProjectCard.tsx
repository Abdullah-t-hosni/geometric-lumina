import { useState } from 'react';
import { Link } from 'react-router-dom';
import { m , AnimatePresence  } from 'framer-motion';
import { Service } from '@/data/services';

interface FeaturedProjectCardProps {
  service: Service;
  index: number;
}

export function FeaturedProjectCard({ service, index }: FeaturedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <m.div
      className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] group motion-smooth"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        to={`/portfolio`} 
        className="block relative aspect-[16/9] rounded-[40px] overflow-hidden glass-panel p-2 transition-all duration-700 hover:p-3"
      >
        <div className="w-full h-full rounded-[32px] overflow-hidden relative">
          
          {/* Glitch-like image container */}
          <div className="absolute inset-0 overflow-hidden">
            <m.img
              src={service.heroImage}
              alt={service.name}
              loading="lazy"
              width={800}
              height={1000}
              animate={{ 
                scale: isHovered ? 1.02 : 1.1,
                x: isHovered ? [0, -2, 2, 0] : 0, // Micro glitch
              }}
              transition={{ 
                scale: { duration: 1.5, ease: "easeOut" },
                x: { duration: 0.2, repeat: isHovered ? Infinity : 0, repeatType: "mirror" }
              }}
              style={{ willChange: "transform, filter" }}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale-[0.8] group-hover:grayscale-0 transition-opacity duration-1000"
            />
          </div>
          
          {/* HUD Brackets - Responsive inset */}
          <div className="absolute inset-4 sm:inset-6 md:inset-8 pointer-events-none">
             <div className="absolute top-0 left-0 w-4 h-4 md:w-8 md:h-8 border-t border-l border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:-translate-x-1 md:group-hover:-translate-x-2 group-hover:-translate-y-1 md:group-hover:-translate-y-2" />
             <div className="absolute top-0 right-0 w-4 h-4 md:w-8 md:h-8 border-t border-r border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:-translate-y-1 md:group-hover:-translate-y-2" />
             <div className="absolute bottom-0 left-0 w-4 h-4 md:w-8 md:h-8 border-b border-l border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:-translate-x-1 md:group-hover:-translate-x-2 group-hover:translate-y-1 md:group-hover:translate-y-2" />
             <div className="absolute bottom-0 right-0 w-4 h-4 md:w-8 md:h-8 border-b border-r border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:translate-x-1 md:group-hover:translate-x-2 group-hover:translate-y-1 md:group-hover:translate-y-2" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          
          {/* Metadata corner */}
          <div className="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col items-end gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
             <div className="px-2 md:px-3 py-1 rounded-sm bg-background/95 border border-white/10 text-[6px] md:text-[7px] text-white font-ibm tracking-[0.2em] uppercase">Resolution: 8K_NATIVE</div>
             <div className="px-2 md:px-3 py-1 rounded-sm bg-background/95 border border-white/10 text-[6px] md:text-[7px] text-white font-ibm tracking-[0.2em] uppercase">Engine: RayTracing_MAX</div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-12 md:left-12 md:right-12">
            <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
               <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-neon-yellow text-background text-[7px] md:text-[8px] font-ibm font-bold tracking-[0.2em] uppercase">Featured</span>
               <span className="text-[8px] md:text-[10px] text-white/50 font-ibm tracking-[0.3em] uppercase">{service.category}</span>
            </div>
            
            <div className="flex items-end justify-between gap-4">
               <div className="max-w-xl">
                  <h3 className="font-ibm text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-light text-white tracking-tighter leading-tight md:leading-none mb-2 md:mb-4 uppercase group-hover:text-neon-yellow transition-colors duration-500">
                    {service.name}
                  </h3>
                  <div className={`h-[1px] bg-neon-yellow/30 transition-all duration-1000 ${isHovered ? 'w-full' : 'w-0'}`} />
               </div>
               
               <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border border-white/10 flex-shrink-0 flex items-center justify-center text-white transform rotate-[-45deg] group-hover:rotate-0 group-hover:border-neon-yellow group-hover:text-neon-yellow transition-all duration-700 overflow-hidden relative">
                  <m.span 
                    animate={isHovered ? { x: [0, 40, -40, 0] } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl"
                  >
                    →
                  </m.span>
               </div>
            </div>
          </div>
        </div>

        {/* Scanning Line */}
        <AnimatePresence>
          {isHovered && (
            <m.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-neon-yellow shadow-[0_0_15px_rgba(204,255,0,0.8)] z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </Link>
    </m.div>
  );
}
