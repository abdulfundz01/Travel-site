import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DESTINATIONS } from '../data/destinations';
import { JourneyPlannerState } from '../types';
import {
  Compass,
  Check,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Calendar,
  Users,
  DollarSign,
  Sparkles,
  ShieldCheck,
  Info
} from 'lucide-react';

export const PlannerPage: React.FC = () => {
  const { route, navigate, setActiveInquiry } = useNavigation();

  // Initialize planner state with any prefilled route info
  const [formData, setFormData] = useState<JourneyPlannerState>({
    destinationId: route.plannerPrefill?.destinationId || '',
    destinationName: route.plannerPrefill?.destinationName || '',
    travelStyle: route.plannerPrefill?.travelStyle || 'Private Escapes',
    flexibleDates: true,
    startDate: '2026-11-01',
    endDate: '2026-11-10',
    durationNights: 8,
    adults: route.plannerPrefill?.adults || 2,
    children: 0,
    budgetRange: '$25,000 – $50,000',
    accommodationType: ['Private Villa / Residence', 'Ultra-Luxury Boutique Sanctuary'],
    specialInterests: ['Fine Dining & Private Cellar', 'Private Aviation Transfers'],
    fullName: '',
    email: '',
    phone: '',
    country: 'United States',
    specialRequests: '',
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');

  useEffect(() => {
    if (route.plannerPrefill) {
      setFormData((prev) => ({
        ...prev,
        ...route.plannerPrefill,
      }));
    }
  }, [route.plannerPrefill]);

  const travelStyles = [
    { id: 'Private Escapes', title: 'Private Island & Solitary Escapes', desc: 'Sole-occupancy atolls, overwater pavilions, and secluded estates.' },
    { id: 'Wildlife & Safari', title: 'Exclusive Wildlife & Safaris', desc: 'Private concessions in Serengeti, Okavango, and Ngorongoro.' },
    { id: 'Cultural Immersion', title: 'Living Heritage & Cultural Immersion', desc: 'Behind-the-scenes access to Kyoto masters and ancient medinas.' },
    { id: 'Coastal & Marine', title: 'Coastal Splendor & Private Yachts', desc: 'Vintage Riva charters and Mediterranean secluded coves.' },
    { id: 'Alpine & Winter', title: 'Alpine Hideaways & Heli-Skiing', desc: 'Swiss Alps architectural chalets and glacial descents.' },
    { id: 'Holistic Wellness', title: 'Holistic Sanctuaries & Thermal Rejuvenation', desc: 'Integrative health, private onsens, and Ayurvedic therapies.' },
  ];

  const budgetTiers = [
    { range: '$15,000 – $25,000', desc: 'Boutique luxury retreats & customized private day guiding.' },
    { range: '$25,000 – $50,000', desc: 'Signature private villas, private boat charters & premier guides.' },
    { range: '$50,000 – $100,000', desc: 'Sole-use safari camps, private seaplanes & top-tier suites.' },
    { range: '$100,000+', desc: 'Complete private island buyouts, superyachts & chartered jets.' },
  ];

  const accommodationOptions = [
    'Private Villa / Residence',
    'Ultra-Luxury Boutique Sanctuary',
    'Mobile Canvas Safari Camp',
    'Private Chartered Yacht',
    'Historic Heritage Ryokan / Palace',
    'Architectural Alpine Chalet'
  ];

  const interestOptions = [
    'Private Aviation Transfers',
    'Fine Dining & Private Cellar',
    'Rare Wildlife Tracking',
    'Contemporary Art & Private Collections',
    'Thermal Wellness & Spas',
    'Private Yacht Charters',
    'Stargazing & Astronomy',
    'Family Educational Expeditions'
  ];

  const toggleAccommodation = (acc: string) => {
    setFormData((prev) => {
      const exists = prev.accommodationType.includes(acc);
      return {
        ...prev,
        accommodationType: exists
          ? prev.accommodationType.filter((a) => a !== acc)
          : [...prev.accommodationType, acc],
      };
    });
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.specialInterests.includes(interest);
      return {
        ...prev,
        specialInterests: exists
          ? prev.specialInterests.filter((i) => i !== interest)
          : [...prev.specialInterests, interest],
      };
    });
  };

  const validateStep = (step: number): boolean => {
    setValidationError('');
    if (step === 1) {
      if (!formData.destinationId) {
        setValidationError('Please select a preferred sanctuary or choose "Help me decide".');
        return false;
      }
    } else if (step === 2) {
      if (!formData.travelStyle) {
        setValidationError('Please select a travel style.');
        return false;
      }
    } else if (step === 4) {
      if (formData.adults < 1) {
        setValidationError('Please specify at least 1 adult traveler.');
        return false;
      }
    } else if (step === 7) {
      // Validate contact inputs
      if (!formData.fullName.trim()) {
        setValidationError('Please provide your full legal name.');
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        setValidationError('Please provide a valid email address.');
        return false;
      }
      if (!formData.phone.trim()) {
        setValidationError('Please provide a telephone number for your private curator.');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 8)); // Step 8 is review & submit
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setValidationError('');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(7)) return;

    setSubmitting(true);
    // Simulate inquiry submission with realistic network latency
    await new Promise((res) => setTimeout(res, 900));
    setSubmitting(false);
    setSubmitted(true);
    setActiveInquiry(formData);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-4xl mx-auto space-y-10">
      {/* Page Title */}
      <div className="space-y-3 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Bespoke Journey Atelier
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif text-[#F7F4ED] tracking-tight">
          Design Your Journey
        </h1>
        <p className="text-sm text-[#B8B1A5] max-w-lg mx-auto font-light">
          Share your intentions, pace, and desires. Our Senior Curators will architect an extraordinary personalized proposal.
        </p>
      </div>

      {!submitted ? (
        <div className="bg-[#161814] border border-hairline p-6 sm:p-10 space-y-8">
          {/* Progress Indicator */}
          <div className="space-y-3 border-b border-hairline pb-6">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-widest text-[#C6A66B] font-mono">
                Step 0{currentStep} of 08
              </span>
              <span className="text-[#B8B1A5]">
                {currentStep === 1 && 'Sanctuary Selection'}
                {currentStep === 2 && 'Travel Style'}
                {currentStep === 3 && 'Dates & Timing'}
                {currentStep === 4 && 'Travel Party'}
                {currentStep === 5 && 'Budget Alignment'}
                {currentStep === 6 && 'Estates & Curiosities'}
                {currentStep === 7 && 'Private Contact'}
                {currentStep === 8 && 'Final Review & Proposal Request'}
              </span>
            </div>

            {/* Visual progress bar */}
            <div className="w-full bg-[#111310] h-1.5 overflow-hidden">
              <div
                className="bg-[#C6A66B] h-full transition-all duration-300 ease-out"
                style={{ width: `${(currentStep / 8) * 100}%` }}
              />
            </div>
          </div>

          {/* Validation Banner if error */}
          {validationError && (
            <div className="p-4 bg-rose-950/40 border border-rose-800/60 text-xs text-rose-300 flex items-center gap-2">
              <Info className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{validationError}</span>
            </div>
          )}

          {/* STEP 1: DESTINATION */}
          {currentStep === 1 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">Where does your curiosity lead?</h2>
                <p className="text-xs text-[#B8B1A5]">Select a sanctuary from our collection or request our curator’s recommendation.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[420px] overflow-y-auto pr-1">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, destinationId: 'curator-choice', destinationName: 'Help me decide (Curator Recommendation)' })}
                  className={`p-4 border text-left transition-colors flex items-start gap-3 ${
                    formData.destinationId === 'curator-choice'
                      ? 'border-[#C6A66B] bg-[#233A32]/40 text-[#F7F4ED]'
                      : 'border-hairline bg-[#111310] text-[#B8B1A5] hover:border-[#736E65]'
                  }`}
                >
                  <Sparkles className="w-5 h-5 text-[#C6A66B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#F7F4ED]">Help Me Decide</p>
                    <p className="text-xs text-[#736E65]">Have our Senior Curator analyze your dates and style to recommend the optimal coordinates.</p>
                  </div>
                </button>

                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, destinationId: dest.id, destinationName: dest.name })}
                    className={`p-4 border text-left transition-colors flex items-start justify-between gap-3 ${
                      formData.destinationId === dest.id
                        ? 'border-[#C6A66B] bg-[#233A32]/40 text-[#F7F4ED]'
                        : 'border-hairline bg-[#111310] text-[#B8B1A5] hover:border-[#736E65]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#C6A66B] block">{dest.region}</span>
                      <p className="text-sm font-medium text-[#F7F4ED]">{dest.name}</p>
                      <p className="text-xs text-[#736E65] line-clamp-1">{dest.country}</p>
                    </div>
                    {formData.destinationId === dest.id && (
                      <Check className="w-4 h-4 text-[#C6A66B] shrink-0 mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: TRAVEL STYLE */}
          {currentStep === 2 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">What mood best characterizes this journey?</h2>
                <p className="text-xs text-[#B8B1A5]">Choose the primary spirit of your voyage.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {travelStyles.map((style) => (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, travelStyle: style.id })}
                    className={`p-4 border text-left transition-colors flex items-start justify-between gap-3 ${
                      formData.travelStyle === style.id
                        ? 'border-[#C6A66B] bg-[#233A32]/40 text-[#F7F4ED]'
                        : 'border-hairline bg-[#111310] text-[#B8B1A5] hover:border-[#736E65]'
                    }`}
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-[#F7F4ED]">{style.title}</p>
                      <p className="text-xs text-[#736E65]">{style.desc}</p>
                    </div>
                    {formData.travelStyle === style.id && (
                      <Check className="w-4 h-4 text-[#C6A66B] shrink-0 mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: DATES & TIMING */}
          {currentStep === 3 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">When do you wish to embark?</h2>
                <p className="text-xs text-[#B8B1A5]">Choose specific calendar dates or indicate seasonal flexibility.</p>
              </div>

              <div className="p-4 bg-[#111310] border border-hairline flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-[#F7F4ED]">My Dates Are Flexible</p>
                  <p className="text-xs text-[#736E65]">Allows our curators to align your journey with secret micro-seasons.</p>
                </div>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, flexibleDates: !formData.flexibleDates })}
                  className={`w-11 h-6 flex items-center p-1 transition-colors ${
                    formData.flexibleDates ? 'bg-[#C6A66B] justify-end' : 'bg-[#233A32] justify-start'
                  }`}
                >
                  <span className="w-4 h-4 bg-[#111310] block" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Target Departure</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Duration (Nights)</label>
                  <select
                    value={formData.durationNights}
                    onChange={(e) => setFormData({ ...formData, durationNights: Number(e.target.value) })}
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                  >
                    <option value={5}>5 Nights (Extended Weekend)</option>
                    <option value={7}>7 Nights (One Full Week)</option>
                    <option value={10}>10 Nights (Immersive Pace)</option>
                    <option value={14}>14 Nights (Two Weeks Grand Tour)</option>
                    <option value={21}>21+ Nights (Grand Sabbatical)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: GUESTS */}
          {currentStep === 4 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">Who is traveling in your party?</h2>
                <p className="text-xs text-[#B8B1A5]">Party configuration helps us curate private aviation payloads and bedroom suites.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-[#111310] border border-hairline space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#C6A66B]">Adult Travelers (18+)</span>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
                      className="w-10 h-10 border border-hairline text-lg font-mono text-[#F7F4ED] hover:border-[#C6A66B] transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-serif text-[#F7F4ED] font-mono w-8 text-center">
                      {formData.adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, adults: formData.adults + 1 })}
                      className="w-10 h-10 border border-hairline text-lg font-mono text-[#F7F4ED] hover:border-[#C6A66B] transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[11px] text-[#736E65]">Includes couple suites and single occupancy requirements.</p>
                </div>

                <div className="p-6 bg-[#111310] border border-hairline space-y-3">
                  <span className="text-xs uppercase tracking-widest text-[#C6A66B]">Children & Teens (0–17)</span>
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
                      className="w-10 h-10 border border-hairline text-lg font-mono text-[#F7F4ED] hover:border-[#C6A66B] transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-serif text-[#F7F4ED] font-mono w-8 text-center">
                      {formData.children}
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, children: formData.children + 1 })}
                      className="w-10 h-10 border border-hairline text-lg font-mono text-[#F7F4ED] hover:border-[#C6A66B] transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[11px] text-[#736E65]">We tailor family villas, child naturalist mentors, and private educators.</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: BUDGET */}
          {currentStep === 5 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">Indicative Journey Budget</h2>
                <p className="text-xs text-[#B8B1A5]">Guides tier selection for private aviation, sole-occupancy buyouts, and security.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {budgetTiers.map((tier) => (
                  <button
                    key={tier.range}
                    type="button"
                    onClick={() => setFormData({ ...formData, budgetRange: tier.range })}
                    className={`p-4 border text-left transition-colors flex items-start justify-between gap-3 ${
                      formData.budgetRange === tier.range
                        ? 'border-[#C6A66B] bg-[#233A32]/40 text-[#F7F4ED]'
                        : 'border-hairline bg-[#111310] text-[#B8B1A5] hover:border-[#736E65]'
                    }`}
                  >
                    <div className="space-y-1">
                      <p className="text-base font-serif text-[#F7F4ED] font-mono">{tier.range}</p>
                      <p className="text-xs text-[#736E65]">{tier.desc}</p>
                    </div>
                    {formData.budgetRange === tier.range && (
                      <Check className="w-4 h-4 text-[#C6A66B] shrink-0 mt-1" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: ESTATES & INTERESTS */}
          {currentStep === 6 && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">Estates & Curiosities</h2>
                <p className="text-xs text-[#B8B1A5]">Select all categories that appeal to your travelers.</p>
              </div>

              {/* Accommodations */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#C6A66B]">Preferred Residences</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {accommodationOptions.map((acc) => {
                    const selected = formData.accommodationType.includes(acc);
                    return (
                      <button
                        key={acc}
                        type="button"
                        onClick={() => toggleAccommodation(acc)}
                        className={`p-3 border text-left text-xs transition-colors flex items-center justify-between ${
                          selected
                            ? 'border-[#C6A66B] bg-[#233A32]/40 text-[#F7F4ED]'
                            : 'border-hairline bg-[#111310] text-[#B8B1A5]'
                        }`}
                      >
                        <span>{acc}</span>
                        {selected && <Check className="w-3.5 h-3.5 text-[#C6A66B]" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Special Interests */}
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#C6A66B]">Special Inclusions & Curiosities</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {interestOptions.map((int) => {
                    const selected = formData.specialInterests.includes(int);
                    return (
                      <button
                        key={int}
                        type="button"
                        onClick={() => toggleInterest(int)}
                        className={`p-3 border text-left text-xs transition-colors flex items-center justify-between ${
                          selected
                            ? 'border-[#C6A66B] bg-[#233A32]/40 text-[#F7F4ED]'
                            : 'border-hairline bg-[#111310] text-[#B8B1A5]'
                        }`}
                      >
                        <span>{int}</span>
                        {selected && <Check className="w-3.5 h-3.5 text-[#C6A66B]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: CONTACT DETAILS */}
          {currentStep === 7 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">Where should we send your private proposal?</h2>
                <p className="text-xs text-[#B8B1A5]">Your contact details are held in strict discretion under our private client protocol.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Full Legal Name *</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Lord / Lady Eleanor Vance"
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Private Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Telephone / Mobile *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-[#C6A66B]">Country of Residence</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-wider text-[#C6A66B]">
                  Special Requests, Dietary Nuances, or Milestones (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="e.g. 20th wedding anniversary surprise, preference for high-elevation suites, private aviation tail number..."
                  className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] p-3 text-xs text-[#F7F4ED] outline-none"
                />
              </div>
            </div>
          )}

          {/* STEP 8: REVIEW & CONFIRM */}
          {currentStep === 8 && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="space-y-1">
                <h2 className="text-2xl font-serif text-[#F7F4ED]">Review Your Voyage Dossier</h2>
                <p className="text-xs text-[#B8B1A5]">Review your selections before transmitting to our Senior Curators.</p>
              </div>

              <div className="bg-[#111310] border border-hairline p-6 space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-hairline">
                  <div>
                    <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Target Destination</span>
                    <span className="text-sm font-serif text-[#F7F4ED] font-semibold">
                      {formData.destinationName || 'Curator Choice'}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Travel Style</span>
                    <span className="text-sm font-serif text-[#F7F4ED]">{formData.travelStyle}</span>
                  </div>
                  <div>
                    <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Duration & Timing</span>
                    <span className="text-sm font-serif text-[#F7F4ED]">
                      {formData.durationNights} Nights ({formData.flexibleDates ? 'Flexible around ' : 'Starting '}{formData.startDate})
                    </span>
                  </div>
                  <div>
                    <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Party Size</span>
                    <span className="text-sm font-serif text-[#F7F4ED]">
                      {formData.adults} Adults {formData.children > 0 ? `, ${formData.children} Children` : ''}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Target Budget</span>
                    <span className="text-sm font-mono text-[#C6A66B]">{formData.budgetRange}</span>
                  </div>
                  <div>
                    <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Client Contact</span>
                    <span className="text-sm text-[#F7F4ED]">{formData.fullName} ({formData.email})</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Selected Inclusions & Interests</span>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.specialInterests.map((int, i) => (
                      <span key={i} className="text-[#F7F4ED] bg-[#161814] px-2.5 py-1 border border-hairline text-[11px]">
                        {int}
                      </span>
                    ))}
                  </div>
                </div>

                {formData.specialRequests && (
                  <div className="pt-2">
                    <span className="text-[#736E65] uppercase tracking-wider text-[10px] block">Bespoke Notes</span>
                    <p className="text-xs text-[#B8B1A5] italic">“{formData.specialRequests}”</p>
                  </div>
                )}
              </div>

              {/* Demo Mode Notice */}
              <div className="p-4 bg-[#233A32]/40 border border-gold-hairline text-xs space-y-1 text-[#F7F4ED]">
                <div className="flex items-center gap-2 text-[#C6A66B] font-semibold uppercase tracking-wider text-[10px]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Private Atelier Demonstration Mode</span>
                </div>
                <p className="text-[#B8B1A5] text-[11px]">
                  Submitting this journey will record your comprehensive itinerary in your active browser travel dossier. You can inspect or modify your plan on the <button type="button" onClick={() => navigate('inquiry-review')} className="text-[#C6A66B] underline">Booking Inquiry & Review</button> page at any time.
                </p>
              </div>
            </div>
          )}

          {/* Nav Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-hairline">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-5 py-2.5 border border-hairline text-xs uppercase tracking-widest text-[#B8B1A5] hover:text-[#F7F4ED] flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
            ) : <div />}

            {currentStep < 8 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold flex items-center gap-2 transition-colors"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="px-8 py-3 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-[0.2em] font-semibold flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                <span>{submitting ? 'Transmitting Proposal...' : 'Transmit Bespoke Request'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* CONFIRMATION STATE */
        <div className="bg-[#161814] border border-hairline p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 bg-[#233A32] text-[#C6A66B] border border-gold-hairline flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Inquiry Registered
            </span>
            <h2 className="text-3xl font-serif text-[#F7F4ED]">
              Thank You, {formData.fullName}.
            </h2>
            <p className="text-sm text-[#B8B1A5] max-w-lg mx-auto leading-relaxed">
              Your bespoke brief for <span className="text-[#F7F4ED] font-semibold">{formData.destinationName || 'your custom escape'}</span> has been recorded in your active itinerary dossier.
            </p>
          </div>

          <div className="bg-[#111310] p-6 max-w-md mx-auto border border-hairline text-left text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-[#736E65]">Target Period:</span>
              <span className="text-[#F7F4ED]">{formData.durationNights} Nights from {formData.startDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#736E65]">Party Size:</span>
              <span className="text-[#F7F4ED]">{formData.adults} Adults {formData.children ? `, ${formData.children} Children` : ''}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#736E65]">Contact Channel:</span>
              <span className="text-[#F7F4ED]">{formData.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#736E65]">Curator Allocation:</span>
              <span className="text-[#C6A66B]">Senior Curator assigned within 4 hours</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('inquiry-review')}
              className="px-6 py-3 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold transition-colors"
            >
              Review Full Booking Dossier
            </button>
            <button
              onClick={() => navigate('home')}
              className="px-6 py-3 border border-hairline text-[#F7F4ED] text-xs uppercase tracking-widest hover:border-[#C6A66B] transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
