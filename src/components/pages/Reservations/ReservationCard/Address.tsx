import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ReservationCardContext } from './contexts/ReservationCardContext';

export function Address() {
  const { city, address } = useContext(ReservationCardContext);

  return (
    <Flex fontSize='14px' direction='column'>
      <Text>{city}</Text>
      <Text>{address}</Text>
    </Flex>
  );
}
