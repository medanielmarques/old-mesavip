import { useContext, useState } from 'react';
import { Flex, Button, useToast, useDisclosure } from '@chakra-ui/react';

import { CancelReservationAlert } from './CancelReservationAlert';
import { CancelReservation } from 'src/http/reservation';
import { ReservationCardContext } from './contexts/ReservationCardContext';
import { FollowingReservationsContext } from 'src/hooks/useFollowingReservations';

export function FollowingReservationButton() {
  const { reservation } = useContext(ReservationCardContext);
  const { refreshFollowingReservations } = useContext(
    FollowingReservationsContext
  );

  const [isLoading, isLoadingSet] = useState(false);
  const { isOpen, onToggle } = useDisclosure();

  const toast = useToast();
  function toastAction() {
    toast({
      title: 'Reservation canceled!',
      status: 'success',
      duration: 2000,
      variant: 'subtle',
      position: 'top',
      isClosable: true,
    });
  }

  async function cancelReservation() {
    isLoadingSet(true);
    await CancelReservation(reservation.id).then(() => {
      onToggle();
      isLoadingSet(false);
      refreshFollowingReservations();
      toastAction();
    });
  }

  return (
    <Flex justify='center' m='12px 0'>
      <Button
        onClick={onToggle}
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

      <CancelReservationAlert
        isOpen={isOpen}
        onToggle={onToggle}
        onClick={cancelReservation}
      />
    </Flex>
  );
}
