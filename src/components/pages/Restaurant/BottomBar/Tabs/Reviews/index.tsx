import { useContext, useEffect, useState } from 'react';
import { Stack, Text } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { ReviewCard } from './ReviewCard';
import { Rating as Review } from 'interfaces/rating';
import { api } from 'services/api';

export function Reviews() {
  const { id, name } = useContext(RestaurantContext);
  const [reviews, reviewsSet] = useState([] as Review[]);

  useEffect(() => {
    api
      .get(`ratings/list-all-restaurant-reviews/${id}`)
      .then((response) => reviewsSet(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Stack spacing='4'>
      <Text fontSize='2xl' fontWeight='700'>
        Reviews of {name} ({reviews.length})
      </Text>

      <Text fontSize='sm'>
        Read what people think about {name}. All the restaurant reviews are
        written by verified MEsavip diners.
      </Text>

      <Stack spacing='3'>
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </Stack>
    </Stack>
  );
}
