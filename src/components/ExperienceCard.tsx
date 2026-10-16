import React, { useState } from 'react';
import { Experience } from '../types';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { navigate } = useNavigation();
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => navigate('experience-detail', { experienceId: experience.id })}
      className="group cursor-pointer bg-[#161814] border border-hairline hover:border-gold-hairline transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1D201A]">
        {!imageError ? (
          <img
            src={experience.heroImage}
            alt={experience.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#1D201A] to-[#233A32] text-center">
            <Sparkles className="w-8 h-8 text-[#C6A66B] mb-2 stroke-[1.5]" />
            <span className="font-serif text-lg text-[#F7F4ED]">{experience.title}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#161814] via-transparent to-black/30" />

        <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-widest uppercase text-[#F7F4ED]/90">
          <span>{experience.category}</span>
          <span className="text-[#C6A66B] font-mono">{experience.duration}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div className="space-y-2">
          <div className="text-xs text-[#B8B1A5] flex items-center gap-2">
            <span>Ideal For: {experience.idealFor.split(',')[0]}</span>
            <span aria-hidden="true">·</span>
            <span>Season: {experience.bestSeason.split('(')[0]}</span>
          </div>

          <h3 className="text-xl font-serif text-[#F7F4ED] group-hover:text-[#C6A66B] transition-colors flex items-center justify-between gap-2">
            <span>{experience.title}</span>
            <ArrowUpRight className="w-4 h-4 text-[#B8B1A5] group-hover:text-[#C6A66B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
          </h3>

          <p className="text-xs text-[#B8B1A5] line-clamp-2 leading-relaxed">
            {experience.subtitle}
          </p>
        </div>

        <div className="pt-3 border-t border-hairline flex items-center justify-between text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#736E65] block">Indicative From</span>
            <span className="font-mono text-[#F7F4ED] text-[11px]">{experience.indicativeStartingPrice}</span>
          </div>
          <span className="text-xs uppercase tracking-wider text-[#C6A66B] font-medium group-hover:underline">
            View Experience →
          </span>
        </div>
      </div>
    </article>
  );
};
