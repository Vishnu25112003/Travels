import React from "react";
import Button from "../ui/Button";
import {
  CheckCircle2,
  XCircle
} from "lucide-react";
import type { Vehicle } from "./vehicles/VehicleTypes";

export type VehicleCardProps = {
  vehicle: Vehicle;
  variant?: "card" | "row";
  onAction?: (vehicle: Vehicle) => void;
  onDetails?: (vehicle: Vehicle) => void;
  className?: string;
};

const Badge: React.FC<{ label: string; className?: string }> = ({
  label,
  className = "",
}) => (
  <span
    className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold border ${className}`}
  >
    {label}
  </span>
);

const StatusPill: React.FC<{ available: boolean }> = ({ available }) => (
  <span
    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border ${
      available
        ? "border-green-600/20 text-green-700 bg-green-50"
        : "border-red-600/20 text-red-700 bg-red-50"
    }`}
  >
    {available ? (
      <>
        <CheckCircle2 className="w-3.5 h-3.5" /> Available
      </>
    ) : (
      <>
        <XCircle className="w-3.5 h-3.5" /> Unavailable
      </>
    )}
  </span>
);

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  variant = "card",
  onAction,
  onDetails,
  className = "",
}) => {
  const status = <StatusPill available={vehicle.available} />;

  const tags = (
    <div className="flex flex-wrap gap-2 mt-2">
      <Badge
        label={`${vehicle.seats} Seats`}
        className="border-gray-300 bg-white"
      />
      <Badge
        label={vehicle.transmission}
        className="border-gray-300 bg-white"
      />
      <Badge
        label={vehicle.ac ? "AC" : "Non-AC"}
        className="border-gray-300 bg-white"
      />
      {typeof vehicle.luggage === "number" && (
        <Badge
          label={`${vehicle.luggage} Luggage`}
          className="border-gray-300 bg-white"
        />
      )}
      {vehicle.fuel && (
        <Badge label={vehicle.fuel} className="border-gray-300 bg-white" />
      )}
    </div>
  );

  if (variant === "row") {
    return (
      <div
        className={`group rounded-2xl border bg-white shadow-sm overflow-hidden flex flex-col sm:flex-row gap-3 md:gap-4 p-3 md:p-4 items-stretch sm:items-center w-full box-border ${className}`}
      >
        <div className="relative w-full h-40 sm:w-40 sm:h-28 md:w-48 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-3">
            <h4 className="text-base md:text-lg font-bold text-secondary truncate">
              {vehicle.name}
            </h4>
            <div className="text-left sm:text-right whitespace-nowrap sm:whitespace-normal">
              <p className="text-primary text-base md:text-lg font-extrabold">
                ₹{vehicle.pricePerDay}/day
              </p>
              {status}
            </div>
          </div>
          {tags}
        </div>
        <div className="hidden sm:flex gap-2">
          <Button size="md" onClick={() => onAction?.(vehicle)}>
            Buy
          </Button>
          <Button size="md" variant="outline" onClick={() => onDetails?.(vehicle)}>
            Details
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group rounded-2xl border bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-lg flex flex-col h-full ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <div className="absolute left-3 top-3 inline-flex items-center px-2 py-1 rounded-md text-xs font-semibold bg-white/90 backdrop-blur border">
          {vehicle.category}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h4 className="text-lg font-bold text-secondary truncate">{vehicle.name}</h4>
          </div>
          <div className="text-right whitespace-nowrap shrink-0">
            <p className="text-primary text-lg font-extrabold">₹{vehicle.pricePerDay}/day</p>
            {status}
          </div>
        </div>
        {/* keep spec pills minimal outside for cleaner alignment */}
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-gray-700">
          <Badge label={`${vehicle.seats} Seats`} className="border-gray-200 bg-white" />
          <Badge label={vehicle.transmission} className="border-gray-200 bg-white" />
          {typeof vehicle.luggage === "number" && (
            <Badge label={`${vehicle.luggage} Luggage`} className="border-gray-200 bg-white" />
          )}
          {vehicle.fuel && <Badge label={vehicle.fuel} className="border-gray-200 bg-white" />}
        </div>
        <div className="mt-auto flex gap-2 pt-3">
          <Button size="md" onClick={() => onAction?.(vehicle)}>Buy</Button>
          <Button size="md" variant="outline" onClick={() => onDetails?.(vehicle)}>Details</Button>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;
