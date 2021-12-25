import { useEffect, useState } from 'react';
import { Reservation, ReservationsType } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

export function useFetchReservations() {
  const [pastReservations, pastReservationsSet] = useState([] as Reservation[]);
  const [followingReservations, followingReservationsSet] = useState(
    [] as Reservation[]
  );

  useEffect(() => {
    api.get<ReservationsType>('reservations/list').then((response) => {
      pastReservationsSet(response.data.pastReservations);
    });
  }, [pastReservations]);

  useEffect(() => {
    api.get<ReservationsType>('reservations/list').then((response) => {
      followingReservationsSet(response.data.followingReservations);
    });
  }, [followingReservations]);

  return { pastReservations, followingReservations };
}
