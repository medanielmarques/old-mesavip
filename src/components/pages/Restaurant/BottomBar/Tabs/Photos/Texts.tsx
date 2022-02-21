import { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { RestaurantContext } from 'pages/restaurant/[id]';

interface TextsProps {
  total_photos: number;
}

export function Texts({ total_photos }: TextsProps) {
  const { name } = useContext(RestaurantContext);

  return (
    <Box>
      <Text fontSize='2xl' fontWeight='700'>
        Photos of {name}
      </Text>

      <Text fontSize='md' mt='8px' mb='24px'>
        Get a feel for the food and the atmosphere at {name}
      </Text>

      <Text fontSize='sm' fontWeight='600' mb='20px'>
        {total_photos} pictures, taken by {name}
      </Text>
    </Box>
  );
}
