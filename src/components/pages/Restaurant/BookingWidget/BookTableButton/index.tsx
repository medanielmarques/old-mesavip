import { useContext } from 'react';
import { Button, Tooltip } from '@chakra-ui/react';

import { ConfirmReservationModal } from './ConfirmReservationModal';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { AuthContext } from 'contexts/AuthContext';
import { useConfirmReservation } from 'hooks/useConfirmReservation';
import { useModal } from 'hooks/useModal';
import { Hour } from 'types/hour';

interface BookTableButtonProps {
  selectedTime: Hour;
  selectedDate: Date;
}

export function BookTableButton(props: BookTableButtonProps) {
  const { selectedTime, selectedDate } = props;
  const { name } = useContext(RestaurantContext);
  const { isAuthenticated } = useContext(AuthContext);

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
