import { useContext, useState } from 'react';
import { Flex, Button, toast, useToast } from '@chakra-ui/react';

import { CancelReservation } from 'src/http/reservation';
import { ReservationCardContext } from './contexts/ReservationCardContext';
import { ReservationContext } from 'src/pages/reservations';

export function FollowingReservationButton() {
  const { reservation } = useContext(ReservationCardContext);
  const [isLoading, isLoadingSet] = useState(false);

  const { refreshFollowingReservations } = useContext(ReservationContext);

  const toast = useToast();

  async function handleClick() {
    isLoadingSet(true);
    await CancelReservation(reservation.id)
      .then(() => isLoadingSet(false))
      .then(() => refreshFollowingReservations())
      .then(() =>
        toast({
          title: 'Reservation canceled!',
          status: 'success',
          duration: 2000,
          variant: 'subtle',
          position: 'top',
          isClosable: true,
        })
      );
  }

  return (
    <Flex justify='center' m='12px 0'>
      <Button
        onClick={handleClick}
        variant='outline'
        width='56'
        height='10'
        fontSize='16px'
        gridGap='2'
        isLoading={isLoading}
        loadingText='Cancelling'
        isDisabled={!!reservation.canceled}
      >
        {/* There should be a button "Re-schedule" or smth */}
        {!!reservation.canceled ? 'Canceled' : 'Cancel reservation'}
      </Button>
    </Flex>
  );
}
