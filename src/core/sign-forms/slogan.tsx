import { Text } from '@chakra-ui/react';

export function Slogan() {
  return (
    <Text fontSize='xl' mb={50} align='center'>
      <Text as='b' color='red.400'>
        MESAVIP{' '}
      </Text>
      helps you to make reservations in your favorite restaurants.
    </Text>
  );
}
