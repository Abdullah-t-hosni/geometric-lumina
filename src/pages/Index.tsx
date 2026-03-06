import { lazy, Suspense, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { SectionReveal, StaggerReveal } from '@/components/ui/SectionReveal';
import { services } from '@/data/services';

const WireframeGlobe = lazy(() => import('@/components/three/WireframeGlobe'));

const processSteps = [
  { num: '01', label: 'Discovery' },
  { num: '02', label: 'Concept' },
  { num: '03', label: '3D Modeling' },
  { num: '04', label: 'Simulation' },
  { num: '05', label: 'Animation' },
  { num: '06', label: 'Rendering' },
  { num: '07', label: 'Delivery' },
];

const techStack = [
  'Blender', 'Cinema 4D', 'Unreal Engine', 'Houdini', 'After Effects', 'Premiere Pro', 'ZBrush', 'Substance 3D', 'Midjourney', 'Stable Diffusion', 'DaVinci Resolve', 'Nuke',
];

const testimonials = [
  {
    quote: "Geometric transformed our product launch with visuals that stopped people in their tracks. Pure cinematic quality.",
    author: "Ahmed Khalil",
    role: "Marketing Director, TechCorp Egypt",
  },
  {
    quote: "The booth design they created was the talk of the entire exhibition. Every detail was executed with surgical precision.",
    author: "Sara Mostafa",
    role: "Brand Manager, ExpoGiant",
  },
  {
    quote: "Their VR environment exceeded every expectation. Our clients felt like they were actually inside the building.",
    author: "Omar Hassan",
    role: "CEO, PropDev Developments",
  },
];

const stats = [
  { value: '5+', label: 'Years of Excellence' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '80+', label: 'Happy Clients' },
  { value: '12', label: 'Creative Services' },
];

export default function Index() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-background">
      {/* ─── HERO ─────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Globe background */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="w-full h-full max-w-2xl mx-auto opacity-80">
            <Suspense fallback={null}>
              <WireframeGlobe />
            </Suspense>
          </div>
        </motion.div>

        {/* Scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 3px)' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-neon-yellow/30 text-neon-yellow text-xs font-ibm tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon-yellow animate-pulse" />
            Precision in Imagination
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-satoshi text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tight mb-6"
          >
            Where Creativity
            <br />
            <span className="text-neon-yellow glow-text-yellow">Meets Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-ibm text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Egypt's premier 3D creative studio — delivering cinematic visuals that captivate, communicate, and convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/portfolio"
              className="px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--neon-yellow)/0.4)]"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border border-foreground/30 text-foreground font-satoshi font-bold text-sm tracking-wider uppercase hover:border-neon-yellow hover:text-neon-yellow transition-all duration-300"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground font-ibm tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-10 bg-gradient-to-b from-neon-yellow to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── STUDIO INTRO ─────────────────────── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div className="flex items-start gap-8 mb-8">
              <div className="w-12 h-px bg-neon-yellow mt-4 flex-shrink-0" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Our Core</span>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-satoshi text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-8">
              <span className="text-muted-foreground">Creativity</span> guides us.{' '}
              <span className="text-neon-yellow">Precision</span> defines us.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-ibm text-muted-foreground text-lg md:text-xl leading-relaxed max-w-3xl">
              We blend art and technology to transform ideas into captivating visuals crafted with care, purpose, and imagination. Every project reflects our passion for quality, our belief in innovation, and our commitment to trust.
            </p>
          </SectionReveal>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, i) => (
              <SectionReveal key={stat.label} delay={0.1 * i}>
                <div className="border border-border p-6 hover:border-neon-yellow/50 transition-colors duration-300 group">
                  <div className="font-satoshi text-4xl font-black text-neon-yellow mb-2 group-hover:glow-text-yellow transition-all">
                    {stat.value}
                  </div>
                  <div className="font-ibm text-xs text-muted-foreground tracking-widest uppercase">{stat.label}</div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────── */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center justify-between mb-16">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-neon-yellow" />
                  <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">What We Do</span>
                </div>
                <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground">Our Services</h2>
              </div>
              <Link to="/services" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                View All <span>→</span>
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center justify-between mb-16">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-neon-yellow" />
                  <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Featured Work</span>
                </div>
                <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground">Selected Projects</h2>
              </div>
              <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                Full Portfolio <span>→</span>
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.slice(0, 6).map((service, i) => (
              <FeaturedProjectCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS TIMELINE ─────────────────── */}
      <section className="py-24 px-6 bg-card overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-px bg-neon-yellow" />
                <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">How We Work</span>
                <div className="w-8 h-px bg-neon-yellow" />
              </div>
              <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground">Creative Process</h2>
            </div>
          </SectionReveal>

          <div className="flex flex-wrap justify-center gap-0">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.num} step={step} index={i} isLast={i === processSteps.length - 1} />
            ))}
          </div>

          <SectionReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link to="/process" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                Explore the full process <span>→</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── TECH STACK ───────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-px bg-neon-yellow" />
                <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Our Arsenal</span>
                <div className="w-8 h-px bg-neon-yellow" />
              </div>
              <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground">Technology Stack</h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {techStack.map((tech, i) => (
              <SectionReveal key={tech} delay={i * 0.05}>
                <div className="border border-border p-4 text-center hover:border-neon-yellow/60 hover:bg-neon-yellow/5 transition-all duration-300 group cursor-default">
                  <span className="font-ibm text-sm text-muted-foreground group-hover:text-neon-yellow transition-colors">{tech}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────── */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="mb-16 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-px bg-neon-yellow" />
                <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Client Stories</span>
                <div className="w-8 h-px bg-neon-yellow" />
              </div>
              <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground">What Clients Say</h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="border border-border p-8 hover:border-deep-teal/60 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-yellow/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="font-satoshi text-5xl text-neon-yellow/30 mb-4 leading-none">"</div>
                  <p className="font-ibm text-muted-foreground text-sm leading-relaxed mb-6 italic">{t.quote}</p>
                  <div>
                    <div className="font-satoshi font-bold text-foreground text-sm">{t.author}</div>
                    <div className="font-ibm text-xs text-muted-foreground mt-1">{t.role}</div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────── */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-deep-teal/10 to-background" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[500px] rounded-full bg-deep-teal/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionReveal>
            <h2 className="font-satoshi text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-tight mb-6">
              Your Next Vision
              <br />
              <span className="text-neon-yellow">Starts Here</span>
            </h2>
            <p className="font-ibm text-muted-foreground text-lg mb-10">
              We're ready to collaborate, design, and build visuals that move beyond the screen. Let's connect and make it happen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--neon-yellow)/0.4)]"
            >
              Let's Connect
              <span>→</span>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

// ─── Sub Components ────────────────────────────────

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group block border border-border bg-background hover:border-neon-yellow/50 transition-all duration-400 overflow-hidden relative"
      >
        {/* Image */}
        <div className="aspect-video overflow-hidden relative">
          <img
            src={service.image}
            alt={service.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-background/60 group-hover:bg-background/30 transition-colors duration-300" />
          <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-neon-yellow/40 group-hover:border-neon-yellow group-hover:bg-neon-yellow/10 transition-all duration-300">
            <span className="text-neon-yellow text-xs">→</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-satoshi font-bold text-sm text-foreground group-hover:text-neon-yellow transition-colors duration-300 mb-1 leading-tight">
            {service.name}
          </h3>
          <p className="font-ibm text-xs text-muted-foreground line-clamp-2 leading-relaxed">
            {service.tagline}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-neon-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </Link>
    </motion.div>
  );
}

function FeaturedProjectCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/portfolio`} className="group block relative overflow-hidden aspect-[4/3]">
        <img
          src={service.heroImage}
          alt={service.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">{service.category}</span>
          <h3 className="font-satoshi text-xl font-bold text-foreground mt-1">{service.name}</h3>
          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground font-ibm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            View Project <span>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function ProcessStep({ step, index, isLast }: { step: typeof processSteps[0]; index: number; isLast: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="flex items-center"
    >
      <div className="flex flex-col items-center text-center p-4 w-28 group cursor-default">
        <div className="w-12 h-12 border border-border group-hover:border-neon-yellow flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-neon-yellow/10">
          <span className="font-satoshi font-black text-sm text-neon-yellow">{step.num}</span>
        </div>
        <span className="font-ibm text-xs text-muted-foreground group-hover:text-foreground transition-colors">{step.label}</span>
      </div>
      {!isLast && (
        <div className="w-6 h-px bg-border flex-shrink-0" />
      )}
    </motion.div>
  );
}
