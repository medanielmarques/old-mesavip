import { useContext } from 'react';

import { ShowRatingButton } from './ShowRatingButton';
import { ShowRatingModal } from './ShowRatingModal';

import { ReservationCardContext } from '../..';
import { useModal } from 'hooks/useModal';

export function ShowRating() {
  const { restaurant } = useContext(ReservationCardContext);

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
