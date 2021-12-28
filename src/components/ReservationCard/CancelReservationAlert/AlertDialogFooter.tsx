import { MutableRefObject } from 'react';
import {
  Button,
  AlertDialogFooter as ChakraAlertDialogFooter,
} from '@chakra-ui/react';

interface AlertDialogFooterProps {
  onToggle(): void;
  onClick(): void;
  cancelRef: MutableRefObject<null>;
}

export function AlertDialogFooter({
  onToggle,
  onClick,
  cancelRef,
}: AlertDialogFooterProps) {
  return (
    <ChakraAlertDialogFooter justifyContent='center'>
      <Button
        background='gray.200'
        size='lg'
        ref={cancelRef}
        onClick={onToggle}
      >
        No, I don't
      </Button>

      <Button colorScheme='red' size='lg' ml={3} onClick={onClick}>
        Yes, I do
      </Button>
    </ChakraAlertDialogFooter>
  );
}
