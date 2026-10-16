import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Check, ArrowRight, MessageSquare } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Journey Consultation',
    preferredDestination: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Private Client Services
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#F7F4ED] tracking-tight">
          Connect with Our Atelier
        </h1>
        <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
          Every extraordinary journey begins with a conversation. Connect directly with our Senior Curators in Geneva, London, New York, or Singapore.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#161814] border border-hairline p-8 sm:p-10">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2 border-b border-hairline pb-4">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">Inquiry Dossier</h2>
                <p className="text-xs text-[#B8B1A5]">
                  Please share your vision. All communications are protected under our client confidentiality covenant.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3 bg-rose-950/40 border border-rose-800 text-xs text-rose-300">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Full Legal Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Private Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Telephone / Mobile *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Nature of Inquiry</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none cursor-pointer"
                  >
                    <option value="Bespoke Journey Consultation">Bespoke Journey Consultation</option>
                    <option value="Private Island Buyout">Private Island Buyout</option>
                    <option value="Chartered Yacht Expedition">Chartered Yacht Expedition</option>
                    <option value="Multi-Generational Celebration">Multi-Generational Celebration</option>
                    <option value="Corporate Executive Retreat">Corporate Executive Retreat</option>
                    <option value="Media & Press Inquiry">Media & Press Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Preferred Sanctuary (Optional)</label>
                <select
                  value={formData.preferredDestination}
                  onChange={(e) => setFormData({ ...formData, preferredDestination: e.target.value })}
                  className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none cursor-pointer"
                >
                  <option value="">Select a Sanctuary or Leave Open...</option>
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.name}>{d.name} ({d.country})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Your Message & Desired Dates *</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the travelers, target travel window, past journeys that resonated, or specific landmarks you wish to experience..."
                  className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                />
              </div>

              <div className="p-3 bg-[#111310] border border-hairline text-[11px] text-[#736E65]">
                Demonstration Notice: In this preview environment, inquiries are processed client-side. Live external CRM dispatch is simulated.
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                <span>{submitting ? 'Transmitting to Senior Curator...' : 'Transmit Inquiry'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-6">
              <div className="w-14 h-14 bg-[#233A32] text-[#C6A66B] flex items-center justify-center mx-auto border border-gold-hairline">
                <Check className="w-8 h-8 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-serif text-[#F7F4ED]">Inquiry Received</h3>
              <p className="text-xs text-[#B8B1A5] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Your communication has been dispatched to our Senior Concierge Desk. A curator will review your notes and contact you within four business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs uppercase tracking-wider text-[#C6A66B] hover:underline"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Global Concierge Desks */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#161814] border border-hairline p-8 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Direct Contact
            </span>
            <div className="space-y-4 text-xs text-[#B8B1A5]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F7F4ED] uppercase tracking-wider text-[10px]">Private Concierge Desk</p>
                  <a href="mailto:concierge@aurelletravel.com" className="hover:text-[#F7F4ED] transition-colors">
                    concierge@aurelletravel.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F7F4ED] uppercase tracking-wider text-[10px]">North America & Caribbean</p>
                  <a href="tel:+18004728735" className="hover:text-[#F7F4ED] transition-colors">
                    +1 (800) 472-8735 (Toll-Free)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F7F4ED] uppercase tracking-wider text-[10px]">Europe & Middle East</p>
                  <a href="tel:+442079460912" className="hover:text-[#F7F4ED] transition-colors">
                    +44 (20) 7946 0912 (London HQ)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C6A66B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F7F4ED] uppercase tracking-wider text-[10px]">Hours of Operation</p>
                  <p className="text-[#736E65]">Monday to Friday: 08:00 – 20:00 (Local Regional Time)</p>
                  <p className="text-[#736E65]">24/7 dedicated flight operations desk for active travelers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Ateliers */}
          <div className="bg-[#161814] border border-hairline p-8 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Atelier Addresses
            </span>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <p className="font-semibold text-[#F7F4ED]">Geneva</p>
                <p className="text-[#736E65]">Rue du Rhône 42</p>
                <p className="text-[#736E65]">1204 Geneva, Switzerland</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[#F7F4ED]">London</p>
                <p className="text-[#736E65]">Berkeley Square House</p>
                <p className="text-[#736E65]">Mayfair, London W1J 6BD</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[#F7F4ED]">New York</p>
                <p className="text-[#736E65]">767 Fifth Avenue</p>
                <p className="text-[#736E65]">New York, NY 10153</p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-[#F7F4ED]">Singapore</p>
                <p className="text-[#736E65]">One Marina Boulevard</p>
                <p className="text-[#736E65]">Singapore 018989</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
