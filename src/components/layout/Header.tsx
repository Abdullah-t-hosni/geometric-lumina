import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '/', number: '01' },
  { label: 'About', href: '/about', number: '02' },
  { label: 'Services', href: '/services', number: '03' },
  { label: 'Portfolio', href: '/portfolio', number: '04' },
  { label: 'Process', href: '/process', number: '05' },
  { label: 'Technology', href: '/technology', number: '06' },
  { label: 'Contact', href: '/contact', number: '07' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-background/90 backdrop-blur-xl border-b border-border' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border-2 border-neon-yellow rotate-45 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
              <div className="w-3 h-3 bg-neon-yellow rotate-45 group-hover:scale-125 transition-transform duration-500" />
            </div>
            <span className="font-satoshi text-xl font-bold text-foreground tracking-wide">
              Geometric
            </span>
          </Link>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2 border border-neon-yellow text-neon-yellow text-sm font-satoshi font-semibold tracking-wider uppercase hover:bg-neon-yellow hover:text-background transition-all duration-300"
            >
              Start a Project
            </Link>
            
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-10 h-10 flex flex-col justify-center items-end gap-[5px] group"
              aria-label="Toggle menu"
            >
              <span className={`block h-[2px] bg-foreground transition-all duration-500 ${menuOpen ? 'w-7 -rotate-45 translate-y-[7px] bg-neon-yellow' : 'w-7'}`} />
              <span className={`block h-[2px] bg-foreground transition-all duration-500 ${menuOpen ? 'opacity-0 w-0' : 'w-5'}`} />
              <span className={`block h-[2px] bg-foreground transition-all duration-500 ${menuOpen ? 'w-7 rotate-45 -translate-y-[7px] bg-neon-yellow' : 'w-7'}`} />
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl flex items-center justify-center"
          >
            {/* Background accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.08 }}
                transition={{ duration: 0.8 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-deep-teal"
              />
            </div>

            <nav className="relative z-10 w-full max-w-5xl mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      to={link.href}
                      className="group flex items-center gap-6 py-4 border-b border-border/40 hover:border-neon-yellow/60 transition-all duration-300"
                    >
                      <span className="font-ibm text-xs text-muted-foreground group-hover:text-neon-yellow transition-colors duration-300 w-8">
                        {link.number}
                      </span>
                      <span className="font-satoshi text-4xl md:text-5xl font-black text-foreground group-hover:text-neon-yellow transition-colors duration-300 tracking-tight leading-none">
                        {link.label}
                      </span>
                      <span className="ml-auto text-muted-foreground group-hover:text-neon-yellow group-hover:translate-x-2 transition-all duration-300">
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Bottom contact info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-border/40"
              >
                <div className="flex gap-6 text-sm text-muted-foreground font-ibm">
                  <a href="https://instagram.com/geometric_studios" target="_blank" rel="noopener noreferrer" className="hover:text-neon-yellow transition-colors">Instagram</a>
                  <a href="https://behance.net/geometric_stud" target="_blank" rel="noopener noreferrer" className="hover:text-neon-yellow transition-colors">Behance</a>
                  <a href="https://linkedin.com/company/geometric-studios" target="_blank" rel="noopener noreferrer" className="hover:text-neon-yellow transition-colors">LinkedIn</a>
                </div>
                <a href="mailto:geometric3dadv@gmail.com" className="text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                  geometric3dadv@gmail.com
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
