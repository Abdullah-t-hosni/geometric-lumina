import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { services } from '@/data/services';

export function PortfolioHorizontalSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className={`relative bg-background ${isDesktop ? 'h-[300vh]' : 'py-20'}`}>
      <div className={`${isDesktop ? 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden' : 'px-6'}`}>
        <div className="mb-12 max-w-[1400px] mx-auto w-full">
           <SectionReveal>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-1.5 h-1.5 rounded-full bg-neon-yellow shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                       <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow">Showcase</span>
                    </div>
                    <h2 className="font-ibm text-5xl md:text-8xl font-light text-white tracking-tighter leading-[0.9] uppercase">
                       Selected <br />
                       <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Masterpieces.</span>
                    </h2>
                 </div>
                 
                 {isDesktop && (
                   <div className="hidden lg:block">
                      <div className="flex flex-col items-end gap-2 pr-10 border-r border-white/10">
                         <span className="text-[8px] font-ibm text-white/30 tracking-[0.5em] uppercase">Scroll Direction</span>
                         <div className="flex items-center gap-4">
                            <span className="text-[10px] font-ibm text-neon-yellow uppercase">Horizontal</span>
                            <div className="w-20 h-px bg-gradient-to-r from-neon-yellow to-transparent" />
                         </div>
                      </div>
                   </div>
                 )}
              </div>
           </SectionReveal>
        </div>

        {isDesktop ? (
          <motion.div style={{ x }} className="flex gap-8 px-6 lg:px-[10vw]">
            {services.slice(0, 5).map((service, i) => (
              <FeaturedProjectCard key={service.id} service={service} index={i} />
            ))}
            
            {/* Final CTA Card */}
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] flex items-center justify-center">
               <Link to="/portfolio" className="group flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-yellow/50 group-hover:bg-neon-yellow/5 transition-all duration-700">
                     <span className="text-3xl text-white transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                  </div>
                  <div className="text-center">
                     <div className="font-ibm text-[10px] tracking-[0.5em] uppercase text-white/30 mb-2">Portfolio</div>
                     <div className="font-ibm text-xl text-white uppercase tracking-widest group-hover:text-neon-yellow transition-colors">View All Works</div>
                  </div>
               </Link>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-12">
            {services.slice(0, 4).map((service, i) => (
              <FeaturedProjectCard key={service.id} service={service} index={i} />
            ))}
            <div className="py-12 flex justify-center">
              <Link to="/portfolio" className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-neon-yellow/30 flex items-center justify-center">
                   <span className="text-white">→</span>
                </div>
                <span className="font-ibm text-[10px] tracking-[0.4em] uppercase text-neon-yellow">View All Projects</span>
              </Link>
            </div>
          </div>
        )}

        {/* Technical Progress Bar - Desktop Only */}
        {isDesktop && (
          <div className="absolute bottom-12 left-[10vw] right-[10vw] h-px bg-white/5 hidden md:block">
             <motion.div 
               className="absolute top-0 left-0 h-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]"
               style={{ width: scrollYProgress }} 
             />
             <div className="absolute -top-6 left-0 font-ibm text-[7px] text-white/20 tracking-widest uppercase">System.Nav • Portfolio.01</div>
          </div>
        )}
      </div>
    </section>
  );
}
