import { Flex } from '@chakra-ui/react';

import { ScheduledDate } from './scheduled-date';
import { RestaurantNameAndRate } from 'core/restaurant-name-and-rate';
import { ScheduledTime } from './scheduled-time';
import { Address } from './address';
import { useReservationCardCtx } from 'pages/reservations/hooks';

export function ReservationCardContent() {
  const { restaurant, avg_rating } = useReservationCardCtx();

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
