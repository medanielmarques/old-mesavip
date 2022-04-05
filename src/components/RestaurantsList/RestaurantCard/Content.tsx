import { useContext } from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { RestaurantCardContext } from '.';

export function Content() {
  const { name, bairro, culinary } = useContext(RestaurantCardContext);

  return (
    <Stack spacing={{ base: '1', md: '3' }}>
      <Heading as='h3' fontSize={{ base: 'sm', md: 'lg' }}>
        {name}
      </Heading>

      <Text fontSize={{ base: 'xs', md: 'sm' }}>{bairro}</Text>
      <Text fontSize={{ base: 'xs', md: 'sm' }}>{culinary} • $$$</Text>
    </Stack>
  );
}
