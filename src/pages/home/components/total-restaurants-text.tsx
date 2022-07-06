import { Text } from '@chakra-ui/react';

interface TotalRestaurantsTextProps {
  length: number | undefined;
}

export function TotalRestaurantsText({ length }: TotalRestaurantsTextProps) {
  return (
    <Text fontSize='sm' fontWeight='400'>
      {length} {length! > 1 ? 'results' : 'result'}
    </Text>
  );
}
