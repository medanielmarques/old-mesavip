import { createContext, useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex, FlexProps } from '@chakra-ui/react';
import { ParsedUrlQuery } from 'querystring';

import { Topbar } from './components/top-bar';
import { Image as Banner } from './components/image';
import { BottomBar } from './components/bottom-bar';
import { BookingWidget } from './components/booking-widget';
import { Footer } from 'core/footer';

import { Restaurant } from 'types';
import { getRestaurant } from 'services/queries/get-restaurant';
import { getRestaurantsIdPaths } from 'services/queries/get-restaurants';

interface RestaurantProps {
  restaurant: Restaurant;
  banner_url: string;
}

export const RestaurantContext = createContext({} as Restaurant);
export const useRestaurantCtx = () => useContext(RestaurantContext);

export default function RestaurantPage({
  restaurant,
  banner_url,
}: RestaurantProps) {
  return (
    <RestaurantContext.Provider value={{ ...restaurant }}>
      <RestaurantWrapper>
        <Flex direction='column' gridGap='6' mx={{ base: 'auto', xl: 'auto' }}>
          <Topbar />
          <Banner src={banner_url} alt='Banner' />
          <BottomBar />
        </Flex>

        <BookingWidget />
      </RestaurantWrapper>

      <Footer />
    </RestaurantContext.Provider>
  );
}

function RestaurantWrapper({ children }: FlexProps) {
  return (
    <Flex
      direction={['column', 'column', 'column', 'column', 'row']}
      w={[350, 450, 600, 800, 1185]}
      minH='100vh'
      mx='auto'
    >
      {children}
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { paths } = await getRestaurantsIdPaths();

  return {
    paths,
    fallback: 'blocking',
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as Params;

  const { restaurant, banner_url } = await getRestaurant(id);

  return {
    props: {
      restaurant,
      banner_url,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
