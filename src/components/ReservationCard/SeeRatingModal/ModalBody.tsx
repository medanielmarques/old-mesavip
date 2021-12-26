import { useContext, useState } from 'react';
import { Flex, ModalBody as ChakraModalBody, Text } from '@chakra-ui/react';
import { ReservationCardContext } from '../contexts/ReservationCardContext';
import { Rating } from 'src/interfaces/rating';
import { useEffect } from 'react';
import { api } from 'src/services/api';

export function ModalBody() {
  const {
    reservation: { restaurant, restaurant_id, id: reservation_id },
  } = useContext(ReservationCardContext);

  const [rating, ratingSet] = useState({} as Rating);

  useEffect(() => {
    api
      .get(`ratings/list-by-id/${reservation_id}`)
      .then((response) => ratingSet(response.data));
  }, []);

  return (
    <ChakraModalBody>
      {console.log(rating)}
      <Flex>
        <Text>{rating.rating}</Text>
        <Text>{rating.comment}</Text>
        <Text>{rating.date}</Text>
      </Flex>
    </ChakraModalBody>
  );
}
