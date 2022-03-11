import { useContext } from 'react';
import { useToast } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { Hour } from 'types/hour';

export interface UseConfirmReservationProps {
  onToggle(): void;
  selectedTime: Hour;
  selectedDate: Date;
}

export function useConfirmReservation(props: UseConfirmReservationProps) {
  const { onToggle, selectedTime, selectedDate } = props;
  const { id: restaurant_id } = useContext(RestaurantContext);

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
      .then(() => onToggle())
      .then(() => toast())
      .then(() => queryClient.invalidateQueries('available-hours'))
      .catch(() => {});
  }

  return { bookTableQuery };
}
