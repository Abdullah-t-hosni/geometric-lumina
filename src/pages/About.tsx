import { SectionReveal } from '@/components/ui/SectionReveal';
import { Link } from 'react-router-dom';

const values = [
  { title: 'Creativity with Structure', desc: 'Design with direction — we channel creative freedom through precise intent.', icon: '◈' },
  { title: 'Innovation-Driven', desc: 'Always evolving with the latest tech & creative trends.', icon: '◎' },
  { title: 'Collaboration', desc: 'Co-creating with our clients at every step of the journey.', icon: '⬡' },
  { title: 'Detail-Oriented', desc: 'Every pixel matters. Perfection isn\'t the destination — it\'s the direction.', icon: '◉' },
  { title: 'Reliability', desc: 'On-time, consistent, and professional — always.', icon: '◍' },
];

const designPrinciples = [
  { title: 'Balance', desc: 'Distribution of visual weight — symmetrical or asymmetrical.' },
  { title: 'Contrast', desc: 'Difference between elements to create emphasis and clarity.' },
  { title: 'Emphasis', desc: 'Making one element stand out — the visual hierarchy\'s starting point.' },
  { title: 'Alignment', desc: 'Arranging elements to create order and consistency.' },
  { title: 'Repetition', desc: 'Reusing elements to create unity and consistency.' },
  { title: 'Proximity', desc: 'Grouping related items together to show their connection.' },
  { title: 'Hierarchy', desc: 'Organizing information so the most important elements are noticed first.' },
  { title: 'White Space', desc: 'Empty space that helps designs breathe and improves readability.' },
  { title: 'Unity', desc: 'All elements working together to create a cohesive whole.' },
  { title: 'Movement', desc: 'Guiding the viewer\'s eye through the design in a deliberate path.' },
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
    <div className="bg-background min-h-screen pt-24 pb-12 overflow-hidden">
      {/* Premium Ambient Glows */}
      <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      {/* Hero */}
      <section className="px-6 relative pb-20 pt-32 lg:pt-40 z-10 overflow-hidden">
        {/* Technical background elements */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-24">
              <div className="w-full lg:w-3/5">
                <div className="flex items-center gap-6 mb-10">
                  <div className="flex flex-col gap-1">
                    <div className="w-10 h-[1px] bg-neon-yellow" />
                    <div className="w-5 h-[1px] bg-neon-yellow/30" />
                  </div>
                  <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Geometric Studios</span>
                </div>
                
                <h1 className="font-ibm text-6xl md:text-8xl lg:text-[120px] font-light text-white leading-[0.85] tracking-tighter mb-4">
                  We Build <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40">Visual Impact.</span>
                </h1>
              </div>

              <div className="w-full lg:w-2/5 flex flex-col justify-end pb-4">
                <div className="space-y-8 border-l border-white/10 pl-10">
                   <div className="text-[10px] font-ibm text-white/40 tracking-[0.3em] uppercase">Core Purpose</div>
                   <p className="font-ibm text-creamy-white text-lg md:text-xl font-light leading-relaxed">
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
      <section className="py-32 px-6 relative bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="text-center md:text-left mb-24">
              <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow/60 block mb-6">Execution Ethos</span>
              <h2 className="font-ibm text-5xl md:text-7xl font-light text-white tracking-tighter italic">The <span className="text-neon-yellow">Core.</span></h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="h-full glass-panel p-8 hover:border-white/20 transition-all duration-700 group relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="font-ibm text-3xl text-white/10 group-hover:text-neon-yellow transition-colors duration-700 mb-8 italic">
                    {v.icon}
                  </div>
                  <h3 className="font-ibm font-light text-xl text-white tracking-tight mb-4 uppercase">{v.title}</h3>
                  <p className="font-ibm text-[11px] text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          <SectionReveal>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-[1px] bg-neon-yellow/50" />
                <span className="text-[10px] font-ibm tracking-[0.3em] uppercase text-creamy-white/60">Our Foundation</span>
              </div>
              <h2 className="font-ibm text-4xl md:text-6xl font-light text-creamy-white tracking-tight mb-6">Design <span className="font-black">Principles.</span></h2>
              <p className="font-ibm text-creamy-white/60 text-lg md:text-xl max-w-2xl font-light">
                Great design is built on solid foundations. These principles guide every visual decision we make.
              </p>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {designPrinciples.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.05}>
                <div className="glass-panel p-6 hover:bg-white/5 transition-all duration-300 group h-full flex flex-col justify-start">
                  <h4 className="font-ibm font-bold text-lg text-creamy-white mb-3 tracking-tight group-hover:text-neon-yellow transition-colors">{p.title}</h4>
                  <p className="font-ibm text-[11px] text-creamy-white/50 font-medium tracking-wide leading-relaxed group-hover:text-creamy-white/70 transition-colors uppercase">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Principles */}
      <section className="py-32 md:py-48 px-6 relative bg-background overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
              <div className="w-full lg:w-2/3">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow/60">Motion Philosophy</span>
                </div>
                <h2 className="font-ibm text-5xl md:text-8xl font-light text-white tracking-tighter leading-[0.9]">
                  Liquid <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/30">Intelligence.</span>
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
                <div className="glass-panel p-10 hover:border-white/20 transition-all duration-700 group flex flex-col h-full relative overflow-hidden bg-white/[0.01]">
                   <div className="absolute -bottom-6 -right-6 font-ibm font-light text-9xl text-white/[0.02] group-hover:text-neon-yellow/[0.05] transition-colors duration-1000 pointer-events-none select-none italic">
                     {String(i + 1).padStart(2, '0')}
                   </div>
                  <div className="font-ibm font-light text-neon-yellow/30 text-2xl mb-6 group-hover:text-neon-yellow transition-colors duration-500 italic">
                    {String(i + 1).padStart(2, '0')}.
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-ibm font-light text-xl text-white mb-3 tracking-tight group-hover:text-neon-yellow transition-colors uppercase">{p.title}</h4>
                    <p className="font-ibm text-[10px] text-white/30 font-light tracking-[0.1em] leading-relaxed group-hover:text-white/60 transition-colors uppercase">{p.desc}</p>
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
