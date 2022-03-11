import { Button, ModalBody, ModalFooter, Text } from '@chakra-ui/react';

import { Hour } from 'types/hour';

export interface ConfirmReservationModalProps {
  onToggle(): void;
  selectedTime: Hour;
  selectedDate: Date;
  bookTableQuery: () => void;
}

export function ConfirmReservationModal(props: ConfirmReservationModalProps) {
  const { onToggle, selectedTime, selectedDate, bookTableQuery } = props;

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
