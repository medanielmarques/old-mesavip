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

export function RateReservationModal() {
  const { isOpen = false, onToggle } = useContext(ReservationCardContext);

  return (
    <Modal isOpen={isOpen} onClose={onToggle}>
      <ModalOverlay />
      <ModalContent alignItems='center'>
        <ModalHeader>Rate your reservation</ModalHeader>

        <ModalCloseButton />

        <ModalBody closeModal={onToggle} />
      </ModalContent>
    </Modal>
  );
}
