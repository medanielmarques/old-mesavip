import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

interface RestaurantNameAndRateProps {
  restaurant: string;
  avg_rating: number;
}

export function RestaurantNameAndRate(props: RestaurantNameAndRateProps) {
  const { restaurant, avg_rating } = props;

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
