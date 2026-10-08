import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles, ShoppingBag, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import posterGujarati from '../assets/banner-gujarati-poster.jpg';
import posterBilona from '../assets/banner-bilona-infographic.jpg';
import posterLifestyle from '../assets/banner-lifestyle-poster.jpg';
import packagingBoxes from '../assets/ghee-boxes-packaging.jpg';
import bilonaProcessChart from '../assets/bilona-process-chart.jpg';
import newJar1000ml from '../assets/newImgs/IMG-20261003-WA0007.jpg';
import newFamilyPoster from '../assets/newImgs/IMG-20261003-WA0008.jpg';
import newB2BPoster from '../assets/newImgs/IMG-20261003-WA0009.jpg';

export default function AutoHeroSlider({ onOpenOrderModal, onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 'gujarati-poster',
      image: posterGujarati,
      badge: '૧૦૦% શુદ્ધ ગીર ગાયનું ઘી',
      title: 'ઈન્દ્ર ગૌ A2 બીલોણા ઘી',
      subtitle: 'દેરડા ગામ (સુરત) સ્થિત ડાયરેક્ટ બ્રાન્ડ. કોઈ પણ ભેળસેળ વગરનું ૧૦૦% ઓરિજિનલ અને તાજું દાણેદાર ઘી.',
      priceTag: '૧ Litre Glass Jar @ ₹૧,૪૯૯',
      ctaText: 'ઓર્ડર કરો (WhatsApp)',
      productCode: '1L',
    },
    {
      id: 'bilona-poster',
      image: posterBilona,
      badge: 'વૈદિક બીલોણા પદ્ધતિ',
      title: 'Traditional Vedic Bilona Ghee',
      subtitle: 'લાકડાના 2-વે વલોણાથી માખણ તારવીને ધીમા તાપે પકાવેલું સુગંધી દાણેદાર ઘી.',
      priceTag: '૧૦૦% ઓરિજિનલ હેન્ડમેડ',
      ctaText: 'બીલોણા પદ્ધતિ જુઓ',
      navigateId: 'bilona',
    },
    {
      id: 'lifestyle-poster',
      image: posterLifestyle,
      badge: 'આરોગ્ય અને શક્તિ',
      title: 'Pure A2 Ghee Health Benefits',
      subtitle: 'પાચનમાં સરળ, રોગપ્રતિકારક શક્તિ વધારે, વિટામિન્સ A, D, E, K થી ભરપૂર.',
      priceTag: 'તંદુરસ્ત પરિવાર માટે ઉત્તમ',
      ctaText: 'આરોગ્યના ફાયદા',
      navigateId: 'benefits',
    },
    {
      id: 'bilona-chart',
      image: bilonaProcessChart,
      badge: '૫-તબક્કાની પ્રોસેસ',
      title: 'Vedic Bilona Process Chart',
      subtitle: 'તાજા દૂધથી દહીં, માખણ અને દાણેદાર ઘી બનાવવાની સંપૂર્ણ શુદ્ધ રીત.',
      priceTag: '૧૦૦% પારદર્શક ક્વોલિટી',
      ctaText: 'પ્રોસેસ વિગત જુઓ',
      navigateId: 'bilona',
    },
    {
      id: 'packaging-poster',
      image: packagingBoxes,
      badge: 'સેફ ડિલિવરી પેકિંગ',
      title: 'Thermocol Courier Packaging',
      subtitle: 'સ્પેશિયલ થર્મોકોલ બોક્સ પેકિંગ સાથે ભારતભરમાં ૧૦૦% સેફ હોમ ડિલિવરી.',
      priceTag: 'લીકેજ પ્રોટેક્શન પેકિંગ',
      ctaText: 'ઓનલાઈન ઓર્ડર કરો',
      productCode: '1L',
    },
    {
      id: 'new-jar-1000ml',
      image: newJar1000ml,
      badge: '૧૦૦% શુદ્ધ • No Additives • Hand Made',
      title: 'A2 Bilona Cow Ghee – 1000ml Glass Jar',
      subtitle: 'ઈન્દ્ર ગૌ A2 Bilona Cow Ghee | ૧૦૦% Pure | No Preservatives | Hand Made | No Additives | Traditional Bilona Mortar-Driven Method.',
      priceTag: '1000ml @ ₹૧,૪૯૯ | Order Now',
      ctaText: 'ઓર્ડર કરો (WhatsApp)',
      productCode: '1L',
    },
    {
      id: 'new-family-poster',
      image: newFamilyPoster,
      badge: 'The Purest Choice for Your Family',
      title: 'Rich in Taste. Trusted in Every Home.',
      subtitle: 'Indra Gau A2 Bilona Cow Ghee — ૧૦૦% Pure & Natural. ઘેર ઘેર પ્રિય, ૧૦૦% ઓર્ગેનિક, સ્વાદ અને સ્વાસ્થ્ય.',
      priceTag: 'Family Choice | ૧૦૦% Organic',
      ctaText: 'ઓર્ડર કરો (WhatsApp)',
      productCode: '1L',
    },
    {
      id: 'new-b2b-poster',
      image: newB2BPoster,
      badge: 'B2B Bulk Enquiry Open',
      title: 'A2 Kankrej Bilona Ghee – 1000ml Bulk',
      subtitle: 'Retailers • Distributors • Hotels • Restaurants • Sweet Shops. Pan India Supply | MOQ 24 Jars | GST Invoice | White Label Available.',
      priceTag: 'Become Our Distributor Today',
      ctaText: 'Bulk Enquiry – WhatsApp',
      productCode: '1L',
    },
  ];

  const DURATION = 4500;

  // Auto slide & progress timer
  useEffect(() => {
    if (isPaused) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(pct);

      if (elapsed >= DURATION) {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, slides.length]);

  const handleNext = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSlideClick = (slide) => {
    if (slide.navigateId) {
      onNavigate(slide.navigateId);
    } else {
      onOpenOrderModal(slide.productCode || '1L');
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-2 mb-6 sm:mt-4 sm:mb-8 relative z-30">
      {/* Premium Green Emerald Banner Slider Box */}
      <div 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#061C13] via-[#0D2D1E] to-[#061C13] border-2 border-emerald-500/70 gold-glow-box"
      >
        {/* Top Progress Line Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#04150D] z-40">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-amber-400 transition-all duration-75 ease-linear shadow-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Top Right Controls & Slide Count */}
        <div className="absolute top-3 right-3 z-40 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-[#04150D]/85 backdrop-blur border border-amber-400/40 text-amber-300 text-xs font-mono font-bold shadow-md">
            0{currentIndex + 1} / 0{slides.length}
          </span>
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-8 h-8 rounded-full bg-[#04150D]/85 backdrop-blur border border-amber-400/40 text-amber-300 hover:text-white flex items-center justify-center cursor-pointer transition-colors shadow-md"
            title={isPaused ? 'Resume' : 'Pause'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Main Display Container */}
        <div className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[440px] overflow-hidden group flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="relative w-full h-full flex items-center justify-between p-4 sm:p-8"
            >
              {/* Blurred Image Backdrop Fill */}
              <img
                src={currentSlide.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-40 scale-125 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061C13]/90 via-[#061C13]/40 to-transparent pointer-events-none" />

              {/* Left Side Glass Info Card - Perfectly Fills Left Position */}
              <div className="relative z-20 w-full md:w-1/2 space-y-2.5 sm:space-y-3.5 text-left max-w-lg bg-[#04150D]/85 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-amber-400/50 shadow-2xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-amber-950 text-xs font-extrabold uppercase shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {currentSlide.badge}
                </span>

                <h3 className="font-serif text-xl sm:text-3xl font-extrabold text-amber-400 leading-tight">
                  {currentSlide.title}
                </h3>

                <p className="text-amber-200/90 text-xs sm:text-sm leading-relaxed font-sans">
                  {currentSlide.subtitle}
                </p>

                <div className="text-xs font-bold text-amber-300 bg-amber-950/60 p-2 rounded-xl border border-amber-500/30 inline-block">
                  {currentSlide.priceTag}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleSlideClick(currentSlide)}
                    className="shimmer-btn text-amber-950 font-bold px-5 py-2.5 rounded-xl shadow-xl text-xs sm:text-sm flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform"
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-950" />
                    <span>{currentSlide.ctaText}</span>
                  </button>

                  <a
                    href="tel:9898668642"
                    className="bg-amber-900/80 hover:bg-amber-900 text-amber-200 font-bold px-4 py-2.5 rounded-xl border border-amber-500/40 text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>+91 98986 68642</span>
                  </a>
                </div>
              </div>

              {/* Right Side Crisp Product/Banner Image */}
              <div 
                onClick={() => handleSlideClick(currentSlide)}
                className="relative z-10 hidden md:flex w-1/2 h-full items-center justify-center p-2 cursor-pointer"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="max-h-[360px] w-auto object-contain filter drop-shadow-2xl rounded-2xl transition-transform duration-500 hover:scale-102"
                />
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#04150D]/85 text-amber-300 hover:bg-amber-500 hover:text-amber-950 transition-all flex items-center justify-center border border-amber-400/50 shadow-xl cursor-pointer hover:scale-110"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#04150D]/85 text-amber-300 hover:bg-amber-500 hover:text-amber-950 transition-all flex items-center justify-center border border-amber-400/50 shadow-xl cursor-pointer hover:scale-110"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Sleek Bottom Pagination Dots */}
        <div className="absolute bottom-3 left-0 right-0 z-30 flex items-center justify-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => {
                setProgress(0);
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'w-8 bg-amber-400 shadow-md'
                  : 'w-2 bg-white/50 hover:bg-white'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}







