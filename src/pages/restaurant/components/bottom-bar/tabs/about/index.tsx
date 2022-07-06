import { Box, Flex, Heading } from '@chakra-ui/react';

import { Info } from './info';
import { Schedule } from './schedule';
import { Divider } from 'core/divider';
import { useRestaurantCtx } from 'pages/restaurant/hooks';

export function About() {
  const { name } = useRestaurantCtx();

  return (
    <Box display='flex' flexDirection='column' alignContent='center' mt='3'>
      <Heading fontSize='2xl' fontWeight='500'>
        About {name}
      </Heading>

      <Flex
        gridGap={{ base: '8', lg: '16' }}
        direction={{ base: 'column', lg: 'row' }}
        mt='12'
      >
        <Info />

        <Divider />

        <Schedule />
      </Flex>
    </Box>
  );
}
