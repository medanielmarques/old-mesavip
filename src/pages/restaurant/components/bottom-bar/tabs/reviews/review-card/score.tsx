import { Box, Flex, Text } from '@chakra-ui/react';
import { useReviewScore } from 'pages/restaurant/hooks';

interface ScoreProps {
  score: number;
}

export function Score({ score }: ScoreProps) {
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
