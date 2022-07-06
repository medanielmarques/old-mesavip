import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Score } from './score';
import { RestaurantCardContext } from '..';

export function ReviewInfo() {
  const { total_reviews } = useContext(RestaurantCardContext);

  return (
    <Flex
      align='center'
      w={{ base: '', md: 140 }}
      h={{ base: '', md: 130 }}
      borderLeftStyle='solid'
      borderLeftWidth={{ base: '', md: 'thin' }}
      borderLeftColor={{ base: '', md: 'gray.100' }}
    >
      <Flex
        direction={{ base: 'row', md: 'column' }}
        align='center'
        flexGrow='1'
        gridGap='3'
      >
        <Score />

        <Text fontSize='sm' color='gray.400'>
          {total_reviews} reviews
        </Text>
      </Flex>
    </Flex>
  );
}
