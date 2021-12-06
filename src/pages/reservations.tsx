import { useEffect, useState } from 'react';
import { Stack } from '@chakra-ui/react';

import ReservationCard from 'src/components/ReservationCard';
import { Reservation, ReservationType } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

export default function Reservations() {
  const [pastReservations, pastReservationsSet] = useState([] as Reservation[]);
  const [followingReservations, followingReservationsSet] = useState(
    [] as Reservation[]
  );

  useEffect(() => {
    api.get<ReservationType>('reservations/list').then((response) => {
      pastReservationsSet(response.data.pastReservation);
      followingReservationsSet(response.data.followingReservation);
    });
  }, []);

  return (
    <Stack spacing='5'>
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
    </Stack>
  );
}
