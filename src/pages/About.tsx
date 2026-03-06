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
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/10 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">About Studio</span>
            </div>
            <h1 className="font-satoshi text-5xl md:text-7xl font-black text-foreground leading-tight mb-8">
              Redefining<br />
              <span className="text-neon-yellow">Visual Storytelling</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="font-ibm text-muted-foreground text-xl leading-relaxed max-w-3xl mb-6">
              Geometric blends the structure of design with the freedom of creativity, offering cutting-edge 3D advertising that captivates, communicates, and converts.
            </p>
            <p className="font-ibm text-muted-foreground text-lg leading-relaxed max-w-3xl">
              Our purpose: to redefine visual storytelling by delivering powerful 3D content that bridges innovation, emotion, and strategy. Every pixel, every frame, every motion carries our passion and commitment to excellence.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">What We Stand For</span>
            </div>
            <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground mb-16">Core Values</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 0.1}>
                <div className="border border-border p-8 hover:border-neon-yellow/50 transition-all duration-300 group">
                  <div className="text-3xl text-neon-yellow mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{v.icon}</div>
                  <h3 className="font-satoshi font-bold text-foreground mb-3 group-hover:text-neon-yellow transition-colors duration-300">{v.title}</h3>
                  <p className="font-ibm text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Our Foundation</span>
            </div>
            <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground mb-4">Design Principles</h2>
            <p className="font-ibm text-muted-foreground text-lg mb-12 max-w-2xl">
              Great design is built on solid foundations. These principles guide every visual decision we make.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {designPrinciples.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.06}>
                <div className="border border-border p-5 hover:border-deep-teal/60 hover:bg-deep-teal/5 transition-all duration-300 group">
                  <h4 className="font-satoshi font-bold text-sm text-foreground mb-2 group-hover:text-neon-yellow transition-colors">{p.title}</h4>
                  <p className="font-ibm text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Principles */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Motion Philosophy</span>
            </div>
            <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground mb-4">12 Principles of Animation</h2>
            <p className="font-ibm text-muted-foreground text-lg mb-12 max-w-2xl">
              Animation is more than movement — it's storytelling brought to life. These are the principles at our core.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {animPrinciples.map((p, i) => (
              <SectionReveal key={p.title} delay={i * 0.05}>
                <div className="border border-border p-5 hover:border-neon-yellow/40 transition-all duration-300 group flex gap-4">
                  <span className="font-satoshi font-black text-neon-yellow/30 text-2xl leading-none mt-0.5 group-hover:text-neon-yellow/60 transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="font-satoshi font-bold text-sm text-foreground mb-1 group-hover:text-neon-yellow transition-colors">{p.title}</h4>
                    <p className="font-ibm text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <SectionReveal>
          <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground mb-6">
            At Geometric, we don't just design —<br />
            <span className="text-neon-yellow">we imagine, shape, and build.</span>
          </h2>
          <p className="font-ibm text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            These guidelines are not boundaries — they are launchpads. Let them guide you, but never confine you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all duration-300">
            Work With Us <span>→</span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
