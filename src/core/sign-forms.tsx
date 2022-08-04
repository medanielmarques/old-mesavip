import { ForwardRefRenderFunction } from 'react';
import {
  FormControlProps,
  Flex,
  ButtonProps,
  Button,
  forwardRef,
  Text,
  InputProps,
  Input as ChakraInput,
} from '@chakra-ui/react';

export function FormContainer({
  children,
  onSubmit,
  ...rest
}: FormControlProps) {
  return (
    <Flex
      as='form'
      align='center'
      direction='column'
      w={{ base: 320, md: 400 }}
      minH='100vh'
      pt={15}
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </Flex>
  );
}

const FormButtonBase: ForwardRefRenderFunction<
  HTMLButtonElement,
  ButtonProps
> = ({ children, ...rest }, ref) => {
  return (
    <Button type='submit' w='full' h={70} fontSize='xl' color='white' {...rest}>
      {children}
    </Button>
  );
};
export const FormButton = forwardRef(FormButtonBase);

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
