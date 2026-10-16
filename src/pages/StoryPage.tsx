import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, Compass, Shield, Heart, Feather, Globe, Award } from 'lucide-react';

export const StoryPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-5xl mx-auto space-y-20">
      {/* 1. HERO HEADER */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          The Atelier
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#F7F4ED] tracking-tight leading-tight">
          The Philosophy of Exceptional Travel
        </h1>
        <p className="text-base sm:text-lg text-[#B8B1A5] font-light leading-relaxed">
          “We create extraordinary journeys for those who believe the way you travel should be as remarkable as where you arrive.”
        </p>
      </div>

      {/* 2. MAIN EDITORIAL ESSAY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative aspect-[4/5] overflow-hidden bg-[#161814] border border-hairline">
          <img
            src="/src/assets/images/dest_kyoto_ryokan_1792156025024.jpg"
            alt="Kyoto traditional sanctuary garden at dawn"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111310]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-xs text-[#F7F4ED] font-serif italic">
            Takagamine foothills, Kyoto · Dedicated to private contemplation and stillness.
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6 text-[#B8B1A5] text-sm leading-relaxed">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Origins & Conviction
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
              The Antidote to the Standardized World
            </h2>
          </div>

          <p>
            Aurelle Travel was founded with a singular conviction: as the global travel industry grew increasingly industrial and automated, the true essence of exploration was being lost. Five-star hotels offered identical marble lobbies from Paris to Shanghai, and algorithms replaced the subtle human instinct of the curator.
          </p>

          <p>
            We set out to build an atelier for those who refuse the ordinary. For clients who understand that true luxury cannot be mass-produced, packaged, or booked with a click. It lives instead in the silence of a private morning in a Kyoto Zen garden before dawn chants finish; in the warm Tyrrhenian spray against the teak hull of a classic Riva speedboat; or in the heartbeat of the Serengeti savanna witnessed from a private mobile canvas camp.
          </p>

          <p>
            Today, Aurelle remains fiercely independent. We do not accept commissions to steer clients toward generic chain resorts. Our allegiance is exclusively to our travelers, our conservation partners, and the integrity of the journey.
          </p>
        </div>
      </div>

      {/* 3. FOUR CORE VALUES */}
      <div className="space-y-8 pt-8 border-t border-hairline">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Foundational Pillars
          </span>
          <h2 className="text-3xl font-serif text-[#F7F4ED]">
            The Values That Guide Every Decision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-[#161814] border border-hairline space-y-3">
            <span className="text-xl font-serif text-[#C6A66B]">01. Absolute Discretion</span>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              We operate under rigorous privacy protocols. From non-disclosure covenants to encrypted itinerary transmissions, we protect the anonymity and security of our clients, their families, and their itineraries.
            </p>
          </div>

          <div className="p-8 bg-[#161814] border border-hairline space-y-3">
            <span className="text-xl font-serif text-[#C6A66B]">02. Single-Tier Curation</span>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              Every client works directly with a Senior Travel Curator with at least a decade of on-ground regional experience. No junior routing desks, no robotic call queues.
            </p>
          </div>

          <div className="p-8 bg-[#161814] border border-hairline space-y-3">
            <span className="text-xl font-serif text-[#C6A66B]">03. Deep Terroir Access</span>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              We maintain direct personal relationships with temple custodians, generational winemakers, wildlife biologists, and private estate owners across six continents.
            </p>
          </div>

          <div className="p-8 bg-[#161814] border border-hairline space-y-3">
            <span className="text-xl font-serif text-[#C6A66B]">04. Regenerative Stewardship</span>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              We exclusively partner with wilderness concessions and marine reserves that actively protect endangered habitats, finance indigenous ranger forces, and respect local communities.
            </p>
          </div>
        </div>
      </div>

      {/* 4. FOUNDER NOTE */}
      <div className="bg-[#161814] border border-hairline p-8 sm:p-12 space-y-6">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            From the Founding Director
          </span>
          <p className="text-lg sm:text-xl font-serif italic text-[#F7F4ED] leading-relaxed">
            “Travel is not an item to be acquired or checked off a bucket list. At its highest expression, it is a creative dialogue between your inner life and the world’s most profound places. When you return home from an Aurelle journey, you should feel not merely rested, but subtly altered.”
          </p>
          <div className="pt-2 text-xs">
            <p className="font-semibold text-[#F7F4ED]">Arthur Aurelle de Montfort</p>
            <p className="text-[#736E65]">Founding Director & Principal Curator · Aurelle Travel Atelier, Geneva</p>
          </div>
        </div>
      </div>

      {/* 5. INVITATION CTA */}
      <div className="text-center space-y-6 pt-6">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Your Next Chapter
        </span>
        <h2 className="text-3xl font-serif text-[#F7F4ED]">
          Begin the Conversation
        </h2>
        <p className="text-sm text-[#B8B1A5] max-w-md mx-auto">
          We welcome the opportunity to discuss your next voyage in unhurried detail.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <button
            onClick={() => navigate('planner')}
            className="px-8 py-3.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2"
          >
            <span>Design My Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
