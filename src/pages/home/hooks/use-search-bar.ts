import { useState } from 'react';
import { useRestaurantsFiltersCtx } from 'contexts';

export function useSearchBar() {
  const { searchRestaurant, searchRestaurantSet } = useRestaurantsFiltersCtx();

  const [search, searchSet] = useState('');

  function handleClick() {
    if (searchRestaurant) {
      clearSearch();
    } else {
      searchRestaurantSet(search);
    }
  }

  function clearSearch() {
    searchSet('');
    searchRestaurantSet('');
  }

  return { search, searchSet, searchRestaurant, handleClick };
}
