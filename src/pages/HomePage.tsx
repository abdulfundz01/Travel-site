import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { DESTINATIONS } from '../data/destinations';
import { EXPERIENCES } from '../data/experiences';
import { JOURNAL_ARTICLES } from '../data/journal';
import { TravelDiscoveryBar } from '../components/TravelDiscoveryBar';
import { DestinationCard } from '../components/DestinationCard';
import { ExperienceCard } from '../components/ExperienceCard';
import { ArrowRight, Compass, Shield, Sparkles, Clock, Globe } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { navigate } = useNavigation();

  // Pick top 4 featured destinations
  const featuredDestinations = DESTINATIONS.slice(0, 4);
  // Pick top 3 signature experiences
  const featuredExperiences = EXPERIENCES.slice(0, 3);
  // Pick latest 3 journal articles
  const latestArticles = JOURNAL_ARTICLES.slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[95vh] flex flex-col justify-end pb-12 pt-32 px-6 sm:px-8 overflow-hidden">
        {/* Full-bleed background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_aurelle_maldives_1792156023546.jpg"
            alt="Ultra-luxury overwater villa in the Maldives at twilight by Aurelle Travel"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-100 animate-in fade-in duration-1000"
          />
          {/* Measured scrim overlay for 4.5:1 WCAG AA legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111310] via-[#111310]/60 to-[#111310]/40" />
          <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#111310]/30 to-[#111310]/80" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full text-center space-y-6 pt-12 sm:pt-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C6A66B] font-medium drop-shadow-sm">
            <span>THE ART OF EXCEPTIONAL TRAVEL</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#F7F4ED] tracking-tight leading-[1.08] max-w-4xl mx-auto drop-shadow-md text-balance">
            Go Beyond the Extraordinary.
          </h1>

          <p className="text-base sm:text-lg text-[#F7F4ED]/90 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Discover remarkable places, extraordinary stays, and thoughtfully curated journeys designed entirely around you.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('destinations')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Explore Destinations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => navigate('planner')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#161814]/80 backdrop-blur-sm border border-hairline hover:border-[#C6A66B] text-[#F7F4ED] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Design My Journey</span>
            </button>
          </div>
        </div>

        {/* Compact Travel Discovery Bar */}
        <div className="relative z-10 pt-12 sm:pt-16 max-w-5xl mx-auto w-full">
          <TravelDiscoveryBar />
        </div>
      </section>

      {/* 2. DISTINCTIVE BRAND INTRODUCTION & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              The Aurelle Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED] leading-tight">
              We create journeys for those who believe the way you travel should be as remarkable as where you arrive.
            </h2>
            <div className="w-16 h-[1px] bg-[#C6A66B]" />
          </div>

          <div className="lg:col-span-7 space-y-6 text-[#B8B1A5] text-sm sm:text-base leading-relaxed">
            <p>
              In an era of automated bookings and standardized luxury, Aurelle Travel operates as an independent private atelier. We do not maintain off-the-shelf packages or generic resort affiliations. Every itinerary is conceived as a singular work of art, hand-tailored to the cadence and curiosities of our clients.
            </p>
            <p>
              From chartered seaplanes landing on deserted atolls in the Maldives, to dawn access to locked Zen sub-temples in Kyoto and private wildlife concessions in the Serengeti, our international curators open doors that remain permanently closed to ordinary tourism.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-hairline text-xs">
              <div className="space-y-1">
                <span className="font-serif text-2xl text-[#C6A66B] font-light">100%</span>
                <p className="uppercase tracking-wider text-[#F7F4ED] font-semibold">Custom Conceived</p>
                <p className="text-[#736E65]">Zero templates; every voyage is sculpted from a clean slate.</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl text-[#C6A66B] font-light">1-to-1</span>
                <p className="uppercase tracking-wider text-[#F7F4ED] font-semibold">Senior Curator</p>
                <p className="text-[#736E65]">A single dedicated specialist guides you before, during, and after.</p>
              </div>
              <div className="space-y-1">
                <span className="font-serif text-2xl text-[#C6A66B] font-light">24/7</span>
                <p className="uppercase tracking-wider text-[#F7F4ED] font-semibold">Concierge Support</p>
                <p className="text-[#736E65]">On-ground discretion and rapid assistance across time zones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SANCTUARIES (DESTINATIONS) */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Curated Geography
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED]">
              Featured Sanctuaries
            </h2>
          </div>
          <button
            onClick={() => navigate('destinations')}
            className="text-xs uppercase tracking-widest text-[#C6A66B] hover:text-[#D8B97E] transition-colors flex items-center gap-1.5 font-medium"
          >
            <span>Explore All 10 Sanctuaries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* 4. EDITORIAL FEATURE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-[#161814] border border-hairline overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px]">
            <img
              src="/src/assets/images/dest_amalfi_cliffside_1792156023922.jpg"
              alt="The Amalfi Coast vertical cliffside villa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#161814]/90" />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
                Curator’s Choice · Southern Europe
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED] leading-tight">
                The Divina Costiera by Private Classic Riva
              </h2>
              <p className="text-sm text-[#B8B1A5] leading-relaxed">
                Beyond the tour buses and packed coastal roads lies Europe’s most theatrical coastline as it was intended to be seen: from the teak foredeck of a handcrafted Italian motor launch. Anchor in turquoise grottos, swim under the Faraglioni, and dock directly at cliffside trattorias where three generations of family chefs cook only for you.
              </p>
              <div className="text-xs text-[#736E65] space-y-1 pt-2">
                <p>· Private helicopter transfer from Naples Capodichino to Ravello</p>
                <p>· 1968 Riva Aquarama charter with veteran Amalfi skipper</p>
                <p>· Exclusive after-hours garden access at Villa Rufolo</p>
              </div>
            </div>

            <div className="pt-4 border-t border-hairline flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#736E65] block">7 Nights Curation</span>
                <span className="font-mono text-sm text-[#F7F4ED]">From $18,500 / couple</span>
              </div>
              <button
                onClick={() => navigate('destination-detail', { destinationId: 'amalfi-coast' })}
                className="px-5 py-2.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold transition-colors"
              >
                View Itinerary
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE EXPERIENCES COLLECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              Bespoke Expressions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED]">
              Signature Collections
            </h2>
          </div>
          <button
            onClick={() => navigate('experiences')}
            className="text-xs uppercase tracking-widest text-[#C6A66B] hover:text-[#D8B97E] transition-colors flex items-center gap-1.5 font-medium"
          >
            <span>Explore All Collections</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredExperiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </section>

      {/* 6. OUR FOUR-STAGE PLANNING METHODOLOGY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 pb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            How We Craft The Extraordinary
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED]">
            The Architecture of a Bespoke Journey
          </h2>
          <p className="text-sm text-[#B8B1A5]">
            Our methodology is discreet, collaborative, and exacting down to the finest nuance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-[#161814] border border-hairline space-y-4">
            <span className="text-2xl font-serif text-[#C6A66B]">01</span>
            <h3 className="text-lg font-serif text-[#F7F4ED]">Curator Dialogue</h3>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              We initiate with an in-depth conversation exploring your travel pace, aesthetic preferences, privacy requirements, and dream milestones.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-6 bg-[#161814] border border-hairline space-y-4">
            <span className="text-2xl font-serif text-[#C6A66B]">02</span>
            <h3 className="text-lg font-serif text-[#F7F4ED]">Custom Architecture</h3>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              Your Senior Curator crafts a bespoke proposal detailing private aviation, sole-occupancy estates, and unlisted access encounters.
            </p>
          </div>

          {/* Step 3 */}
          <div className="p-6 bg-[#161814] border border-hairline space-y-4">
            <span className="text-2xl font-serif text-[#C6A66B]">03</span>
            <h3 className="text-lg font-serif text-[#F7F4ED]">Flawless Execution</h3>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              From VIP tarmac customs clearance to private chef dietary briefings, every detail is verified and locked with precision.
            </p>
          </div>

          {/* Step 4 */}
          <div className="p-6 bg-[#161814] border border-hairline space-y-4">
            <span className="text-2xl font-serif text-[#C6A66B]">04</span>
            <h3 className="text-lg font-serif text-[#F7F4ED]">Guardian Concierge</h3>
            <p className="text-xs text-[#B8B1A5] leading-relaxed">
              Your personal curator remains on direct call 24 hours a day, orchestrating spontaneous adjustments with effortless discretion.
            </p>
          </div>
        </div>

        <div className="text-center pt-10">
          <button
            onClick={() => navigate('planner')}
            className="px-8 py-3.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold transition-colors"
          >
            Begin Your Private Consultation
          </button>
        </div>
      </section>

      {/* 7. VERIFIED CLIENT PERSPECTIVES */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            Client Reflections
          </span>
          <h2 className="text-3xl font-serif text-[#F7F4ED]">
            Journeys that stay with you.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-[#161814] border border-hairline flex flex-col justify-between space-y-6">
            <p className="text-sm font-serif italic text-[#F7F4ED] leading-relaxed">
              “Our helicopter arrival directly onto the private lawn of Singita Sasakwa at dawn was something out of a dream. Having a dedicated naturalist who knew animal behavior so intimately changed how our children saw the natural world.”
            </p>
            <div className="pt-4 border-t border-hairline text-xs">
              <p className="font-semibold text-[#F7F4ED]">Marcus & Vivienne Sterling</p>
              <p className="text-[#736E65]">London, UK · Serengeti & Ngorongoro Family Safari, July 2026</p>
            </div>
          </div>

          <div className="p-8 bg-[#161814] border border-hairline flex flex-col justify-between space-y-6">
            <p className="text-sm font-serif italic text-[#F7F4ED] leading-relaxed">
              “The morning access to Daitoku-ji before any other visitor arrived was the quietest moment of our lives. Aurelle arranged an audience with a 15th-generation sword master that my husband will never forget.”
            </p>
            <div className="pt-4 border-t border-hairline text-xs">
              <p className="font-semibold text-[#F7F4ED]">Dr. Alistair & Mei-Ling Vance</p>
              <p className="text-[#736E65]">Zurich, Switzerland · Kyoto Autumn Curation, November 2026</p>
            </div>
          </div>

          <div className="p-8 bg-[#161814] border border-hairline flex flex-col justify-between space-y-6">
            <p className="text-sm font-serif italic text-[#F7F4ED] leading-relaxed">
              “Everything from the seaplane transfer to the surprise midnight dinner on the vanished sandbar was executed with extraordinary taste. Aurelle operates on a level of personal care that simply doesn’t exist elsewhere.”
            </p>
            <div className="pt-4 border-t border-hairline text-xs">
              <p className="font-semibold text-[#F7F4ED]">Jonathan & Clara Thorne</p>
              <p className="text-[#736E65]">New York, USA · Maldives Island Sanctuary, March 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRAVEL JOURNAL PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-hairline">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
              The Aurelle Journal
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F4ED]">
              Stories & Cultural Inquiries
            </h2>
          </div>
          <button
            onClick={() => navigate('journal')}
            className="text-xs uppercase tracking-widest text-[#C6A66B] hover:text-[#D8B97E] transition-colors flex items-center gap-1.5 font-medium"
          >
            <span>Read All Dispatches</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <article
              key={article.slug}
              onClick={() => navigate('article-detail', { articleSlug: article.slug })}
              className="group cursor-pointer bg-[#161814] border border-hairline hover:border-gold-hairline transition-all duration-300 flex flex-col h-full overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1D201A]">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161814] via-transparent to-black/20" />
                <div className="absolute top-4 left-4 text-[10px] uppercase tracking-widest text-[#F7F4ED]/90">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-[#B8B1A5] flex items-center gap-2">
                    <span>{article.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{article.readingTime}</span>
                  </div>
                  <h3 className="text-xl font-serif text-[#F7F4ED] group-hover:text-[#C6A66B] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-[#B8B1A5] line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <span className="text-xs uppercase tracking-wider text-[#C6A66B] font-medium group-hover:underline">
                  Read Dispatch →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 9. FINAL CALL TO CONVERSATION */}
      <section className="max-w-5xl mx-auto px-6 sm:px-8 text-center space-y-6 py-12 border-t border-hairline">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          Begin The Journey
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif text-[#F7F4ED] max-w-2xl mx-auto leading-tight">
          Where will the extraordinary take you?
        </h2>
        <p className="text-sm text-[#B8B1A5] max-w-lg mx-auto leading-relaxed">
          Every remarkable journey begins with a conversation. Connect with our senior curators to start sketching your bespoke escape.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate('planner')}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
          >
            Start Bespoke Journey Planner
          </button>
          <button
            onClick={() => navigate('contact')}
            className="w-full sm:w-auto px-8 py-3.5 border border-hairline hover:border-[#C6A66B] text-[#F7F4ED] text-xs uppercase tracking-[0.2em] font-medium transition-colors"
          >
            Speak with a Senior Curator
          </button>
        </div>
      </section>
    </div>
  );
};
