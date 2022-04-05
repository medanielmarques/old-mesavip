import { createContext } from 'react';
import { Grid } from '@chakra-ui/react';
import { Wrapper } from './Wrapper';
import { Thumbnail } from './Thumbnail';
import { Content } from './Content';
import { ReviewInfo } from './ReviewInfo';
import { Restaurant } from 'types/restaurant';

export const RestaurantCardContext = createContext({} as Restaurant);

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <RestaurantCardContext.Provider value={restaurant}>
      <Wrapper>
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
      </Wrapper>
    </RestaurantCardContext.Provider>
  );
}
