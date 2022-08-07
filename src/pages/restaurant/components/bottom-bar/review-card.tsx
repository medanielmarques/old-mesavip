import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { useReviewScore } from 'pages/restaurant/hooks';
import { FaUserCircle } from 'react-icons/fa';
import { Rating as Review } from 'types';

export function ReviewCard({ review }: { review: Review }) {
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

function Score({ score }: { score: number }) {
  const scoreRank = useReviewScore(Math.round(score));

  return (
    <Flex justify='space-between' align='center'>
      <Text fontSize='2xl' color={scoreRank.color}>
        {scoreRank.message}
      </Text>
      <Box
        w={12}
        h={6}
        textAlign='center'
        bg={scoreRank.color}
        color='white'
        borderRadius='xl'
      >
        {score}/5
      </Box>
    </Flex>
  );
}

function ReviewerAndDate({ client, date }: { client: string; date?: string }) {
  return (
    <Flex justify='space-between'>
      <Flex gridGap='3' align='center'>
        <FaUserCircle size='20' />
        <Text>{client}</Text>
      </Flex>

      <Text fontSize='xs' color='gray.400'>
        {date}
      </Text>
    </Flex>
  );
}

function Description({ description }: { description: string }) {
  return (
    <Text fontSize='sm' lineHeight='7' pl='8'>
      {description}
    </Text>
  );
}
