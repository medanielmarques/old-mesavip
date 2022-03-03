import { useContext } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { ModalBody } from './ModalBody';

import { ReservationCardContext } from '../contexts/ReservationCardContext';

interface SeeRatingModalProps {
  isOpen: boolean;
  onToggle(): void;
}

export function SeeRatingModal(props: SeeRatingModalProps) {
  const { isOpen, onToggle } = props;

  const { restaurant } = useContext(ReservationCardContext);

  return (
    <Modal isOpen={isOpen} onClose={onToggle}>
      <ModalOverlay />
      <ModalContent w={{ base: '80', md: 'inherit' }}>
        <ModalHeader>That was your rating on {restaurant}</ModalHeader>

        <ModalBody />
      </ModalContent>
    </Modal>
  );
}
