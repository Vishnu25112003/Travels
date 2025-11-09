import React from "react";
import Button from "../ui/Button";
import { MapPin, CalendarRange, Star, Clock } from "lucide-react";
import type { Destination } from "./destinations/DestinationTypes";

export type DestinationCardProps = {
  destination: Destination;
  variant?: 'card' | 'row';
  onAction?: (d: Destination) => void;
  className?: string;
};

const Pill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-white border text-gray-700">
    {children}
  </span>
);

const Stars: React.FC<{ rating: number; className?: string }> = ({ rating, className = "" }) => {
  const r = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < r ? 'text-yellow-500 fill-yellow-400' : 'text-gray-300'} `} />
      ))}
    </div>
  );
};

const DestinationCard: React.FC<DestinationCardProps> = ({ destination: d, variant = 'card', onAction, className = "" }) => {
  if (variant === 'row') {
    return (
      <div className={`group rounded-2xl border bg-white shadow-sm overflow-hidden flex gap-4 p-3 md:p-4 items-center ${className}`}>
        <div className="relative w-40 h-28 md:w-48 md:h-32 rounded-xl overflow-hidden">
          <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3">
            <h4 className="text-base md:text-lg font-bold text-secondary truncate">{d.name}</h4>
            <Stars rating={d.rating} />
          </div>
          <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mt-1">{d.description}</p>
          <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-700">
            <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> {d.region}</span>
            <span className="inline-flex items-center gap-1"><CalendarRange className="w-4 h-4" /> {d.bestTime}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" /> {d.days} days</span>
          </div>
          <div className="mt-2 flex gap-1">
            {d.highlights.slice(0, 3).map((h, i) => <Pill key={i}>{h}</Pill>)}
          </div>
        </div>
        <div className="hidden sm:flex">
          <Button size="md" onClick={() => onAction?.(d)}>View Itinerary</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={`group rounded-2xl border bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg ${className}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={d.image} alt={d.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute left-3 top-3 inline-flex items-center gap-2">
          <Pill>{d.region}</Pill>
          <Pill>{d.bestTime}</Pill>
        </div>
        <div className="absolute right-3 top-3">
          <Pill><Stars rating={d.rating} /></Pill>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-lg font-bold text-secondary">{d.name}</h4>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{d.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {d.highlights.slice(0, 4).map((h, i) => <Pill key={i}>{h}</Pill>)}
        </div>
        <div className="mt-4 flex gap-2">
          <Button size="md" onClick={() => onAction?.(d)}>View Itinerary</Button>
          <Button size="md" variant="outline">Enquire</Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
