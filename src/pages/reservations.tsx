import { createContext, useEffect, useState } from 'react';
import { Box, Button, Grid, Text } from '@chakra-ui/react';

import { ReservationCard } from 'src/components/ReservationCard';
import { Reservation, ReservationsType } from 'src/interfaces/reservation';
import { api } from 'src/services/api';
import { useReservationTests } from 'src/hooks/useReservationsTest';

interface IReservationContext {
  toggleRefetchPastReservations(): void;
  toggleRefetchFollowingReservations(): void;
}

export default function Reservations() {
  const { pastReservations, followingReservations } = useReservationTests();

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
  );
}
