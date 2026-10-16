import { Experience } from '../types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'private-island-escapes',
    title: 'Private Island Escapes',
    subtitle: 'Sole-occupancy atolls, overwater architectural sanctuaries, and untracked white sands.',
    category: 'Private Islands',
    heroImage: '/src/assets/images/hero_aurelle_maldives_1792156023546.jpg',
    duration: '7 to 14 Nights',
    idealFor: 'Couples, high-profile travelers requiring absolute privacy, multi-generational family buyouts',
    bestSeason: 'November through May',
    tagline: 'Your private territory surrounded by infinite sea.',
    leadParagraph: 'To command an entire island is to rewrite your relationship with time. Aurelle curates complete private atoll buyouts and single-key island sanctuaries across the Indian Ocean and South Pacific.',
    narrative: 'Forget shared resort common areas. Our private island escapes ensure that every footprint on the sand belongs to your party. With full resident staff—including master chefs, private sommeliers, dive masters, and discreet security teams—every hour unfolds around your preferences. Dine on a vanished sandbar under candlelit lanterns, snorkel untouched house reefs with a private marine biologist, or read uninterrupted in a shaded hammock over turquoise waters.',
    pillars: [
      {
        title: 'Guaranteed Solitude',
        description: 'Complete island buyouts with private maritime security zones and dedicated seaplane transfers.'
      },
      {
        title: 'Bespoke Culinary Regimes',
        description: 'Private chefs designing menus based entirely on daily sea catches, tropical produce, and your cellar desires.'
      },
      {
        title: 'Pristine Marine Sanctuaries',
        description: 'Direct step-in access to virgin coral gardens teeming with manta rays, sea turtles, and pelagic fish.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Day 1: Seaplane Arrival & Island Handover',
        description: 'VIP runway transfer directly to your chartered seaplane. Welcome champagne ceremony on the jetty with your private household team.'
      },
      {
        title: 'Days 2–4: Atoll Cruising & Reef Dives',
        description: 'Spend mornings diving with resident marine scientists. Afternoons at leisure with private beach massages and starlit lagoon dinners.'
      },
      {
        title: 'Days 5–7: Midnight Sandbank Feast & Farewell',
        description: 'A bespoke pop-up banquet on a deserted sandbank lit by fifty beeswax torches, followed by open-deck astronomy.'
      }
    ],
    destinationsCovered: ['maldives', 'seychelles'],
    indicativeStartingPrice: '$45,000 per booking'
  },
  {
    id: 'african-safari',
    title: 'Bespoke African Safaris',
    subtitle: 'Exclusive wildlife concessions, private mobile tented camps, and intimate predator encounters.',
    category: 'Safaris',
    heroImage: '/src/assets/images/dest_safari_serengeti_1792156025236.jpg',
    duration: '8 to 12 Nights',
    idealFor: 'Wildlife connoisseurs, nature photographers, adventurous couples, transformative journeys',
    bestSeason: 'June to October (Dry season migrations) & January to March (Calving season)',
    tagline: 'The epic theater of raw nature, experienced in total comfort.',
    leadParagraph: 'A true luxury safari is not about gold faucets; it is about accessing pristine wilderness concessions where no other vehicles disturb the silence of the bush.',
    narrative: 'Aurelle partners exclusively with private conservation concessions in Tanzania and Botswana that ban mass tourism. Accompanied by career naturalist guides and local indigenous trackers, you track big cat prides off-road, descend into prehistoric volcanic craters at first light, and sleep in canvas suites where the distant roar of lions serves as the ultimate nocturnal lullaby.',
    pillars: [
      {
        title: 'Off-Road Concessions',
        description: 'Follow wildlife movements without the restrictive road regulations of public national parks.'
      },
      {
        title: 'Top-Tier Guiding Standards',
        description: 'Private vehicles with veteran field guides who read animal body language and bird alarm calls.'
      },
      {
        title: 'Rewilding & Conservation Impact',
        description: 'Every safari directly finances community anti-poaching units and ecological habitat preservation.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Days 1–3: The Grumeti Plains & Night Tracking',
        description: 'Charter flight directly into private savanna airstrips. Afternoon game drives and nocturnal spotlight tracking of leopards.'
      },
      {
        title: 'Days 4–7: Migration River Crossings & Aerial Ballooning',
        description: 'Dawn balloon flight over the Serengeti savanna, followed by high-action tracking of river herds.'
      },
      {
        title: 'Days 8–10: Okavango Waterways by Handcrafted Mokoro',
        description: 'Silent glides through papyrus channels, doors-off helicopter flyovers, and starlit bush dinners.'
      }
    ],
    destinationsCovered: ['tanzania', 'botswana'],
    indicativeStartingPrice: '$28,000 per couple'
  },
  {
    id: 'private-yacht-voyages',
    title: 'Private Yacht Voyages',
    subtitle: 'Custom mega-yacht and classic motorboat charters across crystalline Mediterranean and Aegean waters.',
    category: 'Yachts & Marine',
    heroImage: '/src/assets/images/exp_private_yacht_1792156026118.jpg',
    duration: '7 to 10 Nights',
    idealFor: 'Maritime explorers, sun-seeking families, romantic celebrations, lovers of nautical design',
    bestSeason: 'May through October',
    tagline: 'Awaken in a different secluded cove each morning.',
    leadParagraph: 'There is no perspective quite like approaching historic coastlines from the sea. Aurelle secures privately chartered yachts with veteran captains and full crews.',
    narrative: 'Whether navigating the dramatic limestone sea cliffs of the Amalfi Coast and Capri aboard a vintage mahogany Riva, or anchoring in secret coves across the Mediterranean, your voyage is entirely bespoke. Your onboard chef crafts Mediterranean meals from fresh morning market catches, while your captain drops anchor in hidden turquoise grottos inaccessible by land.',
    pillars: [
      {
        title: 'Curated Private Fleets',
        description: 'From classic Riva speedboats to 50-meter explorer yachts with custom tenders and water toys.'
      },
      {
        title: 'Unscripted Maritime Freedom',
        description: 'Alter your cruising itinerary in real time depending on weather, wind, and sudden inspiration.'
      },
      {
        title: 'VIP Berth & Port Concierge',
        description: 'Guaranteed mooring in high-demand harbors such as Capri, Portofino, and Bonifacio.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Days 1–2: Boarding & Positano Sunset Cruise',
        description: 'Step aboard in Naples or Salerno. Toast sunset against the vertical pastel cliffs of Positano with cold Franciacorta.'
      },
      {
        title: 'Days 3–5: Capri, Faraglioni & Nerano Sea Caves',
        description: 'Anchor beneath the iconic Faraglioni. Tender into hidden sea caves, swim in emerald water, and dine at secluded cliffside trattorias.'
      },
      {
        title: 'Days 6–7: Ischia Thermal Waters & Farewell Bay',
        description: 'Cruise to the volcanic shores of Ischia. Soak in natural sea-thermal springs and celebrate with a final starlit deck dinner.'
      }
    ],
    destinationsCovered: ['amalfi-coast', 'maldives', 'seychelles'],
    indicativeStartingPrice: '$38,000 per charter week'
  },
  {
    id: 'romantic-honeymoons',
    title: 'Bespoke Honeymoons & Romantic Escapes',
    subtitle: 'Sublime intimacy, candlelit cliffside dinners, and unhurried luxury designed for two.',
    category: 'Honeymoons',
    heroImage: '/src/assets/images/dest_amalfi_cliffside_1792156023922.jpg',
    duration: '7 to 14 Nights',
    idealFor: 'Newlyweds, milestone anniversaries, private couple getaways',
    bestSeason: 'Year-round depending on chosen coordinates',
    tagline: 'An unforgettable beginning to a lifetime together.',
    leadParagraph: 'A honeymoon should be romantic, serene, and profoundly personal. We eliminate the stress of logistics so you can focus entirely on each other.',
    narrative: 'From secluded overwater hammocks suspended over turquoise atolls in the Maldives, to candlelit dinners on private Ravello terraces hovering above the Mediterranean, Aurelle crafts romantic journeys filled with thoughtful, poetic touches. Private sunset boat rides, couple spa journeys using indigenous botanicals, and handpicked suites with the best views in the property ensure memories that last a lifetime.',
    pillars: [
      {
        title: 'Discreet Romantic Touches',
        description: 'Unannounced champagne arrivals, private terrace flower arrangements, and private dining setups.'
      },
      {
        title: 'The Most Coveted Suites',
        description: 'Priority access to corner suites, top-tier private villas, and plunge pools with unobstructed panoramas.'
      },
      {
        title: 'Effortless Transitions',
        description: 'VIP airport fast-tracking and private transfers ensure zero waiting or administrative friction.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Days 1–3: The Private Cliffside Villa',
        description: 'Private arrival cocktail hour on your private terrace overlooking the sea, followed by a personalized couple massage.'
      },
      {
        title: 'Days 4–6: Sunset Cruises & Starlight Banquets',
        description: 'Private boat excursion to hidden coves, followed by a romantic private dinner prepared by an acclaimed chef.'
      },
      {
        title: 'Days 7–10: Solitary Island Sanctuary',
        description: 'Fly to a private island retreat for pure barefoot relaxation, ocean gazing, and starlight beach walks.'
      }
    ],
    destinationsCovered: ['maldives', 'amalfi-coast', 'bali', 'seychelles'],
    indicativeStartingPrice: '$22,000 per couple'
  },
  {
    id: 'cultural-immersion',
    title: 'Deep Cultural Immersions',
    subtitle: 'Behind-the-scenes access to ancient living arts, imperial heritage, and private master workshops.',
    category: 'Cultural',
    heroImage: '/src/assets/images/dest_kyoto_ryokan_1792156025024.jpg',
    duration: '7 to 12 Nights',
    idealFor: 'Curious intellectuals, art historians, collectors, cultural travelers',
    bestSeason: 'Spring and Autumn',
    tagline: 'Enter worlds that remain closed to the outside world.',
    leadParagraph: 'Superficial sightseeing leaves no lasting impression. Aurelle unlocks the living heritage of ancient civilizations through deep personal connections.',
    narrative: 'Walk locked Zen temple gardens in Kyoto alongside the head abbot at dawn before the public gates open. Enter private 15th-generation sword forging and ceramic workshops. In Marrakech, explore the private archives of historic palaces with architectural historians and learn ancient spice blending from royal dadas. Every encounter is intimate, respectful, and transformative.',
    pillars: [
      {
        title: 'Curated Access',
        description: 'Appointments with temple guardians, master artisans, and cultural archivists.'
      },
      {
        title: 'Contextual Scholars',
        description: 'Accompanied by university professors, architectural historians, and preservationists.'
      },
      {
        title: 'Living Traditions',
        description: 'Participate in authentic ceremonies that have remained unchanged for centuries.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Days 1–3: Dawn Temple Meditations & Zen Grounds',
        description: 'Enter secluded temple sub-precincts at first light. Private tea ceremony with tea grandmaster in a historic tearoom.'
      },
      {
        title: 'Days 4–6: Living Heritage Guilds & Private Collections',
        description: 'Private visits to generational artisans in their home ateliers, followed by an exclusive historic geiko banquet.'
      },
      {
        title: 'Days 7–9: Historic Imperial Gardens & Foraged Banquets',
        description: 'Stroll private imperial villas and savor kaiseki menus celebrating micro-seasons of wild mountain herbs.'
      }
    ],
    destinationsCovered: ['kyoto', 'marrakech', 'bali'],
    indicativeStartingPrice: '$19,500 per couple'
  },
  {
    id: 'alpine-hideaways',
    title: 'Alpine Hideaways & Winter Sanctuaries',
    subtitle: 'Glacier heli-skiing, architectural ski-in chalets, and fireside grand cru tastings.',
    category: 'Alpine',
    heroImage: '/src/assets/images/dest_swiss_alps_1792156044225.jpg',
    duration: '7 Nights',
    idealFor: 'Ski enthusiasts, winter lovers, mountain retreats, alpine gastronomy aficionados',
    bestSeason: 'December through April (Winter) & July through September (Alpine Summer)',
    tagline: 'Where peaks pierce the clouds and fires glow warm.',
    leadParagraph: 'High in the Swiss Alps, winter travel reaches its most refined heights. Private chalets with dedicated ski valets, private helicopters, and Michelin-starred alpine refuges.',
    narrative: 'Wake up to the sun illuminating the Matterhorn or the Engadin valley. Your private ski guide leads you down virgin backcountry powder fields accessed by helicopter. In the late afternoon, return to your private chalet where your private chef has prepared hot mulled wine, fireside canapés, and your private spa grotto awaits your tired muscles.',
    pillars: [
      {
        title: 'Private Heliskiing Direct',
        description: 'Fly directly from your chalet grounds to remote peaks for untouched 10-mile glacial descents.'
      },
      {
        title: 'Fully Staffed Mountain Estates',
        description: 'Resident chefs, dedicated ski valets, private chauffeurs, and wellness therapists.'
      },
      {
        title: 'Alpine Gastronomy',
        description: 'Private reservations at secluded mountain huts reachable only by helicopter or snowcat.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Days 1–2: Helicopter Arrival & Chalet Induction',
        description: 'Helicopter transfer over snow-dusted peaks directly to chalet helipad. Boot fitting in private ski room and fireside welcome dinner.'
      },
      {
        title: 'Days 3–5: Backcountry Glacier Descents',
        description: 'Three days of helicopter and mountain-guided descents across Monte Rosa and Zermatt powder bowls.'
      },
      {
        title: 'Days 6–7: Alpine Wellness & Farewell Banquet',
        description: 'Thermal hydrotherapy in private chalet grotto, followed by a truffle raclette and vintage Krug tasting.'
      }
    ],
    destinationsCovered: ['swiss-alps', 'iceland'],
    indicativeStartingPrice: '$32,000 per booking'
  },
  {
    id: 'wellness-sanctuaries',
    title: 'Holistic Wellness Sanctuaries',
    subtitle: 'Thermal mineral springs, traditional healing masters, and restorative architectural retreats.',
    category: 'Wellness',
    heroImage: '/src/assets/images/dest_bali_ubud_1792156045693.jpg',
    duration: '7 to 14 Nights',
    idealFor: 'Executive renewal, burn-out recovery, couples seeking rejuvenation, longevity programs',
    bestSeason: 'Year-round depending on climate',
    tagline: 'Reset your body and spirit in the world’s most peaceful coordinates.',
    leadParagraph: 'True wellness is not a generic massage menu. It is an intentional, immersive restoration guided by world-renowned holistic practitioners and tranquil natural environments.',
    narrative: 'Whether soaking in private mineral-rich geothermal lagoons in Iceland while the Northern Lights dance overhead, undergoing traditional Balinese Usada cleansing rituals along the mist-shrouded Ayung River, or practicing silent meditation in Kyoto bamboo groves, Aurelle designs restorative journeys that leave you profoundly renewed.',
    pillars: [
      {
        title: 'Integrative Diagnostics',
        description: 'Custom programs incorporating circadian rhythm balance, thermal hydrotherapy, and nutritional optimization.'
      },
      {
        title: 'Master Practitioners',
        description: 'Sessions with Ayurvedic physicians, Zen meditation monks, and indigenous herbalists.'
      },
      {
        title: 'Healing Architecture',
        description: 'Retreat spaces crafted from natural stone, untreated cedar, and living water designed for acoustic silence.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Days 1–3: Diagnostic Consultation & Thermal Immersion',
        description: 'Arrival consultation with master wellness director. Custom nutritional menu planning and private thermal bathing.'
      },
      {
        title: 'Days 4–7: Deep Restoration & Ancient Cleansing',
        description: 'Daily sunrise movement, guided sound healing, private sacred water purification, and herbal poultice bodywork.'
      },
      {
        title: 'Days 8–10: Integration & Longevity Protocol',
        description: 'Customized take-home wellness plan, gentle meditation walks, and farewell organic harvest banquet.'
      }
    ],
    destinationsCovered: ['bali', 'iceland', 'kyoto'],
    indicativeStartingPrice: '$21,000 per person'
  },
  {
    id: 'culinary-expeditions',
    title: 'Master Culinary Expeditions',
    subtitle: 'Truffle hunting, private multi-star Michelin collaborations, and historic vineyard cellar tastings.',
    category: 'Culinary',
    heroImage: '/src/assets/images/dest_marrakech_riad_1792156044837.jpg',
    duration: '6 to 9 Nights',
    idealFor: 'Gastronomes, wine collectors, epicurean couples, connoisseurs of rare flavors',
    bestSeason: 'Spring and Autumn harvest seasons',
    tagline: 'Taste the rarest terroirs on Earth.',
    leadParagraph: 'Food is the most direct gateway to the soul of a culture. Aurelle crafts culinary journeys that go beyond restaurant tables into private vineyards, home kitchens, and heirloom farms.',
    narrative: 'Walk century-old vertical vineyards along the Amalfi cliffs with the head winemaker before sitting down to an intimate dinner cooked on vine wood coals. In Kyoto, observe the morning fish auction with a master sushi chef before a private three-star kaiseki feast. In Marrakech, forage wild mountain herbs in the High Atlas with palace chefs. Every flavor tells a distinct story of terroir and human devotion.',
    pillars: [
      {
        title: 'Private Cellar Unlocks',
        description: 'Tastings of rare museum vintages directly from the personal cellars of legendary winemakers.'
      },
      {
        title: 'Celebrated Chef Interactions',
        description: 'Private counter seating and one-on-one culinary masterclasses with Michelin-lauded chefs.'
      },
      {
        title: 'Heirloom Terroir Foraging',
        description: 'Truffle hunts with trained lagotto dogs, wild sea urchin harvesting, and seasonal farm pickups.'
      }
    ],
    sampleItineraryOverview: [
      {
        title: 'Days 1–2: Master Winemaker Welcome',
        description: 'Arrival at private coastal vineyard estate. Sunset tasting of rare reserve vintages with estate owner.'
      },
      {
        title: 'Days 3–4: Foraging & Private Cooking Masterclass',
        description: 'Morning truffle and herb foraging excursion followed by an interactive kitchen session and multi-course feast.'
      },
      {
        title: 'Days 5–7: Grand Cru Gala & Artisanal Cellars',
        description: 'Exclusive after-hours tasting at historic cellars, culminating in a bespoke farewell gala dinner.'
      }
    ],
    destinationsCovered: ['amalfi-coast', 'kyoto', 'marrakech'],
    indicativeStartingPrice: '$23,500 per couple'
  }
];
