import React, { useMemo, useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import VehicleToolbar from "../components/ui/VehicleToolbar";
import VehicleGrid from "../components/ui/VehicleGrid";
import VehicleDetailsModal from "../components/ui/VehicleDetailsModal";
import type { Vehicle, VehicleSort, VehicleView } from "../components/ui/vehicles/VehicleTypes";

const vehiclesSeed: Vehicle[] = [
  { id: 1, name: "Toyota Innova Crysta", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop", seats: 7, transmission: "Manual", ac: true, luggage: 4, category: "SUV", pricePerDay: 4200, available: true, fuel: 'Diesel', tags: ["Family", "Long Trip"] },
  { id: 2, name: "Maruti Ertiga", image: "https://images.unsplash.com/photo-1526711657229-e7e080ed7aa0?q=80&w=1200&auto=format&fit=crop", seats: 7, transmission: "Manual", ac: true, luggage: 3, category: "Van", pricePerDay: 3500, available: true, fuel: 'Petrol', tags: ["Budget", "Comfort"] },
  { id: 3, name: "Hyundai Verna", image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop", seats: 5, transmission: "Automatic", ac: true, luggage: 2, category: "Sedan", pricePerDay: 3000, available: true, fuel: 'Petrol', tags: ["City", "Business"] },
  { id: 4, name: "Force Traveller 17 Seater", image: "https://images.unsplash.com/photo-1549399542-7e4f2f69b4bc?q=80&w=1200&auto=format&fit=crop", seats: 17, transmission: "Manual", ac: true, luggage: 10, category: "Minibus", pricePerDay: 7800, available: true, fuel: 'Diesel', tags: ["Group", "Tour"] },
  { id: 5, name: "Mahindra XUV700", image: "https://images.unsplash.com/photo-1628074531331-1b2f855b7113?q=80&w=1200&auto=format&fit=crop", seats: 7, transmission: "Automatic", ac: true, luggage: 4, category: "SUV", pricePerDay: 5200, available: false, fuel: 'Diesel', tags: ["Premium"] },
  { id: 6, name: "Toyota Etios", image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop", seats: 4, transmission: "Manual", ac: true, luggage: 2, category: "Sedan", pricePerDay: 2400, available: true, fuel: 'Petrol', tags: ["Budget"] },
  { id: 7, name: "Tempo Traveller 12 Seater", image: "https://images.unsplash.com/photo-1493236296276-d17357e288a3?q=80&w=1200&auto=format&fit=crop", seats: 12, transmission: "Manual", ac: true, luggage: 6, category: "Minibus", pricePerDay: 6500, available: true, fuel: 'Diesel', tags: ["Group", "Tour"] },
  { id: 8, name: "Hyundai Creta", image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1200&auto=format&fit=crop", seats: 5, transmission: "Automatic", ac: true, luggage: 3, category: "SUV", pricePerDay: 3800, available: true, fuel: 'Petrol', tags: ["Popular"] },
];

const Gallery: React.FC = () => {
  const [view, setView] = useState<VehicleView>('grid');
  const [sort, setSort] = useState<VehicleSort>('popular');
  const [category, setCategory] = useState<string>("");
  const [selected, setSelected] = useState<Vehicle | null>(null);

  const categories = useMemo(() => Array.from(new Set(vehiclesSeed.map(v => v.category))), []);

  const items = useMemo(() => {
    let list = [...vehiclesSeed];
    if (category) list = list.filter(v => v.category === category);
    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.pricePerDay - b.pricePerDay); break;
      case 'price-desc':
        list.sort((a, b) => b.pricePerDay - a.pricePerDay); break;
      case 'seats-desc':
        list.sort((a, b) => b.seats - a.seats); break;
      default:
        list.sort((a, b) => Number(b.available) - Number(a.available));
    }
    return list;
  }, [sort, category]);

  const onBook = (v: Vehicle) => {
    alert(`Requesting booking for: ${v.name}`);
  };

  return (
    <section className="pt-20 md:pt-24 pb-14 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Vehicles" subtitle="Choose from our curated fleet—optimized for comfort, safety, and style" align="left" />

        {/* Toolbar */}
        <VehicleToolbar
          categories={categories}
          activeCategory={category}
          onCategoryChange={setCategory}
          view={view}
          onViewChange={setView}
          sort={sort}
          onSortChange={setSort}
          className="mb-4 md:mb-6"
        />

        {/* Grid/List */}
        <VehicleGrid items={items} view={view} onBook={onBook} onDetails={setSelected} />
      </div>
      <VehicleDetailsModal open={!!selected} onClose={() => setSelected(null)} vehicle={selected} />
    </section>
  );
};

export default Gallery;
