import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu, X, Globe, MapPin, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/indra-gau-logo.jpg';

export default function Navbar({ onOpenOrderModal, activeTab, onNavigate }) {
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
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Products & Pricing', id: 'products' },
    { name: 'Bilona Process', id: 'bilona' },
    { name: 'Benefits', id: 'benefits' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Main Glassmorphic Navbar */}
      <header
        className="fixed left-0 right-0 top-3 z-50 px-4 sm:px-8 max-w-7xl mx-auto"
      >
        <div className="glass-panel rounded-2xl px-4 py-3 sm:px-6 flex items-center justify-between shadow-xl border border-amber-300/50 bg-white/80 backdrop-blur-md">
          
          {/* Logo & Brand */}
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-3 group text-left cursor-pointer">
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
          </button>

          {/* Desktop Menu Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <motion.button
                  key={link.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-[11px] xl:text-[12px] font-bold px-2.5 py-1.5 rounded-lg transition-all tracking-wider cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-amber-950 shadow-xs border border-amber-600/40 font-extrabold'
                      : 'text-amber-950 hover:bg-amber-100/90 hover:text-amber-900 font-semibold'
                  }`}
                >
                  {link.name}
                </motion.button>
              );
            })}
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
            className="lg:hidden text-amber-950 p-2 rounded-xl bg-amber-100 border border-amber-300 cursor-pointer"
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
              className="lg:hidden mt-2 glass-panel rounded-2xl p-5 shadow-2xl border border-amber-300 bg-white/95"
            >
              <div className="flex flex-col gap-2">
                <div className="bg-amber-100 p-2 rounded-xl text-center text-xs font-bold text-amber-950 border border-amber-300 mb-1">
                  Manufacturer • Trader • Wholesaler
                </div>
                {navLinks.map((link) => {
                  const isActive = activeTab === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`text-sm font-bold text-left py-2.5 px-3 rounded-xl transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-amber-500 text-amber-950'
                          : 'text-amber-950 hover:bg-amber-100/60'
                      }`}
                    >
                      {link.name}
                    </button>
                  );
                })}
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
