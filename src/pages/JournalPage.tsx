import React, { useState, useMemo } from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { useNavigation } from '../context/NavigationContext';
import { Search, BookOpen, Clock, ArrowRight } from 'lucide-react';

export const JournalPage: React.FC = () => {
  const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Cultural Inquiries',
    'Curated Stays',
    'Design & Solitude',
    'Destination Guide',
    'Culinary Dispatch'
  ];

  const filteredArticles = useMemo(() => {
    return JOURNAL_ARTICLES.filter((article) => {
      const matchSearch =
        !searchQuery ||
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCat = selectedCategory === 'All' || article.category === selectedCategory;

      return matchSearch && matchCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-32 pb-24 px-6 sm:px-8 max-w-7xl mx-auto space-y-12">
      {/* Editorial Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A66B]">
          The Aurelle Gazette
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#F7F4ED] tracking-tight">
          Travel Journal & Dispatches
        </h1>
        <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
          Reflections on silence, architecture, living traditions, and the forgotten art of unhurried exploration. Written by resident curators, historians, and field naturalists.
        </p>
      </div>

      {/* Filter and Search */}
      <div className="bg-[#161814] border border-hairline p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 w-full sm:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#C6A66B] text-[#111310] font-semibold'
                    : 'text-[#B8B1A5] hover:text-[#F7F4ED] bg-[#111310]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#736E65]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dispatches..."
              className="w-full bg-[#111310] border border-hairline focus:border-[#C6A66B] pl-10 pr-4 py-2 text-xs text-[#F7F4ED] placeholder-[#736E65] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
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

                  <p className="text-xs text-[#B8B1A5] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-hairline flex items-center justify-between text-xs">
                  <span className="text-[#736E65]">{article.author.name}</span>
                  <span className="text-[#C6A66B] uppercase tracking-wider font-medium group-hover:underline">
                    Read Story →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#161814] border border-hairline space-y-3">
          <BookOpen className="w-8 h-8 text-[#C6A66B] mx-auto stroke-[1.5]" />
          <h3 className="text-xl font-serif text-[#F7F4ED]">No Articles Found</h3>
          <p className="text-xs text-[#B8B1A5]">Try clearing your search query or selecting a different category.</p>
        </div>
      )}
    </div>
  );
};
