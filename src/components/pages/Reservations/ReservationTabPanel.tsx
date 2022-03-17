import { Box, Grid, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { ReservationCard } from './ReservationCard';
import { ReservationCardSkeleton } from 'components/Feedback/Skeleton/ReservationCardSkeleton';

import { Reservation } from 'types/reservation';

interface ReservationTabPanelProps {
  reservations: Reservation[];
  isLoading: boolean;
  isFetching: boolean;
}

export function ReservationTabPanel({
  reservations,
  isLoading,
  isFetching,
}: ReservationTabPanelProps) {
  if (!reservations.length || !reservations) {
    return (
      <Text w='60' mx='auto'>
        No reservations were found!
      </Text>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Box
        w={{
          base: '384px',
          md: '792px',
          '2xl': '1300px',
        }}
        mx='auto'
        display='table'
      >
        {isLoading || isFetching ? (
          <ReservationCardSkeleton />
        ) : (
          <Grid templateColumns='repeat(auto-fill, minmax(384px, 1fr))' gap={6}>
            {reservations.map((reservation) => (
              <ReservationCard key={reservation.id} reservation={reservation} />
            ))}
          </Grid>
        )}
      </Box>
    </motion.div>
  );
}
