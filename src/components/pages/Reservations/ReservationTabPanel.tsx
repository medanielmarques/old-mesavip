import { useContext } from 'react';
import { Box, Grid } from '@chakra-ui/react';

import { ReservationCard } from 'components/ReservationCard';
import { ReservationsContext } from 'hooks/useReservationsContext';

export function ReservationTabPanel() {
  const { reservations } = useContext(ReservationsContext);

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
      <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
        {reservations.map((reservation) => (
          <ReservationCard key={reservation.id} reservation={reservation} />
        ))}
      </Grid>
    </Box>
  );
}
