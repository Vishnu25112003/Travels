import React from "react";
import type { Vehicle, VehicleView } from "./vehicles/VehicleTypes";
import VehicleCard from "./VehicleCard";

export type VehicleGridProps = {
  items: Vehicle[];
  view: VehicleView;
  onBook?: (v: Vehicle) => void;
  onDetails?: (v: Vehicle) => void;
  className?: string;
};

const VehicleGrid: React.FC<VehicleGridProps> = ({ items, view, onBook, onDetails, className = "" }) => {
  if (view === 'list') {
    return (
      <div className={`space-y-3 md:space-y-4 ${className}`}>
        {items.map((v) => (
          <VehicleCard key={v.id} vehicle={v} variant="row" onAction={onBook} onDetails={onDetails} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ${className}`}>
      {items.map((v) => (
        <VehicleCard key={v.id} vehicle={v} variant="card" onAction={onBook} onDetails={onDetails} />
      ))}
    </div>
  );
};

export default VehicleGrid;
