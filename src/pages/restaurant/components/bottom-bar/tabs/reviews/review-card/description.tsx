import { Text } from '@chakra-ui/react';

interface DescriptionProps {
  description: string;
}

export function Description({ description }: DescriptionProps) {
  return (
    <Text fontSize='sm' lineHeight='7' pl='8'>
      {description}
    </Text>
  );
}
