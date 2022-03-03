import { Box, Flex, Divider } from '@chakra-ui/react';

import { Address } from './Address';
import { ScheduledDate } from './ScheduledDate';
import { ScheduledTime } from './ScheduledTime';
import { PastReservationButton } from './PastReservationButton';
import { FollowingReservationButton } from './FollowingReservationButton';
import { RestaurantNameAndRate } from 'components/RestaurantNameAndRate';

import { ReservationCardContext } from './contexts/ReservationCardContext';
import { Reservation } from 'interfaces/reservation';

interface CardProps {
  reservation: Reservation;
}

export function ReservationCard({ reservation }: CardProps) {
  return (
    <ReservationCardContext.Provider value={reservation}>
      <Box w='92' h='52' p='4' borderRadius='md' shadow='base'>
        <Flex w='68' h='32' ml='5px' mx='auto' gridGap='3'>
          <ScheduledDate />

          <Flex width='100%' direction='column'>
            <RestaurantNameAndRate
              restaurant={reservation.restaurant}
              avg_rating={reservation.avg_rating}
            />
            <ScheduledTime />
            <Address />
          </Flex>
        </Flex>

        <Divider />

        {/* It Verifies if the [rated] key exists in the reservation object */}
        {Reflect.has(reservation, 'rated') ? (
          <PastReservationButton />
        ) : (
          <FollowingReservationButton />
        )}
      </Box>
    </ReservationCardContext.Provider>
  );
}
