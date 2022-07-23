import { FormEvent, useState, useEffect } from 'react';
import { Button, Flex, ModalBody, Select, Textarea } from '@chakra-ui/react';

import { useReservationCardCtx } from 'pages/reservations/hooks';
import { useRateReservation } from 'pages/reservations/hooks';

export function RateResevationModal() {
  const {
    restaurant,
    restaurant_id,
    id: reservation_id,
  } = useReservationCardCtx();

  const { rateReservation } = useRateReservation();

  const [comment, commentSet] = useState('');
  const [score, scoreSet] = useState(0);

  useEffect(() => {
    console.log(score);
  }, [score]);

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
