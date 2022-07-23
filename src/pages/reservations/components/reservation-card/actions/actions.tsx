import { useReservationCardCtx } from 'pages/reservations/hooks';
import { RateReservation, ShowRating, CancelReservation } from '.';

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
