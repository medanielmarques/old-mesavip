import { api } from 'src/services/api';

interface rateReservation {
  reservation_id: string;
  restaurant_id: string;
  rating: number;
  comment: string;
}

export async function CancelReservation(reservation_id: string) {
  await api.delete(`reservations/cancel/${reservation_id}`);
}

export async function RateReservation(rating: rateReservation) {
  await api.post('ratings/create', { rating });
}
