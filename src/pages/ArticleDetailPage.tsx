import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { JOURNAL_ARTICLES } from '../data/journal';
import { ChevronRight, ArrowRight, Share2, Check, Clock, User, Compass } from 'lucide-react';

interface ArticleDetailPageProps {
  articleSlug?: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ articleSlug }) => {
  const { route, navigate } = useNavigation();
  const slug = articleSlug || route.articleSlug || 'kyoto-secret-morning-gardens';
  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug) || JOURNAL_ARTICLES[0];

  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const relatedArticles = JOURNAL_ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <article className="pb-24">
      {/* Thin reading progress indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#C6A66B] z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Header */}
      <div className="pt-32 pb-12 px-6 sm:px-8 max-w-4xl mx-auto space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B8B1A5]">
          <button onClick={() => navigate('home')} className="hover:text-[#F7F4ED] transition-colors">
            Home
          </button>
          <ChevronRight className="w-3 h-3 text-[#736E65]" />
          <button onClick={() => navigate('journal')} className="hover:text-[#F7F4ED] transition-colors">
            Journal
          </button>
          <ChevronRight className="w-3 h-3 text-[#736E65]" />
          <span className="text-[#C6A66B]">{article.category}</span>
        </div>

        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
            {article.category}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#F7F4ED] tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-[#B8B1A5] font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Byline & Share Bar */}
        <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#233A32] text-[#C6A66B] flex items-center justify-center font-serif text-base border border-hairline">
              {article.author.name.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-[#F7F4ED]">{article.author.name}</p>
              <p className="text-[#736E65]">{article.author.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[#736E65]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readingTime}</span>
            </div>
            <span>·</span>
            <span>{article.publishedDate}</span>
            <span>·</span>
            <button
              onClick={handleShare}
              className="text-[#C6A66B] hover:text-[#D8B97E] flex items-center gap-1 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Story'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Featured Full Image */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 mb-12">
        <div className="relative aspect-[16/9] overflow-hidden bg-[#161814] border border-hairline">
          <img
            src={article.heroImage}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-6 sm:px-8 space-y-8 text-[#B8B1A5] text-base leading-relaxed">
        {article.content.map((block, idx) => {
          if (block.type === 'quote') {
            return (
              <blockquote
                key={idx}
                className="py-6 px-8 my-8 border-t border-b border-hairline text-center space-y-2"
              >
                <p className="text-xl sm:text-2xl font-serif italic text-[#F7F4ED] leading-relaxed">
                  “{block.text}”
                </p>
                {block.author && (
                  <cite className="block text-xs uppercase tracking-widest text-[#C6A66B] not-italic">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );
          }
          if (block.type === 'heading') {
            return (
              <h2
                key={idx}
                className="text-2xl sm:text-3xl font-serif text-[#F7F4ED] pt-6 tracking-wide"
              >
                {block.text}
              </h2>
            );
          }
          return (
            <p key={idx} className="leading-relaxed">
              {block.text}
            </p>
          );
        })}

        {/* Contextual Journey-Planning CTA */}
        <div className="pt-10 mt-12 border-t border-hairline">
          <div className="bg-[#161814] border border-gold-hairline p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C6A66B]">
                Curated Experience
              </span>
              <h3 className="text-2xl font-serif text-[#F7F4ED]">
                Inspired by this Dispatch?
              </h3>
              <p className="text-xs text-[#B8B1A5] max-w-md">
                Our curators design personalized private itineraries incorporating the quiet moments, private estates, and cultural permissions described in this piece.
              </p>
            </div>
            <button
              onClick={() => {
                navigate('planner', {
                  plannerPrefill: {
                    destinationId: article.relatedDestinations[0] || '',
                  }
                });
              }}
              className="px-6 py-3 bg-[#C6A66B] hover:bg-[#D8B97E] text-[#111310] text-xs uppercase tracking-widest font-semibold transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Plan This Journey</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-12 space-y-6">
          <h3 className="text-xs uppercase tracking-widest text-[#C6A66B]">
            More from the Aurelle Gazette
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => navigate('article-detail', { articleSlug: rel.slug })}
                className="p-6 bg-[#161814] border border-hairline hover:border-gold-hairline cursor-pointer transition-colors space-y-2"
              >
                <span className="text-[10px] uppercase tracking-wider text-[#736E65]">{rel.category}</span>
                <h4 className="text-base font-serif text-[#F7F4ED] hover:text-[#C6A66B] transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-[#B8B1A5] line-clamp-2">{rel.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
