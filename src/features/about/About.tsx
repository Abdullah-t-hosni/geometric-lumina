import { SectionReveal } from '@/shared/ui/SectionReveal';
import { SEO, Schemas } from '@/shared/seo/SEO';
import { 
  Sparkles, 
  Cpu, 
  Users, 
  Target, 
  ShieldCheck,
  Scale,
  Contrast,
  Star,
  AlignLeft,
  Repeat,
  Shapes,
  SortAsc,
  Frame,
  Link as LinkIcon,
  Zap
} from 'lucide-react';

const values = [
  { title: 'Creativity with Structure', desc: 'Design with direction — we channel creative freedom through precise intent.', icon: Sparkles },
  { title: 'Innovation-Driven', desc: 'Always evolving with the latest tech & creative trends.', icon: Cpu },
  { title: 'Collaboration', desc: 'Co-creating with our clients at every step of the journey.', icon: Users },
  { title: 'Detail-Oriented', desc: 'Every pixel matters. Perfection isn\'t the destination — it\'s the direction.', icon: Target },
  { title: 'Reliability', desc: 'On-time, consistent, and professional — always.', icon: ShieldCheck },
];

const designPrinciples = [
  { title: 'Balance', desc: 'Distribution of visual weight — symmetrical or asymmetrical.', icon: Scale },
  { title: 'Contrast', desc: 'Difference between elements to create emphasis and clarity.', icon: Contrast },
  { title: 'Emphasis', desc: 'Making one element stand out — the visual hierarchy\'s starting point.', icon: Star },
  { title: 'Alignment', desc: 'Arranging elements to create order and consistency.', icon: AlignLeft },
  { title: 'Repetition', desc: 'Reusing elements to create unity and consistency.', icon: Repeat },
  { title: 'Proximity', desc: 'Grouping related items together to show their connection.', icon: Shapes },
  { title: 'Hierarchy', desc: 'Organizing information so the most important elements are noticed first.', icon: SortAsc },
  { title: 'White Space', desc: 'Empty space that helps designs breathe and improves readability.', icon: Frame },
  { title: 'Unity', desc: 'All elements working together to create a cohesive whole.', icon: LinkIcon },
  { title: 'Movement', desc: 'Guiding the viewer\'s eye through the design in a deliberate path.', icon: Zap },
];

const animPrinciples = [
  { title: 'Squash & Stretch', desc: 'Gives weight and flexibility to objects.' },
  { title: 'Anticipation', desc: 'Prepares the audience for an action.' },
  { title: 'Staging', desc: 'Presents an idea clearly, directing the viewer\'s attention.' },
  { title: 'Straight Ahead & Pose to Pose', desc: 'Frame-by-frame vs. key pose planning.' },
  { title: 'Follow Through & Overlapping', desc: 'Adds realism to movement.' },
  { title: 'Slow In and Out', desc: 'Makes motion feel more natural.' },
  { title: 'Arcs', desc: 'Most natural motion follows an arc, not a straight line.' },
  { title: 'Secondary Action', desc: 'Adds depth with smaller supporting actions.' },
  { title: 'Timing', desc: 'The number of frames used for an action.' },
  { title: 'Exaggeration', desc: 'Pushes motion beyond realism to emphasize meaning.' },
  { title: 'Posing', desc: 'Clean, readable, well-composed poses.' },
  { title: 'Appeal', desc: 'Characters and motions should be interesting and likable.' },
];

export default function About() {
  return (
    <div className="bg-background min-h-screen pb-12 overflow-hidden selection:bg-neon-yellow selection:text-background">
      <SEO
        title="About Geometric Studio"
        description="Discover the story, values, and creative philosophy behind Geometric Studio — a premier 3D visualization and motion graphics powerhouse. Built on precision, driven by imagination."
        keywords="about geometric studio, 3D studio, motion graphics, creative agency, 3D visualization team, cinematic production house"
        schema={[
          Schemas.organization(),
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'About', url: '/about' },
          ]),
        ]}
      />
      {/* Premium Ambient Glows */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] transform-gpu pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] transform-gpu pointer-events-none z-0" />

      {/* Hero */}
      <section className="px-6 relative pb-12 md:pb-16 xl:pb-20 pt-36 md:pt-48 lg:pt-56 z-10 overflow-hidden">
        {/* Technical background elements */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
              <div className="w-full lg:w-3/5">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Protocol.Design.System</span>
                  <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                </div>
                
                <h1 className="font-ibm text-[13vw] xs:text-6xl md:text-7xl lg:text-[88px] xl:text-[120px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter mb-6 md:mb-4">
                  We Build <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 block sm:inline mt-2 sm:mt-0">Visual Impact.</span>
                </h1>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col justify-end pb-4">
                <div className="space-y-8 lg:border-l border-white/10 lg:pl-10">
                   <div className="text-[10px] font-ibm text-white/40 tracking-[0.3em] uppercase">Core Purpose</div>
                   <p className="font-ibm text-creamy-white text-base md:text-xl font-light leading-relaxed">
                     A powerhouse of creative engineering, merging the precision of geometry with the raw emotion of cinematic arts.
                   </p>
                   <div className="flex items-center gap-4 text-[9px] font-ibm text-neon-yellow/60 tracking-[0.2em] uppercase">
                      <span>Remote • Digital</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>Active Since 2024</span>
                   </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 pt-16 border-t border-white/5">
              <div className="flex flex-col gap-4">
                 <div className="text-[10px] font-ibm text-neon-yellow tracking-[0.4em] uppercase">01 / Methodology</div>
                 <p className="font-ibm text-white/40 text-sm leading-relaxed uppercase tracking-wider">
                   Surgical precision in every pixel. We don't just animate; we engineer visual experiences.
                 </p>
              </div>
              <div className="flex flex-col gap-4">
                 <div className="text-[10px] font-ibm text-neon-yellow tracking-[0.4em] uppercase">02 / Innovation</div>
                 <p className="font-ibm text-white/40 text-sm leading-relaxed uppercase tracking-wider">
                   Pushing the boundaries of 3D advertising with real-time rendering and cinematic tools.
                 </p>
              </div>
              <div className="flex flex-col gap-4">
                 <div className="text-[10px] font-ibm text-neon-yellow tracking-[0.4em] uppercase">03 / Impact</div>
                 <p className="font-ibm text-white/40 text-sm leading-relaxed uppercase tracking-wider">
                   Creating content that refuses to be ignored, bridging the gap between brand and emotion.
                 </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 xl:py-48 px-6 relative bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="text-center md:text-left mb-16 md:mb-24">
              <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow/60 block mb-4 md:mb-6">Execution Ethos</span>
              <h2 className="font-ibm text-4xl xs:text-5xl md:text-7xl font-light text-white tracking-tighter">The <span className="text-neon-yellow">Core.</span></h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="h-full glass-panel p-6 sm:p-8 hover:border-white/20 transition-all duration-700 group relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="mb-6 md:mb-8 text-white/10 group-hover:text-neon-yellow transition-colors duration-700">
                    <v.icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-ibm font-light text-lg md:text-xl text-white tracking-tight mb-3 md:mb-4 uppercase leading-tight">{v.title}</h3>
                  <p className="font-ibm text-[10px] md:text-[11px] text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors uppercase">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-12 md:py-16 xl:py-24 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <SectionReveal>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-neon-yellow/50" />
                <span className="text-[10px] font-ibm tracking-[0.3em] uppercase text-creamy-white/60">Our Foundation</span>
              </div>
              <h2 className="font-ibm text-4xl xs:text-5xl md:text-6xl font-light text-creamy-white tracking-tight mb-4 md:mb-6 leading-none">Design <br className="block sm:hidden" /><span className="font-black">Principles.</span></h2>
              <p className="font-ibm text-creamy-white/60 text-base md:text-xl max-w-2xl font-light leading-relaxed">
                Great design is built on solid foundations. These principles guide every visual decision we make.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {designPrinciples.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.05}>
                <div className="glass-panel p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 group h-full flex flex-col justify-start text-left">
                  <div className="mb-4 md:mb-6 text-white/10 group-hover:text-neon-yellow transition-colors duration-500">
                    <p.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-ibm font-bold text-base md:text-lg text-creamy-white mb-2 md:mb-3 tracking-tight group-hover:text-neon-yellow transition-colors leading-tight">{p.title}</h4>
                  <p className="font-ibm text-[10px] md:text-[11px] text-creamy-white/50 font-medium tracking-wide leading-relaxed group-hover:text-creamy-white/70 transition-colors uppercase text-left">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Principles */}
      <section className="py-20 md:py-28 xl:py-48 px-6 relative bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow/60">Motion Philosophy</span>
                </div>
                <h2 className="font-ibm text-4xl xs:text-5xl md:text-8xl font-light text-white tracking-tighter leading-[1] md:leading-[0.9]">
                  Liquid <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">Intelligence.</span>
                </h2>
              </div>
              <p className="font-ibm text-white/40 text-base md:text-lg max-w-sm font-light border-l border-white/10 pl-8">
                Animation is more than movement — it's storytelling brought to life. These are the 12 laws of the geometric engine.
              </p>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {animPrinciples.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.05}>
                <div className="glass-panel p-6 sm:p-8 md:p-10 hover:border-white/20 transition-all duration-700 group flex flex-col h-full relative overflow-hidden bg-white/[0.01] text-left">
                   <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 font-ibm font-light text-7xl md:text-9xl text-white/[0.02] group-hover:text-neon-yellow/[0.05] transition-colors duration-1000 pointer-events-none select-none">
                     {String(i + 1).padStart(2, '0')}
                   </div>
                  <div className="font-ibm font-light text-neon-yellow/30 text-xl md:text-2xl mb-4 md:mb-6 group-hover:text-neon-yellow transition-colors duration-500">
                    {String(i + 1).padStart(2, '0')}.
                  </div>
                  <div className="relative z-10 text-left">
                    <h4 className="font-ibm font-light text-lg md:text-xl text-white mb-2 md:mb-3 tracking-tight group-hover:text-neon-yellow transition-colors uppercase leading-tight">{p.title}</h4>
                    <p className="font-ibm text-[10px] md:text-[11px] text-white/30 font-light tracking-[0.1em] leading-relaxed group-hover:text-white/60 transition-colors uppercase">{p.desc}</p>
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
