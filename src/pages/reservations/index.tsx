import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { ReservationTabPanel } from './components/ReservationTabPanel';
import { TabList } from './components/TabList';
import { FollowingReservationsProvider } from 'src/hooks/useFollowingReservations';
import { PastReservationsProvider } from 'src/hooks/usePastReservations';

export default function Reservations() {
  return (
    <Tabs isFitted>
      <TabList />

      <TabPanels>
        <TabPanel>
          <FollowingReservationsProvider>
            <ReservationTabPanel />
          </FollowingReservationsProvider>
        </TabPanel>

        <TabPanel>
          <PastReservationsProvider>
            <ReservationTabPanel past />
          </PastReservationsProvider>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
