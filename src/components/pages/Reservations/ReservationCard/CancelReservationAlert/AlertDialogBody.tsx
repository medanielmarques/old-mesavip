import {
  Text,
  AlertDialogBody as ChakraAlertDialogBody,
} from '@chakra-ui/react';

export function AlertDialogBody() {
  return (
    <ChakraAlertDialogBody align='center'>
      <Text fontSize='lg' fontWeight='500'>
        Are you sure? Do you want to cancel this reservation?
      </Text>
    </ChakraAlertDialogBody>
  );
}
