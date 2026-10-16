import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DESTINATIONS } from '../data/destinations';
import {
  ShieldAlert,
  Edit3,
  Calendar,
  Users,
  Compass,
  Check,
  ArrowRight,
  Printer,
  Sparkles,
  Info
} from 'lucide-react';

export const InquiryReviewPage: React.FC = () => {
  const { activeInquiry, setActiveInquiry, navigate } = useNavigation();

  // If activeInquiry doesn't exist yet, populate with sensible sample so the user can interact
  const initialData = activeInquiry || {
    destinationId: 'amalfi-coast',
    destinationName: 'The Amalfi Coast',
    travelStyle: 'Coastal Splendor & Private Yachts',
    flexibleDates: true,
    startDate: '2026-10-24',
    endDate: '2026-11-01',
    durationNights: 8,
    adults: 2,
    children: 0,
    budgetRange: '$25,000 – $50,000',
    accommodationType: ['Private Villa / Residence', 'Ultra-Luxury Boutique Sanctuary'],
    specialInterests: ['Private Yacht Charters', 'Fine Dining & Private Cellar', 'Private Aviation Transfers'],
    fullName: 'Lady Eleanor Vance',
    email: 'eleanor.vance@privateoffice.co.uk',
    phone: '+44 20 7946 0912',
    country: 'United Kingdom',
    specialRequests: 'Would prefer high-elevation suites with unobstructed sunset vistas and private helipad transfer directly from Naples Capodichino.',
  };

  const [dossier, setDossier] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [updateSaved, setUpdateSaved] = useState(false);

  const matchedDest = DESTINATIONS.find((d) => d.id === dossier.destinationId);

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEditing(false);
    setActiveInquiry(dossier);
    setUpdateSaved(true);
    setTimeout(() => setUpdateSaved(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-12">
      {/* Title */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          <Compass className="w-3.5 h-3.5" />
          <span>Voyage Dossier Review</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F4ED] tracking-tight">
          Booking Inquiry & Itinerary Review
        </h1>
        <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
          Inspect, refine, or print your travel preferences prior to final confirmation with your assigned Senior Curator.
        </p>
      </div>

      {/* Legal & Status Notice */}
      <div className="p-4 bg-[#161814] border border-gold-hairline text-xs space-y-2">
        <div className="flex items-center gap-2 text-[#C6A66B] font-semibold uppercase tracking-wider text-[11px]">
          <Info className="w-4 h-4" />
          <span>Provisional Curation Status: Pending Curator Confirmation</span>
        </div>
        <p className="text-[#B8B1A5] leading-relaxed">
          Notice regarding reservations: In accordance with our travel governance policies, this summary represents an active customized itinerary request. No hotel rooms, private villas, or aviation slots are guaranteed as confirmed until formal contracts are executed and provider reservations are secured.
        </p>
      </div>

      {updateSaved && (
        <div className="p-3 bg-[#233A32] border border-[#C6A66B] text-xs text-[#F7F4ED] flex items-center gap-2">
          <Check className="w-4 h-4 text-[#C6A66B]" />
          <span>Your modifications have been updated in your active dossier.</span>
        </div>
      )}

      {/* Main Dossier Card */}
      <div className="bg-[#161814] border border-hairline p-6 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-hairline pb-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#736E65] block font-mono">
              Voyage Code: AUR-{Math.abs(dossier.durationNights * 749).toString().slice(0, 5)}
            </span>
            <h2 className="text-2xl font-serif text-[#F7F4ED]">
              {dossier.destinationName || matchedDest?.name || 'Curated Escape'}
            </h2>
            <p className="text-xs text-[#C6A66B]">
              Primary Travel Style: {dossier.travelStyle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 border border-hairline text-xs uppercase tracking-wider text-[#F7F4ED] hover:border-[#C6A66B] transition-colors flex items-center gap-1.5"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditing ? 'Cancel Edit' : 'Modify Preferences'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="p-2 border border-hairline text-[#B8B1A5] hover:text-[#F7F4ED] transition-colors"
              title="Print Dossier"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content View / Edit Mode */}
        {!isEditing ? (
          <div className="space-y-6 text-xs text-[#B8B1A5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-1">
                <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Timing & Departure</span>
                <p className="text-sm font-serif text-[#F7F4ED] font-medium">
                  {dossier.durationNights} Nights
                </p>
                <p className="text-[#736E65]">Target Start: {dossier.startDate} ({dossier.flexibleDates ? 'Flexible' : 'Firm'})</p>
              </div>

              <div className="space-y-1">
                <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Guest Count</span>
                <p className="text-sm font-serif text-[#F7F4ED] font-medium">
                  {dossier.adults} Adults {dossier.children > 0 ? `, ${dossier.children} Children` : ''}
                </p>
                <p className="text-[#736E65]">Private party curation</p>
              </div>

              <div className="space-y-1">
                <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Indicative Budget</span>
                <p className="text-sm font-mono text-[#C6A66B] font-medium">
                  {dossier.budgetRange}
                </p>
                <p className="text-[#736E65]">Subject to estate & aviation availability</p>
              </div>
            </div>

            {/* Inclusions */}
            <div className="pt-4 border-t border-hairline space-y-2">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Preferred Residences</span>
              <div className="flex flex-wrap gap-2">
                {dossier.accommodationType.map((acc, i) => (
                  <span key={i} className="text-[#F7F4ED] bg-[#111310] px-3 py-1 border border-hairline text-[11px]">
                    {acc}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Special Inclusions & Curiosities</span>
              <div className="flex flex-wrap gap-2">
                {dossier.specialInterests.map((int, i) => (
                  <span key={i} className="text-[#F7F4ED] bg-[#111310] px-3 py-1 border border-hairline text-[11px]">
                    · {int}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Notes */}
            <div className="pt-4 border-t border-hairline space-y-1">
              <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Special Client Notes</span>
              <p className="text-xs text-[#F7F4ED] italic leading-relaxed">
                “{dossier.specialRequests || 'No special requirements noted.'}”
              </p>
            </div>

            {/* Contact details */}
            <div className="pt-4 border-t border-hairline grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Primary Client</span>
                <p className="text-[#F7F4ED] font-medium">{dossier.fullName}</p>
                <p className="text-[#736E65]">{dossier.country}</p>
              </div>
              <div>
                <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Contact Channels</span>
                <p className="text-[#F7F4ED]">{dossier.email}</p>
                <p className="text-[#736E65]">{dossier.phone}</p>
              </div>
            </div>
          </div>
        ) : (
          /* Form for Editing */
          <form onSubmit={handleSaveEdit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[#C6A66B] uppercase tracking-wider text-[10px]">Destination</label>
                <select
                  value={dossier.destinationId}
                  onChange={(e) => {
                    const found = DESTINATIONS.find((d) => d.id === e.target.value);
                    setDossier({ ...dossier, destinationId: e.target.value, destinationName: found?.name || '' });
                  }}
                  className="w-full bg-[#111310] border border-hairline p-2.5 text-[#F7F4ED] outline-none"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.id} value={d.id}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[#C6A66B] uppercase tracking-wider text-[10px]">Travel Style</label>
                <input
                  type="text"
                  value={dossier.travelStyle}
                  onChange={(e) => setDossier({ ...dossier, travelStyle: e.target.value })}
                  className="w-full bg-[#111310] border border-hairline p-2.5 text-[#F7F4ED] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#C6A66B] uppercase tracking-wider text-[10px]">Target Nights</label>
                <input
                  type="number"
                  min={3}
                  max={30}
                  value={dossier.durationNights}
                  onChange={(e) => setDossier({ ...dossier, durationNights: Number(e.target.value) })}
                  className="w-full bg-[#111310] border border-hairline p-2.5 text-[#F7F4ED] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#C6A66B] uppercase tracking-wider text-[10px]">Target Start Date</label>
                <input
                  type="date"
                  value={dossier.startDate}
                  onChange={(e) => setDossier({ ...dossier, startDate: e.target.value })}
                  className="w-full bg-[#111310] border border-hairline p-2.5 text-[#F7F4ED] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#C6A66B] uppercase tracking-wider text-[10px]">Adults</label>
                <input
                  type="number"
                  min={1}
                  value={dossier.adults}
                  onChange={(e) => setDossier({ ...dossier, adults: Number(e.target.value) })}
                  className="w-full bg-[#111310] border border-hairline p-2.5 text-[#F7F4ED] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#C6A66B] uppercase tracking-wider text-[10px]">Children</label>
                <input
                  type="number"
                  min={0}
                  value={dossier.children}
                  onChange={(e) => setDossier({ ...dossier, children: Number(e.target.value) })}
                  className="w-full bg-[#111310] border border-hairline p-2.5 text-[#F7F4ED] outline-none"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[#C6A66B] uppercase tracking-wider text-[10px]">Special Requests</label>
              <textarea
                rows={3}
                value={dossier.specialRequests}
                onChange={(e) => setDossier({ ...dossier, specialRequests: e.target.value })}
                className="w-full bg-[#111310] border border-hairline p-2.5 text-[#F7F4ED] outline-none"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#C6A66B] text-[#111310] font-semibold uppercase tracking-wider"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-5 py-2.5 border border-hairline text-[#B8B1A5]"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Next steps CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <button
          onClick={() => navigate('planner')}
          className="text-xs uppercase tracking-wider text-[#C6A66B] hover:underline"
        >
          ← Return to Interactive Journey Planner
        </button>

        <button
          onClick={() => navigate('contact')}
          className="px-6 py-3 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center gap-2"
        >
          <span>Speak with Assigned Curator</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
