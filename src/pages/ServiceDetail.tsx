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
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={service.heroImage}
            alt={service.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </motion.div>

        <div className="relative z-10 w-full px-6 pb-16">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Link to="/services" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-neon-yellow transition-colors font-ibm mb-4">
                ← All Services
              </Link>
              <span className="block text-xs text-neon-yellow font-ibm tracking-widest uppercase mb-3">{service.category}</span>
              <h1 className="font-satoshi text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-4">
                {service.name}
              </h1>
              <p className="font-ibm text-xl text-muted-foreground max-w-2xl italic">"{service.tagline}"</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionReveal>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-6">About This Service</h2>
              <p className="font-ibm text-muted-foreground text-lg leading-relaxed">{service.description}</p>
            </SectionReveal>
          </div>

          <div>
            <SectionReveal delay={0.15}>
              <h2 className="font-satoshi text-2xl font-bold text-foreground mb-6">What You Get</h2>
              <ul className="space-y-3">
                {service.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-ibm text-muted-foreground">
                    <span className="w-5 h-5 flex-shrink-0 border border-neon-yellow/50 flex items-center justify-center">
                      <span className="text-neon-yellow text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto pt-16">
          <SectionReveal>
            <h2 className="font-satoshi text-3xl font-black text-foreground mb-10">Visual Preview</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SectionReveal delay={0.1}>
              <div className="aspect-video overflow-hidden">
                <img src={service.heroImage} alt={service.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="aspect-video overflow-hidden">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <SectionReveal>
          <h2 className="font-satoshi text-3xl md:text-4xl font-black text-foreground mb-4">
            Ready to bring your vision to life?
          </h2>
          <p className="font-ibm text-muted-foreground mb-8">Let's build something extraordinary together.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all hover:scale-105"
          >
            Start a Project <span>→</span>
          </Link>
        </SectionReveal>
      </section>

      {/* Related services */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <h2 className="font-satoshi text-2xl font-bold text-foreground mb-8">Explore More Services</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map((s, i) => (
                <SectionReveal key={s.id} delay={i * 0.1}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex gap-4 items-center border border-border p-4 hover:border-neon-yellow/50 transition-all duration-300"
                  >
                    <img src={s.image} alt={s.name} className="w-16 h-16 object-cover flex-shrink-0" />
                    <div>
                      <span className="text-xs text-neon-yellow/60 font-ibm">{s.category}</span>
                      <h3 className="font-satoshi font-bold text-sm text-foreground group-hover:text-neon-yellow transition-colors">{s.name}</h3>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
