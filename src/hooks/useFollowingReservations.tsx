import { createContext, ReactNode, useEffect, useState } from 'react';
import { Reservation } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

interface FollowingReservationsProviderProps {
  children: ReactNode;
}

interface FollowingReservationsContextData {
  followingReservations: Reservation[];
  refreshFollowingReservations(): void;
}

export const FollowingReservationsContext = createContext(
  {} as FollowingReservationsContextData
);

export function FollowingReservationsProvider({
  children,
}: FollowingReservationsProviderProps) {
  const [followingReservations, followingReservationsSet] = useState(
    [] as Reservation[]
  );
  const [refresh, refreshSet] = useState(false);

  function refreshFollowingReservations() {
    refreshSet(!refresh);
  }

  useEffect(() => {
    api.get('reservations/list-following').then((response) => {
      followingReservationsSet(response.data);
    });
  }, [refresh]);

  return (
    <FollowingReservationsContext.Provider
      value={{
        followingReservations,
        refreshFollowingReservations,
      }}
    >
      {children}
    </FollowingReservationsContext.Provider>
  );
}
