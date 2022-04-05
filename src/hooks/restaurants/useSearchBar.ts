import { useContext, useState } from 'react';
import { RestaurantsFiltersContext } from 'contexts/RestaurantsFiltersContext';

export function useSearchBar() {
  const { searchRestaurant, searchRestaurantSet } = useContext(
    RestaurantsFiltersContext
  );

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
