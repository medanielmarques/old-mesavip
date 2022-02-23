import Link from 'next/link';
import { Box, Stack, Link as ChakraLink } from '@chakra-ui/react';

import { Thumbnail } from './Image';
import { RestaurantNameAndRate } from '../RestaurantNameAndRate';
import { CulinaryAndPrice } from './CulinaryAndPrice';
import { Bairro } from './Bairro';

import { Restaurant } from 'interfaces/restaurant';
import { RestaurantCardContext } from './contexts/RestaurantCardContext';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <RestaurantCardContext.Provider value={restaurant}>
      <Link href={`/restaurant/${restaurant.id}`} passHref>
        <ChakraLink _hover={{ outline: 'none' }}>
          <Box
            w='72'
            h='64'
            mx='auto'
            p='3'
            borderRadius='md'
            shadow='xs'
            _hover={{ bg: 'gray.100' }}
          >
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
        </ChakraLink>
      </Link>
    </RestaurantCardContext.Provider>
  );
}
