import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AutoHeroSlider from './components/AutoHeroSlider';
import StorySection from './components/StorySection';
import MeetCows from './components/MeetCows';
import BilonaProcess from './components/BilonaProcess';
import ProductShowcase from './components/ProductShowcase';
import HealthBenefits from './components/HealthBenefits';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import FarmGallery from './components/FarmGallery';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuickOrderModal from './components/QuickOrderModal';
import { MessageSquare, Phone, Sparkles, ShieldCheck, Factory, Heart } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (productId = '1L') => {
    setSelectedProduct(productId);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-stone-800 font-sans selection:bg-amber-500 selection:text-amber-950 flex flex-col justify-between">
      
      <div>
        {/* Navbar */}
        <Navbar 
          activeTab={activeTab} 
          onNavigate={handleNavigate} 
          onOpenOrderModal={handleOpenOrderModal} 
        />

        {/* Dynamic Page Views */}
        <main>
          {activeTab === 'home' && (
            <HomePage 
              onOpenOrderModal={handleOpenOrderModal} 
              onNavigate={handleNavigate} 
            />
          )}

          {activeTab === 'about' && (
            <div className="pt-28 space-y-8">
              {/* About Header Banner */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-400/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 text-center space-y-3 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500 text-amber-950 text-xs font-extrabold uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Our Roots & Vedic Heritage
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-400">About Indra Gau A2 Ghee</h1>
                  <p className="text-amber-200 text-xs sm:text-sm max-w-2xl mx-auto">
                    Handcrafted at Derda Gam near Surat. Manufacturer, Trader, and Wholesaler of 100% Pure A2 Natural Cow Ghee.
                  </p>

                  {/* Unique 4-Pillars Quick Grid */}
                  <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto text-left">
                    <div className="bg-amber-900/60 border border-amber-500/30 p-3 rounded-2xl flex items-center gap-2.5">
                      <Heart className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Gir Cow Milk</div>
                        <div className="text-[10px] text-amber-300">100% A2 Beta-Casein</div>
                      </div>
                    </div>

                    <div className="bg-amber-900/60 border border-amber-500/30 p-3 rounded-2xl flex items-center gap-2.5">
                      <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Vedic Bilona</div>
                        <div className="text-[10px] text-amber-300">Hand Churned</div>
                      </div>
                    </div>

                    <div className="bg-amber-900/60 border border-amber-500/30 p-3 rounded-2xl flex items-center gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Lab Certified</div>
                        <div className="text-[10px] text-amber-300">0% Chemicals</div>
                      </div>
                    </div>

                    <div className="bg-amber-900/60 border border-amber-500/30 p-3 rounded-2xl flex items-center gap-2.5">
                      <Factory className="w-5 h-5 text-amber-400 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white">Derda Gam, Surat</div>
                        <div className="text-[10px] text-amber-300">Direct Maker</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automatic Horizontal Ghee Poster Slider */}
              <AutoHeroSlider onOpenOrderModal={handleOpenOrderModal} onNavigate={handleNavigate} />

              <StorySection />
              <MeetCows />
              <Certifications />
              <Testimonials />
            </div>
          )}

          {activeTab === 'products' && (
            <div className="pt-28 space-y-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-400/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 text-center space-y-3 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500 text-amber-950 text-xs font-extrabold uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Retail & Wholesale Catalog
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-400">Products & Pricing</h1>
                  <p className="text-amber-200 text-xs sm:text-sm max-w-2xl mx-auto">
                    Available in 500ml (₹799), 1 Litre glass jars (₹1,499), and 5L (₹6,000) / 15L (₹18,000) sealed tin containers for direct home delivery or bulk commercial trade.
                  </p>
                </div>
              </div>

              {/* Automatic Horizontal Ghee Poster Slider */}
              <AutoHeroSlider onOpenOrderModal={handleOpenOrderModal} onNavigate={handleNavigate} />

              <ProductShowcase onOpenOrderModal={handleOpenOrderModal} />
              <Certifications />
            </div>
          )}

          {activeTab === 'bilona' && (
            <div className="pt-28 space-y-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-400/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 text-center space-y-3 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500 text-amber-950 text-xs font-extrabold uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> 100% Traditional Vedic Method
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-400">The 5-Step Bilona Process</h1>
                  <p className="text-amber-200 text-xs sm:text-sm max-w-2xl mx-auto">
                    From fresh Gir cow A2 milk to wooden bilona churned makkhan slow-cooked on low flame for authentic golden granularity.
                  </p>
                </div>
              </div>

              {/* Automatic Horizontal Ghee Poster Slider */}
              <AutoHeroSlider onOpenOrderModal={handleOpenOrderModal} onNavigate={handleNavigate} />

              <BilonaProcess />
            </div>
          )}

          {activeTab === 'benefits' && (
            <div className="pt-28 space-y-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-400/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 text-center space-y-3 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500 text-amber-950 text-xs font-extrabold uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Wellness & Health
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-400">Health Benefits of A2 Ghee</h1>
                  <p className="text-amber-200 text-xs sm:text-sm max-w-2xl mx-auto">
                    Rich in Omega-3, Omega-6, Vitamin A, D, E, K, and Butyric Acid for immune boost, joint strength, and digestive health.
                  </p>
                </div>
              </div>

              {/* Automatic Horizontal Ghee Poster Slider */}
              <AutoHeroSlider onOpenOrderModal={handleOpenOrderModal} onNavigate={handleNavigate} />

              <HealthBenefits />
              <BlogSection />
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="pt-28 space-y-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-400/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 text-center space-y-3 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500 text-amber-950 text-xs font-extrabold uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Real Product & Packaging Photos
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-400">Farm & Product Gallery</h1>
                  <p className="text-amber-200 text-xs sm:text-sm max-w-2xl mx-auto">
                    Take a glimpse inside Indra Gau A2 Ghee jars, thermocol packaging boxes for safe delivery, and our Gir cows at Derda Gam, Surat.
                  </p>
                </div>
              </div>

              {/* Automatic Horizontal Ghee Poster Slider */}
              <AutoHeroSlider onOpenOrderModal={handleOpenOrderModal} onNavigate={handleNavigate} />

              <FarmGallery />
              <MeetCows />
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="pt-28 space-y-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel rounded-3xl p-8 sm:p-10 border-2 border-amber-400/60 bg-gradient-to-r from-amber-950 via-amber-900 to-amber-950 text-amber-100 text-center space-y-3 shadow-xl">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500 text-amber-950 text-xs font-extrabold uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Get in Touch
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl font-bold text-amber-400">Contact & Inquiry</h1>
                  <p className="text-amber-200 text-xs sm:text-sm max-w-2xl mx-auto">
                    We welcome retail orders, wholesale inquiries, and associate partnerships. Contact us directly!
                  </p>
                </div>
              </div>

              {/* Automatic Horizontal Ghee Poster Slider */}
              <AutoHeroSlider onOpenOrderModal={handleOpenOrderModal} onNavigate={handleNavigate} />

              <ContactSection />
              <FAQSection />
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer onOpenOrderModal={handleOpenOrderModal} />

      {/* WhatsApp Quick Order Checkout Modal */}
      <QuickOrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        selectedProduct={selectedProduct}
      />

      {/* Floating Action Button (FAB) for Instant WhatsApp Order */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="tel:9898668642"
          className="w-12 h-12 rounded-full bg-amber-900 text-amber-100 flex items-center justify-center shadow-xl hover:scale-110 transition-all border border-amber-400/50"
          title="Call Helpline: 9898668642"
        >
          <Phone className="w-5 h-5 text-amber-400" />
        </a>

        <button
          onClick={() => handleOpenOrderModal('1L')}
          className="shimmer-btn text-amber-950 px-4 py-3 rounded-full font-bold shadow-2xl hover:scale-105 transition-all flex items-center gap-2 text-xs sm:text-sm border border-amber-400/60 cursor-pointer"
          title="Order Fresh Ghee on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-amber-950" />
          <span className="hidden sm:inline">Order via WhatsApp</span>
        </button>
      </div>

    </div>
  );
}
