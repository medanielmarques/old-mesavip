import { createContext, ReactNode, useEffect, useState } from 'react';
import { Reservation } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

interface PastReservationsProviderProps {
  children: ReactNode;
}

interface PastReservationsContextData {
  pastReservations: Reservation[];
  refreshPastReservations(): void;
}

export const PastReservationsContext = createContext(
  {} as PastReservationsContextData
);

export function PastReservationsProvider({
  children,
}: PastReservationsProviderProps) {
  const [pastReservations, pastReservationsSet] = useState([] as Reservation[]);
  const [refresh, refreshSet] = useState(false);

  function refreshPastReservations() {
    refreshSet(!refresh);
  }

  useEffect(() => {
    api.get('reservations/list-past').then((response) => {
      pastReservationsSet(response.data);
    });
  }, [refresh]);

  return (
    <PastReservationsContext.Provider
      value={{
        pastReservations,
        refreshPastReservations,
      }}
    >
      {children}
    </PastReservationsContext.Provider>
  );
}
