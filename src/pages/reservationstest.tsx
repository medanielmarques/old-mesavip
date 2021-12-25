import { createContext, useEffect, useState } from 'react';
import { Box, Grid, Text } from '@chakra-ui/react';

import { ReservationCard } from 'src/components/ReservationCard';
import { Reservation, ReservationsType } from 'src/interfaces/reservation';
import { api } from 'src/services/api';
import { usefetchReservations } from 'src/hooks/usefetchReservations';
import { ReservationProvider } from 'src/hooks/useReservations';

interface IReservationContext {
  toggleRefetchPastReservations(): void;
  toggleRefetchFollowingReservations(): void;
}

export const ReservationContext = createContext({} as IReservationContext);

export default function ReservationsTest() {
  return (
    <ReservationProvider>
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
        {/* <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
          {followingReservations.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </Grid>

        <Text fontSize='20px' m='30px 0' align='center'>
          Past Reservations
        </Text>
        <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
          {pastReservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              reservation={reservation}
              past
            />
          ))}
        </Grid> */}
      </Box>
    </ReservationProvider>
  );
}
