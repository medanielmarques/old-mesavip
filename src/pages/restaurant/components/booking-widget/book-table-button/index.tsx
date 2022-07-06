import { Button, Tooltip } from '@chakra-ui/react';

import { ConfirmReservationModal } from './confirm-reservation-modal';

import { useModal } from 'hooks';
import { Hour } from 'types';
import { useRestaurantCtx } from 'pages/restaurant/hooks';
import { useAuth } from 'contexts';
import { useConfirmReservation } from 'pages/restaurant/hooks/use-confirm-reservation';

interface BookTableButtonProps {
  selectedTime: Hour;
  selectedDate: Date;
}

export function BookTableButton(props: BookTableButtonProps) {
  const { selectedTime, selectedDate } = props;
  const { name } = useRestaurantCtx();
  const { isAuthenticated } = useAuth();

  const { Modal, onToggle } = useModal({
    title: `Confirm reservation at ${name}?`,
  });

  const { bookTableQuery } = useConfirmReservation({
    onToggle,
    selectedDate,
    selectedTime,
  });

  return (
    <>
      <Tooltip
        shouldWrapChildren
        isDisabled={isAuthenticated}
        label='You need to be signed in to reserve a table!'
      >
        <Button
          w={326}
          h='14'
          bg='red.300'
          _hover={{ bg: 'red.400' }}
          color='white'
          fontSize='xl'
          onClick={onToggle}
          disabled={!isAuthenticated}
        >
          Reserve a table at {selectedTime.hour}
        </Button>
      </Tooltip>

      <Modal>
        <ConfirmReservationModal
          onToggle={onToggle}
          selectedTime={selectedTime}
          selectedDate={selectedDate}
          bookTableQuery={bookTableQuery}
        />
      </Modal>
    </>
  );
}
