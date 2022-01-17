import { Tab, TabList as ChakraTabList } from '@chakra-ui/react';

export function TabList() {
  return (
    <ChakraTabList gap='10'>
      <Tab fontWeight='600'>About</Tab>
      <Tab fontWeight='600'>Menu</Tab>
      <Tab fontWeight='600'>Reviews</Tab>
      <Tab fontWeight='600'>Photos</Tab>
    </ChakraTabList>
  );
}
