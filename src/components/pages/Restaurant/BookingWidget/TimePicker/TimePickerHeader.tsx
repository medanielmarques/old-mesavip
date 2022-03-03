import { Flex, Text } from '@chakra-ui/react';
import { FaRegClock } from 'react-icons/fa';

export function TimePickerHeader() {
  return (
    <Flex gridGap='4' align='center'>
      <FaRegClock size='22' color='gray' />

      <Text fontWeight='500' color='red.400'>
        Choose a time:
      </Text>
    </Flex>
  );
}
