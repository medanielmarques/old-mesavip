import { Box, Stack } from '@chakra-ui/react';

import { Score } from './Score';
import { ReviewerAndDate } from './ReviewerAndDate';
import { Description } from './Description';

import { Rating as Review } from 'types/rating';

interface ReviewProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewProps) {
  return (
    <Box border='1px solid #f0f2f5' borderRadius='sm' py='6' px='8'>
      <Stack spacing='4'>
        <Score score={review.rating} />
        <ReviewerAndDate client={review.client} date={review.date} />
        <Description description={review.comment} />
      </Stack>
    </Box>
  );
}
