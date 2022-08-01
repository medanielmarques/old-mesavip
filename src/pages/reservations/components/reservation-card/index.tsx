import { createContext, useContext } from 'react';
import { Box, BoxProps, Divider, Flex, Text } from '@chakra-ui/react';

import { Actions } from './actions';
import { RestaurantNameAndRate } from 'core/restaurant-name-and-rate';

import { Reservation } from 'types';

const ReservationCardContext = createContext({} as Reservation);
export const useReservationCardCtx = () => useContext(ReservationCardContext);

export function ReservationCard({ reservation }: { reservation: Reservation }) {
  return (
    <ReservationCardWrapper>
      <ReservationCardContext.Provider value={reservation}>
        <ReservationCardContent />

        <Divider />

        <Actions />
      </ReservationCardContext.Provider>
    </ReservationCardWrapper>
  );
}

function ReservationCardWrapper({ children }: BoxProps) {
  return (
    <Box w='92' h='52' p='4' borderRadius='md' shadow='base'>
      {children}
    </Box>
  );
}

function ReservationCardContent() {
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

function ScheduledDate() {
  const { day, month } = useReservationCardCtx();

  return (
    <Flex
      justifyContent='center'
      direction='column'
      w='40'
      h='28'
      bg='gray.100'
      borderRadius='md'
      textAlign='center'
    >
      <Text fontSize='4xl' fontWeight='700'>
        {day}
      </Text>

      <Text fontWeight='500'>{month}</Text>
    </Flex>
  );
}

function ScheduledTime() {
  const { time } = useReservationCardCtx();

  return (
    <Text fontSize='14px' fontWeight='500'>
      {time}
    </Text>
  );
}

function Address() {
  const { city, address } = useReservationCardCtx();

  return (
    <Flex fontSize='14px' direction='column'>
      <Text>{city}</Text>
      <Text>{address}</Text>
    </Flex>
  );
}
