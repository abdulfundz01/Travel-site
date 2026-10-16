import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Compass, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-24 px-6 text-center">
      <div className="max-w-md space-y-6">
        <Compass className="w-12 h-12 text-[#C6A66B] mx-auto stroke-[1.5]" />
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          404 · Coordinate Uncharted
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED]">
          Beyond Mapped Horizons
        </h1>
        <p className="text-sm text-[#B8B1A5] leading-relaxed">
          The sanctuary or dispatch you are seeking does not reside at these coordinates. Let us return you to our charted collection.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigate('home')}
            className="w-full sm:w-auto px-6 py-3 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            Return to Homepage
          </button>
          <button
            onClick={() => navigate('destinations')}
            className="w-full sm:w-auto px-6 py-3 border border-hairline hover:border-[#C6A66B] text-[#F7F4ED] text-xs uppercase tracking-widest font-medium transition-colors"
          >
            Explore Sanctuaries
          </button>
        </div>
      </div>
    </div>
  );
};
