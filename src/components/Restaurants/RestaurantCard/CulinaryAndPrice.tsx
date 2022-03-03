import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { RestaurantCardContext } from '.';

export function CulinaryAndPrice() {
  const { culinary } = useContext(RestaurantCardContext);

  return (
    <Flex justify='space-between' fontSize='14px'>
      <Text>{culinary}</Text>
      <Text>$25 - $50</Text>
    </Flex>
  );
}
