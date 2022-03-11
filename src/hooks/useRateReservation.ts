import { useContext } from 'react';
import { useToast } from '@chakra-ui/react';

import { RateReservationContext } from 'components/pages/Reservations/ReservationCard/Actions/RateReservation';

import { api } from 'services/api';
import { queryClient } from 'services/queryClient';
import { RateReservation } from 'types/RateReservation';

interface IsFormEmptyProps {
  comment: string;
  score: number;
}

export function useRateReservation() {
  const { onToggle } = useContext(RateReservationContext);

  const RateSuccessToast = useToast({
    title: 'Rate registered successfully!',
    status: 'success',
    position: 'top',
    variant: 'subtle',
    duration: 2000,
    isClosable: true,
  });

  const emptyFormToast = useToast({
    title: 'The fields are empty!',
    status: 'info',
    position: 'top',
    variant: 'subtle',
    duration: 2000,
    isClosable: true,
  });

  async function rateReservation(rating: RateReservation) {
    if (!!isFormEmpty({ comment: rating.comment, score: rating.rating })) {
      return;
    }

    await api
      .post('ratings/create', { rating })
      .then(() => queryClient.refetchQueries('past-reservations'))
      .then(() => onToggle())
      .then(() => RateSuccessToast());
  }

  function isFormEmpty({ comment, score }: IsFormEmptyProps) {
    if (comment === '' || score === 0 || score === NaN) {
      emptyFormToast();
      return true;
    }
  }

  return { rateReservation, isFormEmpty };
}
