import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { services } from '@/data/services';

export default function Services() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-12 overflow-hidden relative">
      {/* Premium Ambient Glows */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-deep-teal/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-neon-yellow/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-sky-blue/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      {/* Header */}
      <section className="px-6 relative pb-32 pt-20 z-10 overflow-hidden">
        {/* Technical background elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center relative">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Geometric Disciplines</span>
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
              </div>
              
              <h1 className="font-satoshi text-6xl md:text-8xl lg:text-[130px] font-light text-white leading-[0.85] tracking-tighter mb-12">
                Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4">Expertise.</span>
              </h1>

              <p className="font-ibm text-creamy-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed border-t border-white/10 pt-12">
                Engineering visual impact through a fusion of high-end cinematic arts and technical geometric precision.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-6 relative z-10 w-full mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Final CTA */}
      <section className="py-52 px-6 text-center relative bg-background overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-yellow/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <SectionReveal>
          <h2 className="font-satoshi text-6xl md:text-8xl lg:text-[140px] font-light text-white mb-16 tracking-tighter leading-[0.85]">
            Let's Shape <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4">The Future.</span>
          </h2>
          <Link to="/contact" className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden rounded-full transition-all duration-500">
            <div className="absolute inset-0 bg-neon-yellow group-hover:scale-105 transition-transform duration-500" />
            <span className="relative z-10 font-ibm font-medium text-[12px] tracking-[0.5em] uppercase text-background">
              Start The Conversation
            </span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block h-full rounded-[32px] border border-white/5 hover:border-white/20 transition-all duration-700 relative overflow-hidden bg-background/40 backdrop-blur-sm shadow-2xl"
      >
        {/* Background Image with reveal effect */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={service.heroImage}
            alt={service.name}
            initial={{ scale: 1.1, filter: 'grayscale(1) brightness(0.2)' }}
            animate={{ 
              scale: isHovered ? 1.05 : 1.1,
              filter: isHovered ? 'grayscale(0.4) brightness(0.4)' : 'grayscale(1) brightness(0.2)',
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
          {/* Color Overlay */}
          <div 
            className={`absolute inset-0 opacity-40 mix-blend-overlay transition-colors duration-700 ${
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

        {/* Scanning Line on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-neon-yellow/30 shadow-[0_0_15px_rgba(204,255,0,0.5)] z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>

        <div className="relative z-10 p-10 h-full flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div className="flex flex-col gap-1">
              <div className="px-4 py-1.5 rounded-full border border-white/10 bg-background/80 backdrop-blur-md text-[10px] font-ibm tracking-[0.4em] text-white/40 uppercase">
                DISCIPLINE.00{index + 1}
              </div>
              <div className={`h-[1px] bg-current transition-all duration-700 ${isHovered ? 'w-full' : 'w-4'} ${
                service.color === 'neon-yellow' ? 'text-neon-yellow' : 'text-white/20'
              }`} />
            </div>
            
            <motion.div 
              animate={{ rotate: isHovered ? 90 : 0 }}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-xl transition-all duration-500 ${isHovered ? 'border-neon-yellow/50 text-neon-yellow bg-neon-yellow/5' : 'text-white/20'}`}
            >
              <span className="italic">{service.icon}</span>
            </motion.div>
          </div>
          
          <div className="mt-auto space-y-4">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full transition-all duration-500 ${isHovered ? 'bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.8)]' : 'bg-white/10'}`} />
              <span className="font-ibm text-[8px] tracking-[0.3em] uppercase text-white/30">{service.category}</span>
            </div>
            
            <h3 className="font-satoshi font-light text-3xl md:text-4xl text-white tracking-tight group-hover:text-neon-yellow transition-colors duration-500 uppercase leading-none">
              {service.name}
            </h3>
            
            <p className="font-ibm text-sm font-light text-white/40 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
              {service.tagline}
            </p>
            
            <div className="flex items-center gap-6 pt-6">
              <div className={`h-[1px] transition-all duration-500 ${isHovered ? 'w-16 bg-neon-yellow' : 'w-8 bg-white/10'}`} />
              <span className={`font-ibm text-[9px] tracking-[0.5em] uppercase transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/30'}`}>
                Engage Discipline
              </span>
            </div>
          </div>
        </div>

        {/* HUD Elements corner decoration */}
        <div className="absolute -bottom-2 -right-2 w-16 h-16 pointer-events-none opacity-20">
           <div className="absolute bottom-6 right-6 w-1 h-8 bg-white/40" />
           <div className="absolute bottom-6 right-6 w-8 h-1 bg-white/40" />
        </div>
      </Link>
    </motion.div>
  );
}
