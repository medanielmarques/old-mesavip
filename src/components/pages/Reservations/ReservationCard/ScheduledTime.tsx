import { useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { ReservationCardContext } from '.';

export function ScheduledTime() {
  const { time } = useContext(ReservationCardContext);

  return (
    <Text fontSize='14px' fontWeight='500'>
      {time}
    </Text>
  );
}
