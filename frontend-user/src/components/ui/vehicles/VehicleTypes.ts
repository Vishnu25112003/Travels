export type Vehicle = {
  id: string | number;
  name: string;
  image: string;
  seats: number;
  transmission: 'Manual' | 'Automatic';
  ac: boolean;
  luggage?: number;
  category: 'SUV' | 'Sedan' | 'Van' | 'Minibus' | 'Hatchback' | string;
  pricePerDay: number;
  available: boolean;
  fuel?: 'Petrol' | 'Diesel' | 'Hybrid' | 'Electric';
  tags?: string[];
};

export type VehicleView = 'grid' | 'list';
export type VehicleSort = 'popular' | 'price-asc' | 'price-desc' | 'seats-desc';
