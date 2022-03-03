import { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';

interface TextsProps {
  total_photos?: number;
}

export function Texts({ total_photos }: TextsProps) {
  const { name } = useContext(RestaurantContext);

  return (
    <Box>
      <Text fontSize='2xl' fontWeight='700'>
        Photos of {name}
      </Text>

      <Text fontSize='md' mt='2' mb='6'>
        Get a feel for the food and the atmosphere at {name}
      </Text>

      <Text fontSize='sm' fontWeight='600' mb='5'>
        {total_photos} pictures, taken by {name}
      </Text>
    </Box>
  );
}
