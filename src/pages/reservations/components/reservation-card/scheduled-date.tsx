import { Flex, Text } from '@chakra-ui/react';
import { useReservationCardCtx } from 'pages/reservations/hooks';

export function ScheduledDate() {
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
