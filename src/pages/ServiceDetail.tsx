import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { services } from '@/data/services';

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const service = services.find(s => s.slug === serviceName);

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-satoshi text-4xl font-black text-foreground mb-4">Service Not Found</h1>
          <Link to="/services" className="text-neon-yellow hover:underline font-ibm">← Back to Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-12 overflow-hidden">
      {/* Premium Ambient Glows */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      {/* Hero Header */}
      <section className="relative h-[90vh] flex items-end overflow-hidden z-10 border-b border-white/5">
        <motion.div
           initial={{ scale: 1.1, filter: 'blur(10px)' }}
           animate={{ scale: 1, filter: 'blur(0px)' }}
           transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
           className="absolute inset-0"
        >
          <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>
        
        {/* Technical HUD Overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.03]" />
           <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/[0.03]" />
        </div>

        <div className="relative z-30 w-full px-6 pb-32 max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-center text-center">
              <Link to="/services" className="flex items-center gap-4 text-[10px] text-white/40 hover:text-neon-yellow transition-all font-ibm tracking-[0.5em] uppercase mb-12 group">
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-neon-yellow transition-all" />
                Return to Capabilities
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] text-neon-yellow font-ibm tracking-[0.4em] uppercase py-1.5 px-3 border border-neon-yellow/30 bg-neon-yellow/5 rounded-full backdrop-blur-sm">
                  Service_Type: {service.category}
                </span>
                <span className="text-[10px] text-white/20 font-ibm tracking-[0.4em] uppercase">Status: Active</span>
              </div>

              <h1 className="font-satoshi text-6xl md:text-8xl lg:text-[130px] font-light text-white leading-[0.85] tracking-tighter uppercase mb-8">
                {service.name.split(' ')[0]} <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4">{service.name.split(' ').slice(1).join(' ')}</span>
              </h1>

              <p className="font-ibm text-white/40 text-lg md:text-2xl font-light italic mt-4 max-w-3xl">
                "{service.tagline}"
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Service Core Specifications */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-neon-yellow/30" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/40">Capability Detail</span>
              </div>
              <p className="font-satoshi text-3xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-12 uppercase">
                Engineering visual <span className="italic text-white/40">supremacy</span> through <span className="text-neon-yellow text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-white/40">technical mastery.</span>
              </p>
              <p className="font-ibm text-white/40 text-lg md:text-xl leading-relaxed font-light border-l border-white/10 pl-10 max-w-3xl">
                {service.description}
              </p>
            </SectionReveal>
          </div>
          
          <div className="lg:col-span-5">
            <SectionReveal delay={0.2}>
              <div className="glass-panel p-10 md:p-16 rounded-[40px] relative overflow-hidden group hover:border-white/20 transition-all duration-700">
                <div className="absolute top-0 right-16 w-16 h-[2px] bg-neon-yellow shadow-[0_0_15px_rgba(204,255,0,0.3)]" />
                <h3 className="font-satoshi text-[9px] tracking-[0.5em] uppercase text-white/20 mb-10">Deliverables_Output</h3>
                <ul className="space-y-4">
                  {service.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-5 text-[11px] font-ibm text-white/40 font-light p-5 bg-white/[0.01] border border-white/5 rounded-2xl group/item hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 uppercase tracking-widest">
                      <span className="w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center border border-white/5 text-neon-yellow/40 group-hover/item:border-neon-yellow/50 group-hover/item:text-neon-yellow transition-all duration-500">
                        <span className="text-[10px]">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 relative z-10 w-full mx-auto">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <SectionReveal>
             <div className="text-center mb-16">
               <span className="text-[10px] font-ibm tracking-[0.3em] uppercase text-creamy-white/60 block mb-4">Gallery</span>
               <h2 className="font-satoshi text-4xl md:text-6xl font-light text-creamy-white tracking-tight">Visual <span className="font-black">Showcase.</span></h2>
             </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SectionReveal delay={0.1}>
              <div className="aspect-[16/10] overflow-hidden glass-panel rounded-2xl p-2 group">
                 <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="aspect-[16/10] overflow-hidden glass-panel rounded-2xl p-2 group">
                 <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Capability Grid Showcase */}
      <section className="py-24 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-[1px] bg-neon-yellow/30" />
              <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/40">Alternative Capabilities</span>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((s, i) => (
                <SectionReveal key={s.id} delay={i * 0.1}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex flex-col p-10 glass-panel rounded-[32px] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-700 relative overflow-hidden h-full"
                  >
                    <div className="absolute top-0 left-10 w-10 h-[2px] bg-white/10 group-hover:bg-neon-yellow group-hover:w-20 transition-all duration-700" />
                    <div className="flex flex-col gap-10">
                      <div className="w-20 h-20 rounded-[28px] overflow-hidden glass-panel p-2 border-white/5 group-hover:border-neon-yellow/30 transition-all duration-500">
                         <div className="w-full h-full rounded-[20px] overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                             <img src={s.image} alt={s.name} className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" />
                         </div>
                      </div>
                      <div className="space-y-4">
                        <span className="font-ibm text-[8px] text-white/20 uppercase tracking-[0.5em] block group-hover:text-neon-yellow/60 transition-colors">Service_0{i+1}</span>
                        <h3 className="font-satoshi font-light text-3xl text-white tracking-tighter uppercase leading-none group-hover:translate-x-2 transition-transform duration-700">{s.name}</h3>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
          </div>
        </div>
      </section>
      
      {/* Cinematic Final CTA */}
      <section className="py-52 px-6 text-center bg-background relative overflow-hidden z-10 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-yellow/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <SectionReveal>
          <h2 className="font-satoshi text-6xl md:text-8xl lg:text-[140px] font-light text-white mb-16 tracking-tighter leading-[0.85] uppercase">
            Let's Start <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4">The Sequence.</span>
          </h2>
          <Link to="/contact" className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden rounded-full transition-all duration-500">
            <div className="absolute inset-0 bg-neon-yellow group-hover:scale-105 transition-transform duration-500" />
            <span className="relative z-10 font-ibm font-medium text-[12px] tracking-[0.5em] uppercase text-background">
              Initiate Contact Portal
            </span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
