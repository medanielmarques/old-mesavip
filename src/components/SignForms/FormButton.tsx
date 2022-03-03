import { forwardRef, ForwardRefRenderFunction } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

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
