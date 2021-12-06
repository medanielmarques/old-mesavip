import { Flex, Text } from '@chakra-ui/react';

export function ScheduledDate() {
  return (
    <Flex
      w='40'
      h='28'
      bg='gray.100'
      borderRadius='md'
      textAlign='center'
      direction='column'
      justifyContent='center'
    >
      <Text fontSize='4xl' fontWeight='700'>
        22
      </Text>

      <Text fontWeight='500'>December</Text>
    </Flex>
  );
}
