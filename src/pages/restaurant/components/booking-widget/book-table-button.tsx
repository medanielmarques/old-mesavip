import {
  Button,
  ModalBody,
  ModalFooter,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import { useModal } from 'hooks';
import { Hour } from 'types';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';
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

interface ConfirmReservationModalProps {
  onToggle(): void;
  selectedTime: Hour;
  selectedDate: Date;
  bookTableQuery: () => void;
}

function ConfirmReservationModal({
  onToggle,
  selectedTime,
  selectedDate,
  bookTableQuery,
}: ConfirmReservationModalProps) {
  return (
    <>
      <ModalBody>
        <Text>
          <b>Date: </b> {selectedDate.toLocaleDateString()}
        </Text>

        <Text>
          <b>Time: </b> {selectedTime.hour}
        </Text>
      </ModalBody>

      <ModalFooter mr='4' py='6' borderColor='gray.200' borderBottomRadius='md'>
        <Button variant='ghost' h='12' color='gray.500' onClick={onToggle}>
          Cancel
        </Button>

        <Button
          h='12'
          ml='3'
          colorScheme='red'
          bg='red.300'
          rounded='lg'
          onClick={bookTableQuery}
        >
          Yes, reserve it!
        </Button>
      </ModalFooter>
    </>
  );
}
