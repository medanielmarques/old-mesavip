import { Button, Flex, HStack, ModalBody, Stack, Text } from '@chakra-ui/react';
import { useModal } from 'hooks';
import { useRating } from 'pages/reservations/hooks';
import { useReservationCardCtx } from '..';

export function ShowRating() {
  const { restaurant } = useReservationCardCtx();

  const { Modal, onToggle: toggleShowRatingModal } = useModal({
    title: `That was your rating on: ${restaurant}`,
    closeButton: false,
  });

  return (
    <>
      <ShowRatingButton toggleShowRatingModal={toggleShowRatingModal} />

      <Modal>
        <ShowRatingModal />
      </Modal>
    </>
  );
}

function ShowRatingButton({
  toggleShowRatingModal,
}: {
  toggleShowRatingModal: () => void;
}) {
  return (
    <Flex justify='center' my='3'>
      <Button
        variant='outline'
        width='56'
        height='10'
        gridGap='2'
        fontSize='md'
        onClick={toggleShowRatingModal}
      >
        Show rating
      </Button>
    </Flex>
  );
}

function ShowRatingModal() {
  const { rating } = useRating();

  return (
    <>
      <ModalBody mb='6'>
        <Stack fontSize='md'>
          <Flex direction='column' gridGap='4' mb='2'>
            <HStack>
              <Text as='b'>Date: </Text>
              <Text>{rating?.date}</Text>
            </HStack>

            <HStack>
              <Text as='b'>Rating: </Text>
              <Text>{rating?.rating} stars</Text>
            </HStack>
          </Flex>

          <Stack>
            <Text as='b'>Your opinion: </Text>
            <Text wordBreak='break-all'>{rating?.comment}</Text>
          </Stack>
        </Stack>
      </ModalBody>
    </>
  );
}
