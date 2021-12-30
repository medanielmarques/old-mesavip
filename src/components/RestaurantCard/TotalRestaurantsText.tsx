import { Text } from '@chakra-ui/react';

interface TotalRestaurantsTextProps {
  length: number;
}

export function TotalRestaurantsText({ length }: TotalRestaurantsTextProps) {
  return (
    <Text
      fontSize='17px'
      fontWeight='500'
      mb='7'
      ml={[0, 8, 8, 8, 0]}
      // ml={{ sm: 0, md: 8, lg: 0 }}
      textAlign={['center', 'center', 'center', 'left', 'left']}
      // textAlign={{ sm: 'center', md: 'center', lg: 'left' }}
    >
      {length} {length > 1 ? 'restaurants' : 'restaurant'} available
    </Text>
  );
}
