import { useReducer } from 'react';
import { RestaurantFilters } from './use-restaurants';

type FiltersActionTypes = 'name' | 'cuisine' | 'avg_rating';

export interface FiltersAction {
  type: FiltersActionTypes;
  payload: RestaurantFilters;
}

const filtersReducer = (state: RestaurantFilters, action: FiltersAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'name':
      return { ...state, name: payload.name };

    case 'cuisine':
      return { ...state, cuisine: payload.cuisine };

    case 'avg_rating':
      return { ...state, avg_rating: payload.avg_rating };

    default:
      return state;
  }
};

export function useFiltersReducer() {
  const [filters, dispatchFilters] = useReducer(filtersReducer, {});

  return { filters, dispatchFilters };
}
