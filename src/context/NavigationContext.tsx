import React, { createContext, useContext, useState, useEffect } from 'react';
import { JourneyPlannerState } from '../types';

export type PageRoute =
  | 'home'
  | 'destinations'
  | 'destination-detail'
  | 'experiences'
  | 'experience-detail'
  | 'planner'
  | 'story'
  | 'journal'
  | 'article-detail'
  | 'contact'
  | 'faq'
  | 'inquiry-review'
  | 'privacy'
  | 'terms';

export interface RouteState {
  page: PageRoute;
  destinationId?: string;
  experienceId?: string;
  articleSlug?: string;
  plannerPrefill?: Partial<JourneyPlannerState>;
}

interface NavigationContextType {
  route: RouteState;
  navigate: (page: PageRoute, params?: { destinationId?: string; experienceId?: string; articleSlug?: string; plannerPrefill?: Partial<JourneyPlannerState> }) => void;
  cookieModalOpen: boolean;
  setCookieModalOpen: (open: boolean) => void;
  cookiePreferences: {
    essential: boolean;
    analytics: boolean;
    personalization: boolean;
  };
  saveCookiePreferences: (prefs: { essential: boolean; analytics: boolean; personalization: boolean }) => void;
  activeInquiry: JourneyPlannerState | null;
  setActiveInquiry: (inquiry: JourneyPlannerState | null) => void;
  subscribeNewsletter: (email: string) => Promise<{ success: boolean; message: string }>;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Parse initial route from window.location.pathname or search params
  const parseCurrentPath = (): RouteState => {
    if (typeof window === 'undefined') return { page: 'home' };
    const path = window.location.pathname.replace(/^\/+/g, '');
    const parts = path.split('/');

    if (parts[0] === 'destinations' && parts[1]) {
      return { page: 'destination-detail', destinationId: parts[1] };
    }
    if (parts[0] === 'destinations') {
      return { page: 'destinations' };
    }
    if (parts[0] === 'experiences' && parts[1]) {
      return { page: 'experience-detail', experienceId: parts[1] };
    }
    if (parts[0] === 'experiences') {
      return { page: 'experiences' };
    }
    if (parts[0] === 'journal' && parts[1]) {
      return { page: 'article-detail', articleSlug: parts[1] };
    }
    if (parts[0] === 'journal') {
      return { page: 'journal' };
    }
    if (parts[0] === 'planner') {
      const searchParams = new URLSearchParams(window.location.search);
      const dest = searchParams.get('destination');
      return {
        page: 'planner',
        plannerPrefill: dest ? { destinationId: dest } : undefined
      };
    }
    if (parts[0] === 'story') return { page: 'story' };
    if (parts[0] === 'contact') return { page: 'contact' };
    if (parts[0] === 'faq') return { page: 'faq' };
    if (parts[0] === 'inquiry-review') return { page: 'inquiry-review' };
    if (parts[0] === 'privacy') return { page: 'privacy' };
    if (parts[0] === 'terms') return { page: 'terms' };

    return { page: 'home' };
  };

  const [route, setRoute] = useState<RouteState>(parseCurrentPath);
  const [cookieModalOpen, setCookieModalOpen] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    personalization: false,
  });
  const [activeInquiry, setActiveInquiry] = useState<JourneyPlannerState | null>(null);

  // Sync route on popstate
  useEffect(() => {
    const handlePopState = () => {
      setRoute(parseCurrentPath());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: PageRoute, params?: { destinationId?: string; experienceId?: string; articleSlug?: string; plannerPrefill?: Partial<JourneyPlannerState> }) => {
    let url = '/';
    if (page === 'home') url = '/';
    else if (page === 'destinations') url = '/destinations';
    else if (page === 'destination-detail' && params?.destinationId) url = `/destinations/${params.destinationId}`;
    else if (page === 'experiences') url = '/experiences';
    else if (page === 'experience-detail' && params?.experienceId) url = `/experiences/${params.experienceId}`;
    else if (page === 'journal') url = '/journal';
    else if (page === 'article-detail' && params?.articleSlug) url = `/journal/${params.articleSlug}`;
    else if (page === 'planner') {
      url = params?.plannerPrefill?.destinationId ? `/planner?destination=${params.plannerPrefill.destinationId}` : '/planner';
    }
    else if (page === 'story') url = '/story';
    else if (page === 'contact') url = '/contact';
    else if (page === 'faq') url = '/faq';
    else if (page === 'inquiry-review') url = '/inquiry-review';
    else if (page === 'privacy') url = '/privacy';
    else if (page === 'terms') url = '/terms';

    try {
      window.history.pushState({}, '', url);
    } catch {
      // Ignore if pushState fails in restricted sandbox
    }

    setRoute({
      page,
      destinationId: params?.destinationId,
      experienceId: params?.experienceId,
      articleSlug: params?.articleSlug,
      plannerPrefill: params?.plannerPrefill,
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const saveCookiePreferences = (prefs: { essential: boolean; analytics: boolean; personalization: boolean }) => {
    setCookiePreferences(prefs);
    setCookieModalOpen(false);
  };

  const subscribeNewsletter = async (email: string): Promise<{ success: boolean; message: string }> => {
    // Validate format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return { success: false, message: 'Please provide a valid private email address.' };
    }
    // Simulate luxury newsletter dispatch registration
    await new Promise((res) => setTimeout(res, 600));
    return {
      success: true,
      message: 'Thank you. You have been added to the private Aurelle Gazette distribution list.'
    };
  };

  return (
    <NavigationContext.Provider
      value={{
        route,
        navigate,
        cookieModalOpen,
        setCookieModalOpen,
        cookiePreferences,
        saveCookiePreferences,
        activeInquiry,
        setActiveInquiry,
        subscribeNewsletter,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
