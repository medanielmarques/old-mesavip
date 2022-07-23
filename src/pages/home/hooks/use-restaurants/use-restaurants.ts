import { useQuery } from 'react-query';
import { getRestaurants } from 'services/queries/get-restaurants';
import { Restaurant } from 'types';
import { useFiltersReducer } from './use-filters-reducer';

export interface RestaurantFilters {
  name?: string;
  cuisine?: string;
  avg_rating?: number;
}

export function useRestaurants(initialData: Restaurant[]) {
  const { filters, dispatchFilters } = useFiltersReducer();

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
    filters,
    dispatchFilters,
    restaurants,
    isLoading,
    isFetching,
    error,
  };
}
