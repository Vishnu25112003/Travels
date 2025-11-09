import React from "react";
import Modal from "./Modal";
import type { Vehicle } from "./vehicles/VehicleTypes";
import { Users, Gauge, Luggage, Fuel, CheckCircle2, XCircle } from "lucide-react";

export type VehicleDetailsModalProps = {
  open: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
};

const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({ open, onClose, vehicle }) => {
  if (!vehicle) return null;
  return (
    <Modal open={open} onClose={onClose}>
      <div className="grid md:grid-cols-2">
        <div className="relative bg-black">
          <img src={vehicle.image} alt={vehicle.name} className="w-full h-64 md:h-full object-cover" />
          {/* Mirror effect */}
          <div className="hidden md:block">
            <img src={vehicle.image} alt="reflection" className="w-full h-40 object-cover transform" style={{ transform: 'scaleY(-1)' }} />
            <div className="pointer-events-none -mt-40 h-40" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,1))', mixBlendMode: 'screen' }} />
          </div>
        </div>
        <div className="p-5 md:p-6">
          <h3 className="text-xl font-bold text-secondary">{vehicle.name}</h3>
          <p className="mt-1 text-primary text-lg font-extrabold">₹{vehicle.pricePerDay}/day</p>
          <div className="mt-2">
            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-semibold border ${vehicle.available ? 'border-green-600/20 text-green-700 bg-green-50' : 'border-red-600/20 text-red-700 bg-red-50'}`}>
              {vehicle.available ? (<><CheckCircle2 className="w-3.5 h-3.5" /> Available</>) : (<><XCircle className="w-3.5 h-3.5" /> Unavailable</>)}
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div className="inline-flex items-center gap-2"><Users className="w-4 h-4" /> Seats: {vehicle.seats}</div>
            <div className="inline-flex items-center gap-2"><Gauge className="w-4 h-4" /> {vehicle.transmission}</div>
            {typeof vehicle.luggage === 'number' && (
              <div className="inline-flex items-center gap-2"><Luggage className="w-4 h-4" /> Luggage: {vehicle.luggage}</div>
            )}
            {vehicle.fuel && (
              <div className="inline-flex items-center gap-2"><Fuel className="w-4 h-4" /> {vehicle.fuel}</div>
            )}
          </div>
          {vehicle.tags && vehicle.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {vehicle.tags.map((t, i) => (
                <span key={i} className="px-2 py-0.5 text-xs rounded-md border bg-white">{t}</span>
              ))}
            </div>
          )}
          <div className="mt-5 flex gap-2">
            <a href={`tel:+919876543210`} className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-white font-semibold shadow hover:bg-orange-600">Book Now</a>
            <button onClick={onClose} className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-gray-300 font-semibold hover:bg-gray-50">Close</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VehicleDetailsModal;
