import React, { useState } from 'react';
import { Heart, Activity, Sparkles, Shield, Flame, CheckCircle2 } from 'lucide-react';
import promoInfo from '../assets/promo-infographic.jpg';

export default function HealthBenefits() {
  const [activeTab, setActiveTab] = useState(0);

  const benefitTabs = [
    {
      title: 'Easier to Digest',
      subtitle: 'Smooth digestion & gut comfort',
      icon: Activity,
      headline: 'Natural A2 Beta-Casein Protein for Effortless Digestion',
      desc: 'Commercial A1 ghee derived from cross-breed cows contains BCM-7, causing bloating and digestive distress. Pure A2 Gir Cow Ghee contains gentle A2 protein structure identical to human mother milk, ensuring smooth absorption for all ages.',
      bulletPoints: [
        'Gentle on lactose-sensitive stomachs',
        'Improves nutrient absorption in intestine',
        'Natural Butyric acid heals stomach lining',
        'Suitable for toddlers, adults & seniors',
      ],
    },
    {
      title: 'Rich in Essential Nutrients',
      subtitle: 'Vitamins A, D, E, K & Omega-3',
      icon: Sparkles,
      headline: 'Powerhouse of Vitamins A, D, E, K & Omega Fatty Acids',
      desc: 'Our slow-heated Bilona Ghee retains vital fat-soluble vitamins essential for bone density, hormonal balance, radiant skin tone, and cellular repair.',
      bulletPoints: [
        'High in Vitamin A & E for eyesight & skin glow',
        'Rich in Omega-3 & Omega-9 fatty acids',
        'Contains CLA (Conjugated Linoleic Acid)',
        'Supports natural weight management',
      ],
    },
    {
      title: 'Boosts Immunity & Brain Power',
      subtitle: 'Cognitive focus & memory enhancement',
      icon: Shield,
      headline: 'Sattvic Nourishment for Memory, Heart & Brain',
      desc: 'In Ayurveda, A2 Ghee is praised as a Medhya Rasayana — a natural brain tonic that enhances cognitive speed, memory retention, and mental calmness.',
      bulletPoints: [
        'Enhances brain sharpness and focus',
        'Strengthens immunity against seasonal infections',
        'Lubricates joints and relieves stiffness',
        'Purifies blood and calms body heat',
      ],
    },
    {
      title: 'Golden Aroma & Micro-Granules',
      subtitle: 'Micro-granular golden texture',
      icon: Flame,
      headline: 'Aromatic Micro-Granular Texture (Golden Granules)',
      desc: 'Authentic Vedic Bilona process creates distinct golden micro-granules that melt instantly on warm rotis, khichdi, or dal with an unforgettable traditional aroma.',
      bulletPoints: [
        'Rich golden hue from natural Beta-Carotene',
        'Rich, nutty homemade ghee aroma',
        'High smoke point ideal for Indian cooking & frying',
        'Never breaks into greasy liquid separators',
      ],
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Heart className="w-3.5 h-3.5 text-amber-400" />
            <span>Ayurvedic Wellness</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100">
            Why Choose <span className="text-amber-400">Indra Gau A2 Ghee?</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg">
            Discover why ancient Ayurvedic scriptures refer to pure Gir cow ghee as "Amrit" for holistic body wellness.
          </p>
        </div>

        {/* User Infographic Banner Showcase */}
        <div className="mt-10 max-w-4xl mx-auto glass-panel-dark rounded-3xl p-4 border border-amber-500/30 shadow-2xl overflow-hidden">
          <img
            src={promoInfo}
            alt="Did You Know? A2 Ghee is easier to digest and naturally rich in nutrients. Indra Gau A2 Gir Cow Ghee."
            className="w-full h-auto object-cover rounded-2xl border border-amber-500/20"
          />
        </div>

        {/* Interactive Benefit Explorer */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {benefitTabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isSelected = activeTab === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer border flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500 text-amber-950 border-amber-400 font-bold shadow-lg shadow-amber-500/20 translate-x-1'
                      : 'bg-amber-950/40 text-stone-300 border-amber-500/20 hover:border-amber-500/40 hover:text-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isSelected ? 'bg-amber-950 text-amber-300' : 'bg-amber-900/40 text-amber-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-base font-serif">{tab.title}</div>
                      <div className={`text-xs ${isSelected ? 'text-amber-950' : 'text-amber-300/80'} font-sans`}>
                        {tab.subtitle}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Content Display */}
          <div className="lg:col-span-8">
            <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-2xl space-y-6">
              
              <div className="border-b border-amber-500/30 pb-4">
                <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full border border-amber-400/30">
                  {benefitTabs[activeTab].subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-amber-100 mt-2">
                  {benefitTabs[activeTab].headline}
                </h3>
              </div>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-sans">
                {benefitTabs[activeTab].desc}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {benefitTabs[activeTab].bulletPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-amber-950/70 p-3 rounded-xl border border-amber-500/20 text-xs sm:text-sm text-stone-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between text-xs text-amber-300/90 font-serif">
                <span>Handcrafted at Derda Gam, Surat</span>
                <span>100% Original Pure A2 Ghee</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
