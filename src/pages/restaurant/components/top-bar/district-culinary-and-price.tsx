import { Flex, Text } from '@chakra-ui/react';
import { useRestaurantCtx } from 'pages/restaurant/hooks';

export function DistrictCulinaryAndPrice() {
  const { address, culinary } = useRestaurantCtx();

  return (
    <Flex direction='column' gridGap='2' fontSize='sm'>
      <Flex gridGap='2'>
        <Text fontWeight='500'>{address?.bairro}</Text>
        <Text> &bull; </Text>
        <Text decoration='underline'>{culinary}</Text>
      </Flex>

      <Text>
        Dishes priced around: <Text as='b'>$29</Text>
      </Text>
    </Flex>
  );
}
