import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { portfolioProjects } from '@/data/portfolio';
import { SEO, Schemas } from '@/components/seo/SEO';

export default function PortfolioProject() {
  const { projectId } = useParams();
  const project = portfolioProjects.find(p => p.id === projectId);
  const { scrollYProgress } = useScroll();

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-ibm text-4xl font-light text-white mb-4 uppercase tracking-tighter">Project Not Found</h1>
          <Link to="/portfolio" className="text-neon-yellow hover:text-white transition-colors font-ibm tracking-widest uppercase text-xs">← Back to Archives</Link>
        </div>
      </div>
    );
  }

  const related = portfolioProjects.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3);
  const titleWords = project.title.split(' ');
  const firstWord = titleWords[0];
  const remainingTitle = titleWords.slice(1).join(' ');

  return (
    <div className="bg-background min-h-screen pb-12 overflow-hidden selection:bg-neon-yellow selection:text-background">
      <SEO
        title={`${project.title} | ${project.category} Portfolio`}
        description={project.description}
        keywords={`${project.title.toLowerCase()}, ${project.category.toLowerCase()}, 3d visualization, geometric studio portfolio, ${project.tags.join(', ').toLowerCase()}`}
        ogImage={project.image}
        schema={[
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Portfolio', url: '/portfolio' },
            { name: project.title, url: `/portfolio/${project.id}` },
          ]),
          Schemas.creativeWork(project.title, project.description, `/portfolio/${project.id}`, project.image)
        ]}
      />
      
      {/* Scroll Progress HUD */}
      <div className="fixed top-1/2 right-10 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-6 pointer-events-none">
          <div className="[writing-mode:vertical-lr] text-[7px] text-white/20 font-ibm tracking-[0.5em] uppercase">Data.Stream.Progress</div>
          <div className="h-64 w-[1px] bg-white/10 relative">
             <motion.div 
               className="absolute top-0 left-0 w-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]"
               style={{ height: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
             />
          </div>
          <motion.div className="text-[10px] text-neon-yellow font-ibm font-bold">
             {useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`)}
          </motion.div>
      </div>

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
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>
        
        {/* Technical HUD Overlay - Enhanced */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
           {/* Primary Grid */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
           
           {/* Dynamic Coordinate HUD */}
           <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col gap-20 opacity-20 hidden md:flex">
              <div className="[writing-mode:vertical-lr] text-[8px] font-ibm text-white tracking-[1em] uppercase">Sector.01 // AXIS.Y</div>
              <div className="h-40 w-px bg-gradient-to-b from-transparent via-white/50 to-transparent" />
              <div className="[writing-mode:vertical-lr] text-[8px] font-ibm text-white tracking-[1em] uppercase">Node.Link // EST.2026</div>
           </div>

           <div className="absolute top-10 right-10 flex gap-4 opacity-20 items-center hidden md:flex">
              <span className="text-[8px] font-ibm text-white tracking-[0.5em] uppercase">System_Active</span>
              <div className="w-20 h-px bg-white/50" />
           </div>

           <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/[0.05]" />
           <div className="absolute top-0 left-1/3 w-[1px] h-full bg-white/[0.05]" />
        </div>

        <div className="relative z-30 w-full px-6 pb-32 max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-start text-left">
              <Link to="/portfolio" className="flex items-center gap-4 text-[10px] text-white/40 hover:text-neon-yellow transition-all font-ibm tracking-[0.5em] uppercase mb-12 group">
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-neon-yellow transition-all" />
                Back to Archives
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] text-neon-yellow font-ibm tracking-[0.4em] uppercase py-1.5 px-3 border border-neon-yellow/30 bg-neon-yellow/5 rounded-full backdrop-blur-sm">
                  Protocol.0{project.id.padStart(2, '0')} // {project.category}
                </span>
                <span className="text-[10px] text-white/20 font-ibm tracking-[0.4em] uppercase">{project.year}</span>
              </div>

              <h1 className="font-ibm text-[14vw] xs:text-6xl md:text-8xl lg:text-[130px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter uppercase mb-8">
                {firstWord} <br className="hidden sm:block" />
                {remainingTitle && (
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow block sm:inline mt-2 sm:mt-0">{remainingTitle}</span>
                )}
              </h1>

              {project.client && (
                <div className="flex items-center gap-6 mt-4 pl-4 border-l border-white/10 uppercase">
                  <span className="text-[10px] text-white/30 font-ibm tracking-[0.4em]">Client_ID:</span>
                  <span className="text-xl text-white font-light tracking-tight">{project.client}</span>
                </div>
              )}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Project Specs */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-neon-yellow/30" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/40">Technical Brief</span>
              </div>
              <p className="font-ibm text-[8vw] xs:text-3xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-12 uppercase">
                Bridging the gap between <span className="italic text-white/40">concept</span> and <br className="hidden sm:block" /><span className="text-neon-yellow">cinematic reality.</span>
              </p>
              <p className="font-ibm text-white/40 text-lg md:text-xl leading-relaxed font-light border-l border-white/10 pl-10 max-w-3xl italic">
                {project.description}
              </p>
            </SectionReveal>
          </div>
          
          <div className="lg:col-span-4 lg:pt-20 space-y-8">
            <SectionReveal delay={0.2}>
              <div className="glass-panel p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 right-10 w-10 h-[2px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <h3 className="font-ibm text-[9px] tracking-[0.5em] uppercase text-white/20 mb-10">Disciplines.Index</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2.5 bg-white/[0.02] border border-white/5 rounded-full text-[9px] text-white/60 font-ibm uppercase tracking-widest hover:border-neon-yellow/40 hover:text-neon-yellow transition-all duration-500">{tag}</span>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="glass-panel p-10 rounded-[32px] border-white/5 group hover:border-neon-yellow/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 left-10 w-10 h-[2px] bg-white/20 group-hover:bg-neon-yellow transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <h3 className="font-ibm text-[9px] tracking-[0.5em] uppercase text-white/20 mb-10">System.Diagnostics</h3>
                <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                  {project.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      <span className="text-[7px] font-ibm text-neon-yellow/50 tracking-[0.2em] uppercase">{spec.label}</span>
                      <span className="text-xs text-white font-ibm tracking-wider uppercase">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
                {/* HUD Decorative element */}
                <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-neon-yellow/20 rounded-full" />
                    ))}
                  </div>
                  <span className="text-[6px] font-ibm text-white/10 tracking-[0.4em] uppercase">Stable_Build_v4.0</span>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Visual Archive Gallery */}
      <section className="py-40 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionReveal>
            <div className="flex flex-col items-center mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-white/10" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/40">Visual Inventory</span>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>
              <h2 className="font-ibm text-[12vw] xs:text-5xl md:text-7xl font-light text-white tracking-tighter uppercase leading-none">Captured <span className="italic text-white/20 block sm:inline mt-2 sm:mt-0">Data.</span></h2>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[16/10] rounded-[40px] overflow-hidden glass-panel p-3 transition-all duration-700 hover:border-white/20">
                   {/* Top Metadata */}
                   <div className="absolute top-8 left-12 right-12 flex justify-between items-center z-20 pointer-events-none">
                      <div className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-neon-yellow/40 animate-pulse" />
                       <span className="text-[7px] font-ibm text-white/30 uppercase tracking-[0.2em]">Data.Node.0{i+1}</span>
                    </div>
                    <div className="text-[9px] font-ibm text-white/10 uppercase tracking-widest group-hover:text-neon-yellow transition-colors">
                      SHT.ARC.00{i+1}
                    </div>
                   </div>

                   <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                     <img src={img} alt={`${project.title} ${i + 1}`} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                     
                     {/* Bottom Corner HUD */}
                     <div className="absolute bottom-6 left-6 flex flex-col gap-1 items-start opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0">
                        <div className="text-[6px] font-ibm text-neon-yellow tracking-widest uppercase">Metadata_Stream</div>
                        <div className="w-12 h-px bg-white/20" />
                        <div className="text-[6px] font-ibm text-white/30 tracking-widest uppercase">X: {800 + i * 20} Y: {600 - i * 15} Z: 4.0</div>
                     </div>
                   </div>

                   {/* Scanning Line on hover */}
                   <div className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-full h-[1px] bg-neon-yellow/20 shadow-[0_0_10px_rgba(204,255,0,0.4)] absolute top-0 -translate-y-full group-hover:animate-scan-line" />
                   </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related Archive Showcase */}
      {related.length > 0 && (
        <section className="py-40 px-6 relative z-10 w-full overflow-hidden border-t border-white/5">
          <div className="max-w-[1400px] mx-auto relative">
            <SectionReveal>
              <div className="flex flex-col items-center mb-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-neon-yellow/30" />
                  <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/40">Sequence Extension</span>
                  <div className="w-12 h-[1px] bg-neon-yellow/30" />
                </div>
                <h2 className="font-ibm text-[10vw] xs:text-4xl md:text-6xl font-light text-white tracking-tighter uppercase text-center leading-none">Similar <span className="italic text-white/20 block sm:inline mt-2 sm:mt-0">Protocols.</span></h2>
              </div>
            </SectionReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <SectionReveal key={p.id} delay={i * 0.1}>
                  <Link to={`/portfolio/${p.id}`} className="group block relative aspect-[4/5] rounded-[40px] glass-panel p-3 hover:border-white/20 transition-all duration-1000 overflow-hidden">
                    <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                      {/* Scan Line Animation */}
                      <div className="absolute inset-0 pointer-events-none z-20">
                        <div className="w-full h-[1px] bg-neon-yellow/30 shadow-[0_0_15px_rgba(204,255,0,0.5)] absolute top-0 -translate-y-full group-hover:animate-scan-line" />
                      </div>
                      
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      
                      {/* HUD Specs Overlay */}
                      <div className="absolute top-6 right-6 flex flex-col gap-4 opacity-0 group-hover:opacity-60 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                         {p.specs.slice(0, 2).map((spec, si) => (
                            <div key={si} className="flex flex-col items-end">
                               <div className="text-[5px] font-ibm text-neon-yellow tracking-widest uppercase mb-0.5">{spec.label}</div>
                               <div className="[writing-mode:vertical-lr] font-ibm text-[7px] text-white tracking-[0.4em] uppercase border-r border-white/10 pr-1">{spec.value}</div>
                            </div>
                         ))}
                      </div>

                      <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <span className="text-[7px] text-neon-yellow/60 font-ibm tracking-[0.4em] uppercase block mb-3">Protocol.0{p.id}</span>
                        <h3 className="font-ibm font-light text-2xl md:text-3xl text-white tracking-tighter uppercase leading-none">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
