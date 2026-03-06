import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { services } from '@/data/services';

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/10 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">What We Offer</span>
            </div>
            <h1 className="font-satoshi text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
              Our <span className="text-neon-yellow">Services</span>
            </h1>
            <p className="font-ibm text-muted-foreground text-xl max-w-2xl">
              From motion graphics to immersive VR — 12 specialized services, one unified vision of excellence.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Services grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-card text-center">
        <SectionReveal>
          <h2 className="font-satoshi text-3xl md:text-4xl font-black text-foreground mb-4">
            Not sure what you need?
          </h2>
          <p className="font-ibm text-muted-foreground mb-8">Tell us your vision and we'll recommend the right approach.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all">
            Start a Conversation <span>→</span>
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
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block border border-border hover:border-neon-yellow/60 transition-all duration-400 overflow-hidden relative bg-card"
      >
        {/* Hero image */}
        <div className="aspect-video overflow-hidden relative">
          <img
            src={service.heroImage}
            alt={service.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-background/50 group-hover:bg-background/20 transition-colors duration-500" />
          <span className="absolute top-4 left-4 px-3 py-1 border border-neon-yellow/40 text-neon-yellow text-xs font-ibm tracking-wider">
            {service.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-satoshi font-bold text-xl text-foreground group-hover:text-neon-yellow transition-colors duration-300 mb-3">
            {service.name}
          </h3>
          <p className="font-ibm text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {service.tagline}
          </p>
          <div className="flex items-center gap-2 text-xs text-neon-yellow/60 group-hover:text-neon-yellow font-ibm transition-colors duration-300">
            <span>Explore Service</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.div>
  );
}
