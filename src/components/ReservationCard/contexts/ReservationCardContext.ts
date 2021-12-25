import { createContext } from 'react';
import { UseDisclosureProps } from '@chakra-ui/react';
import { Reservation } from 'src/interfaces/reservation';

interface IReservationCardContext extends UseDisclosureProps {
  reservation: Reservation;
  onToggle(): void;
}

export const ReservationCardContext = createContext(
  {} as IReservationCardContext
);
