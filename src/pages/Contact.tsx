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
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-teal/10 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-neon-yellow" />
              <span className="text-xs text-neon-yellow font-ibm tracking-widest uppercase">Get in Touch</span>
            </div>
            <h1 className="font-satoshi text-5xl md:text-7xl font-black text-foreground leading-tight mb-6">
              Your Next Vision
              <br />
              <span className="text-neon-yellow">Starts Here</span>
            </h1>
            <p className="font-ibm text-muted-foreground text-xl max-w-2xl">
              We're ready to collaborate, design, and build visuals that move beyond the screen. Let's connect and make it happen.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — Contact info */}
          <div className="lg:col-span-2 space-y-10">
            <SectionReveal>
              <div>
                <h3 className="font-satoshi font-bold text-foreground mb-5">Contact Details</h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <span className="font-ibm text-xs text-muted-foreground uppercase tracking-wider w-16 pt-0.5">{item.label}</span>
                      <a href={item.href} className="font-ibm text-foreground hover:text-neon-yellow transition-colors text-sm">{item.value}</a>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.1}>
              <div>
                <h3 className="font-satoshi font-bold text-foreground mb-5">Social Media</h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <span className="font-ibm text-xs text-muted-foreground uppercase tracking-wider w-16">{link.label}</span>
                      <span className="font-ibm text-sm text-foreground group-hover:text-neon-yellow transition-colors">{link.handle}</span>
                      <span className="text-muted-foreground group-hover:text-neon-yellow group-hover:translate-x-1 transition-all duration-300 text-xs">→</span>
                    </a>
                  ))}
                </div>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="border border-border p-6">
                <h4 className="font-satoshi font-bold text-foreground mb-2">Commercial Registration</h4>
                <p className="font-ibm text-xs text-muted-foreground">No. 17195</p>
                <p className="font-ibm text-xs text-muted-foreground mt-1">National No. 763211966</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-ibm text-xs text-muted-foreground leading-relaxed italic">
                    "Every visual in this presentation was crafted by the Geometric Studio team."
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <SectionReveal delay={0.15}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="border border-neon-yellow/50 p-12 text-center bg-neon-yellow/5"
                >
                  <div className="w-16 h-16 border-2 border-neon-yellow rotate-45 flex items-center justify-center mx-auto mb-6">
                    <span className="text-neon-yellow text-xl -rotate-45">✓</span>
                  </div>
                  <h3 className="font-satoshi text-2xl font-black text-foreground mb-3">Message Sent!</h3>
                  <p className="font-ibm text-muted-foreground mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm text-neon-yellow hover:underline font-ibm"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField
                      label="Name *"
                      error={errors.name?.message}
                    >
                      <input
                        {...register('name')}
                        placeholder="Your full name"
                        className="w-full bg-muted border border-border px-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-yellow transition-colors duration-300"
                      />
                    </FormField>

                    <FormField label="Company" error={errors.company?.message}>
                      <input
                        {...register('company')}
                        placeholder="Company name (optional)"
                        className="w-full bg-muted border border-border px-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-yellow transition-colors duration-300"
                      />
                    </FormField>
                  </div>

                  <FormField label="Email *" error={errors.email?.message}>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full bg-muted border border-border px-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-yellow transition-colors duration-300"
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Project Type *" error={errors.projectType?.message}>
                      <select
                        {...register('projectType')}
                        className="w-full bg-muted border border-border px-4 py-3 font-ibm text-sm text-foreground focus:outline-none focus:border-neon-yellow transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-background">Select a service</option>
                        {projectTypes.map(pt => (
                          <option key={pt} value={pt} className="bg-background">{pt}</option>
                        ))}
                      </select>
                    </FormField>

                    <FormField label="Budget Range *" error={errors.budget?.message}>
                      <select
                        {...register('budget')}
                        className="w-full bg-muted border border-border px-4 py-3 font-ibm text-sm text-foreground focus:outline-none focus:border-neon-yellow transition-colors duration-300 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-background">Select budget</option>
                        {budgetRanges.map(b => (
                          <option key={b} value={b} className="bg-background">{b}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <FormField label="Message *" error={errors.message?.message}>
                    <textarea
                      {...register('message')}
                      rows={5}
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="w-full bg-muted border border-border px-4 py-3 font-ibm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neon-yellow transition-colors duration-300 resize-none"
                    />
                  </FormField>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 bg-neon-yellow text-background font-satoshi font-bold text-sm tracking-wider uppercase hover:bg-neon-yellow/90 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isLoading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <span>→</span></>
                    )}
                  </button>
                </form>
              )}
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block font-ibm text-xs text-muted-foreground tracking-wider uppercase mb-2">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs text-coral-red font-ibm">{error}</p>}
    </div>
  );
}
