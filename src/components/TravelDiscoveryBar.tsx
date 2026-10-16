import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DESTINATIONS } from '../data/destinations';
import { Search, Compass, Calendar, Users, SlidersHorizontal, ArrowRight } from 'lucide-react';

export const TravelDiscoveryBar: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedDest, setSelectedDest] = useState('');
  const [travelPeriod, setTravelPeriod] = useState('Flexible 2026/2027');
  const [guests, setGuests] = useState('2 Guests (Couple)');
  const [style, setStyle] = useState('All Styles');

  const handleDiscoverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDest && selectedDest !== 'all') {
      // Direct to destination detail or planner
      navigate('destination-detail', { destinationId: selectedDest });
    } else {
      // Direct to destinations list
      navigate('destinations');
    }
  };

  const handlePlanDirectly = () => {
    navigate('planner', {
      plannerPrefill: {
        destinationId: selectedDest !== 'all' ? selectedDest : '',
        travelStyle: style !== 'All Styles' ? style : 'Private Escapes',
        adults: guests.includes('Couple') ? 2 : guests.includes('Solo') ? 1 : 4,
      }
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-[#161814]/95 backdrop-blur-md border border-hairline shadow-2xl p-4 sm:p-6">
      <form onSubmit={handleDiscoverySubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Destination */}
          <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-hairline pb-3 sm:pb-0 sm:pr-4">
            <label className="text-[11px] uppercase tracking-widest text-[#C6A66B] flex items-center gap-1.5 font-medium">
              <Compass className="w-3.5 h-3.5" />
              <span>Destination</span>
            </label>
            <select
              value={selectedDest}
              onChange={(e) => setSelectedDest(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F7F4ED] font-serif focus:outline-none cursor-pointer tracking-wide"
            >
              <option value="" className="bg-[#161814] text-[#B8B1A5]">Select a Sanctuary...</option>
              <option value="all" className="bg-[#161814] text-[#F7F4ED]">Explore All Destinations</option>
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.id} className="bg-[#161814] text-[#F7F4ED]">
                  {d.name} ({d.country})
                </option>
              ))}
            </select>
          </div>

          {/* Travel Period */}
          <div className="space-y-1.5 border-b sm:border-b-0 lg:border-r border-hairline pb-3 sm:pb-0 sm:pr-4">
            <label className="text-[11px] uppercase tracking-widest text-[#C6A66B] flex items-center gap-1.5 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Timing</span>
            </label>
            <select
              value={travelPeriod}
              onChange={(e) => setTravelPeriod(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F7F4ED] font-serif focus:outline-none cursor-pointer tracking-wide"
            >
              <option value="Flexible 2026/2027" className="bg-[#161814]">Flexible 2026 / 2027</option>
              <option value="Autumn 2026" className="bg-[#161814]">Autumn 2026 (Oct – Nov)</option>
              <option value="Winter Festive 2026" className="bg-[#161814]">Winter / Festive 2026</option>
              <option value="Spring 2027" className="bg-[#161814]">Spring 2027 (Mar – May)</option>
              <option value="Summer 2027" className="bg-[#161814]">Summer 2027 (Jun – Aug)</option>
            </select>
          </div>

          {/* Party Size */}
          <div className="space-y-1.5 border-b sm:border-b-0 sm:border-r border-hairline pb-3 sm:pb-0 sm:pr-4">
            <label className="text-[11px] uppercase tracking-widest text-[#C6A66B] flex items-center gap-1.5 font-medium">
              <Users className="w-3.5 h-3.5" />
              <span>Travelers</span>
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F7F4ED] font-serif focus:outline-none cursor-pointer tracking-wide"
            >
              <option value="2 Guests (Couple)" className="bg-[#161814]">2 Guests (Couple)</option>
              <option value="Solo Connoisseur" className="bg-[#161814]">Solo Connoisseur</option>
              <option value="Small Family (3-4)" className="bg-[#161814]">Private Family (3–4)</option>
              <option value="Villa Party (5-8)" className="bg-[#161814]">Private Villa Group (5–8)</option>
              <option value="Full Buyout (9+)" className="bg-[#161814]">Sole-Use Buyout (9+)</option>
            </select>
          </div>

          {/* Style */}
          <div className="space-y-1.5 pb-2 sm:pb-0">
            <label className="text-[11px] uppercase tracking-widest text-[#C6A66B] flex items-center gap-1.5 font-medium">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Travel Style</span>
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full bg-transparent text-sm text-[#F7F4ED] font-serif focus:outline-none cursor-pointer tracking-wide"
            >
              <option value="All Styles" className="bg-[#161814]">Curated (All Styles)</option>
              <option value="Private Escapes" className="bg-[#161814]">Private Escapes & Islands</option>
              <option value="Wildlife & Safari" className="bg-[#161814]">Wildlife & Safaris</option>
              <option value="Coastal & Marine" className="bg-[#161814]">Coastal & Private Yachts</option>
              <option value="Cultural Immersion" className="bg-[#161814]">Cultural Immersion</option>
              <option value="Alpine & Winter" className="bg-[#161814]">Alpine & Winter</option>
            </select>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#736E65] tracking-wide">
            Every Aurelle journey is custom designed by a dedicated private curator.
          </p>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="submit"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-medium border border-hairline text-[#F7F4ED] hover:border-[#C6A66B] hover:text-[#C6A66B] transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Explore Sanctuaries</span>
            </button>

            <button
              type="button"
              onClick={handlePlanDirectly}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] transition-colors whitespace-nowrap"
            >
              <span>Design Bespoke</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
