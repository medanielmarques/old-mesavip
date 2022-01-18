import { createContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Flex } from '@chakra-ui/react';
import { ParsedUrlQuery } from 'querystring';

import { Topbar } from 'components/pages/Restaurant/Topbar';
import { Image as Banner } from 'components/pages/Restaurant/Image';
import { BottomBar } from 'components/pages/Restaurant/BottomBar';
import { Restaurant as IRestaurant } from 'interfaces/restaurant';
import { api } from 'services/api';

export const RestaurantContext = createContext({} as IRestaurant);

interface RestaurantProps {
  restaurant: IRestaurant;
  banner_url: string;
}

export default function Restaurant(props: RestaurantProps) {
  const { restaurant, banner_url } = props;

  return (
    <RestaurantContext.Provider value={{ ...restaurant }}>
      <Flex direction='column' gap='4' m='0 150px' w={800}>
        <Topbar />

        <Banner image_url={banner_url} />

        <BottomBar />

        {/* Side Bar goes here somewhere */}
        {/* The reservation Component */}
        {/* Basically the most important thing on this app */}
      </Flex>
    </RestaurantContext.Provider>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('restaurants');

  const paths = data.map((restaurant: IRestaurant) => {
    return {
      params: {
        id: restaurant.id,
      },
    };
  });

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
  const { data: restaurant } = await api.get(`restaurants/list-by-id/${id}`);

  const banner_url = await api
    .get(`files/list/${id}/banner`)
    .then((response) => response.data[0].path);

  return {
    props: {
      restaurant,
      banner_url,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
