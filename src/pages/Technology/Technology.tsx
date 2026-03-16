import { SectionReveal } from '@/components/ui/SectionReveal';
import { Link } from 'react-router-dom';
import { SEO, Schemas } from '@/components/seo/SEO';
import { 
  Box, 
  Layers, 
  Wind, 
  Zap, 
  Mountain, 
  Palette, 
  Video, 
  Film, 
  Sliders, 
  Eye, 
  Sparkles, 
  Cpu,
  Star,
  CheckCircle2,
  Users,
  Briefcase
} from 'lucide-react';

const tools = [
  { name: 'Blender', category: 'Modeling & Animation', desc: 'Open-source powerhouse for 3D modeling, sculpting, and animation.', icon: Box },
  { name: 'Cinema 4D', category: 'Motion & Design', desc: 'Industry-standard tool for motion graphics and 3D design.', icon: Layers },
  { name: 'Houdini', category: 'Simulations & VFX', desc: 'The gold standard for procedural VFX, simulations, and dynamics.', icon: Wind },
  { name: 'Unreal Engine', category: 'Real-time & VR', desc: 'Real-time rendering, VR environments, and architectural visualization.', icon: Zap },
  { name: 'ZBrush', category: 'Digital Sculpting', desc: 'Organic sculpting with unparalleled detail and flexibility.', icon: Mountain },
  { name: 'Substance 3D', category: 'Materials & Texturing', desc: 'End-to-end material creation and texturing pipeline.', icon: Palette },
  { name: 'After Effects', category: 'Compositing', desc: 'Industry-leading compositing and motion graphics tool.', icon: Video },
  { name: 'Premiere Pro', category: 'Video Editing', desc: 'Professional non-linear video editing and finishing.', icon: Film },
  { name: 'DaVinci Resolve', category: 'Color Grading', desc: 'Cinematic color grading and advanced audio post.', icon: Sliders },
  { name: 'Nuke', category: 'VFX Compositing', desc: 'Node-based compositing for high-end VFX production.', icon: Eye },
  { name: 'Midjourney', category: 'AI Generation', desc: 'AI-powered image generation integrated into creative workflows.', icon: Sparkles },
  { name: 'Stable Diffusion', category: 'AI Generation', desc: 'Open-source AI model for visual exploration and concept generation.', icon: Cpu },
];

const stats = [
  { value: '5+', label: 'Years of Experience', desc: 'Pushing the boundaries of 3D creative production', icon: Star },
  { value: '200+', label: 'Projects Delivered', desc: 'From concept to final render — on time, every time', icon: CheckCircle2 },
  { value: '80+', label: 'Satisfied Clients', desc: 'Serving brands globally with precision', icon: Users },
  { value: '12', label: 'Core Services', desc: 'A complete creative ecosystem under one roof', icon: Briefcase },
];

export default function Technology() {
  return (
    <div className="bg-background min-h-screen pb-12 overflow-hidden relative selection:bg-neon-yellow selection:text-background">
      <SEO
        title="Software Stack & Technology Arsenal"
        description="Explore the professional tools powering Geometric Studio: Blender, Cinema 4D, Houdini, Unreal Engine, ZBrush, Substance 3D, After Effects, DaVinci Resolve, and cutting-edge AI tools like Midjourney."
        keywords="3D software stack, Blender studio, Cinema 4D production, Houdini VFX, Unreal Engine visualization, ZBrush sculpting, After Effects compositing, AI 3D production"
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

      {/* Header Section */}
      <section className="px-6 relative pb-16 md:pb-24 xl:pb-32 pt-36 md:pt-48 lg:pt-56 z-10 overflow-hidden">
        {/* Technical HUD elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center relative">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Technical Arsenal</span>
                <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
              </div>
              
              <h1 className="font-ibm text-[13vw] xs:text-5xl md:text-7xl lg:text-[90px] xl:text-[130px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 uppercase">
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
      <section className="py-12 md:py-16 xl:py-24 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <SectionReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden h-full">
                <div className="absolute top-0 left-6 sm:left-10 w-10 h-[2px] bg-neon-yellow/30 group-hover:bg-neon-yellow group-hover:w-20 transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <div className="relative z-10">
                  <div className="mb-6 md:mb-8 text-white/10 group-hover:text-neon-yellow transition-colors duration-700">
                    <stat.icon className="w-10 h-10 md:w-12 md:h-12" strokeWidth={1} />
                  </div>
                  <div className="font-ibm text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 md:mb-6 tracking-tighter group-hover:text-neon-yellow transition-colors duration-700">{stat.value}</div>
                  <div className="font-ibm text-[8px] md:text-[10px] tracking-[0.4em] uppercase text-white/40 mb-2 md:mb-3">{stat.label}</div>
                  <p className="font-ibm text-[10px] md:text-xs text-white/20 leading-relaxed font-light">{stat.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Software Arsenal Grid */}
      <section className="py-16 md:py-20 xl:py-32 px-6 relative z-10 bg-white/[0.01]">
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
                <div className="group h-full flex flex-col p-6 sm:p-8 glass-panel rounded-[32px] hover:bg-white/[0.04] hover:border-white/20 transition-all duration-700 relative overflow-hidden text-left">
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-neon-yellow/30 group-hover:bg-neon-yellow/5 transition-all text-white/10 group-hover:text-neon-yellow">
                    <tool.icon className="w-[18px] h-[18px] md:w-5 md:h-5" strokeWidth={1.5} />
                  </div>
                  
                  <div className="flex flex-col gap-1 mb-4 md:mb-6 transition-all duration-700 group-hover:translate-x-2 text-left">
                    <span className="text-[7px] md:text-[8px] font-ibm tracking-[0.4em] uppercase text-neon-yellow/40 group-hover:text-neon-yellow transition-colors">Software.0{i+1}</span>
                    <h3 className="font-ibm font-light text-xl md:text-2xl text-white tracking-tight leading-tight uppercase">{tool.name}</h3>
                  </div>
                  
                  <div className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full border border-white/5 bg-background text-[7px] md:text-[8px] font-ibm tracking-[0.3em] text-white/30 uppercase w-fit mb-6 md:mb-8 transition-all group-hover:border-white/20 group-hover:text-white/60">
                    {tool.category}
                  </div>
                  
                  <p className="font-ibm text-[10px] md:text-[11px] text-white/30 font-light leading-relaxed group-hover:text-white/50 transition-colors duration-700 mt-auto text-left">{tool.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-40 px-6 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
            <SectionReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
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

    </div>
  );
}
