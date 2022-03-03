import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { ReservationTabPanel } from '../components/pages/Reservations/ReservationTabPanel';
import { TabList } from 'components/pages/Reservations/TabList';

import { api } from 'services/api';
import { Reservation } from 'interfaces/reservation';

interface ReservationsProps {
  initialData: Reservation[];
}

export default function Reservations({ initialData }: ReservationsProps) {
  const {
    data: followingReservations,
    isLoading: isLoadingFollowing,
    isFetching: isFetchingFollowing,
  } = useQuery(
    'following-reservations',
    async () => api.get('reservations/list-following').then((res) => res.data),
    { initialData, enabled: false }
  );

  const {
    data: pastReservations,
    isLoading: isLoadingPast,
    isFetching: isFetchingPast,
  } = useQuery(
    'past-reservations',
    async () => api.get('reservations/list-past').then((res) => res.data),
    { enabled: false }
  );

  return (
    <Tabs isFitted isLazy lazyBehavior='keepMounted' minH='100vh'>
      <TabList />

      <TabPanels>
        <TabPanel>
          {followingReservations && (
            <ReservationTabPanel
              reservations={followingReservations}
              isLoading={isLoadingFollowing}
              isFetching={isFetchingFollowing}
            />
          )}
        </TabPanel>

        <TabPanel>
          {pastReservations && (
            <ReservationTabPanel
              reservations={pastReservations}
              isLoading={isLoadingPast}
              isFetching={isFetchingPast}
            />
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);

  if (!cookies['mesavip.token']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const initialData = await api
    .get<Reservation[]>('reservations/list-following', {
      headers: { Authorization: `Bearer ${cookies['mesavip.token']}` },
    })
    .then((res) => res.data);

  return {
    props: {
      initialData,
    },
  };
};
