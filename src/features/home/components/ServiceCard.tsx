import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { m , AnimatePresence, useInView  } from 'framer-motion';
import { Service } from '@/data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
  className?: string;
}

export function ServiceCard({ service, index, className }: ServiceCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/services/${service.slug}`}
        onMouseEnter={() => import('@/features/services/ServiceDetail')}
        className="group block h-full rounded-[32px] border border-white/5 hover:border-white/20 transition-colors duration-700 relative overflow-hidden bg-background/80 transform-gpu"
      >
        {/* Background Image with reveal effect */}
        <div className="absolute inset-0 z-0">
          <m.img
            src={service.heroImage}
            alt={service.name}
            loading="lazy"
            width={800}
            height={1000}
            initial={{ scale: 1.1 }}
            animate={{ 
              scale: isHovered ? 1.05 : 1.1,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ willChange: "transform" }}
            className="w-full h-full object-cover grayscale brightness-[0.3] transform-gpu"
          />
          {/* Performant Filter Overlay (replaces expensive CSS filter property) */}
          <div 
            className={`absolute inset-0 transition-opacity duration-700 bg-background/40 ${
              isHovered ? 'opacity-20' : 'opacity-60'
            }`}
          />
          {/* Color Overlay */}
          <div 
            className={`absolute inset-0 opacity-20 transition-colors duration-700 transform-gpu ${
              service.color === 'neon-yellow' ? 'bg-neon-yellow' :
              service.color === 'sky-blue' ? 'bg-sky-blue' :
              service.color === 'coral-red' ? 'bg-coral-red' :
              service.color === 'deep-teal' ? 'bg-deep-teal' :
              service.color === 'sea-green' ? 'bg-sea-green' :
              'bg-white'
            }`} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-6 sm:p-8 md:p-10 flex flex-col text-left">
          <div className="flex justify-between items-start mb-auto">
             <div className="flex flex-col gap-1 items-start">
                <div className={`h-[1px] bg-current transition-all duration-700 ${isHovered ? 'w-full' : 'w-4'} ${
                  service.color === 'neon-yellow' ? 'text-neon-yellow' : 'text-white/20'
                }`} />
             </div>
             
             <m.div 
               animate={{ rotate: isHovered ? 90 : 0 }}
               className={`w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center transition-colors duration-500 ${isHovered ? 'border-neon-yellow/50 text-neon-yellow bg-neon-yellow/5' : 'text-white/20'}`}
             >
                <service.icon size={18} strokeWidth={1.5} />
             </m.div>
          </div>
          
          <div className="space-y-3 md:space-y-4 text-left">
            <h3 className="font-ibm font-light text-xl xs:text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-tight group-hover:text-neon-yellow transition-colors duration-500 uppercase">
              {service.name}
            </h3>
            
            <p className="font-ibm text-[10px] md:text-xs lg:text-sm font-light text-white/40 leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-700">
              {service.tagline}
            </p>

            <div className="flex items-center justify-start gap-4 pt-4">
              <div className={`w-8 h-[1px] transition-all duration-500 group-hover:w-16 ${isHovered ? 'bg-neon-yellow' : 'bg-white/10'}`} />
              <span className={`font-ibm text-[8px] md:text-[9px] tracking-[0.4em] font-light uppercase transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/30'}`}>View Details</span>
            </div>
          </div>
        </div>

        {/* Scanning Line on hover */}
        <AnimatePresence>
          {isHovered && (
            <m.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ willChange: "top" }}
              className="absolute left-0 right-0 h-[1px] bg-neon-yellow/30 shadow-[0_0_15px_rgba(204,255,0,0.5)] z-20 pointer-events-none transform-gpu"
            />
          )}
        </AnimatePresence>

        {/* HUD Elements */}
        {index === 0 && (
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/5 hidden lg:flex lg:items-center lg:justify-center pointer-events-none">
            <div className="w-24 h-24 rounded-full border border-neon-yellow/5 animate-spin-slow flex items-center justify-center border-dashed">
              <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-1 h-1 bg-neon-yellow rounded-full shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[110%] h-[1px] bg-white/[0.03] rotate-45" />
              <div className="w-[110%] h-[1px] bg-white/[0.03] -rotate-45" />
            </div>
          </div>
        )}
      </Link>
    </m.div>
  );
}
