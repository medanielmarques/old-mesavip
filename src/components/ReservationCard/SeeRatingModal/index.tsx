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

interface SeeRatingModalProps {
  isOpen: boolean;
  onToggle(): void;
}

export function SeeRatingModal(props: SeeRatingModalProps) {
  const { isOpen, onToggle } = props;

  const {
    reservation: { restaurant },
  } = useContext(ReservationCardContext);

  return (
    <Modal isOpen={isOpen} onClose={onToggle}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>That was your rating on {restaurant}</ModalHeader>

        <ModalCloseButton />

        <ModalBody />
      </ModalContent>
    </Modal>
  );
}
