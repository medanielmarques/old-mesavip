import { useToast } from '@chakra-ui/react';

import { api } from 'services/api';
import { queryClient } from 'services/query-client';
import { RateReservation } from 'types';
import { useRateReservationCtx } from '../components/reservation-card/actions/rate-reservation';

interface IsFormEmptyProps {
  comment: string;
  score: number;
}

export function useRateReservation() {
  const { toggleRateReservationModal } = useRateReservationCtx();

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
      .then(() => toggleRateReservationModal())
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
