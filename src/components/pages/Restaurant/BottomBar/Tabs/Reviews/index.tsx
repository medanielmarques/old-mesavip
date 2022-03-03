import { useContext } from 'react';
import { useQuery } from 'react-query';
import { Stack, Text } from '@chakra-ui/react';

import { ReviewCardSkeleton } from 'components/Feedback/Skeleton/ReviewCardSkeleton';
import { ReviewCard } from './ReviewCard';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Rating as Review } from 'interfaces/rating';
import { api } from 'services/api';

export function Reviews() {
  const { id, name } = useContext(RestaurantContext);

  const { data: reviews, isLoading } = useQuery('list-reviews', async () => {
    return api
      .get<Review[]>(`ratings/list-all-restaurant-reviews/${id}`)
      .then((res) => res.data);
  });

  return (
    <Stack spacing='4'>
      <Text fontSize='2xl' fontWeight='700'>
        Reviews of {name} ({reviews?.length})
      </Text>

      <Text fontSize='sm'>
        Read what people think about {name}. All the restaurant reviews are
        written by verified MEsavip diners.
      </Text>

      {isLoading ? (
        <ReviewCardSkeleton />
      ) : (
        <Stack spacing='3'>
          {reviews?.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
