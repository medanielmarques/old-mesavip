import { createContext, useEffect, useState } from 'react';
import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { ReservationTabPanel } from './components/ReservationTabPanel';
import { TabList } from './components/TabList';
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
        <TabList />

        <TabPanels>
          <TabPanel>
            <ReservationTabPanel reservations={followingReservations} />
          </TabPanel>

          <TabPanel>
            <ReservationTabPanel reservations={pastReservations} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ReservationContext.Provider>
  );
}
