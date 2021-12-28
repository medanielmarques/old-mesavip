import {
  Heading,
  AlertDialogHeader as ChakraAlertDialogHeader,
} from '@chakra-ui/react';

export function AlertDialogHeader() {
  return (
    <ChakraAlertDialogHeader align='center' fontSize='lg' fontWeight='bold'>
      <Heading size='lg'>Cancel reservation</Heading>
    </ChakraAlertDialogHeader>
  );
}
