import React, { useState } from 'react';
import { Destination } from '../types';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight, Compass } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const { navigate } = useNavigation();
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => navigate('destination-detail', { destinationId: destination.id })}
      className="group cursor-pointer bg-[#161814] border border-hairline hover:border-gold-hairline transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#1D201A]">
        {!imageError ? (
          <img
            src={destination.heroImage}
            alt={`${destination.name}, ${destination.country} luxury travel sanctuary`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1D201A] to-[#233A32] text-center">
            <Compass className="w-8 h-8 text-[#C6A66B] mb-2 stroke-[1.5]" />
            <span className="font-serif text-lg text-[#F7F4ED]">{destination.name}</span>
            <span className="text-xs text-[#B8B1A5]">{destination.country}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#161814] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Quiet unboxed top kicker */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-widest uppercase text-[#F7F4ED]/90 drop-shadow">
          <span>{destination.region}</span>
          <span className="text-[#C6A66B] font-mono">{destination.recommendedDuration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          {/* Unboxed metadata: zero-pill discipline */}
          <div className="text-xs text-[#B8B1A5] flex items-center flex-wrap gap-1.5">
            <span>{destination.country}</span>
            <span aria-hidden="true">·</span>
            <span>{destination.travelStyle[0]}</span>
            <span aria-hidden="true">·</span>
            <span>Best: {destination.bestTimeToVisit.split('&')[0]}</span>
          </div>

          <h3 className="text-2xl font-serif text-[#F7F4ED] group-hover:text-[#C6A66B] transition-colors flex items-center justify-between gap-2">
            <span>{destination.name}</span>
            <ArrowUpRight className="w-4 h-4 text-[#B8B1A5] group-hover:text-[#C6A66B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </h3>

          <p className="text-xs text-[#B8B1A5] line-clamp-2 leading-relaxed">
            {destination.tagline}
          </p>
        </div>

        {/* Footer info: Indicative starting tier and call to action */}
        <div className="pt-3 border-t border-hairline flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#736E65] block">Indicative Curation</span>
            <span className="font-mono text-[#F7F4ED] text-[11px]">{destination.indicativeStartingPrice}</span>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#C6A66B] font-medium group-hover:underline">
            Discover Sanctuary →
          </span>
        </div>
      </div>
    </article>
  );
};
