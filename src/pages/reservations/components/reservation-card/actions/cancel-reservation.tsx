import { createContext, useContext } from 'react';
import { Button, Flex, ModalBody, ModalFooter, Text } from '@chakra-ui/react';
import { useIsFetching } from 'react-query';
import { useModal } from 'hooks';
import { useReservationCardCtx } from '..';
import { useCancelReservation } from 'pages/reservations/hooks';
import { queryClient } from 'services/query-client';

interface CancelReservationContextData {
  toggleCancelReservationModal: () => void;
}

const CancelReservationContext = createContext(
  {} as CancelReservationContextData
);
export const useCancelReservationCtx = () =>
  useContext(CancelReservationContext);

export function CancelReservation() {
  const { Modal, onToggle: toggleCancelReservationModal } = useModal({
    title: 'Cancel reservation',
    closeButton: false,
  });

  return (
    <CancelReservationContext.Provider value={{ toggleCancelReservationModal }}>
      <CancelReservationButton />

      <Modal>
        <CancelReservationModal />
      </Modal>
    </CancelReservationContext.Provider>
  );
}

function CancelReservationButton() {
  const { id, canceled } = useReservationCardCtx();
  const { toggleCancelReservationModal } = useCancelReservationCtx();

  const isLoading =
    useIsFetching(`cancel-reservation-${id}`) > 0 ? true : false;

  return (
    <Flex justify='center' my='3'>
      <Button
        variant='outline'
        width='56'
        height='10'
        gridGap='2'
        fontSize='md'
        isLoading={isLoading}
        loadingText='Cancelling'
        isDisabled={canceled}
        onClick={toggleCancelReservationModal}
      >
        {!!canceled ? 'Canceled' : 'Cancel reservation'}
      </Button>
    </Flex>
  );
}

function CancelReservationModal() {
  const { id } = useReservationCardCtx();
  const { toggleCancelReservationModal } = useCancelReservationCtx();

  useCancelReservation();

  function handleClick() {
    queryClient.fetchQuery(`cancel-reservation-${id}`);
  }

  return (
    <>
      <ModalBody>
        <Text fontSize='lg' fontWeight='500'>
          Are you sure you want to cancel the reservation?
        </Text>
      </ModalBody>

      <ModalFooter>
        <Button
          colorScheme='gray'
          size='md'
          onClick={toggleCancelReservationModal}
        >
          No, I don&apos;t
        </Button>

        <Button colorScheme='red' size='md' ml={3} onClick={handleClick}>
          Yes, I do
        </Button>
      </ModalFooter>
    </>
  );
}
