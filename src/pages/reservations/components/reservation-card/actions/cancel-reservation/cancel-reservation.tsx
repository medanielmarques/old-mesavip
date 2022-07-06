import { createContext } from 'react';

import { CancelReservationButton } from './cancel-reservation-button';
import { CancelReservationModal } from './cancel-reservation-modal';

import { useModal } from 'hooks';

interface CancelReservationContextData {
  onToggle: () => void;
}

export const CancelReservationContext = createContext(
  {} as CancelReservationContextData
);

export function CancelReservation() {
  const { Modal, onToggle } = useModal({
    title: 'Cancel reservation',
    closeButton: false,
  });

  return (
    <CancelReservationContext.Provider value={{ onToggle }}>
      <CancelReservationButton />

      <Modal>
        <CancelReservationModal />
      </Modal>
    </CancelReservationContext.Provider>
  );
}
