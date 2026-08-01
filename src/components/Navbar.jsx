import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu, X, Mail, Globe, MapPin, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/indra-gau-logo.jpg';

export default function Navbar({ onOpenOrderModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Products & Pricing', href: '#products' },
    { name: 'Bilona Process', href: '#bilona' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact & Business Roles Bar */}
      <div className="bg-amber-950 text-amber-100 text-xs py-2 px-4 border-b border-amber-800/80 z-50 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          
          <div className="flex items-center gap-4 flex-wrap text-[11px] sm:text-xs">
            <span className="flex items-center gap-1 font-semibold text-amber-300 bg-amber-900/60 px-2.5 py-0.5 rounded-full border border-amber-500/30">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              Manufacturer • Trader • Wholesaler
            </span>
            <span className="hidden sm:inline text-amber-700">|</span>
            <span className="flex items-center gap-1 font-medium text-amber-200">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <a href="https://www.indragau.com" target="_blank" rel="noreferrer" className="hover:text-amber-400 transition-colors">
                www.indragau.com
              </a>
            </span>
            <span className="hidden md:inline text-amber-700">|</span>
            <span className="hidden md:flex items-center gap-1 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Derda Gam, Surat, Gujarat
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:9898668642"
              className="flex items-center gap-1 font-bold text-amber-300 hover:text-amber-100 transition-colors text-xs"
            >
              <Phone className="w-3 h-3 text-amber-400" /> +91 98986 68642
            </a>
          </div>

        </div>
      </div>

      {/* Main Glassmorphic Navbar */}
      <header
        className={`fixed left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-8 max-w-7xl mx-auto ${
          scrolled ? 'top-2' : 'top-9'
        }`}
      >
        <div className="glass-panel rounded-2xl px-4 py-3 sm:px-6 flex items-center justify-between shadow-xl border border-amber-300/50">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-xl border-2 border-amber-500/60 p-0.5 bg-white shadow-md"
            >
              <img
                src={logoImg}
                alt="Indra Gau Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
              />
            </motion.div>
            <div>
              <div className="font-royal text-lg sm:text-xl font-bold tracking-tight text-amber-950 flex items-center gap-1.5">
                INDRA GAU
                <span className="text-[9px] font-sans font-extrabold bg-amber-500 text-amber-950 px-1.5 py-0.5 rounded uppercase shadow-xs">
                  A2 GHEE
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-amber-800 font-medium tracking-wide">
                100% Pure A2 Natural Cow Ghee
              </p>
            </div>
          </a>

          {/* Desktop Menu Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm font-semibold text-amber-950 hover:text-amber-600 transition-colors hover:scale-105 transform tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:9898668642"
              className="flex items-center gap-1.5 text-xs font-bold text-amber-950 bg-amber-100/90 hover:bg-amber-200 px-3.5 py-2.5 rounded-xl border border-amber-300 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>9898668642</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenOrderModal('1L')}
              className="shimmer-btn text-amber-950 text-xs font-bold px-4.5 py-2.5 rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-amber-950" />
              <span>Order Online</span>
            </motion.button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-amber-950 p-2 rounded-xl bg-amber-100 border border-amber-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-panel rounded-2xl p-5 shadow-2xl border border-amber-300"
            >
              <div className="flex flex-col gap-2">
                <div className="bg-amber-100 p-2 rounded-xl text-center text-xs font-bold text-amber-950 border border-amber-300 mb-1">
                  Manufacturer • Trader • Wholesaler
                </div>
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-amber-950 hover:text-amber-600 py-2 px-3 rounded-lg hover:bg-amber-100/60 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-amber-200/80 flex flex-col gap-2 text-xs">
                  <a
                    href="tel:9898668642"
                    className="flex items-center justify-center gap-2 text-xs font-bold text-amber-950 bg-amber-100 py-2.5 rounded-xl border border-amber-300"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-700" /> Call: +91 98986 68642
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenOrderModal('1L');
                    }}
                    className="shimmer-btn text-amber-950 font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" /> Order Pure Ghee (WhatsApp)
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
