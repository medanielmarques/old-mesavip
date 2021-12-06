import { Stack } from '@chakra-ui/react';
import ReservationCard from 'src/components/ReservationCard';

export default function Reservations() {
  return (
    <Stack spacing='5'>
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
      <ReservationCard />
    </Stack>
  );
}
