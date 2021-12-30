export interface Reservation {
  id: string;
  restaurant_id: string;
  canceled?: boolean;
  rated?: boolean;
  restaurant: string;
  day: string;
  month: string;
  time: string;
  avg_rating: number;
  city: string;
  address: string;
}
