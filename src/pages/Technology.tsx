import { SectionReveal } from '@/components/ui/SectionReveal';
import { Link } from 'react-router-dom';

const tools = [
  { name: 'Blender', category: 'Modeling & Animation', desc: 'Open-source powerhouse for 3D modeling, sculpting, and animation.' },
  { name: 'Cinema 4D', category: 'Motion & Design', desc: 'Industry-standard tool for motion graphics and 3D design.' },
  { name: 'Houdini', category: 'Simulations & VFX', desc: 'The gold standard for procedural VFX, simulations, and dynamics.' },
  { name: 'Unreal Engine', category: 'Real-time & VR', desc: 'Real-time rendering, VR environments, and architectural visualization.' },
  { name: 'ZBrush', category: 'Digital Sculpting', desc: 'Organic sculpting with unparalleled detail and flexibility.' },
  { name: 'Substance 3D', category: 'Materials & Texturing', desc: 'End-to-end material creation and texturing pipeline.' },
  { name: 'After Effects', category: 'Compositing', desc: 'Industry-leading compositing and motion graphics tool.' },
  { name: 'Premiere Pro', category: 'Video Editing', desc: 'Professional non-linear video editing and finishing.' },
  { name: 'DaVinci Resolve', category: 'Color Grading', desc: 'Cinematic color grading and advanced audio post.' },
  { name: 'Nuke', category: 'VFX Compositing', desc: 'Node-based compositing for high-end VFX production.' },
  { name: 'Midjourney', category: 'AI Generation', desc: 'AI-powered image generation integrated into creative workflows.' },
  { name: 'Stable Diffusion', category: 'AI Generation', desc: 'Open-source AI model for visual exploration and concept generation.' },
];

const categories = ['All', 'Modeling & Animation', 'Simulations & VFX', 'Real-time & VR', 'AI Generation', 'Compositing'];

const stats = [
  { value: '5+', label: 'Years of Experience', desc: 'Pushing the boundaries of 3D creative production' },
  { value: '200+', label: 'Projects Delivered', desc: 'From concept to final render — on time, every time' },
  { value: '80+', label: 'Satisfied Clients', desc: 'Brands across Egypt and the MENA region' },
  { value: '12', label: 'Core Services', desc: 'A complete creative ecosystem under one roof' },
];

export default function Technology() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/10 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Our Arsenal</span>
            </div>
            <h1 className="font-satoshi text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
              Technology <span className="text-neon-yellow">Stack</span>
            </h1>
            <p className="font-ibm text-muted-foreground text-xl max-w-2xl">
              We combine industry-leading tools with AI-powered workflows to deliver visuals that aren't just beautiful — they're technically flawless.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="border border-border p-6 hover:border-neon-yellow/50 transition-colors duration-300 group text-center">
                <div className="font-satoshi text-5xl font-black text-neon-yellow mb-2">{stat.value}</div>
                <div className="font-satoshi font-bold text-sm text-foreground mb-1">{stat.label}</div>
                <div className="font-ibm text-xs text-muted-foreground">{stat.desc}</div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Core Tools</span>
            </div>
            <h2 className="font-satoshi text-4xl md:text-5xl font-black text-foreground mb-12">Our Software</h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tools.map((tool, i) => (
              <SectionReveal key={tool.name} delay={i * 0.06}>
                <div className="border border-border p-6 hover:border-neon-yellow/60 hover:bg-neon-yellow/5 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-satoshi font-bold text-lg text-foreground group-hover:text-neon-yellow transition-colors">{tool.name}</h3>
                  </div>
                  <span className="inline-block px-2 py-0.5 border border-border text-xs text-muted-foreground font-ibm mb-3">{tool.category}</span>
                  <p className="font-ibm text-xs text-muted-foreground leading-relaxed">{tool.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-neon-yellow" />
                <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Our Approach</span>
              </div>
              <h2 className="font-satoshi text-4xl font-black text-foreground mb-6">Technology + Craftsmanship</h2>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-4">
                At Geometric, technology is a tool — not a crutch. Every software we use is chosen deliberately, mastered deeply, and wielded with creative intent.
              </p>
              <p className="font-ibm text-muted-foreground leading-relaxed mb-6">
                AI tools are integrated into our pipeline to speed up workflows, refine details and enhance visuals without compromising quality or craftsmanship. We explore bold new directions while maintaining the human touch that defines great art.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm text-neon-yellow font-ibm hover:underline">
                Discuss your technical requirements <span>→</span>
              </Link>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-3">
                {['Procedural FX', 'Real-time VR', 'AI Integration', 'GPU Rendering', 'Node-based Workflow', 'Multi-pass Pipeline'].map((item, i) => (
                  <div key={item} className="border border-border p-4 flex items-center gap-3 hover:border-neon-yellow/50 transition-colors group">
                    <span className="w-2 h-2 flex-shrink-0 bg-neon-yellow/60 group-hover:bg-neon-yellow transition-colors" />
                    <span className="font-ibm text-xs text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <SectionReveal>
          <h2 className="font-satoshi text-3xl md:text-4xl font-black text-foreground mb-4">
            Need a specific technical solution?
          </h2>
          <p className="font-ibm text-muted-foreground mb-8">Our pipeline adapts to your project requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all">
            Talk to Us <span>→</span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
