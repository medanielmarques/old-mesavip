import { Text } from '@chakra-ui/react';
import { useReservationCardCtx } from 'pages/reservations/hooks';

export function ScheduledTime() {
  const { time } = useReservationCardCtx();

  return (
    <Text fontSize='14px' fontWeight='500'>
      {time}
    </Text>
  );
}
