import React, { useState } from 'react';
import { Flame, Droplets, Utensils, RotateCw, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import bilonaChart from '../assets/bilona-process-chart.jpg';

export default function BilonaProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Pure Raw A2 Gir Milk',
      subtitle: 'Harvested from indigenous Gir cows',
      icon: Droplets,
      desc: 'Pure, fresh A2 milk collected from free-grazing indigenous Gir cows at sunrise.',
      detail: 'Rich in A2 beta-casein protein and natural nutrients without synthetic hormones.',
    },
    {
      num: '02',
      title: 'Clay Pot Curd Setting',
      subtitle: 'Overnight natural fermentation',
      icon: Utensils,
      desc: 'Milk is boiled gently and cultured into wholesome whole curd in traditional earthen clay pots overnight.',
      detail: 'Earthen clay pots infuse micro-minerals and maintain optimal bio-fermentation temperature.',
    },
    {
      num: '03',
      title: 'Wooden Bilona Churning',
      subtitle: 'Bi-directional wooden Mathani',
      icon: RotateCw,
      desc: 'Curd is churned bidirectionally using traditional wooden Bilona (Mathani).',
      detail: 'Bi-directional churning preserves heat-sensitive vitamins and digestive enzymes.',
    },
    {
      num: '04',
      title: 'Fresh Makkhan (Butter)',
      subtitle: 'Separated naturally from buttermilk',
      icon: Sparkles,
      desc: 'Pure cultured Makkhan (butter) floats to the top and is gently separated from protein-rich buttermilk.',
      detail: 'Only pure cultured butter is taken forward for slow heating, leaving nutrient-dense buttermilk behind.',
    },
    {
      num: '05',
      title: 'Slow Heating & Golden Ghee',
      subtitle: 'Aromatic micro-granular golden Ghee',
      icon: Flame,
      desc: 'Butter is slowly melted over low flame in brass/clay vessels until it transforms into golden A2 Ghee.',
      detail: 'Creates aromatic, granular golden Ghee rich in natural antioxidants and fat-soluble vitamins.',
    },
  ];

  return (
    <section id="bilona" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <RotateCw className="w-3.5 h-3.5" />
            <span>Traditional Vedic Method</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400">
            The 5-Step <span className="text-amber-300">Vedic Bilona Process</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg">
            No shortcuts. No chemical extractions. Only ancient Vedic wisdom passed down through generations.
          </p>
        </div>

        {/* User Process Chart Image Display */}
        <div className="mt-10 max-w-4xl mx-auto rounded-3xl overflow-hidden glass-panel-dark p-4 border border-amber-500/40 shadow-2xl">
          <img
            src={bilonaChart}
            alt="Indra Gau Traditional Bilona Method Chart"
            className="w-full h-auto object-cover rounded-2xl border border-amber-500/20"
          />
          <div className="mt-3 text-center text-xs text-amber-200/90 font-serif italic">
            "No Shortcuts. Only Tradition. Pure A2 Bilona Ghee - Crafted the Traditional Way."
          </div>
        </div>

        {/* Interactive Step Navigator */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Step Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-500/30 to-amber-600/20 border-amber-400 text-amber-100 shadow-lg shadow-amber-500/10 translate-x-1'
                      : 'bg-amber-950/40 border-amber-500/20 text-stone-400 hover:border-amber-500/40 hover:text-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                        isActive
                          ? 'bg-amber-500 text-amber-950'
                          : 'bg-amber-900/50 text-amber-300'
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <div className="font-serif text-base font-bold">{step.title}</div>
                      <div className="text-xs text-amber-300/80 font-sans">{step.subtitle}</div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-amber-400 translate-x-1' : 'text-stone-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Step View */}
          <div className="lg:col-span-7">
            <div className="glass-panel-dark rounded-3xl p-8 border border-amber-400/40 shadow-2xl relative min-h-[380px] flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                      {React.createElement(steps[activeStep].icon, { className: 'w-6 h-6' })}
                    </div>
                    <div>
                      <span className="text-xs text-amber-400 font-mono font-semibold uppercase tracking-widest">
                        Step {steps[activeStep].num} of 05
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-amber-100">
                        {steps[activeStep].title}
                      </h3>
                    </div>
                  </div>

                  <span className="bg-amber-500/20 text-amber-300 text-xs font-serif px-3 py-1 rounded-full border border-amber-400/30">
                    {steps[activeStep].subtitle}
                  </span>
                </div>

                <p className="text-stone-200 text-lg leading-relaxed font-sans">
                  {steps[activeStep].desc}
                </p>

                <div className="p-4 bg-amber-950/80 rounded-2xl border border-amber-500/30 text-amber-200 text-sm space-y-1">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Key Vedic Benefit:
                  </div>
                  <div>{steps[activeStep].detail}</div>
                </div>
              </div>

              {/* Step Footer Callout */}
              <div className="pt-6 border-t border-amber-500/20 flex items-center justify-between text-xs text-stone-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Preserves Natural Aroma & Enzymes
                </span>
                <span className="font-serif text-amber-300 font-semibold">Indra Gau • Derda Gam, Surat</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
