import { ReactNode, useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Instagram, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Events', href: '/events' },
    { label: 'Story', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-white selection:bg-brand-purple selection:text-white relative">
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      {/* Navigation */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'py-4 glass-panel' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-display text-3xl tracking-tighter hover:text-brand-neon transition-colors z-50 relative">
            NUIT NOIRE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-[12px] font-bold uppercase tracking-[2px] opacity-70 hover:opacity-100 hover:border-b-2 hover:-mb-[2px] border-brand-purple transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/guestlist" className="btn-secondary rounded-full transform hover:scale-105 active:scale-95 py-3 px-6 text-[10px]">
              Guest List
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 -mr-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Content */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-display text-4xl hover:text-brand-purple transition-colors block"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link to="/guestlist" onClick={() => setMobileMenuOpen(false)} className="btn-primary rounded-full mt-4">
                Get on Guest List
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Sticky Bottom CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 inset-x-6 z-40">
        <Link to="/guestlist" className="w-full btn-primary rounded-3xl !py-4 gap-2">
          Get on Guest List <ArrowRight size={18} />
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pt-20 pb-10 relative z-10 glass-panel mt-20 border-x-0 border-b-0 rounded-none rounded-t-[40px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-display text-5xl md:text-7xl mb-6">NUIT NOIRE</h2>
            <p className="text-white/60 max-w-sm text-subheading">
              The night isn't for everyone. Enter if you belong.
            </p>
          </div>
          <div className="flex flex-col md:items-end justify-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-start md:items-end"
            >
              <span className="micro-label mb-2 group-hover:neon-text-glow transition-colors">Follow the shadows</span>
              <div className="flex items-center gap-3 text-3xl font-light hover:italic transition-all">
                @nuitnoire <Instagram size={32} className="group-hover:text-brand-purple transition-colors" />
              </div>
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 flex flex-col md:flex-row justify-between items-center opacity-40 font-bold text-[10px] uppercase tracking-[2px] gap-4">
          <p>&copy; {new Date().getFullYear()} NUIT NOIRE COLLECTIVE. PARIS / BERLIN / LONDON.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white">INVITE ONLY</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
