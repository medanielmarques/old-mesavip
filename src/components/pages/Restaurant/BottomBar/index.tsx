import { TabPanels, Tabs } from '@chakra-ui/react';

import { TabList } from './TabList';
import { About } from './Tabs/About';
import { Menu } from './Tabs/Menu';
import { Photos } from './Tabs/Photos';
import { Reviews } from './Tabs/Reviews';

export function BottomBar() {
  return (
    <Tabs isLazy>
      <TabList />

      <TabPanels>
        <About />
        <Menu />
        <Reviews />
        <Photos />
      </TabPanels>
    </Tabs>
  );
}
