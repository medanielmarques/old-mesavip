import { useQuery, UseQueryOptions } from 'react-query';
import { api } from 'services/api';
import { Restaurant } from 'types';

type RestaurantFilters = {
  name?: string;
  cuisine?: string;
  avg_rating?: number;
};

type useRestaurantsProps = {
  filters: RestaurantFilters;
  options?: UseQueryOptions<Restaurant[]>;
};

export async function getRestaurants(filters?: RestaurantFilters) {
  return api
    .get<Restaurant[]>(`restaurants/list-all`, {
      params: filters,
    })
    .then((res) => res.data);
}

export function useRestaurants({ filters, options }: useRestaurantsProps) {
  return useQuery<Restaurant[]>(
    'list-restaurants',
    () => getRestaurants(filters),
    options
  );
}
