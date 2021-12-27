import { useContext } from 'react';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ReservationCardContext } from '../contexts/ReservationCardContext';
import { ModalBody } from './ModalBody';

export function SeeRatingModal() {
  const {
    isOpenSeeRatingModal = false,
    onToggleSeeRatingModal,
    reservation: { restaurant },
  } = useContext(ReservationCardContext);

  return (
    <Modal isOpen={isOpenSeeRatingModal} onClose={onToggleSeeRatingModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>That was your rating on {restaurant}</ModalHeader>

        <ModalCloseButton />

        <ModalBody />
      </ModalContent>
    </Modal>
  );
}
