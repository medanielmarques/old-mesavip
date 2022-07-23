import { Grid, TabPanelProps } from '@chakra-ui/react';

import { NoReservationsWereFound } from '../no-reservations-were-found';
import { TabPanelWrapper } from '.';
import { ReservationCardSkeleton } from 'core/feedback/skeleton';
import { ReservationCard } from '../reservation-card';

import { useReservations } from '../../hooks';
import { Reservation } from 'types';

interface PastReservationsTabPanel extends TabPanelProps {
  SSRPastReservations: Reservation[];
}

export function PastReservationsTabPanel({
  SSRPastReservations,
  ...rest
}: PastReservationsTabPanel) {
  const {
    data: reservations,
    isLoading,
    isFetching,
  } = useReservations({
    type: 'past',
    options: {
      enabled: false,
      initialData: SSRPastReservations,
    },
  });

  if (!reservations?.length || !reservations) {
    return <NoReservationsWereFound />;
  }

  return (
    <TabPanelWrapper {...rest}>
      {isLoading || isFetching ? (
        <ReservationCardSkeleton />
      ) : (
        <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
          {reservations?.map((reservation) => (
            <ReservationCard key={reservation.id} reservation={reservation} />
          ))}
        </Grid>
      )}
    </TabPanelWrapper>
  );
}
