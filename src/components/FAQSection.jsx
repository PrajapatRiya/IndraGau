import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How can I verify the purity of Indra Gau A2 Ghee at home?',
      a: 'Pure A2 Bilona Ghee melts smoothly at palm body temperature (~37°C) into golden liquid. When poured over hot rotis or khichdi, it releases an immediate homemade aromatic scent and features distinct micro-granules.',
    },
    {
      q: 'Why is traditional Bilona Ghee priced higher than commercial ghee?',
      a: 'Commercial ghee is made chemically by heating machine cream from low-fat crossbreed cows. Indra Gau uses 25 to 28 Litres of pure indigenous Gir Cow A2 milk to extract 1 Litre of ghee through traditional 5-stage wooden curd churning.',
    },
    {
      q: 'Where is your farm located in Surat?',
      a: 'Our farm is located at Derda Gam, near Surat, Gujarat. Customers are always welcome to visit our Gaushala and witness the fresh Bilona process with their own eyes!',
    },
    {
      q: 'How do I place an order and how fast is delivery?',
      a: 'You can order directly via WhatsApp or phone call at +91 98986 68642. For Surat city, we deliver within 24 hours. For Gujarat & Pan-India, orders are safely dispatched in cushioned glass jars within 2-4 business days.',
    },
    {
      q: 'How long can I store Indra Gau A2 Ghee and what is the shelf life?',
      a: 'Because our Ghee is made using traditional low-flame moisture removal without any additives, it naturally stays fresh for up to 12 months at normal room temperature. No refrigeration required.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FDFCF7] via-[#FAF4E6] to-[#FDFCF7] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950">
            Frequently Asked <span className="gold-gradient-text">Questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl overflow-hidden border border-amber-300/70 shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-amber-100/50 transition-colors cursor-pointer"
                >
                  <div className="font-serif text-base sm:text-lg font-bold text-amber-950">
                    {faq.q}
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-900 transition-transform ${
                      isOpen ? 'rotate-180 bg-amber-500 text-amber-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 text-stone-700 text-sm sm:text-base leading-relaxed border-t border-amber-200/50 bg-amber-50/40">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
