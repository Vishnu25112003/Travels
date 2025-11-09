import React, { useMemo, useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import FeatureStrip, { ShieldCheck, PhoneCall, BookmarkPlus } from "../components/ui/FeatureStrip";
import DestinationToolbar from "../components/ui/DestinationToolbar";
import DestinationGrid from "../components/ui/DestinationGrid";
import type { Destination, DestinationSort, DestinationView } from "../components/ui/destinations/DestinationTypes";

const data: Destination[] = [
  { id: 1, name: "Ooty", region: "Tamil Nadu", image: "https://images.unsplash.com/photo-1593697820909-2e864095ea7f?q=80&w=1200&auto=format&fit=crop", description: "Mist-laden hills, tea gardens, and serene lakes.", highlights: ["Tea estates", "Toy train", "Doddabetta"], bestTime: "Sep–Mar", days: 3, rating: 4.6, priceHint: "Budget", tags: ["Family", "Nature"] },
  { id: 2, name: "Goa", region: "Goa", image: "https://images.unsplash.com/photo-1544551763-7ef42011f86a?q=80&w=1200&auto=format&fit=crop", description: "Golden beaches, Portuguese heritage, vibrant nightlife.", highlights: ["Beaches", "Fort Aguada", "Spice farms"], bestTime: "Nov–Feb", days: 3, rating: 4.7, priceHint: "Moderate", tags: ["Beach", "Couples"] },
  { id: 3, name: "Ladakh", region: "Ladakh", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=1200&auto=format&fit=crop", description: "High‑altitude deserts, monasteries, and crystal lakes.", highlights: ["Pangong", "Khardung La", "Nubra"], bestTime: "Jun–Sep", days: 6, rating: 4.9, priceHint: "Premium", tags: ["Adventure", "Roadtrip"] },
  { id: 4, name: "Munnar", region: "Kerala", image: "https://images.unsplash.com/photo-1593697821190-7e2b02d9eed0?q=80&w=1200&auto=format&fit=crop", description: "Rolling tea gardens and cool mountain air.", highlights: ["Eravikulam", "Tea Museum", "Top Station"], bestTime: "Sep–Mar", days: 3, rating: 4.5 },
  { id: 5, name: "Jaipur", region: "Rajasthan", image: "https://images.unsplash.com/photo-1589307004173-3c95204b7b09?q=80&w=1200&auto=format&fit=crop", description: "Pink city with royal palaces and vibrant bazaars.", highlights: ["Amber Fort", "City Palace", "Hawa Mahal"], bestTime: "Oct–Mar", days: 3, rating: 4.7 },
  { id: 6, name: "Udaipur", region: "Rajasthan", image: "https://images.unsplash.com/photo-1599661046289-80b1aa7b2e66?q=80&w=1200&auto=format&fit=crop", description: "Lakeside romance and white marble palaces.", highlights: ["City Palace", "Lake Pichola", "Bagore Ki Haveli"], bestTime: "Oct–Mar", days: 3, rating: 4.6 },
  { id: 7, name: "Hampi", region: "Karnataka", image: "https://images.unsplash.com/photo-1606313564200-6a43ae2e9b18?q=80&w=1200&auto=format&fit=crop", description: "UNESCO ruins set amidst surreal boulder landscapes.", highlights: ["Vijaya Vittala", "Virupaksha", "Bouldering"], bestTime: "Nov–Feb", days: 2, rating: 4.5 },
  { id: 8, name: "Andaman Islands", region: "Andaman", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop", description: "Turquoise waters, coral reefs, and pristine beaches.", highlights: ["Havelock", "Scuba", "Radhanagar"], bestTime: "Nov–Apr", days: 5, rating: 4.8 },
  { id: 9, name: "Darjeeling", region: "West Bengal", image: "https://images.unsplash.com/photo-1540304805-8494a6d0d4cc?q=80&w=1200&auto=format&fit=crop", description: "Himalayan views and world‑famous tea.", highlights: ["Tiger Hill", "Toy Train", "Tea gardens"], bestTime: "Oct–Apr", days: 3, rating: 4.4 },
  { id: 10, name: "Manali", region: "Himachal", image: "https://images.unsplash.com/photo-1528821154947-1aa3d1bb00b4?q=80&w=1200&auto=format&fit=crop", description: "Snow‑capped peaks, rivers, and adventure sports.", highlights: ["Solang", "Old Manali", "Rohtang"], bestTime: "Oct–Jun", days: 4, rating: 4.6 },
  { id: 11, name: "Varanasi", region: "Uttar Pradesh", image: "https://images.unsplash.com/photo-1583258292688-cc3685b50645?q=80&w=1200&auto=format&fit=crop", description: "Ancient ghats, rituals, and spiritual aura.", highlights: ["Ganga Aarti", "Sarnath", "Boat ride"], bestTime: "Oct–Mar", days: 2, rating: 4.3 },
  { id: 12, name: "Coorg", region: "Karnataka", image: "https://images.unsplash.com/photo-1518544801976-3e0b0b478c5e?q=80&w=1200&auto=format&fit=crop", description: "Coffee estates, waterfalls, and misty hills.", highlights: ["Abbey Falls", "Raja's Seat", "Coffee tours"], bestTime: "Oct–Mar", days: 3, rating: 4.5 },
];

const Destinations: React.FC = () => {
  const [view, setView] = useState<DestinationView>('grid');
  const [sort, setSort] = useState<DestinationSort>('popular');
  const [region, setRegion] = useState<string>("");

  const regions = useMemo(() => Array.from(new Set(data.map(d => d.region))), []);

  const items = useMemo(() => {
    let list = [...data];
    if (region) list = list.filter(d => d.region === region);
    switch (sort) {
      case 'rating-desc':
        list.sort((a, b) => b.rating - a.rating); break;
      case 'days-asc':
        list.sort((a, b) => a.days - b.days); break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name)); break;
      default:
        list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [region, sort]);

  const onAction = (d: Destination) => alert(`Viewing itinerary for: ${d.name}`);

  return (
    <div className="pt-20 md:pt-24 pb-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Destinations" subtitle="Handpicked places across India—filter by region, compare by days, and pick your vibe" align="left" />

        {/* Feature strip */}
        <FeatureStrip
          items={[
            { icon: ShieldCheck, title: 'Verified stays & drivers', text: 'Handpicked partners with quality and safety checks' },
            { icon: PhoneCall, title: '24/7 assistance', text: 'Real people to help you before and during your trip' },
            { icon: BookmarkPlus, title: 'Custom itineraries', text: 'Tailor the route, pace, and experiences to your style' },
          ]}
          className="-mt-2"
        />

        {/* Toolbar */}
        <DestinationToolbar
          regions={regions}
          activeRegion={region}
          onRegionChange={setRegion}
          view={view}
          onViewChange={setView}
          sort={sort}
          onSortChange={setSort}
          className="mb-4 md:mb-6"
        />

        {/* Grid/List */}
        <DestinationGrid items={items} view={view} onAction={onAction} />
      </div>
    </div>
  );
};

export default Destinations;
