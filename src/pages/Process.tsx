import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { Link } from 'react-router-dom';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    icon: '◎',
    color: 'neon-yellow',
    description: 'We begin by deeply understanding your brand, goals, and audience. Through discovery sessions, briefs, and competitor research, we lay the intellectual foundation for everything that follows.',
    details: ['Brand deep-dive session', 'Target audience analysis', 'Competitor visual audit', 'Goals & KPI definition', 'Timeline planning'],
  },
  {
    num: '02',
    title: 'Concept',
    icon: '◈',
    color: 'sky-blue',
    description: 'Ideas take shape. Moodboards, style references, and initial sketches explore multiple creative directions before we converge on the strongest concept that serves your vision.',
    details: ['Moodboard creation', 'Style exploration', 'Creative direction proposals', 'Client feedback & refinement', 'Final concept approval'],
  },
  {
    num: '03',
    title: '3D Modeling',
    icon: '⬡',
    color: 'coral-red',
    description: 'The concept becomes geometry. Our artists construct the digital world — whether product, space, or character — with meticulous attention to form, scale, and proportion.',
    details: ['Base mesh creation', 'Topology optimization', 'UV unwrapping', 'Detail sculpting', 'Asset library preparation'],
  },
  {
    num: '04',
    title: 'Simulation',
    icon: '◉',
    color: 'sea-green',
    description: 'Physics and dynamics breathe life into the scene. Fire, smoke, cloth, and fluid simulations are tuned to perfection — chaos choreographed with precision.',
    details: ['Physics simulation setup', 'Particle systems', 'Fluid & fire dynamics', 'Cloth & soft body', 'Simulation caching'],
  },
  {
    num: '05',
    title: 'Animation',
    icon: '◌',
    color: 'neon-yellow',
    description: 'Following the 12 Principles of Animation, every motion is intentional. Characters move with weight, objects have personality, and the camera tells its own story.',
    details: ['Keyframe animation', 'Motion graph refinement', 'Camera choreography', 'Timing & spacing', 'Motion review'],
  },
  {
    num: '06',
    title: 'Rendering',
    icon: '⬟',
    color: 'sky-blue',
    description: 'Light, shadow, and material transform models into photorealistic imagery. Our render pipeline balances quality and efficiency to deliver breathtaking results.',
    details: ['Lighting setup & HDRi', 'Material & shader work', 'Multi-pass rendering', 'Render optimization', 'Output format setup'],
  },
  {
    num: '07',
    title: 'Delivery',
    icon: '◍',
    color: 'coral-red',
    description: 'Compositing, color grading, and final polish bring everything together. The deliverable is packaged for your exact platform requirements — on time, every time.',
    details: ['Compositing & color grade', 'VFX integration', 'Audio sync', 'Format optimization', 'Final delivery & handoff'],
  },
];

export default function Process() {
  const [expanded, setExpanded] = useState<string | null>('01');

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/10 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">How We Work</span>
            </div>
            <h1 className="font-satoshi text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
              Creative <span className="text-neon-yellow">Process</span>
            </h1>
            <p className="font-ibm text-muted-foreground text-xl max-w-2xl">
              From brief to delivery — a structured, collaborative journey designed to produce extraordinary results.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-px bg-border" />

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

      {/* CTA */}
      <section className="py-24 px-6 bg-card text-center">
        <SectionReveal>
          <h2 className="font-satoshi text-3xl md:text-4xl font-black text-foreground mb-4">
            Ready to start your journey?
          </h2>
          <p className="font-ibm text-muted-foreground mb-8">Tell us about your project and let's begin the process together.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all">
            Begin Discovery <span>→</span>
          </Link>
        </SectionReveal>
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
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-6 mb-6"
    >
      {/* Number bubble */}
      <button
        onClick={onToggle}
        className={`relative z-10 w-14 h-14 flex-shrink-0 border-2 flex items-center justify-center transition-all duration-400 ${
          isExpanded
            ? 'border-neon-yellow bg-neon-yellow text-background'
            : 'border-border bg-background hover:border-neon-yellow/60'
        }`}
      >
        <span className={`font-satoshi font-black text-sm ${isExpanded ? 'text-background' : 'text-neon-yellow'}`}>
          {step.num}
        </span>
      </button>

      {/* Content */}
      <div className="flex-1 pb-2">
        <button onClick={onToggle} className="w-full text-left group">
          <div className="flex items-center gap-3 py-3">
            <h3 className={`font-satoshi text-2xl md:text-3xl font-black transition-colors duration-300 ${isExpanded ? 'text-neon-yellow' : 'text-foreground group-hover:text-neon-yellow'}`}>
              {step.title}
            </h3>
            <span className={`ml-auto text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-90 text-neon-yellow' : ''}`}>
              →
            </span>
          </div>
        </button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="border-l-2 border-neon-yellow/30 pl-5 py-3 mb-4">
            <p className="font-ibm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-4">
            {step.details.map((detail, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-ibm text-muted-foreground">
                <span className="w-4 h-4 flex-shrink-0 flex items-center justify-center border border-neon-yellow/40">
                  <span className="text-neon-yellow text-xs">✓</span>
                </span>
                {detail}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
