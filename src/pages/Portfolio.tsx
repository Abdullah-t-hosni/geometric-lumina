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
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/10 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Our Work</span>
            </div>
            <h1 className="font-satoshi text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
              Portfolio
            </h1>
            <p className="font-ibm text-muted-foreground text-xl max-w-2xl">
              A curated selection of our finest work — where creativity meets precision.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-8 sticky top-20 z-30 bg-background/90 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto py-4">
          <div className="flex flex-wrap gap-2">
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-ibm font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  activeCategory === cat
                    ? 'border-neon-yellow bg-neon-yellow text-background'
                    : 'border-border text-muted-foreground hover:border-neon-yellow/60 hover:text-neon-yellow'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-card">
        <SectionReveal>
          <h2 className="font-satoshi text-3xl md:text-4xl font-black text-foreground mb-4">
            Ready to create something extraordinary?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all mt-6">
            Start a Project <span>→</span>
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
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/portfolio/${project.id}`} className="group block relative overflow-hidden aspect-[4/3] border border-border hover:border-neon-yellow/50 transition-colors duration-300">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1 border border-neon-yellow/40 text-neon-yellow text-xs font-ibm tracking-wider bg-background/60 backdrop-blur-sm">
          {project.category}
        </span>

        {/* Hover overlay content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
          <div className="flex flex-wrap gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs text-muted-foreground font-ibm border border-border/60 px-2 py-0.5 bg-background/80 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-satoshi font-bold text-lg text-foreground mb-1">{project.title}</h3>
          <p className="font-ibm text-sm text-muted-foreground line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
          <span className="inline-flex items-center gap-2 text-xs text-neon-yellow font-ibm mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            View Project <span>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
