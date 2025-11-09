export type Destination = {
  id: string | number;
  name: string;
  region: string; // e.g., Kerala, Goa, Rajasthan
  image: string;
  description: string;
  highlights: string[]; // quick bullets
  bestTime: string; // e.g., Oct–Mar
  days: number; // ideal days
  rating: number; // 0..5
  priceHint?: string; // e.g., Budget, Premium
  tags?: string[];
};

export type DestinationView = 'grid' | 'list';
export type DestinationSort = 'popular' | 'rating-desc' | 'days-asc' | 'name-asc';
