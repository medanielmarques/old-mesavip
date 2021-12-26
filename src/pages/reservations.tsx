import { createContext, useEffect, useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';

import { ReservationCard } from 'src/components/ReservationCard';
import { Reservation } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

interface ReservationContextData {
  refreshPastReservations(): void;
  refreshFollowingReservations(): void;
}

export const ReservationContext = createContext({} as ReservationContextData);

export default function Reservations() {
  const [pastReservations, pastReservationsSet] = useState([] as Reservation[]);
  const [followingReservations, followingReservationsSet] = useState(
    [] as Reservation[]
  );

  const [refreshReservations, refreshReservationsSet] = useState({
    past: false,
    following: false,
  });

  function refreshPastReservations() {
    refreshReservationsSet({
      ...refreshReservations,
      past: !refreshReservations.past,
    });
  }

  function refreshFollowingReservations() {
    refreshReservationsSet({
      ...refreshReservations,
      following: !refreshReservations.following,
    });
  }

  useEffect(() => {
    api.get('reservations/list-past').then((response) => {
      pastReservationsSet(response.data);
    });
  }, [refreshReservations.past]);

  useEffect(() => {
    api.get('reservations/list-following').then((response) => {
      followingReservationsSet(response.data);
    });
  }, [refreshReservations.following]);

  return (
    <ReservationContext.Provider
      value={{ refreshPastReservations, refreshFollowingReservations }}
    >
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
          {followingReservations &&
            followingReservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
        </Grid>

        <Text fontSize='20px' m='30px 0' align='center'>
          Past Reservations
        </Text>
        <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
          {pastReservations &&
            pastReservations.map((reservation) => (
              <ReservationCard
                key={reservation.id}
                reservation={reservation}
                past
              />
            ))}
        </Grid>
      </Box>
    </ReservationContext.Provider>
  );
}
