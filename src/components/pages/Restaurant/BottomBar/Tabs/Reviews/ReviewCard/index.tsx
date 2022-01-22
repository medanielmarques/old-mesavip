import { Box, Stack } from '@chakra-ui/react';

import { Rating as Review } from 'interfaces/rating';
import { Score } from './Score';
import { ReviewerAndDate } from './ReviewerAndDate';
import { Description } from './Description';

interface ReviewProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewProps) {
  return (
    <Box
      border='1px solid #f0f2f5'
      borderRadius='sm'
      w={781}
      h={187}
      p='25px 30px'
    >
      <Stack spacing='4'>
        <Score score={review.rating} />
        <ReviewerAndDate client={review.client} date={review.date} />
        <Description description={review.comment} />
      </Stack>
    </Box>
  );
}
