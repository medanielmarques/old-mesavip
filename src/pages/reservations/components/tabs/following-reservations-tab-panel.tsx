import { Grid, TabPanelProps } from '@chakra-ui/react';

import { NoReservationsWereFound } from '../no-reservations-were-found';
import { TabPanelWrapper } from '.';
import { ReservationCardSkeleton } from 'core/feedback/skeleton';
import { ReservationCard } from '../reservation-card';

import { useReservations } from 'pages/reservations/hooks';
import { Reservation } from 'types';

interface FollowingReservationsTabPanelProps extends TabPanelProps {
  SSRFollowingReservations: Reservation[];
}

export function FollowingReservationsTabPanel({
  SSRFollowingReservations,
  ...rest
}: FollowingReservationsTabPanelProps) {
  const {
    data: reservations,
    isLoading,
    isFetching,
  } = useReservations({
    type: 'following',
    options: {
      enabled: false,
      initialData: SSRFollowingReservations,
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
