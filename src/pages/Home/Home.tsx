import { useRef, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { motion, useScroll, useTransform } from 'framer-motion';
import { services } from '@/data/services';
import ourCore from '@/assets/images/our core.webp';
import heroVideo from '@/assets/video/Geometric-video.mp4';
import { SEO, Schemas } from '@/components/seo/SEO';
import { 
  Box, 
  Wind, 
  Layers, 
  Zap,
  ArrowRight,
  Sparkles,
  Mountain,
  Video,
  Eye,
  Star,
  CheckCircle2,
  Users,
  Briefcase,
  Quote,
  Activity,
  ShieldCheck
} from 'lucide-react';

import { ServiceCard } from './components/ServiceCard';
import { PortfolioHorizontalSection } from './components/PortfolioHorizontalSection';

const techStack = [
  { name: 'Blender', category: '3D/Modeling', spec: 'Cycles/Eevee', icon: Box },
  { name: 'Cinema 4D', category: 'Motion/Design', spec: 'Redshift', icon: Layers },
  { name: 'Unreal Engine', category: 'Real-time/VR', spec: 'Lumen/Nanite', icon: Zap },
  { name: 'Houdini', category: 'Simulation/FX', spec: 'Vellum/Pyro', icon: Wind },
  { name: 'After Effects', category: 'Compositing', spec: 'Multi-Pass', icon: Video },
  { name: 'ZBrush', category: 'Sculpting', spec: 'Dynamesh', icon: Mountain },
  { name: 'Midjourney', category: 'Generative AI', spec: 'V6_PRO', icon: Sparkles },
  { name: 'Nuke', category: 'High-End Comp', spec: 'Deep Comp', icon: Eye },
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
    location: "Global_HQ"
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
    location: "Project_Node_03"
  },
];

const stats = [
  { value: '5+', label: 'Years of Excellence', icon: Star },
  { value: '200+', label: 'Projects Delivered', icon: CheckCircle2 },
  { value: '80+', label: 'Happy Clients', icon: Users },
  { value: '12', label: 'Creative Services', icon: Briefcase },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="bg-background">
      <SEO
        title="Geometric Studio | 3D Visualization & Motion Graphics"
        description="Geometric Studio — premier 3D visualization and motion graphics studio. Award-winning cinematic 3D, product animation, anamorphic screens, VR environments, and AI-powered content for brands globally."
        keywords="motion graphics, 3D studio, 3D visualization, product animation, cinematic 3D, anamorphic screens, VR environments, CGI, motion graphics studio, 3D advertising"
        ogType="website"
        schema={[
          Schemas.organization(),
          Schemas.website(),
          Schemas.localBusiness(),
          Schemas.breadcrumb([{ name: 'Home', url: '/' }]),
          Schemas.videoObject({
            name: 'Geometric Studio Showreel 2024',
            description: 'A cinematic showreel showcasing Geometric Studio 3D visualization, motion graphics, and immersive visual experiences.',
            thumbnailUrl: 'https://geometric-studios.com/assets/og-image.png',
            uploadDate: '2024-01-01',
            duration: 'PT2M30S',
          }),
        ]}
      />
      {/* ─── PREMIUM CINEMATIC HERO ────────────────────────── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero - Geometric Studio Showreel">
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
            aria-hidden="true"
            title="Geometric Studio cinematic showreel background"
            className="w-full h-full object-cover"
          />
                {/* Balanced Cinematic Overlays - Optimized for legibility while keeping video bright */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent opacity-80" />
        </motion.div>

        {/* Cinematic Light Leak (Animated) - Optimized for smoothness */}
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ willChange: "opacity" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10" 
        />

        {/* Floating cinematic particles/orbs - Memoized for performance */}
        {useMemo(() => [...Array(5)].map((_, i) => (
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
            style={{ willChange: "transform, opacity" }}
            className="absolute w-1 h-1 bg-neon-yellow rounded-full pointer-events-none z-20"
          />
        )), [])}

        {/* Premium ambient glows */}
        <div className="absolute top-1/2 -left-1/4 w-[600px] h-[600px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute -bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 md:px-12 max-w-[1400px] mx-auto pt-24 md:pt-40">
          {/* Decorative Grid Lines - Hidden on small mobile for clarity */}
          <div className="absolute -top-10 left-0 w-[1px] h-[300px] bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
          <div className="absolute top-0 -left-10 h-[1px] w-[300px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-20">
            <div className="w-full lg:w-3/5 space-y-6 md:space-y-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-center lg:justify-start gap-4 md:gap-8"
              >
                <div className="flex flex-col gap-1 items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                    <span className="text-[9px] md:text-[10px] font-ibm text-neon-yellow tracking-[0.3em] md:tracking-[0.4em] uppercase font-light">
                      Geometric Studios • Integrated.Node
                    </span>
                  </div>
                  <div className="w-24 h-[1px] bg-white/10" />
                  <span className="text-[8px] font-ibm text-white/20 tracking-[0.2em] uppercase font-light italic">System.Version.4.0.Stable</span>
                </div>
              </motion.div>

              <div className="relative w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.02 }}
                  className="absolute -top-6 md:-top-12 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 text-[18vw] xs:text-7xl md:text-8xl lg:text-9xl font-black text-white pointer-events-none select-none uppercase tracking-tighter w-full text-center lg:text-left whitespace-nowrap"
                >
                  Creative
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="font-ibm text-[13vw] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[100px] 2xl:text-[130px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] relative"
                >
                  Every Pixel <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-neon-yellow/90 to-neon-yellow/30 block sm:inline">
                    Matters.
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="font-ibm text-creamy-white/80 text-xs sm:text-sm md:text-base lg:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed font-light tracking-wide border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 mt-4 md:mt-0 drop-shadow-lg"
              >
                Your Next Vision Starts Here
                We’re ready to collaborate, design, and build visuals
                that move beyond the screen.
                Let’s connect and make it happen
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
                    className="relative group cursor-default p-4 lg:pr-10 lg:py-4 flex flex-col justify-center items-center lg:items-end bg-white/[0.02] lg:bg-transparent rounded-xl border border-white/5 lg:border-0"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-white/10 group-hover:bg-neon-yellow group-hover:w-12 transition-all duration-500 hidden lg:block" />
                    <div className="mb-2 text-white/10 group-hover:text-neon-yellow transition-colors duration-500">
                      <stat.icon size={20} strokeWidth={1} />
                    </div>
                    <div className="font-ibm text-2xl md:text-3xl font-light text-creamy-white group-hover:text-neon-yellow transition-colors duration-500 tracking-tighter mb-1">{stat.value}</div>
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
              style={{ willChange: "transform" }}
              animate={{ y: ['-100%', '200%'] }} 
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ─── PREMIUM STUDIO INTRO ─────────────────────── */}
      <section className="py-20 md:py-28 xl:py-40 px-6 relative bg-background overflow-hidden">
        {/* Cinematic background details */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        {/* Ambient light leaks */}
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-deep-teal/10 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 md:gap-24 lg:gap-32">
            <div className="w-full lg:w-3/5 space-y-12">
              <SectionReveal>
                <div className="inline-flex items-center gap-4 group">
                  <span className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/80">The Geometric Philosophy</span>
                </div>
              </SectionReveal>
              
              <SectionReveal delay={0.1}>
                <h2 className="font-ibm text-4xl sm:text-5xl md:text-6xl lg:text-[65px] xl:text-[85px] font-light text-white tracking-tighter leading-[1.1] lg:leading-[0.95]">
                  Surgical precision meets <br className="hidden lg:block"/>
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-neon-yellow/80 to-creamy-white glow-text-yellow block lg:inline mt-2 lg:mt-0">cinematic imagination.</span>
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
                        loading="lazy"
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

      {/* ─── PREMIUM SERVICES GALLERY ───────────────────── */}
      <section className="py-20 md:py-28 xl:py-32 px-6 bg-background relative overflow-hidden" aria-label="Our Core Service Disciplines">
        {/* Soft elegant background flow */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-deep-teal/[0.02] rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <SectionReveal>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-yellow shadow-[0_0_8px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/80">Core Disciplines</span>
                </div>
              <h2 className="font-ibm text-4xl xs:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white tracking-tight leading-[1] lg:leading-[0.9]">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow block sm:inline">Services.</span>
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <Link to="/services" className="group flex items-center gap-6 text-[10px] font-ibm tracking-[0.3em] uppercase text-creamy-white/50 hover:text-neon-yellow transition-all duration-500">
                <span className="relative">
                  Explore All Services
                  <div className="absolute -bottom-2 left-0 w-0 h-[1px] bg-neon-yellow group-hover:w-full transition-all duration-500" />
                </span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-neon-yellow group-hover:bg-neon-yellow/5 transition-all duration-500 text-white/20 group-hover:text-neon-yellow">
                  <ArrowRight size={18} strokeWidth={1.5} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[350px]">
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



      {/* ─── ENHANCED TESTIMONIALS (PERFORMANCE REPORTS) ──────── */}
      <section className="py-20 md:py-28 xl:py-40 px-6 relative bg-background">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
              <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/30 block mb-4 md:mb-6">Client Feedback • Secure.Log</span>
              <h2 className="font-ibm text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter uppercase leading-none">Operations <span className="italic text-neon-yellow block sm:inline">Analysis.</span></h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="relative group h-full">
                   <div className="glass-panel h-full rounded-[32px] md:rounded-[35px] p-6 sm:p-8 md:p-10 border-white/5 hover:border-neon-yellow/20 transition-all duration-700 flex flex-col relative overflow-hidden bg-white/[0.01] text-left">
                    {/* Header HUD */}
                    <div className="flex justify-between items-start mb-8 md:mb-12">
                       <div className="flex flex-col gap-1 text-left">
                          <span className="text-[7px] font-ibm text-white/20 tracking-tighter uppercase flex items-center justify-start gap-2">
                             <Activity size={8} className="text-neon-yellow" /> Report.Ref: GEOM.{i+1}
                          </span>
                          <span className="text-[7px] font-ibm text-neon-yellow tracking-tighter uppercase flex items-center justify-start gap-2">
                             <ShieldCheck size={8} /> Status: ENCRYPTED.OK
                          </span>
                       </div>
                       <div className="p-2 rounded-lg bg-white/[0.03] text-white/10">
                          <Quote size={16} strokeWidth={1} />
                       </div>
                    </div>
                    
                    <p className="font-ibm text-creamy-white/60 text-base md:text-lg leading-relaxed font-light mb-8 md:mb-12 italic group-hover:text-creamy-white transition-colors duration-700 text-left">“{t.quote}”</p>
                    
                    <div className="mt-auto pt-6 md:pt-8 border-t border-white/5">
                       <div className="flex justify-between items-end">
                          <div className="text-left">
                             <div className="font-ibm text-base md:text-lg font-medium text-white tracking-tight mb-1 uppercase leading-tight">{t.author}</div>
                             <div className="font-ibm text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.3em] font-light">{t.role}</div>
                          </div>
                          <div className="text-right">
                             <div className="font-ibm text-[7px] text-neon-yellow/40 uppercase mb-1 tracking-widest leading-none">{t.project}</div>
                             <div className="font-ibm text-[7px] text-white/10 uppercase tracking-widest leading-none">{t.location}</div>
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
