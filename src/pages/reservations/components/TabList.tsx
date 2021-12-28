import { Tab, TabList as ChakraTabList } from '@chakra-ui/react';

export function TabList() {
  return (
    <ChakraTabList
      width={{
        base: '288px',
        md: '594px',
        lg: '594px',
        xl: '594px',
        '2xl': '975px',
      }}
      m='30px auto'
    >
      <Tab>Following Reservations</Tab>
      <Tab>Past Reservations</Tab>
    </ChakraTabList>
  );
}
