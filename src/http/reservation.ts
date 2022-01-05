import { Rating } from 'interfaces/rating';
import { api } from 'services/api';

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

export async function ListRatingById(reservation_id: string) {
  return await api
    .get(`ratings/list-by-id/${reservation_id}`)
    .then((response) => response.data);
}
