import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenOrderModal = (productId = '1L') => {
    setSelectedProduct(productId);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#FDFCF7] text-stone-800 font-sans selection:bg-amber-500 selection:text-amber-950">
      
      {/* Navbar */}
      <Navbar onOpenOrderModal={handleOpenOrderModal} />

      {/* Main Sections */}
      <main>
        <Hero onOpenOrderModal={handleOpenOrderModal} />
        <StorySection />
        <MeetCows />
        <BilonaProcess />
        <ProductShowcase onOpenOrderModal={handleOpenOrderModal} />
        <HealthBenefits />
        <Certifications />
        <Testimonials />
        <FarmGallery />
        <BlogSection />
        <FAQSection />
        <ContactSection />
      </main>

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
          <Phone className="w-5 h-5" />
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
