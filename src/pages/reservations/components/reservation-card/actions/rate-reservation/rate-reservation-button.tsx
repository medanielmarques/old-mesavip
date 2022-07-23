import { useContext } from 'react';
import { useIsFetching } from 'react-query';
import { Button, Flex } from '@chakra-ui/react';

import { useReservationCardCtx } from 'pages/reservations/hooks';
import { RateReservationContext } from './rate-reservation';

export function RateReservationButton() {
  const { id } = useReservationCardCtx();
  const { onToggle } = useContext(RateReservationContext);

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
        onClick={onToggle}
      >
        Rate reservation
      </Button>
    </Flex>
  );
}
