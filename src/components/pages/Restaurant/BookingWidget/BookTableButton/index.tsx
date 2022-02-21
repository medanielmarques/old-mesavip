import { Button } from '@chakra-ui/react';

import { Hour } from 'interfaces/hour';
import { useModal } from 'hooks/useModal';
import { ConfirmReservationModal } from './ConfirmReservationModal';
import { useContext } from 'react';
import { RestaurantContext } from 'pages/restaurant/[id]';

interface BookTableButtonProps {
  selectedTime: Hour;
  selectedDate: Date;
}

export function BookTableButton(props: BookTableButtonProps) {
  const { selectedTime, selectedDate } = props;
  const { name } = useContext(RestaurantContext);

  const { Modal, onToggle } = useModal({
    title: `Confirm reservation at ${name}?`,
  });

  return (
    <>
      <Button
        w={326}
        h='14'
        bg='red.300'
        _hover={{ bg: 'red.400' }}
        color='white'
        fontSize='xl'
        onClick={onToggle}
      >
        Reserve a table at {selectedTime.hour}
      </Button>

      <Modal>
        <ConfirmReservationModal
          onToggle={onToggle}
          selectedTime={selectedTime}
          selectedDate={selectedDate}
        />
      </Modal>
    </>
  );
}
