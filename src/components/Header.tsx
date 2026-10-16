import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const { route, navigate } = useNavigation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#111310]/90 backdrop-blur-md border-b border-hairline py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#111310]/80 via-[#111310]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand wordmark (single element) */}
          <button
            onClick={() => {
              navigate('home');
              setMobileMenuOpen(false);
            }}
            className="text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase text-[#F7F4ED] hover:text-[#C6A66B] transition-colors whitespace-nowrap shrink-0 text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B]"
          >
            AURELLE TRAVEL
          </button>

          {/* Zone 2: 5 single-line clean nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-wider uppercase font-medium text-[#B8B1A5]">
            <button
              onClick={() => navigate('destinations')}
              className={`hover:text-[#F7F4ED] transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                route.page === 'destinations' || route.page === 'destination-detail'
                  ? 'text-[#F7F4ED] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C6A66B]'
                  : ''
              }`}
            >
              Destinations
            </button>
            <button
              onClick={() => navigate('experiences')}
              className={`hover:text-[#F7F4ED] transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                route.page === 'experiences' || route.page === 'experience-detail'
                  ? 'text-[#F7F4ED] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C6A66B]'
                  : ''
              }`}
            >
              Experiences
            </button>
            <button
              onClick={() => navigate('journal')}
              className={`hover:text-[#F7F4ED] transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                route.page === 'journal' || route.page === 'article-detail'
                  ? 'text-[#F7F4ED] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C6A66B]'
                  : ''
              }`}
            >
              Journal
            </button>
            <button
              onClick={() => navigate('story')}
              className={`hover:text-[#F7F4ED] transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                route.page === 'story'
                  ? 'text-[#F7F4ED] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C6A66B]'
                  : ''
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => navigate('contact')}
              className={`hover:text-[#F7F4ED] transition-colors relative py-1 whitespace-nowrap shrink-0 ${
                route.page === 'contact'
                  ? 'text-[#F7F4ED] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C6A66B]'
                  : ''
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => navigate('planner')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-widest font-semibold text-[#111310] bg-[#C6A66B] hover:bg-[#D8B97E] transition-all duration-200 rounded-none shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C6A66B]"
            >
              <span>Plan Your Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2]" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F7F4ED] hover:text-[#C6A66B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111310]/98 flex flex-col justify-between pt-24 pb-12 px-8 lg:hidden animate-in fade-in duration-200">
          <nav className="flex flex-col gap-6 text-xl font-serif text-[#F7F4ED]">
            <button
              onClick={() => {
                navigate('home');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-hairline hover:text-[#C6A66B] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate('destinations');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-hairline hover:text-[#C6A66B] transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={() => {
                navigate('experiences');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-hairline hover:text-[#C6A66B] transition-colors"
            >
              Signature Experiences
            </button>
            <button
              onClick={() => {
                navigate('journal');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-hairline hover:text-[#C6A66B] transition-colors"
            >
              Travel Journal
            </button>
            <button
              onClick={() => {
                navigate('story');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-hairline hover:text-[#C6A66B] transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => {
                navigate('faq');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-hairline hover:text-[#C6A66B] transition-colors"
            >
              Planning FAQ
            </button>
            <button
              onClick={() => {
                navigate('contact');
                setMobileMenuOpen(false);
              }}
              className="text-left py-2 border-b border-hairline hover:text-[#C6A66B] transition-colors"
            >
              Private Concierge & Contact
            </button>
          </nav>

          <div className="pt-8">
            <button
              onClick={() => {
                navigate('planner');
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 text-sm uppercase tracking-widest font-semibold text-[#111310] bg-[#C6A66B] hover:bg-[#D8B97E] transition-colors"
            >
              <span>Design My Journey</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2]" />
            </button>
            <p className="text-xs text-[#B8B1A5] text-center mt-4 tracking-wider">
              Bespoke travel for discerning travelers.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
