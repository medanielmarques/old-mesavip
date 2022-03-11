import { createContext } from 'react';

import { RateReservationButton } from './RateReservationButton';

import { useModal } from 'hooks/useModal';
import { RateResevationModal } from './RateReservationModal';

interface RateReservationContextData {
  onToggle: () => void;
}

export const RateReservationContext = createContext(
  {} as RateReservationContextData
);

export function RateReservation() {
  const { Modal, onToggle } = useModal({
    title: 'Rate reservation',
    closeButton: false,
  });

  return (
    <RateReservationContext.Provider value={{ onToggle }}>
      <RateReservationButton />

      <Modal>
        <RateResevationModal />
      </Modal>
    </RateReservationContext.Provider>
  );
}
