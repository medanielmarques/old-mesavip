import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useReviewScore } from 'hooks/useReviewScore';
import { RestaurantCardContext } from '..';

export function Score() {
  const { avg_rating } = useContext(RestaurantCardContext);
  const score = useReviewScore(Math.round(avg_rating));

  return (
    <Flex
      align='center'
      justifyContent='center'
      w={{ base: 12, xl: 16 }}
      h={{ base: 6, xl: 8 }}
      bg={score.color}
      color='white'
      borderRadius='2xl'
    >
      <Text fontSize={{ base: 'md', xl: 'lg' }} fontWeight='700'>
        {avg_rating}
      </Text>

      <Text fontSize={{ base: 'xs', xl: 'sm' }} fontWeight='500'>
        /5
      </Text>
    </Flex>
  );
}
