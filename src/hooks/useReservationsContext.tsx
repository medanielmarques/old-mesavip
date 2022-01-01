import { createContext, ReactNode, useEffect, useState } from 'react';
import { Reservation } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

interface ReservationsProviderProps {
  children: ReactNode;
  reservationType: 'following' | 'past';
}

interface ReservationsContextData {
  reservations: Reservation[];
  refreshReservations(): void;
}

export const ReservationsContext = createContext({} as ReservationsContextData);

export function ReservationsProvider({
  children,
  reservationType,
}: ReservationsProviderProps) {
  const [reservations, reservationsSet] = useState([] as Reservation[]);
  const [refresh, refreshSet] = useState(false);

  function refreshReservations() {
    refreshSet(!refresh);
  }

  useEffect(() => {
    api
      .get(`reservations/list-${reservationType}`)
      .then((response) => {
        reservationsSet(response.data);
      })
      .catch(() => {});
  }, [refresh]);

  return (
    <ReservationsContext.Provider
      value={{
        reservations,
        refreshReservations,
      }}
    >
      {children}
    </ReservationsContext.Provider>
  );
}
