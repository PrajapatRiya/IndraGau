import React, { useState } from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import logoImg from '../assets/indra-gau-logo.jpg';
import bilonaChart from '../assets/bilona-process-chart.jpg';
import singleJar from '../assets/ghee-jar-single.jpg';
import multipleJars from '../assets/ghee-jars-counter.jpg';
import promoInfo from '../assets/promo-infographic.jpg';

export default function FarmGallery() {
  const [filter, setFilter] = useState('all');
  const [activeImageModal, setActiveImageModal] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Indra Gau Pure A2 Gir Cow Ghee Glass Jar',
      category: 'product',
      src: singleJar,
      caption: 'Pure golden granular A2 Gir Cow Ghee packed in non-reactive food grade glass jar.',
    },
    {
      id: 2,
      title: 'Stacked Fresh Batches of Indra Gau Ghee',
      category: 'product',
      src: multipleJars,
      caption: 'Freshly prepared batches ready for dispatch to homes in Surat and across India.',
    },
    {
      id: 3,
      title: 'Traditional Vedic Bilona Method Chart',
      category: 'bilona',
      src: bilonaChart,
      caption: 'The authentic 5-step Bilona flowchart: Milk -> Curd -> Wooden Churning -> Makkhan -> Slow Heating -> A2 Ghee.',
    },
    {
      id: 4,
      title: 'Did You Know? A2 Ghee Digestive Benefits',
      category: 'info',
      src: promoInfo,
      caption: 'A2 Ghee is easier to digest, rich in vital nutrients, and made from indigenous Gir Cow milk.',
    },
    {
      id: 5,
      title: 'Indra Gau Official Brand Seal',
      category: 'brand',
      src: logoImg,
      caption: 'Indra Gau Cow Ghee - 100% Original Pure Ghee Guarantee.',
    },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#FDFCF7] via-[#FAF3E0] to-[#FDFCF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Farm & Product Gallery • તસવીરો</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950">
            Our Farm & <span className="gold-gradient-text">Product Gallery</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg">
            Real photography of our authentic A2 Ghee jars, Bilona process graphics, and farm heritage at Derda Gam, Surat.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'product', label: 'Ghee Jars' },
            { id: 'bilona', label: 'Bilona Process' },
            { id: 'info', label: 'Health Posters' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-amber-950 text-amber-100 shadow-md'
                  : 'bg-white/80 text-stone-700 hover:bg-amber-100 border border-amber-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImageModal(item)}
              className="glass-panel rounded-3xl overflow-hidden border border-amber-300/60 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-amber-100/50">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-amber-950 flex items-center justify-center shadow-lg">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-serif font-bold text-amber-950 text-base">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for full image viewing */}
        {activeImageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md">
            <div className="relative max-w-3xl w-full glass-panel rounded-3xl p-4 sm:p-6 border-2 border-amber-400 overflow-hidden shadow-2xl">
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 bg-white/90 text-amber-950 p-2 rounded-full shadow-md font-bold text-sm"
              >
                ✕
              </button>
              <img
                src={activeImageModal.src}
                alt={activeImageModal.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
              />
              <div className="mt-4 text-center">
                <div className="font-serif text-lg font-bold text-amber-950">{activeImageModal.title}</div>
                <p className="text-xs sm:text-sm text-stone-700 mt-1">{activeImageModal.caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
