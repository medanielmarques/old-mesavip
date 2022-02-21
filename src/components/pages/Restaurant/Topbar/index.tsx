import { useContext } from 'react';
import { Flex } from '@chakra-ui/react';

import { Breadcrumb } from '../Breadcrumb';
import { RestaurantNameAndRate } from 'components/RestaurantNameAndRate';
import { BairroCulinaryAndPrice } from './BairroCulinaryAndPrice';
import { Badges } from '../Badges';
import { RestaurantContext } from 'pages/restaurant/[id]';

export function Topbar() {
  const { name, avg_rating, total_reviews } = useContext(RestaurantContext);

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
          ratingFontSize: '22px',
        }}
      />

      <BairroCulinaryAndPrice />
    </Flex>
  );
}
