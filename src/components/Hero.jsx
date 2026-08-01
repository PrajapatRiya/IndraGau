import React from 'react';
import { Award, Sparkles, Phone, ArrowRight, CheckCircle2, ShoppingBag, ShieldCheck, Factory, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import singleJar from '../assets/ghee-jar-single.jpg';
import tin5l from '../assets/ghee-tin-5l.jpg';
import tin15l from '../assets/ghee-tin-15l.jpg';
import logoImg from '../assets/indra-gau-logo.jpg';

export default function Hero({ onOpenOrderModal }) {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFDF5] via-[#FAF3E0] to-[#FDFCF7]">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-300/20 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Animated Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Top Badges Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-gold-card text-amber-950 text-xs sm:text-sm font-bold border border-amber-400/50 shadow-sm cursor-default"
              >
                <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
                <span>100% Pure A2 Natural Cow Ghee</span>
                <span className="text-amber-500">•</span>
                <span>Derda Gam, Surat</span>
              </motion.div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-900 text-amber-100 text-xs font-bold shadow-xs">
                <Factory className="w-3.5 h-3.5 text-amber-400" />
                Manufacturing • Trading • Wholesale
              </span>
            </div>

            {/* Main Headline as Requested */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-amber-950 leading-tight">
              Indulge in Pure Vedic <span className="gold-gradient-text">A2 Natural Cow Ghee</span>
            </h1>

            {/* Subheadline Highlight Box */}
            <div className="p-4 bg-amber-100/80 rounded-2xl border-l-4 border-amber-600 text-amber-950 font-serif text-sm sm:text-base leading-relaxed shadow-xs">
              "Handcrafted in authentic small batches at Derda Gam (near Surat). Available for retail, bulk trading, and wholesale supply in 500ml, 1 Litre glass jars, and 5L / 15L sealed tin packs."
            </div>

            {/* Concise Bullet Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {[
                'Manufacturing & Trading',
                'Wholesale Supply',
                '100% Pure A2 Cow Milk',
                'Traditional Bilona Method',
                'Granular Golden Texture',
                '5L & 15L Tin Packs',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-2 text-xs font-semibold text-stone-800 bg-white/90 p-2.5 rounded-xl border border-amber-200 shadow-xs cursor-default"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenOrderModal('1L')}
                className="shimmer-btn text-amber-950 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-amber-500/30 transition-all flex items-center gap-3 text-base sm:text-lg cursor-pointer w-full sm:w-auto justify-center"
              >
                <ShoppingBag className="w-5 h-5 text-amber-950" />
                <span>Order Fresh Batch (WhatsApp)</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#products"
                className="w-full sm:w-auto justify-center flex items-center gap-2 px-7 py-4 rounded-2xl bg-stone-900 text-amber-100 font-semibold text-base hover:bg-stone-800 transition-all shadow-md"
              >
                <span>View Products & Prices</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Helpline Bar */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-stone-600">
              <span className="flex items-center gap-1.5 font-semibold text-amber-950">
                <Phone className="w-4 h-4 text-amber-600" />
                Helpline: <a href="tel:9898668642" className="underline font-bold text-amber-950">+91 98986 68642</a>
              </span>
              <span>•</span>
              <span className="font-medium text-stone-700">Derda Gam, Surat</span>
            </div>

          </motion.div>

          {/* Right Visual Container - FULL GHEE JAR & TIN PACK SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Gold Glow Ring Aura */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 opacity-70 blur-xl animate-pulse" />

              <div className="relative rounded-3xl overflow-hidden glass-panel p-4 border-2 border-amber-400 shadow-2xl">
                
                {/* Full Unclipped Ghee Container */}
                <div className="relative h-[450px] sm:h-[500px] rounded-2xl overflow-hidden bg-gradient-to-b from-amber-100/60 via-amber-50/40 to-amber-200/50 p-4 flex flex-col items-center justify-center group border border-amber-300/60">
                  
                  {/* Actual Full Ghee Image */}
                  <img
                    src={singleJar}
                    alt="Indra Gau Full Golden A2 Ghee Jar & Tin Container"
                    className="w-full h-full object-contain filter drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 z-10"
                  />

                  {/* Logo Badge Watermark Top Left */}
                  <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur rounded-xl p-2 border border-amber-300 shadow-md flex items-center gap-2">
                    <img src={logoImg} alt="Logo" className="w-8 h-8 rounded-md" />
                    <div>
                      <div className="font-royal text-xs font-bold text-amber-950">INDRA GAU</div>
                      <div className="text-[9px] text-amber-800 font-semibold">100% Original</div>
                    </div>
                  </div>

                  {/* Top Right Seal */}
                  <div className="absolute top-4 right-4 z-20 bg-amber-500 text-amber-950 text-[10px] font-extrabold px-3 py-1 rounded-full shadow-md border border-amber-600 uppercase tracking-wider">
                    ★ Pure A2 Bilona
                  </div>

                  {/* Bottom Floating Texture Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <div className="glass-panel-dark rounded-xl p-3 text-amber-100 flex items-center justify-between shadow-xl border border-amber-400/40">
                      <div>
                        <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">Manufacturing & Wholesale</div>
                        <div className="text-sm font-serif text-white">Glass Jars, 5L & 15L Tins</div>
                      </div>
                      <span className="bg-amber-500 text-amber-950 text-xs font-extrabold px-2.5 py-1 rounded-lg">
                        1L @ ₹1,499
                      </span>
                    </div>
                  </div>

                </div>

                {/* Quality Badges */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs font-semibold text-amber-950">
                  <div className="p-2.5 bg-amber-100/90 rounded-xl border border-amber-200 flex items-center justify-center gap-1.5 shadow-xs">
                    <Award className="w-4 h-4 text-amber-700" />
                    <span>Lab Tested Pure</span>
                  </div>
                  <div className="p-2.5 bg-amber-100/90 rounded-xl border border-amber-200 flex items-center justify-center gap-1.5 shadow-xs">
                    <Truck className="w-4 h-4 text-amber-700" />
                    <span>Wholesale Delivery</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
