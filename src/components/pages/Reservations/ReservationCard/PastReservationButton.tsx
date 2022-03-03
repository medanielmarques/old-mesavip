import { useContext } from 'react';
import { Flex, Button, useDisclosure } from '@chakra-ui/react';

import { RateReservationModal } from './RateReservationModal';
import { SeeRatingModal } from './SeeRatingModal';
import { ReservationCardContext } from './contexts/ReservationCardContext';

export function PastReservationButton() {
  const { rated } = useContext(ReservationCardContext);

  const {
    isOpen: isOpenRateReservationModal,
    onToggle: onToggleRateReservationModal,
  } = useDisclosure();

  const { isOpen: isOpenSeeRatingModal, onToggle: onToggleSeeRatingModal } =
    useDisclosure();

  function handleClick() {
    if (!!rated) {
      onToggleSeeRatingModal();
    } else {
      onToggleRateReservationModal();
    }
  }

  return (
    <Flex justify='center' m='12px 0'>
      <Button
        onClick={handleClick}
        variant='outline'
        width='56'
        height='10'
        fontSize='16px'
      >
        {!!rated ? 'See your rating' : 'Rate reservation'}
      </Button>

      <RateReservationModal
        isOpen={isOpenRateReservationModal}
        onToggle={onToggleRateReservationModal}
      />

      <SeeRatingModal
        isOpen={isOpenSeeRatingModal}
        onToggle={onToggleSeeRatingModal}
      />
    </Flex>
  );
}
