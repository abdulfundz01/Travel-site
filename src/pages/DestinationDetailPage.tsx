import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DESTINATIONS } from '../data/destinations';
import { DestinationCard } from '../components/DestinationCard';
import {
  Compass,
  Calendar,
  Clock,
  Plane,
  Shield,
  MapPin,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react';

interface DestinationDetailPageProps {
  destinationId?: string;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({ destinationId }) => {
  const { route, navigate } = useNavigation();
  const id = destinationId || route.destinationId || 'maldives';
  const destination = DESTINATIONS.find((d) => d.id === id) || DESTINATIONS[0];

  // Related destinations (same region or shared travel style)
  const relatedDestinations = DESTINATIONS.filter(
    (d) => d.id !== destination.id && (d.region === destination.region || d.travelStyle.some((s) => destination.travelStyle.includes(s)))
  ).slice(0, 3);

  const handlePlanHere = () => {
    navigate('planner', {
      plannerPrefill: {
        destinationId: destination.id,
        destinationName: destination.name,
        travelStyle: destination.travelStyle[0],
      }
    });
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pb-12 pt-32 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={destination.heroImage}
            alt={destination.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-[#111310]/60 to-[#111310]/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-4">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8B1A5]">
            <button onClick={() => navigate('home')} className="hover:text-[#F7F4ED] transition-colors">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-[#736E65]" />
            <button onClick={() => navigate('destinations')} className="hover:text-[#F7F4ED] transition-colors">
              Destinations
            </button>
            <ChevronRight className="w-3 h-3 text-[#736E65]" />
            <span className="text-[#C6A66B]">{destination.name}</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B] font-medium">
              {destination.region} · {destination.country}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F7F4ED] tracking-tight">
              {destination.name}
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-[#F7F4ED]/90 font-light max-w-3xl leading-relaxed">
            {destination.tagline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-hairline/60 text-xs">
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Optimal Season</span>
              <span className="text-[#F7F4ED] font-medium">{destination.bestTimeToVisit.split('&')[0]}</span>
            </div>
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Recommended Stay</span>
              <span className="text-[#F7F4ED] font-mono">{destination.recommendedDuration}</span>
            </div>
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Primary Style</span>
              <span className="text-[#F7F4ED]">{destination.travelStyle[0]}</span>
            </div>
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Indicative Curation</span>
              <span className="text-[#C6A66B] font-mono">{destination.indicativeStartingPrice}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL ESSAY & WHY VISIT */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl font-serif text-[#F7F4ED] leading-relaxed italic border-l-2 border-[#C6A66B] pl-6">
            “{destination.editorialLead}”
          </p>
          <div className="text-base text-[#B8B1A5] leading-relaxed space-y-4">
            <p>{destination.narrative}</p>
          </div>
        </div>

        {/* 3 Pillars: Why Visit */}
        <div className="space-y-6 pt-6 border-t border-hairline">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              The Aurelle Perspective
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
              Why Experience {destination.name} With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destination.whyVisit.map((item, idx) => (
              <div key={idx} className="p-6 bg-[#161814] border border-hairline space-y-3">
                <span className="text-xl font-serif text-[#C6A66B]">0{idx + 1}</span>
                <h3 className="text-lg font-serif text-[#F7F4ED]">{item.title}</h3>
                <p className="text-xs text-[#B8B1A5] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CLIMATE & BEST TIME TO VISIT */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="bg-[#161814] border border-hairline p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            <Calendar className="w-4 h-4" />
            <span>Seasonal Advisory</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
            When to Travel to {destination.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-hairline text-xs">
            <div className="space-y-2">
              <span className="uppercase tracking-widest text-[#C6A66B] font-semibold">Recommended Period</span>
              <p className="text-sm font-serif text-[#F7F4ED]">{destination.bestTimeToVisit}</p>
              <p className="text-[#736E65]">Most stable meteorological conditions and ideal outdoor visibility.</p>
            </div>
            <div className="space-y-2">
              <span className="uppercase tracking-widest text-[#F7F4ED] font-semibold">Peak High Season</span>
              <p className="text-sm font-serif text-[#F7F4ED]">{destination.peakSeason}</p>
              <p className="text-[#736E65]">High demand for private villas and yacht berths. Advance notice recommended.</p>
            </div>
            <div className="space-y-2">
              <span className="uppercase tracking-widest text-[#C6A66B] font-semibold">The Curator’s Secret Season</span>
              <p className="text-sm font-serif text-[#F7F4ED]">{destination.secretSeason}</p>
              <p className="text-[#736E65]">Exceptional tranquility, unique migrations, and unhurried access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE EXPERIENCES IN THIS DESTINATION */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Exclusive Access
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
            Signature Moments in {destination.name}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {destination.signatureExperiences.map((exp, idx) => (
            <div key={idx} className="p-6 bg-[#161814] border border-hairline flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#C6A66B]">
                  {exp.duration}
                </span>
                <h3 className="text-lg font-serif text-[#F7F4ED]">{exp.title}</h3>
                <p className="text-xs text-[#B8B1A5] leading-relaxed">{exp.description}</p>
              </div>
              <div className="pt-3 border-t border-hairline text-[11px] text-[#736E65]">
                Arranged exclusively for Aurelle travelers
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CURATED PRIVATE STAYS & ESTATES */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Where You Reside
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
            Curated Stays & Private Estates
          </h2>
        </div>

        <div className="space-y-4">
          {destination.curatedStays.map((stay, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-[#161814] border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:border-gold-hairline transition-colors"
            >
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2 text-xs text-[#C6A66B]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{stay.location}</span>
                </div>
                <h3 className="text-xl font-serif text-[#F7F4ED]">{stay.name}</h3>
                <p className="text-xs text-[#B8B1A5]">{stay.style}</p>
                <p className="text-xs text-[#736E65] pt-1">
                  <span className="text-[#C6A66B]">Curator Note:</span> {stay.highlight}
                </p>
              </div>

              <button
                onClick={handlePlanHere}
                className="px-5 py-2.5 bg-[#111310] border border-hairline hover:border-[#C6A66B] text-[#F7F4ED] text-xs uppercase tracking-widest font-medium transition-colors whitespace-nowrap self-start sm:self-center"
              >
                Inquire Residence
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SUGGESTED DAY-BY-DAY ITINERARY */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            The Journey Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
            Sample Bespoke Itinerary ({destination.recommendedDuration})
          </h2>
          <p className="text-xs text-[#736E65]">
            Note: Every Aurelle itinerary is created from scratch. This outline represents one exemplary rhythm.
          </p>
        </div>

        <div className="space-y-6">
          {destination.suggestedItinerary.map((leg, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-[#161814] border border-hairline space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-hairline pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C6A66B]">
                  {leg.dayRange}
                </span>
                <h3 className="text-xl font-serif text-[#F7F4ED]">{leg.title}</h3>
              </div>

              <p className="text-xs sm:text-sm text-[#B8B1A5] leading-relaxed">
                {leg.summary}
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                {leg.highlights.map((h, i) => (
                  <span key={i} className="text-[#F7F4ED] bg-[#111310] px-3 py-1 border border-hairline">
                    · {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRACTICAL TRAVEL ADVISORY */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="bg-[#161814] border border-hairline p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            <Info className="w-4 h-4" />
            <span>Practical Advisory</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
            Essential Travel Logistics
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 border-t border-hairline text-xs">
            <div className="space-y-1">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px]">Gateway Airport</span>
              <p className="text-[#F7F4ED] font-medium">{destination.practicalInfo.gatewayAirport}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px]">Private Aviation</span>
              <p className="text-[#F7F4ED]">{destination.practicalInfo.privateAviationAccess}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px]">Climate Overview</span>
              <p className="text-[#F7F4ED]">{destination.practicalInfo.climateOverview}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px]">Local Timezone</span>
              <p className="text-[#F7F4ED] font-mono">{destination.practicalInfo.timeZone}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px]">Currency & Transacting</span>
              <p className="text-[#F7F4ED]">{destination.practicalInfo.currency}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px]">Visa & Entry Protocol</span>
              <p className="text-[#F7F4ED]">{destination.practicalInfo.visaAdvisory}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PLAN HERE CTA BANNER */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="bg-gradient-to-r from-[#1D201A] via-[#233A32]/60 to-[#1D201A] border border-gold-hairline p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Custom Journey Curation
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED] max-w-xl mx-auto">
            Design Your Escape to {destination.name}
          </h2>
          <p className="text-sm text-[#B8B1A5] max-w-lg mx-auto">
            Our Senior Curators are ready to shape an extraordinary itinerary around your schedule, preferred private estates, and desires.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handlePlanHere}
              className="px-8 py-3.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2"
            >
              <span>Plan a Journey Here</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="px-8 py-3.5 border border-hairline hover:border-[#C6A66B] text-[#F7F4ED] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Request Curator Call
            </button>
          </div>
        </div>
      </section>

      {/* 9. RELATED SANCTUARIES */}
      {relatedDestinations.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8 pt-8 border-t border-hairline">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Complementary Horizons
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
              Related Sanctuaries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDestinations.map((rel) => (
              <DestinationCard key={rel.id} destination={rel} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
