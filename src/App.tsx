import React, { useEffect } from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieModal } from './components/CookieModal';

import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ExperiencesPage } from './pages/ExperiencesPage';
import { ExperienceDetailPage } from './pages/ExperienceDetailPage';
import { PlannerPage } from './pages/PlannerPage';
import { StoryPage } from './pages/StoryPage';
import { JournalPage } from './pages/JournalPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { InquiryReviewPage } from './pages/InquiryReviewPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const { route } = useNavigation();

  // Dynamic SEO title sync
  useEffect(() => {
    let title = 'Aurelle Travel | The World, Exceptionally Yours';
    if (route.page === 'destinations') title = 'Curated Sanctuaries & Destinations | Aurelle Travel';
    else if (route.page === 'destination-detail') title = `${route.destinationId?.toUpperCase() || 'Sanctuary'} | Aurelle Travel`;
    else if (route.page === 'experiences') title = 'Signature Travel Experiences | Aurelle Travel';
    else if (route.page === 'experience-detail') title = 'Curated Experience Dossier | Aurelle Travel';
    else if (route.page === 'planner') title = 'Bespoke Journey Planner | Aurelle Travel Atelier';
    else if (route.page === 'story') title = 'Our Philosophy & Atelier Story | Aurelle Travel';
    else if (route.page === 'journal') title = 'Travel Journal & Dispatches | The Aurelle Gazette';
    else if (route.page === 'article-detail') title = 'Editorial Dispatch | The Aurelle Gazette';
    else if (route.page === 'contact') title = 'Private Concierge & Contact | Aurelle Travel';
    else if (route.page === 'faq') title = 'Planning FAQ & Governance | Aurelle Travel';
    else if (route.page === 'inquiry-review') title = 'Voyage Dossier Review | Aurelle Travel';
    else if (route.page === 'privacy' || route.page === 'terms') title = 'Client Privacy & Terms | Aurelle Travel';

    document.title = title;
  }, [route]);

  const renderCurrentPage = () => {
    switch (route.page) {
      case 'home':
        return <HomePage />;
      case 'destinations':
        return <DestinationsPage />;
      case 'destination-detail':
        return <DestinationDetailPage destinationId={route.destinationId} />;
      case 'experiences':
        return <ExperiencesPage />;
      case 'experience-detail':
        return <ExperienceDetailPage experienceId={route.experienceId} />;
      case 'planner':
        return <PlannerPage />;
      case 'story':
        return <StoryPage />;
      case 'journal':
        return <JournalPage />;
      case 'article-detail':
        return <ArticleDetailPage articleSlug={route.articleSlug} />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FAQPage />;
      case 'inquiry-review':
        return <InquiryReviewPage />;
      case 'privacy':
        return <LegalPage initialTab="privacy" />;
      case 'terms':
        return <LegalPage initialTab="terms" />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#111310] text-[#F7F4ED] flex flex-col font-sans selection:bg-[#C6A66B]/30 selection:text-[#FFFFFF]">
      <Header />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
      <CookieModal />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
