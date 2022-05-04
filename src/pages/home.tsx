import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Divider, Stack } from '@chakra-ui/react';

import { ErrorMessage } from 'components/RestaurantsList/ErrorMessage';
import { RestaurandCardSkeleton } from 'components/Feedback/Skeleton/RestaurantCardSkeleton';
import { RestaurantCard } from 'components/RestaurantsList/RestaurantCard';
import { TotalRestaurantsText } from 'components/RestaurantsList/TotalRestaurantsText';
import { Wrapper } from 'components/RestaurantsList/Wrapper';
import { Filters } from 'components/RestaurantsList/Filters';

import { Restaurant } from 'types/restaurant';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { RestaurantsFiltersContext } from 'contexts/RestaurantsFiltersContext';
import { useRestaurants } from 'hooks/restaurants/useRestaurants';

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
    <Wrapper>
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
    </Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: initialData } = await api.get<Restaurant[]>(
    'restaurants/list-all',
    {
      params: {
        avg_rating: 2,
      },
    }
  );

  return {
    props: {
      initialData,
    },
  };
};
