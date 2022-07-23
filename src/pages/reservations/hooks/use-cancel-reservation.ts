import { useContext } from 'react';
import { useQuery } from 'react-query';
import { useToast } from '@chakra-ui/react';

import { api } from 'services/api';
import { queryClient } from 'services/query-client';
import { useReservationCardCtx } from '.';
import { CancelReservationContext } from '../components/reservation-card/actions';

export function useCancelReservation() {
  const { id } = useReservationCardCtx();
  const { onToggle } = useContext(CancelReservationContext);

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
        .then(() => onToggle())
        .then(() => toast());
    },
    { enabled: false }
  );
}
