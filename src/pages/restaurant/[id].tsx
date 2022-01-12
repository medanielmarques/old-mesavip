import { createContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Box } from '@chakra-ui/react';
import { ParsedUrlQuery } from 'querystring';

import { Topbar } from 'components/pages/Restaurants/Topbar';
import { Banner } from 'components/pages/Restaurants/Banner';
import { Restaurant as IRestaurant } from 'interfaces/restaurant';
import { api } from 'services/api';

export const RestaurantContext = createContext({} as IRestaurant);

interface RestaurantProps {
  restaurant: IRestaurant;
}

export default function Restaurant(props: RestaurantProps) {
  const { restaurant } = props;

  return (
    <RestaurantContext.Provider value={{ ...restaurant }}>
      <Box m='0 150px' w={800}>
        <Topbar />

        <Banner />
      </Box>
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

  return {
    props: {
      restaurant,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
