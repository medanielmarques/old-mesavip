import { Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { RestaurantCardContext } from './contexts/RestaurantCardContext';

export function Bairro() {
  const { bairro } = useContext(RestaurantCardContext);

  return <Text fontSize='14px'>{bairro}</Text>;
}
