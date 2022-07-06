import { Divider } from '@chakra-ui/react';

import { ReservationCardWrapper } from '../reservation-card-wrapper';
import { ReservationCardContent } from './reservation-card-content';
import { Actions } from './actions';

import { Reservation } from 'types';
import { ReservationCardContext } from 'pages/reservations/hooks/reservation-context';

interface ReservationCardProps {
  reservation: Reservation;
}

export function ReservationCard({ reservation }: ReservationCardProps) {
  return (
    <ReservationCardWrapper>
      <ReservationCardContext.Provider value={reservation}>
        <ReservationCardContent />

        <Divider />

        <Actions />
      </ReservationCardContext.Provider>
    </ReservationCardWrapper>
  );
}
