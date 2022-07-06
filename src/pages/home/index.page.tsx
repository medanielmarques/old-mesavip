import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Divider, Stack } from '@chakra-ui/react';

import { ErrorMessage } from './components/error-message';
import { RestaurantCard } from './components/restaurant-card';
import { TotalRestaurantsText } from './components/total-restaurants-text';
import { RestaurantsWrapper } from './components/restaurants-wrapper';
import { Filters } from './components/filters';

import { Restaurant } from 'types';
import { queryClient } from 'services/query-client';
import { RestaurantsFiltersContext } from 'contexts';
import { getRestaurants, useRestaurants } from './hooks/use-restaurants';
import { RestaurandCardSkeleton } from 'core/feedback/skeleton/restaurant-card-skeleton';

interface RestaurantsProps {
  initialData: Restaurant[];
}

export default function Home({ initialData }: RestaurantsProps) {
  const [searchRestaurant, searchRestaurantSet] = useState('');
  const [selectedCuisine, selectedCuisineSet] = useState('');
  const [score, scoreSet] = useState(2);

  const {
    data: restaurants,
    isLoading,
    isFetching,
    error,
  } = useRestaurants({
    filters: {
      name: searchRestaurant,
      cuisine: selectedCuisine,
      avg_rating: score,
    },
    options: {
      enabled: false,
      initialData,
    },
  });

  useEffect(() => {
    queryClient.fetchQuery('list-restaurants');
  }, [searchRestaurant, selectedCuisine, score]);

  return (
    <RestaurantsWrapper>
      <RestaurantsFiltersContext.Provider
        value={{
          searchRestaurant,
          searchRestaurantSet,
          selectedCuisine,
          selectedCuisineSet,
          score,
          scoreSet,
        }}
      >
        <Filters />
      </RestaurantsFiltersContext.Provider>

      {isLoading || isFetching ? (
        <RestaurandCardSkeleton />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <Stack spacing={6}>
          <TotalRestaurantsText length={restaurants?.length} />

          {restaurants?.map((restaurant) => (
            <Stack spacing={4} key={restaurant.id}>
              <RestaurantCard restaurant={restaurant} />
              <Divider display={{ base: 'block', md: 'none' }} />
            </Stack>
          ))}
        </Stack>
      )}
    </RestaurantsWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const initialData = await getRestaurants({ avg_rating: 2 });

  return {
    props: {
      initialData,
    },
  };
};
