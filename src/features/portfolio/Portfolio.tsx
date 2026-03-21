import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { m , useInView, AnimatePresence  } from 'framer-motion';
import { SectionReveal } from '@/shared/ui/SectionReveal';
import { PortfolioProject, type PortfolioCategory } from '@/data/portfolio';
import { SEO, Schemas } from '@/shared/seo/SEO';
import { prefetchPortfolioData, cachedPortfolioData } from '@/shared/utils/dataPrefetcher';
import { ProjectCardSkeleton } from '@/shared/ui/Skeletons';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [data, setData] = useState(cachedPortfolioData);

  useEffect(() => {
    if (!data) {
      prefetchPortfolioData().then(setData);
    }
  }, [data]);

  const filtered = !data ? [] : activeCategory === 'All'
    ? data.projects
    : data.projects.filter(p => p.category === activeCategory);

  const categories = data?.categories || [];

  return (
    <m.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-background min-h-screen pb-12 overflow-hidden relative selection:bg-neon-yellow selection:text-background"
    >
      <SEO
        title="Selected Works & Portfolio"
        description="Browse Geometric Studio's masterpiece archive: cinematic 3D projects, motion graphics, product visualizations, and immersive experiences crafted for leading brands globally."
        keywords="geometric studio portfolio, 3D project showcase, motion graphics reel, product visualization portfolio, cinematic 3D, creative studio works"
        schema={[
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Portfolio', url: '/portfolio' },
          ]),
          ...(data?.projects || []).map(p =>
            Schemas.creativeWork(p.title, p.description ?? p.title, '/portfolio', p.image)
          ),
        ]}
      />
      {/* Premium Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] transform-gpu pointer-events-none z-0" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] transform-gpu pointer-events-none z-0" />

      <AnimatePresence mode="wait">
        {!data ? (
          <m.section 
            key="skeletons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-6 pt-56"
          >
            <div className="max-w-[1400px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {[1, 2, 3, 4].map(i => <ProjectCardSkeleton key={i} />)}
              </div>
            </div>
          </m.section>
        ) : (
          <m.div 
            key="portfolio-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <section className="px-6 relative pb-12 md:pb-16 pt-36 md:pt-48 lg:pt-56 z-10 overflow-hidden">
              {/* Technical HUD elements */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />
              
              <div className="max-w-[1400px] mx-auto text-center relative">
                <SectionReveal>
                  <div className="flex flex-col items-center">
                      <div className="flex items-center gap-4 mb-10">
                        <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                        <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Masterpiece Archive</span>
                        <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                      </div>
                    
                    <h1 className="font-ibm text-[14vw] xs:text-6xl md:text-7xl lg:text-[90px] xl:text-[130px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 uppercase">
                      Selected <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30 block sm:inline mt-2 sm:mt-0">Works.</span>
                    </h1>

                    <p className="font-ibm text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed border-t border-white/10 pt-12">
                      A technical deep-dive into our finest visual engineering — where raw creativity meets surgically precise execution.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </section>

            {/* Filter */}
            <section className="px-6 py-8 sticky top-20 z-30 pointer-events-none">
              <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center gap-3">
                {categories.map((cat: { id: string, label: string }) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.label as PortfolioCategory)}
                    className={`px-6 py-3 rounded-full border transition-all duration-500 pointer-events-auto text-[9px] font-ibm tracking-[0.2em] uppercase relative group ${
                      activeCategory === cat.label
                        ? 'bg-neon-yellow border-neon-yellow text-background shadow-[0_0_20px_rgba(204,255,0,0.3)] scale-105'
                        : 'bg-background/80 border-white/10 text-white/40 hover:text-white hover:border-white/30 backdrop-blur-md'
                    }`}
                  >
                    <span className="relative z-10">{cat.label}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Grid */}
            <section className="py-16 md:py-24 px-6 relative z-10 w-full mx-auto">
              <div className="max-w-[1400px] mx-auto relative z-10">
                <AnimatePresence mode="wait">
                    <m.div
                      key={activeCategory}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    >
                      {filtered.map((project, i) => (
                        <ProjectCard 
                          key={project.id} 
                          project={project} 
                          index={i} 
                          className={i === 0 ? "md:col-span-2" : ""} 
                        />
                      ))}
                    </m.div>
                </AnimatePresence>
              </div>
            </section>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
}

function ProjectCard({ project, index, className = "" }: { project: PortfolioProject; index: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <Link to={"/portfolio/" + project.slug} className="group block relative w-full aspect-[16/10] sm:aspect-[4/3] bg-background/80 border border-white/5 p-2 rounded-[32px] overflow-hidden hover:border-white/20 transition-colors duration-1000 transform-gpu">
        <div className="w-full h-full rounded-[24px] overflow-hidden relative">
          
          {/* Animated Scan Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-neon-yellow/30 blur-[4px] z-20 -translate-y-full group-hover:animate-scan-line pointer-events-none transform-gpu" />
          
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1200}
            height={800}
            style={{ willChange: "transform, opacity, filter" }}
            className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-[transform,opacity,filter] [transition-duration:2000ms] ease-out scale-105 group-hover:scale-100 transform-gpu"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
          
          {/* Technical Metadata Header */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-8 md:gap-12 transition-all duration-700">
              <div className="flex flex-col gap-1 group-hover:translate-x-2 transition-transform duration-700">
                <div className="text-[7px] md:text-[8px] font-ibm text-white/40 tracking-[0.5em] uppercase">Archive.No.00{index+1}</div>
                <div className="w-1 h-1 rounded-full bg-neon-yellow/30 group-hover:bg-neon-yellow transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
              </div>
             
             <div className="flex items-center gap-3 md:gap-4 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 delay-500 hidden sm:flex">
                <div className="text-[6px] md:text-[7px] font-ibm text-white tracking-[0.3em] uppercase">Client // {project.client || 'INTERNAL'}</div>
                <div className="w-[1px] h-2 md:h-3 bg-white/20" />
                <div className="text-[6px] md:text-[7px] font-ibm text-white tracking-[0.3em] uppercase">Year // {project.year}</div>
             </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
               {project.tags.map(tag => (
                <span key={tag} className="text-[7px] md:text-[8px] text-white/50 font-ibm tracking-[0.2em] uppercase px-2 py-1 md:px-3 md:py-1.5 bg-background/90 border border-white/5 rounded-full transform-gpu">
                   {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-end justify-between">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 max-w-[80%]">
                <span className="text-[8px] md:text-[9px] text-neon-yellow/60 font-ibm tracking-[0.3em] uppercase block mb-1.5 md:mb-3">{project.category}</span>
                <h3 className="font-ibm font-light text-xl xs:text-2xl md:text-4xl lg:text-5xl text-white tracking-tighter uppercase leading-[0.9]">{project.title}</h3>
              </div>
              
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/5 flex items-center justify-center text-white scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:border-neon-yellow/30 transition-all duration-700 ease-out">
                <span className="text-xl group-hover:text-neon-yellow">↗</span>
              </div>
            </div>
          </div>
          
          {/* Metadata Sidebar HUD */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:flex flex-col gap-6 opacity-0 group-hover:opacity-60 transition-all duration-700 delay-300 translate-x-4 group-hover:translate-x-0">
             {project.specs.map((spec, si) => (
                <div key={si} className="flex flex-col items-end gap-1">
                   <div className="text-[6px] font-ibm text-neon-yellow tracking-widest uppercase opacity-50">{spec.label}</div>
                   <div className="[writing-mode:vertical-lr] font-ibm text-[8px] text-white tracking-[0.5em] uppercase border-r border-white/10 pr-1">{spec.value}</div>
                </div>
             ))}
          </div>
        </div>
      </Link>
    </m.div>
  );
}
