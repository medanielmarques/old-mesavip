import { createContext } from 'react';
import { UseDisclosureProps } from '@chakra-ui/react';
import { Reservation } from 'src/interfaces/reservation';

interface CancelReservationAlertProps {
  isOpen: boolean;
  onToggle(): void;
}

interface IReservationCardContext extends UseDisclosureProps {
  reservation: Reservation;
  onToggle(): void;
  isOpenSeeRatingModal: boolean;
  onToggleSeeRatingModal(): void;
  cancelReservationAlertProps: CancelReservationAlertProps;
}

export const ReservationCardContext = createContext(
  {} as IReservationCardContext
);
