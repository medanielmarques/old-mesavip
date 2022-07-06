import { ShowRatingButton } from './show-rating-button';
import { ShowRatingModal } from './show-rating-modal';

import { useModal } from 'hooks';
import { useReservationCardCtx } from 'pages/reservations/hooks/reservation-context';

export function ShowRating() {
  const { restaurant } = useReservationCardCtx();

  const { Modal, onToggle } = useModal({
    title: `That was your rating on: ${restaurant}`,
    closeButton: false,
  });

  return (
    <>
      <ShowRatingButton onToggle={onToggle} />

      <Modal>
        <ShowRatingModal />
      </Modal>
    </>
  );
}
