import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { ReservationTabPanel } from './components/reservation-tab-panel';
import { TabList } from './components/tab-list';
import { Footer } from 'core/footer';

import { api } from 'services/api';
import { Reservation } from 'types';

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
    async () =>
      api
        .get('reservations/list-following')
        .then((res) => res.data)
        .catch((e) => console.error(e)),
    { initialData, enabled: false }
  );

  const {
    data: pastReservations,
    isLoading: isLoadingPast,
    isFetching: isFetchingPast,
  } = useQuery(
    'past-reservations',
    async () =>
      api
        .get('reservations/list-past')
        .then((res) => res.data)
        .catch((e) => console.error(e)),
    { enabled: false }
  );

  return (
    <>
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
      <Footer />
    </>
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
    .then((res) => res.data)
    .catch((e) => console.error(e));

  return {
    props: {
      initialData: initialData ?? [],
    },
  };
};
