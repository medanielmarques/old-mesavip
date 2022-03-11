import { useContext } from 'react';
import { useQuery } from 'react-query';
import { Flex, HStack, ModalBody, Stack, Text } from '@chakra-ui/react';

import { ReservationCardContext } from '../..';
import { api } from 'services/api';
import { Rating } from 'types/rating';

export function ShowRatingModal() {
  const { id } = useContext(ReservationCardContext);

  const { data: rating } = useQuery('list-rating-by-id', async () => {
    return api.get<Rating>(`ratings/list-by-id/${id}`).then((res) => res.data);
  });

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
