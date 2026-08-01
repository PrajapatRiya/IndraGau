import React from 'react';
import { Sun, Heart, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';

export default function MeetCows() {
  const cowHighlights = [
    {
      title: 'Surya Ketu Nadi',
      desc: 'Indigenous Gir cows feature a prominent hump containing the Surya Ketu Nadi which interacts with sunlight, infusing milk with natural gold minerals and medicinal properties.',
      icon: Sun,
    },
    {
      title: 'Open Pasture Grazing',
      desc: 'Our cows graze freely in lush green pastures around Derda Gam, eating natural herbs, neem leaves, and organic fodder without synthetic hormones or oxytocin injections.',
      icon: Leaf,
    },
    {
      title: 'Calf First Ethos (Ahimsak Milking)',
      desc: 'We follow traditional Ahimsak Milking — the calf gets full nourishment first. Only surplus milk is gently harvested with utmost love and care.',
      icon: Heart,
    },
    {
      title: 'Pure A2 Beta-Casein Protein',
      desc: '100% pure Indian Gir Cow breed milk containing easy-to-digest A2 beta-casein protein, free from harmful A1 mutated proteins.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="cows" className="py-20 bg-gradient-to-b from-[#FDFCF7] via-[#F9F4E8] to-[#FDFCF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Heart className="w-3.5 h-3.5 text-amber-600" />
            <span>Blessed Mother Gir Cows</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950">
            Meet Our Sacred <span className="gold-gradient-text">Gir Cows</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg">
            Hailing from the pristine Gir forest lineage, our indigenous cows live in harmony with nature at our farm in Derda Gam, Surat.
          </p>
        </div>

        {/* 4 Cards Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {cowHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel rounded-3xl p-6 sm:p-8 hover:border-amber-500/60 transition-all shadow-lg hover:shadow-amber-500/10 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-13 h-13 rounded-2xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-700 group-hover:bg-amber-500 group-hover:text-amber-950 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-950">
                    {item.title}
                  </h3>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-amber-200/60 flex items-center gap-2 text-xs font-semibold text-amber-900">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Verified 100% Desi Gir Breed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* English Banner Callout */}
        <div className="mt-12 bg-amber-900 text-amber-100 rounded-3xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-xl border border-amber-600/40">
          <div className="font-serif text-lg sm:text-xl font-bold text-amber-300 mb-2">
            "Gau Seva — Sacred Care & Devotion"
          </div>
          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans max-w-2xl mx-auto">
            All our Gir cows are nurtured in a calm, joyful, natural environment near Derda Gam, Surat. We harvest pure raw milk naturally without artificial chemicals or additives.
          </p>
        </div>

      </div>
    </section>
  );
}
