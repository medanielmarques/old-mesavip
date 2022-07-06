import { Flex, Text } from '@chakra-ui/react';
import { useReservationCardCtx } from 'pages/reservations/hooks/reservation-context';

export function Address() {
  const { city, address } = useReservationCardCtx();

  return (
    <Flex fontSize='14px' direction='column'>
      <Text>{city}</Text>
      <Text>{address}</Text>
    </Flex>
  );
}
