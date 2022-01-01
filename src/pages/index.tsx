import { useEffect, useState } from 'react';
import { Box, SimpleGrid, Stack } from '@chakra-ui/react';

import { RestaurantCard } from 'src/components/RestaurantCard';
import { ErrorMessage } from 'src/components/RestaurantCard/ErrorMessage';
import { TopBar } from 'src/components/RestaurantCard/TopBar';

import { Restaurant } from 'src/interfaces/restaurant';
import { api } from 'src/services/api';

export default function Restaurants() {
  const [restaurants, restaurantsSet] = useState([] as Restaurant[]);
  const [searchRestaurant, searchRestaurantSet] = useState('');
  const [searchError, searchErrorSet] = useState(false);

  useEffect(() => {
    searchErrorSet(false);

    api
      .get(`restaurants/${searchRestaurant}`)
      .then((response) => {
        restaurantsSet(response.data);
      })
      .catch(() => {
        searchErrorSet(true);
        restaurantsSet([]);
      });
  }, [searchRestaurant]);

  return (
    <Box
      w={{
        base: '288px',
        md: '606px',
        lg: '904px',
        xl: '1212px',
      }}
      m='34px auto'
    >
      <Stack spacing={6}>
        <TopBar
          totalRestaurants={restaurants.length}
          searchRestaurantSet={searchRestaurantSet}
        />

        <ErrorMessage searchError={searchError} />

        <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={5}>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
