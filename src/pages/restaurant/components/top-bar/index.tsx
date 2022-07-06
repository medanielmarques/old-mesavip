import { Flex } from '@chakra-ui/react';

import { Breadcrumb } from '../breadcrumb';
import { RestaurantNameAndRate } from 'core/restaurant-name-and-rate';
import { DistrictCulinaryAndPrice } from './district-culinary-and-price';
import { Badges } from '../badges';
import { useRestaurantCtx } from 'pages/restaurant/hooks';

export function Topbar() {
  const { name, avg_rating, total_reviews } = useRestaurantCtx();

  return (
    <Flex direction='column' gridGap='3' mt='3'>
      <Breadcrumb />

      <Badges />

      <RestaurantNameAndRate
        restaurant={name}
        avg_rating={avg_rating}
        total_reviews={total_reviews}
        styles={{
          fontSize: { base: '20px', md: '28px', lg: '36px' },
          fontWeight: '700',
          ratingFontSize: '2xl',
        }}
      />

      <DistrictCulinaryAndPrice />
    </Flex>
  );
}
