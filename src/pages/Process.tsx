import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Link } from 'react-router-dom';
import { SEO, Schemas } from '@/components/seo/SEO';
import { Compass, Lightbulb, Box, Wind, Play, Image as ImageIcon, PackageCheck } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    icon: Compass,
    color: 'neon-yellow',
    description: 'We begin by deeply understanding your brand, goals, and audience. Through discovery sessions, briefs, and competitor research, we lay the intellectual foundation for everything that follows.',
    details: ['Brand deep-dive session', 'Target audience analysis', 'Competitor visual audit', 'Goals & KPI definition', 'Timeline planning'],
  },
  {
    num: '02',
    title: 'Concept',
    icon: Lightbulb,
    color: 'sky-blue',
    description: 'Ideas take shape. Moodboards, style references, and initial sketches explore multiple creative directions before we converge on the strongest concept that serves your vision.',
    details: ['Moodboard creation', 'Style exploration', 'Creative direction proposals', 'Client feedback & refinement', 'Final concept approval'],
  },
  {
    num: '03',
    title: '3D Modeling',
    icon: Box,
    color: 'coral-red',
    description: 'The concept becomes geometry. Our artists construct the digital world — whether product, space, or character — with meticulous attention to form, scale, and proportion.',
    details: ['Base mesh creation', 'Topology optimization', 'UV unwrapping', 'Detail sculpting', 'Asset library preparation'],
  },
  {
    num: '04',
    title: 'Simulation',
    icon: Wind,
    color: 'sea-green',
    description: 'Physics and dynamics breathe life into the scene. Fire, smoke, cloth, and fluid simulations are tuned to perfection — chaos choreographed with precision.',
    details: ['Physics simulation setup', 'Particle systems', 'Fluid & fire dynamics', 'Cloth & soft body', 'Simulation caching'],
  },
  {
    num: '05',
    title: 'Animation',
    icon: Play,
    color: 'neon-yellow',
    description: 'Following the 12 Principles of Animation, every motion is intentional. Characters move with weight, objects have personality, and the camera tells its own story.',
    details: ['Keyframe animation', 'Motion graph refinement', 'Camera choreography', 'Timing & spacing', 'Motion review'],
  },
  {
    num: '06',
    title: 'Rendering',
    icon: ImageIcon,
    color: 'sky-blue',
    description: 'Light, shadow, and material transform models into photorealistic imagery. Our render pipeline balances quality and efficiency to deliver breathtaking results.',
    details: ['Lighting setup & HDRi', 'Material & shader work', 'Multi-pass rendering', 'Render optimization', 'Output format setup'],
  },
  {
    num: '07',
    title: 'Delivery',
    icon: PackageCheck,
    color: 'coral-red',
    description: 'Compositing, color grading, and final polish bring everything together. The deliverable is packaged for your exact platform requirements — on time, every time.',
    details: ['Compositing & color grade', 'VFX integration', 'Audio sync', 'Format optimization', 'Final delivery & handoff'],
  },
];

export default function Process() {
  const [expanded, setExpanded] = useState<string | null>('01');

  return (
    <div className="bg-background min-h-screen pt-24 pb-12 overflow-hidden">
      <SEO
        title="Our Creative Pipeline & Process"
        description="Discover Geometric Studio's 7-stage production pipeline: from Discovery and Concept through 3D Modeling, Simulation, Animation, Rendering, to final Delivery. A precise methodology for extraordinary cinematic results."
        keywords="3D production pipeline, creative process, 3D animation workflow, cinematic production pipeline, motion graphics process, geometric studio methodology, 3D rendering process"
        schema={[
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Process', url: '/process' },
          ]),
          Schemas.faq(
            steps.map(s => ({ question: `What happens during the ${s.title} phase?`, answer: s.description }))
          ),
        ]}
      />
      {/* Premium Ambient Glows */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      {/* Header */}
      <section className="px-6 relative pb-16 md:pb-24 xl:pb-32 pt-20 z-10 overflow-hidden">
        {/* Technical background elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center relative">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Sequence Protocol</span>
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
              </div>
              
              <h1 className="font-ibm text-[14vw] xs:text-6xl md:text-7xl lg:text-[90px] xl:text-[130px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter mb-8 md:mb-12">
                Creative <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow block sm:inline mt-2 sm:mt-0 uppercase">Pipeline.</span>
              </h1>

              <p className="font-ibm text-creamy-white/50 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed border-t border-white/10 pt-12">
                A surgically precise methodology designed to manifest extraordinary cinematic results through technical rigor.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 xl:py-24 px-6 relative z-10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative group">
          {/* Main sequence line */}
          <div className="absolute left-8 md:left-[64px] top-0 bottom-0 w-[1px] bg-white/5 group-hover:bg-neon-yellow/10 transition-colors [transition-duration:2000ms]" />
          
          <div className="relative pl-20 md:pl-40">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.num}
                step={step}
                index={i}
                isExpanded={expanded === step.num}
                onToggle={() => setExpanded(expanded === step.num ? null : step.num)}
              />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

function ProcessStep({ step, index, isExpanded, onToggle }: {
  step: typeof steps[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative mb-8"
    >
      {/* Number and state indicator */}
      <button
        onClick={onToggle}
        className={`absolute -left-14 md:-left-[100px] top-6 w-9 h-9 md:w-12 md:h-12 border rounded-full flex items-center justify-center transition-all duration-700 z-10 group/btn ${
          isExpanded
            ? 'bg-neon-yellow border-neon-yellow text-background shadow-[0_0_20px_rgba(204,255,0,0.5)]'
            : 'bg-background border-white/10 text-white/40 hover:border-white/30 hover:text-white'
        }`}
      >
        <span className="font-ibm text-[10px] font-medium tracking-tighter">
          {step.num}
        </span>
      </button>

      {/* Main Container */}
      <div className={`glass-panel rounded-[24px] transition-all duration-1000 overflow-hidden ${isExpanded ? 'bg-white/[0.03] border-white/10' : 'bg-transparent border-transparent hover:bg-white/[0.01]'}`}>
        <button onClick={onToggle} className="w-full text-left p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
          <div className="flex items-center gap-6">
            <div className={`p-4 rounded-2xl bg-white/[0.03] border border-white/5 transition-colors duration-700 ${isExpanded ? 'text-neon-yellow border-neon-yellow/20 bg-neon-yellow/5' : 'text-white/20'}`}>
               <step.icon size={28} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[8px] font-ibm tracking-[0.5em] uppercase text-white/20 group-hover:text-neon-yellow transition-colors duration-700">Module 00{index+1}</span>
              <h3 className={`font-ibm text-2xl xs:text-3xl md:text-5xl font-light tracking-tighter uppercase transition-colors duration-700 ${isExpanded ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                {step.title}
              </h3>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
             <div className="hidden lg:flex flex-col items-end gap-1 opacity-20 group-hover:opacity-60 transition-opacity duration-700">
                <div className="text-[7px] font-ibm tracking-[0.2em] uppercase">Status: {isExpanded ? 'Active' : 'Standby'}</div>
                <div className="w-16 h-[1px] bg-white group-hover:bg-neon-yellow transition-colors" />
             </div>
             <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-700 ${isExpanded ? 'rotate-180 bg-white/5 border-neon-yellow/30 text-neon-yellow' : 'text-white/20'}`}>
               <span className="text-xl">↓</span>
             </div>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="px-6 md:px-10 pb-10">
            <div className="max-w-3xl">
              <p className="font-ibm font-light text-white/50 text-base md:text-lg leading-relaxed mb-10 border-l border-neon-yellow/30 pl-8">
                {step.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-12">
                {step.details.map((detail, i) => (
                  <div key={i} className="group/item flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 transition-all duration-500">
                    <span className="font-ibm tracking-[0.1em] text-[10px] text-white/40 group-hover:text-white transition-colors uppercase italic">{detail}</span>
                    <div className="w-1 h-1 bg-white/10 group-hover:bg-neon-yellow transition-colors rounded-full shadow-[0_0_5px_rgba(204,255,0,0.5)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
