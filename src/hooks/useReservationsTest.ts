import { useEffect, useState } from 'react';
import { Reservation } from 'src/interfaces/reservation';
import { api } from 'src/services/api';

// Not using it for now, it works, but the rerender doesn't.
// The variables are only passed once when called,
// and are not received again on the caller function
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
