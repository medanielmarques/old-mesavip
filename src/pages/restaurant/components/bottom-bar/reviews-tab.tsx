import { useQuery } from 'react-query';
import { Skeleton, Stack, Text } from '@chakra-ui/react';

import { ReviewCard } from './review-card';
import { Rating as Review } from 'types';
import { api } from 'services/api';
import { useRestaurantCtx } from 'pages/restaurant/[id].page';

function useReviews() {
  const { id } = useRestaurantCtx();

  return useQuery('list-reviews', async () => {
    return api
      .get<Review[]>(`ratings/list-all-restaurant-reviews/${id}`)
      .then((res) => res.data);
  });
}

export function ReviewsTab() {
  const { name } = useRestaurantCtx();
  const { data: reviews, isLoading } = useReviews();

  return (
    <Stack spacing='4'>
      <Text fontSize='2xl' fontWeight='700'>
        Reviews of {name} ({reviews?.length})
      </Text>

      <Text fontSize='sm'>
        Read what people think about {name}. All the restaurant reviews are
        written by verified Mesavip diners.
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

function ReviewCardSkeleton() {
  return (
    <Stack spacing='3'>
      {Array.from({ length: 10 }).map((_, i) => (
        <Skeleton key={i} h='44' />
      ))}
    </Stack>
  );
}
