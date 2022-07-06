import { createContext } from 'react';
import { Grid } from '@chakra-ui/react';

import { RestaurantCardWrapper } from './restaurant-card-wrapper';
import { Thumbnail } from './thumbnail';
import { Content } from './content';
import { ReviewInfo } from './review-info';
import { Restaurant } from 'types';

export const RestaurantCardContext = createContext({} as Restaurant);

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <RestaurantCardContext.Provider value={restaurant}>
      <RestaurantCardWrapper>
        <Thumbnail />

        <Grid
          gridTemplateColumns={{ base: '1fr', md: '3fr 1fr' }}
          ml='4'
          mt='4'
          gridGap='3'
        >
          <Content />
          <ReviewInfo />
        </Grid>
      </RestaurantCardWrapper>
    </RestaurantCardContext.Provider>
  );
}
