import { useContext } from 'react';
import { useQuery } from 'react-query';
import { useToast } from '@chakra-ui/react';

import { api } from 'services/api';
import { queryClient } from 'services/query-client';
import { useReservationCardCtx } from '../components/reservation-card';
import { useCancelReservationCtx } from '../components/reservation-card/actions/cancel-reservation';

export function useCancelReservation() {
  const { id } = useReservationCardCtx();
  const { toggleCancelReservationModal } = useCancelReservationCtx();
  const toast = useToast({
    title: 'Reservation canceled!',
    status: 'success',
    position: 'top',
    variant: 'subtle',
    duration: 2000,
    isClosable: true,
  });

  useQuery(
    `cancel-reservation-${id}`,
    async () => {
      await api
        .delete(`reservations/cancel/${id}`)
        .then(() => queryClient.refetchQueries('following-reservations'))
        .then(() => toggleCancelReservationModal())
        .then(() => toast());
    },
    { enabled: false }
  );
}
