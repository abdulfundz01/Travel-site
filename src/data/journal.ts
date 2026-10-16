import { JournalArticle } from '../types';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'kyoto-secret-morning-gardens',
    title: 'The Art of Kyoto’s Secret Morning Gardens',
    excerpt: 'Before temple gates open and the morning mist rises from Takagamine, Kyoto’s moss gardens offer an encounter with absolute silence.',
    category: 'Cultural Inquiries',
    author: {
      name: 'Kenji Morimoto',
      role: 'Curator of Cultural Heritage, Kyoto'
    },
    publishedDate: 'October 2026',
    readingTime: '5 min read',
    heroImage: '/src/assets/images/dest_kyoto_ryokan_1792156025024.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'At 5:30 in the morning, the northern hills of Takagamine exist in a suspension of sound. The temple gates of Daitoku-ji remain bolted to the street, yet behind the cedar doors, a resident monk draws bamboo rakes across crushed white granite with hypnotic precision. The sound is dry, oceanic, and deliberate—a quiet reminder that in classical Japanese aesthetics, space is not an absence, but a presence.'
      },
      {
        type: 'quote',
        text: 'In Kyoto, true luxury is not measured in gilded ornamentation, but in the rare privilege of uninterrupted silence.',
        author: 'Etsuko Tanaka, 14th-Generation Tea Master'
      },
      {
        type: 'heading',
        text: 'The Architecture of Living Moss'
      },
      {
        type: 'paragraph',
        text: 'Unlike Western topiary that seeks to impose geometry upon nature, Kyoto’s centuries-old moss gardens are cultivated to reveal nature’s innate rhythm. Over forty distinct varieties of moss carpet the roots of towering Japanese maples and ancient cryptomerias. Dew gathers on each microscopic frond, creating a luminous emerald glow as the first shafts of morning sunlight pierce the fog.'
      },
      {
        type: 'paragraph',
        text: 'For our travelers at Aurelle, private dawn access to these private temple precincts bypasses the daytime crowds entirely. Standing beside the abbot in the crisp dawn air, sipping freshly whisked ceremonial Uji matcha as temple bells resonate across the valley, one understands why Kyoto has guarded these sacred spaces for more than twelve hundred years.'
      }
    ],
    relatedDestinations: ['kyoto', 'bali']
  },
  {
    slug: 'amalfi-coast-riva-lifestyle',
    title: 'Sailing the Amalfi Archipelago by Classic Riva',
    excerpt: 'Why the only authentic way to witness the Divina Costiera is from the wooden deck of a vintage motor yacht at golden hour.',
    category: 'Curated Stays',
    author: {
      name: 'Elena Montanari',
      role: 'Maritime Historian & Amalfi Resident'
    },
    publishedDate: 'September 2026',
    readingTime: '6 min read',
    heroImage: '/src/assets/images/dest_amalfi_cliffside_1792156023922.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'The highway that ribbons along the Amalfi Coast is famous worldwide, but those who know the coast best rarely travel by road. Seen from the water, the precipitous verticality of the Lattari Mountains takes on an almost mythical drama. Lemon orchards cling to terraces cut by hand centuries ago, and pastel villas seem suspended between azure sea and azure sky.'
      },
      {
        type: 'quote',
        text: 'A vintage Riva cuts through the Tyrrhenian wake like a tailored Italian suit—effortless, magnetic, and completely timeless.',
        author: 'Captain Matteo Vianello'
      },
      {
        type: 'heading',
        text: 'The Secret Coves of Nerano'
      },
      {
        type: 'paragraph',
        text: 'Cruising west toward Punta Campanella, where Ulysses was said to have resisted the Sirens, our skippers steer away from the tourist flotillas into sheltered emerald grottos. Here, you dive directly into cool, clear waters before stepping ashore at a wooden dock where fishermen are hauling the morning catch of red prawns and sea bass.'
      },
      {
        type: 'paragraph',
        text: 'Lunch is an unhurried, three-hour ritual: spaghetti alla Nerano with delicate fried zucchini and provolone del Monaco, paired with chilled Greco di Tufo, while the yacht rocks gently at anchor in the sun.'
      }
    ],
    relatedDestinations: ['amalfi-coast']
  },
  {
    slug: 'polar-canopy-icelandic-design',
    title: 'Under the Polar Canopy: Minimalist Architecture in Iceland',
    excerpt: 'How contemporary architects in Iceland are designing glass and basalt structures that surrender completely to the Aurora Borealis.',
    category: 'Design & Solitude',
    author: {
      name: 'Freja Sigurðardóttir',
      role: 'Architectural Critic, Reykjavik'
    },
    publishedDate: 'August 2026',
    readingTime: '4 min read',
    heroImage: '/src/assets/images/dest_iceland_retreat_1792156045674.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'In the raw subarctic wilderness of southern Iceland, architecture cannot compete with the landscape. To build with arrogance here is to court aesthetic failure. Instead, Iceland’s most daring contemporary lodges practice an architecture of surrender.'
      },
      {
        type: 'heading',
        text: 'The Glass Pavilion at the Edge of the World'
      },
      {
        type: 'paragraph',
        text: 'Carved into ancient moss-covered basalt lava fields, these private retreats feature floor-to-ceiling triple-glazed thermal walls that dissolve the barrier between inside warmth and outside wilderness. From the comfort of a heated linen bed or steaming private geothermal pool, travelers watch the celestial green and violet ribbons of the Aurora Borealis ripple across the Arctic night.'
      },
      {
        type: 'quote',
        text: 'When nature is this powerful, the building’s only noble purpose is to become an invisible telescope.',
        author: 'Gunnar Thorhallsson, Lead Architect'
      },
      {
        type: 'paragraph',
        text: 'Powered entirely by clean geothermal springs and hydroelectric energy, this is sustainable luxury at its most poetic—an experience where extreme elements and exquisite comfort exist in harmonious balance.'
      }
    ],
    relatedDestinations: ['iceland', 'swiss-alps']
  },
  {
    slug: 'the-great-migration-beyond-the-vehicle',
    title: 'The Great Migration: Beyond the Safari Vehicle',
    excerpt: 'Walking safaris and dawn hot-air ballooning in the Serengeti provide an entirely new perspective on Africa’s greatest wildlife spectacle.',
    category: 'Destination Guide',
    author: {
      name: 'David Omondi',
      role: 'Principal Naturalist & Safari Guide'
    },
    publishedDate: 'July 2026',
    readingTime: '7 min read',
    heroImage: '/src/assets/images/dest_safari_serengeti_1792156025236.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'Most safari travelers experience the Serengeti through the frame of a vehicle window. While open-top 4x4s are essential for tracking big cats across vast distances, the true pulse of the African bush is felt through your boots on the soil.'
      },
      {
        type: 'heading',
        text: 'Reading the Ground with Maasai Trackers'
      },
      {
        type: 'paragraph',
        text: 'On a private walking safari in a secluded concession, the scale shifts from broad horizons to delicate micro-details. A bent stem of red-oat grass, the fresh scuff of an aardvark claw, the nervous flick of an impala’s tail—each sign tells a continuous, unfolding story of survival and territorial movement.'
      },
      {
        type: 'quote',
        text: 'When you walk in the savanna, you are no longer an observer looking at animals; you are part of the ecosystem.',
        author: 'Lekishon Ole Kishau, Veteran Walking Guide'
      },
      {
        type: 'paragraph',
        text: 'And when you rise before dawn into the basket of a silent hot-air balloon, watching two million wildebeest and zebra form flowing black rivers across the golden morning mist below, you witness an ancient rhythm that has pulsed uninterrupted since the dawn of time.'
      }
    ],
    relatedDestinations: ['tanzania', 'botswana']
  },
  {
    slug: 'sensory-language-of-marrakech-medina',
    title: 'The Sensory Language of Marrakech’s Ancient Medina',
    excerpt: 'Navigating hidden fondouks, cedarwood workshops, and the secret courtyards of the Ochre City with generational custodians.',
    category: 'Culinary Dispatch',
    author: {
      name: 'Yasmine Benali',
      role: 'Cultural Essayist, Marrakech'
    },
    publishedDate: 'June 2026',
    readingTime: '5 min read',
    heroImage: '/src/assets/images/dest_marrakech_riad_1792156044837.jpg',
    content: [
      {
        type: 'paragraph',
        text: 'To enter the Medina of Marrakech through Bab Agnaou is to cross a threshold into an ancient living rhythm. The ochre clay walls, baked by centuries of North African sun, radiate an earthy warmth that carries the unmistakable scents of orange blossom water, roasted cumin, and shaved Atlas cedarwood.'
      },
      {
        type: 'heading',
        text: 'The Paradox of the Riad'
      },
      {
        type: 'paragraph',
        text: 'The genius of Moroccan residential architecture lies in its inward-facing soul. From the narrow, bustling souk alleys, a riad appears as nothing more than a blank plaster wall and a heavy cedar door studded with iron nails. Step across that threshold, however, and the din of the medina evaporates into thin air.'
      },
      {
        type: 'quote',
        text: 'The riad is an architectural poem dedicated to the inner life—a private paradise garden enclosed against the dust of the world.',
        author: 'Amine El Fassi, Architectural Historian'
      },
      {
        type: 'paragraph',
        text: 'Inside, cool geometric zellij tiles encircle a turquoise central fountain floating with fresh jasmine blossoms. Swallows dip down from the open square of sky above to drink from the pool, while lanterns cast lace-like arabesques across lime-plastered walls.'
      }
    ],
    relatedDestinations: ['marrakech']
  }
];
