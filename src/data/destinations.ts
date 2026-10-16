import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'maldives',
    name: 'The Maldives',
    tagline: 'Infinite turquoise lagoons, barefoot sanctuaries, and secluded overwater estates.',
    region: 'Indian Ocean',
    country: 'Republic of Maldives',
    travelStyle: ['Private Escapes', 'Coastal & Marine'],
    bestTimeToVisit: 'November to April',
    peakSeason: 'December to March',
    secretSeason: 'May and October (vibrant manta migrations, quieter atolls)',
    recommendedDuration: '7 to 10 Nights',
    heroImage: '/src/assets/images/hero_aurelle_maldives_1792156023546.jpg',
    galleryImages: [
      '/src/assets/images/hero_aurelle_maldives_1792156023546.jpg',
      '/src/assets/images/dest_seychelles_cove_1792156046111.jpg'
    ],
    editorialLead: 'Scattered like broken pearls across the cobalt expanse of the equator, the Maldives represents the pinnacle of private maritime seclusion.',
    narrative: 'Beyond the familiar horizons of commercial travel lies an archipelago of private island residences where architecture vanishes into the Indian Ocean. At Aurelle Travel, our Maldivian portfolios bypass generic overwater clusters in favor of independently chartered atolls, private Dhoni sailing expeditions, and discreet coral sanctuaries where your personal butler and marine biologist curate days around lunar tides and starlit lagoon dinners.',
    whyVisit: [
      {
        title: 'Untouchable Solitude',
        description: 'Single-residence private islands offering total aerial and maritime discretion, with personal seaplane docks and private reefs.'
      },
      {
        title: 'Bioluminescent Marine Life',
        description: 'Night dives with manta ray aggregations under UV illumination accompanied by UNESCO Biosphere marine conservators.'
      },
      {
        title: 'Subaquatic Wine & Dining',
        description: 'Sommelier-guided tastings hosted six meters beneath the surface surrounded by pelagic reef ecosystems.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Midnight Sandbank Banquet',
        description: 'A completely vanished sandbank illuminated solely by fifty beeswax torches, with a five-course seafood menu prepared by your private chef.',
        duration: 'Evening'
      },
      {
        title: 'Chartered Dhoni Coral Exploration',
        description: 'Sail the remote Baa and Raa atolls on a handcrafted wooden vessel with custom dive gear and onboard wellness therapist.',
        duration: 'Full Day'
      },
      {
        title: 'Private Seaplane Flight to Hanifaru Bay',
        description: 'Aerial wildlife spotting with guaranteed permit access to swim alongside whale sharks and manta swarms.',
        duration: 'Half Day'
      }
    ],
    curatedStays: [
      {
        name: 'The Velaa Private Estate',
        style: 'Four-bedroom overwater residence with private pool and subterranean wine cellar',
        highlight: '1,350 sqm of private living space, dedicated butler and private chef',
        location: 'Noonu Atoll'
      },
      {
        name: 'Cheval Blanc Randheli Owner’s Villa',
        style: 'Dedicated private island accessible only by private jetty',
        highlight: 'Jean-Michel Gathy architecture, private 25m lap pool and private spa island',
        location: 'Randheli Island'
      },
      {
        name: 'Soneva Fushi Water Reserve',
        style: 'Expansive multi-tier villa with retractable stargazing master roof and ocean slide',
        highlight: 'Zero-waste barefoot luxury with 24-hour Mr. / Ms. Friday concierge service',
        location: 'Baa Atoll'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 3',
        title: 'Arrival & Oceanic Acclimatization',
        summary: 'Private VIP airport lounge escort directly to your chartered twin-otter seaplane. Sunset champagne cruise and decompression treatment on your private overwater pavilion.',
        highlights: ['VIP runway transfer', 'Lagoon sunset welcome', 'Ayurvedic arrival massage']
      },
      {
        dayRange: 'Days 4 – 6',
        title: 'Pelagic Expeditions & Sandbank Seclusion',
        summary: 'Embark on our marine biologist-guided expedition through Baa Atoll reefs. Afternoon drop-off on a deserted sandspit for an afternoon of solitary reading and champagne.',
        highlights: ['Private dive master', 'Deserted island picnic', 'Subterranean cellar tasting']
      },
      {
        dayRange: 'Days 7 – 9',
        title: 'Astronomy & Floating Culinary Evenings',
        summary: 'Private stargazing session with resident astronomer through research-grade telescopes, followed by open-ocean catamaran sailing under equatorial constellations.',
        highlights: ['Telescope celestial exploration', 'Catamaran sunset sail', 'Underwater dining experience']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Velana International Airport (MLE), Malé',
      privateAviationAccess: 'Direct VIP terminal with seaplane and private jet handling facilities',
      climateOverview: 'Equatorial tropical; balmy 28°C to 31°C year-round with gentle ocean breezes',
      timeZone: 'GMT+5 (Select resorts operate on bespoke Island Time GMT+6 for extra daylight)',
      currency: 'US Dollar (USD) accepted universally at private estates',
      language: 'English widely spoken at all partner properties; Dhivehi is the national language',
      visaAdvisory: 'Complimentary 30-day tourist visa granted upon arrival for all international passport holders'
    },
    indicativeStartingPrice: '$24,000 per couple'
  },
  {
    id: 'amalfi-coast',
    name: 'The Amalfi Coast',
    tagline: 'Terraced lemon orchards, sheer Tyrrhenian cliffs, and timeless Italian coastal grandezza.',
    region: 'Europe',
    country: 'Italy',
    travelStyle: ['Coastal & Marine', 'Cultural Immersion'],
    bestTimeToVisit: 'May to October',
    peakSeason: 'June to August',
    secretSeason: 'Late September and October (warm waters, quieter villages, grape harvests)',
    recommendedDuration: '6 to 8 Nights',
    heroImage: '/src/assets/images/dest_amalfi_cliffside_1792156023922.jpg',
    galleryImages: [
      '/src/assets/images/dest_amalfi_cliffside_1792156023922.jpg',
      '/src/assets/images/exp_private_yacht_1792156026118.jpg'
    ],
    editorialLead: 'Where pastel palazzos cling precariously to sheer limestone walls, the Amalfi Coast remains Europe’s most romantic theatrical stage.',
    narrative: 'Experiencing the Divina Costiera through Aurelle Travel is the antithesis of tour bus traffic. We secure private vintage Riva motor yachts to approach Positano and Capri from the sea, arrange after-hours access to clifftop Ravello estates, and unlock family-owned vineyard pergolas where Michelin-pedigreed chefs cook exclusively for your table surrounded by antique pergola terraces.',
    whyVisit: [
      {
        title: 'Maritime Aristocracy',
        description: 'Explore the secret coves of Nerano and the Faraglioni of Capri aboard a private mahogany speedboat with dedicated skipper.'
      },
      {
        title: 'Ravello Clifftop Serenity',
        description: 'Chamber music recitals in the private gardens of Villa Cimbrone hovering 350 meters above the sea.'
      },
      {
        title: 'Gastronomy of the Terraces',
        description: 'Private visits to centuries-old limoncello cellars and three-star Michelin coastal dining.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Sunset Capri Circumnavigation by Riva Aquarama',
        description: 'Cruise the dramatic sea caves of Capri with ice-cold Franciacorta, docking at Il Riccio for cliffside oysters.',
        duration: 'Full Day'
      },
      {
        title: 'Private Pergola Dining with Amalfi Winemakers',
        description: 'An intimate five-course dinner high in the hills of Furore amongst heirloom vines clinging to vertical rock faces.',
        duration: 'Evening'
      },
      {
        title: 'After-Hours Walk of Villa Rufolo',
        description: 'Exclusive twilight stroll through the historic gardens that inspired Richard Wagner, arranged exclusively for Aurelle guests.',
        duration: '2 Hours'
      }
    ],
    curatedStays: [
      {
        name: 'Le Sirenuse',
        style: 'Iconic family-run 18th-century Palazzo in Positano with red facade',
        highlight: 'Uninterrupted views of Positano bay, museum-quality antique furnishings',
        location: 'Positano'
      },
      {
        name: 'Belmond Hotel Caruso',
        style: 'Restored 11th-century palace perched on Ravello’s highest promontory',
        highlight: 'Architectural infinity pool appearing to float between sky and sea',
        location: 'Ravello'
      },
      {
        name: 'Villa TreVille',
        style: 'Franco Zeffirelli’s former private cliffside compound',
        highlight: 'Secluded private beach lift, private motor launch, maximum privacy',
        location: 'Positano Coast'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 2',
        title: 'Arrival in Positano & Maritime Welcome',
        summary: 'Private Mercedes Maybach transfer from Naples or private helicopter to Ravello helipad. Settle into your cliffside suite with private terrace cocktails at sunset.',
        highlights: ['Private helicopter transfer', 'Balcony sunset apertivo', 'Michelin-starred seaside dining']
      },
      {
        dayRange: 'Days 3 – 5',
        title: 'Capri, Li Galli & The Faraglioni',
        summary: 'Step aboard your private Riva for two full days navigating the Tyrrhenian waters. Swim in emerald sea grottos and enjoy private beach club lunches.',
        highlights: ['Chartered Riva speedboat', 'Nerano pasta masterclass', 'Faraglioni cave swim']
      },
      {
        dayRange: 'Days 6 – 8',
        title: 'Ravello Heights & Ancient Path of the Gods',
        summary: 'Ascend to the classical heights of Ravello. Private morning hike with local alpine botanist, followed by chamber music in historic cloistered courtyards.',
        highlights: ['Private estate garden access', 'Limoncello master artisan session', 'Farewell cliffside dinner']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Naples Capodichino Airport (NAP) or Rome Fiumicino (FCO)',
      privateAviationAccess: 'Private jet arrivals into Naples or Salerno Costa d’Amalfi Airport; helicopter transfers directly to Ravello or Capri',
      climateOverview: 'Mediterranean sun; 24°C to 30°C in summer, refreshing offshore breezes',
      timeZone: 'Central European Time (GMT+1 / GMT+2 summer)',
      currency: 'Euro (EUR)',
      language: 'Italian; fluent English spoken by all Aurelle hosts and concierge staff',
      visaAdvisory: 'Schengen Area regulations apply. US/UK/EU citizens travel visa-free for up to 90 days'
    },
    indicativeStartingPrice: '$18,500 per couple'
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    tagline: 'Quiet moss courtyards, Zen sanctuary temples, and centuries of preserved imperial ritual.',
    region: 'Asia',
    country: 'Japan',
    travelStyle: ['Cultural Immersion', 'Private Escapes'],
    bestTimeToVisit: 'March to May & October to November',
    peakSeason: 'April (Cherry Blossoms) & November (Autumn Foliage)',
    secretSeason: 'Late May and Early June (lush emerald moss, quiet temples, rain-washed stone)',
    recommendedDuration: '5 to 7 Nights',
    heroImage: '/src/assets/images/dest_kyoto_ryokan_1792156025024.jpg',
    galleryImages: [
      '/src/assets/images/dest_kyoto_ryokan_1792156025024.jpg',
      '/src/assets/images/dest_bali_ubud_1792156045693.jpg'
    ],
    editorialLead: 'Behind discreet cedar lattices and moss-covered flagstones, Kyoto preserves the ancient contemplative heartbeat of classical Japan.',
    narrative: 'Aurelle Travel opens the unseen Kyoto: early morning entry to Zen gardens before monk chanting concludes, private audience with master artisans in their generational workshops, and kaiseki dining in private teahouses where generations of geiko artistry are performed solely for our guests. You reside in impeccably restored historic machiyas or secluded hillside ryokans with cedar onsen baths.',
    whyVisit: [
      {
        title: 'Sole-Access Zen Grounds',
        description: 'Witness the morning raking of dry stone Zen gardens in absolute silence, accompanied by an English-speaking Zen abbot.'
      },
      {
        title: 'Living Heritage Artisans',
        description: 'Private visits to 15th-generation lacquerware masters, sword smiths, and tea ceremony grandmasters.'
      },
      {
        title: 'Master-Level Kaiseki',
        description: 'Multi-course gastronomic poetry celebrating micro-seasons with ingredients harvested that morning from Ohara farms.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Dawn Meditation at Daitoku-ji',
        description: 'Enter the locked sub-temples of Daitoku-ji at first light for a private Zen meditation session and matcha tea ceremony.',
        duration: '3 Hours'
      },
      {
        title: 'Private Gion Ochaya Evening',
        description: 'An exceptionally rare, invitation-only dinner in an exclusive 200-year-old teahouse featuring traditional arts and Shamisen music.',
        duration: 'Evening'
      },
      {
        title: 'Bamboo Forest & Arashiyama by Wooden Boat',
        description: 'Cruise the emerald Oi River on a private cedar boat before strolling a private bamboo estate closed to the general public.',
        duration: 'Half Day'
      }
    ],
    curatedStays: [
      {
        name: 'The Mitsui Kyoto',
        style: 'Heritage luxury built adjacent to Nijo Castle around an ancient Japanese garden',
        highlight: 'Subterranean natural thermal spring onsen, historic 300-year-old gate',
        location: 'Nakagyo Ward'
      },
      {
        name: 'Aman Kyoto',
        style: 'Secluded architectural pavilions hidden within 80 acres of forested foothills',
        highlight: 'Surrounded by wild moss boulders, cedar groves, and outdoor mineral baths',
        location: 'Takagamine'
      },
      {
        name: 'Tawaraya Ryokan',
        style: '300-year-old sanctuary regarded as Japan’s greatest living traditional inn',
        highlight: 'Private坪庭 (tsuboniwa) courtyards, seasonal flower arrangements, unparalleled omotenashi',
        location: 'Historic Central Kyoto'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 2',
        title: 'Arrival & The Silence of Takagamine',
        summary: 'Arrival into Kyoto via First-Class Shinkansen with dedicated luggage porterage. Evening arrival tea in your moss-view pavilion and traditional cypress bath.',
        highlights: ['First-class station meet & greet', 'Traditional onsen bath', 'Intimate welcome Kaiseki']
      },
      {
        dayRange: 'Days 3 – 4',
        title: 'Zen Temples & Generational Masters',
        summary: 'Private morning temple gates unlocked by resident priests. Afternoon spent in the Gion preservation district visiting private kimono and ceramic studios.',
        highlights: ['Private garden access', 'Tea grandmaster ceremony', 'Artisan workshop entry']
      },
      {
        dayRange: 'Days 5 – 7',
        title: 'Arashiyama Waterways & Sacred Ohara',
        summary: 'Chartered cedar boat glide along the foggy Oi river. Excursion to rural Ohara mountain valleys for heritage foraged cuisine.',
        highlights: ['River boat sunrise', 'Private bamboo grove walk', 'Exclusive Ochaya dinner']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Kansai International (KIX) or Itami (ITM), Osaka',
      privateAviationAccess: 'Kansai International handles private aviation with dedicated VIP customs channel',
      climateOverview: 'Four distinct seasons; spring cherry blossoms (15°C–20°C) and crisp golden autumns (12°C–18°C)',
      timeZone: 'Japan Standard Time (GMT+9)',
      currency: 'Japanese Yen (JPY)',
      language: 'Japanese; dedicated private bilingual concierge throughout journey',
      visaAdvisory: 'Visa exemptions apply for over 68 countries including US, UK, Canada, Australia, and EU'
    },
    indicativeStartingPrice: '$21,000 per couple'
  },
  {
    id: 'swiss-alps',
    name: 'The Swiss Alps',
    tagline: 'Glacial peaks, private ski-in chalets, and Michelin gastronomy among clouds.',
    region: 'Europe',
    country: 'Switzerland',
    travelStyle: ['Alpine & Winter', 'Private Escapes'],
    bestTimeToVisit: 'December to April (Winter) & July to September (Alpine Summer)',
    peakSeason: 'Christmas through February',
    secretSeason: 'Late March (sun-drenched spring skiing) & September (golden larch forests)',
    recommendedDuration: '7 Nights',
    heroImage: '/src/assets/images/dest_swiss_alps_1792156044225.jpg',
    galleryImages: [
      '/src/assets/images/dest_swiss_alps_1792156044225.jpg',
      '/src/assets/images/dest_iceland_retreat_1792156045674.jpg'
    ],
    editorialLead: 'Commanding the rooftop of Europe, the Swiss Alps balance raw glacial majesty with understated alpine sophistication.',
    narrative: 'In Zermatt, St. Moritz, and Verbier, Aurelle Travel provides a seamless alpine experience. Private ski valets deliver custom gear to your boot room; former World Cup competitors guide you across untouched backcountry powder; and private helicopters whisk you to remote glaciers for fondue and vintage Krug on the snow before anyone else has clipped into their bindings.',
    whyVisit: [
      {
        title: 'Heli-Skiing & Glacial Descents',
        description: 'Fly directly to the Monte Rosa massif or glacier peaks for 10-mile untouched virgin snow runs.'
      },
      {
        title: 'Full-Staffed Alpine Estates',
        description: 'Freestanding timber chalets with indoor spa grottos, cinema rooms, private ski instructors, and resident chefs.'
      },
      {
        title: 'Sublime Alpine Dining',
        description: 'Private mountain huts accessible only by snowcat or helicopter serving truffled raclette and grand cru vintages.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Matterhorn Sunrise Glacier Helicopter Tour',
        description: 'Private Airbus H130 flight hovering meters from the iconic Matterhorn north face, landing on a remote glacier for morning espresso.',
        duration: 'Half Day'
      },
      {
        title: 'Private Night Slopes & Torchlight Descent',
        description: 'Exclusive resort slope illuminated privately for your party, followed by a warm fireside mountain refuge supper.',
        duration: 'Evening'
      },
      {
        title: 'Glacier Express Excellence Class Charter',
        description: 'Panoramic rail journeys through the Swiss cantons with private sommelier service and five-course seasonal lunch.',
        duration: 'Full Day'
      }
    ],
    curatedStays: [
      {
        name: 'Chalet Zermatt Peak',
        style: 'Six-star architectural chalet carved directly into the rock face with Matterhorn vistas',
        highlight: 'Indoor/outdoor Jacuzzi, full private spa team, private chauffeured electric taxi',
        location: 'Zermatt'
      },
      {
        name: 'The Chedi Andermatt',
        style: 'Alpine chic infused with Asian minimalism and an extraordinary 35-meter indoor pool',
        highlight: 'Famous cheese humidor tower, two-star Michelin Japanese restaurant',
        location: 'Andermatt'
      },
      {
        name: 'Badrutt’s Palace Hotel',
        style: 'Legendary grand alpine palace overlooking Lake St. Moritz since 1896',
        highlight: 'Rolls-Royce fleet, historic wine cellar with over 30,000 bottles',
        location: 'St. Moritz'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 2',
        title: 'Arrival in Zurich & Mountain Helitransfer',
        summary: 'VIP greeting at Zurich or Geneva private air terminal. Scenic helicopter flight directly onto the chalet helipad with fireplace welcome.',
        highlights: ['Private heli-transfer', 'Ski fitting in chalet', 'Private chef multi-course welcome']
      },
      {
        dayRange: 'Days 3 – 5',
        title: 'Glacier Descents & Backcountry Guiding',
        summary: 'Three days of pristine powder guided by UIAGM mountain guides. Private lunch stops at secluded mountain huts with mountain vistas.',
        highlights: ['Private guide', 'Glacier run descents', 'Alpine spa recovery']
      },
      {
        dayRange: 'Days 6 – 7',
        title: 'Matterhorn Panorama & Stargazing',
        summary: 'Sunrise aerial flight around mountain peaks, afternoon thermal baths, and a celebratory farewell alpine dinner.',
        highlights: ['Aerial mountain flyover', 'Thermal wellness therapy', 'Fireside digestifs']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Zurich Airport (ZRH) or Geneva Airport (GVA)',
      privateAviationAccess: 'Dedicated private jet airports at Samedan / St. Moritz (SMV) and Sion (SIR)',
      climateOverview: 'Alpine winter (-5°C to 4°C with pristine snowpack); refreshing alpine summer (18°C to 24°C)',
      timeZone: 'Central European Time (GMT+1 / GMT+2 summer)',
      currency: 'Swiss Franc (CHF)',
      language: 'German, French, Italian, Romansh; English universally spoken in luxury sectors',
      visaAdvisory: 'Schengen country; visa-free access for citizens of US, Canada, UK, and European Union'
    },
    indicativeStartingPrice: '$28,000 per couple'
  },
  {
    id: 'tanzania',
    name: 'Tanzania & Serengeti',
    tagline: 'Vast golden savannas, the thundering Great Migration, and untamed luxury under canvas.',
    region: 'Africa',
    country: 'United Republic of Tanzania',
    travelStyle: ['Wildlife & Safari', 'Private Escapes'],
    bestTimeToVisit: 'June to October (Dry Season) & January to March (Calving Season)',
    peakSeason: 'July to September (River Crossings)',
    secretSeason: 'January to March (Southern Serengeti predator activity and hundreds of thousands of new calves)',
    recommendedDuration: '8 to 11 Nights',
    heroImage: '/src/assets/images/dest_safari_serengeti_1792156025236.jpg',
    galleryImages: [
      '/src/assets/images/dest_safari_serengeti_1792156025236.jpg',
      '/src/assets/images/hero_aurelle_maldives_1792156023546.jpg'
    ],
    editorialLead: 'Nowhere else on Earth does the natural world perform on such an epic, primordial canvas as the Serengeti and Ngorongoro Crater.',
    narrative: 'Aurelle safaris are custom-crafted around wildlife movement rather than fixed tourist circuits. Traveling in customized open-sided safari Land Cruisers with top-tier naturalist guides, our guests access private wildlife concessions closed to normal park traffic. You stay in intimate mobile canvas camps that track the migration, or architectural cliffside lodges perched high above the crater rim.',
    whyVisit: [
      {
        title: 'Private Concession Access',
        description: 'Night game drives, off-road tracking, and walking safaris impossible within standard national park borders.'
      },
      {
        title: 'Aerial Savanna Ballooning',
        description: 'Float over migrating herds at sunrise, landing on the open plains for a white-glove champagne breakfast.'
      },
      {
        title: 'Elite Naturalist Guidance',
        description: 'Accompanied by career wildlife biologists and indigenous Maasai trackers with decades of field knowledge.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Dawn Serengeti Hot Air Balloon Safari',
        description: 'Silent flight over the golden savanna tracking lion prides and herds, followed by open-savanna breakfast under an acacia canopy.',
        duration: 'Morning'
      },
      {
        title: 'Ngorongoro Crater Floor Sole Entry',
        description: 'Early morning permit securing first descent down the 600-meter crater walls before other vehicles arrive.',
        duration: 'Full Day'
      },
      {
        title: 'Maasai Elder Cultural Dialogue',
        description: 'An unscripted, respectful afternoon conversation in a private village discussing ecology, culture, and ancient star navigation.',
        duration: '3 Hours'
      }
    ],
    curatedStays: [
      {
        name: 'Singita Sasakwa Lodge',
        style: 'Edwardian manor house perched on the Grumeti reserve with panoramic savanna views',
        highlight: 'Private 350,000-acre private reserve, equestrian center, tennis courts, heated infinity pool',
        location: 'Grumeti Reserve'
      },
      {
        name: 'Mwiba Lodge',
        style: 'Architectural stone and timber retreat set among giant boulders and ancient coral trees',
        highlight: 'Secluded private wildlife sanctuary, natural spring pools, night tracking',
        location: 'Southern Serengeti'
      },
      {
        name: 'andBeyond Ngorongoro Crater Lodge',
        style: 'Versailles-inspired safari suites perched on the crater rim with antique crystal chandeliers',
        highlight: 'Breathtaking 2,000-foot drop view directly into the volcanic caldera',
        location: 'Ngorongoro Rim'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 3',
        title: 'Arusha to Grumeti Private Concession',
        summary: 'Charter flight directly to Grumeti airstrip. Introduction game drives tracking leopard and cheetah prides with private sundowners.',
        highlights: ['Private bush flight', 'Off-road predator tracking', 'Savanna gin & tonic sundowners']
      },
      {
        dayRange: 'Days 4 – 7',
        title: 'Northern Serengeti River Crossing',
        summary: 'Move with the herds. Witness heart-pounding Mara River crossings, elephant family interactions, and dawn balloon voyages.',
        highlights: ['Balloon flight over migration', 'River crossing viewing', 'Bushfire starlight dinners']
      },
      {
        dayRange: 'Days 8 – 10',
        title: 'The Lost World of Ngorongoro',
        summary: 'Descend into the UNESCO crater for black rhino encounters, flamingos on Lake Magadi, and farewell cliffside banquet.',
        highlights: ['Black rhino spotting', 'Crater picnic', 'Maasai warrior blessing']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Kilimanjaro International Airport (JRO), Arusha',
      privateAviationAccess: 'Private charters fly directly into Sasakwa, Seronera, or Kogatende bush airstrips',
      climateOverview: 'Pleasant savanna climate; warm days (25°C–28°C) and brisk, cool starlit nights (12°C–15°C)',
      timeZone: 'East Africa Time (GMT+3)',
      currency: 'Tanzanian Shilling (TZS); US Dollar (USD) widely used in safari properties',
      language: 'Swahili and English; all Aurelle safari guides are fluent English speakers',
      visaAdvisory: 'Online e-Visa required prior to arrival; single-entry tourist visa is standard'
    },
    indicativeStartingPrice: '$26,500 per couple'
  },
  {
    id: 'marrakech',
    name: 'Marrakech',
    tagline: 'Sensory souks, historic palaces, and tranquil desert hideaways against the Atlas peaks.',
    region: 'Africa',
    country: 'Morocco',
    travelStyle: ['Cultural Immersion', 'Private Escapes'],
    bestTimeToVisit: 'March to May & September to November',
    peakSeason: 'April and October',
    secretSeason: 'January and February (crisp sunny days, snowcapped Atlas mountain backdrops, uncrowded medina)',
    recommendedDuration: '5 to 7 Nights',
    heroImage: '/src/assets/images/dest_marrakech_riad_1792156044837.jpg',
    galleryImages: [
      '/src/assets/images/dest_marrakech_riad_1792156044837.jpg',
      '/src/assets/images/dest_amalfi_cliffside_1792156023922.jpg'
    ],
    editorialLead: 'An intoxicating tapestry of terracotta ramparts, intoxicating spice lanes, and serene courtyards scented with orange blossom.',
    narrative: 'Beyond the vibrant commotion of the Jemaa el-Fnaa, Aurelle Travel reveals the aristocratic soul of the Ochre City. We arrange after-hours access to the Jardin Majorelle and Yves Saint Laurent Museum, private culinary masterclasses with palace dadas, and secluded desert encampments in the Agafay Desert where candlelit Berber tents sit under endless Saharan stars.',
    whyVisit: [
      {
        title: 'Private Riad Sanctuaries',
        description: 'Exclusively buyout intimate 17th-century riads with private plunge pools, hammams, and dedicated house staff.'
      },
      {
        title: 'Curated Artisan Access',
        description: 'Accompanied by architectural historians and antique collectors to access private heritage guild workshops.'
      },
      {
        title: 'Agafay Desert Glamping',
        description: 'Spend twilight in a luxury nomadic camp with acoustic Gnawa musicians and stargazing far from city light.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Private After-Hours Jardin Majorelle & Villa Oasis',
        description: 'Walk Pierre Bergé and Yves Saint Laurent’s private residence and gardens after public gates have closed.',
        duration: '2.5 Hours'
      },
      {
        title: 'Agafay Desert Sunset & Camel Expedition',
        description: 'Chauffeured 4x4 transfer to the stone desert, private sunset ride, and luxury dinner in an orientalist pavilion.',
        duration: 'Evening'
      },
      {
        title: 'Atlas Mountain Kasbah Excursion by Helicopter',
        description: 'Fly over terraced Berber valleys to Sir Richard Branson’s Kasbah Tamadot for mountain mule treks and alpine lunch.',
        duration: 'Full Day'
      }
    ],
    curatedStays: [
      {
        name: 'The Royal Mansour',
        style: 'Commissioned by the King of Morocco; 53 private multi-story riads connected by subterranean tunnels',
        highlight: 'Zero corridors; staff move unseen through underground networks, private rooftop pools',
        location: 'Medina Gates'
      },
      {
        name: 'Amanjena',
        style: 'Palatial Moorish pavilions with tranquil reflecting pools and olive groves',
        highlight: 'Peaceful Palmeraie setting, rose-hued walls inspired by 12th-century Menara gardens',
        location: 'Palmeraie'
      },
      {
        name: 'La Mamounia',
        style: 'Legendary palace hotel host to Churchill and royalty since 1923',
        highlight: '17 acres of ancient gardens, iconic subterranean marble spa',
        location: 'Avenue Bab Jdid'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 2',
        title: 'Imperial Arrival & Palace Riad',
        summary: 'VIP airport fast-track service and transfer to your royal riad. Sunset mint tea and traditional rose petal foot soak.',
        highlights: ['VIP fast track', 'Private traditional hammam', 'Courtyard candlelit dinner']
      },
      {
        dayRange: 'Days 3 – 4',
        title: 'Secret Medina & Master Craftsmen',
        summary: 'Private historian-guided walking tour exploring hidden fondouks, leather tanneries, and private antique palaces.',
        highlights: ['Private architectural tour', 'Spices & perfume bespoke blending', 'YSL private archive access']
      },
      {
        dayRange: 'Days 5 – 7',
        title: 'The High Atlas & Agafay Desert',
        summary: 'Ascend into the snow-capped Atlas Mountains for lunch in a private walnut grove, descending to the Agafay Desert for stargazing.',
        highlights: ['Atlas mountain drive', 'Desert camp luxury dinner', 'Gnawa live acoustic session']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Marrakech Menara Airport (RAK)',
      privateAviationAccess: 'Dedicated VIP lounge and business jet handling apron with rapid customs clearance',
      climateOverview: 'Semi-arid; warm sunny autumns and springs (24°C–28°C); cooler winter evenings (8°C–12°C)',
      timeZone: 'Western European Time (GMT+1)',
      currency: 'Moroccan Dirham (MAD)',
      language: 'Arabic and French; English spoken fluently by all private hosts',
      visaAdvisory: 'Visa not required for stays up to 90 days for citizens of US, Canada, UK, and European Union'
    },
    indicativeStartingPrice: '$16,000 per couple'
  },
  {
    id: 'bali',
    name: 'Bali & Ubud',
    tagline: 'Emerald rainforest valleys, sacred temple water rituals, and serene holistic wellness.',
    region: 'Asia',
    country: 'Indonesia',
    travelStyle: ['Private Escapes', 'Cultural Immersion'],
    bestTimeToVisit: 'April to October',
    peakSeason: 'July and August',
    secretSeason: 'May and June (dry, clear skies, lush post-rain terraces, peaceful atmosphere)',
    recommendedDuration: '7 to 10 Nights',
    heroImage: '/src/assets/images/dest_bali_ubud_1792156045693.jpg',
    galleryImages: [
      '/src/assets/images/dest_bali_ubud_1792156045693.jpg',
      '/src/assets/images/dest_kyoto_ryokan_1792156025024.jpg'
    ],
    editorialLead: 'Beneath mist-shrouded volcano peaks and tiered rice terraces, the Island of the Gods offers an extraordinary sanctuary for rejuvenation.',
    narrative: 'Aurelle’s bespoke Balinese journeys move far beyond coastal crowds to the spiritual and cultural heartlands of Ubud, Sidemen, and the northern volcanic highlands. Private temple water purification with high Balinese priests, clifftop villas hanging over the Ayung River, and wellness retreats designed by world-renowned holistic physicians ensure an intensely transformative stay.',
    whyVisit: [
      {
        title: 'Sacred Water Purification',
        description: 'Private melukat cleansing ritual conducted at a secluded holy spring inaccessible to public tourism.'
      },
      {
        title: 'Architectural Jungle Estates',
        description: 'Open-air teak pavilions with private infinity pools floating directly above primary rainforest canopies.'
      },
      {
        title: 'Holistic Traditional Medicine',
        description: 'Consultations with master Usada herbalists and bespoke chakra balancing sessions.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Private Melukat Cleansing with High Priest',
        description: 'A transformative spiritual blessing ceremony held at an ancient hillside temple waterfall at sunrise.',
        duration: 'Half Day'
      },
      {
        title: 'Helicopter Flight over Mount Batur & Caldera Lake',
        description: 'Scenic aerial flyover of active volcano craters, landing in an organic mountain coffee estate for private brunch.',
        duration: 'Morning'
      },
      {
        title: 'Ayung River Private Sunset Rafting & Champagne',
        description: 'Gentle private float through jungle canyons with personal safety team, ending at a secluded riverside pavilion.',
        duration: 'Afternoon'
      }
    ],
    curatedStays: [
      {
        name: 'Mandapa, a Ritz-Carlton Reserve',
        style: 'Intimate sanctuary along the Ayung River surrounded by active rice terraces',
        highlight: 'Private pool villas, dedicated Patih (butler) service, signature Kubu bamboo dining',
        location: 'Ubud'
      },
      {
        name: 'Amandari',
        style: 'Designed like a traditional Balinese village perched on the edge of the Ayung gorge',
        highlight: 'Open-air marble pavilions, alang-alang thatched roofs, authentic village integration',
        location: 'Kedewatan, Ubud'
      },
      {
        name: 'Bulgari Resort Bali',
        style: 'Dramatic contemporary Italian elegance set 150 meters above the Indian Ocean',
        highlight: 'Private funicular down to exclusive white-sand beach, private ocean-view villas',
        location: 'Uluwatu Cliffs'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 4',
        title: 'The Sacred Rainforest of Ubud',
        summary: 'Arrival into your Ayung River villa. Morning yoga, private artisan visits in Celuk and Mas, and sacred water blessings.',
        highlights: ['Riverfront pool villa', 'Melukat sacred blessing', 'Private rice terrace walk']
      },
      {
        dayRange: 'Days 5 – 7',
        title: 'Volcanic Highlands & Sidemen Valleys',
        summary: 'Journey into rural eastern Bali where traditional subak irrigation systems have functioned unchanged for a thousand years.',
        highlights: ['Mount Batur flight', 'Organic herbal plantation lunch', 'Traditional Balinese music recital']
      },
      {
        dayRange: 'Days 8 – 10',
        title: 'Clifftop Seclusion in Uluwatu',
        summary: 'Transition to dramatic southern ocean cliffs. Sunset cocktail cruises, private surf coaching, and oceanfront spa rituals.',
        highlights: ['Private yacht charter to Nusa Penida', 'Clifftop seafood feast', 'Deep tissue herbal massage']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Ngurah Rai International Airport (DPS), Denpasar',
      privateAviationAccess: 'General aviation terminal with VIP lounge and expedited ramp transfers',
      climateOverview: 'Tropical marine; warm 27°C–31°C year-round with refreshing sea breezes',
      timeZone: 'Central Indonesia Time (GMT+8)',
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Balinese and Indonesian; English universally spoken in high-end hospitality',
      visaAdvisory: 'Visa on Arrival (VoA) available for over 90 nationalities; fast-track protocol included'
    },
    indicativeStartingPrice: '$17,500 per couple'
  },
  {
    id: 'seychelles',
    name: 'The Seychelles',
    tagline: 'Granite sculptures, untouched coral atolls, and the ultimate castaway luxury.',
    region: 'Indian Ocean',
    country: 'Republic of Seychelles',
    travelStyle: ['Private Escapes', 'Coastal & Marine'],
    bestTimeToVisit: 'April to May & October to November (calm seas and crystal visibility)',
    peakSeason: 'December to January & July to August',
    secretSeason: 'April and May (flawless glass-like waters, ideal for diving and private yachting)',
    recommendedDuration: '7 to 10 Nights',
    heroImage: '/src/assets/images/dest_seychelles_cove_1792156046111.jpg',
    galleryImages: [
      '/src/assets/images/dest_seychelles_cove_1792156046111.jpg',
      '/src/assets/images/hero_aurelle_maldives_1792156023546.jpg'
    ],
    editorialLead: 'Towering prehistoric granite boulders, ancient Coco de Mer palm forests, and powdery bays preserved in timeless Edenic solitude.',
    narrative: 'Aurelle’s Seychelles collection curates private islands where total exclusivity is standard. With private helicopter transfers between Mahé, Praslin, and private outer atolls, our travelers enjoy miles of pristine white sand beaches without another footprint in sight, private catamaran expeditions, and sanctuary conservation tours alongside giant Aldabra tortoises.',
    whyVisit: [
      {
        title: 'Private Island Buyouts',
        description: 'Single-resort islands such as North Island and Fregate where human presence is outnumbered by rare fauna.'
      },
      {
        title: 'Sculpted Granite Beaches',
        description: 'Swim in the legendary turquoise waters of Anse Source d’Argent and Anse Georgette under private yacht charter.'
      },
      {
        title: 'Eco-Conservation Sanctuaries',
        description: 'Participate in private turtle nesting monitoring and rare native bird rewilding initiatives with top ecologists.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Chartered Catamaran Cruise to La Digue',
        description: 'Explore the pink granite coves of La Digue by bicycle and private wooden launch, with a champagne picnic in a secret cove.',
        duration: 'Full Day'
      },
      {
        title: 'Helicopter Hop to Vallée de Mai',
        description: 'Private ranger walk through the UNESCO-protected primordial palm forest home to the legendary Coco de Mer.',
        duration: 'Half Day'
      },
      {
        title: 'Deep Sea Big Game Fishing Expedition',
        description: 'Target marlin, sailfish, and yellowfin tuna with a custom sportfishing boat and experienced Seychellois skippers.',
        duration: 'Full Day'
      }
    ],
    curatedStays: [
      {
        name: 'North Island, a Luxury Collection Resort',
        style: 'Just 11 handcrafted villas built from reclaimed native timber on a private wildlife sanctuary',
        highlight: 'The ultimate royal honeymoon destination, private electric buggies, private chef consultation',
        location: 'North Island'
      },
      {
        name: 'Four Seasons Resort Seychelles at Desroches Island',
        style: 'Remote coral island with 14 kilometers of white sand beaches and lush coconut groves',
        highlight: 'Private pool villas directly on the beach, world-class diving and casting flats',
        location: 'Desroches Island'
      },
      {
        name: 'Six Senses Zil Pasyon',
        style: 'Steep granite hillside villas with private infinity pools overlooking the Indian Ocean',
        highlight: 'Félicité Island setting, architectural spa nestled between colossal granite boulders',
        location: 'Félicité Island'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 3',
        title: 'Mahé to North Island Helicopter Arrival',
        summary: 'Helicopter transfer from Mahé international runway directly onto North Island helipad. Unpack into your expansive beachfront sanctuary.',
        highlights: ['Private helicopter flight', 'Barefoot champagne welcome', 'Villa orientation and spa treatment']
      },
      {
        dayRange: 'Days 4 – 6',
        title: 'Outer Atoll Navigation & Turtle Habitats',
        summary: 'Sail by private catamaran to uninhabited granite islands. Snorkel with hawksbill sea turtles and spot rare black parrots.',
        highlights: ['Private marine biologist dive', 'Secret cove picnic', 'Giant tortoise sanctuary tour']
      },
      {
        dayRange: 'Days 7 – 9',
        title: 'Sunset Cruises & Bespoke Gastronomy',
        summary: 'Sunset cruise along the granite coastline, stargazing from your private deck, and farewell beach barbecue under tiki torches.',
        highlights: ['Champagne catamaran sail', 'Catch-of-the-day beach grill', 'Aromatherapy massage']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Seychelles International Airport (SEZ), Mahé',
      privateAviationAccess: 'Direct private jet landing and VIP customs lounge on Mahé; Zil Air helicopter transfers to all islands',
      climateOverview: 'Tropical warm climate; 26°C to 31°C year-round with gentle southeast trade winds in winter',
      timeZone: 'Seychelles Time (GMT+4)',
      currency: 'Seychellois Rupee (SCR); Euro and USD widely accepted',
      language: 'Creole, French, and English; all three are official national languages',
      visaAdvisory: 'Visa-free country for all nationalities; visitors must hold valid passport and return ticket'
    },
    indicativeStartingPrice: '$29,000 per couple'
  },
  {
    id: 'iceland',
    name: 'Iceland',
    tagline: 'Vast volcanic frontiers, dancing aurora borealis, and private geothermal sanctuaries.',
    region: 'Polar & Nordic',
    country: 'Republic of Iceland',
    travelStyle: ['Private Escapes', 'Wildlife & Safari'],
    bestTimeToVisit: 'September to March (Northern Lights) & June to August (Midnight Sun)',
    peakSeason: 'July to August (Summer) & December to February (Winter)',
    secretSeason: 'Late September and October (vibrant autumn moss colors, aurora activity, quieter roads)',
    recommendedDuration: '6 to 8 Nights',
    heroImage: '/src/assets/images/dest_iceland_retreat_1792156045674.jpg',
    galleryImages: [
      '/src/assets/images/dest_iceland_retreat_1792156045674.jpg',
      '/src/assets/images/dest_swiss_alps_1792156044225.jpg'
    ],
    editorialLead: 'A land forged in fire and ice, where raw geothermal power and ethereal polar light create the most dramatic landscapes in the western world.',
    narrative: 'Aurelle’s Icelandic journeys reject the crowded Golden Circle tour buses. Instead, our guests explore the rugged Highlands in custom monster super-jeeps, fly by private helicopter to land inside volcanic calderas, descend into glowing crystalline ice caves with private glaciologists, and retire to private minimalist glass suites where the Aurora Borealis dances above their bed.',
    whyVisit: [
      {
        title: 'Private Aurora Chasing',
        description: 'Night missions in heated super-jeeps equipped with meteorological satellite tracking to locate clear celestial pockets.'
      },
      {
        title: 'Crystalline Ice Cave Sole Entry',
        description: 'Early morning helicopter access to blue glacier caves before any day visitors reach the glacier tongues.'
      },
      {
        title: 'Private Geothermal Lagoons',
        description: 'Exclusive after-hours access to mineral-rich volcanic springs with floating champagne service.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Helicopter Glacier Landing & Ice Cave Exploration',
        description: 'Fly over thundering waterfalls and black volcanic sandbars to land on Langjökull glacier for a private ice tunnel tour.',
        duration: 'Half Day'
      },
      {
        title: 'Silfra Fissure Continental Drift Snorkel',
        description: 'Drysuit snorkel between the North American and Eurasian tectonic plates in water filtered through volcanic rock for 100 years.',
        duration: '3 Hours'
      },
      {
        title: 'Midnight Sun Lava Field Champagne Toast',
        description: 'Experience 24-hour daylight atop an extinct volcanic crater with a private chef preparing Icelandic lamb and arctic char.',
        duration: 'Evening'
      }
    ],
    curatedStays: [
      {
        name: 'The Retreat at Blue Lagoon',
        style: 'Sublime architectural suites carved into 800-year-old lava fields with private lagoon access',
        highlight: 'Subterranean spa, exclusive lava spring waters, floor-to-ceiling glass design',
        location: 'Grindavík'
      },
      {
        name: 'Deplar Farm',
        style: 'Converted sheep farm on the remote Troll Peninsula with turf roofs and extraordinary heliskiing',
        highlight: 'Geothermal indoor/outdoor pool with swim-up bar, two private helicopter pads, top-tier guides',
        location: 'Troll Peninsula'
      },
      {
        name: 'Torfhús Retreat',
        style: 'Eco-luxury turf houses inspired by Viking architecture with private basalt hot tubs',
        highlight: 'Powered by 100% renewable geothermal energy, equestrian center with purebred Icelandic horses',
        location: 'Golden Circle Region'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 2',
        title: 'Arrival in Reykjavik & The Lava Fields',
        summary: 'VIP airport assistance at Keflavík. Private chauffeur to The Retreat at Blue Lagoon. Unwind in mineral-rich geothermal waters.',
        highlights: ['VIP airport transit', 'Private silica mineral scrub', 'Nordic tasting dinner']
      },
      {
        dayRange: 'Days 3 – 5',
        title: 'Super-Jeeps, Glaciers & Waterfalls',
        summary: 'Head into the southern wilderness. Walk behind Seljalandsfoss waterfall, explore Reynisfjara black sand beach, and enter sapphire ice caves.',
        highlights: ['Super-jeep excursion', 'Glacier ice cave walk', 'Aurora watching from private hot tub']
      },
      {
        dayRange: 'Days 6 – 8',
        title: 'The Troll Peninsula & Heliskiing',
        summary: 'Charter flight north to Deplar Farm. Days of backcountry snowcat or heli-exploration, evenings by the fire with Nordic aquavit.',
        highlights: ['Heli-exploration over fjords', 'Viking sauna ritual', 'Private acoustic music fireside']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Keflavík International Airport (KEF), Reykjavik',
      privateAviationAccess: 'Reykjavik Domestic Airport (RKV) handles private aviation with dedicated VIP terminal and customs',
      climateOverview: 'Subpolar oceanic; summer temperatures 10°C–16°C; winter around -2°C to 3°C, tempered by the Gulf Stream',
      timeZone: 'Greenwich Mean Time (GMT+0) year-round',
      currency: 'Icelandic Króna (ISK); card transactions accepted everywhere',
      language: 'Icelandic; English spoken fluently by virtually all residents',
      visaAdvisory: 'Schengen Area rules; US, UK, Canadian, and EU travelers enter without visa for up to 90 days'
    },
    indicativeStartingPrice: '$23,000 per couple'
  },
  {
    id: 'botswana',
    name: 'Botswana & Okavango',
    tagline: 'Miraculous wetland waterways, ancient Kalahari silence, and the world’s most pristine wildlife sanctuaries.',
    region: 'Africa',
    country: 'Republic of Botswana',
    travelStyle: ['Wildlife & Safari', 'Private Escapes'],
    bestTimeToVisit: 'May to October (Okavango Flood Season & Dry Season)',
    peakSeason: 'July to September',
    secretSeason: 'November to April (Green Season; dramatic skies, newborn animals, premier birding)',
    recommendedDuration: '7 to 10 Nights',
    heroImage: '/src/assets/images/exp_private_yacht_1792156026118.jpg',
    galleryImages: [
      '/src/assets/images/dest_safari_serengeti_1792156025236.jpg',
      '/src/assets/images/dest_seychelles_cove_1792156046111.jpg'
    ],
    editorialLead: 'Where the floodwaters of Angola spill into the Kalahari sands, the Okavango Delta creates a shimmering inland oasis teeming with wildlife.',
    narrative: 'Botswana champions a low-volume, high-value conservation model that preserves its wilderness in pristine tranquility. Through Aurelle Travel, you traverse deep papyrus channels by private handcrafted mokoro canoe, track rare African wild dogs on private concessions, and sleep in opulent tented pavilions raised on stilts beneath ancient ebony trees.',
    whyVisit: [
      {
        title: 'Strict Concession Exclusivity',
        description: 'Vast private reserves spanning hundreds of thousands of acres hosting only 10 to 12 guests maximum.'
      },
      {
        title: 'Mokoro Water Safaris',
        description: 'Glide silently through clear water lily channels propelled by experienced polers who read animal sounds like an open book.'
      },
      {
        title: 'Predator Strongholds',
        description: 'Home to the planet’s largest remaining populations of endangered African wild dogs and apex lion prides.'
      }
    ],
    signatureExperiences: [
      {
        title: 'Doors-Off Okavango Helicopter Safari',
        description: 'Low-level scenic flight tracking elephant herds wading through crystalline delta channels at golden hour.',
        duration: 'Half Day'
      },
      {
        title: 'Private Starlit Delta Sleep-Out Deck',
        description: 'Sleep on a raised open-air platform under the southern sky surrounded only by the nocturnal chorus of the delta.',
        duration: 'Overnight'
      },
      {
        title: 'Walking Safari with San Bushmen Elders',
        description: 'Learn ancient survival lore, edible plants, and track reading from generational indigenous trackers.',
        duration: 'Morning'
      }
    ],
    curatedStays: [
      {
        name: 'Mombo Camp',
        style: 'Known as "The Place of Plenty", situated in the heart of the Moremi Game Reserve',
        highlight: 'Unrivaled predator density, elevated timber suites overlooking the floodplains',
        location: 'Chief’s Island, Okavango'
      },
      {
        name: 'Jao Camp',
        style: 'Award-winning architectural safari camp constructed with recycled materials and glass towers',
        highlight: 'Private two-story villa, private plunge pool, exceptional water and land safari flexibility',
        location: 'Jao Concession'
      },
      {
        name: 'Jack’s Camp',
        style: '1940s-style Persian-carpeted luxury tents set on the edge of the Makgadikgadi Salt Pans',
        highlight: 'Famous meerkat interactions, quad biking across white pans, legendary tea tent',
        location: 'Makgadikgadi Pans'
      }
    ],
    suggestedItinerary: [
      {
        dayRange: 'Days 1 – 3',
        title: 'Arrival in Maun & Fly into the Delta',
        summary: 'Charter flight into your private concession airstrip. Afternoon mokoro safari gliding past tiny reed frogs and hippo pods.',
        highlights: ['Bush flight over delta', 'Silent mokoro glide', 'Sundowner on termite mound']
      },
      {
        dayRange: 'Days 4 – 6',
        title: 'Chief’s Island Predator Safaris',
        summary: 'Track lion prides, leopards, and wild dog packs in customized open vehicles with your dedicated guide and tracker.',
        highlights: ['Off-road tracking', 'Doors-off helicopter flight', 'Starlit bush banquet']
      },
      {
        dayRange: 'Days 7 – 9',
        title: 'The Surreal Makgadikgadi Salt Pans',
        summary: 'Transition to the ancient salt pans. Spend mornings with habituated meerkat families and ride quad bikes to the horizon.',
        highlights: ['Meerkat interaction', 'Quad bike expedition', 'Night sky astronomy']
      }
    ],
    practicalInfo: {
      gatewayAirport: 'Maun Airport (MUB) or Kasane Airport (BBK)',
      privateAviationAccess: 'Maun handles private jet arrivals; light aircraft transfers take guests directly to camp airstrips',
      climateOverview: 'Subtropical; dry winter months (May–Oct) have warm sunny days (25°C) and cold crisp nights (8°C)',
      timeZone: 'Central Africa Time (GMT+2)',
      currency: 'Botswana Pula (BWP); US Dollars accepted in all safari lodges',
      language: 'English is the official language; Setswana is the national language',
      visaAdvisory: 'Most Western nationalities (US, UK, EU, Commonwealth) do not require a tourist visa for stays up to 90 days'
    },
    indicativeStartingPrice: '$27,500 per couple'
  }
];
