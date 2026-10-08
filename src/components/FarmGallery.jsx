import React, { useState } from 'react';
import { Camera, Eye, Sparkles } from 'lucide-react';
import logoImg from '../assets/indra-gau-logo.jpg';
import bilonaChart from '../assets/bilona-process-chart.jpg';
import promoInfo from '../assets/promo-infographic.jpg';
import packagingBoxes from '../assets/ghee-boxes-packaging.jpg';
import newJar1000ml from '../assets/newImgs/IMG-20261003-WA0007.jpg';
import newFamilyPoster from '../assets/newImgs/IMG-20261003-WA0008.jpg';
import newB2BPoster from '../assets/newImgs/IMG-20261003-WA0009.jpg';
import newVideoSrc from '../assets/newImgs/VID-20261003-WA0010.mp4';

export default function FarmGallery() {
  const [filter, setFilter] = useState('all');
  const [activeImageModal, setActiveImageModal] = useState(null);

  const galleryItems = [
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
    {
      id: 8,
      title: 'Indra Gau A2 Bilona Cow Ghee – 1000ml Glass Jar',
      category: 'product',
      src: newJar1000ml,
      caption: '100% Pure A2 Bilona Cow Ghee in a 1000ml premium glass jar. No Preservatives | No Additives | Hand Made | Traditional Bilona Mortar-Driven Method.',
    },
    {
      id: 9,
      title: 'The Purest Choice for Your Family – Indra Gau',
      category: 'promo',
      src: newFamilyPoster,
      caption: 'Rich in taste. Trusted in every home. Indra Gau A2 Bilona Cow Ghee — 100% Pure & Natural, cherished by families across India.',
    },
    {
      id: 10,
      title: 'A2 Kankrej Bilona Ghee – B2B Bulk Enquiry Open',
      category: 'b2b',
      src: newB2BPoster,
      caption: '1000ml A2 Kankrej Bilona Ghee for Retailers, Distributors, Hotels, Restaurants & Sweet Shops. Pan India Supply | MOQ 24 Jars | GST Invoice | White Label Available.',
    },
    {
      id: 11,
      title: 'Indra Gau A2 Bilona Cow Ghee – Product Video',
      category: 'video',
      type: 'video',
      src: newVideoSrc,
      caption: 'Watch our official Indra Gau A2 Bilona Cow Ghee product video. 100% Pure, Hand Made, Traditional Bilona Method.',
    },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-[#FDFCF7] via-[#FAF3E0] to-[#FDFCF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <Camera className="w-3.5 h-3.5 text-amber-600" />
            <span>Farm & Product Gallery • તસવીરો</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950">
            Our Real Product & <span className="gold-gradient-text">Packaging Gallery</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg">
            Real photography of Indra Gau A2 Ghee glass jars, thermocol packaging for safe courier transport, and authentic Vedic Bilona process graphics.
          </p>
        </div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'product', label: 'Ghee Jars' },
            { id: 'packaging', label: 'Thermocol Packaging' },
            { id: 'bilona', label: 'Bilona Process' },
            { id: 'info', label: 'Health Posters' },
            { id: 'promo', label: 'Promo Posters' },
            { id: 'b2b', label: 'B2B / Bulk' },
            { id: 'video', label: '▶ Videos' },
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
              className="glass-panel rounded-3xl p-4 border border-amber-200/80 shadow-lg group hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 rounded-2xl overflow-hidden bg-amber-100/50 border border-amber-300/40">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      muted
                      loop
                      playsInline
                      onMouseEnter={e => e.target.play()}
                      onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <button
                      onClick={() => setActiveImageModal(item)}
                      className="w-full bg-white/90 text-amber-950 text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-md cursor-pointer hover:bg-amber-100 transition-colors"
                    >
                      <Eye className="w-4 h-4 text-amber-700" /> {item.type === 'video' ? 'Play Video' : 'View Full Photo'}
                    </button>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5">
                  <h3 className="font-serif font-bold text-amber-950 text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-[11px] text-amber-900 font-semibold">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-600" /> Indra Gau Official
                </span>
                <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md uppercase font-bold text-[10px]">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md animate-fadeIn" onClick={() => setActiveImageModal(null)}>
            <div className="relative max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400 p-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-amber-950 text-amber-100 flex items-center justify-center shadow-lg hover:bg-amber-900 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <div className="max-h-[75vh] overflow-hidden rounded-2xl bg-amber-50/50 flex items-center justify-center border border-amber-200">
                {activeImageModal.type === 'video' ? (
                  <video
                    src={activeImageModal.src}
                    className="max-h-[70vh] w-auto rounded-xl"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <img
                    src={activeImageModal.src}
                    alt={activeImageModal.title}
                    className="max-h-[70vh] w-auto object-contain rounded-xl"
                  />
                )}
              </div>
              <div className="p-4 space-y-2 text-center">
                <h3 className="font-serif font-bold text-amber-950 text-lg sm:text-xl">
                  {activeImageModal.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
                  {activeImageModal.caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
