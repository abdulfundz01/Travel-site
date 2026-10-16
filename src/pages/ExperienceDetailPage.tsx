import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { EXPERIENCES } from '../data/experiences';
import { ExperienceCard } from '../components/ExperienceCard';
import { ChevronRight, ArrowRight, Clock, Users, Calendar, Sparkles } from 'lucide-react';

interface ExperienceDetailPageProps {
  experienceId?: string;
}

export const ExperienceDetailPage: React.FC<ExperienceDetailPageProps> = ({ experienceId }) => {
  const { route, navigate } = useNavigation();
  const id = experienceId || route.experienceId || 'private-island-escapes';
  const experience = EXPERIENCES.find((e) => e.id === id) || EXPERIENCES[0];

  const relatedExperiences = EXPERIENCES.filter((e) => e.id !== experience.id).slice(0, 3);

  const handleInquire = () => {
    navigate('planner', {
      plannerPrefill: {
        travelStyle: experience.category,
      }
    });
  };

  return (
    <div className="space-y-20 pb-24">
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[75vh] flex flex-col justify-end pb-12 pt-32 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={experience.heroImage}
            alt={experience.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-[#111310]/60 to-[#111310]/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto w-full space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8B1A5]">
            <button onClick={() => navigate('home')} className="hover:text-[#F7F4ED] transition-colors">
              Home
            </button>
            <ChevronRight className="w-3 h-3 text-[#736E65]" />
            <button onClick={() => navigate('experiences')} className="hover:text-[#F7F4ED] transition-colors">
              Experiences
            </button>
            <ChevronRight className="w-3 h-3 text-[#736E65]" />
            <span className="text-[#C6A66B]">{experience.category}</span>
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Signature Travel Collection
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-[#F7F4ED] tracking-tight">
              {experience.title}
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-[#F7F4ED]/90 font-light max-w-3xl leading-relaxed">
            {experience.subtitle}
          </p>

          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-hairline/60 text-xs">
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Suggested Duration</span>
              <span className="text-[#F7F4ED] font-mono">{experience.duration}</span>
            </div>
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Recommended Season</span>
              <span className="text-[#F7F4ED]">{experience.bestSeason.split('(')[0]}</span>
            </div>
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Curator Profile</span>
              <span className="text-[#F7F4ED] truncate">{experience.idealFor.split(',')[0]}</span>
            </div>
            <div>
              <span className="text-[#736E65] block uppercase tracking-wider text-[10px]">Indicative Curation</span>
              <span className="text-[#C6A66B] font-mono">{experience.indicativeStartingPrice}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NARRATIVE & PILLARS */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl font-serif text-[#F7F4ED] leading-relaxed italic border-l-2 border-[#C6A66B] pl-6">
            “{experience.tagline}”
          </p>
          <div className="text-base text-[#B8B1A5] leading-relaxed space-y-4">
            <p>{experience.leadParagraph}</p>
            <p>{experience.narrative}</p>
          </div>
        </div>

        {/* Pillars */}
        <div className="space-y-6 pt-6 border-t border-hairline">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              The Aurelle Distinction
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
              What Defines This Collection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experience.pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-[#161814] border border-hairline space-y-3">
                <span className="text-xl font-serif text-[#C6A66B]">0{idx + 1}</span>
                <h3 className="text-lg font-serif text-[#F7F4ED]">{pillar.title}</h3>
                <p className="text-xs text-[#B8B1A5] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SAMPLE ITINERARY OVERVIEW */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Illustrative Cadence
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
            Example Itinerary Arc
          </h2>
          <p className="text-xs text-[#736E65]">
            Each proposal is personalized. We modify durations, inclusions, and pace based on your individual brief.
          </p>
        </div>

        <div className="space-y-4">
          {experience.sampleItineraryOverview.map((item, idx) => (
            <div key={idx} className="p-6 bg-[#161814] border border-hairline space-y-2">
              <h3 className="text-base font-serif text-[#F7F4ED] flex items-center gap-2">
                <span className="text-[#C6A66B] font-mono text-xs">Stage 0{idx + 1}</span>
                <span>{item.title}</span>
              </h3>
              <p className="text-xs text-[#B8B1A5] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BESPOKE PROPOSAL CTA BANNER */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="bg-gradient-to-r from-[#1D201A] via-[#233A32]/60 to-[#1D201A] border border-gold-hairline p-8 sm:p-12 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Tailored Proposal
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED] max-w-xl mx-auto">
            Request a Bespoke Proposal for {experience.title}
          </h2>
          <p className="text-sm text-[#B8B1A5] max-w-lg mx-auto">
            Discuss dates, preferred coordinates, and private aviation arrangements with our curation team.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleInquire}
              className="px-8 py-3.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-[0.2em] font-semibold transition-colors flex items-center gap-2"
            >
              <span>Design This Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="px-8 py-3.5 border border-hairline hover:border-[#C6A66B] text-[#F7F4ED] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
            >
              Schedule Curator Call
            </button>
          </div>
        </div>
      </section>

      {/* 5. RELATED EXPERIENCES */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8 pt-8 border-t border-hairline">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Complementary Collections
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED]">
            Explore More Expressions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedExperiences.map((rel) => (
            <ExperienceCard key={rel.id} experience={rel} />
          ))}
        </div>
      </section>
    </div>
  );
};
