import React from "react";
import type { Destination, DestinationView } from "./destinations/DestinationTypes";
import DestinationCard from "./DestinationCard";

export type DestinationGridProps = {
  items: Destination[];
  view: DestinationView;
  onAction?: (d: Destination) => void;
  className?: string;
};

const DestinationGrid: React.FC<DestinationGridProps> = ({ items, view, onAction, className = "" }) => {
  if (view === 'list') {
    return (
      <div className={`space-y-3 md:space-y-4 ${className}`}>
        {items.map((d) => (
          <DestinationCard key={d.id} destination={d} variant="row" onAction={onAction} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {items.map((d) => (
        <DestinationCard key={d.id} destination={d} variant="card" onAction={onAction} />
      ))}
    </div>
  );
};

export default DestinationGrid;
