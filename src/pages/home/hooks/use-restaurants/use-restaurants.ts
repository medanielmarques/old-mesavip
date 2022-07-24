import { useQuery } from 'react-query';
import { getRestaurants } from 'services/queries/get-restaurants';
import { Restaurant } from 'types';
import { useRestaurantFiltersStore } from './restaurant-filters-store';

export function useRestaurants(initialData: Restaurant[]) {
  const { filters } = useRestaurantFiltersStore();

  const {
    data: restaurants,
    isLoading,
    isFetching,
    error,
  } = useQuery<Restaurant[]>(
    ['list-restaurants', filters],
    () => getRestaurants({ avg_rating: 2, ...filters }),
    {
      enabled: !!Object.keys(filters).length,
      initialData,
    }
  );

  return {
    restaurants,
    isLoading,
    isFetching,
    error,
  };
}
