import { useState } from 'react';
import { useRestaurantFiltersStore } from './use-restaurants';

export function useSearchBar() {
  const { filters, updateRestaurant } = useRestaurantFiltersStore();
  const [search, searchSet] = useState('');

  function handleClick() {
    if (filters.name) {
      clearSearch();
    } else {
      updateRestaurant(search);
    }
  }

  function clearSearch() {
    searchSet('');
    updateRestaurant('');
  }

  return { search, searchSet, searchRestaurant: filters.name, handleClick };
}
