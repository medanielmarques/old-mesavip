import {
  Button,
  ModalBody,
  ModalFooter,
  Text,
  Tooltip,
} from '@chakra-ui/react';

import { useModal } from 'hooks';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';
import { useAuth } from 'contexts';
import { useConfirmReservation } from 'pages/restaurant/hooks/use-confirm-reservation';
import { useDatePickerStore } from 'pages/restaurant/hooks/date-picker-store';

export function BookTableButton() {
  const { selectedTime } = useDatePickerStore();
  const { name } = useRestaurantCtx();
  const { isAuthenticated } = useAuth();

  const { Modal, onToggle: toggleModal } = useModal({
    title: `Confirm reservation at ${name}?`,
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
          onClick={toggleModal}
          disabled={!isAuthenticated}
        >
          Reserve a table at {selectedTime.hour}
        </Button>
      </Tooltip>

      <Modal>
        <ConfirmReservationModal toggleModal={toggleModal} />
      </Modal>
    </>
  );
}

function ConfirmReservationModal({ toggleModal }: { toggleModal: () => void }) {
  const { selectedDate, selectedTime } = useDatePickerStore();
  const { bookTableQuery } = useConfirmReservation({ toggleModal });

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
        <Button variant='ghost' h='12' color='gray.500' onClick={toggleModal}>
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
