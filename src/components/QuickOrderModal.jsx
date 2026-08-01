import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Phone, Truck, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/indra-gau-logo.jpg';

export default function QuickOrderModal({ isOpen, onClose, selectedProduct = null }) {
  const [product, setProduct] = useState('1L');
  const [qty, setQty] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('Surat');
  const [paymentMethod, setPaymentMethod] = useState('COD');

  const productsData = {
    '500ml': { name: 'Indra Gau 500ml A2 Ghee Glass Jar', price: 799, originalPrice: 999 },
    '1L': { name: 'Indra Gau 1 Litre (1000ml) A2 Ghee Glass Jar', price: 1499, originalPrice: 1799 },
    '5L': { name: 'Indra Gau 5 Litre Sealed Tin Container', price: 6000, originalPrice: 6800 },
    '15L': { name: 'Indra Gau 15 Litre Wholesale Tin Pack', price: 18000, originalPrice: 20000 },
  };

  useEffect(() => {
    if (selectedProduct && productsData[selectedProduct]) {
      setProduct(selectedProduct);
    }
  }, [selectedProduct]);

  if (!isOpen) return null;

  const currentItem = productsData[product];
  const totalPrice = currentItem.price * qty;

  const handleWhatsAppOrder = (e) => {
    e.preventDefault();
    if (!name || !phone || !address) {
      alert('Please fill in your Name, Phone Number, and Address to place your order.');
      return;
    }

    const textMessage = `*NEW GHEE ORDER - INDRA GAU A2 GHEE*%0A` +
      `----------------------------------%0A` +
      `📦 *Item:* ${currentItem.name}%0A` +
      `🔢 *Quantity:* ${qty}%0A` +
      `💰 *Total Amount:* ₹${totalPrice.toLocaleString('en-IN')}%0A` +
      `💳 *Payment Method:* ${paymentMethod}%0A` +
      `----------------------------------%0A` +
      `👤 *Customer Name:* ${name}%0A` +
      `📞 *Phone:* ${phone}%0A` +
      `📍 *Address:* ${address}, ${city}%0A` +
      `----------------------------------%0A` +
      `"Please confirm my order. Thank you!"`;

    const whatsappUrl = `https://wa.me/919898668642?text=${textMessage}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border-2 border-amber-400/60 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-600 hover:text-amber-950 p-2 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 border-b border-amber-200/80 pb-4">
          <img src={logoImg} alt="Logo" className="w-12 h-12 rounded-xl border border-amber-400 p-0.5 bg-white shadow-sm" />
          <div>
            <div className="font-royal text-lg font-bold text-amber-950">INDRA GAU A2 GHEE</div>
            <div className="text-xs text-amber-800 font-medium">Manufacturer • Trader • Wholesaler • Surat</div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleWhatsAppOrder} className="mt-6 space-y-4">
          
          {/* Select Variant */}
          <div>
            <label className="block text-xs font-bold uppercase text-amber-900 mb-2">
              Select Package & Price
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.keys(productsData).map((key) => {
                const isSelected = product === key;
                return (
                  <button
                    type="button"
                    key={key}
                    onClick={() => setProduct(key)}
                    className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500 text-amber-950 border-amber-600 font-bold shadow-md'
                        : 'bg-white/80 text-stone-800 border-amber-200 hover:border-amber-400 font-medium'
                    }`}
                  >
                    <div className="text-xs sm:text-sm">{key}</div>
                    <div className="text-[11px] opacity-90">₹{productsData[key].price.toLocaleString('en-IN')}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity Selector & Total */}
          <div className="flex items-center justify-between p-3.5 bg-amber-100/70 rounded-2xl border border-amber-300">
            <div>
              <div className="text-xs font-bold text-amber-950 uppercase">Quantity</div>
              <div className="flex items-center gap-3 mt-1">
                <button
                  type="button"
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-8 h-8 rounded-lg bg-amber-200 hover:bg-amber-300 font-bold text-amber-950 text-lg flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="font-bold text-lg text-amber-950">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty(qty + 1)}
                  className="w-8 h-8 rounded-lg bg-amber-200 hover:bg-amber-300 font-bold text-amber-950 text-lg flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right">
              <div className="text-xs text-stone-600">Total Amount</div>
              <div className="text-2xl font-serif font-bold text-amber-950">
                ₹{totalPrice.toLocaleString('en-IN')}
              </div>
              <div className="text-[10px] text-amber-800 font-semibold">Free Delivery near Surat</div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="space-y-3 pt-2">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rajesh Patel"
                className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Phone / WhatsApp Number</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9898668642"
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">City / Town</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Surat, Ahmedabad"
                  className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">Delivery Address</label>
              <textarea
                required
                rows={2}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="House No, Society, Landmark..."
                className="w-full px-4 py-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
            </div>

            {/* Payment preference */}
            <div>
              <label className="block text-xs font-bold text-amber-950 uppercase mb-1">Payment Method</label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('COD')}
                  className={`p-2.5 rounded-xl border font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                    paymentMethod === 'COD'
                      ? 'bg-amber-900 text-amber-100 border-amber-900'
                      : 'bg-white text-stone-700 border-amber-300'
                  }`}
                >
                  <Truck className="w-4 h-4" /> Cash on Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('UPI/Online')}
                  className={`p-2.5 rounded-xl border font-semibold flex items-center justify-center gap-2 cursor-pointer ${
                    paymentMethod === 'UPI/Online'
                      ? 'bg-amber-900 text-amber-100 border-amber-900'
                      : 'bg-white text-stone-700 border-amber-300'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" /> GooglePay / PhonePe UPI
                </button>
              </div>
            </div>

          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full shimmer-btn text-amber-950 font-bold py-3.5 rounded-2xl shadow-xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 text-base mt-4 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-amber-950" />
            <span>Confirm Order via WhatsApp (+91 98986 68642)</span>
          </button>

          {/* Helpline Footer */}
          <div className="text-center pt-2">
            <a
              href="tel:9898668642"
              className="text-xs text-stone-600 hover:text-amber-900 font-semibold underline flex items-center justify-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" /> Direct Helpline: +91 98986 68642
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}
