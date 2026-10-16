export interface Destination {
  id: string;
  name: string;
  tagline: string;
  region: 'Indian Ocean' | 'Europe' | 'Asia' | 'Africa' | 'Polar & Nordic';
  country: string;
  travelStyle: ('Private Escapes' | 'Wildlife & Safari' | 'Cultural Immersion' | 'Alpine & Winter' | 'Coastal & Marine')[];
  bestTimeToVisit: string;
  peakSeason: string;
  secretSeason: string;
  recommendedDuration: string;
  heroImage: string;
  galleryImages: string[];
  editorialLead: string;
  narrative: string;
  whyVisit: {
    title: string;
    description: string;
  }[];
  signatureExperiences: {
    title: string;
    description: string;
    duration: string;
  }[];
  curatedStays: {
    name: string;
    style: string;
    highlight: string;
    location: string;
  }[];
  suggestedItinerary: {
    dayRange: string;
    title: string;
    summary: string;
    highlights: string[];
  }[];
  practicalInfo: {
    gatewayAirport: string;
    privateAviationAccess: string;
    climateOverview: string;
    timeZone: string;
    currency: string;
    language: string;
    visaAdvisory: string;
  };
  indicativeStartingPrice: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  category: 'Private Islands' | 'Safaris' | 'Yachts & Marine' | 'Honeymoons' | 'Cultural' | 'Culinary' | 'Wellness' | 'Alpine';
  heroImage: string;
  duration: string;
  idealFor: string;
  bestSeason: string;
  tagline: string;
  leadParagraph: string;
  narrative: string;
  pillars: {
    title: string;
    description: string;
  }[];
  sampleItineraryOverview: {
    title: string;
    description: string;
  }[];
  destinationsCovered: string[];
  indicativeStartingPrice: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Destination Guide' | 'Curated Stays' | 'Cultural Inquiries' | 'Design & Solitude' | 'Culinary Dispatch';
  author: {
    name: string;
    role: string;
  };
  publishedDate: string;
  readingTime: string;
  heroImage: string;
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'image' | 'callout';
    text?: string;
    author?: string;
  }[];
  relatedDestinations: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Planning Process' | 'Pricing & Inclusions' | 'Flexibility & Changes' | 'Family & Groups' | 'Safety & Concierge';
}

export interface JourneyPlannerState {
  destinationId: string;
  destinationName: string;
  travelStyle: string;
  flexibleDates: boolean;
  startDate: string;
  endDate: string;
  durationNights: number;
  adults: number;
  children: number;
  budgetRange: string;
  accommodationType: string[];
  specialInterests: string[];
  fullName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests: string;
}
