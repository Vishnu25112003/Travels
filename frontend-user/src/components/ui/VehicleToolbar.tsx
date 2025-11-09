import React from "react";
import type { VehicleView, VehicleSort } from "./vehicles/VehicleTypes";
import { Grid2X2, Rows, ChevronDown } from "lucide-react";

export type VehicleToolbarProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (c: string) => void;
  view: VehicleView;
  onViewChange: (v: VehicleView) => void;
  sort: VehicleSort;
  onSortChange: (s: VehicleSort) => void;
  className?: string;
};

const categoryAll = "All";

const VehicleToolbar: React.FC<VehicleToolbarProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  view,
  onViewChange,
  sort,
  onSortChange,
  className = "",
}) => {
  const list = [categoryAll, ...categories];
  return (
    <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-2">
        {list.map((c) => {
          const active = (activeCategory || categoryAll) === c;
          return (
            <button
              key={c}
              onClick={() => onCategoryChange(c === categoryAll ? "" : c)}
              className={`px-3 py-1.5 rounded-full text-sm border ${
                active ? "bg-primary text-white border-primary" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <select
            className="appearance-none pl-3 pr-8 py-2 text-sm border rounded-lg bg-white"
            value={sort}
            onChange={(e) => onSortChange(e.target.value as VehicleSort)}
          >
            <option value="popular">Most Popular</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="seats-desc">Seats: High to Low</option>
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

export default VehicleToolbar;
