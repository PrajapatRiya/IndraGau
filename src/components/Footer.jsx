import React from 'react';
import { Phone, MapPin, Heart, ArrowUp, ShoppingBag, Building2 } from 'lucide-react';
import logoImg from '../assets/indra-gau-logo.jpg';

export default function Footer({ onOpenOrderModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-amber-100/90 pt-16 pb-8 border-t border-amber-500/20 relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 5 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-500/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="Logo" className="w-12 h-12 rounded-xl border border-amber-400 p-0.5 bg-white shadow-md" />
              <div>
                <div className="font-royal text-xl font-bold text-amber-200">INDRA GAU</div>
                <div className="text-xs text-amber-400 font-serif">Manufacturer • Trader • Wholesaler</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-sans max-w-sm">
              Handcrafted in small authentic batches using traditional wooden Bilona method from indigenous cows at Derda Gam, Surat. Available for retail & bulk wholesale supply.
            </p>

            <div className="p-3 bg-amber-950/80 rounded-xl border border-amber-500/30 text-amber-300 font-serif text-xs italic">
              "100% Pure A2 Natural Cow Ghee — Prepared the Authentic Vedic Way."
            </div>
          </div>

          {/* Your Associate Section */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-amber-400" />
              Your Associate
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              We partner with trusted distribution networks, dairy traders, and wholesale associates across Surat, Gujarat, and Pan-India.
            </p>
            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-200 transition-colors underline"
              >
                Become an Associate Partner →
              </a>
            </div>
          </div>

          {/* Product Prices */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              Price List & Packs
            </div>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => onOpenOrderModal('500ml')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">
                  500ml Glass Jar — ₹799
                </button>
              </li>
              <li>
                <button onClick={() => onOpenOrderModal('1L')} className="hover:text-amber-300 transition-colors text-left cursor-pointer font-bold text-amber-400">
                  1 Litre (1000ml) Jar — ₹1,499 ★
                </button>
              </li>
              <li>
                <button onClick={() => onOpenOrderModal('5L')} className="hover:text-amber-300 transition-colors text-left cursor-pointer">
                  5 Litre Tin Container — ₹6,000
                </button>
              </li>
              <li>
                <button onClick={() => onOpenOrderModal('15L')} className="hover:text-amber-300 transition-colors text-left cursor-pointer text-amber-300 font-semibold">
                  15 Litre Wholesale Tin — ₹18,000
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <div className="font-serif text-sm font-bold text-amber-300 uppercase tracking-wider">
              Farm & Sales Helpline
            </div>
            <div className="space-y-2.5 text-xs text-stone-400">
              <a href="tel:9898668642" className="flex items-center gap-2 text-amber-200 hover:text-amber-400 transition-colors font-bold text-sm">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>+91 98986 68642</span>
              </a>

              <div className="flex items-start gap-2 text-stone-300 leading-snug">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Derda Gam, Surat, Gujarat</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenOrderModal('1L')}
                  className="shimmer-btn text-amber-950 text-xs font-bold px-4 py-2.5 rounded-xl w-full flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> Order on WhatsApp
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Scroll-to-Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} Indra Gau A2 Natural Cow Ghee. All rights reserved. Derda Gam, Surat.
          </div>

          <div className="flex items-center gap-4">
            <span>Handcrafted with <Heart className="w-3.5 h-3.5 text-amber-500 inline fill-amber-500" /> for Pure Health</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-stone-900 hover:bg-amber-900 text-amber-400 transition-colors border border-amber-500/30 cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
