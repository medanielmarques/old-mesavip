import { useToast } from '@chakra-ui/react';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';

import { api } from 'services/api';
import { queryClient } from 'services/query-client';
import { useDatePickerStore } from './date-picker-store';

export function useConfirmReservation({
  toggleModal,
}: {
  toggleModal(): void;
}) {
  const { id: restaurant_id } = useRestaurantCtx();
  const { selectedTime, selectedDate } = useDatePickerStore();

  const toast = useToast({
    title: 'Reservation confirmed sucessfully',
    status: 'success',
    position: 'top',
    variant: 'subtle',
    duration: 4000,
    isClosable: true,
  });

  const reservation = {
    restaurant_id,
    time: selectedTime.hour,
    date: selectedDate,
  };

  async function bookTableQuery() {
    await api
      .post('/reservations/create', reservation)
      .then(() => toggleModal())
      .then(() => toast())
      .then(() => queryClient.invalidateQueries('available-hours'))
      .catch(() => {});
  }

  return { bookTableQuery };
}
