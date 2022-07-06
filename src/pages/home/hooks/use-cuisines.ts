import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRestaurantsFiltersCtx } from 'contexts';
import { api } from 'services/api';
import { Cuisine } from 'types';

export function useCuisines() {
  const { selectedCuisineSet } = useRestaurantsFiltersCtx();
  const [cuisines, cuisinesSet] = useState([] as Cuisine[]);

  useQuery(
    'cuisines',
    async () => {
      return api.get<Cuisine[]>('restaurants/cuisines/list').then((res) => {
        let cuisines = res.data;

        cuisines.map((e) => {
          return {
            ...e,
            isChecked: false,
          };
        });

        cuisinesSet(cuisines);
      });
    },
    { refetchOnWindowFocus: false }
  );

  function handleSetCuisine(cuisine: Cuisine) {
    if (!cuisine.isChecked) {
      selectedCuisineSet(cuisine.name);
    } else {
      selectedCuisineSet('');
    }
  }

  function handleClick(index: number) {
    const newCuisines = cuisines.map((cuisine, i) => {
      if (i === index) {
        handleSetCuisine(cuisine);

        return {
          ...cuisine,
          isChecked: !cuisine.isChecked,
        };
      }

      return {
        ...cuisine,
        isChecked: false,
      };
    });

    cuisinesSet(newCuisines);
  }

  return { cuisines, handleClick };
}
