import React from 'react';
import { Heart, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import promoInfo from '../assets/promo-infographic.jpg';

export default function StorySection() {
  return (
    <section id="about" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D48806_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Poster Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel-dark rounded-3xl p-6 border border-amber-500/30 shadow-2xl space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-amber-400/20">
                <img
                  src={promoInfo}
                  alt="Indra Gau A2 Ghee Story Poster"
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-amber-950/90 rounded-2xl p-4 border border-amber-500/40 text-center">
                <div className="font-royal text-amber-300 text-sm font-bold uppercase tracking-wider">
                  Origin • Derda Gam, Surat
                </div>
                <p className="text-xs text-amber-100/90 mt-1 font-serif">
                  "Handcrafted with love and Vedic wisdom at our farm in Derda Gam, near Surat."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Us • Our Roots & Heritage</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 leading-tight">
              Crafting Pure A2 Ghee with <span className="text-amber-300">Devotion & Vedic Wisdom</span>
            </h2>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans">
              At <strong>Indra Gau</strong>, based in <strong>Derda Gam near Surat</strong>, we preserve ancient Indian health and purity by preparing 100% authentic A2 Gir Cow Ghee.
            </p>

            <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
              Unlike commercial ghee produced chemically from cream, our ghee follows the authentic <strong>Vedic Bilona Method</strong>: setting whole curd in clay pots, churning bidirectionally with wooden Mathani, and slow heating over low flame.
            </p>

            {/* Core Values 3-Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <motion.div whileHover={{ y: -4 }} className="bg-amber-950/70 p-4 rounded-2xl border border-amber-500/20 text-center sm:text-left space-y-1">
                <div className="text-amber-400 font-serif text-2xl font-bold">25 Litres</div>
                <div className="text-xs text-stone-300 font-medium">Pure A2 Milk per 1L Ghee</div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-amber-950/70 p-4 rounded-2xl border border-amber-500/20 text-center sm:text-left space-y-1">
                <div className="text-amber-400 font-serif text-2xl font-bold">Wooden Bilona</div>
                <div className="text-xs text-stone-300 font-medium">Bidirectional Churning</div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-amber-950/70 p-4 rounded-2xl border border-amber-500/20 text-center sm:text-left space-y-1">
                <div className="text-amber-400 font-serif text-2xl font-bold">100% Sattvic</div>
                <div className="text-xs text-stone-300 font-medium">Zero Chemicals</div>
              </motion.div>
            </div>

            {/* Pledge */}
            <div className="p-4 rounded-2xl bg-amber-900/40 border border-amber-500/30 text-amber-200 text-sm italic font-serif flex items-start gap-3">
              <Heart className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <span>
                "Our mission is to deliver unadulterated, nutrient-dense A2 Gir Cow Ghee directly from our farm to your home."
              </span>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
