import React from 'react';
import { ShieldCheck, Award, CheckCircle, Beaker, HeartHandshake } from 'lucide-react';
import logoImg from '../assets/indra-gau-logo.jpg';

export default function Certifications() {
  const pledges = [
    {
      title: '100% A2 Beta-Casein Certified',
      subtitle: 'Zero A1 mutation guarantee',
      desc: 'Rigorously tested to verify 100% A2 protein structure from pure Gir cows without any A1 protein contamination.',
      icon: ShieldCheck,
    },
    {
      title: 'Vedic Bilona Churned',
      subtitle: 'Wooden Mathani curd churned',
      desc: 'Prepared purely from fermented whole curd using bi-directional wooden mathani, preserving heat-sensitive enzymes.',
      icon: Award,
    },
    {
      title: 'Zero Chemical & Preservatives',
      subtitle: '100% Sattvic & Pure',
      desc: 'Free from synthetic colors, artificial aromas, preservatives, palm oil, or hydrogenated fats.',
      icon: Beaker,
    },
    {
      title: 'Food-Grade Glass Packaging',
      subtitle: 'Preserves aroma & taste',
      desc: 'Sealed in recyclable, non-reactive glass jars ensuring maximum aroma, shelf life, and purity.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-[#FDFCF7] via-[#FAF4E6] to-[#FDFCF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Purity Guarantee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950">
            Our Quality Pledges & <span className="gold-gradient-text">Certifications</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg">
            At Indra Gau, every jar of Ghee represents our sacred commitment to truth, health, and Vedic authenticity.
          </p>
        </div>

        {/* Grid of Pledges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pledges.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-6 border border-amber-300/60 shadow-lg hover:border-amber-500 transition-all text-center space-y-4 group"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-700 group-hover:bg-amber-500 group-hover:text-amber-950 transition-colors">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif text-lg font-bold text-amber-950">
                    {item.title}
                  </h3>
                  <div className="text-xs font-sans text-amber-800 font-semibold">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {item.desc}
                </p>

                <div className="pt-3 border-t border-amber-200/60 inline-flex items-center gap-1 text-[11px] font-bold text-amber-900">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Verified Pure</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Callout Box */}
        <div className="mt-12 max-w-4xl mx-auto glass-gold-card rounded-3xl p-6 border-2 border-amber-400/60 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logoImg} alt="Logo" className="w-14 h-14 rounded-2xl border border-amber-400 p-0.5 bg-white shadow-md" />
            <div>
              <div className="font-royal text-lg font-bold text-amber-950">INDRA GAU 100% ORIGINAL GHEE</div>
              <p className="text-xs text-stone-700 font-medium">
                Tested & Produced at Farm in <strong>Derda Gam, Surat, Gujarat</strong>. Call Helpline for Batch Reports.
              </p>
            </div>
          </div>

          <a
            href="tel:9898668642"
            className="shimmer-btn text-amber-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md shrink-0"
          >
            Verify Batch: +91 98986 68642
          </a>
        </div>

      </div>
    </section>
  );
}
