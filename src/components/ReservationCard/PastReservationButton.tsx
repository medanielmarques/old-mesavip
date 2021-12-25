import { useContext } from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { ReservationCardContext } from './contexts/ReservationCardContext';

export function PastReservationButton() {
  const { onToggle, reservation } = useContext(ReservationCardContext);

  function handleClick() {
    if (!!reservation.rated) {
      console.log('Seeing my rate');
    } else {
      onToggle();
    }
  }

  return (
    <Flex justify='center' m='12px 0'>
      <Button
        onClick={handleClick}
        variant='outline'
        width='56'
        height='10'
        fontSize='16px'
      >
        {!!reservation.rated ? 'See your rating' : 'Rate reservation'}
      </Button>
    </Flex>
  );
}
