import { Flex, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export function RestaurantNameAndRate() {
  return (
    <Flex justify='space-between'>
      {/* Currrently, if the name displayed is too big, it will break the layout */}
      <Text fontWeight='500'>Comida Mineira</Text>

      <Flex justify='space-between' alignItems='center' color='#ffbb00'>
        <Icon as={FaStar} />
        <Text ml='1' fontWeight='500'>
          4.2
        </Text>
      </Flex>
    </Flex>
  );
}
