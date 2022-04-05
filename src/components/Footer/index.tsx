import { Box, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Box
      display='flex'
      alignItems='center'
      width='100%'
      height='40'
      mt='20'
      bg='gray.700'
    >
      <Text fontSize='lg' mx='auto' color='white'>
        Footer
      </Text>
    </Box>
  );
}
