import { api } from 'services/api';
import { Restaurant } from 'types';

export async function getRestaurants() {
  const { data: restaurants } = await api.get<Restaurant[]>(
    'restaurants/list-all'
  );

  return { restaurants };
}

export async function getRestaurantsIdPaths() {
  const { restaurants } = await getRestaurants();

  const paths = restaurants.map((restaurant) => {
    return {
      params: {
        id: restaurant.id,
      },
    };
  });

  return { paths };
}
