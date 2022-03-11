import { Text } from '@chakra-ui/react';

interface TotalRestaurantsTextProps {
  length: number;
}

export function TotalRestaurantsText({ length }: TotalRestaurantsTextProps) {
  return (
    <Text fontWeight='500'>
      {length}+ {length > 1 ? 'restaurants' : 'restaurant'} available near you
    </Text>
  );
}
