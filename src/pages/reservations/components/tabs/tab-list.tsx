import { Tab, TabList as ChakraTabList } from '@chakra-ui/react';

export function TabList() {
  return (
    <ChakraTabList
      width={{
        base: '288px',
        md: '594px',
        '2xl': '975px',
      }}
      mx="auto"
      my="7"
    >
      <Tab>Following Reservations</Tab>
      <Tab>Past Reservations</Tab>
    </ChakraTabList>
  );
}
