import {
  Box,
  Grid,
  Tab,
  TabPanel,
  TabPanelProps,
  Text,
  TabList as ChakraTabList,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

import { ReservationCardSkeleton } from 'core/feedback/skeleton';
import { ReservationCard } from './reservation-card';

import { ReservationType, useReservations } from 'pages/reservations/hooks';
import { Reservation } from 'types';

interface ReservationsTabPanelProps extends TabPanelProps {
  SSRReservations: Reservation[];
  type: ReservationType;
}

export function ReservationsTabPanel({
  SSRReservations,
  type,
  ...rest
}: ReservationsTabPanelProps) {
  const {
    data: reservations,
    isLoading,
    isFetching,
  } = useReservations({
    type,
    options: {
      enabled: false,
      initialData: SSRReservations,
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

function TabPanelWrapper({ children, ...rest }: TabPanelProps) {
  return (
    <TabPanel {...rest}>
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
          {children}
        </Box>
      </motion.div>
    </TabPanel>
  );
}

export function TabList() {
  return (
    <ChakraTabList
      width={{
        base: '288px',
        md: '594px',
        '2xl': '975px',
      }}
      mx='auto'
      my='7'
    >
      <Tab>Following Reservations</Tab>
      <Tab>Past Reservations</Tab>
    </ChakraTabList>
  );
}

function NoReservationsWereFound() {
  return (
    <Text w='60' mx='auto'>
      No reservations were found!
    </Text>
  );
}
