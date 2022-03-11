import { createContext } from 'react';

import { CancelReservationButton } from './CancelReservationButton';
import { CancelReservationModal } from './CancelReservationModal';

import { useModal } from 'hooks/useModal';

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
