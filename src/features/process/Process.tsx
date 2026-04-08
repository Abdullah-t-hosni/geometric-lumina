import { useState, useRef, useMemo } from 'react';
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '@/shared/ui/SectionReveal';
import { SEO, Schemas } from '@/shared/seo/SEO';
import { Compass, Lightbulb, Box, Wind, Play, Image as ImageIcon, PackageCheck, Activity, Cpu, ShieldCheck, Zap } from 'lucide-react';
import { getAsset } from '@/shared/utils/assetHelper';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    subtitle: 'Protocol.Analyze',
    icon: Compass,
    image: getAsset('Intro_Page'),
    color: 'neon-yellow',
    description: 'We begin by deeply understanding your brand, goals, and audience. Through discovery sessions and competitor research, we lay the intellectual foundation for everything that follows.',
    details: ['Brand deep-dive session', 'Target audience analysis', 'Competitor visual audit', 'Goals & KPI definition'],
    technical: ['Sector: Research', 'Axis: Strategy', 'Model: Deep_Node']
  },
  {
    num: '02',
    title: 'Concept',
    subtitle: 'Creative.Kernel',
    icon: Lightbulb,
    image: getAsset('our core'),
    color: 'sky-blue',
    description: 'Ideas take shape. Moodboards and style references explore multiple directions before we converge on the strongest concept that serves your vision and technical requirements.',
    details: ['Moodboard creation', 'Style exploration', 'Creative direction', 'Client feedback'],
    technical: ['Sector: Vision', 'Axis: Creative', 'Model: Logic_Core']
  },
  {
    num: '03',
    title: '3D Modeling',
    subtitle: 'Geometry.Forge',
    icon: Box,
    image: getAsset('Product Visualization & Animation'),
    color: 'coral-red',
    description: 'The concept becomes geometry. Our artists construct the digital world with meticulous attention to form, scale, and proportion — engineering every vertex for perfection.',
    details: ['Base mesh creation', 'Topology optimization', 'UV unwrapping', 'Detail sculpting'],
    technical: ['Sector: Build', 'Axis: Mesh', 'Model: Vertex_Flow']
  },
  {
    num: '04',
    title: 'Animation',
    subtitle: 'Motion.Engine',
    icon: Play,
    image: getAsset('Motion Graphics'),
    color: 'neon-yellow',
    description: 'Following the 12 Principles of Animation, every motion is intentional. Objects have weight, characters have personality, and the camera tells its own cinematic story.',
    details: ['Keyframe animation', 'Motion graph refinement', 'Camera choreography', 'Timing & spacing'],
    technical: ['Sector: Motion', 'Axis: Dynamics', 'Model: Kinematics']
  },
  {
    num: '05',
    title: 'Simulation',
    subtitle: 'Physics.Core',
    icon: Wind,
    image: getAsset('Simulations'),
    color: 'sea-green',
    description: 'Physics and dynamics breathe life into the scene. Fire, smoke, and fluid simulations are tuned with precision — chaos choreographed by technical expertise.',
    details: ['Physics setup', 'Particle systems', 'Fluid dynamics', 'Simulation caching'],
    technical: ['Sector: FX', 'Axis: Solver', 'Model: Vellum_SIM']
  },
  {
    num: '06',
    title: 'Rendering',
    subtitle: 'Light.Phase',
    icon: ImageIcon,
    image: getAsset('Social Media Content'),
    color: 'sky-blue',
    description: 'Light, shadow, and material transform models into photorealistic imagery. Our render pipeline balances quality and efficiency to deliver breathtaking results.',
    details: ['Lighting setup', 'Material work', 'Multi-pass rendering', 'Render optimization'],
    technical: ['Sector: Visual', 'Axis: Raytrace', 'Model: ACES_P3']
  },
  {
    num: '07',
    title: 'Delivery',
    subtitle: 'System.Sync',
    icon: PackageCheck,
    image: getAsset('Masterpiece Archive'),
    color: 'coral-red',
    description: 'Compositing and final polish bring everything together. The deliverable is packaged for your exact requirements — on time, every time, with zero compromise.',
    details: ['Compositing', 'Color grade', 'Format optimization', 'Final handoff'],
    technical: ['Sector: Output', 'Axis: Quality', 'Model: Final_Build']
  },
];

export default function Process() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-background min-h-screen overflow-x-hidden selection:bg-neon-yellow selection:text-background"
    >
      <SEO
        title="Premium Creative Pipeline"
        description="Explore Geometric Studio's 7-stage cinematic production pipeline. A surgically precise methodology designed for extraordinary visual engineering."
        keywords="3D production pipeline, creative process, 3D animation workflow, cinematic production pipeline"
        schema={[
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Process', url: '/process' },
          ]),
        ]}
      />

      {/* ─── PREMIUM HERO ────────────────────────────── */}
      <section className="px-6 relative pb-12 pt-36 md:pt-48 lg:pt-56 z-20">
        <div className="max-w-[1400px] mx-auto text-center">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <div className="mb-10" />
              
              <h1 className="font-ibm text-[14vw] xs:text-6xl md:text-8xl lg:text-[100px] xl:text-[140px] font-light text-white leading-[1] md:leading-[0.85] tracking-tighter mb-8 uppercase">
                Creative <br className="hidden md:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow via-neon-yellow/80 to-white/30 glow-text-yellow">Pipeline.</span>
              </h1>

              <div className="w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12 mb-8" />
              <p className="font-ibm text-creamy-white/50 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed tracking-wide uppercase">
                A precisely engineered methodology for manifesting cinematic excellence through technical rigor.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ─── SCROLLYTELLING TIMELINE ──────────────────── */}
      <section ref={containerRef} className="relative z-10">
        {/* Progress HUD - Desktop Only */}
        <div className="fixed right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 z-50">
          {steps.map((step, i) => (
             <m.div 
               key={step.num}
               className="flex flex-col items-end gap-2 group cursor-pointer"
             >
                <span className="text-[8px] font-ibm text-white/20 group-hover:text-neon-yellow transition-colors tracking-widest uppercase">{step.title}</span>
                <div className="w-10 h-[1px] bg-white/10 relative overflow-hidden">
                   <m.div 
                     className="absolute inset-0 bg-neon-yellow"
                     style={{ 
                       scaleX: useTransform(scrollYProgress, [i / steps.length, (i + 1) / steps.length], [0, 1]),
                       originX: 0
                     }}
                   />
                </div>
             </m.div>
          ))}
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <ProcessStepSection 
              key={step.num} 
              step={step} 
              index={i} 
              total={steps.length}
            />
          ))}
        </div>
      </section>

 
    </m.div>
  );
}

function ProcessStepSection({ step, index, total }: { step: typeof steps[0], index: number, total: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section 
      ref={ref} 
      className="relative min-h-screen w-full flex items-center justify-center py-20 md:py-32"
    >
      {/* Background Visual Atmosphere */}
      <m.div 
        style={{ opacity }}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <m.div 
          style={{ y, scale }}
          className="absolute inset-0"
        >
          <img 
            src={step.image} 
            alt={step.title} 
            className="w-full h-full object-cover opacity-20 grayscale brightness-50" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-background/40" />
        </m.div>

        {/* HUD Decorations per section */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/5 rounded-full opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-dashed border-white/5 rounded-full opacity-20" />
      </m.div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Visual Side */}
          <SectionReveal>
            <div className="relative group">
               {/* Cinematic Frame */}
               <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-panel border-white/10 p-2 transform transition-transform duration-1000 group-hover:scale-[1.02]">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  
                  {/* Floating ID Label */}
                  <div className="absolute top-8 left-8 flex flex-col gap-1">
                     <span className="text-[10px] text-neon-yellow font-ibm tracking-[0.4em] uppercase">{step.subtitle}</span>
                     <div className="w-12 h-[1px] bg-neon-yellow/50" />
                  </div>
               </div>

               {/* Decorative Lines */}
               <div className="absolute -top-6 -right-6 w-24 h-24 border-t border-r border-neon-yellow/20" />
               <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b border-l border-neon-yellow/20" />
            </div>
          </SectionReveal>

          {/* Content Side */}
          <div className="space-y-12">
            <SectionReveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-neon-yellow shadow-[0_0_20px_rgba(204,255,0,0.1)]">
                      <step.icon size={32} strokeWidth={1} />
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[10px] font-ibm text-white/30 tracking-[0.5em] uppercase">Phase.0{index+1} / 0{total}</span>
                      <h2 className="text-4xl md:text-6xl xl:text-7xl font-ibm font-light text-white uppercase tracking-tighter leading-none">{step.title}</h2>
                   </div>
                </div>
                
                <p className="font-ibm text-creamy-white/60 text-lg md:text-xl font-light leading-relaxed border-l-2 border-neon-yellow/20 pl-8 italic">
                  "{step.description}"
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-4">
                    <div className="text-[10px] font-ibm text-white tracking-[0.3em] uppercase flex items-center gap-3">
                       <Zap size={12} className="text-neon-yellow" /> Components
                    </div>
                    <ul className="space-y-3">
                       {step.details.map((detail, di) => (
                         <li key={di} className="text-[11px] font-ibm text-white/40 uppercase tracking-widest flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-white/20" />
                            {detail}
                         </li>
                       ))}
                    </ul>
                 </div>
                 
                 <div className="space-y-4 pt-8 sm:pt-0">
                    <div className="text-[10px] font-ibm text-white tracking-[0.3em] uppercase flex items-center gap-3">
                       <Activity size={12} className="text-neon-yellow" /> Technical_Ref
                    </div>
                    <div className="space-y-3">
                       {step.technical.map((tech, ti) => (
                          <div key={ti} className="flex flex-col">
                             <span className="text-[8px] font-ibm text-white/20 tracking-tighter">{tech.split(': ')[0]}</span>
                             <span className="text-[10px] font-ibm text-white/60 tracking-widest uppercase">{tech.split(': ')[1]}</span>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
               <div className="pt-8 flex items-center gap-12">
                  <div className="flex flex-col gap-1">
                     <span className="text-[7px] font-ibm text-white/20 uppercase tracking-[0.5em]">System_Integrity</span>
                     <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                           <div key={i} className={`w-3 h-1 rounded-full ${i <= 4 ? 'bg-neon-yellow/40' : 'bg-white/5'}`} />
                        ))}
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-[8px] font-ibm text-neon-yellow tracking-widest uppercase opacity-70">
                     <ShieldCheck size={10} /> Verified.OK
                  </div>
               </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

