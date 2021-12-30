import { Box, Stack } from '@chakra-ui/react';

import { Thumbnail } from './Image';
import { RestaurantNameAndRate } from '../RestaurantNameAndRate';
import { CulinaryAndPrice } from './CulinaryAndPrice';
import { Bairro } from './Bairro';

import { Restaurant } from 'src/interfaces/restaurant';
import { RestaurantCardContext } from './contexts/RestaurantCardContext';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard(props: RestaurantCardProps) {
  const { restaurant } = props;

  return (
    <RestaurantCardContext.Provider value={restaurant}>
      <Box w='72' h='60' m='0 auto' p='3' borderRadius='md' shadow='base'>
        <Thumbnail />

        <Stack spacing='1' mt='1'>
          <RestaurantNameAndRate
            restaurant={restaurant.name}
            avg_rating={restaurant.avg_rating}
          />

          <CulinaryAndPrice />

          <Bairro />
        </Stack>
      </Box>
    </RestaurantCardContext.Provider>
  );
}
