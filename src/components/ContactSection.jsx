import React, { useState } from 'react';
import { Phone, MapPin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import logoImg from '../assets/indra-gau-logo.jpg';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-stone-900 text-amber-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Contact</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-100">
            Get in Touch with <span className="text-amber-400">Indra Gau</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg">
            Have a question about our A2 Ghee, need bulk ordering for ceremonies, or want to visit our farm at Derda Gam, Surat? Call or message us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14 items-start">
          
          {/* Left Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <a
              href="tel:9898668642"
              className="glass-panel-dark rounded-3xl p-6 border border-amber-500/30 shadow-xl flex items-center gap-4 hover:border-amber-400 transition-all group block"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-amber-950 transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-serif text-amber-400 font-bold uppercase tracking-wider">
                  Phone & WhatsApp Helpline
                </div>
                <div className="text-2xl font-bold font-sans text-amber-100 group-hover:text-amber-300">
                  +91 98986 68642
                </div>
                <div className="text-xs text-stone-400 mt-0.5">
                  Available 8:00 AM - 9:00 PM (Direct Call / WhatsApp)
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="glass-panel-dark rounded-3xl p-6 border border-amber-500/30 shadow-xl flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-1">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <div className="text-xs font-serif text-amber-400 font-bold uppercase tracking-wider">
                  Farm & Gaushala Location
                </div>
                <div className="text-xl font-bold font-serif text-amber-100 mt-1">
                  Derda Gam, Surat, Gujarat
                </div>
                <div className="text-xs text-stone-300 mt-1 leading-relaxed">
                  Direct farm visits welcome with prior phone appointment.
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Order Button Card */}
            <div className="glass-gold-card rounded-3xl p-6 border-2 border-amber-500 text-amber-950 shadow-2xl space-y-3">
              <div className="flex items-center gap-3">
                <img src={logoImg} alt="Logo" className="w-10 h-10 rounded-xl border border-amber-500" />
                <div>
                  <div className="font-royal text-base font-bold">INDRA GAU DIRECT ORDER</div>
                  <div className="text-xs text-amber-900 font-semibold">Fastest Delivery in Surat & Gujarat</div>
                </div>
              </div>
              
              <a
                href="https://wa.me/919898668642?text=Hello%20Indra%20Gau,%20I%20want%20to%20inquire%20about%20A2%20Gir%20Cow%20Ghee."
                target="_blank"
                rel="noreferrer"
                className="w-full shimmer-btn text-amber-950 font-bold py-3 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer block text-center"
              >
                <MessageSquare className="w-4 h-4 text-amber-950" />
                <span>Chat on WhatsApp (+91 98986 68642)</span>
              </a>
            </div>

          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 border border-amber-400/40 shadow-2xl space-y-6">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-amber-100">
                  Send an Inquiry
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-1">
                  Fill out the form below and our team will get back to you within a few hours.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-amber-950/80 border-2 border-amber-400 rounded-2xl text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-amber-400 mx-auto" />
                  <div className="font-serif text-lg font-bold text-amber-200">
                    Your inquiry has been received!
                  </div>
                  <p className="text-xs text-stone-300">
                    Thank you! We will call you back shortly on your provided number.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Patel"
                      className="w-full px-4 py-3 rounded-xl border border-amber-500/30 bg-amber-950/50 text-amber-100 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9898668642"
                      className="w-full px-4 py-3 rounded-xl border border-amber-500/30 bg-amber-950/50 text-amber-100 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-200 mb-1">
                      Your Message or Address
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query or requirement here..."
                      className="w-full px-4 py-3 rounded-xl border border-amber-500/30 bg-amber-950/50 text-amber-100 focus:outline-none focus:border-amber-400 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-amber-950 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
