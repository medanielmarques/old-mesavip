import {
  TabPanel,
  TabPanels,
  Tabs,
  Tab,
  TabList as ChakraTabList,
} from '@chakra-ui/react';

import { AboutTab } from './about-tab';
import { ReviewsTab } from './reviews-tab';
import { PhotosTab } from './photos-tab';

export function BottomBar() {
  return (
    <Tabs colorScheme='red' isLazy lazyBehavior='keepMounted'>
      <TabList />

      <TabPanels>
        <TabPanel>
          <AboutTab />
        </TabPanel>

        <TabPanel>
          <ReviewsTab />
        </TabPanel>

        <TabPanel>
          <PhotosTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function TabList() {
  return (
    <ChakraTabList gridGap='10'>
      <Tab fontWeight='600'>About</Tab>
      <Tab fontWeight='600'>Reviews</Tab>
      <Tab fontWeight='600'>Photos</Tab>
    </ChakraTabList>
  );
}
