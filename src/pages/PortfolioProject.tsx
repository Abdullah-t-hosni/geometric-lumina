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
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </motion.div>

        <div className="relative z-10 w-full px-6 pb-16 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-neon-yellow transition-colors font-ibm mb-4">
              ← Portfolio
            </Link>
            <span className="block text-xs text-neon-yellow font-ibm tracking-widest uppercase mb-2">{project.category} · {project.year}</span>
            <h1 className="font-satoshi text-5xl md:text-6xl font-black text-foreground mb-3">{project.title}</h1>
            {project.client && (
              <p className="font-ibm text-muted-foreground">Client: {project.client}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionReveal>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-4">About the Project</h2>
              <p className="font-ibm text-muted-foreground text-lg leading-relaxed">{project.description}</p>
            </SectionReveal>
          </div>
          <div>
            <SectionReveal delay={0.15}>
              <h3 className="font-satoshi font-bold text-foreground mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-border text-xs text-muted-foreground font-ibm">{tag}</span>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="font-satoshi text-2xl font-bold text-foreground mb-8">Project Gallery</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="aspect-video overflow-hidden">
                  <img src={img} alt={`${project.title} ${i + 1}`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="pb-24 px-6 bg-card">
          <div className="max-w-7xl mx-auto pt-16">
            <SectionReveal>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-8">Related Projects</h2>
            </SectionReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((p, i) => (
                <SectionReveal key={p.id} delay={i * 0.1}>
                  <Link to={`/portfolio/${p.id}`} className="group block relative overflow-hidden aspect-[4/3]">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-satoshi font-bold text-sm text-foreground group-hover:text-neon-yellow transition-colors">{p.title}</h3>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 px-6 text-center">
        <SectionReveal>
          <h2 className="font-satoshi text-3xl font-black text-foreground mb-6">Like what you see?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all">
            Start Your Project <span>→</span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
