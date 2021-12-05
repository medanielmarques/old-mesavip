import { Box, Flex, Divider, Button, Text } from '@chakra-ui/react';

export default function Reservations() {
  return (
    <Box
      w={310}
      h={190}
      p='7px'
      borderRadius={10}
      // temp
      m='0 auto'
    >
      <Flex w={275} h={100} mt='5px' ml='5px'>
        <Box w={115} h={78} borderRadius={10} textAlign='center'>
          <Text as='h2' mt='5px' fontSize={35} fontWeight={500}>
            22
          </Text>
          <Text as='span'>December</Text>
        </Box>

        <Flex>
          Info Wrapper
          <Box>Name and rate</Box>
          <Box>Time</Box>
          <Flex>Address</Flex>
        </Flex>
      </Flex>

      <Divider />

      <Flex justify='center' m='10px 0'>
        <Button variant='outline'>Cancel reservation</Button>
      </Flex>
      {/* <Button variant='outline'>Rate reservation</Button> */}
    </Box>
  );
}
