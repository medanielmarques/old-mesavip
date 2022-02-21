import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

export function Input({ ...rest }: InputProps) {
  return (
    <ChakraInput
      w={{ base: '320px', md: '400px' }}
      h='70px'
      p='5'
      fontSize='md'
      _placeholder={{ color: 'gray.500' }}
      {...rest}
    />
  );
}
