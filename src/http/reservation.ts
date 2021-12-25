import { Reservation, ReservationsType } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

interface rateReservation {
  reservation_id: string;
  rating: number;
  comment: string;
}

export async function CancelReservation(reservation_id: string) {
  await api.delete(`reservations/cancel/${reservation_id}`);
}

export async function RateReservation(rating: rateReservation) {
  await api.post('ratings/create', { rating });
}

export async function getPastReservations(): Promise<Reservation[]> {
  return api
    .get<ReservationsType>('reservations/list-past')
    .then((response) => {
      return response.data.pastReservations;
    });
}

export async function getFollowingReservations(): Promise<Reservation[]> {
  return api
    .get<ReservationsType>('reservations/list-following')
    .then((response) => {
      return response.data.followingReservations;
    });
}
