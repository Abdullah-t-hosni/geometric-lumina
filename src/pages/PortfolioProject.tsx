import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { portfolioProjects } from '@/data/portfolio';

export default function PortfolioProject() {
  const { projectId } = useParams();
  const project = portfolioProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-satoshi text-4xl font-black text-foreground mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-neon-yellow hover:underline font-ibm">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  const related = portfolioProjects.filter(p => p.id !== project.id && p.category === project.category).slice(0, 3);

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
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>
        
        {/* Technical HUD Overlay */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
           <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.03]" />
           <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.03]" />
           <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/[0.03]" />
        </div>

        <div className="relative z-30 w-full px-6 pb-32 max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-start">
              <Link to="/portfolio" className="flex items-center gap-4 text-[10px] text-white/40 hover:text-neon-yellow transition-all font-ibm tracking-[0.5em] uppercase mb-12 group">
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-neon-yellow transition-all" />
                Back to Archives
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] text-neon-yellow font-ibm tracking-[0.4em] uppercase py-1.5 px-3 border border-neon-yellow/30 bg-neon-yellow/5 rounded-full backdrop-blur-sm">
                  Protocol_0{project.id === '1' ? '1' : 'X'} // {project.category}
                </span>
                <span className="text-[10px] text-white/20 font-ibm tracking-[0.4em] uppercase">{project.year}</span>
              </div>

              <h1 className="font-satoshi text-6xl md:text-8xl lg:text-[130px] font-light text-white leading-[0.85] tracking-tighter uppercase mb-8">
                {project.title.split(' ')[0]} <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4">{project.title.split(' ').slice(1).join(' ')}</span>
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
              <p className="font-satoshi text-3xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-12 uppercase">
                Bridging the gap between <span className="italic text-white/40">concept</span> and <span className="text-neon-yellow">cinematic reality.</span>
              </p>
              <p className="font-ibm text-white/40 text-lg md:text-xl leading-relaxed font-light border-l border-white/10 pl-10 max-w-3xl italic">
                {project.description}
              </p>
            </SectionReveal>
          </div>
          
          <div className="lg:col-span-4 lg:pt-20">
            <SectionReveal delay={0.2}>
              <div className="glass-panel p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 right-10 w-10 h-[2px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <h3 className="font-satoshi text-[9px] tracking-[0.5em] uppercase text-white/20 mb-10">Disciplines_Index</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2.5 bg-white/[0.02] border border-white/5 rounded-full text-[9px] text-white/60 font-ibm uppercase tracking-widest hover:border-neon-yellow/40 hover:text-neon-yellow transition-all duration-500">{tag}</span>
                  ))}
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
              <h2 className="font-satoshi text-5xl md:text-7xl font-light text-white tracking-tighter uppercase">Captured <span className="italic text-white/20">Data.</span></h2>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="group relative aspect-[16/10] rounded-[40px] overflow-hidden glass-panel p-3 transition-all duration-700 hover:border-white/20">
                   <div className="absolute top-8 right-12 text-[10px] font-ibm text-white/10 z-20 uppercase tracking-widest group-hover:text-neon-yellow transition-colors">
                     Shot_0{i+1}
                   </div>
                   <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                     <img src={img} alt={`${project.title} ${i + 1}`} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                     <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
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
                <h2 className="font-satoshi text-4xl md:text-6xl font-light text-white tracking-tighter uppercase text-center">Similar <span className="italic text-white/20">Protocols.</span></h2>
              </div>
            </SectionReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((p, i) => (
                <SectionReveal key={p.id} delay={i * 0.1}>
                  <Link to={`/portfolio/${p.id}`} className="group block relative aspect-[4/5] rounded-[40px] glass-panel p-3 hover:border-neon-yellow/30 transition-all duration-700 overflow-hidden">
                    <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                      {/* Scan Line Animation */}
                      <div className="absolute inset-0 pointer-events-none z-20">
                        <div className="w-full h-[2px] bg-neon-yellow/50 shadow-[0_0_15px_rgba(204,255,0,0.5)] absolute top-0 -translate-y-full group-hover:animate-scan-line" />
                      </div>
                      
                      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 grayscale" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      
                      <div className="absolute bottom-0 left-0 w-full p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                        <span className="text-[8px] text-neon-yellow font-ibm tracking-[0.4em] uppercase block mb-4">Sequence_0{p.id}</span>
                        <h3 className="font-satoshi font-light text-3xl text-white tracking-tighter uppercase leading-none">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cinematic Final CTA */}
      <section className="py-52 px-6 text-center bg-background relative overflow-hidden z-10 border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-yellow/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <SectionReveal>
          <h2 className="font-satoshi text-6xl md:text-8xl lg:text-[140px] font-light text-white mb-16 tracking-tighter leading-[0.85] uppercase">
            Let's Shape <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4">Your Reality.</span>
          </h2>
          <Link to="/contact" className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden rounded-full transition-all duration-500">
            <div className="absolute inset-0 bg-neon-yellow group-hover:scale-105 transition-transform duration-500" />
            <span className="relative z-10 font-ibm font-medium text-[12px] tracking-[0.5em] uppercase text-background">
              Initiate New Protocol
            </span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
