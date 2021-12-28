import { Box, Grid } from '@chakra-ui/react';
import { useContext } from 'react';
import { ReservationCard } from 'src/components/ReservationCard';
import { FollowingReservationsContext } from 'src/hooks/useFollowingReservations';
import { PastReservationsContext } from 'src/hooks/usePastReservations';

interface ReservationTabPanelProps {
  past?: boolean;
}

export function ReservationTabPanel({ past }: ReservationTabPanelProps) {
  const { followingReservations } = useContext(FollowingReservationsContext);
  const { pastReservations } = useContext(PastReservationsContext);

  const reservations = !!past ? pastReservations : followingReservations;

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
