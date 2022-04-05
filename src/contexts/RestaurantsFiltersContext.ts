import { createContext } from 'react';

interface RestaurantsFiltersContextData {
  searchRestaurant: string;
  selectedCuisine: string;
  score: number;
  searchRestaurantSet: (value: string) => void;
  selectedCuisineSet: (value: string) => void;
  scoreSet: (value: number) => void;
}

export const RestaurantsFiltersContext = createContext(
  {} as RestaurantsFiltersContextData
);
