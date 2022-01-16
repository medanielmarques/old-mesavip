import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FaClock } from 'react-icons/fa';

export function Schedule() {
  return (
    <Flex>
      <FaClock />
      <Box>
        <Text>Closed Now</Text>
        <Stack>
          <Flex justify='space-between'>
            <Text>Monday</Text>
            <Text>Closed</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text>Monday</Text>
            <Text>5:30 pm - 9:00 pm</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text>Monday</Text>
            <Text>5:30 pm - 9:00 pm</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text>Monday</Text>
            <Text>5:30 pm - 9:00 pm</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text>Monday</Text>
            <Text>5:30 pm - 9:00 pm</Text>
          </Flex>
          <Flex justify='space-between'>
            <Text>Monday</Text>
            <Text>5:30 pm - 9:00 pm</Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
}
