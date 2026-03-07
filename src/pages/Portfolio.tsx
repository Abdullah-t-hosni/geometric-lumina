import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { portfolioProjects, portfolioCategories, type PortfolioCategory } from '@/data/portfolio';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');

  const filtered = activeCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen pt-24 pb-12 overflow-hidden relative">
      {/* Premium Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      {/* Header */}
      <section className="px-6 relative pb-32 pt-20 z-10 overflow-hidden">
        {/* Technical HUD elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto text-center relative">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Masterpiece Archive</span>
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
              </div>
              
              <h1 className="font-satoshi text-6xl md:text-8xl lg:text-[130px] font-light text-white leading-[0.85] tracking-tighter mb-12 uppercase">
                Selected <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30 px-4">Works.</span>
              </h1>

              <p className="font-ibm text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed border-t border-white/10 pt-12">
                A technical deep-dive into our finest visual engineering — where raw creativity meets surgically precise execution.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 py-12 sticky top-20 z-30 pointer-events-none">
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center p-2 bg-background/40 backdrop-blur-xl border border-white/5 rounded-full pointer-events-auto shadow-2xl">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 text-[9px] font-ibm tracking-[0.3em] uppercase transition-all duration-500 rounded-full relative group ${
                  activeCategory === cat
                    ? 'text-neon-yellow'
                    : 'text-white/40 hover:text-white'
                }`}
              >
                {activeCategory === cat && (
                   <motion.div 
                     layoutId="active-pill"
                     className="absolute inset-0 bg-white/[0.03] border border-white/10 rounded-full"
                     transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                   />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 px-6 relative z-10 w-full mx-auto">
        <div className="max-w-[1400px] mx-auto relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Cinematic Final CTA */}
      <section className="py-52 px-6 text-center relative bg-background overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-yellow/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <SectionReveal>
          <h2 className="font-satoshi text-6xl md:text-8xl lg:text-[140px] font-light text-white mb-16 tracking-tighter leading-[0.85]">
            Need Your Own <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4 uppercase">Legacy.</span>
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

function ProjectCard({ project, index }: { project: typeof portfolioProjects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/portfolio`} className="group block relative w-full aspect-[16/10] sm:aspect-[4/3] glass-panel p-2 rounded-[32px] overflow-hidden hover:border-white/20 transition-all duration-1000">
        <div className="w-full h-full rounded-[24px] overflow-hidden relative">
          
          {/* Animated Scan Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-yellow/30 blur-[4px] z-20 -translate-y-full group-hover:animate-scan-line pointer-events-none" />
          
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[2s] ease-out scale-105 group-hover:scale-100"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
          
          {/* Technical Metadata Header */}
          <div className="absolute top-8 left-8 flex items-center gap-12 transition-all duration-700">
             <div className="flex flex-col gap-1 group-hover:translate-x-2 transition-transform duration-700">
                <div className="text-[8px] font-ibm text-white/40 tracking-[0.5em] uppercase">Archive No.00{index+1}</div>
                <div className="w-12 h-[1px] bg-neon-yellow/30 group-hover:bg-neon-yellow group-hover:w-20 transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
             </div>
             
             <div className="flex items-center gap-4 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 delay-500">
                <div className="text-[7px] font-ibm text-white tracking-[0.3em] uppercase">Client // {project.client || 'INTERNAL'}</div>
                <div className="w-[1px] h-3 bg-white/20" />
                <div className="text-[7px] font-ibm text-white tracking-[0.3em] uppercase">Year // {project.year}</div>
             </div>
          </div>

          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex flex-wrap gap-2 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
              {project.tags.map(tag => (
                <span key={tag} className="text-[8px] text-white/50 font-ibm tracking-[0.2em] uppercase px-3 py-1.5 bg-black/40 backdrop-blur-md border border-white/5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-end justify-between">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-[9px] text-neon-yellow/60 font-ibm tracking-[0.3em] uppercase block mb-3">{project.category}</span>
                <h3 className="font-satoshi font-light text-3xl md:text-5xl text-white tracking-tighter uppercase leading-none">{project.title}</h3>
              </div>
              
              <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:border-neon-yellow/30 transition-all duration-700 ease-out">
                <span className="text-2xl group-hover:text-neon-yellow">↗</span>
              </div>
            </div>
          </div>
          
          {/* Metadata Sidebar HUD */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col gap-8 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 delay-300">
             <div className="[writing-mode:vertical-lr] font-ibm text-[7px] text-white tracking-[1em] uppercase">Resolution: 8K CINEMATIC</div>
             <div className="[writing-mode:vertical-lr] font-ibm text-[7px] text-white tracking-[1em] uppercase">Status: Final Render</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
