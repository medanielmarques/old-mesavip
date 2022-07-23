import { useState } from 'react';
import { useRestaurantFiltersCtx } from 'contexts';

export function useSearchBar() {
  const { filters, dispatchFilters } = useRestaurantFiltersCtx();
  const [search, searchSet] = useState('');

  function handleClick() {
    if (filters.name) {
      clearSearch();
    } else {
      dispatchFilters({ type: 'name', payload: { name: search } });
    }
  }

  function clearSearch() {
    searchSet('');
    dispatchFilters({ type: 'name', payload: { name: '' } });
  }

  return { search, searchSet, searchRestaurant: filters.name, handleClick };
}
