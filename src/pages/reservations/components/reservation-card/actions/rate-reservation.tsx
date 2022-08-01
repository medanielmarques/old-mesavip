import { createContext, FormEvent, useContext, useState } from 'react';
import { Button, Flex, ModalBody, Select, Textarea } from '@chakra-ui/react';
import { useIsFetching } from 'react-query';
import { useModal } from 'hooks';
import { useReservationCardCtx } from '..';
import { useRateReservation } from 'pages/reservations/hooks';

interface RateReservationContextData {
  toggleRateReservationModal: () => void;
}

export const RateReservationContext = createContext(
  {} as RateReservationContextData
);
export const useRateReservationCtx = () => useContext(RateReservationContext);

export function RateReservation() {
  const { Modal, onToggle: toggleRateReservationModal } = useModal({
    title: 'Rate reservation',
    closeButton: false,
  });

  return (
    <RateReservationContext.Provider value={{ toggleRateReservationModal }}>
      <RateReservationButton />

      <Modal>
        <RateResevationModal />
      </Modal>
    </RateReservationContext.Provider>
  );
}

function RateReservationButton() {
  const { id } = useReservationCardCtx();
  const { toggleRateReservationModal } = useRateReservationCtx();

  const isLoading =
    useIsFetching(`cancel-reservation-${id}`) > 0 ? true : false;

  return (
    <Flex justify='center' my='3'>
      <Button
        variant='outline'
        width='56'
        height='10'
        gridGap='2'
        fontSize='md'
        isLoading={isLoading}
        loadingText='Cancelling'
        onClick={toggleRateReservationModal}
      >
        Rate reservation
      </Button>
    </Flex>
  );
}

function RateResevationModal() {
  const {
    restaurant,
    restaurant_id,
    id: reservation_id,
  } = useReservationCardCtx();

  const { rateReservation } = useRateReservation();

  const [comment, commentSet] = useState('');
  const [score, scoreSet] = useState(0);

  async function handleSubmit(e: FormEvent<HTMLDivElement>) {
    e.preventDefault();

    rateReservation({
      restaurant_id,
      reservation_id,
      rating: score,
      comment,
    });
  }

  return (
    <ModalBody>
      <Flex
        as='form'
        onSubmit={handleSubmit}
        direction='column'
        gridGap='5'
        align='center'
      >
        <Select
          placeholder={`Rate your experience on ${restaurant}`}
          onChange={(e) => scoreSet(parseInt(e.target.value))}
        >
          <option value={1}>1 star - ⭐</option>
          <option value={2}>2 stars - ⭐⭐</option>
          <option value={3}>3 stars - ⭐⭐⭐</option>
          <option value={4}>4 stars - ⭐⭐⭐⭐</option>
          <option value={5}>5 stars - ⭐⭐⭐⭐⭐</option>
        </Select>

        {/* Input e Select precisam estar preenchidos para enviar a requisição */}
        <Textarea
          name='comment'
          placeholder='Your opinion on the restaurant'
          value={comment}
          onChange={(e) => commentSet(e.target.value)}
        />

        <Button type='submit' variant='outline' height='12'>
          Rate it!
        </Button>
      </Flex>
    </ModalBody>
  );
}
