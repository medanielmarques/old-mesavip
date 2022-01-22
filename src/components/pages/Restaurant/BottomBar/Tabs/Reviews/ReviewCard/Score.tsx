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
  }, []);

  return (
    <Flex justify='space-between' align='center'>
      <Text color={scoreRank.color} fontSize='2xl'>
        {scoreRank.message}
      </Text>
      <Box
        bg={scoreRank.color}
        color='white'
        align='center'
        w={12}
        h={6}
        borderRadius='xl'
      >
        {score}/5
      </Box>
    </Flex>
  );
}
