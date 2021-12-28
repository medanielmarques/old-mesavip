import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ModalBody } from './ModalBody';

interface RateReservationModalProps {
  isOpen: boolean;
  onToggle(): void;
}

export function RateReservationModal(props: RateReservationModalProps) {
  const { isOpen, onToggle } = props;

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
