import React from 'react';
import Hero from './Hero';
import AutoHeroSlider from './AutoHeroSlider';
import { 
  Sparkles, CheckCircle2, ShoppingBag, ArrowRight, ShieldCheck, 
  Flame, HeartPulse, Award, Phone, Truck, Factory, Users, Star, 
  MapPin, RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';

import singleJar from '../assets/ghee-jar-single.jpg';
import tin5l from '../assets/ghee-tin-5l.jpg';
import tin15l from '../assets/ghee-tin-15l.jpg';

export default function HomePage({ onOpenOrderModal, onNavigate }) {
  return (
    <div className="space-y-10 pb-12 pt-28 sm:pt-32">
      {/* 1. Auto Horizontal Ghee Poster Slider - DIRECTLY RIGHT AFTER HEADER */}
      <AutoHeroSlider onOpenOrderModal={onOpenOrderModal} onNavigate={onNavigate} />

      {/* 2. Main Hero Section */}
      <Hero onOpenOrderModal={onOpenOrderModal} onNavigate={onNavigate} />

      {/* 2. Key Trust Badges & Wholesale Capabilities Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-amber-400/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1 border-r border-amber-800/80 last:border-0 pr-2">
              <div className="flex justify-center text-amber-400 mb-2">
                <Factory className="w-7 h-7" />
              </div>
              <div className="font-royal text-xl sm:text-2xl font-bold text-amber-400">Direct Maker</div>
              <p className="text-xs text-amber-300 font-medium">Manufacturer • Trader • Wholesaler</p>
            </div>

            <div className="space-y-1 border-r border-amber-800/80 last:border-0 pr-2">
              <div className="flex justify-center text-amber-400 mb-2">
                <Award className="w-7 h-7" />
              </div>
              <div className="font-royal text-xl sm:text-2xl font-bold text-amber-400">100% Pure A2</div>
              <p className="text-xs text-amber-300 font-medium">Gir Cow Milk & Lab Tested</p>
            </div>

            <div className="space-y-1 border-r border-amber-800/80 last:border-0 pr-2">
              <div className="flex justify-center text-amber-400 mb-2">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="font-royal text-xl sm:text-2xl font-bold text-amber-400">Derda Gam, Surat</div>
              <p className="text-xs text-amber-300 font-medium">Fresh Farm Batch Production</p>
            </div>

            <div className="space-y-1">
              <div className="flex justify-center text-amber-400 mb-2">
                <Truck className="w-7 h-7" />
              </div>
              <div className="font-royal text-xl sm:text-2xl font-bold text-amber-400">All India Delivery</div>
              <p className="text-xs text-amber-300 font-medium">Retail Jars & 5L/15L Tins</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Products Quick Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            FRESH BATCH PACKAGING
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-950">
            Our Premium A2 Ghee Packs
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Handcrafted with authentic Vedic Bilona method. Available for individual households, retail stores, and bulk commercial requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: 1L Glass Jar */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="glass-panel rounded-3xl p-6 border-2 border-amber-400/80 shadow-xl flex flex-col justify-between relative overflow-hidden bg-white/90"
          >
            <div className="absolute top-4 right-4 bg-amber-500 text-amber-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase shadow-xs">
              Best Seller
            </div>
            <div>
              <div className="h-52 rounded-2xl overflow-hidden bg-amber-50/60 p-3 mb-5 flex items-center justify-center border border-amber-200">
                <img src={singleJar} alt="Indra Gau 1L Glass Jar" className="h-full object-contain filter drop-shadow-md" />
              </div>
              <h3 className="font-serif text-xl font-bold text-amber-950">1 Litre Glass Jar</h3>
              <p className="text-xs text-stone-600 mt-1">100% Pure A2 Bilona Cow Ghee</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-900">₹1,499</span>
                <span className="text-xs text-stone-400 line-through">₹1,800</span>
                <span className="text-xs font-bold text-emerald-600">Save 17%</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/80 flex items-center gap-3">
              <button
                onClick={() => onOpenOrderModal('1L')}
                className="flex-1 shimmer-btn text-amber-950 font-bold py-3 rounded-xl shadow-md text-xs flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" /> Order Now
              </button>
            </div>
          </motion.div>

          {/* Card 2: 5L Tin */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="glass-panel rounded-3xl p-6 border border-amber-300 shadow-lg flex flex-col justify-between bg-white/80"
          >
            <div>
              <div className="h-52 rounded-2xl overflow-hidden bg-amber-50/60 p-3 mb-5 flex items-center justify-center border border-amber-200">
                <img src={tin5l} alt="Indra Gau 5L Tin Pack" className="h-full object-contain filter drop-shadow-md" />
              </div>
              <h3 className="font-serif text-xl font-bold text-amber-950">5 Litre Sealed Tin</h3>
              <p className="text-xs text-stone-600 mt-1">Family & Semi-Bulk Pack</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-900">₹6,000</span>
                <span className="text-xs text-stone-400 line-through">₹7,200</span>
                <span className="text-xs font-bold text-emerald-600">Best Tin Rate</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/80 flex items-center gap-3">
              <button
                onClick={() => onOpenOrderModal('5L')}
                className="flex-1 bg-amber-900 hover:bg-amber-950 text-amber-100 font-bold py-3 rounded-xl shadow-md text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" /> Order 5L Tin
              </button>
            </div>
          </motion.div>

          {/* Card 3: 15L Wholesale Tin */}
          <motion.div 
            whileHover={{ y: -6 }}
            className="glass-panel rounded-3xl p-6 border border-amber-300 shadow-lg flex flex-col justify-between bg-white/80"
          >
            <div>
              <div className="h-52 rounded-2xl overflow-hidden bg-amber-50/60 p-3 mb-5 flex items-center justify-center border border-amber-200">
                <img src={tin15l} alt="Indra Gau 15L Wholesale Tin" className="h-full object-contain filter drop-shadow-md" />
              </div>
              <h3 className="font-serif text-xl font-bold text-amber-950">15 Litre Wholesale Tin</h3>
              <p className="text-xs text-stone-600 mt-1">Commercial & Wholesale Supply</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-900">₹18,000</span>
                <span className="text-xs text-stone-400 line-through">₹22,000</span>
                <span className="text-xs font-bold text-emerald-600">Wholesale Rate</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-amber-200/80 flex items-center gap-3">
              <button
                onClick={() => onOpenOrderModal('15L')}
                className="flex-1 bg-amber-900 hover:bg-amber-950 text-amber-100 font-bold py-3 rounded-xl shadow-md text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" /> Wholesale Order
              </button>
            </div>
          </motion.div>

        </div>

        {/* View All Products CTA */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-sm border border-amber-300 shadow-sm transition-all cursor-pointer"
          >
            <span>Explore All Product Packs & Details</span>
            <ArrowRight className="w-4 h-4 text-amber-700" />
          </button>
        </div>
      </section>

      {/* 4. Why Choose Indra Gau (Unique Features Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-300/80 bg-gradient-to-br from-[#FFFDF5] to-[#FAF3E0] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-900 text-amber-200 text-xs font-bold">
                TRADITIONAL PURITY
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-amber-950 leading-tight">
                Why Indra Gau A2 Ghee is Unique & Pure
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed">
                At Derda Gam near Surat, we maintain strict traditional standards. Our A2 Ghee is made exclusively from naturally grazed Gir cows using the authentic 2-way wooden Bilona process.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-white px-5 py-3 rounded-xl border border-amber-300 shadow-xs hover:bg-amber-100 transition-colors cursor-pointer"
                >
                  <span>Read Our Full Story & Farm Details</span>
                  <ArrowRight className="w-4 h-4 text-amber-600" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-white/90 border border-amber-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-amber-950 text-base">100% Pure Gir Cow A2 Milk</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Only A2 beta-casein rich milk from healthy, grass-fed Desi Gir cows without chemical injections.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/90 border border-amber-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Flame className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-amber-950 text-base">Slow Wood-Fired Heating</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Hand-churned makkhan is slow-cooked on low flame in traditional vessels to preserve natural aroma.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/90 border border-amber-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-amber-950 text-base">Granular Golden Texture</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Rich Danedar texture packed with essential fatty acids, Omega-3, and natural vitamins A, D, E, and K.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/90 border border-amber-200 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Factory className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-amber-950 text-base">Wholesale & Retail Ready</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  As manufacturers and traders, we supply fresh small-batch ghee to families, traders, and stores.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Process Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-amber-950 text-amber-100 p-8 sm:p-12 relative overflow-hidden border border-amber-700 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-amber-400 text-xs font-bold tracking-wider uppercase">Vedic 5-Step Bilona Process</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-400">
                Curd Churned, Never Machine Processed
              </h3>
              <p className="text-xs sm:text-sm text-amber-200/90 max-w-2xl leading-relaxed">
                We boil fresh A2 milk, set natural curd, churn it bidirectionally with a traditional wooden bilona, extract pure makkhan, and gently boil it into golden granular ghee.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => onNavigate('bilona')}
                className="shimmer-btn text-amber-950 font-bold px-6 py-3.5 rounded-xl shadow-lg text-sm flex items-center gap-2 cursor-pointer"
              >
                <span>View Complete Bilona Process</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Quick Direct Call / WhatsApp Order Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-400 text-center space-y-5 bg-amber-500/10">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-950">
            Order Fresh Indra Gau A2 Ghee Directly
          </h3>
          <p className="text-stone-700 text-xs sm:text-sm max-w-xl mx-auto">
            Get 100% pure A2 Ghee delivered directly to your doorstep anywhere in India. For retail orders, trade inquiries, or bulk wholesale rates, call or message us now.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenOrderModal('1L')}
              className="shimmer-btn text-amber-950 font-bold px-8 py-3.5 rounded-xl shadow-xl text-sm flex items-center gap-2 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-amber-950" />
              <span>Order via WhatsApp</span>
            </button>

            <a
              href="tel:9898668642"
              className="bg-amber-950 hover:bg-amber-900 text-amber-100 font-bold px-8 py-3.5 rounded-xl shadow-md text-sm flex items-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Helpline: +91 98986 68642</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
