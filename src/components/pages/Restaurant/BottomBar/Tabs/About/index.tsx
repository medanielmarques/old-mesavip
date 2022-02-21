import { useContext } from 'react';
import {
  Box,
  Divider,
  Flex,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Info } from './Info';
import { Schedule } from './Schedule';

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
        <Divider
          h={{ base: '0', lg: '56' }}
          orientation={useBreakpointValue({
            base: 'horizontal',
            lg: 'vertical',
          })}
        />
        <Schedule />
      </Flex>
    </Box>
  );
}
