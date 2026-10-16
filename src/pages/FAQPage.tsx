import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';
import { useNavigation } from '../context/NavigationContext';
import { ChevronDown, HelpCircle, ArrowRight, PhoneCall } from 'lucide-react';

export const FAQPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [openIds, setOpenIds] = useState<string[]>(['how-planning-works']);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Planning Process',
    'Pricing & Inclusions',
    'Flexibility & Changes',
    'Family & Groups',
    'Safety & Concierge'
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4 text-center max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Clarity & Governance
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#F7F4ED] tracking-tight">
          Planning FAQ
        </h1>
        <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
          Everything you need to know about our bespoke itinerary design, private aviation logistics, cancellation terms, and concierge support.
        </p>
      </div>

      {/* Category Pills/Buttons */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 border-b border-hairline no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 text-xs transition-colors whitespace-nowrap shrink-0 ${
              activeCategory === cat
                ? 'bg-[#C6A66B] text-[#111310] font-semibold'
                : 'text-[#B8B1A5] hover:text-[#F7F4ED] bg-[#161814]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filteredFaqs.map((faq) => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className="bg-[#161814] border border-hairline overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isOpen}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#1D201A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B]"
              >
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-[#C6A66B] font-mono">
                    {faq.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-serif text-[#F7F4ED]">
                    {faq.question}
                  </h3>
                </div>

                <div className={`p-1.5 text-[#B8B1A5] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-[#C6A66B]' : ''}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#B8B1A5] leading-relaxed border-t border-hairline/60 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Unresolved inquiry box */}
      <div className="bg-[#161814] border border-hairline p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C6A66B]">
            Still Have Questions?
          </span>
          <h3 className="text-2xl font-serif text-[#F7F4ED]">
            Speak with a Senior Curator
          </h3>
          <p className="text-xs text-[#B8B1A5] max-w-md">
            Our curators are pleased to walk you through specific property policies, private air routes, or group logistics over the phone.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => navigate('contact')}
            className="flex-1 sm:flex-initial px-6 py-3 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </button>
        </div>
      </div>
    </div>
  );
};
