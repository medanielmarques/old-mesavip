import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex } from '@chakra-ui/react';
import { ParsedUrlQuery } from 'querystring';

import { Topbar } from './components/top-bar';
import { Image as Banner } from './components/image';
import { BottomBar } from './components/bottom-bar';
import { BookingWidget } from './components/booking-widget';
import { Footer } from 'core/footer';

import { Restaurant as IRestaurant } from 'types';
import { RestaurantContext } from './hooks';
import { getRestaurant } from 'services/queries/get-restaurant';
import { getRestaurantsIdPaths } from 'services/queries/get-restaurants';

interface RestaurantProps {
  restaurant: IRestaurant;
  banner_url: string;
}

export default function Restaurant(props: RestaurantProps) {
  const { restaurant, banner_url } = props;

  return (
    <RestaurantContext.Provider value={{ ...restaurant }}>
      <Flex
        direction={['column', 'column', 'column', 'column', 'row']}
        w={[350, 450, 600, 800, 1185]}
        minH='100vh'
        mx='auto'
      >
        <Flex direction='column' gridGap='6' mx={{ base: 'auto', xl: 'auto' }}>
          <Topbar />

          <Banner image_url={banner_url} alt='Banner' />

          <BottomBar />
        </Flex>

        <BookingWidget />
      </Flex>
      <Footer />
    </RestaurantContext.Provider>
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
