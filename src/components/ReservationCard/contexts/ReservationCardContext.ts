import { createContext } from 'react';
import { Reservation } from 'src/interfaces/reservation';

export const ReservationCardContext = createContext({} as Reservation);
