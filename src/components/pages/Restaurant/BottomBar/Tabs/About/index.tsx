import { useContext } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

import { Info } from './Info';
import { Schedule } from './Schedule';
import { Divider } from 'components/Divider';

import { RestaurantContext } from 'pages/restaurant/[id]';

export function About() {
  const { name } = useContext(RestaurantContext);

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
