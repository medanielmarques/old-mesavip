import { createContext } from 'react';
import { Reservation } from 'src/interfaces/reservation';

interface IReservationCardContext {
  reservation: Reservation;
}

export const ReservationCardContext = createContext(
  {} as IReservationCardContext
);
