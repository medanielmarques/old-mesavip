import { GetServerSideProps } from 'next';
import { Divider, Stack } from '@chakra-ui/react';

import { RestaurantsWrapper } from './components/restaurants-wrapper';
import { Filters } from './components/filters';
import { RestaurandCardSkeleton } from 'core/feedback/skeleton';
import { ErrorMessage } from './components/error-message';
import { TotalRestaurantsText } from './components/total-restaurants-text';
import { RestaurantCard } from './components/restaurant-card';

import { Restaurant } from 'types';
import { getRestaurants } from 'services/queries/get-restaurants';
import { useRestaurants } from './hooks/use-restaurants';

interface RestaurantsProps {
  initialData: Restaurant[];
}

export default function Home({ initialData }: RestaurantsProps) {
  const { restaurants, isLoading, isFetching, error } =
    useRestaurants(initialData);

  return (
    <RestaurantsWrapper>
      <Filters />

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
