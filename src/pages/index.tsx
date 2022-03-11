import { GetServerSideProps } from 'next';
import { useState } from 'react';
import { Box, SimpleGrid, Stack } from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { RestaurantCard } from 'components/pages/Restaurants/RestaurantCard';
import { TopBar } from 'components/pages/Restaurants/RestaurantCard/TopBar';
import { ErrorMessage } from 'components/pages/Restaurants/RestaurantCard/ErrorMessage';
import { RestaurandCardSkeleton } from 'components/Feedback/Skeleton/RestaurantCardSkeleton';

import { Restaurant } from 'types/restaurant';
import { api } from 'services/api';

interface RestaurantsProps {
  initialData: Restaurant[];
}

export default function Restaurants({ initialData }: RestaurantsProps) {
  const [searchRestaurant, searchRestaurantSet] = useState('');

  const {
    data: restaurants,
    isLoading,
    error,
  } = useQuery(
    ['get-restaurants', searchRestaurant],
    async () => {
      return api
        .get<Restaurant[]>(`restaurants/${searchRestaurant}`)
        .then((res) => res.data);
    },
    {
      initialData,
      enabled: searchRestaurant ? true : false,
    }
  );

  return (
    <Box
      w={{
        base: '288px',
        md: '606px',
        lg: '904px',
        xl: '1212px',
      }}
      minHeight='100vh'
      mx='auto'
      my='8'
    >
      <Stack spacing={6}>
        {!isLoading && (
          <TopBar
            totalRestaurants={restaurants!.length}
            searchRestaurant={searchRestaurant}
            searchRestaurantSet={searchRestaurantSet}
          />
        )}

        {isLoading ? (
          <RestaurandCardSkeleton />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={5}>
            {restaurants!.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </SimpleGrid>
        )}
      </Stack>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: initialData } = await api.get('restaurants');

  return {
    props: {
      initialData,
    },
  };
};
