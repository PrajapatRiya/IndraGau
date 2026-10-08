import React from 'react';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';
import singleJar from '../assets/ghee-jar-single.jpg';
import bilonaChart from '../assets/bilona-process-chart.jpg';
import promoInfo from '../assets/promo-infographic.jpg';

export default function BlogSection() {
  const blogs = [
    {
      title: 'A1 vs A2 Ghee: What Every Family Needs to Know',
      desc: 'Understand the science behind A2 Beta-Casein protein from indigenous Gir cows versus mutated A1 protein found in foreign crossbreeds.',
      image: promoInfo,
      date: 'August 2026',
      readTime: '4 min read',
    },
    {
      title: 'Why Vedic Wooden Bilona Method Makes Ghee Granular',
      desc: 'Discover how bi-directional curd churning preserves natural golden lipids, essential vitamins, and traditional kitchen aroma.',
      image: bilonaChart,
      date: 'August 2026',
      readTime: '5 min read',
    },
    {
      title: '5 Ayurvedic Rituals with Pure A2 Ghee for Daily Energy',
      desc: 'From Nasya therapy to adding a spoonful in warm milk or khichdi — learn time-tested ways to boost immunity and gut health.',
      image: singleJar,
      date: 'August 2026',
      readTime: '3 min read',
    },
  ];

  return (
    <section className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Ayurvedic Wisdom</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400">
            Articles & <span className="text-amber-300">Ghee Knowledge</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg">
            Empower your family with insights into authentic Vedic ghee making, nutrition, and traditional wellness.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {blogs.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-dark rounded-3xl overflow-hidden border border-amber-500/30 shadow-xl flex flex-col justify-between group hover:border-amber-400 transition-all"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-amber-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 bg-amber-950/80 backdrop-blur px-3 py-1 rounded-full text-[11px] font-semibold text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{item.readTime}</span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-amber-500/20 mt-4 flex items-center justify-between">
                <span className="text-xs text-stone-400">{item.date}</span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
