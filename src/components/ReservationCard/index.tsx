import { Box, Flex, Divider, Button } from '@chakra-ui/react';
import { Address } from './Address';
import { RestaurantNameAndRate } from './RestaurantNameAndRate';
import { ScheduledDate } from './ScheduledDate';
import { ScheduledTime } from './ScheduledTime';

export default function ReservationCard() {
  return (
    <Box w='96' h='52' p='4' borderRadius='md' shadow='base'>
      <Flex w='68' h='32' ml='5px' m='0 auto' gridGap='3'>
        <ScheduledDate />

        <Flex width='100%' direction='column'>
          <RestaurantNameAndRate />
          <ScheduledTime />
          <Address />
        </Flex>
      </Flex>

      <Divider />

      <Flex justify='center' m='12px 0'>
        <Button variant='outline' width='56' height='10' fontSize='16px'>
          Cancel reservation
        </Button>
      </Flex>
      {/* <Button variant='outline'>Rate reservation</Button> */}
    </Box>
  );
}
