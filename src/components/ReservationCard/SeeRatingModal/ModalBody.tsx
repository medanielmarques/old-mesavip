import { useContext, useState } from 'react';
import {
  Flex,
  HStack,
  ModalBody as ChakraModalBody,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReservationCardContext } from '../contexts/ReservationCardContext';
import { Rating } from 'src/interfaces/rating';
import { useEffect } from 'react';
import { api } from 'src/services/api';

export function ModalBody() {
  const {
    reservation: { id: reservation_id },
  } = useContext(ReservationCardContext);

  const [rating, ratingSet] = useState({} as Rating);

  useEffect(() => {
    api
      .get(`ratings/list-by-id/${reservation_id}`)
      .then((response) => ratingSet(response.data));
  }, [reservation_id]);

  return (
    <ChakraModalBody mb='2'>
      <Stack fontSize='18px'>
        <Flex gridGap='4' mb='2'>
          <HStack>
            <Text as='b'>Date: </Text>
            <Text>{rating.date}</Text>
          </HStack>

          <HStack>
            <Text as='b'>Rating: </Text>
            <Text>{rating.rating} stars</Text>
          </HStack>
        </Flex>

        <Stack>
          <Text as='b'>Your opinion: </Text>
          <Text wordBreak='break-all'>
            It was great! Crawfish were seasoned perfectly, even bought some
            seasoning from the market inside of the restaurant. We were seated
            quickly, service was wonderful. They were very accommodating to the
            children in our party.
          </Text>
        </Stack>
      </Stack>
    </ChakraModalBody>
  );
}
