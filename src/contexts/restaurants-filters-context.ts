import { RestaurantFilters } from 'pages/home/hooks/use-restaurants';
import { FiltersAction } from 'pages/home/hooks/use-restaurants';
import { createContext, Dispatch, useContext } from 'react';

interface RestaurantsFiltersContextData {
  filters: RestaurantFilters;
  dispatchFilters: Dispatch<FiltersAction>;
}

export const RestaurantsFiltersContext = createContext(
  {} as RestaurantsFiltersContextData
);

export const useRestaurantFiltersCtx = () =>
  useContext(RestaurantsFiltersContext);
