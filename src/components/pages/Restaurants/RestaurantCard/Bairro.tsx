import { useContext } from 'react';
import { Text } from '@chakra-ui/react';

import { RestaurantCardContext } from '.';

export function Bairro() {
  const { bairro } = useContext(RestaurantCardContext);

  return <Text fontSize='14px'>{bairro}</Text>;
}
