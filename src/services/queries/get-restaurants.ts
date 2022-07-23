import { api } from 'services/api';
import { Restaurant } from 'types';
import { RestaurantFilters } from 'pages/home/hooks/use-restaurants';

export async function getRestaurants(filters?: RestaurantFilters) {
  const { data: restaurants } = await api.get<Restaurant[]>(
    'restaurants/list-all',
    { params: filters }
  );

  return restaurants;
}

export async function getRestaurantsIdPaths() {
  const restaurants = await getRestaurants();

  const paths = restaurants.map((restaurant) => {
    return {
      params: {
        id: restaurant.id,
      },
    };
  });

  return { paths };
}
