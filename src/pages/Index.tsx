import { useRef, lazy, Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SectionReveal, StaggerReveal } from '@/components/ui/SectionReveal';
import { AnimatePresence, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { services } from '@/data/services';
import { Logo } from '@/components/Logo';
import logo5 from '@/assets/images/Logo-5.png';
import ourCore from '@/assets/images/our core.jpg';
import heroVideo from '@/assets/video/Geometric-video.mp4';


const techStack = [
  { name: 'Blender', category: '3D/Modeling', spec: 'Cycles/Eevee' },
  { name: 'Cinema 4D', category: 'Motion/Design', spec: 'Redshift' },
  { name: 'Unreal Engine', category: 'Real-time/VR', spec: 'Lumen/Nanite' },
  { name: 'Houdini', category: 'Simulation/FX', spec: 'Vellum/Pyro' },
  { name: 'After Effects', category: 'Compositing', spec: 'Multi-Pass' },
  { name: 'ZBrush', category: 'Sculpting', spec: 'Dynamesh' },
  { name: 'Midjourney', category: 'Generative AI', spec: 'V6_PRO' },
  { name: 'Nuke', category: 'High-End Comp', spec: 'Deep Comp' },
];

const clients = [
  'TechCorp', 'ExpoGiant', 'PropDev', 'Lumina Group', 'Nexus Media', 'Aether Lux', 'Geometric Global'
];

const testimonials = [
  {
    quote: "Geometric transformed our product launch with visuals that stopped people in their tracks. Pure cinematic quality.",
    author: "Ahmed Khalil",
    role: "Marketing Director",
    project: "Launch_System_V4",
    location: "Cairo_HQ"
  },
  {
    quote: "The booth design they created was the talk of the entire exhibition. Every detail was executed with surgical precision.",
    author: "Sara Mostafa",
    role: "Brand Manager",
    project: "Exhibition_Architect",
    location: "Global_Expo"
  },
  {
    quote: "Their VR environment exceeded every expectation. Our clients felt like they were actually inside the building.",
    author: "Omar Hassan",
    role: "CEO, PropDev",
    project: "Immersive_Habit",
    location: "New_Capital"
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

      {/* ─── CINEMATIC STICKY HORIZONTAL PORTFOLIO ────────────── */}
      <PortfolioHorizontalSection />


      {/* ─── CLIENT MARQUEE ───────────────────────── */}
      <section className="py-12 bg-background border-y border-white/5 overflow-hidden whitespace-nowrap flex select-none relative">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
        <div className="animate-marquee flex gap-32 items-center flex-shrink-0 opacity-20 grayscale">
          {clients.map((client) => (
             <span key={client} className="font-ibm font-light text-xs text-white tracking-[0.5em] uppercase">{client} // Global_Partner</span>
          ))}
          {clients.map((client) => (
             <span key={`${client}-2`} className="font-ibm font-light text-xs text-white tracking-[0.5em] uppercase">{client} // Global_Partner</span>
          ))}
        </div>
      </section>

      {/* ─── THE LABORATORY (TECH CORE) ───────────────── */}
      <section className="py-40 px-6 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.02)_0%,transparent_100%)]" />
        <div className="max-w-[1400px] mx-auto relative z-10">
           <div className="flex flex-col items-center text-center mb-24">
              <span className="text-[10px] font-ibm tracking-[0.6em] text-neon-yellow mb-6 uppercase">System Capabilities</span>
              <h2 className="font-satoshi text-5xl md:text-8xl font-light text-white tracking-tighter uppercase leading-none">
                Technical <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-white/20">Laboratory.</span>
              </h2>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
              {techStack.map((tech, i) => (
                <div key={i} className="group relative bg-background p-10 hover:bg-neon-yellow/[0.02] transition-colors duration-700">
                  <div className="absolute top-4 right-4 text-[7px] font-ibm text-white/10 group-hover:text-neon-yellow/30 transition-colors tracking-widest uppercase">ID: 0{i+1}_NODE</div>
                  <div className="flex flex-col gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-neon-yellow/20 transition-all duration-700 relative">
                       <div className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-neon-yellow transition-colors" />
                       <div className="absolute inset-x-[-10px] h-px bg-white/5 group-hover:bg-neon-yellow/20 transition-all scale-x-0 group-hover:scale-x-100" />
                    </div>
                    <div>
                      <h4 className="font-satoshi text-xl text-white tracking-wide group-hover:text-neon-yellow transition-colors mb-2 uppercase">{tech.name}</h4>
                      <div className="flex flex-col gap-1 items-start text-[8px] font-ibm tracking-widest text-white/30 uppercase">
                        <span className="group-hover:text-white/60 transition-colors">Category: {tech.category}</span>
                        <span className="text-neon-yellow/40">Spec: {tech.spec}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* ─── ENHANCED TESTIMONIALS (PERFORMANCE REPORTS) ──────── */}
      <section className="py-40 px-6 relative bg-background">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-center justify-center text-center mb-24">
              <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/30 block mb-6">Client Feedback // Secure_Log</span>
              <h2 className="font-satoshi text-5xl md:text-7xl font-light text-white tracking-tighter uppercase">Operations <span className="italic text-neon-yellow">Analysis.</span></h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="relative group h-full">
                  <div className="glass-panel h-full rounded-[35px] p-10 border-white/5 hover:border-neon-yellow/20 transition-all duration-700 flex flex-col relative overflow-hidden bg-white/[0.01]">
                    {/* Header HUD */}
                    <div className="flex justify-between items-start mb-12">
                       <div className="flex flex-col gap-1">
                          <span className="text-[7px] font-ibm text-white/20 tracking-tighter uppercase">Report_Ref: GEOM_{i+1}</span>
                          <span className="text-[7px] font-ibm text-neon-yellow tracking-tighter uppercase">Status: ENCRYPTED_OK</span>
                       </div>
                       <div className="w-4 h-4 border border-white/10 flex items-center justify-center">
                          <div className="w-1 h-1 bg-neon-yellow animate-pulse" />
                       </div>
                    </div>
                    
                    <p className="font-ibm text-creamy-white/60 text-lg leading-relaxed font-light mb-12 italic group-hover:text-creamy-white transition-colors duration-700">“{t.quote}”</p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5">
                       <div className="flex justify-between items-end">
                          <div>
                             <div className="font-satoshi text-lg font-medium text-white tracking-tight mb-1 uppercase">{t.author}</div>
                             <div className="font-ibm text-[9px] text-white/30 uppercase tracking-[0.3em] font-light">{t.role}</div>
                          </div>
                          <div className="text-right">
                             <div className="font-ibm text-[7px] text-neon-yellow/40 uppercase mb-1 tracking-widest">{t.project}</div>
                             <div className="font-ibm text-[7px] text-white/10 uppercase tracking-widest">{t.location}</div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
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

function PortfolioHorizontalSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  
  // Use a state to detect desktop for the sticky effect
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className={`relative bg-background ${isDesktop ? 'h-[300vh]' : 'py-20'}`}>
      <div className={`${isDesktop ? 'sticky top-0 h-screen flex flex-col justify-center overflow-hidden' : 'px-6'}`}>
        <div className="mb-12 max-w-[1400px] mx-auto w-full">
           <SectionReveal>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                 <div>
                    <div className="flex items-center gap-3 mb-4">
                       <div className="w-12 h-px bg-neon-yellow shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                       <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow">Showcase</span>
                    </div>
                    <h2 className="font-satoshi text-5xl md:text-8xl font-light text-white tracking-tighter leading-[0.9] uppercase">
                       Selected <br />
                       <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20">Masterpieces.</span>
                    </h2>
                 </div>
                 
                 {isDesktop && (
                   <div className="hidden lg:block">
                      <div className="flex flex-col items-end gap-2 pr-10 border-r border-white/10">
                         <span className="text-[8px] font-ibm text-white/30 tracking-[0.5em] uppercase">Scroll Direction</span>
                         <div className="flex items-center gap-4">
                            <span className="text-[10px] font-ibm text-neon-yellow uppercase">Horizontal</span>
                            <div className="w-20 h-px bg-gradient-to-r from-neon-yellow to-transparent" />
                         </div>
                      </div>
                   </div>
                 )}
              </div>
           </SectionReveal>
        </div>

        {isDesktop ? (
          <motion.div style={{ x }} className="flex gap-8 px-6 lg:px-[10vw]">
            {services.slice(0, 5).map((service, i) => (
              <FeaturedProjectCard key={service.id} service={service} index={i} />
            ))}
            
            {/* Final CTA Card */}
            <div className="flex-shrink-0 w-[80vw] md:w-[400px] flex items-center justify-center">
               <Link to="/portfolio" className="group flex flex-col items-center gap-6">
                  <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-yellow/50 group-hover:bg-neon-yellow/5 transition-all duration-700">
                     <span className="text-3xl text-white transform group-hover:translate-x-2 transition-transform duration-500">→</span>
                  </div>
                  <div className="text-center">
                     <div className="font-ibm text-[10px] tracking-[0.5em] uppercase text-white/30 mb-2">Portfolio</div>
                     <div className="font-satoshi text-xl text-white uppercase tracking-widest group-hover:text-neon-yellow transition-colors">View All Works</div>
                  </div>
               </Link>
            </div>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-12">
            {services.slice(0, 4).map((service, i) => (
              <FeaturedProjectCard key={service.id} service={service} index={i} />
            ))}
            <div className="py-12 flex justify-center">
              <Link to="/portfolio" className="group flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border border-neon-yellow/30 flex items-center justify-center">
                   <span className="text-white">→</span>
                </div>
                <span className="font-ibm text-[10px] tracking-[0.4em] uppercase text-neon-yellow">View All Projects</span>
              </Link>
            </div>
          </div>
        )}

        {/* Technical Progress Bar - Desktop Only */}
        {isDesktop && (
          <div className="absolute bottom-12 left-[10vw] right-[10vw] h-px bg-white/5 hidden md:block">
             <motion.div 
               className="absolute top-0 left-0 h-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]"
               style={{ width: scrollYProgress }} 
             />
             <div className="absolute -top-6 left-0 font-ibm text-[7px] text-white/20 tracking-widest uppercase">System_Nav // Portfolio_01</div>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedProjectCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="flex-shrink-0 w-[85vw] md:w-[600px] lg:w-[800px] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/portfolio`} className="block relative aspect-[16/9] rounded-[40px] overflow-hidden glass-panel p-2 transition-all duration-700 hover:p-3">
        <div className="w-full h-full rounded-[32px] overflow-hidden relative">
          
          {/* Glitch-like image container */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.img
              src={service.heroImage}
              alt={service.name}
              animate={{ 
                scale: isHovered ? 1.02 : 1.1,
                x: isHovered ? [0, -2, 2, 0] : 0, // Micro glitch
              }}
              transition={{ 
                scale: { duration: 1.5, ease: "easeOut" },
                x: { duration: 0.2, repeat: isHovered ? Infinity : 0, repeatType: "mirror" }
              }}
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale-[0.8] group-hover:grayscale-0 transition-opacity duration-1000"
            />
          </div>
          
          {/* HUD Brackets */}
          <div className="absolute inset-8 pointer-events-none">
             <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:-translate-x-2 group-hover:-translate-y-2" />
             <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:translate-x-2 group-hover:-translate-y-2" />
             <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:-translate-x-2 group-hover:translate-y-2" />
             <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 transition-all duration-700 group-hover:border-neon-yellow group-hover:translate-x-2 group-hover:translate-y-2" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
          
          {/* Metadata corner */}
          <div className="absolute top-10 right-10 flex flex-col items-end gap-2 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
             <div className="px-3 py-1 rounded-sm bg-background/80 backdrop-blur-md border border-white/10 text-[7px] text-white font-ibm tracking-[0.2em] uppercase">Resolution: 8K_NATIVE</div>
             <div className="px-3 py-1 rounded-sm bg-background/80 backdrop-blur-md border border-white/10 text-[7px] text-white font-ibm tracking-[0.2em] uppercase">Engine: RayTracing_MAX</div>
          </div>

          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center gap-4 mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
               <span className="px-3 py-1 rounded-full bg-neon-yellow text-background text-[8px] font-ibm font-bold tracking-[0.2em] uppercase">Featured</span>
               <span className="text-[10px] text-white/50 font-ibm tracking-[0.3em] uppercase">{service.category}</span>
            </div>
            
            <div className="flex items-end justify-between">
               <div className="max-w-xl">
                  <h3 className="font-satoshi text-4xl md:text-6xl font-light text-white tracking-tighter leading-none mb-4 uppercase group-hover:text-neon-yellow transition-colors duration-500">
                    {service.name}
                  </h3>
                  <div className={`h-[1px] bg-neon-yellow/30 transition-all duration-1000 ${isHovered ? 'w-full' : 'w-0'}`} />
               </div>
               
               <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white transform rotate-[-45deg] group-hover:rotate-0 group-hover:border-neon-yellow group-hover:text-neon-yellow transition-all duration-700 overflow-hidden relative">
                  <motion.span 
                    animate={isHovered ? { x: [0, 40, -40, 0] } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-2xl"
                  >
                    →
                  </motion.span>
               </div>
            </div>
          </div>
        </div>

        {/* Scanning Line */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ top: '-10%' }}
              animate={{ top: '110%' }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-px bg-neon-yellow shadow-[0_0_15px_rgba(204,255,0,0.8)] z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>
      </Link>
    </motion.div>
  );
}

