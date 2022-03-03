import { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import { reviewScore } from 'utils/reviewScore';

interface ScoreRankData {
  message: string;
  color: string;
}

interface ScoreProps {
  score: number;
}

export function Score({ score }: ScoreProps) {
  const [scoreRank, scoreRankSet] = useState({} as ScoreRankData);

  useEffect(() => {
    scoreRankSet(reviewScore(score));
  }, [score]);

  return (
    <Flex justify='space-between' align='center'>
      <Text fontSize='2xl' color={scoreRank.color}>
        {scoreRank.message}
      </Text>
      <Box
        w={12}
        h={6}
        align='center'
        bg={scoreRank.color}
        color='white'
        borderRadius='xl'
      >
        {score}/5
      </Box>
    </Flex>
  );
}
