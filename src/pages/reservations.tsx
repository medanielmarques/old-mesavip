import { useEffect, useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';

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
      pastReservationsSet(response.data.pastReservations);
      followingReservationsSet(response.data.followingReservations);
    });
  }, []);

  return (
    <Box
      m='0 auto'
      w={{
        base: '384px',
        md: '792px',
        lg: '792px',
        xl: '792px',
        '2xl': '1300px',
      }}
      display='table'
    >
      <Text fontSize='20px' m='30px 0' align='center'>
        Following Reservations
      </Text>
      <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
        {followingReservations.map((reservation) => (
          <ReservationCard />
        ))}
      </Grid>

      <Text fontSize='20px' m='30px 0' align='center'>
        Past Reservations
      </Text>
      <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
        {pastReservations.map((reservation) => (
          <ReservationCard />
        ))}
      </Grid>
    </Box>
  );
}
