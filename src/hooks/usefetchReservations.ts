import { useState } from 'react';

export function usefetchReservations() {
  const [refetchPastReservations, refetchPastReservationsSet] = useState(false);
  const [refetchFollowingReservations, refetchFollowingReservationsSet] =
    useState(false);

  function toggleRefetchPastReservations() {
    refetchPastReservationsSet(!refetchPastReservations);
  }

  function toggleRefetchFollowingReservations() {
    refetchFollowingReservationsSet(!refetchFollowingReservations);
  }

  return {
    refetchPastReservations,
    refetchFollowingReservations,
    toggleRefetchPastReservations,
    toggleRefetchFollowingReservations,
  };
}
