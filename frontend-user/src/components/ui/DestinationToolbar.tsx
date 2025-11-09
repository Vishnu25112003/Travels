import React from "react";
import type { DestinationView, DestinationSort } from "./destinations/DestinationTypes";
import { Grid2X2, Rows, ChevronDown } from "lucide-react";

export type DestinationToolbarProps = {
  regions: string[];
  activeRegion: string;
  onRegionChange: (r: string) => void;
  view: DestinationView;
  onViewChange: (v: DestinationView) => void;
  sort: DestinationSort;
  onSortChange: (s: DestinationSort) => void;
  className?: string;
};

const allLabel = "All Regions";

const DestinationToolbar: React.FC<DestinationToolbarProps> = ({
  regions,
  activeRegion,
  onRegionChange,
  view,
  onViewChange,
  sort,
  onSortChange,
  className = "",
}) => {
  const list = [allLabel, ...regions];
  return (
    <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-2">
        {list.map((r) => {
          const active = (activeRegion || allLabel) === r;
          return (
            <button
              key={r}
              onClick={() => onRegionChange(r === allLabel ? "" : r)}
              className={`px-3 py-1.5 rounded-full text-sm border ${
                active ? "bg-primary text-white border-primary" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {r}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <select
            className="appearance-none pl-3 pr-8 py-2 text-sm border rounded-lg bg-white"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as DestinationSort)}
          >
            <option value="popular">Most Popular</option>
            <option value="rating-desc">Top Rated</option>
            <option value="days-asc">Shortest Trips</option>
            <option value="name-asc">Name A–Z</option>
          </select>
          <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>
        <div className="flex items-center gap-1 border rounded-lg p-1 bg-white">
          <button
            aria-label="Grid view"
            onClick={() => onViewChange('grid')}
            className={`p-2 rounded-md ${view === 'grid' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <Grid2X2 className="w-4 h-4" />
          </button>
          <button
            aria-label="List view"
            onClick={() => onViewChange('list')}
            className={`p-2 rounded-md ${view === 'list' ? 'bg-primary text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            <Rows className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationToolbar;
