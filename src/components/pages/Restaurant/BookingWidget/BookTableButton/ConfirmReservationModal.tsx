import { useContext } from 'react';
import {
  Button,
  ModalBody,
  ModalFooter,
  Text,
  useToast,
} from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Hour } from 'interfaces/hour';
import { api } from 'services/api';
import { queryClient } from 'services/queryClient';

export interface ConfirmReservationModalProps {
  onToggle(): void;
  selectedTime: Hour;
  selectedDate: Date;
}

export function ConfirmReservationModal(props: ConfirmReservationModalProps) {
  const { onToggle, selectedTime, selectedDate } = props;
  const { id: restaurant_id } = useContext(RestaurantContext);

  async function handleBookTable() {
    await api
      .post('/reservations/create', {
        restaurant_id,
        time: selectedTime.hour,
        date: selectedDate,
      })
      .finally(() => {
        queryClient.invalidateQueries('available-hours');
        onToggle();
        toastAction();
      });
  }

  const toast = useToast();
  function toastAction() {
    toast({
      title: 'Reservation confirmed sucessfully',
      status: 'success',
      duration: 4000,
      variant: 'subtle',
      position: 'top',
      isClosable: true,
    });
  }

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
          ml={3}
          h='12'
          colorScheme='red'
          bg='red.300'
          rounded='lg'
          onClick={handleBookTable}
        >
          Yes, reserve it!
        </Button>
      </ModalFooter>
    </>
  );
}
