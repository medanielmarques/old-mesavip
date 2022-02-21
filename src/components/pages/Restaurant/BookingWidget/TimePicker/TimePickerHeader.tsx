import { Flex, Text } from '@chakra-ui/react';
import { FaRegClock } from 'react-icons/fa';

export function TimePickerHeader() {
  return (
    <Flex gridGap='4' align='center'>
      <FaRegClock size='22' color='gray' />

      <Text color='red.400' fontWeight='500'>
        Choose a time:
      </Text>
    </Flex>
  );
}
