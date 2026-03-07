import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { services } from '@/data/services';

export default function Services() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-12 overflow-hidden relative">
      {/* Premium Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block h-full glass-panel p-2 rounded-[32px] hover:border-white/20 transition-all duration-700 relative overflow-hidden"
      >
        <div className="bg-white/[0.02] rounded-[24px] overflow-hidden p-8 h-full flex flex-col group-hover:bg-white/[0.04] transition-colors duration-700">
          <div className="flex justify-between items-start mb-8">
            <div className="px-4 py-1.5 rounded-full border border-white/5 bg-background/50 text-[10px] font-ibm tracking-[0.4em] text-white/40 uppercase">
              ID.00{index + 1}
            </div>
            <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-neon-yellow/30 transition-all">
              <span className="text-white/20 group-hover:text-neon-yellow transition-colors italic">S</span>
            </div>
          </div>
          
          <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden glass-panel p-1 mb-10 relative">
             <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src={service.heroImage}
                  alt={service.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[1.5s] ease-out scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 font-ibm text-[8px] tracking-[0.3em] uppercase text-white/50">{service.category}</div>
             </div>
          </div>

          <h3 className="font-satoshi font-light text-3xl md:text-3xl text-white tracking-tight mb-4 group-hover:text-neon-yellow transition-colors duration-500 uppercase">
            {service.name}
          </h3>
          
          <p className="font-ibm text-sm font-light text-white/40 leading-relaxed mb-12 flex-grow group-hover:text-white/60 transition-colors duration-500">
            {service.tagline}
          </p>
          
          <div className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-500 mt-auto">
            <div className="w-10 h-[1px] bg-white/10 group-hover:bg-neon-yellow transition-colors" />
            <span className="font-ibm text-[9px] tracking-[0.4em] uppercase text-white/30 group-hover:text-neon-yellow transition-colors">View Details</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
