import { useState } from 'react';
import { useQuery } from 'react-query';

import { api } from 'services/api';
import { Cuisine } from 'types';
import { useRestaurantFiltersStore } from './use-restaurants';

export function useCuisines() {
  const { updateCuisine } = useRestaurantFiltersStore();
  const [cuisines, cuisinesSet] = useState([] as Cuisine[]);

  useQuery(
    'cuisines',
    async () => {
      return api.get<Cuisine[]>('restaurants/cuisines/list').then((res) => {
        let cuisines = res.data;

        cuisines.map((cuisine) => {
          return {
            ...cuisine,
            isChecked: false,
          };
        });

        cuisinesSet(cuisines);
      });
    },
    { refetchOnWindowFocus: false }
  );

  function handleSetCuisine(cuisine: Cuisine) {
    updateCuisine(!cuisine.isChecked ? cuisine.name : '');
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
