import React, { useState, useMemo } from 'react';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import { Search, SlidersHorizontal, RotateCcw } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'duration'>('featured');

  const regions = ['All', 'Indian Ocean', 'Europe', 'Asia', 'Africa', 'Polar & Nordic'];
  const styles = [
    'All',
    'Private Escapes',
    'Wildlife & Safari',
    'Cultural Immersion',
    'Alpine & Winter',
    'Coastal & Marine'
  ];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((d) => {
      // Text search
      const queryMatch =
        !searchQuery ||
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.region.toLowerCase().includes(searchQuery.toLowerCase());

      // Region match
      const regionMatch = selectedRegion === 'All' || d.region === selectedRegion;

      // Style match
      const styleMatch = selectedStyle === 'All' || d.travelStyle.includes(selectedStyle as any);

      return queryMatch && regionMatch && styleMatch;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'duration') {
        const durA = parseInt(a.recommendedDuration) || 0;
        const durB = parseInt(b.recommendedDuration) || 0;
        return durB - durA;
      }
      return 0; // Default curated order
    });
  }, [searchQuery, selectedRegion, selectedStyle, sortBy]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedStyle('All');
    setSortBy('featured');
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Global Sanctuaries
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#F7F4ED] tracking-tight">
          Destinations of Distinction
        </h1>
        <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
          From overwater atolls in the equatorial Indian Ocean to private Swiss chalets and ancient Kyoto courtyards, explore our curated portfolio of the world’s most remarkable sanctuaries.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#161814] border border-hairline p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search box */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736E65]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by sanctuary name, country, or keyword..."
              className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] pl-10 pr-4 py-2.5 text-xs text-[#F7F4ED] placeholder-[#736E65] outline-none transition-colors"
            />
          </div>

          {/* Region dropdown for mobile / tablet */}
          <div className="md:col-span-3">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] px-3 py-2.5 text-xs text-[#F7F4ED] outline-none transition-colors cursor-pointer"
            >
              <option value="All">All Regions</option>
              {regions.filter(r => r !== 'All').map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* Style dropdown */}
          <div className="md:col-span-2">
            <select
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] px-3 py-2.5 text-xs text-[#F7F4ED] outline-none transition-colors cursor-pointer"
            >
              <option value="All">All Styles</option>
              {styles.filter(s => s !== 'All').map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Sort dropdown */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] px-3 py-2.5 text-xs text-[#F7F4ED] outline-none transition-colors cursor-pointer"
            >
              <option value="featured">Sort: Curated</option>
              <option value="name">Sort: Alphabetical</option>
              <option value="duration">Sort: Duration</option>
            </select>
          </div>
        </div>

        {/* Region Segmented Filter Tabs (Interactive Filter Controls allowed per Constitution) */}
        <div className="hidden lg:flex items-center justify-between border-t border-hairline pt-4">
          <div className="flex items-center gap-1">
            <span className="text-xs uppercase tracking-wider text-[#736E65] mr-3">Region:</span>
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 text-xs tracking-wider transition-colors whitespace-nowrap shrink-0 ${
                  selectedRegion === region
                    ? 'bg-[#233A32] text-[#F7F4ED] border border-hairline'
                    : 'text-[#B8B1A5] hover:text-[#F7F4ED]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {(searchQuery || selectedRegion !== 'All' || selectedStyle !== 'All') && (
            <button
              onClick={resetFilters}
              className="text-xs text-[#C6A66B] hover:text-[#D8B97E] flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-[#B8B1A5] pt-2">
        <span>
          Showing <span className="font-mono text-[#F7F4ED]">{filteredDestinations.length}</span> curated sanctuaries
        </span>
        <span className="text-[#736E65]">Private aviation & yacht logistics available for all locations</span>
      </div>

      {/* Grid of Destination Cards */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#161814] border border-hairline space-y-4">
          <SlidersHorizontal className="w-8 h-8 text-[#C6A66B] mx-auto stroke-[1.5]" />
          <h3 className="text-2xl font-serif text-[#F7F4ED]">No Sanctuaries Matched</h3>
          <p className="text-sm text-[#B8B1A5] max-w-md mx-auto">
            We could not find an existing destination matching your current filter criteria.
          </p>
          <button
            onClick={resetFilters}
            className="px-6 py-2.5 bg-[#C6A66B] text-[#111310] text-xs uppercase tracking-widest font-semibold hover:bg-[#D8B97E] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
