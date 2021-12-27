import { useContext, useState } from 'react';
import {
  Button,
  Flex,
  Input,
  ModalBody as ChakraModalBody,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { RateReservation } from 'src/http/reservation';
import { ReservationCardContext } from '../contexts/ReservationCardContext';
import { ReservationContext } from 'src/pages/reservations';

interface ModalBodyProps {
  closeModal(): void;
}

export function ModalBody({ closeModal }: ModalBodyProps) {
  const [comment, commentSet] = useState('');
  const [rating, ratingSet] = useState(0);

  const { refreshPastReservations } = useContext(ReservationContext);

  const {
    reservation: { restaurant, restaurant_id, id: reservation_id },
  } = useContext(ReservationCardContext);

  const toast = useToast();

  function handleSubmit(e: any) {
    e.preventDefault();

    RateReservation({
      restaurant_id,
      reservation_id,
      rating,
      comment,
    }).then(() => {
      closeModal();
      refreshPastReservations();
      toast({
        title: 'Rate registered successfully!',
        status: 'success',
        duration: 2000,
        variant: 'subtle',
        position: 'top',
        isClosable: true,
      });
    });
  }

  function handleSelectChange(e: any) {
    ratingSet(e.target.value);
  }

  return (
    <ChakraModalBody>
      <Flex
        onSubmit={handleSubmit}
        as='form'
        direction='column'
        gridGap='5'
        align='center'
      >
        <Select
          placeholder={`Rate your experience on ${restaurant}`}
          onChange={handleSelectChange}
        >
          <option value='1'>1 star</option>
          <option value='2'>2 stars</option>
          <option value='3'>3 stars</option>
          <option value='4'>4 stars</option>
          <option value='5'>5 stars</option>
        </Select>

        {/* Input e Select precisam estar preenchidos para enviar a requisição */}
        <Textarea
          name='comment'
          type='text'
          placeholder='Your opinion on the restaurant'
          value={comment}
          onChange={(e: any) => commentSet(e.target.value)}
        />

        <Button type='submit' variant='outline' height='12'>
          Rate it!
        </Button>
      </Flex>
    </ChakraModalBody>
  );
}
