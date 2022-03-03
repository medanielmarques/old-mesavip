import { useContext, useState } from 'react';
import { Flex, Button, useToast, useDisclosure } from '@chakra-ui/react';

import { CancelReservationAlert } from './CancelReservationAlert';
import { CancelReservation } from 'http/reservation';
import { ReservationCardContext } from './contexts/ReservationCardContext';
import { queryClient } from 'services/queryClient';

export function FollowingReservationButton() {
  const { canceled, id: reservation_id } = useContext(ReservationCardContext);

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
    await CancelReservation(reservation_id).then(() => {
      onToggle();
      isLoadingSet(false);
      queryClient.refetchQueries('following-reservations');
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
        isDisabled={!!canceled}
      >
        {/* There should be a button "Re-schedule" or smth */}
        {!!canceled ? 'Canceled' : 'Cancel reservation'}
      </Button>

      <CancelReservationAlert
        isOpen={isOpen}
        onToggle={onToggle}
        onClick={cancelReservation}
      />
    </Flex>
  );
}
