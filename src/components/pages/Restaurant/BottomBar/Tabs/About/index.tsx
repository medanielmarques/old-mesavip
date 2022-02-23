import { useContext } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Info } from './Info';
import { Schedule } from './Schedule';
import { Divider } from 'components/Divider';

export function About() {
  const { name } = useContext(RestaurantContext);

  return (
    <Box mt='3' display='flex' flexDirection='column' alignContent='center'>
      <Heading fontWeight='500' fontSize='25px'>
        About {name}
      </Heading>

      <Flex
        gridGap={{ base: '8', lg: '16' }}
        mt='12'
        direction={{ base: 'column', lg: 'row' }}
      >
        <Info />

        <Divider />

        <Schedule />
      </Flex>
    </Box>
  );
}
