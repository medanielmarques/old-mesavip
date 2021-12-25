import { useContext } from 'react';
import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';
import { ReservationCardContext } from './contexts/ReservationCardContext';

export function RestaurantNameAndRate() {
  const {
    reservation: { restaurant, avg_rating },
  } = useContext(ReservationCardContext);

  return (
    <Flex justify='space-between'>
      {/* Currrently, if the name displayed is too big, it will break the layout */}
      <Text fontWeight='500'>{restaurant}</Text>

      <Flex justify='space-between' alignItems='center' color='#ffbb00'>
        <Icon as={FaStar} />
        <Text ml='1' fontWeight='500'>
          {avg_rating}
        </Text>
      </Flex>
    </Flex>
  );
}
