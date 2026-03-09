import { SectionReveal } from '@/components/ui/SectionReveal';
import { Link } from 'react-router-dom';
import { SEO, Schemas } from '@/components/seo/SEO';

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
    <div className="bg-background min-h-screen pt-24 pb-12 overflow-hidden relative">
      <SEO
        title="Software Stack & Technology Arsenal"
        description="Explore the professional tools powering Geometric Studio: Blender, Cinema 4D, Houdini, Unreal Engine, ZBrush, Substance 3D, After Effects, DaVinci Resolve, and cutting-edge AI tools like Midjourney."
        keywords="3D software stack, Blender studio Egypt, Cinema 4D production, Houdini VFX Cairo, Unreal Engine visualization, ZBrush sculpting, After Effects compositing, AI 3D production"
        schema={[
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Technology', url: '/technology' },
          ]),
        ]}
      />
      {/* Premium Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-3/4 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

      {/* Header */}
      <section className="px-6 relative pb-32 pt-20 z-10 overflow-hidden">
        {/* Technical HUD elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center relative">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Technical Arsenal</span>
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
              </div>
              
              <h1 className="font-ibm text-[16vw] xs:text-6xl md:text-8xl lg:text-[130px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 uppercase whitespace-nowrap lg:whitespace-normal">
                Software <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow block sm:inline mt-2 sm:mt-0">Stack.</span>
              </h1>

              <p className="font-ibm text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed border-t border-white/10 pt-12">
                Merging industry-leading tools with custom AI pipelines to engineer visual experiences that defy the limits of reality.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-panel p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden h-full">
                <div className="absolute top-0 left-10 w-10 h-[2px] bg-neon-yellow/30 group-hover:bg-neon-yellow group-hover:w-20 transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <div className="relative z-10">
                  <div className="font-ibm text-7xl font-light text-white mb-6 tracking-tighter group-hover:text-neon-yellow transition-colors duration-700">{stat.value}</div>
                  <div className="font-ibm text-[10px] tracking-[0.4em] uppercase text-white/40 mb-3">{stat.label}</div>
                  <p className="font-ibm text-xs text-white/20 leading-relaxed font-light">{stat.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Software Arsenal Grid */}
      <section className="py-32 px-6 relative z-10 bg-white/[0.01]">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col items-center mb-24">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-white/10" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-white/40">Tool Inventory</span>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>
              <h2 className="font-ibm text-[12vw] xs:text-5xl md:text-7xl font-light text-white tracking-tighter uppercase leading-none">Our <span className="italic text-white/20 block sm:inline mt-2 sm:mt-0">Arsenal.</span></h2>
            </div>
          </SectionReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:auto-rows-[250px]">
            {tools.map((tool, i) => (
              <SectionReveal 
                key={tool.name} 
                delay={i * 0.05} 
                className={
                  i === 0 ? "lg:col-span-6 lg:row-span-2" : 
                  i === 1 ? "lg:col-span-6 lg:row-span-1" :
                  i === 2 ? "lg:col-span-3 lg:row-span-1" :
                  i === 3 ? "lg:col-span-3 lg:row-span-1" :
                  i === 4 ? "lg:col-span-4 lg:row-span-2" :
                  i === 5 ? "lg:col-span-4 lg:row-span-1" :
                  i === 6 ? "lg:col-span-4 lg:row-span-1" :
                  "lg:col-span-3 lg:row-span-1"
                }
              >
                <div className="group h-full flex flex-col p-8 glass-panel rounded-[32px] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-700 relative overflow-hidden">
                  <div className="absolute top-8 right-8 w-8 h-8 rounded-full border border-white/5 flex items-center justify-center group-hover:border-neon-yellow/30 transition-all">
                    <span className="text-[10px] text-white/10 group-hover:text-neon-yellow transition-colors italic">T</span>
                  </div>
                  
                  <div className="flex flex-col gap-1 mb-6 transition-all duration-700 group-hover:translate-x-2">
                    <span className="text-[8px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/40 group-hover:text-neon-yellow transition-colors">Software_0{i+1}</span>
                    <h3 className="font-ibm font-light text-2xl text-white tracking-tight leading-none uppercase">{tool.name}</h3>
                  </div>
                  
                  <div className="px-3 py-1.5 rounded-full border border-white/5 bg-background text-[8px] font-ibm tracking-[0.3em] text-white/30 uppercase w-fit mb-8 transition-all group-hover:border-white/20 group-hover:text-white/60">
                    {tool.category}
                  </div>
                  
                  <p className="font-ibm text-[11px] text-white/30 font-light leading-relaxed group-hover:text-white/50 transition-colors duration-700 mt-auto">{tool.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Operational Philosophy</span>
              </div>
              
              <h2 className="font-ibm text-[12vw] xs:text-5xl md:text-7xl font-light text-white mb-10 tracking-tighter uppercase leading-[1] md:leading-[0.85]">
                Tech + <br className="hidden sm:block" />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow block sm:inline mt-2 sm:mt-0">Craftsmanship.</span>
              </h2>

              <div className="space-y-6 max-w-xl">
                <p className="font-ibm text-white/50 text-lg font-light leading-relaxed border-l border-neon-yellow/30 pl-8">
                  At Geometric, technology is a tool — not a crutch. Every software we use is chosen deliberately, mastered deeply, and wielded with creative intent.
                </p>
                <p className="font-ibm text-white/30 text-base font-light leading-relaxed pl-8">
                  AI tools are seamlessly integrated into our pipeline to speed up workflows and enhance visuals without compromising human artistic judgment.
                </p>
              </div>

              <div className="mt-16 group inline-flex items-center gap-6">
                <Link to="/contact" className="px-10 py-5 bg-white text-background rounded-full font-ibm text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-neon-yellow hover:scale-105 transition-all duration-300">
                  Technical Consultation
                </Link>
              </div>
            </SectionReveal>
 
            <SectionReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {['Procedural FX', 'Real-time VR', 'AI Integration', 'GPU Rendering', 'Node Pipeline', 'Cinematic Color'].map((item, i) => (
                  <div key={item} className="glass-panel p-10 rounded-[32px] aspect-square flex flex-col items-center justify-center gap-6 group hover:border-white/20 transition-all duration-700 relative overflow-hidden text-center">
                    <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1px] h-0 group-hover:h-full bg-gradient-to-b from-neon-yellow to-transparent transition-all duration-1000 opacity-20" />
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-neon-yellow group-hover:border-neon-yellow/50 group-hover:bg-neon-yellow/10 transition-all duration-700 shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                       <span className="text-xl">✓</span>
                    </div>
                    <span className="font-ibm font-light text-[10px] text-white/40 tracking-[0.4em] uppercase group-hover:text-white transition-colors duration-700">{item}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Cinematic Final CTA */}
      <section className="py-52 px-6 text-center relative bg-background overflow-hidden z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-neon-yellow/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <SectionReveal>
          <h2 className="font-ibm text-[11vw] xs:text-5xl md:text-8xl lg:text-[140px] font-light text-white mb-12 md:mb-16 tracking-tighter leading-[1] md:leading-[0.85] uppercase">
            Let's Build <br className="hidden sm:block" />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow block sm:inline mt-2 sm:mt-0">The Future.</span>
          </h2>
          <Link to="/contact" className="group relative inline-flex items-center justify-center px-16 py-7 overflow-hidden rounded-full transition-all duration-500">
            <div className="absolute inset-0 bg-neon-yellow group-hover:scale-105 transition-transform duration-500" />
            <span className="relative z-10 font-ibm font-medium text-[12px] tracking-[0.5em] uppercase text-background">
              Start The Conversation
            </span>
          </Link>
        </SectionReveal>
      </section>
    </div>
  );
}
