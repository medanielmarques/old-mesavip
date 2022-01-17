import { useContext } from 'react';
import {
  Divider,
  Flex,
  Heading,
  TabPanel,
  TabPanelProps,
} from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Info } from './Info';
import { Schedule } from './Schedule';

export function About({ ...rest }: TabPanelProps) {
  const { name } = useContext(RestaurantContext);

  return (
    <TabPanel {...rest} mt='3'>
      <Heading fontWeight='500' fontSize='25px'>
        About {name}
      </Heading>

      <Flex gap='16' h='56' mt='12'>
        <Info />
        <Divider orientation='vertical' />
        <Schedule />
      </Flex>
    </TabPanel>
  );
}
