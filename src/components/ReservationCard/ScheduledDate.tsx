import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { ReservationCardContext } from './contexts/ReservationCardContext';

export function ScheduledDate() {
  const {
    reservation: { day, month },
  } = useContext(ReservationCardContext);

  return (
    <Flex
      w='40'
      h='28'
      bg='gray.100'
      borderRadius='md'
      textAlign='center'
      direction='column'
      justifyContent='center'
    >
      <Text fontSize='4xl' fontWeight='700'>
        {day}
      </Text>

      <Text fontWeight='500'>{month}</Text>
    </Flex>
  );
}
