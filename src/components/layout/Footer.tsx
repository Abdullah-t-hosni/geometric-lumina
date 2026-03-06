import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const serviceLinks = [
  { label: 'Motion Graphics', href: '/services/motion-graphics' },
  { label: 'Product Visualization', href: '/services/product-visualization' },
  { label: 'Booth & Exhibition', href: '/services/booth-exhibition-design' },
  { label: 'Anamorphic Screens', href: '/services/anamorphic-screens' },
  { label: 'Simulations', href: '/services/simulations' },
  { label: 'AI Content', href: '/services/ai-content-production' },
];

const pageLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Technology', href: '/technology' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-card border-t border-border overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-yellow/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-8 h-8 border-2 border-neon-yellow rotate-45 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-neon-yellow rotate-45" />
              </div>
              <span className="font-satoshi text-lg font-bold text-foreground">Geometric</span>
            </Link>
            <p className="text-sm text-muted-foreground font-ibm leading-relaxed mb-5">
              Precision in Imagination. Cutting-edge 3D advertising that captivates, communicates, and converts.
            </p>
            <div className="flex gap-3">
              {['IG', 'BE', 'IN'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-border flex items-center justify-center text-xs text-muted-foreground hover:border-neon-yellow hover:text-neon-yellow transition-all duration-300 font-ibm font-bold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-satoshi font-bold text-sm text-foreground tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-neon-yellow transition-colors duration-300 font-ibm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-satoshi font-bold text-sm text-foreground tracking-widest uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-neon-yellow transition-colors duration-300 font-ibm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-satoshi font-bold text-sm text-foreground tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:geometric3dadv@gmail.com" className="block text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                geometric3dadv@gmail.com
              </a>
              <a href="tel:+201063565635" className="block text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                +20 10 63565635
              </a>
              <a href="tel:+201025247955" className="block text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                +20 10 25247955
              </a>
              <a href="tel:+201032843037" className="block text-sm text-muted-foreground hover:text-neon-yellow transition-colors font-ibm">
                +20 10 32843037
              </a>
              <p className="text-sm text-muted-foreground font-ibm mt-3">Egypt</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-ibm">
            © 2024 Geometric Services. Commercial Registration: 17195
          </p>
          <p className="text-xs text-muted-foreground font-ibm">
            Crafted with precision. Every pixel matters.
          </p>
        </div>
      </div>
    </footer>
  );
}
