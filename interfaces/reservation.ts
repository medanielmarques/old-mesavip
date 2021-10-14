export interface Reservation {
  id: string;
  restaurant: string;
  day: string;
  month: string;
  time: string;
  avg_rating: string;
  city?: string;
  address?: string;
}
