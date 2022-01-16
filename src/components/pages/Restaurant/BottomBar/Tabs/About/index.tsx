import { useContext } from 'react';
import { Heading, TabPanel, TabPanelProps } from '@chakra-ui/react';

import { RestaurantContext } from 'pages/restaurant/[id]';
import { Info } from './Info';
import { Schedule } from './Schedule';

export function About({ ...rest }: TabPanelProps) {
  const { name } = useContext(RestaurantContext);

  return (
    <TabPanel {...rest}>
      <Heading fontWeight='500' fontSize='25px'>
        About {name}
      </Heading>

      <Info />
      <Schedule />
    </TabPanel>
  );
}
