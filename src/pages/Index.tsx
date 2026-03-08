import { useRef, lazy, Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionReveal, StaggerReveal } from '@/components/ui/SectionReveal';
import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { services } from '@/data/services';
import { Logo } from '@/components/Logo';
import logo5 from '@/assets/images/Logo-5.png';
import ourCore from '@/assets/images/our core.jpg';
import heroVideo from '@/assets/video/Geometric-video.mp4';

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
      {/* ─── PREMIUM CINEMATIC HERO ─────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          {/* Balanced Cinematic Overlays - Stronger contrast for text readability */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/60 to-transparent opacity-90" />
        </motion.div>

        {/* Cinematic Light Leak (Animated) - Optimized for smoothness */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10" 
        />

        {/* Floating cinematic particles/orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: ["0%", "-20%"],
              opacity: [0, 0.2, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
            className="absolute w-1 h-1 bg-neon-yellow rounded-full blur-[2px] pointer-events-none z-20"
          />
        ))}

        {/* Premium ambient glows */}
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 md:px-12 max-w-[1400px] mx-auto pt-32 md:pt-20">
          {/* Decorative Grid Lines - Hidden on small mobile for clarity */}
          <div className="absolute -top-10 left-0 w-[1px] h-[300px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="absolute top-0 -left-10 h-[1px] w-[300px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-3/5 space-y-6 md:space-y-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center lg:justify-start gap-4 md:gap-6"
              >
                <div className="flex flex-col gap-1 hidden sm:flex">
                   <div className="w-8 md:w-12 h-[1px] bg-neon-yellow shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                   <div className="w-4 md:w-6 h-[1px] bg-neon-yellow/30" />
                </div>
                <span className="text-[9px] md:text-[10px] font-ibm text-neon-yellow tracking-[0.3em] md:tracking-[0.4em] uppercase font-light">
                  Geometric Studios / Precision Rendering
                </span>
              </motion.div>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.02 }}
                  className="absolute -top-8 md:-top-12 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-6xl md:text-8xl lg:text-9xl font-black text-white pointer-events-none select-none uppercase tracking-tighter w-full"
                >
                  Creative
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-satoshi text-4xl sm:text-6xl md:text-8xl lg:text-[110px] xl:text-[130px] font-light text-white leading-[1] md:leading-[0.85] tracking-tighter drop-shadow-2xl relative"
                >
                  We Bend <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-neon-yellow/90 to-neon-yellow/30 glow-text-yellow italic block sm:inline">
                    Reality.
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="font-ibm text-creamy-white/50 text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light tracking-wide border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 mt-4 md:mt-0"
              >
                Cairo-based creative powerhouse crafting cinematic 3D visuals, motion graphics, and robust experiences that refuse to be ignored.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 md:gap-8 pt-4 md:pt-6"
              >
                <Link
                  to="/portfolio"
                  className="group relative px-10 md:px-12 py-4 md:py-5 overflow-hidden rounded-full transition-all duration-500 text-center"
                >
                  <div className="absolute inset-0 bg-neon-yellow transition-transform duration-500 group-hover:scale-105" />
                  <span className="relative z-10 font-ibm font-medium text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-background">
                    Explore Works
                  </span>
                </Link>
                <Link
                  to="/contact"
                  className="group relative px-10 md:px-12 py-4 md:py-5 overflow-hidden rounded-full border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-white/30 text-center"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 font-ibm font-light text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-creamy-white">
                    Start Inquiry
                  </span>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="w-full lg:w-2/5 flex flex-row lg:flex-col items-center lg:items-end justify-center lg:justify-start gap-4 md:gap-8 lg:gap-4 relative mt-12 lg:mt-0"
            >
              {/* Vertical technical line - Hidden on small mobile */}
              <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
              
              <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4 w-full max-w-sm lg:max-w-none">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: 1.2 + (i * 0.1), 
                      ease: [0.16, 1, 0.3, 1] 
                    }}
                    whileHover={{ x: -10, transition: { duration: 0.4 } }}
                    className="relative group cursor-default p-4 lg:pr-10 lg:py-4 flex flex-col items-center lg:items-end bg-white/[0.02] lg:bg-transparent rounded-xl border border-white/5 lg:border-0"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-white/10 group-hover:bg-neon-yellow group-hover:w-12 transition-all duration-500 hidden lg:block" />
                    <div className="font-satoshi text-2xl md:text-3xl font-light text-creamy-white group-hover:text-neon-yellow transition-colors duration-500 tracking-tighter mb-1">{stat.value}</div>
                    <div className="font-ibm text-[8px] md:text-[9px] text-creamy-white/30 tracking-[0.2em] md:tracking-[0.3em] uppercase font-light group-hover:text-creamy-white/60 transition-colors text-center lg:text-right">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mt-6 md:mt-12 lg:mr-10 p-4 md:p-6 glass-panel border-white/5 flex flex-col items-center lg:items-end gap-1 md:gap-2 hidden sm:flex"
              >
                <div className="text-[7px] md:text-[8px] font-ibm text-neon-yellow tracking-[0.5em] uppercase opacity-50">Precision Rendered</div>
                <div className="text-[9px] md:text-[10px] font-ibm text-creamy-white font-light uppercase tracking-[0.2em]">64-Bit / 120FPS</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[10px] text-creamy-white/50 font-ibm tracking-[0.3em] uppercase">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-white/10 overflow-hidden">
            <motion.div 
              className="w-full h-1/2 bg-neon-yellow" 
              animate={{ y: ['-100%', '200%'] }} 
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── PREMIUM STUDIO INTRO ─────────────────────── */}
      <section className="py-32 md:py-40 px-6 relative bg-background overflow-hidden">
        {/* Cinematic background details */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Ambient light leaks */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-deep-teal/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-32">
            <div className="w-full lg:w-3/5 space-y-12">
              <SectionReveal>
                <div className="inline-flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/80">The Geometric Philosophy</span>
                </div>
              </SectionReveal>
              
              <SectionReveal delay={0.1}>
                <h2 className="font-satoshi text-4xl md:text-6xl lg:text-[85px] font-light text-white tracking-tighter leading-[0.95]">
                  Surgical precision meets <br className="hidden md:block"/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-neon-yellow/80 to-creamy-white glow-text-yellow">cinematic imagination.</span>
                </h2>
              </SectionReveal>
              
              <SectionReveal delay={0.2}>
                <p className="font-ibm text-creamy-white/50 text-base md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light border-l border-white/10 pl-8">
                  We blend raw artistic talent with cutting-edge technology to create visuals that transcend traditional boundaries. Every render, motion, and frame is crafted with obsession.
                </p>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="pt-4">
                  <Link to="/about" className="text-[10px] font-ibm tracking-[0.3em] uppercase text-neon-yellow hover:text-white transition-colors">
                    Learn more about our vision →
                  </Link>
                </div>
              </SectionReveal>
            </div>

            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
              <SectionReveal delay={0.4}>
                <div className="relative group max-w-[400px]">
                   {/* Cinematic Image Frame */}
                   <div className="relative aspect-[3/4] overflow-hidden rounded-2xl glass-panel p-2 shadow-2xl">
                      <div className="absolute inset-0 bg-neon-yellow/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <img 
                        src={ourCore} 
                        alt="Geometric Excellence" 
                        className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                      
                      {/* Interactive metadata overlays */}
                      <div className="absolute bottom-6 left-6 right-6">
                         <div className="h-[1px] w-0 bg-white/20 mb-4 group-hover:w-full transition-all duration-700" />
                         <div className="flex justify-between items-end">
                            <span className="text-[10px] font-ibm text-white/40 tracking-[0.2em] uppercase">Visual Excellence</span>
                            <span className="text-[8px] font-ibm text-neon-yellow tracking-[0.3em] uppercase">M-02 / 2026</span>
                         </div>
                      </div>
                   </div>

                   {/* Floating background shape */}
                   <div className="absolute -top-10 -right-10 w-40 h-40 border border-white/5 rounded-full -z-10 group-hover:scale-110 group-hover:border-neon-yellow/20 transition-all duration-1000" />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PREMIUM SERVICES GALLERY ────────────────────── */}
      <section className="py-32 px-6 bg-background relative overflow-hidden">
        {/* Soft elegant background flow */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-deep-teal/[0.02] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-neon-yellow shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/80">Core Disciplines</span>
              </div>
              <h2 className="font-satoshi text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[0.9]">
                Our <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow">Expertise.</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <Link to="/services" className="group flex items-center gap-6 text-[10px] font-ibm tracking-[0.3em] uppercase text-creamy-white/50 hover:text-neon-yellow transition-all duration-500">
                <span className="relative">
                  Explore All Services
                  <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-neon-yellow group-hover:w-full transition-all duration-500" />
                </span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-yellow group-hover:bg-neon-yellow/5 transition-all duration-500">
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={i} 
                className={
                  i === 0 ? "lg:col-span-8 lg:row-span-2" : 
                  i === 1 ? "lg:col-span-4 lg:row-span-1" :
                  i === 2 ? "lg:col-span-4 lg:row-span-1" :
                  "lg:col-span-4 lg:row-span-1"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CINEMATIC FEATURED PROJECTS ────────────────── */}
      <section className="py-32 md:py-48 px-6 relative">
        <div className="absolute inset-0 bg-background pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] -z-0" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <SectionReveal>
            <div className="flex flex-col items-center justify-center text-center mb-24">
              <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/80 block mb-6">Portfolio</span>
              <h2 className="font-satoshi text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter leading-[0.9]">
                Selected <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Masterpieces.</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.slice(0, 4).map((service, i) => (
              <FeaturedProjectCard key={service.id} service={service} index={i} />
            ))}
          </div>
          
          <div className="mt-24 text-center">
             <Link to="/portfolio" className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden rounded-full border border-white/10 backdrop-blur-md transition-all duration-500">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative font-ibm text-[11px] tracking-[0.4em] uppercase text-creamy-white flex items-center gap-4">
                  View Full Showcase <span className="text-neon-yellow group-hover:translate-x-2 transition-transform duration-500">→</span>
                </span>
             </Link>
          </div>
        </div>
      </section>

      {/* ─── PREMIUM PIPELINE TIMELINE ─────────────────── */}
      <section className="py-40 px-6 bg-background relative overflow-hidden">
        {/* Technical flow background */}
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
        
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="text-center mb-32">
              <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow/60 block mb-6">Workflow Intelligence</span>
              <h2 className="font-satoshi text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tighter">The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-neon-yellow/80 to-creamy-white">Pipeline.</span></h2>
            </div>
          </SectionReveal>

          <PipelineWrapper />
        </div>
      </section>

      {/* ─── ELEGANT TECH STACK MARQUEE ───────────────────────── */}
      <section className="py-20 bg-background border-y border-white/5 overflow-hidden whitespace-nowrap flex select-none relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
        <div className="animate-marquee flex gap-24 items-center flex-shrink-0 opacity-20 grayscale hover:opacity-50 transition-opacity duration-1000">
          {techStack.map((tech) => (
             <span key={tech} className="font-satoshi font-light text-4xl text-white tracking-[0.1em] uppercase">{tech}</span>
          ))}
          {techStack.map((tech) => (
             <span key={`${tech}-2`} className="font-satoshi font-light text-4xl text-white tracking-[0.1em] uppercase">{tech}</span>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────── */}
      <section className="py-40 px-6 relative bg-background">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-center justify-center text-center mb-24">
              <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/30 block mb-6">Industry Voice</span>
              <h2 className="font-satoshi text-5xl md:text-7xl font-light text-white tracking-tighter italic">The <span className="text-neon-yellow">Verdict.</span></h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-neon-yellow blur-[50px] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000" />
                  <div className="glass-panel h-full rounded-2xl p-12 hover:border-white/20 transition-all duration-700 flex flex-col items-center text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 font-ibm text-[8px] text-white/10 uppercase tracking-[0.5em] group-hover:text-neon-yellow/20">Ref. 00{i+1}</div>
                    
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-10 group-hover:border-neon-yellow/30 transition-all duration-700">
                       <span className="text-neon-yellow/50 text-2xl group-hover:text-neon-yellow">"</span>
                    </div>
                    
                    <p className="font-ibm text-creamy-white/60 text-lg leading-relaxed font-light mb-12 italic group-hover:text-creamy-white transition-colors duration-700">“{t.quote}”</p>
                    
                    <div className="mt-auto">
                      <div className="font-satoshi text-lg font-medium text-white tracking-tight mb-1">{t.author}</div>
                      <div className="font-ibm text-[9px] text-white/30 uppercase tracking-[0.3em] font-light">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PREMIUM FINAL CTA ──────────────────────────────── */}
      <section className="py-52 px-6 flex items-center justify-center text-center bg-background relative overflow-hidden">
        {/* Soft elegant glow behind CTA text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-yellow/[0.03] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-4xl w-full relative z-10">
          <SectionReveal>
            <h2 className="font-satoshi text-6xl md:text-8xl lg:text-[140px] font-light text-white tracking-tighter leading-[0.85] mb-16">
              Ready to <br/>
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/50 glow-text-yellow px-4">Elevate.</span>
            </h2>
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden rounded-full transition-all duration-500"
            >
              <div className="absolute inset-0 bg-neon-yellow group-hover:scale-105 transition-transform duration-500" />
              <span className="relative z-10 font-ibm font-medium text-[12px] tracking-[0.5em] uppercase text-background">
                Start A Conversation
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}

// ─── Sub Components ────────────────────────────────

function ServiceCard({ service, index, className }: { service: typeof services[0]; index: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: (index % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/services/${service.slug}`}
        data-cursor="DISCOVER"
        className="group block h-full rounded-[32px] border border-white/5 hover:border-white/20 transition-all duration-700 relative overflow-hidden bg-background/40 backdrop-blur-sm"
      >
        {/* Background Image with reveal effect */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={service.heroImage}
            alt={service.name}
            initial={{ scale: 1.1, filter: 'grayscale(1) brightness(0.3)' }}
            animate={{ 
              scale: isHovered ? 1.05 : 1.1,
              filter: isHovered ? 'grayscale(0.4) brightness(0.5)' : 'grayscale(1) brightness(0.3)',
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
          {/* Color Overlay */}
          <div 
            className={`absolute inset-0 opacity-40 mix-blend-overlay transition-colors duration-700 ${
              service.color === 'neon-yellow' ? 'bg-neon-yellow' :
              service.color === 'sky-blue' ? 'bg-sky-blue' :
              service.color === 'coral-red' ? 'bg-coral-red' :
              service.color === 'deep-teal' ? 'bg-deep-teal' :
              service.color === 'sea-green' ? 'bg-sea-green' :
              'bg-white'
            }`} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full p-8 md:p-10 flex flex-col">
          <div className="flex justify-between items-start mb-auto">
             <div className="flex flex-col gap-1">
                <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[7px] md:text-[8px] font-ibm tracking-[0.3em] uppercase text-creamy-white/40">
                  DISCIPLINE.00{index + 1}
                </div>
                <div className={`h-[1px] bg-current transition-all duration-700 ${isHovered ? 'w-full' : 'w-4'} ${
                  service.color === 'neon-yellow' ? 'text-neon-yellow' : 'text-white/20'
                }`} />
             </div>
             
             <motion.div 
               animate={{ rotate: isHovered ? 90 : 0 }}
               className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[10px] font-ibm transition-colors duration-500 ${isHovered ? 'border-neon-yellow/50 text-neon-yellow' : 'text-white/20'}`}
             >
                {service.icon}
             </motion.div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-satoshi font-light text-2xl md:text-4xl text-white tracking-tight leading-none group-hover:text-neon-yellow transition-colors duration-500 uppercase">
              {service.name}
            </h3>
            
            <p className="font-ibm text-xs md:text-sm font-light text-white/40 leading-relaxed max-w-md group-hover:text-white/80 transition-colors duration-700">
              {service.tagline}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className={`w-8 h-[1px] transition-all duration-500 group-hover:w-16 ${isHovered ? 'bg-neon-yellow' : 'bg-white/10'}`} />
              <span className={`font-ibm text-[9px] tracking-[0.4em] font-light uppercase transition-colors duration-500 ${isHovered ? 'text-white' : 'text-white/30'}`}>View Details</span>
            </div>
          </div>
        </div>

        {/* Scanning Line on hover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-neon-yellow/30 shadow-[0_0_15px_rgba(204,255,0,0.5)] z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* HUD Elements */}
        {index === 0 && (
           <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full border border-white/5 flex items-center justify-center hidden lg:flex pointer-events-none">
              <div className="w-24 h-24 rounded-full border border-neon-yellow/5 animate-spin-slow flex items-center justify-center border-dashed">
                 <div className="w-16 h-16 rounded-full border border-white/5 flex items-center justify-center">
                    <div className="w-1 h-1 bg-neon-yellow rounded-full shadow-[0_0_8px_rgba(204,255,0,0.8)]" />
                 </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[110%] h-[1px] bg-white/[0.03] rotate-45" />
                 <div className="w-[110%] h-[1px] bg-white/[0.03] -rotate-45" />
              </div>
           </div>
        )}
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
      transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/portfolio`} className="group block relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-2">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            src={service.heroImage}
            alt={service.name}
            loading="lazy"
            className="w-full h-full object-cover transform scale-[1.05] group-hover:scale-100 transition-transform duration-[1.5s] ease-out opacity-80 group-hover:opacity-100 grayscale-[0.5] group-hover:grayscale-0"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700" />
          
          <div className="absolute top-8 right-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
             <div className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[8px] text-white font-ibm tracking-[0.2em] uppercase">Rendered 8K</div>
          </div>

          <div className="absolute bottom-10 left-10 right-10">
            <div className="flex items-center gap-3 mb-4 opacity-70">
               <div className="w-6 h-[1px] bg-neon-yellow" />
               <span className="text-[9px] text-white font-ibm tracking-[0.3em] uppercase">{service.category}</span>
            </div>
            
            <div className="flex items-end justify-between">
               <h3 className="font-satoshi text-3xl md:text-4xl font-light text-white tracking-tighter transform group-hover:-translate-x-2 transition-transform duration-700">{service.name}</h3>
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:border-neon-yellow transition-all duration-700 ease-out">
                 <span className="text-xl">↗</span>
               </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function PipelineWrapper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
       {/* Preview Panel */}
       <div className="lg:col-span-5 relative order-2 lg:order-1">
          <div className="aspect-[4/3] rounded-[32px] overflow-hidden glass-panel p-2 shadow-2xl relative">
             <div className="absolute inset-0 bg-neon-yellow/5 mix-blend-overlay z-10" />
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.7 }}
                  className="w-full h-full bg-white/[0.02] flex items-center justify-center overflow-hidden rounded-2xl"
                >
                   {/* HUD Text for each step */}
                   <div className="absolute top-10 left-10 flex flex-col gap-2 z-20">
                      <span className="text-[10px] font-ibm text-neon-yellow tracking-[0.5em] uppercase">SYSTEM_CHECK // {processSteps[activeStep].label}</span>
                      <div className="w-20 h-[1px] bg-neon-yellow/30" />
                   </div>

                   <div className="flex flex-col items-center gap-4 opacity-20">
                      <div className="w-32 h-32 rounded-full border border-white/10 animate-spin-slow flex items-center justify-center">
                         <span className="font-satoshi text-6xl font-light">{processSteps[activeStep].num}</span>
                      </div>
                      <span className="font-ibm text-[8px] tracking-[1em] uppercase">Processing Data</span>
                   </div>
                </motion.div>
             </AnimatePresence>
             
             {/* Bottom Metadata */}
             <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end z-20">
                <div className="flex flex-col gap-2">
                   <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-3 bg-neon-yellow/20" />
                      ))}
                   </div>
                   <span className="text-[8px] font-ibm text-white/30 tracking-[0.2em] uppercase">Status: Optimal</span>
                </div>
                <div className="text-[10px] font-ibm text-neon-yellow/60 tracking-[0.2em] uppercase font-bold">Geometric // Pipeline</div>
             </div>
          </div>
       </div>

       {/* Steps Grid */}
       <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 order-1 lg:order-2">
          {processSteps.map((step, i) => (
            <ProcessStep 
              key={step.num} 
              step={step} 
              index={i} 
              isActive={activeStep === i} 
              onHover={() => setActiveStep(i)} 
            />
          ))}
       </div>
    </div>
  );
}

function ProcessStep({ step, index, isActive, onHover }: { step: typeof processSteps[0]; index: number; isActive: boolean; onHover: () => void; }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onHover}
      initial={{ opacity: 0, x: 20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      data-cursor={isActive ? "ACTIVE" : "SELECT"}
      className={`relative group p-6 rounded-3xl border transition-all duration-500 flex flex-col items-center justify-center text-center aspect-square cursor-pointer ${
        isActive ? 'bg-white/[0.05] border-neon-yellow/30 shadow-[0_0_20px_rgba(204,255,0,0.05)]' : 'border-white/5 hover:border-white/10'
      }`}
    >
      <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
      
      <div className={`font-satoshi font-light text-4xl mb-4 transition-all duration-700 italic ${isActive ? 'text-neon-yellow' : 'text-white/5 group-hover:text-neon-yellow/20'}`}>
        {step.num}
      </div>
      
      <div className={`w-1.5 h-1.5 rounded-full mb-4 transition-all duration-500 ${isActive ? 'bg-neon-yellow scale-150 shadow-[0_0_15px_rgba(204,255,0,0.8)]' : 'bg-white/10'}`} />
      
      <h4 className={`font-ibm font-light tracking-[0.2em] text-[9px] transition-colors uppercase ${isActive ? 'text-white' : 'text-white/40'}`}>
        {step.label}
      </h4>
    </motion.div>
  );
}
