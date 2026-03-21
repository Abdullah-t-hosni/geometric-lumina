import { useState } from 'react';
import { m } from 'framer-motion';
import { SectionReveal } from '@/shared/ui/SectionReveal';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SEO, Schemas } from '@/shared/seo/SEO';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ArrowUpRight,
} from 'lucide-react';

const TikTokIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.59-1.01-.01 2.62-.02 5.24-.02 7.86 0 1.91-.37 3.84-1.55 5.39-1.27 1.72-3.4 2.69-5.5 2.71-2.73.06-5.41-1.54-6.64-3.97-1.29-2.5-.9-5.71 1.05-7.73 1.4-1.49 3.51-2.18 5.51-1.75.01 1.4-.01 2.8.01 4.2-.66-.19-1.4-.18-2.01.07-.84.34-1.47 1.11-1.64 2-.23.99.11 2.08.85 2.76.71.69 1.76.91 2.7.59 1.07-.35 1.83-1.41 1.95-2.52.05-1.07.03-2.15.03-3.23.01-4.48.01-8.97.01-13.45z"/>
  </svg>
);

const PinterestIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} className={className}>
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.411-5.97 1.411-5.97s-.361-.722-.361-1.79c0-1.677.973-2.93 2.185-2.93 1.031 0 1.53.774 1.53 1.701 0 1.037-.659 2.587-.998 4.026-.283 1.196.598 2.172 1.776 2.172 2.131 0 3.772-2.249 3.772-5.492 0-2.871-2.063-4.88-5.005-4.88-3.411 0-5.411 2.561-5.411 5.202 0 1.031.397 2.138.893 2.738.098.118.112.221.083.344-.092.38-.297 1.21-.337 1.378-.053.224-.176.27-.406.163-1.516-.706-2.463-2.921-2.463-4.704 0-3.829 2.784-7.344 8.019-7.344 4.211 0 7.485 2.999 7.485 7.015 0 4.181-2.635 7.545-6.29 7.545-1.229 0-2.384-.639-2.779-1.396l-.756 2.879c-.274 1.043-1.016 2.352-1.512 3.161 1.121.346 2.308.533 3.538.533 6.621 0 11.988-5.367 11.988-11.987C24.004 5.367 18.638 0 12.017 0z"/>
  </svg>
);

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
  { label: 'Email', value: 'contact@geometric-studios.com', href: 'mailto:contact@geometric-studios.com', icon: Mail },
  { label: 'Primary Line', value: '+20 10 63565635', href: 'tel:+201063565635', icon: Phone },
  { label: 'Internal Node 2', value: '+20 10 25247955', href: 'tel:+201025247955', icon: Phone },
  { label: 'Support Node 3', value: '+20 10 32843037', href: 'tel:+201032843037', icon: Phone },
];

const socialLinks = [
  { label: 'Instagram', handle: '@geometric_studios', href: 'https://instagram.com/geometric_studios', icon: Instagram },
  { label: 'X (Twitter)', handle: '@geometric_stud', href: 'https://x.com/geometric_stud', icon: Twitter },
  { label: 'LinkedIn', handle: 'geometric-studios', href: 'https://linkedin.com/company/geometric-studios', icon: Linkedin },
  { label: 'TikTok', handle: '@geometric_studios', href: 'https://www.tiktok.com/@geometric_studios', icon: TikTokIcon },
  { label: 'Pinterest', handle: 'geometric_studios', href: 'https://pinterest.com/geometric_studios', icon: PinterestIcon }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    // 🚀 Professional Simulation Logic
    console.log("Transmission Logged:", data);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    setSubmitted(true);
    reset();
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-background min-h-screen pb-12 overflow-hidden relative selection:bg-neon-yellow selection:text-background"
    >
      <SEO
        title="Contact Us — Start Your Project"
        description="Connect with Geometric Studio to bring your cinematic 3D vision to life. Reach out for project inquiries, collaborations, or consultations serving clients worldwide."
        keywords="contact geometric studio, 3D project inquiry, hire 3D studio, motion graphics quote, cinematic production contact"
        schema={[
          Schemas.contactPage(),
          Schemas.breadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]),
          Schemas.faq([
            { question: 'Where is Geometric Studio available?', answer: 'Geometric Studio operates as a digital-first creative lab serving clients globally across all time zones.' },
            { question: 'How do I start a project with Geometric Studio?', answer: 'Fill in the contact form or reach us directly by email at contact@geometric-studios.com or by phone at +20 10 63565635.' },
            { question: 'What services does Geometric Studio offer?', answer: 'We offer 3D visualization, motion graphics, product animation, anamorphic screens, VR environments, CGI compositing, 3D scanning, AI content production, and more.' },
            { question: 'How long does a typical project take?', answer: 'Project timelines vary by complexity. Simple animations can take 1-2 weeks, while full production projects can range from 4-12 weeks. We discuss timelines during discovery.' },
          ]),
        ]}
      />
      {/* Premium Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-deep-teal/20 rounded-full blur-[150px] transform-gpu pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-neon-yellow/5 rounded-full blur-[120px] transform-gpu pointer-events-none z-0" />

      {/* Header */}
      <section className="px-6 relative pb-20 md:pb-32 xl:pb-48 pt-36 md:pt-48 lg:pt-56 z-10 overflow-hidden min-h-screen">
        {/* Technical HUD elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/[0.02] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto text-center relative">
          <SectionReveal>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                <span className="text-[10px] font-ibm tracking-[0.5em] uppercase text-neon-yellow">Communications Portal</span>
                <div className="w-1 h-1 rounded-full bg-neon-yellow shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
              </div>
              
              <h1 className="font-ibm text-[12vw] xs:text-5xl md:text-7xl lg:text-[90px] xl:text-[130px] font-light text-white leading-[1.1] md:leading-[0.85] tracking-tighter mb-8 md:mb-12 uppercase">
                Start The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-yellow to-neon-yellow/40 glow-text-yellow block sm:inline mt-2 sm:mt-0">Contact.</span>
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
              <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 left-10 w-1.5 h-1.5 rounded-full bg-neon-yellow/30 group-hover:bg-neon-yellow transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <h3 className="font-ibm text-[10px] tracking-[0.5em] uppercase text-white/30 mb-12">Direct.Channels</h3>
                <div className="space-y-6 md:space-y-10">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex flex-col gap-4 group/item">
                      <div className="flex items-center gap-3">
                        <item.icon size={12} className="text-neon-yellow animate-pulse" />
                        <span className="font-ibm text-[8px] text-white/20 uppercase tracking-[0.4em] group-hover/item:text-neon-yellow/60 transition-colors">{item.label}</span>
                      </div>
                      <a href={item.href} className="font-ibm text-lg xs:text-xl text-white font-light group-hover/item:translate-x-2 transition-transform duration-500 block break-words">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
 
            <SectionReveal delay={0.1}>
              <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-[32px] group hover:border-white/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute top-0 left-10 w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-neon-yellow transition-all duration-700 shadow-[0_0_10px_rgba(204,255,0,0.3)]" />
                <h3 className="font-ibm text-[10px] tracking-[0.5em] uppercase text-white/30 mb-12">Social.Grid</h3>
                <div className="space-y-6 md:space-y-8">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group/link"
                    >
                      <div className="flex items-center gap-4 w-2/3 md:w-full">
                        <div className="p-3 rounded-xl bg-white/[0.03] text-white/10 group-hover/link:text-neon-yellow transition-colors">
                          <link.icon size={18} strokeWidth={1.5} />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-ibm text-[8px] text-white/20 uppercase tracking-[0.4em] group-hover/link:text-neon-yellow/60 transition-colors">{link.label}</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/5 flex items-center justify-center text-white/20 group-hover/link:border-neon-yellow/30 group-hover/link:text-neon-yellow transition-all duration-500 flex-shrink-0">
                        <ArrowUpRight size={18} strokeWidth={1.5} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>
 
            <SectionReveal delay={0.2}>
              <div className="glass-panel p-6 sm:p-8 md:p-10 rounded-[32px] relative overflow-hidden group border-neon-yellow/10 bg-neon-yellow/[0.01]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-yellow/5 rounded-full blur-[40px] pointer-events-none" />
                <h4 className="font-ibm text-[9px] tracking-[0.5em] uppercase text-white/40 mb-8 flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-neon-yellow animate-pulse shadow-[0_0_10px_rgba(204,255,0,0.5)]" />
                  Legal.Entities
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
                   <span className="text-neon-yellow/40 text-xs text-left">!</span>
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
              <div className="glass-panel p-6 sm:p-10 md:p-16 rounded-[40px] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/5" />
                
                {submitted ? (
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 rounded-full border border-neon-yellow/30 bg-neon-yellow/5 flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(204,255,0,0.1)]">
                      <span className="text-neon-yellow text-4xl">✓</span>
                    </div>
                    <h3 className="font-ibm text-5xl font-light text-white mb-6 tracking-tighter uppercase">Transmission Success.</h3>
                    <p className="font-ibm text-white/40 text-sm font-light mb-12 max-w-md mx-auto leading-relaxed">
                      Your inquiry has been logged into our sequence. Our strategy team will review the parameters and contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-ibm text-[10px] tracking-[0.4em] uppercase hover:bg-white hover:text-background transition-all duration-500"
                    >
                      New Transmission
                    </button>
                  </m.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <FormField
                        label="Identity.Check *"
                        error={errors.name?.message}
                      >
                        <input
                          {...register('name')}
                          placeholder="Your full name"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500"
                        />
                      </FormField>
   
                      <FormField label="Organization.Ref" error={errors.company?.message}>
                        <input
                          {...register('company')}
                          placeholder="Company name"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500"
                        />
                      </FormField>
                    </div>
   
                    <FormField label="Digital.Terminal *" error={errors.email?.message}>
                      <input
                        {...register('email')}
                        type="email"
                        placeholder="your.email@instance.com"
                        className="w-full bg-white/[0.02] border border-white/10 rounded-2xl px-6 py-5 font-ibm text-[13px] text-white placeholder:text-white/20 focus:outline-none focus:border-neon-yellow/40 focus:bg-white/[0.04] transition-all duration-500"
                      />
                    </FormField>
   
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <FormField label="Capability.Requirement *" error={errors.projectType?.message}>
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
   
                      <FormField label="Budget.Scale *" error={errors.budget?.message}>
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
   
                    <FormField label="Brief.Specifications *" error={errors.message?.message}>
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
    </m.div>
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
