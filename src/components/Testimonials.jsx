import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Rameshbhai Patel',
      location: 'Surat, Gujarat',
      rating: 5,
      comment: 'We have been using Indra Gau A2 Gir Cow Ghee for over 6 months in Surat. The granular texture and aroma remind me of pure village ghee from my childhood. Excellent for kids health.',
      productUsed: '1 Litre Glass Jar',
    },
    {
      name: 'Dr. Smita Shah',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      comment: 'As an Ayurvedic practitioner, I recommend Indra Gau A2 Bilona Ghee to my patients. Easy to digest, rich in A2 protein, and 100% authentic Bilona curd churned method.',
      productUsed: '500ml Trial Jar',
    },
    {
      name: 'Bhavesh Joshi',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      comment: 'Direct farm delivery received from Derda Gam (Surat) to Mumbai. The instant you open the glass jar, the divine nutty aroma fills the kitchen. Rotis and khichdi taste twice as good.',
      productUsed: '5 Litre Family Pack',
    },
    {
      name: 'Meenaben Desai',
      location: 'Vadodara, Gujarat',
      rating: 5,
      comment: '100% Sattvic A2 Ghee. Our family will never buy commercial machine-processed ghee again. The purity and freshness are incomparable.',
      productUsed: '1 Litre Glass Jar',
    },
  ];

  return (
    <section className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Customer Reviews</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100">
            Loved by Thousands of <span className="text-amber-400">Families</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg">
            Read how Indra Gau A2 Ghee has restored authentic taste and wellness in households across Gujarat and India.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-xl flex flex-col justify-between space-y-4 hover:border-amber-400 transition-all"
            >
              <div className="space-y-3">
                
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-amber-500/40" />
                </div>

                {/* Quote */}
                <p className="text-amber-100 text-base font-serif italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-sm">
                    {rev.name[0]}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-amber-200 text-sm">{rev.name}</div>
                    <div className="text-xs text-stone-400">{rev.location}</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-950 px-2.5 py-1 rounded-full border border-amber-500/30">
                    Verified Order: {rev.productUsed}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
