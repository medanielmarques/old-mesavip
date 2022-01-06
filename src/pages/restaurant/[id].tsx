import { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { Restaurant as IRestaurant } from 'interfaces/restaurant';
import { api } from 'services/api';

export default function Restaurant(restaurant: IRestaurant) {
  return <div>oi</div>;
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
