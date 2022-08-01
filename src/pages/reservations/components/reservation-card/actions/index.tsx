import { useReservationCardCtx } from '..';
import { ShowRating } from './show-rating';
import { RateReservation } from './rate-reservation';
import { CancelReservation } from './cancel-reservation';

export function Actions() {
  const { rated } = useReservationCardCtx();

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
