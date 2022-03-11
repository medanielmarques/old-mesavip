import { useContext } from 'react';

import { ShowRating } from './ShowRating';
import { RateReservation } from './RateReservation';
import { CancelReservation } from './CancelReservation';

import { ReservationCardContext } from '..';

export function Actions() {
  const { rated } = useContext(ReservationCardContext);

  // It's a past reservation and will show the user rating
  if (!!rated) {
    return <ShowRating />;
  }

  // It's a past reservation, but the user didn't rate it
  if (rated === null) {
    return <RateReservation />;
  }

  // It's a following reservation, and the user may cancel it
  return <CancelReservation />;
}
