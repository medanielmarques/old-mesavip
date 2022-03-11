import { useContext } from 'react';
import { Flex } from '@chakra-ui/react';

import { ScheduledDate } from '../ScheduledDate';
import { RestaurantNameAndRate } from 'components/RestaurantNameAndRate';
import { ScheduledTime } from '../ScheduledTime';
import { Address } from '../Address';

import { ReservationCardContext } from '..';

export function ReservationCardContent() {
  const { restaurant, avg_rating } = useContext(ReservationCardContext);

  return (
    <Flex w='68' h='32' ml='1' mx='auto' gridGap='3'>
      <ScheduledDate />

      <Flex width='100%' direction='column'>
        <RestaurantNameAndRate
          restaurant={restaurant}
          avg_rating={avg_rating}
        />

        <ScheduledTime />

        <Address />
      </Flex>
    </Flex>
  );
}
