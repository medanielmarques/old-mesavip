import { Box, Flex, Text } from '@chakra-ui/react';
import { Rating as Review } from 'interfaces/rating';
import { RatingRank } from 'utils/ratingRank';

interface ReviewProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewProps) {
  console.log(review);
  const ratingRank = RatingRank(review.rating);

  return (
    <Box border='1px solid #f0f2f5' borderRadius='sm'>
      <Flex>
        <Text>{ratingRank.scoreMessage}</Text>
        <Text color={ratingRank.scoreColor}>{review}</Text>
      </Flex>
    </Box>
  );
}
