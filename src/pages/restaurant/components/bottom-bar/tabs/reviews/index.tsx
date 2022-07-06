import { useQuery } from 'react-query';
import { Stack, Text } from '@chakra-ui/react';

import { ReviewCard } from './review-card';

import { Rating as Review } from 'types';
import { api } from 'services/api';
import { useRestaurantCtx } from 'pages/restaurant/hooks';
import { ReviewCardSkeleton } from 'core/feedback/skeleton/review-card-skeleton';

export function Reviews() {
  const { id, name } = useRestaurantCtx();

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
