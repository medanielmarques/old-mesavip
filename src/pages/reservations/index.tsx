import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { ReservationTabPanel } from './components/ReservationTabPanel';
import { TabList } from './components/TabList';
import { ReservationsProvider } from 'hooks/useReservationsContext';

export default function Reservations() {
  return (
    <Tabs isFitted>
      <TabList />

      <TabPanels>
        <TabPanel>
          <ReservationsProvider reservationType='following'>
            <ReservationTabPanel />
          </ReservationsProvider>
        </TabPanel>

        <TabPanel>
          <ReservationsProvider reservationType='past'>
            <ReservationTabPanel />
          </ReservationsProvider>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
