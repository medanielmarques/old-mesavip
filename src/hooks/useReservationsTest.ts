import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { reservationsReducer } from 'src/components/ReservationCard/reducers/reservationsReducer';
import { Reservation, ReservationsType } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

export function useReservationTests() {
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
    api.get('reservations/list-past').then((response) => {
      pastReservationsSet(response.data);
    });
  }, [refreshReservations.past]);

  useEffect(() => {
    api.get('reservations/list-following').then((response) => {
      followingReservationsSet(response.data);
    });
  }, [refreshReservations.following]);

  return {
    pastReservations,
    followingReservations,
    refreshPastReservations,
    refreshFollowingReservations,
  };
}
