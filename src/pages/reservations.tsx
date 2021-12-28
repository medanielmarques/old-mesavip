import { createContext, useEffect, useState } from 'react';
import {
  Box,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';

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
      <Tabs isFitted>
        <TabList
          width={{
            base: '288px',
            md: '594px',
            lg: '594px',
            xl: '594px',
            '2xl': '975px',
          }}
          m='30px auto'
        >
          <Tab>Following Reservations</Tab>
          <Tab>Past Reservations</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
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
              <Grid
                templateColumns='repeat(auto-fill, minmax(384px, 1fr))'
                gap={6}
              >
                {followingReservations.map((reservation) => (
                  <ReservationCard
                    key={reservation.id}
                    reservation={reservation}
                  />
                ))}
              </Grid>
            </Box>
          </TabPanel>

          <TabPanel>
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
              <Grid
                templateColumns='repeat(auto-fill, minmax(384px, 1fr))'
                gap={6}
              >
                {pastReservations.map((reservation) => (
                  <ReservationCard
                    key={reservation.id}
                    reservation={reservation}
                  />
                ))}
              </Grid>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ReservationContext.Provider>
  );
}
