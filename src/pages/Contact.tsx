import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionReveal } from '@/components/ui/SectionReveal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email'),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const projectTypes = [
  'Motion Graphics',
  'Product Visualization',
  'Booth & Exhibition Design',
  'Social Media Content',
  'Anamorphic Screens',
  'Simulations',
  'Architectural Visualization',
  'Micro Visualization',
  'VR Environments',
  'CGI Compositing',
  '3D Scanning',
  'AI Content Production',
  'Multiple Services',
  'Other',
];

const budgetRanges = [
  'Under $1,000',
  '$1,000 – $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
  "Let's discuss",
];

const contactInfo = [
  { label: 'Email', value: 'geometric3dadv@gmail.com', href: 'mailto:geometric3dadv@gmail.com' },
  { label: 'Phone 1', value: '+20 10 63565635', href: 'tel:+201063565635' },
  { label: 'Phone 2', value: '+20 10 25247955', href: 'tel:+201025247955' },
  { label: 'Phone 3', value: '+20 10 32843037', href: 'tel:+201032843037' },
];

const socialLinks = [
  { label: 'Instagram', handle: '@geometric_studios', href: 'https://instagram.com/geometric_studios' },
  { label: 'Behance', handle: 'geometric_stud', href: 'https://behance.net/geometric_stud' },
  { label: 'LinkedIn', handle: 'geometric-studios', href: 'https://linkedin.com/company/geometric-studios' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated submit
    setIsLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <div className="bg-background min-h-screen pt-24 pb-12 overflow-hidden relative">
      {/* Premium Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />

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
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Communications Portal</span>
                <div className="w-12 h-[1px] bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
              </div>
              
              <h1 className="font-satoshi text-6xl md:text-8xl lg:text-[130px] font-light text-white leading-[0.85] tracking-tighter mb-12 uppercase">
                Start The <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow px-4">Contact.</span>
              </h1>

              <p className="font-ibm text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed border-t border-white/10 pt-12">
                Bypass the noise. Connect directly with our engineering team to manifest your cinematic vision.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-6 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-12">
            <SectionReveal>
              <div className="glass-panel p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 left-10 w-10 h-[2px] bg-neon-yellow/30 group-hover:bg-neon-yellow group-hover:w-20 transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <h3 className="font-satoshi text-[10px] tracking-[0.5em] uppercase text-white/30 mb-12">Direct_Channels</h3>
                <div className="space-y-10">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex flex-col gap-2 group/item">
                      <span className="font-ibm text-[8px] text-white/20 uppercase tracking-[0.4em] group-hover/item:text-neon-yellow/60 transition-colors">{item.label}</span>
                      <a href={item.href} className="font-satoshi text-xl text-white font-light group-hover/item:translate-x-2 transition-transform duration-500 block">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
 
            <SectionReveal delay={0.1}>
              <div className="glass-panel p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 left-10 w-10 h-[2px] bg-white/10 group-hover:bg-neon-yellow group-hover:w-20 transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <h3 className="font-satoshi text-[10px] tracking-[0.5em] uppercase text-white/30 mb-12">Social_Grid</h3>
                <div className="space-y-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group/link"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="font-ibm text-[8px] text-white/20 uppercase tracking-[0.4em] group-hover/link:text-neon-yellow/60 transition-colors">{link.label}</span>
                        <span className="font-satoshi text-lg font-light text-white group-hover/link:translate-x-2 transition-transform duration-500">{link.handle}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover/link:border-neon-yellow/30 group-hover/link:text-neon-yellow transition-all duration-500">
                        <span className="text-xl">↗</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>
 
            <SectionReveal delay={0.2}>
              <div className="glass-panel p-10 rounded-[32px] relative overflow-hidden group border-neon-yellow/10 bg-neon-yellow/[0.01]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-yellow/5 rounded-full blur-[40px] pointer-events-none" />
                <h4 className="font-satoshi text-[9px] tracking-[0.5em] uppercase text-white/40 mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neon-yellow animate-pulse shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  Legal_Entities
                </h4>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2 border-l border-white/5 pl-6">
                    <span className="font-ibm text-[8px] text-white/20 uppercase tracking-[0.3em]">Commercial Register No.</span>
                    <span className="font-ibm text-sm text-white/60 tracking-widest">17195</span>
                  </div>
                  <div className="flex flex-col gap-2 border-l border-white/5 pl-6">
                    <span className="font-ibm text-[8px] text-white/20 uppercase tracking-[0.3em]">Tax National ID No.</span>
                    <span className="font-ibm text-sm text-white/60 tracking-widest">763-211-966</span>
                  </div>
                </div>
                <div className="mt-12 flex items-start gap-4 p-4 bg-white/[0.02] rounded-2xl border border-white/5">
                   <span className="text-neon-yellow/40 text-xs italic">!</span>
                   <p className="font-ibm text-[9px] text-white/30 leading-relaxed uppercase tracking-wider">
                     All visual assets are protected property of Geometric Studio. Unauthorized use strictly prohibited.
                   </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <SectionReveal delay={0.15}>
              <div className="glass-panel p-10 md:p-16 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 rounded-full border border-neon-yellow/30 bg-neon-yellow/5 flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(204,255,0,0.1)]">
                      <span className="text-neon-yellow text-4xl">✓</span>
                    </div>
                    <h3 className="font-satoshi text-5xl font-light text-white mb-6 tracking-tighter uppercase">Transmission Success.</h3>
                    <p className="font-ibm text-white/40 text-sm font-light mb-12 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been logged into our sequence. Our strategy team will review the parameters and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-ibm text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-background transition-all duration-500"
                    >
                      New Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <FormField
                        label="Identity_Check *"
                        error={errors.name?.message}
                      >
                        <input
                          {...register('name')}
                          placeholder="Your full name"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500"
                        />
                      </FormField>
   
                      <FormField label="Organization_Ref" error={errors.company?.message}>
                        <input
                          {...register('company')}
                          placeholder="Company name"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500"
                        />
                      </FormField>
                    </div>
   
                    <FormField label="Digital_Terminal *" error={errors.email?.message}>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="your.email@instance.com"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500"
                      />
                    </FormField>
   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <FormField label="Capability_Requirement *" error={errors.projectType?.message}>
                        <div className="relative">
                          <select
                            {...register('projectType')}
                            className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[12px] text-white/50 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-background text-white/40">Select Service</option>
                            {projectTypes.map(pt => (
                              <option key={pt} value={pt} className="bg-background text-white">{pt}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-white/20">
                            <span className="text-[8px]">▼</span>
                          </div>
                        </div>
                      </FormField>
   
                      <FormField label="Budget_Scale *" error={errors.budget?.message}>
                        <div className="relative">
                          <select
                            {...register('budget')}
                            className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[12px] text-white/50 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500 appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-background text-white/40">Select Budget</option>
                            {budgetRanges.map(b => (
                              <option key={b} value={b} className="bg-background text-white">{b}</option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-white/20">
                            <span className="text-[8px]">▼</span>
                          </div>
                        </div>
                      </FormField>
                    </div>
   
                    <FormField label="Brief_Specifications *" error={errors.message?.message}>
                      <textarea
                        {...register('message')}
                        rows={6}
                        placeholder="Outline your vision, timeline, and specifications..."
                        className="w-full bg-white/[0.02] border border-white/10 rounded-3xl px-6 py-6 font-ibm text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500 resize-none"
                      />
                    </FormField>
   
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="group relative w-full py-6 overflow-hidden rounded-full transition-all duration-500 disabled:opacity-50"
                    >
                      <div className="absolute inset-0 bg-neon-yellow group-hover:scale-105 transition-transform duration-500" />
                      <div className="relative z-10 flex items-center justify-center gap-4">
                        {isLoading ? (
                          <>
                            <span className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                            <span className="font-ibm font-medium text-[11px] tracking-[0.5em] uppercase text-background">Transmitting_Data</span>
                          </>
                        ) : (
                          <span className="font-ibm font-medium text-[11px] tracking-[0.5em] uppercase text-background">Submit_Inquiry</span>
                        )}
                      </div>
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <label className="block font-ibm text-[8px] text-white/30 tracking-[0.5em] uppercase px-2">{label}</label>
      {children}
      {error && <p className="text-[10px] text-red-500/80 font-ibm px-2 tracking-wide">! {error}</p>}
    </div>
  );
}
