import { GetServerSideProps } from 'next';
import { TabPanels, Tabs } from '@chakra-ui/react';

import { Footer } from 'core/footer';
import {
  TabList,
  FollowingReservationsTabPanel,
  PastReservationsTabPanel,
} from './components/tabs';

import { Reservation } from 'types';
import { getReservationsSSR } from 'services/queries/get-reservations';
import { verifyAuthOnPrivatePages } from 'services/verify-auth';
import { parseCookies } from 'nookies';

interface ReservationsProps {
  SSRFollowingReservations: Reservation[];
  SSRPastReservations: Reservation[];
}

export default function Reservations({
  SSRFollowingReservations,
  SSRPastReservations,
}: ReservationsProps) {
  return (
    <>
      <Tabs isFitted isLazy lazyBehavior='keepMounted' minH='100vh'>
        <TabList />

        <TabPanels>
          <FollowingReservationsTabPanel
            SSRFollowingReservations={SSRFollowingReservations}
          />

          <PastReservationsTabPanel SSRPastReservations={SSRPastReservations} />
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
        destination: '/home',
        permanent: false,
      },
    };
  }

  const SSRFollowingReservations = await getReservationsSSR({
    type: 'following',
    ctx,
  });

  const SSRPastReservations = await getReservationsSSR({
    type: 'past',
    ctx,
  });

  return {
    props: {
      SSRFollowingReservations,
      SSRPastReservations,
    },
  };
};
