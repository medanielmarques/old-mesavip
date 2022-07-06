import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { TabList } from './tab-list';
import { About } from './tabs/about';
import { Photos } from './tabs/photos';
import { Reviews } from './tabs/reviews';

export function BottomBar() {
  return (
    <Tabs colorScheme='red' isLazy lazyBehavior='keepMounted'>
      <TabList />

      <TabPanels>
        <TabPanel>
          <About />
        </TabPanel>

        <TabPanel>
          <Reviews />
        </TabPanel>

        <TabPanel>
          <Photos />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
