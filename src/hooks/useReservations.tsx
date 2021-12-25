import { createContext, ReactNode, useEffect, useState } from 'react';
import { Reservation, ReservationsType } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

interface ReservationContextData {
  refreshReservationsSet({}): void;
  // reservations: ReservationsType;
}

interface ReservationProviderProps {
  children: ReactNode;
}

export const ReservationContext = createContext({} as ReservationContextData);

export function ReservationProvider({ children }: ReservationProviderProps) {
  const [pastReservations, pastReservationsSet] = useState([] as Reservation[]);
  const [followingReservations, followingReservationsSet] = useState(
    [] as Reservation[]
  );

  const [refreshReservations, refreshReservationsSet] = useState({
    past: false,
    following: false,
  });

  function refreshPastReservations() {
    refreshReservationsSet({
      ...refreshReservations,
      past: !refreshReservations.past,
    });
  }

  function refreshFollowingReservations() {
    refreshReservationsSet({
      ...refreshReservations,
      following: !refreshReservations.following,
    });
  }

  useEffect(() => {
    api.get<ReservationsType>('reservations/list-past').then((response) => {
      pastReservationsSet(response.data.pastReservations);
    });
  }, [refreshPastReservations]);

  useEffect(() => {
    api
      .get<ReservationsType>('reservations/list-following')
      .then((response) => {
        return followingReservationsSet(response.data.followingReservations);
      });
  }, [refreshFollowingReservations]);

  return (
    <ReservationContext.Provider
      value={{
        refreshReservationsSet,
        // reservations: {
        //   pastReservations,
        //   followingReservations,
        // },
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
}
