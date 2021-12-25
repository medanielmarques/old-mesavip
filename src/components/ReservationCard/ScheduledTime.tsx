import { useContext } from 'react';
import { Text } from '@chakra-ui/react';
import { ReservationCardContext } from './contexts/ReservationCardContext';

export function ScheduledTime() {
  const {
    reservation: { time },
  } = useContext(ReservationCardContext);

  return (
    <Text fontSize='14px' fontWeight='500'>
      {time}
    </Text>
  );
}
