import React, { useState } from 'react';
import { EXPERIENCES } from '../data/experiences';
import { ExperienceCard } from '../components/ExperienceCard';
import { Sparkles, SlidersHorizontal } from 'lucide-react';

export const ExperiencesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Private Islands',
    'Safaris',
    'Yachts & Marine',
    'Honeymoons',
    'Cultural',
    'Alpine',
    'Wellness',
    'Culinary'
  ];

  const filteredExperiences = selectedCategory === 'All'
    ? EXPERIENCES
    : EXPERIENCES.filter((e) => e.category === selectedCategory);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Curated Travel Expressions
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#F7F4ED] tracking-tight">
          Signature Experiences
        </h1>
        <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
          Not simply a destination. A different way to experience the world. From private atolls in the Maldives to untracked African savannas and historic Riva charters along the Amalfi cliffs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-hairline no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#C6A66B] text-[#111310] font-semibold'
                : 'text-[#B8B1A5] hover:text-[#F7F4ED] bg-[#161814]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredExperiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>

      {/* Bespoke advisory strip */}
      <div className="bg-[#161814] border border-hairline p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C6A66B]">
            <Sparkles className="w-4 h-4" />
            <span>Beyond Our Catalog</span>
          </div>
          <h3 className="text-2xl font-serif text-[#F7F4ED]">Have a Unique Expedition in Mind?</h3>
          <p className="text-xs text-[#B8B1A5] max-w-xl">
            Our curators regularly coordinate private polar research charters, multi-country transcontinental rail voyages, and bespoke private aviation circuits.
          </p>
        </div>
      </div>
    </div>
  );
};
