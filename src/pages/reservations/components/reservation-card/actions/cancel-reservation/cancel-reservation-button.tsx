import { useContext } from 'react';
import { useIsFetching } from 'react-query';
import { Button, Flex } from '@chakra-ui/react';

import { CancelReservationContext } from '..';
import { useReservationCardCtx } from 'pages/reservations/hooks';

export function CancelReservationButton() {
  const { id, canceled } = useReservationCardCtx();
  const { onToggle } = useContext(CancelReservationContext);

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
        isDisabled={canceled}
        onClick={onToggle}
      >
        {!!canceled ? 'Canceled' : 'Cancel reservation'}
      </Button>
    </Flex>
  );
}
