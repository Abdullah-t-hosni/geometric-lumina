import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, getAllServices, getRelatedServices } from '@/data/services';
import { m , useScroll, useTransform, AnimatePresence  } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { SectionReveal } from '@/shared/ui/SectionReveal';
import { SEO, Schemas } from '@/shared/seo/SEO';
import { prefetchServicesData, cachedServicesData } from '@/shared/utils/dataPrefetcher';
import { ServiceDetailSkeleton } from '@/shared/ui/Skeletons';

export default function ServiceDetail() {
  const { serviceName } = useParams();
  const [data, setData] = useState(cachedServicesData);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    if (!data) {
      prefetchServicesData().then(setData);
    }
  }, [data]);

  if (!data) {
    return <ServiceDetailSkeleton />;
  }

  const service = getServiceBySlug(serviceName || '');
  const services = getAllServices();

  if (!service) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <SEO title="Service Not Found" noIndex={true} />
        <div className="text-center">
          <h1 className="font-ibm text-4xl font-light text-white mb-8 tracking-tighter">SERVICE_NOT_FOUND</h1>
          <Link to="/services" className="group relative px-10 py-4 overflow-hidden rounded-full border border-white/10 text-[10px] font-ibm tracking-[0.4em] uppercase text-white transition-all">
            <span className="relative z-10">← Return to Capabilities</span>
          </Link>
        </div>
      </div>
    );
  }

  const relatedServices = getRelatedServices(service.slug, 3);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      ref={containerRef}
      className="bg-background min-h-screen overflow-hidden relative"
    >
      <SEO
        title={service.seoTitle || `${service.name} | 3D & Motion Services`}
        description={service.seoDescription || `${service.tagline} — ${service.description.slice(0, 120)}...`}
        keywords={`${service.name.toLowerCase()}, ${service.category.toLowerCase()}, 3D studio, motion graphics, ${service.name.toLowerCase()} service`}
        schema={[
          Schemas.service(service.name, service.description, `/services/${service.slug}`),
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/services' },
            { name: service.name, url: `/services/${service.slug}` },
          ]),
        ]}
      />
      {/* Premium Ambient Glows - Fixed Position */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className={`absolute top-0 right-0 w-[1000px] h-[1000px] rounded-full blur-[150px] transform-gpu opacity-10 transition-colors duration-1000 ${
          service.color === 'neon-yellow' ? 'bg-neon-yellow' :
          service.color === 'sky-blue' ? 'bg-sky-blue' :
          service.color === 'coral-red' ? 'bg-coral-red' :
          service.color === 'deep-teal' ? 'bg-deep-teal' :
          'bg-white'
        }`} />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-deep-teal/5 rounded-full blur-[150px] transform-gpu opacity-20" />
      </div>

      {/* ─── PREMIUM SCROLLING HERO ────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <m.div style={{ scale: heroScale, opacity: heroOpacity, willChange: "transform, opacity" }} className="absolute inset-0">
          <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </m.div>

        {/* HUD Decoration */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.05]" />
           <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/[0.05]" />
           <m.div 
             animate={{ opacity: [0.1, 0.3, 0.1] }}
             transition={{ duration: 4, repeat: Infinity }}
             className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full" 
           />
           <m.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-dashed border-white/5 rounded-full" 
           />
        </div>

        <div className="relative z-30 w-full px-6 max-w-[1400px] mx-auto text-center">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <Link to="/services" className="group flex items-center gap-4 text-[9px] text-white/40 hover:text-white transition-all font-ibm tracking-[0.5em] uppercase mb-12">
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-neon-yellow transition-all duration-500" />
                Return to Capabilities
              </Link>
              
              <div className="flex items-center gap-4 mb-10">
                <span className="text-[10px] text-neon-yellow font-ibm tracking-[0.5em] uppercase py-2 px-5 border border-neon-yellow/20 bg-background/90 rounded-full shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                  {service.category}
                </span>
                <div className="w-2 h-2 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.8)] animate-pulse" />
              </div>

              <h1 className="font-ibm text-[13vw] xs:text-5xl md:text-7xl lg:text-[100px] xl:text-[140px] font-light text-white leading-[1.1] md:leading-[0.8] tracking-tighter uppercase mb-8 md:mb-12">
                {service.name.includes(' ') ? (
                  <>
                    {service.name.split(' ')[0]}{' '}<br className="hidden sm:block" />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/30 glow-text-yellow block sm:inline mt-2 sm:mt-0">{service.name.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : (
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/30 glow-text-yellow">{service.name}</span>
                )}
              </h1>

              <m.div style={{ y: contentY }} className="max-w-2xl px-6">
                 <p className="font-ibm text-creamy-white/50 text-lg md:text-xl font-light italic leading-relaxed">
                   "{service.tagline}"
                 </p>
              </m.div>
            </div>
          </SectionReveal>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
           <m.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="flex flex-col items-center gap-3 opacity-30"
           >
              <span className="text-[8px] font-ibm tracking-[0.4em] uppercase text-white">Extract Details</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
           </m.div>
        </div>
      </section>

      {/* ─── TECHNICAL SPECIFICATIONS ─────────────────── */}
      <section className="py-16 md:py-24 xl:py-40 px-6 relative z-10 bg-background/90 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-32 items-start">
            <div className="lg:col-span-7 space-y-16">
              <SectionReveal>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Protocol.Design.System</span>
                  <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                </div><h2 className="font-ibm text-[10vw] xs:text-4xl md:text-6xl font-light text-white leading-[1] tracking-tighter uppercase">
                  Precision engineered <br className="hidden sm:block" />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 block sm:inline mt-2 sm:mt-0">Visual Supremacy.</span>
                </h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent my-10" />
                <p className="font-ibm text-creamy-white/40 text-lg md:text-2xl leading-relaxed font-light max-w-3xl border-l-2 border-neon-yellow/20 pl-10">
                  {service.description}
                </p>
              </SectionReveal>

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-6 md:gap-8 pt-10">
                 {service.stats.map((stat, i) => (
                   <SpecMetric key={i} label={stat.label} value={stat.value} />
                 ))}
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <SectionReveal delay={0.2}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-neon-yellow/5 blur-2xl rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  <div className="relative glass-panel p-10 md:p-14 rounded-[40px] border-white/5 group-hover:border-white/20 transition-all duration-700 overflow-hidden">
                    <div className="absolute top-0 right-10 p-10 text-[8px] font-ibm text-white/5 tracking-[0.5em] uppercase">M.CAP.0{service.id}</div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-yellow/0 via-neon-yellow/20 to-neon-yellow/0" />
                    
                    <h3 className="font-ibm text-[10px] tracking-[0.5em] uppercase text-white/30 mb-12 flex items-center gap-4">
                       <span className="w-2 h-2 rounded-full bg-neon-yellow/40" />
                       Deliverables Output
                    </h3>
                    
                    <ul className="space-y-4">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="group/item relative list-none">
                          <div className="flex items-center gap-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500">
                             <span className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 text-white/20 group-hover/item:border-neon-yellow/50 group-hover/item:text-neon-yellow transition-all duration-500">
                                <span className="text-[10px] font-ibm">0{i+1}</span>
                             </span>
                             <span className="text-[11px] font-ibm text-white/40 tracking-[0.2em] group-hover/item:text-white transition-colors duration-500 uppercase">{item}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CINEMATIC SHOWCASE GALLERY ────────────────── */}
      {(service.gallery && service.gallery.length > 0) && (
        <section className="py-32 px-6 relative z-10 overflow-hidden">
          <div className="max-w-[1400px] mx-auto">
            <SectionReveal>
              <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                  <div>
                    <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/30 block mb-4">Visual Evidence</span>
                    <h2 className="font-ibm text-[12vw] xs:text-5xl md:text-7xl font-light text-white tracking-tighter uppercase leading-none">The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-white/40 block sm:inline mt-2 sm:mt-0">Portfolio.</span></h2>
                  </div>
                  <div className="text-[10px] font-ibm text-white/20 tracking-[0.2em] uppercase text-right max-w-[200px] border-r border-white/10 pr-6">
                    Samples from recent technical deployments
                  </div>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {service.gallery.map((img, i) => (
                <GalleryItem key={i} image={img} delay={0.1 * (i + 1)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── ALTERNATIVE DEPLOYMENTS (NAVIGATION) ───────── */}
      <section className="py-16 md:py-24 xl:py-40 px-6 relative z-10 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-center text-center mb-24">
              <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/60 block mb-6">Cross-Module Integration</span>
              <h2 className="font-ibm text-[10vw] xs:text-5xl md:text-6xl font-light text-white tracking-tighter uppercase leading-none">Explore <span className="italic text-white/30 block sm:inline mt-2 sm:mt-0">Similar Modules.</span></h2>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices.map((s, i) => (
              <AlternativeCard key={s.id} service={s} index={i} servicesList={services} />
            ))}
          </div>
        </div>
      </section>
      
    </m.div>
  );
}

// ─── Sub Components ───────────────────────────────

function SpecMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="group border-b border-white/5 pb-6 hover:border-white/20 transition-all duration-500 text-left">
      <div className="text-[8px] md:text-[9px] font-ibm tracking-[0.3em] uppercase text-white/30 group-hover:text-neon-yellow/60 transition-colors mb-2 text-left">{label}</div>
      <div className="text-lg md:text-xl lg:text-2xl font-ibm font-light text-white tracking-tight uppercase leading-tight text-left">{value}</div>
    </div>
  );
}

function GalleryItem({ image, delay }: { image: string; delay: number }) {
  return (
    <SectionReveal delay={delay}>
      <div className="aspect-[16/10] overflow-hidden rounded-[40px] glass-panel p-2 group bg-white/[0.01]">
         <div className="w-full h-full rounded-[32px] overflow-hidden relative">
            <img src={image} alt="Showcase" loading="lazy" width={1200} height={750} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all [transition-duration:1500ms] ease-out opacity-60 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
            
            {/* HUD Corner decos */}
            <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300" />
         </div>
      </div>
    </SectionReveal>
  );
}

function AlternativeCard({ service, index, servicesList }: { service: any; index: number; servicesList: any[] }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <SectionReveal delay={index * 0.1}>
      <Link
        to={`/services/${service.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex flex-col p-6 sm:p-8 md:p-10 h-full rounded-[32px] md:rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-700 overflow-hidden text-left"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10 flex flex-col h-full text-left">
           <div className="flex justify-between items-start mb-8 md:mb-12">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[20px] md:rounded-[30px] overflow-hidden p-1 glass-panel border-white/5 group-hover:border-neon-yellow/30 transition-all duration-700 shadow-2xl">
                 <img src={service.heroImage} alt={service.name} loading="lazy" width={160} height={160} className="w-full h-full object-cover rounded-[14px] md:rounded-[22px] grayscale group-hover:grayscale-0 transition-all duration-1000" />
              </div>
              <div className="text-[8px] md:text-[10px] font-ibm text-white/20 uppercase tracking-[0.3em]">Module.0{index + 1}</div>
           </div>

           <div className="mt-auto space-y-3 md:space-y-4 text-left">
              <h3 className="font-ibm font-light text-xl md:text-2xl lg:text-3xl text-white tracking-tighter uppercase leading-tight group-hover:text-neon-yellow transition-colors duration-500">
                {service.name}
              </h3>
              <p className="font-ibm text-[9px] md:text-[10px] text-white/30 tracking-[0.2em] uppercase max-w-[200px] leading-relaxed group-hover:text-white/60 transition-all text-left">
                {service.tagline}
              </p>
              
              <div className="flex items-center justify-start gap-4 pt-4 md:pt-6">
                <div className={`h-[1px] transition-all duration-500 ${isHovered ? 'w-12 bg-neon-yellow' : 'w-6 bg-white/10'}`} />
                <span className={`text-[7px] md:text-[8px] font-ibm tracking-[0.4em] uppercase transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/20'}`}>Select Protocol</span>
              </div>
           </div>
        </div>

        <AnimatePresence>
          {isHovered && (
            <m.div
              initial={{ left: '-10%' }}
              animate={{ left: '110%' }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-[1px] bg-neon-yellow/20 shadow-[0_0_15px_rgba(204,255,0,0.3)] z-0"
            />
          )}
        </AnimatePresence>
      </Link>
    </SectionReveal>
  );
}
