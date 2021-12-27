import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';

interface CancelReservationAlertProps {
  isOpen: boolean;
  onToggle(): void;
  onClick(): void;
}

export function CancelReservationAlert({
  isOpen,
  onToggle,
  onClick,
}: CancelReservationAlertProps) {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onToggle}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader align='center' fontSize='lg' fontWeight='bold'>
            <Heading size='lg'>Cancel reservation</Heading>
          </AlertDialogHeader>

          <AlertDialogBody align='center'>
            <Text fontSize='lg' fontWeight='500'>
              Are you sure? Do you want to cancel this reservation?
            </Text>
          </AlertDialogBody>

          <AlertDialogFooter justifyContent='center'>
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
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
