import React from 'react';
import { ShoppingBag, Star, Check, Phone, Factory, PackageCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import singleJar from '../assets/ghee-jar-single.jpg';
import multipleJars from '../assets/ghee-jars-counter.jpg';
import tin5l from '../assets/ghee-tin-5l.jpg';
import tin15l from '../assets/ghee-tin-15l.jpg';

export default function ProductShowcase({ onOpenOrderModal }) {
  const products = [
    {
      id: '500ml',
      name: 'Indra Gau 500ml A2 Ghee Glass Jar',
      subtext: '500ml Pure A2 Natural Cow Ghee Jar',
      price: 799,
      mrp: 999,
      image: singleJar,
      badge: 'Popular Trial Size',
      desc: 'Freshly packed in food-grade glass jar. Perfect trial size with rich golden aroma and granular texture.',
      features: ['500ml Glass Jar', 'Traditional Bilona Process', 'Lab Certified Pure A2', 'Free Surat Delivery'],
    },
    {
      id: '1L',
      name: 'Indra Gau 1 Litre A2 Ghee Glass Jar',
      subtext: '1 Litre (1000ml) Pure A2 Natural Cow Ghee',
      price: 1499,
      mrp: 1799,
      image: multipleJars,
      badge: '★ Best Seller • Customer Favorite',
      isPopular: true,
      desc: 'Our flagship 1 Litre (1000ml) pure glass jar. Maximum household value, rich granular texture, and divine aroma.',
      features: ['1 Litre Premium Glass Jar', '100% Vedic Bilona Churned', 'A2 Beta-Casein Rich', 'Best Value Offer'],
    },
    {
      id: '5L',
      name: 'Indra Gau 5 Litre Sealed Tin Pack',
      subtext: '5 Litre (4.550 kg) Pure Ghee Sealed Tin',
      price: 6000,
      mrp: 6800,
      image: tin5l,
      badge: '★ 5 Litre Tin Pack',
      desc: 'Authentic 5 Litre sealed heavy-duty tin container for medium families, festivals, and traditional ceremonies.',
      features: ['5 Litre Sealed Heavy-Duty Tin', 'Net Qty: 5 Ltr (4.550 kg)', '0% Preservatives', 'Direct Farm Delivery'],
    },
    {
      id: '15L',
      name: 'Indra Gau 15 Litre Sealed Tin Pack',
      subtext: '15 Litre Commercial & Wholesale Tin',
      price: 18000,
      mrp: 20000,
      image: tin15l,
      badge: '★ 15 Litre Wholesale Tin',
      isBulk: true,
      desc: 'Official 15 Litre sealed tin pack for traders, wholesalers, weddings, sweet makers, and bulk buyers.',
      features: ['15 Litre Heavy-Duty Steel Tin', 'Net Quantity: 15 Litre', 'Wholesale Trader Discount', 'Direct Express Transport'],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-[#FDFCF7] via-[#FAF3E0] to-[#FDFCF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold border border-amber-300">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-600" />
            <span>Official Products & Wholesale Pricing</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-950">
            Pure A2 Natural Cow Ghee <span className="gold-gradient-text">Pricing & Packs</span>
          </h2>

          <p className="text-stone-700 text-base sm:text-lg">
            Manufacturer, Trader & Wholesale Supplier • Direct from Derda Gam, Surat to your doorstep.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {products.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between relative group ${
                item.isPopular
                  ? 'glass-gold-card border-2 border-amber-500 shadow-2xl scale-102 lg:-translate-y-2'
                  : 'glass-panel border border-amber-200/80 shadow-lg hover:border-amber-400'
              }`}
            >
              {/* Top Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span
                  className={`text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md ${
                    item.isPopular
                      ? 'bg-amber-500 text-amber-950 border border-amber-600'
                      : 'bg-stone-900 text-amber-300 border border-stone-700'
                  }`}
                >
                  {item.badge}
                </span>
              </div>

              <div>
                {/* Product Image Box */}
                <div className="relative h-56 rounded-2xl overflow-hidden bg-amber-100/50 mb-6 border border-amber-300/40 p-2 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Rating Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-bold text-amber-950 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>4.9 Rating</span>
                  </div>
                </div>

                {/* Titles */}
                <h3 className="font-serif text-lg font-bold text-amber-950 leading-snug">
                  {item.name}
                </h3>
                <div className="text-xs font-semibold text-amber-800 font-sans mt-1">
                  {item.subtext}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 my-4">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-amber-950">
                    ₹{item.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-sm text-stone-500 line-through font-medium">
                    ₹{item.mrp.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Save ₹{(item.mrp - item.price).toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  {item.desc}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 my-5 pt-4 border-t border-amber-200/60">
                  {item.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-stone-800">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenOrderModal(item.id)}
                className={`w-full py-3 rounded-2xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md ${
                  item.isPopular
                    ? 'shimmer-btn text-amber-950 hover:shadow-amber-500/30'
                    : 'bg-amber-900 text-amber-100 hover:bg-amber-950'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Now (WhatsApp)</span>
              </motion.button>

            </motion.div>
          ))}
        </div>

        {/* Wholesale & Trader Callout Bar */}
        <div className="mt-12 glass-panel rounded-3xl p-6 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
              <Factory className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif text-lg font-bold text-amber-950">
                Trader, Wholesale & Bulk Supply Inquiries
              </div>
              <div className="text-xs text-stone-700">
                Special trader & wholesale rates for 5L and 15L tin packs! Call helpline: <strong>+91 98986 68642</strong> or email <strong>info@indragau.com</strong>.
              </div>
            </div>
          </div>

          <a
            href="tel:9898668642"
            className="px-6 py-3 rounded-xl bg-amber-900 text-amber-100 font-bold text-sm hover:bg-amber-950 transition-colors shrink-0"
          >
            Call Helpline: 9898668642
          </a>
        </div>

      </div>
    </section>
  );
}
