import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
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
    <Box>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </Box>
  );
}
