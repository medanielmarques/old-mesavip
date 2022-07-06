import { createContext } from 'react';

import { RateReservationButton } from './rate-reservation-button';
import { RateResevationModal } from './rate-reservation-modal';
import { useModal } from 'hooks';

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
