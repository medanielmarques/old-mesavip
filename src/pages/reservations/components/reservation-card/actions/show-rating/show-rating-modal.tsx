import { Flex, HStack, ModalBody, Stack, Text } from '@chakra-ui/react';

import { useRating } from 'pages/reservations/hooks';

export function ShowRatingModal() {
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
