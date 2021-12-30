import { useEffect, useState } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

import { TotalRestaurantsText } from 'src/components/RestaurantCard/TotalRestaurantsText';
import { RestaurantCard } from 'src/components/RestaurantCard';
import { Restaurant } from 'src/interfaces/restaurant';
import { api } from 'src/services/api';

export default function Restaurants() {
  const [restaurants, restaurantsSet] = useState([] as Restaurant[]);

  useEffect(() => {
    api.get('restaurants').then((response) => {
      restaurantsSet(response.data);
    });
  }, []);

  return (
    // algo do tipo
    // width={{
    //   base: '288px',
    //   md: '594px',
    //   lg: '594px',
    //   xl: '594px',
    //   '2xl': '975px',
    // }}

    <Box maxWidth='1200px' m='14px auto'>
      <TotalRestaurantsText length={restaurants.length} />

      <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={10}>
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
