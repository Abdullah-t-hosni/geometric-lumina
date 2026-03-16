import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/Logo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Header bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled && !menuOpen ? 'bg-background/95 border-b border-white/5 py-2 shadow-lg shadow-black/20' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0" aria-label="Geometric Studio — Go to homepage">
            <Logo className="group-hover:scale-[1.02] group-active:scale-[0.98] transition-transform duration-300" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-10 xl:gap-14 text-[12px] xl:text-[13px] font-ibm text-creamy-white/60" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative inline-flex items-center gap-2 tracking-[0.25em] uppercase transition-all duration-300 group ${
                    isActive ? 'text-neon-yellow font-normal' : 'font-light hover:text-creamy-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute -bottom-2 left-0 h-[1.5px] rounded-full bg-neon-yellow shadow-[0_0_8px_rgba(204,255,0,0.5)] transition-transform duration-300 origin-left ${
                      isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              aria-label="Start a project with Geometric Studio"
              className="hidden md:inline-flex items-center justify-center px-7 py-3 rounded-full bg-white/5 border border-white/10 text-creamy-white text-[11px] font-ibm font-medium tracking-[0.25em] hover:bg-neon-yellow/10 hover:border-neon-yellow/40 hover:text-neon-yellow transition-all duration-300 uppercase shadow-lg shadow-black/20"
            >
              Start Project
            </Link>
            
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-end gap-[6px] group lg:hidden z-50 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block h-[2px] bg-creamy-white transition-all duration-500 rounded-full ${menuOpen ? 'w-8 -rotate-45 translate-y-[8px] bg-neon-yellow' : 'w-8 group-hover:w-6'}`} />
              <span className={`block h-[2px] bg-creamy-white transition-all duration-500 rounded-full ${menuOpen ? 'opacity-0 w-0' : 'w-6 group-hover:w-8'}`} />
              <span className={`block h-[2px] bg-creamy-white transition-all duration-500 rounded-full ${menuOpen ? 'w-8 rotate-45 -translate-y-[8px] bg-neon-yellow' : 'w-8 group-hover:w-5'}`} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background/95 flex items-center justify-center overflow-y-auto transform-gpu"
          >
            {/* Background cinematic glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none fixed">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.3 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-deep-teal/40 blur-[150px] transform-gpu"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-neon-yellow/20 blur-[120px] transform-gpu"
              />
            </div>

            <nav className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-12 min-h-screen flex flex-col justify-center" aria-label="Mobile navigation" id="mobile-menu">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-1 md:gap-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.href}
                      className="group flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b border-white/5 hover:border-neon-yellow/30 transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />
                      
                      <span className="font-ibm text-xl sm:text-2xl md:text-3xl font-light text-creamy-white group-hover:text-neon-yellow transition-colors duration-500 tracking-tight leading-none group-hover:translate-x-2">
                        {link.label}
                      </span>
                      <span className="ml-auto text-creamy-white/20 group-hover:text-neon-yellow group-hover:translate-x-2 transition-all duration-500 font-light">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Actions & Contact info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 md:mt-16 flex flex-col gap-8 md:gap-10 pt-6 md:pt-8 border-t border-white/10"
              >
                {/* Mobile CTA (Shows only on small screens inside menu) */}
                <div className="md:hidden flex justify-start">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-neon-yellow/10 border border-neon-yellow/30 text-neon-yellow text-xs font-ibm font-medium tracking-[0.2em] uppercase glow-yellow hover:bg-neon-yellow hover:text-background transition-all duration-500 w-full text-center"
                  >
                    Start a Project
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-4 md:gap-8 text-[10px] md:text-[11px] text-creamy-white/50 font-ibm tracking-[0.2em] uppercase font-light">
                    <a href="https://instagram.com/geometric_studios" target="_blank" rel="noopener noreferrer" className="hover:text-neon-yellow transition-colors duration-300">Instagram</a>
                    <a href="https://x.com/geometric_stud" target="_blank" rel="noopener noreferrer" className="hover:text-neon-yellow transition-colors duration-300">X</a>
                    <a href="https://linkedin.com/company/geometric-studios" target="_blank" rel="noopener noreferrer" className="hover:text-neon-yellow transition-colors duration-300">LinkedIn</a>
                    <a href="https://www.tiktok.com/@geometric_studios" target="_blank" rel="noopener noreferrer" className="hover:text-neon-yellow transition-colors duration-300">TikTok</a>
                  </div>
                  <a href="mailto:contact@geometric-studios.com" className="text-[11px] md:text-[12px] text-creamy-white/70 hover:text-neon-yellow transition-colors duration-300 font-ibm font-light tracking-wide break-all">
                    contact@geometric-studios.com
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
