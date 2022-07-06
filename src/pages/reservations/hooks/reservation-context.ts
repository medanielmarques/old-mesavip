import { createContext, useContext } from 'react';
import { Reservation } from 'types';

export const ReservationCardContext = createContext({} as Reservation);
export const useReservationCardCtx = () => useContext(ReservationCardContext);
