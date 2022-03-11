import { createContext } from 'react';
import { Divider } from '@chakra-ui/react';

import { ReservationCardWrapper } from '../ReservationCardWrapper';
import { ReservationCardContent } from './Content';
import { Actions } from './Actions';

import { Reservation } from 'types/reservation';

interface ReservationCardProps {
  reservation: Reservation;
}

export const ReservationCardContext = createContext({} as Reservation);

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
