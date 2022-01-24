import { Flex, Text } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';

interface ReviewerAndDateProps {
  client: string;
  date?: string;
}

export function ReviewerAndDate(props: ReviewerAndDateProps) {
  const { client, date } = props;

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
