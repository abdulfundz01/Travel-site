import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { X, Check } from 'lucide-react';

export const CookieModal: React.FC = () => {
  const { cookieModalOpen, setCookieModalOpen, cookiePreferences, saveCookiePreferences } = useNavigation();
  const [localPrefs, setLocalPrefs] = useState(cookiePreferences);

  if (!cookieModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#161814] border border-hairline max-w-lg w-full p-6 sm:p-8 space-y-6 text-[#F7F4ED] shadow-2xl relative">
        <button
          onClick={() => setCookieModalOpen(false)}
          className="absolute top-6 right-6 text-[#B8B1A5] hover:text-[#F7F4ED] transition-colors"
          aria-label="Close cookie modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C6A66B]">
            Data Governance & Privacy
          </span>
          <h2 className="text-xl sm:text-2xl font-serif">
            Privacy & Cookie Preferences
          </h2>
          <p className="text-xs sm:text-sm text-[#B8B1A5] leading-relaxed">
            At Aurelle Travel, client confidentiality is a cornerstone of our service. We use strictly necessary cookies to ensure basic site navigation, and optional privacy-first analytics to tailor your private curation.
          </p>
        </div>

        <div className="space-y-4 pt-2 border-t border-hairline">
          {/* Essential */}
          <div className="flex items-start justify-between gap-4 py-2">
            <div>
              <p className="text-sm font-medium text-[#F7F4ED]">Strictly Essential</p>
              <p className="text-xs text-[#736E65]">
                Required for security verification, navigation routing, and form preservation.
              </p>
            </div>
            <span className="text-xs uppercase tracking-wider text-[#C6A66B] px-2 py-1 bg-[#111310] border border-hairline whitespace-nowrap">
              Always Active
            </span>
          </div>

          {/* Analytics */}
          <div className="flex items-start justify-between gap-4 py-2 border-t border-hairline">
            <div>
              <p className="text-sm font-medium text-[#F7F4ED]">Performance & Analytics</p>
              <p className="text-xs text-[#736E65]">
                Allows anonymous telemetry to measure which editorial dispatches and itineraries resonate.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLocalPrefs({ ...localPrefs, analytics: !localPrefs.analytics })}
              className={`w-11 h-6 flex items-center p-1 transition-colors ${
                localPrefs.analytics ? 'bg-[#C6A66B] justify-end' : 'bg-[#233A32] justify-start'
              }`}
            >
              <span className="w-4 h-4 bg-[#111310] block" />
            </button>
          </div>

          {/* Personalization */}
          <div className="flex items-start justify-between gap-4 py-2 border-t border-hairline">
            <div>
              <p className="text-sm font-medium text-[#F7F4ED]">Curator Personalization</p>
              <p className="text-xs text-[#736E65]">
                Remembers your preferred travel styles and past inquiries across browser sessions.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLocalPrefs({ ...localPrefs, personalization: !localPrefs.personalization })}
              className={`w-11 h-6 flex items-center p-1 transition-colors ${
                localPrefs.personalization ? 'bg-[#C6A66B] justify-end' : 'bg-[#233A32] justify-start'
              }`}
            >
              <span className="w-4 h-4 bg-[#111310] block" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-hairline">
          <button
            onClick={() => {
              saveCookiePreferences({
                essential: true,
                analytics: true,
                personalization: true,
              });
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-[#C6A66B] text-[#111310] hover:bg-[#D8B97E] transition-colors"
          >
            Accept All
          </button>
          <button
            onClick={() => saveCookiePreferences(localPrefs)}
            className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-widest font-medium border border-hairline text-[#F7F4ED] hover:bg-[#161814] hover:border-[#C6A66B] transition-colors flex items-center justify-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5 text-[#C6A66B]" />
            <span>Save My Choices</span>
          </button>
        </div>
      </div>
    </div>
  );
};
