import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ArrowUp, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate, setCookieModalOpen, subscribeNewsletter } = useNavigation();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ loading: boolean; message: string; success?: boolean }>({
    loading: false,
    message: '',
  });

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus({ loading: true, message: '' });
    const res = await subscribeNewsletter(newsletterEmail);
    setNewsletterStatus({
      loading: false,
      message: res.message,
      success: res.success,
    });
    if (res.success) {
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0F0C] border-t border-hairline text-[#B8B1A5] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Newsletter & Brand statement banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-hairline">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              The Aurelle Gazette
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F4ED] tracking-wide">
              Dispatches from the world’s most secluded coordinates.
            </h2>
            <p className="text-sm text-[#B8B1A5] max-w-lg leading-relaxed">
              Curated seasonal itineraries, architectural private hideaways, and quiet reflections on the art of travel, delivered quarterly.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your private email address"
                  className="flex-1 bg-[#161814] border border-hairline focus:border-[#C6A66B] px-4 py-3.5 text-sm text-[#F7F4ED] placeholder-[#736E65] outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={newsletterStatus.loading}
                  className="px-6 py-3.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] font-medium text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  <span>{newsletterStatus.loading ? 'Subscribing...' : 'Request Access'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {newsletterStatus.message && (
                <p
                  className={`text-xs ${
                    newsletterStatus.success ? 'text-[#C6A66B]' : 'text-rose-400'
                  }`}
                >
                  {newsletterStatus.message}
                </p>
              )}
              <p className="text-[11px] text-[#736E65] tracking-wide">
                We respect your discretion. No promotional clutter; unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Multi-column navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-16 border-b border-hairline">
          {/* Col 1: Brand & Tagline */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <span className="text-xl font-serif tracking-[0.2em] uppercase text-[#F7F4ED] block">
              AURELLE TRAVEL
            </span>
            <p className="text-xs uppercase tracking-widest text-[#C6A66B]">
              “The World, Exceptionally Yours.”
            </p>
            <p className="text-sm text-[#736E65] max-w-sm leading-relaxed">
              We create extraordinary journeys for those who believe the way you travel should be as remarkable as where you arrive.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-[#B8B1A5]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C6A66B]" />
                <a href="mailto:concierge@aurelletravel.com" className="hover:text-[#F7F4ED] transition-colors">
                  concierge@aurelletravel.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A66B]" />
                <a href="tel:+18004728735" className="hover:text-[#F7F4ED] transition-colors">
                  +1 (800) 472-8735 / +44 (20) 7946 0912
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A66B]" />
                <span>Geneva · London · New York · Singapore</span>
              </div>
            </div>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F7F4ED]">
              Destinations
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('destination-detail', { destinationId: 'maldives' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  The Maldives
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('destination-detail', { destinationId: 'amalfi-coast' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  The Amalfi Coast
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('destination-detail', { destinationId: 'kyoto' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  Kyoto & Inland Japan
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('destination-detail', { destinationId: 'swiss-alps' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  The Swiss Alps
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('destination-detail', { destinationId: 'tanzania' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  Serengeti & Tanzania
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('destinations')}
                  className="text-xs text-[#C6A66B] hover:underline pt-1 block"
                >
                  View All 10 Sanctuaries →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Experiences */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F7F4ED]">
              Experiences
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate('experience-detail', { experienceId: 'private-island-escapes' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  Private Island Escapes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('experience-detail', { experienceId: 'african-safari' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  Exclusive African Safaris
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('experience-detail', { experienceId: 'private-yacht-voyages' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  Private Yacht Voyages
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('experience-detail', { experienceId: 'romantic-honeymoons' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  Honeymoons & Romance
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('experience-detail', { experienceId: 'alpine-hideaways' })}
                  className="hover:text-[#F7F4ED] transition-colors"
                >
                  Alpine Hideaways
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Aurelle House */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#F7F4ED]">
              Aurelle House
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => navigate('story')} className="hover:text-[#F7F4ED] transition-colors">
                  Our Philosophy
                </button>
              </li>
              <li>
                <button onClick={() => navigate('journal')} className="hover:text-[#F7F4ED] transition-colors">
                  Travel Journal
                </button>
              </li>
              <li>
                <button onClick={() => navigate('planner')} className="hover:text-[#F7F4ED] transition-colors">
                  Bespoke Journey Planner
                </button>
              </li>
              <li>
                <button onClick={() => navigate('inquiry-review')} className="hover:text-[#F7F4ED] transition-colors">
                  Review Planned Inquiry
                </button>
              </li>
              <li>
                <button onClick={() => navigate('faq')} className="hover:text-[#F7F4ED] transition-colors">
                  Planning FAQ
                </button>
              </li>
              <li>
                <button onClick={() => navigate('contact')} className="hover:text-[#F7F4ED] transition-colors">
                  Private Concierge
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar with legal & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736E65]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>© {new Date().getFullYear()} AURELLE TRAVEL LTD. All rights reserved.</span>
            <button
              onClick={() => navigate('privacy')}
              className="hover:text-[#B8B1A5] transition-colors"
            >
              Privacy Notice
            </button>
            <button
              onClick={() => navigate('terms')}
              className="hover:text-[#B8B1A5] transition-colors"
            >
              Terms of Engagement
            </button>
            <button
              onClick={() => setCookieModalOpen(true)}
              className="hover:text-[#C6A66B] transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Cookie Preferences</span>
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-[#F7F4ED] transition-colors py-1 group"
          >
            <span className="uppercase tracking-widest text-[11px]">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
