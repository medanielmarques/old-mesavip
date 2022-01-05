import { Input as ChakraInput, InputProps } from '@chakra-ui/react';

export function Input({ ...rest }: InputProps) {
  return (
    <ChakraInput
      height='70px'
      padding='20px'
      width='400px'
      fontSize='17px'
      _placeholder={{
        color: '#7d8791',
      }}
      {...rest}
    />
  );
}
